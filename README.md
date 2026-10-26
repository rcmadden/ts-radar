# ts-radar

A scannable, filterable dashboard for Tableau Server resolved issues and known issues — normalized to real version numbers for incident response, upgrade planning, and version selection.

## The Problem It Solves

Tableau's release pages list resolved issues in a flat table per version — no cross-version filtering, no severity, no way to ask "what would upgrading actually fix?"

Salesforce's known issues page is worse: versions map to "seasons" (Summer '16, Winter '24) that have **zero correlation** to Tableau Server release numbers. You can't filter by your actual version. You can't see if an open issue affects the version you're considering moving to. You're left manually cross-referencing issue IDs across two sites with two different naming schemes.

During an incident, there's no fast way to check "is this a known issue?" or "was this fixed in a recent release?"

## What ts-radar Does

Takes both data sources, normalizes them to real version numbers, and makes them scannable, surgical, and filterable:

- **Incident response** — filter known issues by your version + open status, search by symptom, see report counts
- **Upgrade planning** — see exactly what an upgrade would fix (resolved issues) and what open issues might block it (known issues), both on the same version axis
- **Version selection** — see if a target version has unresolved blockers that should downgrade your confidence

## Pages

| Page | Purpose | Data Source |
|------|---------|-------------|
| **Resolved Issues** (`index.html`) | Track bug fixes per release to assess what an upgrade would fix | tableau.com/support/releases/server |
| **Known Issues** (`known-issues.html`) | Inspect version impact, active bugs, and vulnerabilities | Salesforce Help + NVD |
| **Local Admin** (`admin.html`) | Set the installed version and refresh each data source | Local POC server |
| **Versions** (`versions.html`) | App release history for users | `data/versions.js` |

### Resolved Issues
- Filterable table across version series (2025.1, 2025.3, 2026.2, etc.)
- Filter by series, severity, tag, version, and free-text search
- Manage exclusions panel (customize which issues to exclude — Flow/Prep, Cloud-only, etc.)
- Exclusion preferences persisted in localStorage
- Tags: Perf, Render, Downtime, Extract, Connect, Auth, Lineage, Upgrade, Ops, UI, Flow, Cloud

### Known Issues
- Version Impact Summary cards showing open/fixed counts per version series
- Filter by status (Open/Fixed/Closed), impact (current/target/future version), found-in release
- Sort by report count, recency, or title
- Direct links to Salesforce issue pages
- Answers: "Are there unresolved known issues that should block or downgrade a version under consideration?"

## Quick Start

```bash
# Serve locally
python3 scripts/serve.py --port 8765

# Open:
# http://localhost:8765/index.html        (Resolved Issues)
# http://localhost:8765/known-issues.html  (Known Issues)
```

Open http://localhost:8765/admin.html to save the current version or refresh data. The dashboards also work on a static server; Admin writes require the local server. DSMLP will require an authenticated admin backend before enabling writes.

## Project Structure

```
ts-radar/
├── index.html              # Resolved Issues dashboard
├── known-issues.html       # Known Issues reconciliation dashboard
├── data/
│   ├── resolved-issues.js  # Resolved issues data (classified)
│   └── known-issues.js     # Known issues data (auto-fetched, filtered)
├── scripts/
│   ├── fetch-resolved-issues.js   # Scraper for tableau.com release pages
│   └── fetch-known-issues.py      # Scraper for Salesforce Help known issues
├── docs/
│   └── RUNBOOK.md          # Process for keeping data current
└── README.md
```

## Keeping Data Current

See `docs/RUNBOOK.md` for the full process. Summary:

1. Run the scrapers to fetch new release data
2. Classify resolved issues (severity + tags) — manual step
3. Update `data/*.js` files
4. Refresh the dashboard

## Environment Configuration

`data/config.js` is the shared installation configuration for both dashboards.
Use Admin to set `currentVersion`; edit `envNotes` there if topology changes.
Target, stable, and latest are derived from `data/releases.js`, including
releases with no resolved issues. Refreshes preserve previous data when a
source fails and show separate source results. Salesforce may require an
optional Coveo token when its public page does not embed one; Admin has a
password field for a token used only for that refresh.

Run `npm ci && npm test` for data, impact, dashboard, and local API checks.

## Data Sources

- **Resolved Issues**: [tableau.com/support/releases/server](https://www.tableau.com/support/releases/server)
- **Known Issues**: [help.salesforce.com/s/issues](https://help.salesforce.com/s/issues) (Tableau Server category, via Coveo search API)

## License

Internal reference tool. Not for redistribution unless approved.
