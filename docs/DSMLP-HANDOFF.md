# DSMLP Handoff Brief — ts-radar

**Status:** Ready for containerization and DSMLP deployment
**Date:** 2026-07-30
**Owner:** Russia Madden

---

## What Needs to Happen

Deploy `ts-radar` as a static site on DSMLP Kubernetes. Since it's a pure static site (HTML + JS, no backend), this is straightforward — we need a container that serves the files via a lightweight web server (nginx or httpd) and a Helm chart for DSMLP.

## Prep to Do Ahead of Time

### 1. Confirm DSMLP access
- Verify you can push to the DSMLP container registry
- Confirm which namespace you'll deploy to (likely your group's namespace)
- Check if there's an existing nginx/static-site base image approved for DSMLP

### 2. Decide on visibility
- **Internal only** (UCSD network / VPN) — default for DSMLP
- **Public** — requires additional approval; since the known issues data is from public sources, this could be feasible but check with platform team

### 3. Review the data files
- `data/resolved-issues.js` contains your environment-specific notes (multi-node topology, single site, etc.) — decide if that should stay or be generalized for a shared deployment
- `data/known-issues.js` is auto-fetched and environment-agnostic
- Consider whether other UCSD Tableau admins would benefit from access

### 4. Domain/hostname planning
- DSMLP typically provides `<service>.<namespace>.dsmlp.ucsd.edu` hostnames
- Decide if you want a custom name like `ts-radar.dsmlp.ucsd.edu` or similar

## What Codex Will Do When You're Ready

Using the `ucsd-dsmlp-deploy` skill:

1. **Create a `Dockerfile`** — nginx:alpine base, copy static files, expose port 8080 (DSMLP requirement)
2. **Create `.github/workflows/build.yml`** — GitHub Actions to build and push the container image on every push to `main`
3. **Create a Helm chart** (`chart/` directory) — with DSMLP-compatible values (resource limits, probes, ingress)
4. **Add deployment docs** — step-by-step instructions for `helm install` on DSMLP

## Container Spec (Preview)

```
Base image:  nginx:alpine
Files:       index.html, known-issues.html, data/, scripts/, docs/
Port:        8080 (DSMLP standard)
Health:      GET /index.html → 200
Resources:   Minimal (10m CPU, 16Mi memory — it's static files)
Replicas:    1 (no state, no scaling needed)
```

## Why Not Just Use GitHub Pages?

GitHub Pages works for tonight (the site is live at `https://rcmadden.github.io/ts-radar/`). DSMLP gives you:
- UCSD-network-only access control (if the data should be internal)
- Co-location with other UCSD Tableau tooling
- No dependency on personal GitHub account for production access
- Ability to add auth/layers later if needed

## Current State

- [x] Code committed and pushed to `github.com/rcmadden/ts-radar`
- [x] GitHub Pages enabled (manual step — see settings/pages)
- [x] Both pages functional with external data files
- [x] Scraper scripts tested
- [x] Runbook written
- [ ] Dockerfile (next session)
- [ ] GitHub Actions build workflow (next session)
- [ ] Helm chart (next session)
- [ ] DSMLP deployment (next session)

## Files to Review Before Next Session

| File | Why |
|------|-----|
| `README.md` | Project overview and positioning |
| `docs/RUNBOOK.md` | Update process and classification guidelines |
| `data/resolved-issues.js` | Contains environment-specific notes — decide if generalizing |
| `data/known-issues.js` | Auto-fetched data — review the 197 filtered issues |

## Questions to Resolve Before Deployment

1. Should the environment-specific notes (multi-node topology, etc.) be generalized for a shared tool, or is this a personal reference?
2. Should other UCSD Tableau admins have access? If so, consider a shared namespace.
3. Do you want the scraper scripts to run on a schedule (cron/Actions) and auto-update the data, or keep it manual per the runbook?
4. Should we add basic auth for the DSMLP deployment, or rely on network-level access control?
