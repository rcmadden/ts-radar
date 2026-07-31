# Runbook — Keeping ts-radar Current

## When to Update

| Trigger | Action |
|---------|--------|
| New Tableau Server maintenance release published | Update resolved issues |
| Monthly cadence (preventive) | Check for new known issues |
| Before a planned upgrade | Full refresh of both datasets |
| After an incident/major event | Check known issues for matching symptoms |

---

## Part 1: Resolved Issues

### Step 1 — Fetch new release data

```bash
cd ts-radar

# Fetch all versions in a series (e.g. 2025.1, 2025.3, 2026.2)
node scripts/fetch-resolved-issues.js 2025.1 2025.3 2026.2 --output data/resolved-issues-new.js
```

The scraper:
- Visits each version's release page on tableau.com
- Tries both plain URL and `-0` URL variant (some versions use `-0`)
- Extracts the issue ID and description from the Resolved Issues table
- Outputs a JS data file with `sev: "TODO"` and `tags: ["TODO"]` for each issue

### Step 2 — Classify new issues

Open `data/resolved-issues-new.js` and for each `TODO` issue, set:

**Severity:**
| Value | Criteria |
|-------|----------|
| `critical` | Core service outage, data loss, or a regression affecting most users (e.g. Hyper memory regression) |
| `high` | Rendering failures, performance degradation, job timeouts, auth outages, multi-node ops blockers |
| `mod` | Feature broken for specific configs, credential issues, intermittent failures |
| `low` | UI cosmetic, edge case with narrow impact, admin scripting inconvenience |
| `excluded` | Flow/Prep Builder only, Tableau Cloud only, or not applicable to your environment |

**Tags** (multi-select, at least one):
`perf` `render` `down` `extract` `conn` `auth` `meta` `upg` `ops` `ui` `flow` `cloud`

**Title and Note:**
- `title`: Short summary of the issue (usually the description, trimmed)
- `note`: Environment-specific relevance note (e.g. "CONFIRMED RELEVANT: 3-node setup")

### Step 3 — Merge with existing data

If you have existing classified data, merge the new issues into `data/resolved-issues.js`:

```bash
# Manual merge: copy new issues from resolved-issues-new.js into resolved-issues.js
# Preserve existing classifications for issues already present (same ID + version)
# Only add NEW issues that don't exist yet
```

### Step 4 — Update metadata

At the bottom of `data/resolved-issues.js`, update:
- `LATEST_VERSION` — set to the newest version in the data
- `CURRENT_VERSION` — update when you upgrade your server
- `ENV_NOTES` — update if your topology changes

### Step 5 — Verify

```bash
# Serve and check
python3 -m http.server 8000
# Open http://localhost:8000/index.html
# Verify issue counts, filters work, links resolve
```

---

## Part 2: Known Issues

### Step 1 — Fetch from Salesforce Help

```bash
cd ts-radar

# Fetch and filter known issues (defaults: min-version=2025.1.7, category="Tableau Server")
python3 scripts/fetch-known-issues.py --output data/known-issues.js
```

The scraper:
- Extracts a Coveo API token from the live Salesforce Help page
- Queries the Coveo search API for all Tableau Server known issues
- Filters to issues found in versions >= your current version (plus open issues from earlier in the current series)
- Outputs a ready-to-use `data/known-issues.js` file (no manual classification needed — status is pulled from Salesforce)

**If the token expires** (HTTP 401):
1. Open https://help.salesforce.com/s/issues in a browser
2. Let the page load fully
3. Re-run the script

### Step 2 — Update target versions

At the bottom of `data/known-issues.js`, update `KI_TARGET_VERSIONS` if your migration targets change.

### Step 3 — Verify

```bash
python3 -m http.server 8000
# Open http://localhost:8000/known-issues.html
# Check the Version Impact Summary cards
# Filter to Open + Affects Current to see active known issues
# Filter to Open + Affects Target to check for upgrade blockers
```

---

## Part 3: Environment Changes

When your environment changes, update the `ENV_NOTES` and exclusion defaults in both data files:

| Change | What to Update |
|--------|---------------|
| Server upgrade | `CURRENT_VERSION` in both data files |
| Add/remove nodes | `ENV_NOTES`; review multi-node issues (up/down grade severity) |
| Add a site | Review multi-site issues (up/down grade severity) |
| Start using Flows/Prep | Remove `flow` tag from exclusion defaults |
| Add Redshift/Snowflake/etc. | Review connector-related issues for relevance |

---

## Part 4: Publishing

### GitHub Pages
```bash
git add -A
git commit -m "Update release data — $(date +%Y-%m-%d)"
git push origin main
# GitHub Pages serves from main branch root automatically
```

### DSMLP
```bash
# Copy to DSMLP serving location or build a container
# See the ucsd-dsmlp-deploy skill for containerization guidance
```

---

## Classification Quick Reference

### Tag Definitions
| Tag | Meaning | Example Issues |
|-----|---------|---------------|
| `perf` | Performance degradation, memory issues, slowness | Hyper memory regression, lineage backfill stalled |
| `render` | View/dashboard rendering failures or defects | Maps not rendering, blank screen, LogicException |
| `down` | Service outage or core function unavailable | "Unexpected Server Error", jobs timing out |
| `extract` | Extract refresh failures or configuration issues | Refresh pending indefinitely, credential reset |
| `conn` | Data source connectivity failures | Redshift IAM break, Snowflake key pair, S3 failures |
| `auth` | Authentication/SSO failures | SAML MSIS0009, OIDC relay state, trusted auth |
| `meta` | Lineage/metadata issues | Lineage backfill, GraphQL errors, field visibility |
| `upg` | Upgrade-affecting issues | Post-upgrade missing content, install blockers |
| `ops` | Operations/admin tooling | TSM failures, backup issues, monitoring blind spots |
| `ui` | UI defects with low operational impact | Text box paste, permissions dialog, icon missing |
| `flow` | Flow/Prep Builder only (exclude if not used) | Flowprocessor OOM, Prep Builder UI |
| `cloud` | Tableau Cloud only (exclude for Server) | Cloud-specific POD errors |

### Severity Decision Tree
```
Does it stop views from rendering or cause an outage?
├── YES → Is it a regression affecting most users?
│   ├── YES → critical
│   └── NO  → high
├── Does it cause slowness, job failures, or auth outages?
│   ├── YES → high
│   └── NO  → Does it break a feature for specific configs?
│       ├── YES → mod
│       └── NO  → low or excluded
```
