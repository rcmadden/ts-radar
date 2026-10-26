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
# Automated merge: keeps existing classifications (same ID + version),
# auto-classifies new issues per the decision tree below, and marks them
# in `note` for review.
#
# --min-series drops every release below the given series (baseline policy:
# current series and newer, through the latest release). After an upgrade,
# pass the new series and re-run to slim the data.
node scripts/merge-resolved-issues.js data/resolved-issues.js data/resolved-issues-new.js --output data/resolved-issues.js
```

### Step 4 — Update metadata

`CURRENT_VERSION` drives the app: both pages only show data at or above the
current series, so bumping it (in `data/resolved-issues.js` and
`data/known-issues.js`) automatically hides everything older. The milestone
ladder (target / stable / latest) is derived from the data, so it moves forward
automatically on refresh. Also update:
- `LATEST_VERSION` — set to the newest version in the data
- `ENV_NOTES` — update if your topology changes

### Step 5 — Verify

```bash
# Serve and check
python3 scripts/serve.py --port 8765
# Open http://localhost:8765/index.html
# Verify issue counts, filters work, links resolve
```

---

## Part 2: Known Issues

### Step 1 — Fetch from Salesforce Help

```bash
cd ts-radar

# Fetch and filter known issues. --min-version is the current series (or full
# version); anything found only in older series is dropped. Server release
# versions come from data/resolved-issues.js, so Cloud-only versions mixed
# into the Salesforce data are trimmed out. Refresh the resolved data first so
# the version list is current.
python3 scripts/fetch-known-issues.py --min-version 2025.3 --current-version 2025.3.8 --output data/known-issues.js
```

The scraper:
- Extracts a Coveo API token from the live Salesforce Help page
- Queries the Coveo search API for all Tableau Server known issues
- Preserves all Server-category issues and their full found-in evidence, including older or unspecified releases; the dashboard determines current relevance
- Outputs a ready-to-use `data/known-issues.js` file (no manual classification needed — status is pulled from Salesforce)

**If the page no longer embeds the token in its HTML** (current behavior — the token is fetched at runtime):
1. Open https://help.salesforce.com/s/issues in a browser and let it load
2. Open DevTools → Network, run any search on the page
3. Find the `platform.cloud.coveo.com/rest/search/v2` request and copy the `access_token` query parameter
4. Pass it explicitly: `python3 scripts/fetch-known-issues.py --token "<token>" --output data/known-issues.js`

**Milestone versions:** `--target-versions auto` derives the ladder from the
Server release data: the newest patch of the current series (the target, e.g.
2025.3.8 -> 2025.3.11), then the newest patch of each later series (stable,
e.g. 2026.2.4, and latest, e.g. 2026.3). A series counts as stable once it has
reached patch .4 or higher. Pass an explicit comma-separated list only to
override this.

**If the token expires** (HTTP 401 `InvalidTokenException`), capture a fresh one as above and re-run.

### Step 2 — Version impact

Both pages use `data/config.js` and the Server release catalog. Legacy
`KI_TARGET_VERSIONS` / `KI_MILESTONES` metadata is retained for compatibility
but does not control dashboard roles. Summary cards and filters share the
same build-specific impact function; each status count opens exactly its
matching rows. Search and found-in filters update the card counts.

### Step 3 — Verify

```bash
python3 scripts/serve.py --port 8765
# Open http://localhost:8765/known-issues.html
# Check the Version Impact Summary cards
# Filter to Open + Affects Current to see active known issues
# Filter to Open + Affects Target to check for upgrade blockers
```

---

## Part 3: Environment Changes

When your environment changes, update the `ENV_NOTES` and exclusion defaults in both data files:

| Change | What to Update |
|--------|---------------|
| Server upgrade | Save current version in Local Admin (`data/config.js`) |
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

## Local POC administration

Start `python3 scripts/serve.py --port 8765`, then open
http://localhost:8765/admin.html. Save the installed version once; both pages
use the same configuration and refresh their settings when returning to a tab.
Target is the latest patch of the current series, or the newest patch of the next series if the
current series is fully patched. Stable uses the newest series at patch .4+. Latest
comes from the Server release catalog, independently of issue counts.

**Refresh data now** discovers release series from Tableau's index, scrapes
releases (including those with zero fixes), preserves existing classifications,
fetches all Salesforce Server-category issues, and fetches NVD CVEs. Each
source is staged and validated independently before atomic replacement. A
failed source retains its previous successful snapshot; the Admin results
show the error. Data freshness is displayed separately for bugs and security.

Tableau can reject scraping with HTTP 403. Salesforce currently may omit its
Coveo token from HTML. If that source fails, load Salesforce Help, search,
copy the Coveo access token from the search network request, and enter it in
Admin's optional password field. The server also accepts `KI_TOKEN` from its
environment. Tokens are never written to the project or refresh status.

Known-issue impact is **potential** when inferred from found-in releases.
Published Salesforce status is shown separately from build-specific impact:
a deployed fix without a verified fix build is "Needs verification", and a
scheduled fix remains active. Resolved issue work IDs identify known fix
builds in the same release series. Security advisories use NVD's explicit
inclusive/exclusive affected ranges; bounds are not extrapolated across
branches. NVD coverage can lag vendor advisories. An email-only advisory needs
its link or version evidence before it can be marked as confirmed impact.

The local server binds to 127.0.0.1 and rejects cross-origin admin writes.
Stable is omitted when no qualifying release is available at or above current.

For hosted deployments, set `ADMIN_TOKEN` and bind publicly:
`ADMIN_TOKEN=<secret> python3 scripts/serve.py --host 0.0.0.0 --port 8000`.
With a token set, every admin POST (`/api/settings`, `/api/refresh`) requires
an `Authorization: Bearer <token>` header — enter the token once in Admin
(it is kept in that browser session only). Without `ADMIN_TOKEN`, the server
keeps the loopback-only POC behavior. A refresh cooldown
(`REFRESH_COOLDOWN_MINUTES`, default 15) rejects repeated refresh requests
with HTTP 429 so upstream sources cannot be hammered. Refreshes triggered by
the GitHub Actions schedule are covered by repository permissions instead:
only maintainers with write access can run them, and forks never see secrets.
On DSMLP the campus SSO proxy gates who reaches the app at all; the admin
token then gates who can refresh within it.

## Certificate advisory — CVE-2026-111943

This CVE describes Go's `crypto/x509` certificate validation. A Tableau Server
keyword query does not return it. `data/vendor-advisories.json` preserves the
Tableau-specific mapping from the portal administrator's security notification.
The security refresh explicitly fetches each listed CVE by ID and merges its
upstream metadata with the vendor's affected Server builds, so refreshes do not
drop dependency advisories or confuse Go versions with Tableau versions.

The email recommends the latest October 2026 Server releases. Release pages
were checked on October 26: 2025.1.21, 2025.3.11, 2026.2.4, and 2026.3 were
published October 23. Thus 2025.3.8 is covered by the advisory and 2025.3.11
provides the Server update. The fixed row says "Server patched": it does not
verify the mandatory OS trust-store update on every node. If the Server cannot
be upgraded, or is earlier than 2025.1, request Tableau Technical Support's
remediation script. The dashboard does not assume that script has been applied.
