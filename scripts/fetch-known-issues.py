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
    
    with urllib.request.urlopen(req) as resp:
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
            with urllib.request.urlopen(req) as resp:
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
            elif status in ('Solution Deployed', 'Solution Scheduled', 'Solution Deploying'):
                status_type = 'fixed'
            else:
                status_type = 'closed'
            
            summary = re.sub(r'<[^>]+>', '', raw.get('sfsummary__c', '') or '')[:300]
            
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


def filter_issues(issues, min_version):
    """Filter to issues from min_version onwards, plus open issues from the same series."""
    
    def ver_num(v):
        parts = (v or "").split('.')
        try:
            return tuple(int(p) for p in parts)
        except:
            return (0,)
    
    min_ver = ver_num(min_version)
    series_prefix = '.'.join(min_version.split('.')[:2])
    
    filtered = []
    for issue in issues:
        versions = issue['allVersions']
        if not versions:
            continue
        
        has_modern = any(ver_num(v) >= min_ver or v.startswith('2025.3') or v.startswith('2026') for v in versions)
        if has_modern:
            filtered.append(issue)
            continue
        
        # Keep open issues from the current series even if found before min_version
        is_early = all(v.startswith(series_prefix) and ver_num(v) < min_ver for v in versions) and any(v.startswith(series_prefix) for v in versions)
        if is_early and issue['statusType'] == 'open':
            filtered.append(issue)
    
    return filtered


def generate_js(issues, output_path, current_version, env_notes):
    """Generate the JS data file."""
    js_data = json.dumps(issues, ensure_ascii=True, indent=2)
    
    output = f"""// Known Issues data — sourced from Salesforce Help (help.salesforce.com/s/issues)
// {len(issues)} Tableau Server known issues (filtered to {current_version}+)
// Generated: {__import__('datetime').datetime.now().strftime('%Y-%m-%d')}

const KNOWN_ISSUES = {js_data};

const KI_CURRENT_VERSION = "{current_version}";
const KI_TARGET_VERSIONS = ["2025.3.8", "2026.2.1"];
const ENV_NOTES = "{env_notes}";
"""
    
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(output)
    print(f"\nWritten {len(issues)} issues to {output_path}", file=sys.stderr)


def main():
    parser = argparse.ArgumentParser(description='Fetch Tableau Server known issues from Salesforce Help')
    parser.add_argument('--output', default='data/known-issues.js', help='Output JS file path')
    parser.add_argument('--min-version', default='2025.1.7', help='Minimum version to include')
    parser.add_argument('--category', default='Tableau Server', help='Salesforce category filter')
    parser.add_argument('--env-notes', default='Update with your environment details.', help='Environment notes string')
    args = parser.parse_args()
    
    token = get_coveo_token()
    issues = fetch_known_issues(token, args.category)
    print(f"\nFetched {len(issues)} total issues", file=sys.stderr)
    
    filtered = filter_issues(issues, args.min_version)
    print(f"Filtered to {len(filtered)} issues (>= {args.min_version} + open from current series)", file=sys.stderr)
    
    generate_js(filtered, args.output, args.min_version, args.env_notes)


if __name__ == '__main__':
    main()
