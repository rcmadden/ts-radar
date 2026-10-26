import importlib.util
import json
import tempfile
import threading
import unittest
import urllib.error
import urllib.request
from http.server import ThreadingHTTPServer
from pathlib import Path
from unittest.mock import patch
import functools

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location('radar_server', ROOT/'scripts/serve.py')
server = importlib.util.module_from_spec(spec)
spec.loader.exec_module(server)
fetch_spec = importlib.util.spec_from_file_location('known_fetch', ROOT/'scripts/fetch-known-issues.py')
known = importlib.util.module_from_spec(fetch_spec)
fetch_spec.loader.exec_module(known)
security_spec = importlib.util.spec_from_file_location('security_fetch', ROOT/'scripts/fetch-security-issues.py')
security = importlib.util.module_from_spec(security_spec)
security_spec.loader.exec_module(security)


class LocalAdminTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.root = Path(self.temp.name)
        (self.root/'data').mkdir()
        (self.root/'data/config.js').write_text('const RADAR_CONFIG = {"currentVersion":"2025.3.8"};')
        self.original_root = server.ROOT
        server.ROOT = self.root
        server.STATUS.update(running=False, sources={}, started=None, finished=None)
        self.http = ThreadingHTTPServer(('127.0.0.1', 0), functools.partial(server.Handler, directory=str(self.root)))
        self.thread = threading.Thread(target=self.http.serve_forever, daemon=True)
        self.thread.start()
        self.base = f'http://127.0.0.1:{self.http.server_port}'

    def tearDown(self):
        self.http.shutdown()
        self.http.server_close()
        server.ROOT = self.original_root
        self.temp.cleanup()

    def request(self, route, body=None, origin=None):
        request = urllib.request.Request(self.base+route, data=None if body is None else json.dumps(body).encode(),
                                        headers={'Content-Type': 'application/json', 'Origin': origin or self.base})
        try:
            with urllib.request.urlopen(request) as response:
                return response.status, json.load(response)
        except urllib.error.HTTPError as error:
            with error:
                return error.code, json.load(error)

    def test_save_shared_version_and_reload(self):
        status, data = self.request('/api/settings', {'currentVersion': '2026.2.4'})
        self.assertEqual(status, 200)
        self.assertEqual(self.request('/api/settings')[1]['currentVersion'], '2026.2.4')
        self.assertEqual(server.read_config()['currentVersion'], '2026.2.4')
        self.assertEqual(self.request('/api/settings', {'currentVersion': 'invalid'})[0], 400)
        self.assertEqual(server.read_config()['currentVersion'], '2026.2.4')

    def test_cross_origin_and_parallel_writes_rejected(self):
        self.assertEqual(self.request('/api/settings', {'currentVersion': '2026.2.4'}, 'https://example.com')[0], 403)
        server.STATUS['running'] = True
        self.assertEqual(self.request('/api/refresh', {})[0], 409)
        self.assertEqual(self.request('/api/settings', {'currentVersion': '2026.2.4'})[0], 409)
        self.assertEqual(self.request('/.git/config')[0], 404)

    def test_failed_refresh_retains_every_dataset(self):
        for name in ('resolved-issues.js', 'known-issues.js', 'security-issues.js'):
            (self.root/'data'/name).write_text('existing data')
        with patch.object(server, 'run', side_effect=RuntimeError('upstream unavailable')):
            server.refresh()
        self.assertFalse(server.STATUS['running'])
        self.assertEqual(len(server.STATUS['sources']), 3)
        for result in server.STATUS['sources'].values():
            self.assertEqual(result['state'], 'failed')
            self.assertTrue(result['retained'])
        for name in ('resolved-issues.js', 'known-issues.js', 'security-issues.js'):
            self.assertEqual((self.root/'data'/name).read_text(), 'existing data')

    def test_old_and_unspecified_known_issues_preserved(self):
        issues = [{'allVersions': ['2024.2'], 'statusType': 'open'}, {'allVersions': [], 'statusType': 'open'}]
        self.assertEqual(known.filter_issues(issues, '2025.3', {'2025.3.8'}), issues)

    def test_target_ladder_shared_by_issues_and_server_versions(self):
        issues = [{'allVersions': ['2025.3.1', '2025.3.11', '2026.2', '2024.2']}]
        self.assertEqual(known.derive_target_versions(issues, '2025.3.8'),
                         ['2025.3.11', '2026.2'])
        server = ['2024.2', '2025.3', '2025.3.8', '2025.3.11', '2026.2.4']
        self.assertEqual(known.derive_targets_from_server(server, '2025.3.8'),
                         ['2025.3.11', '2026.2.4'])
        self.assertEqual(known.derive_targets_from_server(server, '2025.3.11'),
                         ['2026.2.4'])

    def test_dependency_advisory_survives_keyword_refresh(self):
        advisories = json.loads((ROOT/'data/vendor-advisories.json').read_text())
        items = security.merge_vendor([], advisories, {'vulnerabilities': []})
        self.assertEqual(len(items), 1)
        self.assertEqual(items[0]['id'], 'CVE-2026-111943')
        self.assertIn('2025.3.11', items[0]['fixedVersions'])
        self.assertTrue(items[0]['requiredAction'])
        duplicate = {'id': 'CVE-2026-111943', 'affectedRanges': [{'endExcluding': '1.26.10'}]}
        merged = security.merge_vendor([duplicate], advisories, {'vulnerabilities': []})
        self.assertEqual(len(merged), 1)
        self.assertEqual(merged[0]['affectedRanges'], advisories[0]['affectedRanges'])


if __name__ == '__main__':
    unittest.main()
