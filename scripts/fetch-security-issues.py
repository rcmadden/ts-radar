#!/usr/bin/env python3
"""Fetch NVD's Tableau Server CVEs, preserving exact inclusive/exclusive bounds."""
import argparse
import datetime
import json
import urllib.request
from pathlib import Path

URL = 'https://services.nvd.nist.gov/rest/json/cves/2.0?keywordSearch=Tableau%20Server&resultsPerPage=100'
VENDOR_DATA = Path(__file__).resolve().parents[1] / 'data/vendor-advisories.json'


def merge_vendor(issues, vendor_advisories, cve_data):
    """Keep vendor product mappings for dependency CVEs outside keyword results.

    NVD's Go versions must never be interpreted as Tableau Server versions.
    Vendor evidence remains authoritative for Tableau build coverage.
    """
    by_id = {issue['id']: issue for issue in issues}
    upstream = {entry['cve']['id']: entry for entry in cve_data.get('vulnerabilities', [])}
    for advisory in vendor_advisories:
        record = upstream.get(advisory['id'])
        metadata = normalize({'vulnerabilities': [record]})[0] if record else {}
        issue = {**metadata, **advisory}
        issue['references'] = list(dict.fromkeys(advisory.get('references', []) + metadata.get('references', [])))
        by_id[advisory['id']] = issue
    return list(by_id.values())


def normalize(data):
    issues = []
    for entry in data['vulnerabilities']:
        cve = entry['cve']
        if cve.get('vulnStatus') == 'Rejected':
            continue
        ranges = []
        for config in cve.get('configurations', []):
            for node in config.get('nodes', []):
                if node.get('negate'):
                    continue
                for match in node.get('cpeMatch', []):
                    parts = match['criteria'].split(':')
                    if not match.get('vulnerable') or parts[4] != 'tableau_server':
                        continue
                    bounds = {key[7:8].lower() + key[8:]: value for key, value in match.items()
                              if key.startswith('version')}
                    if parts[5] not in ('*', '-'):
                        bounds['version'] = parts[5]
                    if bounds:
                        ranges.append(bounds)
        description = next((d['value'] for d in cve['descriptions'] if d['lang'] == 'en'), '')
        fixes = sorted(set(r['endExcluding'] for r in ranges if 'endExcluding' in r))
        issues.append({
            'id': cve['id'], 'name': cve['id'], 'source': 'NVD',
            'title': cve['id'] + ' — ' + description.split('.This issue')[0].split('. This issue')[0],
            'summary': description, 'status': 'Published security advisory',
            'statusType': 'open' if ranges else 'unknown',
            'allVersions': list(dict.fromkeys(r.get('startIncluding', r.get('version', ''))
                                            for r in ranges if r.get('startIncluding') or r.get('version'))),
            'foundIn': '; '.join(
                r.get('version') or ((r.get('startIncluding') or r.get('startExcluding') or 'Earlier releases')
                + (' to before ' + r['endExcluding'] if 'endExcluding' in r else
                   ' through ' + r['endIncluding'] if 'endIncluding' in r else ' and later')) for r in ranges),
            **({'affectedRanges': ranges} if ranges else {}),
            'fixedVersions': fixes, 'reports': 0,
            'url': 'https://nvd.nist.gov/vuln/detail/' + cve['id'],
            'references': [r['url'] for r in cve.get('references', [])],
            'created': int(datetime.datetime.fromisoformat(cve['published']).replace(tzinfo=datetime.timezone.utc).timestamp()*1000),
            'updated': int(datetime.datetime.fromisoformat(cve['lastModified']).replace(tzinfo=datetime.timezone.utc).timestamp()*1000),
        })
    return issues


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--output', default='data/security-issues.js')
    parser.add_argument('--input', help='Optional saved NVD response for offline validation')
    args = parser.parse_args()
    if args.input:
        data = json.loads(Path(args.input).read_text())
    else:
        with urllib.request.urlopen(URL, timeout=60) as response:
            data = json.load(response)
    if data.get('totalResults', 0) > len(data.get('vulnerabilities', [])):
        raise ValueError('NVD response incomplete; pagination required. Existing data retained.')
    issues = normalize(data)
    if not issues:
        raise ValueError('NVD returned no Tableau Server CVEs; existing data retained.')
    advisories = json.loads(VENDOR_DATA.read_text())
    # Explicit lookups catch library CVEs whose descriptions omit Tableau.
    if not args.input:
        ids = {entry['cve']['id'] for entry in data['vulnerabilities']}
        for advisory in advisories:
            if advisory['id'] not in ids:
                cve_id = advisory['id']
                if not __import__('re').fullmatch(r'CVE-\d{4}-\d{4,}', cve_id):
                    raise ValueError('Invalid vendor advisory CVE ID')
                with urllib.request.urlopen('https://services.nvd.nist.gov/rest/json/cves/2.0?cveId=' + cve_id, timeout=60) as response:
                    explicit = json.load(response)
                if explicit.get('totalResults') != 1:
                    raise ValueError(f'NVD could not verify {cve_id}; existing security data retained.')
                data['vulnerabilities'].extend(explicit['vulnerabilities'])
    issues = merge_vendor(issues, advisories, data)
    output = '// Security advisories — NVD, including Salesforce vendor references.\n'
    output += 'const SECURITY_ISSUES = ' + json.dumps(issues, indent=2) + ';\n'
    output += 'const SECURITY_GENERATED = ' + json.dumps(datetime.datetime.now(datetime.timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ')) + ';\n'
    Path(args.output).write_text(output)
    print(f'Validated {len(issues)} Tableau Server CVEs; wrote {args.output}')


if __name__ == '__main__':
    main()
