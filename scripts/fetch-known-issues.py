#!/usr/bin/env python3
"""
fetch-known-issues.py

Fetches Tableau Server known issues from Salesforce Help via the Coveo search API.

Usage:
  python3 scripts/fetch-known-issues.py [--output path] [--min-version 2025.1.7] [--category "Tableau Server"]

Requirements:
  - Python 3.8+
  - requests (pip install requests) or urllib (built-in)

Notes:
  - The Coveo API token is extracted from the live page at help.salesforce.com/s/issues.
    If the token expires, open the page in a browser and re-run the script.
  - The script fetches ALL known issues for the specified category, then filters
    to those found in versions >= --min-version (plus open issues from earlier
    in the current series).
  - Output is a JS data file ready for use by known-issues.html.
"""

import argparse
import json
import re
import sys
import os
import html as html_lib
import urllib.request
import urllib.error
from pathlib import Path

def get_coveo_token():
    """Extract the Coveo API token from the Salesforce Help page."""
    print("Fetching Coveo API token from help.salesforce.com...", file=sys.stderr)
    
    req = urllib.request.Request(
        'https://help.salesforce.com/s/issues',
        headers={'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)'}
    )
    
    with urllib.request.urlopen(req, timeout=45) as resp:
        html = resp.read().decode('utf-8', errors='replace')
    
    # The token is embedded in the page's JavaScript
    # Look for the Coveo access token pattern
    token_match = re.search(r'eyJ[a-zA-Z0-9_-]+\.eyJ[a-zA-Z0-9_-]+\.[a-zA-Z0-9_-]+', html)
    if not token_match:
        print("ERROR: Could not find Coveo API token in page HTML.", file=sys.stderr)
        print("Try opening https://help.salesforce.com/s/issues in a browser first.", file=sys.stderr)
        sys.exit(1)
    
    token = token_match.group(0)
    print(f"Token found (expires in token payload).", file=sys.stderr)
    return token


def fetch_known_issues(token, category="Tableau Server"):
    """Fetch all known issues for a category from the Coveo API."""
    
    all_issues = []
    batch = 0
    total = None
    
    # The Coveo query filter for the category
    # Adjust the filter syntax as needed for your Salesforce org
    aq_filter = f'(@objecttype==(Known_Issue__c)) (@sfcategoryfull=(Tableau|{category}))'
    
    while True:
        body = json.dumps({
            "q": "",
            "aq": aq_filter,
            "numberOfResults": 100,
            "firstResult": batch * 100,
            "sortCriteria": "relevancy"
        }).encode()
        
        req = urllib.request.Request(
            'https://platform.cloud.coveo.com/rest/search/v2?organizationId=org62salesforce',
            data=body,
            headers={
                'Authorization': f'Bearer {token}',
                'Content-Type': 'application/json'
            }
        )
        
        try:
            with urllib.request.urlopen(req, timeout=60) as resp:
                data = json.load(resp)
        except urllib.error.HTTPError as e:
            print(f"API error: {e.code} {e.reason}", file=sys.stderr)
            if e.code == 401:
                print("Token may have expired. Re-run the script to get a fresh token.", file=sys.stderr)
            sys.exit(1)
        
        results = data.get('results', [])
        if total is None:
            total = data.get('totalCount', 0)
            print(f"Total known issues for {category}: {total}", file=sys.stderr)
        
        for r in results:
            raw = r.get('raw', {})
            found_in = raw.get('sffound_in_version_external__c', '') or ''
            versions = re.findall(r'20\d\d\.\d+(?:\.\d+)?', found_in)
            
            status = raw.get('sfstatus__c', '') or 'Unknown'
            if status in ('In Review', 'Acknowledged', 'Solution in Progress'):
                status_type = 'open'
            elif status == 'Solution Deployed':
                status_type = 'fixed'
            elif status in ('Closed', 'No Fix', 'Not Reproducible', 'Duplicate'):
                status_type = 'closed'
            else:
                status_type = 'open'
            
            summary = html_lib.unescape(re.sub(r'<[^>]+>', '', raw.get('sfsummary__c', '') or ''))[:500]
            
            all_issues.append({
                'id': raw.get('sfid', ''),
                'name': raw.get('sfname__c', ''),
                'title': raw.get('sfsubject__c', r.get('title', '')),
                'status': status,
                'statusType': status_type,
                'foundIn': found_in,
                'primaryVer': versions[0] if versions else '',
                'allVersions': versions,
                'reports': int(raw.get('sfreporting_user_count__c', 0) or 0),
                'workId': raw.get('sfwork_id__c', ''),
                'url': raw.get('publicurl', ''),
                'summary': summary,
                'created': raw.get('sfcreateddate', 0),
                'updated': raw.get('sflastmodifieddate', 0),
            })
        
        batch += 1
        print(f"  Batch {batch}: {len(all_issues)}/{total}", file=sys.stderr)
        
        if len(results) < 100 or len(all_issues) >= total:
            break
    
    return all_issues


