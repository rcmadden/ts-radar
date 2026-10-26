/**
 * ts-radar test suite
 * 
 * Run: node tests/test.js
 * 
 * Validates:
 * 1. Data files parse and have required fields
 * 2. HTML pages reference correct data files (no broken script tags)
 * 3. Version sorting is correct
 * 4. Release URLs are valid
 * 5. No duplicate issue IDs per version
 * 6. Known issues filtered to current version baseline
 * 7. Reconcile summary math: open + fixed + closed = total
 * 8. Responsive CSS: all full-width elements have mobile padding overrides
 * 9. No nested script tags
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
let passed = 0;
let failed = 0;
const failures = [];

function assert(condition, message) {
  if (condition) {
    passed++;
  } else {
    failed++;
    failures.push(message);
    console.error(`  ✗ ${message}`);
  }
}

// ---- Test resolved-issues data ----
console.log('\n=== Resolved Issues Data ===');

let ISSUES, CURRENT_VERSION, LATEST_VERSION, ENV_NOTES, DATA_GENERATED;
try {
  const js = fs.readFileSync(path.join(ROOT, 'data/resolved-issues.js'), 'utf8');
  const mod = new Function(js + '; return {ISSUES, CURRENT_VERSION, LATEST_VERSION, ENV_NOTES, DATA_GENERATED};');
  ({ ISSUES, CURRENT_VERSION, LATEST_VERSION, ENV_NOTES, DATA_GENERATED } = mod());
  assert(true, 'data/resolved-issues.js parses');
} catch (e) {
  assert(false, `data/resolved-issues.js parses: ${e.message}`);
  ISSUES = [];
}

assert(Array.isArray(ISSUES) && ISSUES.length > 0, `ISSUES is non-empty array (${ISSUES.length} issues)`);
assert(typeof DATA_GENERATED === 'string' && /^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}Z)?$/.test(DATA_GENERATED), `Resolved data has generation date (${DATA_GENERATED})`);

const VALID_SEVS = ['critical', 'high', 'mod', 'low', 'excluded'];
const VALID_TAGS = ['perf','render','down','extract','conn','auth','meta','upg','ops','ui','flow','cloud'];

ISSUES.forEach((i, idx) => {
  assert(typeof i.id === 'string' && i.id.length > 0, `Issue ${idx}: has id`);
  assert(typeof i.v === 'string' && i.v.length > 0, `Issue ${idx}: has version`);
  assert(typeof i.sev === 'string', `Issue ${idx} (${i.id}): has severity`);
  assert(VALID_SEVS.includes(i.sev), `Issue ${i.id}: severity "${i.sev}" is valid`);
  assert(Array.isArray(i.tags) && i.tags.length > 0, `Issue ${i.id}: has tags`);
  assert(typeof i.title === 'string' && i.title.length > 0, `Issue ${i.id}: has title`);
  assert(typeof i.date === 'string', `Issue ${i.id}: has date`);
  i.tags.forEach(t => {
    assert(VALID_TAGS.includes(t), `Issue ${i.id}: tag "${t}" is valid`);
  });
});

// No duplicate IDs per version
const seen = new Set();
ISSUES.forEach(i => {
  const key = `${i.v}:${i.id}`;
  assert(!seen.has(key), `No duplicate: ${key}`);
  seen.add(key);
});

// Version sorting
function verCmp(a, b) {
  const pa = a.split('.').map(n => parseInt(n, 10) || 0);
  const pb = b.split('.').map(n => parseInt(n, 10) || 0);
  const m = Math.max(pa.length, pb.length);
  for (let i = 0; i < m; i++) {
    const da = pa[i] || 0, db = pb[i] || 0;
    if (da !== db) return da - db;
  }
  return 0;
}
const versions = [...new Set(ISSUES.map(i => i.v))].sort(verCmp);
assert(versions.length > 0, `Has ${versions.length} unique versions`);
for (let i = 0; i < versions.length - 1; i++) {
  assert(verCmp(versions[i], versions[i + 1]) < 0, `Version sort: ${versions[i]} before ${versions[i + 1]}`);
}

// Keep historical releases for upgrade/rollback and vulnerability checks.
const resolvedVersions=[...new Set(ISSUES.map(i=>i.v))];
assert(resolvedVersions.includes(LATEST_VERSION), `Latest ${LATEST_VERSION} present in resolved data`);

// ---- Test known-issues data ----
console.log('\n=== Known Issues Data ===');

let KNOWN_ISSUES, KI_CURRENT_VERSION, KI_TARGET_VERSIONS, KI_MILESTONES, KI_GENERATED;
try {
  const js = fs.readFileSync(path.join(ROOT, 'data/known-issues.js'), 'utf8');
  const mod = new Function(js + '; return {KNOWN_ISSUES, KI_CURRENT_VERSION, KI_TARGET_VERSIONS, KI_MILESTONES, KI_GENERATED};');
  ({ KNOWN_ISSUES, KI_CURRENT_VERSION, KI_TARGET_VERSIONS, KI_MILESTONES, KI_GENERATED } = mod());
  assert(true, 'data/known-issues.js parses');
} catch (e) {
  assert(false, `data/known-issues.js parses: ${e.message}`);
  KNOWN_ISSUES = [];
}

assert(Array.isArray(KNOWN_ISSUES) && KNOWN_ISSUES.length > 0, `KNOWN_ISSUES is non-empty array (${KNOWN_ISSUES.length} issues)`);
assert(typeof KI_GENERATED === 'string' && /^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}Z)?$/.test(KI_GENERATED), `KI data has generation date (${KI_GENERATED})`);

const VALID_STATUS_TYPES = ['open', 'fixed', 'closed'];

KNOWN_ISSUES.forEach((i, idx) => {
  assert(typeof i.id === 'string', `KI ${idx}: has id`);
  assert(typeof i.title === 'string' && i.title.length > 0, `KI ${idx} (${i.id || 'no-id'}): has title`);
  assert(VALID_STATUS_TYPES.includes(i.statusType), `KI ${i.id}: statusType "${i.statusType}" is valid`);
  assert(Array.isArray(i.allVersions), `KI ${i.id}: has allVersions array`);
  assert(typeof i.url === 'string' && i.url.startsWith('http'), `KI ${i.id}: has valid url`);
});

// Preserve historical found-in evidence. Both dashboards scope at read time.
const Radar=require('../js/radar');
const config=new Function(fs.readFileSync(path.join(ROOT,'data/config.js'),'utf8')+';return RADAR_CONFIG')();
const releases=new Function(fs.readFileSync(path.join(ROOT,'data/releases.js'),'utf8')+';return SERVER_RELEASES')();
const ladder=Radar.milestones(config.currentVersion,releases);
assert(ladder[0].version===config.currentVersion,'Shared current version used');
assert(ladder.every(m=>Radar.compare(m.version,config.currentVersion)>=0),'Milestones never precede current');
const kiIDs=new Set();
KNOWN_ISSUES.forEach(i=>{assert(!kiIDs.has(i.id),`Unique known issue ${i.id}`);kiIDs.add(i.id);});

// ---- Test reconcile math ----
console.log('\n=== Reconcile Math ===');

function affectsVersion(issue, prefix) {
  return issue.allVersions.some(v => v.startsWith(prefix));
}

const seriesPrefixes = [...new Set(KNOWN_ISSUES.flatMap(i => i.allVersions.map(v => v.split('.').slice(0, 2).join('.'))))].sort();
seriesPrefixes.forEach(prefix => {
  const all = KNOWN_ISSUES.filter(i => affectsVersion(i, prefix));
  const open = all.filter(i => i.statusType === 'open').length;
  const fixed = all.filter(i => i.statusType === 'fixed').length;
  const closed = all.filter(i => i.statusType === 'closed').length;
  assert(open + fixed + closed === all.length, 
    `Reconcile ${prefix}: open(${open}) + fixed(${fixed}) + closed(${closed}) = total(${all.length})`);
});

// ---- Test HTML structure ----
console.log('\n=== HTML Structure ===');

// index.html
const indexHtml = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
assert(indexHtml.includes('<script src="data/resolved-issues.js"></script>'), 'index.html references resolved-issues.js');
assert(!indexHtml.includes('<script id="dataline"><script'), 'index.html: no nested script tags');
assert(!indexHtml.includes('<script><script'), 'index.html: no script-in-script tags');
assert(indexHtml.includes('id="tbody"'), 'index.html: has tbody element');
assert(indexHtml.includes('@media'), 'index.html: has responsive CSS');
assert(indexHtml.includes('known-issues.html'), 'index.html: links to known-issues.html');

// known-issues.html
const kiHtml = fs.readFileSync(path.join(ROOT, 'known-issues.html'), 'utf8');
assert(kiHtml.includes('<script src="data/known-issues.js"></script>'), 'known-issues.html references known-issues.js');
assert(!kiHtml.includes('<script id="dataline"><script'), 'known-issues.html: no nested script tags');
assert(!kiHtml.includes('<script><script'), 'known-issues.html: no script-in-script tags');
assert(kiHtml.includes('id="tbody"'), 'known-issues.html: has tbody element');
assert(kiHtml.includes('id="reconcileGrid"'), 'known-issues.html: has reconcile grid');
assert(kiHtml.includes('@media'), 'known-issues.html: has responsive CSS');
assert(kiHtml.includes('index.html'), 'known-issues.html: links to index.html');

// versions.html
const versionsHtml = fs.readFileSync(path.join(ROOT, 'versions.html'), 'utf8');
assert(versionsHtml.includes('<script src="data/versions.js"></script>'), 'versions.html references versions.js');
assert(versionsHtml.includes('index.html'), 'versions.html: links to index.html');

// ---- Test responsive CSS ----
console.log('\n=== Responsive CSS ===');

for (const [name, html] of [['index.html', indexHtml], ['known-issues.html', kiHtml], ['versions.html', versionsHtml]]) {
  // All full-width elements should have mobile padding overrides
  assert(html.includes('@media (max-width: 900px)'), `${name}: has 900px breakpoint`);
  assert(html.includes('@media (max-width: 600px)'), `${name}: has 600px breakpoint`);
  
  // Check that header, controls, stats, footer all get mobile padding
  const media900 = html.substring(html.indexOf('@media (max-width: 900px)'), html.indexOf('@media (max-width: 600px)'));
  assert(media900.includes('padding-left: 16px') && media900.includes('padding-right: 16px'),
    `${name}: 900px breakpoint sets consistent horizontal padding`);
  assert(media900.includes('position: static'), 
    `${name}: 900px breakpoint disables sticky positioning`);
  
  const media600 = html.substring(html.indexOf('@media (max-width: 600px)'));
  assert(media600.includes('position: static'), 
    `${name}: 600px breakpoint disables sticky header`);
  assert(media600.includes('flex-direction: column') || media600.includes('flex: 1 1 100%'),
    `${name}: 600px breakpoint stacks controls vertically`);
}

// ---- Test for broken script patterns ----
console.log('\n=== Script Tag Integrity ===');

for (const [name, html] of [['index.html', indexHtml], ['known-issues.html', kiHtml]]) {
  // Count script src tags - should be exactly 1 for data
  const srcMatches = html.match(/<script\s+src="/g) || [];
  assert(srcMatches.length >= 1, `${name}: has at least 1 external script reference`);
  
  // No nested or broken script tags
  assert(!html.match(/<script[^>]*><script/), `${name}: no nested script tags`);
  assert(!html.match(/<script(?![^>]*\bsrc=)[^>]*><\/script>\s*<script(?![^>]*\bsrc=)[^>]*><\/script>/), `${name}: no empty consecutive script tags`);
}

// ---- Summary ----
console.log(`\n=== Results: ${passed} passed, ${failed} failed ===`);
if (failures.length > 0) {
  console.error('\nFailures:');
  failures.forEach(f => console.error(`  - ${f}`));
}

// ---- Test CSS layout integrity ----
console.log('\n=== CSS Layout Integrity ===');

for (const [name, html] of [['index.html', indexHtml], ['known-issues.html', kiHtml]]) {
  // All full-width bar elements must have width:100%
  ['header', '.controls', '.stats', 'footer'].forEach(el => {
    const pat = el.replace('.', '\\.');
    const cssBlock = html.match(new RegExp(pat + '\\{[^}]+\\}'));
    if (cssBlock) {
      assert(cssBlock[0].includes('width:100%'), name + ': ' + el + ' has width:100%');
    }
  });

  // index.html navbar must use class, not inline styles
  if (name === 'index.html') {
    assert(!html.includes('style="display:flex;gap:0;border-bottom'), name + ': navbar uses class not inline styles');
    assert(html.includes('class="navbar"'), name + ': navbar has class="navbar"');
    assert(html.includes('.navbar{'), name + ': .navbar CSS rule exists');
  }

  // .controls sticky top must not be bare 0 (would overlap navbar)
  const controlsCSS = html.match(/\.controls\{[^}]+\}/);
  if (controlsCSS && controlsCSS[0].includes('position:sticky')) {
    const hasVarTop = controlsCSS[0].includes('top:var(');
    const hasZeroTop = controlsCSS[0].includes('top:0') && !hasVarTop;
    assert(!hasZeroTop, name + ': .controls sticky top is not bare 0 (uses variable to avoid navbar overlap)');
  }

  // CSS variables for sticky heights
  assert(html.includes('--navbar-h:'), name + ': has --navbar-h CSS variable');

  // Responsive: all bar elements in 900px media query
  const media900 = html.substring(html.indexOf('@media (max-width: 900px)'), html.indexOf('@media (max-width: 600px)'));
  ['header', '.controls', '.stats', 'footer', '.navbar'].forEach(el => {
    assert(media900.includes(el), name + ': 900px breakpoint includes ' + el + ' padding override');
  });
}

// ---- Navbar consistency between pages ----
console.log('\n=== Navbar Consistency ===');
assert(indexHtml.includes('.navbar{') && kiHtml.includes('.navbar{'), 'Both pages have .navbar CSS class');
assert(indexHtml.includes('class="navbar"') && kiHtml.includes('class="navbar"'), 'Both pages use class="navbar"');
assert(indexHtml.includes('href="known-issues.html"') && kiHtml.includes('href="index.html"'), 'Both pages link to each other');
assert(indexHtml.includes('href="versions.html"') && kiHtml.includes('href="versions.html"'), 'Dashboards link to versions.html');
assert(versionsHtml.includes('href="index.html"') && versionsHtml.includes('href="known-issues.html"'), 'versions.html links to both dashboards');

// ---- Summary ----
console.log('\n=== Results: ' + passed + ' passed, ' + failed + ' failed ===');
if (failures.length > 0) {
  console.error('\nFailures:');
  failures.forEach(f => console.error('  - ' + f));
}
process.exit(failed > 0 ? 1 : 0);
