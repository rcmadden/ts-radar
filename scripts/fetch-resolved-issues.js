#!/usr/bin/env node
/**
 * fetch-resolved-issues.js
 * 
 * Scrapes Tableau Server release pages from tableau.com/support/releases/server
 * and extracts resolved issues for specified version series.
 * 
 * Usage:
 *   node scripts/fetch-resolved-issues.js [series...] [--output path]
 * 
 * Examples:
 *   node scripts/fetch-resolved-issues.js 2025.1 2025.3 2026.2
 *   node scripts/fetch-resolved-issues.js 2025.1 --output data/resolved-issues.js
 * 
 * Requires: Node.js 18+ (built-in fetch)
 * 
 * Notes:
 * - Some versions publish resolved issues at a -0 URL variant (e.g. 2025.1.17-0).
 *   The script tries the plain URL first, then falls back to -0.
 * - Severity and tags are NOT auto-assigned by this script. After fetching,
 *   you must manually classify each issue in the output data file.
 *   See docs/RUNBOOK.md for classification guidelines.
 */

const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://www.tableau.com/support/releases/server';
// tableau.com sits behind Akamai and rejects node's default User-Agent.
const FETCH_HEADERS = { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/154.0.0.0 Safari/537.36' };

// Parse args. Supports both --output=path and --output path without treating
// the output path as a series name.
const args = process.argv.slice(2);
const series = [];
let outputPath = 'data/resolved-issues.js';
let catalogPath = null;
let auto = false;
let minSeries = '0';
const compare=(a,b)=>{const aa=a.split('.').map(Number),bb=b.split('.').map(Number);return aa[0]-bb[0]||aa[1]-bb[1];};
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--auto') {
    auto = true;
  } else if (args[i] === '--min-series') {
    minSeries = args[++i];
  } else if (args[i] === '--catalog') {
    catalogPath = args[++i];
  } else if (args[i] === '--output') {
    outputPath = args[++i];
  } else if (args[i].startsWith('--output=')) {
    outputPath = args[i].split('=')[1];
  } else if (!args[i].startsWith('--')) {
    series.push(args[i]);
  }
}

if (series.length === 0 && !auto) {
  console.error('Usage: node fetch-resolved-issues.js <series...> [--output path]');
  console.error('Example: node fetch-resolved-issues.js 2025.1 2025.3 2026.2');
  process.exit(1);
}

async function fetchReleasePage(version) {
  const urls = [
    `${BASE_URL}/${version}`,
    `${BASE_URL}/${version}-0`,
  ];
  
  for (const url of urls) {
    try {
      const resp = await fetch(url, { redirect: 'follow', headers: FETCH_HEADERS, signal: AbortSignal.timeout(45000) });
      if (!resp.ok) {
        if(resp.status === 404) continue;
        throw new Error(`HTTP ${resp.status} at ${url}`);
      }
      const html = await resp.text();
      
      // Check if page has resolved issues
      if (!html.includes('Tableau Server')) throw new Error(`Unexpected release page at ${url}`);
      
      // Extract issue table rows. The 2026-era page nests the issue ID and
      // description inside divs within each table cell.
      const issues = [];
      const rows = html.split(/<tr[\s>]/).slice(1);
      for (const row of rows) {
        if (!row.includes('field--name-field-tfs-ids')) continue;
        const idMatch = row.match(/field--name-field-tfs-ids[\s\S]*?<div>\s*(\d+)\s*<\/div>/);
        const descMatch = row.match(/field--name-field-product-known-issue-text[\s\S]*?<p>([\s\S]*?)<\/p>/);
        if (!idMatch || !descMatch) continue;
        const id = idMatch[1];
        const desc = descMatch[1].replace(/<[^>]+>/g, '').replace(/\n+/g, ' ').trim();
        issues.push({ id, description: desc });
      }
      
      // Extract release date if available
      const dateMatch = html.match(/field--name-field-release-date[^>]*>\s*(?:[A-Z][a-z]{2}, )?([A-Z][a-z]+ \d{1,2}, \d{4})/);
      let date = '';
      if (dateMatch) {
        const months = { January: 0, February: 1, March: 2, April: 3, May: 4, June: 5, July: 6, August: 7, September: 8, October: 9, November: 10, December: 11 };
        const parts = dateMatch[1].match(/([A-Z][a-z]+) (\d{1,2}), (\d{4})/);
        if (parts && parts[1] in months) {
          date = `${parts[3]}-${String(months[parts[1]] + 1).padStart(2, '0')}-${String(Number(parts[2])).padStart(2, '0')}`;
        }
      }
      
      return { version:version.replace(/-0$/, ''), url, date, issues };
    } catch (e) {
      throw new Error(`${version}: failed to fetch: ${e.message}`);
    }
  }
  
  throw new Error(`${version}: release page unavailable at both URL variants`);
}

