#!/usr/bin/env python3
"""Local POC server. Admin writes are loopback-only and same-origin until
ADMIN_TOKEN is set, which switches to bearer-token auth for hosted deploys.

Run locally: python3 scripts/serve.py --port 8765
Hosted: ADMIN_TOKEN=<secret> python3 scripts/serve.py --host 0.0.0.0 --port 8000
"""
import argparse
import datetime
import functools
import hmac
import json
import os
import re
import shutil
import subprocess
import tempfile
import threading
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parents[1]
LOCK = threading.RLock()
STATUS = {'running': False, 'sources': {}, 'started': None, 'finished': None}
ADMIN_TOKEN = os.environ.get('ADMIN_TOKEN', '')
REFRESH_COOLDOWN = int(os.environ.get('REFRESH_COOLDOWN_MINUTES', '15')) * 60


def read_config():
    text = (ROOT / 'data/config.js').read_text()
    return json.loads(text.split('const RADAR_CONFIG = ', 1)[1].rstrip().rstrip(';'))


def now():
    return datetime.datetime.now(datetime.timezone.utc).isoformat()


def run(command, env=None):
    result = subprocess.run(command, cwd=ROOT, capture_output=True, text=True, timeout=900, env=env)
    if result.returncode:
        raise RuntimeError((result.stderr or result.stdout or 'Refresh command failed')[-2000:])


def validate_js(path, variable):
    # Only generated local data is evaluated; no client-provided code or paths.
    code = '''const fs=require('fs');const data=new Function(fs.readFileSync(process.argv[1],'utf8')+';return '+process.argv[2])();
    if(!Array.isArray(data)||!data.length)throw Error('Empty dataset');
    const keys=new Set();for(const i of data){const key=(i.v||'')+':'+(i.id||i.version);
    if(keys.has(key)||!(i.id||i.version))throw Error('Invalid/duplicate entry');keys.add(key);}
    '''
    run(['node', '-e', code, str(path), variable])


def refresh(token=None):
    config = read_config()
    env = dict(os.environ)
    if token:
        env['KI_TOKEN'] = token
    current = config['currentVersion']
    series = '.'.join(current.split('.')[:2])
    with tempfile.TemporaryDirectory(prefix='ts-radar-refresh-') as directory:
        temp = Path(directory)
        for source in ('resolved', 'known', 'security'):
            with LOCK:
                STATUS['sources'][source] = {'state': 'running'}
            try:
                if source == 'resolved':
                    raw, merged, catalog = temp/'raw.js', temp/'resolved.js', temp/'releases.js'
                    run(['node', 'scripts/fetch-resolved-issues.js', '--auto', '--min-series', series,
                         '--output', str(raw), '--catalog', str(catalog)])
                    run(['node', 'scripts/merge-resolved-issues.js', 'data/resolved-issues.js', str(raw),
                         '--output', str(merged), '--current-version', current])
                    validate_js(merged, 'ISSUES')
                    validate_js(catalog, 'SERVER_RELEASES')
                    # Preserve earlier releases for upgrades/rollback and CVE checks.
                    code = '''const fs=require('fs');const load=p=>new Function(fs.readFileSync(p,'utf8')+';return SERVER_RELEASES')();
                    const releases=[...new Map([...load('data/releases.js'),...load(process.argv[1])].map(r=>[r.version,r])).values()];
                    fs.writeFileSync(process.argv[1],'const SERVER_RELEASES = '+JSON.stringify(releases,null,2)+';\\n');'''
                    run(['node', '-e', code, str(catalog)])
                    files = [(merged, 'resolved-issues.js'), (catalog, 'releases.js')]
                elif source == 'known':
                    output = temp/'known.js'
                    run(['python3', 'scripts/fetch-known-issues.py', '--current-version', current,
                         '--min-version', series, '--env-notes', config.get('envNotes', ''), '--output', str(output)], env)
                    validate_js(output, 'KNOWN_ISSUES')
                    files = [(output, 'known-issues.js')]
                else:
                    output = temp/'security.js'
                    run(['python3', 'scripts/fetch-security-issues.py', '--output', str(output)])
                    validate_js(output, 'SECURITY_ISSUES')
                    files = [(output, 'security-issues.js')]
                with LOCK:
                    for src, name in files:
                        # Staging inside data guarantees an atomic rename on this filesystem.
                        target = ROOT/'data'/name
                        staging = target.with_suffix('.tmp')
                        shutil.copyfile(src, staging)
                        staging.replace(target)
                    STATUS['sources'][source] = {'state': 'updated', 'updated': now()}
            except Exception as error:
                message = str(error)
                if token:
                    message = message.replace(token, '[redacted]')
                with LOCK:
                    STATUS['sources'][source] = {'state': 'failed', 'error': message, 'retained': True}
        with LOCK:
            STATUS['running'] = False
            STATUS['finished'] = now()
            (ROOT/'data/refresh-status.json').write_text(json.dumps(STATUS, indent=2))


