#!/usr/bin/env node
/**
 * merge-resolved-issues.js
 *
 * Merges a freshly scraped file (sev/tags = TODO) into the classified data
 * file. Existing classifications are preserved by (id + version). New issues
 * are auto-classified from their description using the decision tree in
 * docs/RUNBOOK.md and marked in `note` for later review.
 *
 * Usage: node scripts/merge-resolved-issues.js <existing.js> <new.js> [--output path]
 */

const fs = require('fs');
const path = require('path');

function parseArgs(argv) {
  const positional = [];
  let output = null;
  let minSeries = null;
  let currentVersion = null;
  let envNotes = null;
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--output') output = argv[++i];
    else if (argv[i].startsWith('--output=')) output = argv[i].split('=')[1];
    else if (argv[i] === '--min-series') minSeries = argv[++i];
    else if (argv[i].startsWith('--min-series=')) minSeries = argv[i].split('=')[1];
    else if (argv[i] === '--current-version') currentVersion = argv[++i];
    else if (argv[i].startsWith('--current-version=')) currentVersion = argv[i].split('=')[1];
    else if (argv[i] === '--env-notes') envNotes = argv[++i];
    else if (argv[i].startsWith('--env-notes=')) envNotes = argv[i].split('=')[1];
    else positional.push(argv[i]);
  }
  return { positional, output, minSeries, currentVersion, envNotes };
}

function loadData(file) {
  const js = fs.readFileSync(file, 'utf8');
  return new Function(js + '; return {ISSUES, CURRENT_VERSION, LATEST_VERSION, ENV_NOTES};')();
}

const normVer = (v) => v.replace(/-0$/, '');
const verTuple = (v) => normVer(v).split('.').map(Number);
function verCmp(a, b) {
  const av = verTuple(a), bv = verTuple(b);
  for (let i = 0; i < Math.max(av.length, bv.length); i++) {
    const d = (av[i] || 0) - (bv[i] || 0);
    if (d) return d;
  }
  return 0;
}