async function fetchSeriesList(seriesName) {
  // The series landing page only links the latest release, so discover all
  // versions in the series from the main releases index.
  const url = `${BASE_URL}`;
  try {
    const resp = await fetch(url, { redirect: 'follow', headers: FETCH_HEADERS, signal: AbortSignal.timeout(45000) });
    if (!resp.ok) throw new Error(`Release index HTTP ${resp.status}`);
    const html = await resp.text();

    // Find version links
    const versions = new Set([seriesName]);
    const escaped = seriesName.replace('.', '\\.');
    const linkRegex = new RegExp(`/support/releases/server/(${escaped}(?:\\.\\d+)*(?:-0)?)(?![\\d.])`, 'g');
    let match;
    while ((match = linkRegex.exec(html)) !== null) {
      versions.add(match[1].replace(/-0$/, ''));
    }
    return [...versions].sort((a, b) => {
      const toTuple = (v) => v.replace(/-0$/, '').split('.').map(Number);
      const av = toTuple(a);
      const bv = toTuple(b);
      for (let i = 0; i < Math.max(av.length, bv.length); i++) {
        const d = (av[i] || 0) - (bv[i] || 0);
        if (d) return d;
      }
      return 0;
    });
  } catch(e) {
    throw new Error(`Cannot discover releases: ${e.message}`);
  }
}

async function main() {
  if(auto){
    const resp=await fetch(BASE_URL,{headers:FETCH_HEADERS,signal:AbortSignal.timeout(45000)});
    if(!resp.ok)throw new Error(`Release index HTTP ${resp.status}; existing data retained`);
    const html=await resp.text();
    const found=[...new Set([...html.matchAll(/\/support\/releases\/server\/(20\d\d\.\d+)(?:\.\d+)?/g)].map(m=>m[1]))];
    if(!found.length)throw new Error('No Server release series found');
    series.push(...found.filter(s=>compare(s,minSeries)>=0).sort(compare));
  }
  console.log(`Tableau Server Release Radar — Resolved Issues Scraper`);
  console.log(`Series: ${series.join(', ')}`);
  console.log(`Output: ${outputPath}`);
  console.log();
  
  const allIssues = [];
  const releases = [];
  
  for (const s of series) {
    console.log(`Fetching series ${s}...`);
    const versions = await fetchSeriesList(s);
    console.log(`  Found ${versions.length} versions: ${versions.join(', ')}`);
    
    for (const v of versions) {
      process.stdout.write(`  ${v}... `);
      const result = await fetchReleasePage(v);
      if(result)releases.push({version:result.version,date:result.date,url:result.url});
      if (result && result.issues.length > 0) {
        console.log(`${result.issues.length} issues`);
        result.issues.forEach(issue => {
          allIssues.push({
            id: issue.id,
            version: result.version,
            date: result.date || '',
            description: issue.description,
            // These fields need manual classification:
            sev: 'TODO',
            tags: ['TODO'],
            title: issue.description,
            note: '',
          });
        });
      } else {
        console.log('no issues (download-only page)');
      }
    }
  }
  
  console.log(`\nTotal: ${allIssues.length} issues across ${series.length} series`);
  if(!allIssues.length||!releases.length)throw new Error('Empty release data; existing data retained');
  if(catalogPath)fs.writeFileSync(catalogPath,'// Server release catalog, including releases without resolved issues.\nconst SERVER_RELEASES = '+JSON.stringify(releases,null,2)+';\n');
  console.log(`\n⚠ ${allIssues.filter(i => i.sev === 'TODO').length} issues need manual severity/tag classification.`);
  console.log(`   See docs/RUNBOOK.md for classification guidelines.`);
  
  // Generate JS data file (template — needs manual editing)
  const js = `// Resolved Issues data — generated ${new Date().toISOString().slice(0, 10)}
// ⚠ Manual classification required: set sev, tags, title, and note for each issue.
// See docs/RUNBOOK.md for guidelines.
//
// sev: critical | high | mod | low | excluded
// tags: perf|render|down|extract|conn|auth|meta|upg|ops|ui|flow|cloud

const ISSUES = ${JSON.stringify(allIssues, null, 2)};

const CURRENT_VERSION = "2025.1.7";
const LATEST_VERSION = "${allIssues.length > 0 ? allIssues[allIssues.length - 1].version : 'unknown'}";
const ENV_NOTES = "TODO: Update with your environment details.";
`;
  
  const fullPath = path.resolve(outputPath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, js);
  console.log(`\nWritten to ${fullPath}`);
}

main().catch(e => { console.error(e); process.exit(1); });