class Handler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store')
        super().end_headers()

    def respond(self, status, body):
        data = json.dumps(body).encode()
        self.send_response(status)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Content-Length', str(len(data)))
        self.end_headers()
        self.wfile.write(data)

    def do_GET(self):
        path = urlparse(self.path).path
        with LOCK:
            if path == '/api/settings':
                return self.respond(200, read_config())
            if path == '/api/refresh':
                return self.respond(200, STATUS)
            # Serve only public app assets; never repository internals/scripts.
            if path not in ('/', '/index.html', '/known-issues.html', '/admin.html', '/before-after.html', '/versions.html') and not (
                    re.fullmatch(r'/data/[a-z-]+\.js', path) or re.fullmatch(r'/js/[a-z-]+\.js', path)
                    or re.fullmatch(r'/assets/before-after/[a-z-]+\.png', path)):
                return self.respond(404, {'error': 'Not found'})
            super().do_GET()

    def do_POST(self):
        if ADMIN_TOKEN:
            # Hosted mode: bearer-token auth replaces the loopback-only guard.
            if not hmac.compare_digest(self.headers.get('Authorization', ''), 'Bearer ' + ADMIN_TOKEN):
                return self.respond(401, {'error': 'Admin token required'})
        else:
            # Reject cross-site requests and DNS rebinding to this unauthenticated POC.
            host = self.headers.get('Host', '')
            origin = self.headers.get('Origin', '')
            if host not in (f'localhost:{self.server.server_port}', f'127.0.0.1:{self.server.server_port}') or (
                    origin and origin != 'http://' + host):
                return self.respond(403, {'error': 'Local same-origin requests only'})
        if self.headers.get('Content-Type', '').split(';')[0] != 'application/json':
            return self.respond(415, {'error': 'JSON required'})
        try:
            length = int(self.headers.get('Content-Length', '0'))
            if length < 1 or length > 16384:
                raise ValueError('Invalid request size')
            body = json.loads(self.rfile.read(length))
            if not isinstance(body, dict):
                raise ValueError('JSON object required')
        except (ValueError, json.JSONDecodeError):
            return self.respond(400, {'error': 'Invalid JSON request'})
        with LOCK:
            if self.path == '/api/settings':
                if STATUS['running']:
                    return self.respond(409, {'error': 'Wait for the refresh to finish before changing versions'})
                version = body.get('currentVersion', '')
                if not isinstance(version, str) or not re.fullmatch(r'20\d{2}\.\d+(?:\.\d+)?', version):
                    return self.respond(400, {'error': 'Use a Tableau version such as 2025.3.8'})
                config = read_config()
                config['currentVersion'] = version
                target = ROOT/'data/config.js'
                staging = target.with_suffix('.tmp')
                staging.write_text('// Shared installation settings.\nconst RADAR_CONFIG = '+json.dumps(config, indent=2)+';\n')
                staging.replace(target)
                return self.respond(200, config)
            if self.path == '/api/refresh':
                if STATUS['running']:
                    return self.respond(409, {'error': 'A refresh is already running'})
                if STATUS['finished'] and REFRESH_COOLDOWN:
                    elapsed = (datetime.datetime.now(datetime.timezone.utc)
                               - datetime.datetime.fromisoformat(STATUS['finished'])).total_seconds()
                    if elapsed < REFRESH_COOLDOWN:
                        minutes = int((REFRESH_COOLDOWN - elapsed) // 60) + 1
                        return self.respond(429, {'error': f'Cooldown active; next refresh in about {minutes} min'})
                token = body.get('token')
                if token is not None and not isinstance(token, str):
                    return self.respond(400, {'error': 'Token must be text'})
                STATUS.update(running=True, sources={}, started=now(), finished=None)
                threading.Thread(target=refresh, args=(token,), daemon=True).start()
                return self.respond(202, STATUS)
            return self.respond(404, {'error': 'Not found'})


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--port', type=int, default=8765)
    parser.add_argument('--host', default='127.0.0.1', help='Bind address; use 0.0.0.0 for hosted deploys')
    args = parser.parse_args()
    saved = ROOT/'data/refresh-status.json'
    if saved.exists():
        STATUS.update(json.loads(saved.read_text()))
        STATUS['running'] = False
    handler = functools.partial(Handler, directory=str(ROOT))
    server = ThreadingHTTPServer((args.host, args.port), handler)
    mode = 'admin token required' if ADMIN_TOKEN else 'loopback-only admin'
    print(f'Tableau Radar: http://localhost:{args.port} · Admin: /admin.html · {mode}', flush=True)
    server.serve_forever()


if __name__ == '__main__':
    main()