def load_server_versions(path):
    """Extract the set of Server release versions from the resolved-issues data file."""
    try:
        text = Path(path).read_text()
    except OSError:
        return None
    return set(re.findall(r'v:"(\d+(?:\.\d+)+)"', text))


def filter_issues(issues, min_version, server_versions=None):
    """Preserve the Server-category source evidence; scope in the dashboard.

    Arguments retained for compatibility with existing refresh commands.
    """
    # Salesforce's Server category is the scope, not an incomplete list of
    # releases that happen to contain fixes. Preserve old and unspecified
    # found-in evidence: open issues may still affect the installed build.
    # The dashboard scopes history using current settings at read time.
    return issues


def _ver_num(v):
    """Numeric comparison key for dotted version strings."""
    try:
        return tuple(int(p) for p in v.split('.'))
    except (ValueError, AttributeError):
        return (0,)


def latest_by_series(versions, min_series=None):
    """Newest version within each series; optionally only series at or above min_series."""
    floor = _ver_num(min_series) if min_series else None
    by_series = {}
    for v in versions:
        series = '.'.join(v.split('.')[:2])
        if floor is not None and _ver_num(series) < floor:
            continue
        by_series[series] = max(by_series.get(series, '0'), v, key=_ver_num)
    return by_series


def _target_ladder(by_series, current_version):
    """First the latest patch of the current series (the upgrade target), then
    the latest patch of each later series (stable and latest releases)."""
    current_series = '.'.join(current_version.split('.')[:2])
    targets = []
    for series in sorted(by_series, key=_ver_num):
        latest = by_series[series]
        if _ver_num(series) > _ver_num(current_series) or _ver_num(latest) > _ver_num(current_version):
            targets.append(latest)
    return targets


def derive_target_versions(issues, current_version):
    """Milestone versions from the current version forward."""
    versions = [v for issue in issues for v in issue['allVersions']]
    return _target_ladder(latest_by_series(versions, '.'.join(current_version.split('.')[:2])), current_version)


def derive_targets_from_server(server_versions, current_version):
    """Milestone ladder from the scraped Server release list."""
    return _target_ladder(latest_by_series(server_versions, '.'.join(current_version.split('.')[:2])), current_version)


def build_milestones(target_versions, server_versions, current_version):
    """Attach roles to the milestone ladder: target (current series patch),
    stable (newest series at patch .4+), latest (final entry), future (other)."""
    stable_series = None
    if server_versions:
        by_series = latest_by_series(server_versions)
        stable = [s for s, v in by_series.items()
                  if (int(v.split('.')[2]) if len(v.split('.')) > 2 else 0) >= 4]
        stable_series = max(stable, key=_ver_num) if stable else None

    current_series = '.'.join(current_version.split('.')[:2])
    milestones = []
    for idx, v in enumerate(target_versions):
        series = '.'.join(v.split('.')[:2])
        if series == current_series:
            role = 'target'
        elif stable_series and series == stable_series:
            role = 'stable'
        elif idx == len(target_versions) - 1:
            role = 'latest'
        else:
            role = 'future'
        milestones.append({'role': role, 'version': v})
    return milestones


