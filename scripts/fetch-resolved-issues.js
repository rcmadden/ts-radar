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

// Parse args
const args = process.argv.slice(2);
const series = args.filter(a => !a.startsWith('--'));
const outputArg = args.find(a => a.startsWith('--output'));
const outputPath = outputArg ? outputArg.split('=')[1] || args[args.indexOf(outputArg) + 1] : 'data/resolved-issues.js';

if (series.length === 0) {
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
      const resp = await fetch(url, { redirect: 'follow' });
      if (!resp.ok) continue;
      const html = await resp.text();
      
      // Check if page has resolved issues
      if (!html.includes('Resolved Issues')) {
        console.warn(`  ${version}: no Resolved Issues section at ${url}`);
        continue;
      }
      
      // Extract issue table rows using regex
      const issues = [];
      const rowRegex = /<tr[^>]*>\s*<td[^>]*>(\d+)<\/td>\s*<td[^>]*>([\s\S]*?)<\/td>/g;
      let match;
      while ((match = rowRegex.exec(html)) !== null) {
        const id = match[1];
        const desc = match[2].replace(/<[^>]+>/g, '').replace(/\n+/g, ' ').trim();
        issues.push({ id, description: desc });
      }
      
      // Extract release date if available
      const dateMatch = html.match(/Released\s+([A-Z][a-z]+ \d+,?\s*\d{4})/);
      const date = dateMatch ? dateMatch[1] : '';
      
      return { version, url, date, issues };
    } catch (e) {
      console.warn(`  ${version}: failed to fetch ${url}: ${e.message}`);
    }
  }
  
  console.warn(`  ${version}: no resolved issues found at any URL variant`);
  return null;
}

async function fetchSeriesList(seriesName) {
  // Get all versions in a series from the series page
  const url = `${BASE_URL}/${seriesName}`;
  try {
    const resp = await fetch(url, { redirect: 'follow' });
    if (!resp.ok) return [seriesName]; // just use the series itself
    const html = await resp.text();
    
    // Find version links
    const versions = new Set([seriesName]);
    const linkRegex = new RegExp(`/releases/server/(${seriesName.replace('.', '\\.')}\\d*)`, 'g');
    let match;
    while ((match = linkRegex.exec(html)) !== null) {
      versions.add(match[1]);
    }
    return [...versions].sort();
  } catch {
    return [seriesName];
  }
}

async function main() {
  console.log(`Tableau Server Release Radar — Resolved Issues Scraper`);
  console.log(`Series: ${series.join(', ')}`);
  console.log(`Output: ${outputPath}`);
  console.log();
  
  const allIssues = [];
  
  for (const s of series) {
    console.log(`Fetching series ${s}...`);
    const versions = await fetchSeriesList(s);
    console.log(`  Found ${versions.length} versions: ${versions.join(', ')}`);
    
    for (const v of versions) {
      process.stdout.write(`  ${v}... `);
      const result = await fetchReleasePage(v);
      if (result && result.issues.length > 0) {
        console.log(`${result.issues.length} issues`);
        result.issues.forEach(issue => {
          allIssues.push({
            id: issue.id,
            version: v,
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
const LATEST_VERSION = "${allIssues.length > 0 ? allIssues[allIssues.length - 1].version : 'unknown'}';
const ENV_NOTES = "TODO: Update with your environment details.";
`;
  
  const fullPath = path.resolve(outputPath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, js);
  console.log(`\nWritten to ${fullPath}`);
}

main().catch(e => { console.error(e); process.exit(1); });
