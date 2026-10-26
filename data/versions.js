// App release history, shown on versions.html. Newest first.
// To release: add an entry at the top, tag the commit (e.g. site-v0.2.1),
// and keep the previous entry's status as "previous".
const APP_VERSIONS = [
  {
    version: "site-v0.2.0",
    released: "2026-10-26",
    status: "current",
    highlights: [
      "Version milestones (current, target, stable, latest) now derive from a Server release catalog instead of hardcoded versions, and both dashboards follow the installed version set in Admin.",
      "New Local Admin page sets the installed version and refreshes release, known-issue, and security data; each source is validated and a failed source keeps its previous data.",
      "NVD security advisories are reconciled into the known-issues dashboard using exact affected version ranges, including vendor-mapped dependency CVEs.",
      "Refreshed datasets: 1,077 known issues, 232 classified resolved issues, and 25 security advisories.",
      "Larger 18px reading system, focusable version cards, and consistent navigation across all pages."
    ]
  },
  {
    version: "site-v0.1.0",
    released: "2026-07-31",
    status: "previous",
    highlights: [
      "Resolved-issues dashboard with manual series, severity, tag, and version filters.",
      "Known-issues dashboard with fixed version cards and static exclusion preferences saved in the browser."
    ]
  }
];
