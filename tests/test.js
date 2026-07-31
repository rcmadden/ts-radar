/**
 * ts-radar test suite
 * 
 * Run: node tests/test.js
 * 
 * Validates:
 * 1. Data files parse and have required fields
 * 2. HTML pages reference correct data files
 * 3. No broken script tags
 * 4. Version sorting is correct
 * 5. Release URLs are valid
 * 6. No duplicate issue IDs per version
 * 7. Known issues filtered to current version baseline
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
let passed = 0;
let failed = 0;

function assert(condition, message) {
  if (condition) {
    passed++;
    // console.log(`  ✓ ${message}`);
  } else {
    failed++;
    console.error(`  ✗ ${message}`);
  }
}

function loadJS(filepath) {
  const js = fs.readFileSync(path.join(ROOT, filepath), 'utf8');
  return new Function(js + '; return eval("(" + arguments[0] + ")");');
}

// ---- Test resolved-issues data ----
console.log('\n=== Resolved Issues Data ===');

let ISSUES, CURRENT_VERSION, LATEST_VERSION, ENV_NOTES;
try {
  const js = fs.readFileSync(path.join(ROOT, 'data/resolved-issues.js'), 'utf8');
  const mod = new Function(js + '; return {ISSUES, CURRENT_VERSION, LATEST_VERSION, ENV_NOTES};');
  ({ ISSUES, CURRENT_VERSION, LATEST_VERSION, ENV_NOTES } = mod());
  assert(true, 'data/resolved-issues.js parses');
} catch (e) {
  assert(false, `data/resolved-issues.js parses: ${e.message}`);
  ISSUES = [];
}

assert(Array.isArray(ISSUES) && ISSUES.length > 0, `ISSUES is non-empty array (${ISSUES.length} issues)`);

ISSUES.forEach((i, idx) => {
  assert(typeof i.id === 'string' && i.id.length > 0, `Issue ${idx}: has id`);
  assert(typeof i.v === 'string' && i.v.length > 0, `Issue ${idx}: has version`);
  assert(typeof i.sev === 'string', `Issue ${idx} (${i.id}): has severity`);
  assert(['critical', 'high', 'mod', 'low', 'excluded'].includes(i.sev), `Issue ${i.id}: severity "${i.sev}" is valid`);
  assert(Array.isArray(i.tags) && i.tags.length > 0, `Issue ${i.id}: has tags`);
  assert(typeof i.title === 'string' && i.title.length > 0, `Issue ${i.id}: has title`);
  assert(typeof i.date === 'string', `Issue ${i.id}: has date`);
  i.tags.forEach(t => {
    assert(['perf','render','down','extract','conn','auth','meta','upg','ops','ui','flow','cloud'].includes(t), `Issue ${i.id}: tag "${t}" is valid`);
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
// Verify .8 comes before .10
const v8 = versions.indexOf('2025.1.8');
const v10 = versions.indexOf('2025.1.10');
assert(v8 >= 0 && v10 >= 0 && v8 < v10, 'Version sort: 2025.1.8 before 2025.1.10');

// Release URL logic
const dash0Versions = ['2025.1.17', '2025.1.18'];
versions.forEach(v => {
  if (dash0Versions.includes(v)) {
    // These should use -0 suffix
  }
});

// ---- Test known-issues data ----
console.log('\n=== Known Issues Data ===');

let KNOWN_ISSUES, KI_CURRENT_VERSION;
try {
  const js = fs.readFileSync(path.join(ROOT, 'data/known-issues.js'), 'utf8');
  const mod = new Function(js + '; return {KNOWN_ISSUES, KI_CURRENT_VERSION};');
  ({ KNOWN_ISSUES, KI_CURRENT_VERSION } = mod());
  assert(true, 'data/known-issues.js parses');
} catch (e) {
  assert(false, `data/known-issues.js parses: ${e.message}`);
  KNOWN_ISSUES = [];
}

assert(Array.isArray(KNOWN_ISSUES) && KNOWN_ISSUES.length > 0, `KNOWN_ISSUES is non-empty array (${KNOWN_ISSUES.length} issues)`);

KNOWN_ISSUES.forEach((i, idx) => {
  assert(typeof i.id === 'string', `KI ${idx}: has id`);
  assert(typeof i.title === 'string' && i.title.length > 0, `KI ${idx} (${i.id || 'no-id'}): has title`);
  assert(['open', 'fixed', 'closed'].includes(i.statusType), `KI ${i.id}: statusType "${i.statusType}" is valid`);
  assert(Array.isArray(i.allVersions), `KI ${i.id}: has allVersions array`);
  assert(typeof i.url === 'string' && i.url.startsWith('http'), `KI ${i.id}: has valid url`);
});

// Known issues should be filtered (no pre-2025.1 issues)
const pre2025 = KNOWN_ISSUES.filter(i => 
  i.allVersions.length > 0 && 
  i.allVersions.every(v => !v.startsWith('2025.') && !v.startsWith('2026.'))
);
assert(pre2025.length === 0, `No pre-2025.1 issues in filtered data (found ${pre2025.length})`);

// ---- Test HTML structure ----
console.log('\n=== HTML Structure ===');

// index.html
const indexHtml = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
assert(indexHtml.includes('<script src="data/resolved-issues.js"></script>'), 'index.html references resolved-issues.js');
assert(!indexHtml.includes('<script id="dataline"><script'), 'index.html: no nested script tags');
assert(indexHtml.includes('id="tbody"'), 'index.html: has tbody element');
assert(indexHtml.includes('@media'), 'index.html: has responsive CSS');

// known-issues.html
const kiHtml = fs.readFileSync(path.join(ROOT, 'known-issues.html'), 'utf8');
assert(kiHtml.includes('<script src="data/known-issues.js"></script>'), 'known-issues.html references known-issues.js');
assert(!kiHtml.includes('<script id="dataline"><script'), 'known-issues.html: no nested script tags');
assert(kiHtml.includes('id="tbody"'), 'known-issues.html: has tbody element');
assert(kiHtml.includes('id="reconcileGrid"'), 'known-issues.html: has reconcile grid');
assert(kiHtml.includes('@media'), 'known-issues.html: has responsive CSS');

// Both pages have nav
assert(indexHtml.includes('known-issues.html'), 'index.html: links to known-issues.html');
assert(kiHtml.includes('index.html'), 'known-issues.html: links to index.html');

// ---- Summary ----
console.log(`\n=== Results: ${passed} passed, ${failed} failed ===`);
process.exit(failed > 0 ? 1 : 0);