// Auto-classification following docs/RUNBOOK.md severity decision tree.
// Conservative: anything ambiguous leans "mod" so it stays visible for review.
function classify(description) {
  const d = description.toLowerCase();
  const tags = new Set();
  let sev = 'mod';

  if (/\bflow\b|prep builder|flow output|flowprocessor/.test(d)) tags.add('flow');
  if (/flows?\b|prep builder/.test(d) && !/workflow/.test(d)) tags.add('flow');
  if (/tableau cloud|cloud pod|pod-specific/.test(d) && !/tableau server/.test(d)) tags.add('cloud');

  if (/render|blank screen|fails to load|fail to load|not render|map|dashboard fail|view fail|logicexception|greyed out|grayed out/.test(d)) tags.add('render');
  if (/slow|performance|memory|oom|timeout|time out|hang|stall|regression|slower|latency/.test(d)) tags.add('perf');
  if (/unexpected server error|server error|outage|unavailable|shut down|shuts down|crash|fails to start|not start|service down|jobs fail|job fail|500 error|internal error/.test(d)) tags.add('down');
  if (/extract refresh|incremental refresh|refresh pending|refresh fail|extract fail|hyper/.test(d)) tags.add('extract');
  if (/redshift|snowflake|mysql|postgres|postgresql|oracle|sybase|jdbc|odbc|connector|data source|live connection|published data source|credentials? (fail|error|reset)|can't connect|cannot connect/.test(d)) tags.add('conn');
  if (/saml|oidc|sso|single sign|trusted auth|authentication|identity|sign in|sign-in|sign-on|login|passkey|mfa/.test(d)) tags.add('auth');
  if (/lineage|metadata|graphql|data catalog/.test(d)) tags.add('meta');
  if (/upgrade|upgraded/.test(d)) tags.add('upg');
  if (/tsm|backup|restore|cluster|gateway|multi-node|multinode|node|monitoring|tabcmd|tabsvc|worker/.test(d)) tags.add('ops');
  if (/permissions dialog|icon|tooltip|text box|label|menu|typo|cosmetic|gray|grey/.test(d)) tags.add('ui');

  if (tags.size === 0) tags.add('ui');

  if (tags.has('down') && /data loss|most users|widespread|all users/.test(d)) sev = 'critical';
  else if (tags.has('down')) sev = 'high';
  else if (tags.has('render') || tags.has('auth') || tags.has('upg')) sev = 'high';
  else if (tags.has('perf') && /regression|memory|oom/.test(d)) sev = 'high';
  else if (tags.has('ops') && /tsm|backup|multi-node|gateway|cluster/.test(d)) sev = 'high';
  else if (tags.has('extract') && /fail|pending|block/.test(d)) sev = 'high';
  else if (tags.has('perf')) sev = 'mod';
  else if (tags.has('conn')) sev = 'mod';
  else if (tags.has('ops')) sev = 'mod';
  else if (tags.has('extract')) sev = 'mod';
  else sev = 'low';

  // Environment policy (docs/RUNBOOK.md): no Flows/Prep; exclude Cloud-only.
  const cloudOnly = /cloud only/.test(d)
    || (/tableau cloud/.test(d) && !/tableau server/.test(d) && !/server and cloud/.test(d));
  if (tags.has('flow')) { sev = 'excluded'; }
  else if (cloudOnly || (tags.has('cloud') && tags.size === 1)) { sev = 'excluded'; }

  return { sev, tags: [...tags] };
}

function makeTitle(description) {
  const clean = description.replace(/\s+/g, ' ').trim();
  if (clean.length <= 120) return clean;
  const cut = clean.slice(0, 120);
  return cut.slice(0, cut.lastIndexOf(' ')) + '...';
}

function main() {
  const { positional, output, minSeries, currentVersion, envNotes } = parseArgs(process.argv.slice(2));
  if (positional.length < 2) {
    console.error('Usage: node merge-resolved-issues.js <existing.js> <new.js> [--output path]');
    process.exit(1);
  }
  const [existingFile, newFile] = positional;
  const outPath = output || existingFile;

  const existing = loadData(existingFile);
  const fresh = loadData(newFile);

  let added = 0, preserved = 0;
  const all = new Map();
  const baseline = minSeries || (currentVersion ? currentVersion.split('.').slice(0, 2).join('.') : null);
  const verTuple = (v) => v.split('.').map(Number);
  const atOrAboveBaseline = (v) => !baseline || (() => {
    const bv = verTuple(baseline);
    const vv = verTuple(v);
    for (let i = 0; i < Math.max(bv.length, vv.length); i++) {
      const d = (vv[i] || 0) - (bv[i] || 0);
      if (d) return d >= 0;
    }
    return true;
  })();
  // Scope: baseline floor only (current series and newer, through the latest
  // release). Bumping --current-version moves the floor forward.
  const inScope = atOrAboveBaseline;

  existing.ISSUES.forEach(i => {
    const v = normVer(i.v);
    if (inScope(v)) all.set(`${v}:${i.id}`, i);
  });

  for (const issue of fresh.ISSUES) {
    const v = normVer(issue.v || issue.version);
    if (!inScope(v)) continue;
    const key = `${v}:${issue.id}`;
    if (all.has(key)) { preserved++; continue; }
    const description = issue.description || issue.title || '';
    const { sev, tags } = classify(description);
    all.set(key, {
      id: issue.id,
      v,
      date: issue.date || '',
      sev,
      tags,
      title: issue.title || makeTitle(description),
      note: issue.note || 'Auto-classified from release page description — review.',
    });
    added++;
  }

  const merged = [...all.values()].sort((a, b) => verCmp(a.v, b.v) || String(a.id).localeCompare(String(b.id)));

  const seriesOf = (v) => v.split('.').slice(0, 2).join('.');
  const seriesOrder = [...new Set(merged.map(i => seriesOf(i.v)))].sort(verCmp);

  const lines = [];
  lines.push('// Resolved Issues data — Tableau Server release pages (tableau.com/support/releases/server)');
  lines.push('// Merged from data/resolved-issues-new.js; existing classifications preserved.');
  lines.push('// New issues auto-classified per docs/RUNBOOK.md and marked in note for review.');
  lines.push('//');
  lines.push('// sev: critical | high | mod | low | excluded');
  lines.push('// tags: perf|render|down|extract|conn|auth|meta|upg|ops|ui|flow|cloud');
  lines.push('');
  lines.push('const ISSUES = [');
  for (const s of seriesOrder) {
    lines.push(`  // ===================== ${s} SERIES =====================`);
    for (const i of merged.filter(x => seriesOf(x.v) === s)) {
      const tags = i.tags.map(t => `"${t}"`).join(',');
      const note = i.note.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
      const title = i.title.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
      lines.push(`  { id:"${i.id}", v:"${i.v}", date:"${i.date || ''}", sev:"${i.sev}", tags:[${tags}], title:"${title}", note:"${note}" },`);
    }
    lines.push('');
  }
  lines.push('];');
  lines.push('');
  lines.push(`const CURRENT_VERSION = "${currentVersion || existing.CURRENT_VERSION}";`);
  lines.push(`const LATEST_VERSION = "${merged.length ? merged[merged.length - 1].v : 'unknown'}";`);
  lines.push(`const ENV_NOTES = ${JSON.stringify(envNotes || existing.ENV_NOTES)};`);
  lines.push(`const DATA_GENERATED = "${new Date().toISOString().replace(/\.\d{3}Z$/, "Z")}";`);
  lines.push('');

  fs.writeFileSync(path.resolve(outPath), lines.join('\n'));
  console.log(`Preserved ${preserved} existing classifications; added ${added} new issues.`);
  console.log(`Total: ${merged.length} issues written to ${outPath}`);
}

main();