def generate_js(issues, output_path, current_version, env_notes, target_versions, milestones):
    """Generate the JS data file."""
    js_data = json.dumps(issues, ensure_ascii=True, indent=2)
    gen_date = __import__('datetime').datetime.now(__import__('datetime').timezone.utc).strftime('%Y-%m-%dT%H:%M:%SZ')
    
    output = f"""// Known Issues data — sourced from Salesforce Help (help.salesforce.com/s/issues)
// {len(issues)} Tableau Server known issues (full found-in evidence retained)
// Generated: {gen_date}

const KNOWN_ISSUES = {js_data};

const KI_CURRENT_VERSION = "{current_version}";
const KI_TARGET_VERSIONS = {json.dumps(target_versions)};
const KI_MILESTONES = {json.dumps(milestones)};
const KI_ENV_NOTES = {json.dumps(env_notes)};
const KI_GENERATED = "{gen_date}";
"""
    
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(output)
    print(f"\nWritten {len(issues)} issues to {output_path}", file=sys.stderr)


def main():
    parser = argparse.ArgumentParser(description='Fetch Tableau Server known issues from Salesforce Help')
    parser.add_argument('--output', default='data/known-issues.js', help='Output JS file path')
    parser.add_argument('--min-version', default='2025.3', help='Minimum version to include (series or full version)')
    parser.add_argument('--current-version', default=None, help='Current version recorded in the data file (defaults to --min-version)')
    parser.add_argument('--target-versions', default='auto', help='Comma-separated target versions, or "auto" to derive the latest version of each series above the current one')
    parser.add_argument('--resolved-data', default='data/resolved-issues.js', help='Resolved-issues data file used as the source of truth for Server versions (empty string to disable)')
    parser.add_argument('--category', default='Tableau Server', help='Salesforce category filter')
    parser.add_argument('--env-notes', default='Update with your environment details.', help='Environment notes string')
    parser.add_argument('--token', default=None, help='Coveo access token. When omitted, the script tries to extract one from the page HTML; if that fails, load help.salesforce.com/s/issues in a browser, run any search, and copy the access_token query parameter from a platform.cloud.coveo.com request (see docs/RUNBOOK.md).')
    args = parser.parse_args()

    token = args.token or os.environ.get('KI_TOKEN') or get_coveo_token()
    issues = fetch_known_issues(token, args.category)
    if not issues or any(not i['id'] or not i['title'] for i in issues):
        raise ValueError('Missing known issue data or required fields; existing data retained.')
    if len({i['id'] for i in issues}) != len(issues):
        raise ValueError('Duplicate known issue IDs; existing data retained.')
    print(f"\nFetched {len(issues)} total issues", file=sys.stderr)
    
    current_version = args.current_version or args.min_version
    server_versions = load_server_versions(args.resolved_data) if args.resolved_data else None
    if server_versions:
        print(f"Loaded {len(server_versions)} Server versions from {args.resolved_data}", file=sys.stderr)
    filtered = filter_issues(issues, args.min_version, server_versions)
    print(f"Preserved {len(filtered)} Server-category issues, including older/unversioned evidence", file=sys.stderr)
    
    if args.target_versions == 'auto':
        if server_versions:
            target_versions = derive_targets_from_server(server_versions, current_version)
        else:
            target_versions = derive_target_versions(filtered, current_version)
    else:
        target_versions = [v.strip() for v in args.target_versions.split(',') if v.strip()]

    milestones = build_milestones(target_versions, server_versions, current_version)
    generate_js(filtered, args.output, current_version, args.env_notes, target_versions, milestones)


if __name__ == '__main__':
    main()
