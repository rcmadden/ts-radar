// Known Issues data — sourced from Salesforce Help (help.salesforce.com/s/issues)
// 1077 Tableau Server known issues (full found-in evidence retained)
// Generated: 2026-10-26

const KNOWN_ISSUES = [
  {
    "id": "a02g700000BE0TGAA1",
    "name": "",
    "title": "Misaligned Containers on dashboard in Tableau Server",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2025.3.4, 2026.2",
    "primaryVer": "2025.3.4",
    "allVersions": [
      "2025.3.4",
      "2026.2"
    ],
    "reports": 0,
    "workId": "W-24427478",
    "url": "https://help.salesforce.com/s/issue?id=a02g700000BE0TGAA1",
    "summary": "After publishing a dashboard to Tableau Server, worksheets arranged to appear as a single table no longer align correctly in the browser. The affected dashboard appears correctly aligned in Tableau Desktop after applying the Windows high-DPI compatibility.",
    "created": 1791400301000,
    "updated": 1791405265000
  },
  {
    "id": "a02g700000CD5HLAA1",
    "name": "",
    "title": "Tableau Server VizData Native Service may stop unexpectedly and restart, causing \"Service Unavailable\" errors",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "Tableau Server 2025.1.10 and 2025.3.9",
    "primaryVer": "2025.1.10",
    "allVersions": [
      "2025.1.10",
      "2025.3.9"
    ],
    "reports": 0,
    "workId": "W-24617530",
    "url": "https://help.salesforce.com/s/issue?id=a02g700000CD5HLAA1",
    "summary": "When interacting with a workbook having published datasources, the VizData Native Service on Tableau Server for Windows may stop unexpectedly and restart automatically. While the service restarts, users may see the error \"Service Unavailable\" in Tableau Desktop or the browser, and queries running at that moment fail.  The service typically restarts on its own, but leave crash dump files that use up disk space over time. ",
    "created": 1792664571000,
    "updated": 1792687252000
  },
  {
    "id": "a02g700000BO1npAAD",
    "name": "",
    "title": "Workbooks using custom geocoding fail to load after upgrading to Tableau Server 2025.3 or later",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "\"Tableau Server 2025.3.0+; Tableau Server 2026.2.0+\"",
    "primaryVer": "2025.3.0",
    "allVersions": [
      "2025.3.0",
      "2026.2.0"
    ],
    "reports": 1,
    "workId": "W-24475958",
    "url": "https://help.salesforce.com/s/issue?id=a02g700000BO1npAAD",
    "summary": "Workbooks that use custom geocoding may fail to load after Tableau Server is upgraded to version 2025.3 or later. Users see the error \u201c[SQLSTATE:58S01] error opening database \u2018GeocodingData\u2019\u201d about 3 hours after Tableau Server starts. The issue occurs when workbooks were published on Tableau Server 2025.1 or earlier and the server is then upgraded in place or restored from a backup taken on an earlier version. The custom geocoding files are removed by a scheduled cleanup(reap) task, so the affec",
    "created": 1791631745000,
    "updated": 1791825540000
  },
  {
    "id": "a02Ka00000mm1KwIAI",
    "name": "",
    "title": "Messaging Service Is Missing from the TSM Web UI in Tableau Server 2025.3",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2025.3",
    "primaryVer": "2025.3",
    "allVersions": [
      "2025.3"
    ],
    "reports": 2,
    "workId": "W-20588421",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mm1KwIAI",
    "summary": "In Tableau Server 2025.3, the Messaging Service is no longer visible in the Tableau Services Manager (TSM) Web UI.Specifically:The Messaging Service is missing from the Status page.The Messaging Service is missing from the Configuration page.This service was previously visible in Tableau Server 2025.1 and earlier versions.Note: Although the service is hidden in the web UI, it remains active and can be managed via the TSM command line interface (CLI).",
    "created": 1773207734000,
    "updated": 1791474210000
  },
  {
    "id": "a02g700000BhbM9AAJ",
    "name": "",
    "title": "Editing a Databricks virtual connection in Tableau Cloud with a new server fails with an INVALID_ARGUMENT error",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 1,
    "workId": "W-24525973",
    "url": "https://help.salesforce.com/s/issue?id=a02g700000BhbM9AAJ",
    "summary": "When you edit an existing Databricks virtual connection in Tableau Cloud and change its Server Hostname and HTTP Path, the connection can fail to authenticate against the new Databricks workspace. The sign-in window appears without showing an email address and signs in silently, using the credentials from the original workspace. The new workspace rejects them, and Tableau Cloud returns an INVALID_ARGUMENT error (HTTP status 400). Creating a new virtual connection with the same server details wor",
    "created": 1791989582000,
    "updated": 1792130885000
  },
  {
    "id": "a02g7000006qD8zAAE",
    "name": "",
    "title": "Tableau Server to Salesforce or Salesforce Data 360 Connection Fails with \"OAuth Refresh Token Expired\" on Subsequent Attempts or Scheduled Refreshes",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2025.3, 2026.2",
    "primaryVer": "2025.3",
    "allVersions": [
      "2025.3",
      "2026.2"
    ],
    "reports": 0,
    "workId": "W-23723777",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000006qD8zAAE",
    "summary": "When connecting Tableau Server to Salesforce or Salesforce Data 360 (the connector name is Salesforce Data Cloud) using a newly created External Client App (ECA) where Refresh Token Rotation is enabled by default, OAuth authentication succeeds on the initial connection attempt but consistently fails on subsequent attempts.As a result, users encounter a Data Source Error across multiple scenarios:Web Authoring: Opening or creating workbooks fails in older versions, or creating/publishing extracts",
    "created": 1786005566000,
    "updated": 1787774458000
  },
  {
    "id": "a02g700000BDWjhAAH",
    "name": "",
    "title": "Schedules page shows an incorrect task count on multi-site Tableau Server environments",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2026.2.3",
    "primaryVer": "2026.2.3",
    "allVersions": [
      "2026.2.3"
    ],
    "reports": 0,
    "workId": "W-24436604",
    "url": "https://help.salesforce.com/s/issue?id=a02g700000BDWjhAAH",
    "summary": "On the Schedules page of a Tableau Server site, the \"Tasks\" column for a server-level schedule can show the total task count across all sites instead of the count for the site currently selected. For example, if a schedule has 4 subscriptions on one site and none on another, selecting the site with no subscriptions still shows \"Tasks: 4.\" The schedule's own Subscriptions tab correctly shows 0 for that site, so the two views disagree. This affects Tableau Server 2026.2.x.",
    "created": 1791388043000,
    "updated": 1791922079000
  },
  {
    "id": "a02g700000B6lAnAAJ",
    "name": "",
    "title": "Tableau Server & Prep Builder stops responding when opening or running a flow with multiple Excel inputs",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 1,
    "workId": "W-24409211",
    "url": "https://help.salesforce.com/s/issue?id=a02g700000B6lAnAAJ",
    "summary": "Tableau Server & Prep Builder\u00a0may stop responding when you open or run a flow that uses multiple Excel input sources.When you open such a flow for editing or click Run Flow, the progress bar stalls and the app gradually stops responding. After a few minutes you have to force-quit Tableau Prep Builder. The same flow opens and runs normally in earlier versions.Version(s) Affected: Tableau Prep Builder 2026.1 and 2026.2. Tableau Server 2025.3.6 and later",
    "created": 1791208434000,
    "updated": 1791449521000
  },
  {
    "id": "a02g7000005faRFAAY",
    "name": "",
    "title": "Header Row Borders Disappear After Publishing Workbooks to Tableau Cloud or Tableau Server 2026.2",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2026.2.0",
    "primaryVer": "2026.2.0",
    "allVersions": [
      "2026.2.0"
    ],
    "reports": 4,
    "workId": "W-23076608",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000005faRFAAY",
    "summary": "In Tableau Desktop, borders formatted between row-header columns display correctly. However, after the workbook is published to Tableau Cloud or Tableau Server 2026.2, the borders in the header row are no longer visible.",
    "created": 1782758005000,
    "updated": 1790865272000
  },
  {
    "id": "a02g70000087iu9AAA",
    "name": "",
    "title": "Tableau Server Intermittent SAML Login Failures with \"Existing Single Site Context is different from the new context\" Error After Upgrade to 2025.3.x",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2025.3.5",
    "primaryVer": "2025.3.5",
    "allVersions": [
      "2025.3.5"
    ],
    "reports": 2,
    "workId": "W-23716538",
    "url": "https://help.salesforce.com/s/issue?id=a02g70000087iu9AAA",
    "summary": "After upgrading Tableau Server to 2025.3.x, users on multi-site environments with SAML authentication may intermittently fail to log in. The failure occurs after the SAML identity provider (IdP) successfully authenticates the user, during the site context resolution step in vizportal. The session cookie is explicitly invalidated (returned with Max-Age=0) in the 401 response, preventing the user from establishing a session. The issue is non-deterministic and can affect any site in a multi-site Ta",
    "created": 1787863607000,
    "updated": 1791474064000
  },
  {
    "id": "a02g700000BZ9bZAAT",
    "name": "",
    "title": "Tableau Server initialization fails with \"permission denied to alter your own role\" when using Azure Database for PostgreSQL as external repository",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "Summer '16",
    "primaryVer": "",
    "allVersions": [],
    "reports": 1,
    "workId": "W-24496287",
    "url": "https://help.salesforce.com/s/issue?id=a02g700000BZ9bZAAT",
    "summary": "Tableau Server initialization fails with \"permission denied to alter your own role\" when using Azure Postgres 17 as the external repository",
    "created": 1791894969000,
    "updated": 1792083176000
  },
  {
    "id": "a02Ka00000mGjVaIAK",
    "name": "",
    "title": "\"Something went wrong. Try again.\" occurs when using Tableau Agent (web authoring) on Tableau Server for large datasets",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2025.3",
    "primaryVer": "2025.3",
    "allVersions": [
      "2025.3"
    ],
    "reports": 1,
    "workId": "W-22595437",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mGjVaIAK",
    "summary": "When using Tableau Agent (web authoring) on Tableau Server with a large dataset/workbook, the following error is displayed to the user:\"Something went wrong. Try again.\"contentexploration logs show the following underlying error \"Requested <x> tokens, max 300000 tokens per request\"",
    "created": 1780016146000,
    "updated": 1781698470000
  },
  {
    "id": "a02Ka00000mQpKBIA0",
    "name": "",
    "title": "After upgrading Tableau Server to version 2025.3.0 or later, users encounter an error when accessing workbooks connected to published data sources",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2025.3",
    "primaryVer": "2025.3",
    "allVersions": [
      "2025.3"
    ],
    "reports": 107,
    "workId": "W-21181554",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mQpKBIA0",
    "summary": "After upgrading Tableau Server to version 2025.3.0 or later, users encounter errors when accessing workbooks connected to published data sources. Multiple crashes have also been reported for the vizdataservices process.",
    "created": 1770367275000,
    "updated": 1784917791000
  },
  {
    "id": "a02g7000008RD9RAAW",
    "name": "",
    "title": "Text box position shifts relative to other dashboard objects after publishing from Tableau Desktop to Tableau Server",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2025.1 +",
    "primaryVer": "2025.1",
    "allVersions": [
      "2025.1"
    ],
    "reports": 1,
    "workId": "W-24058174",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000008RD9RAAW",
    "summary": "When a dashboard authored in Tableau Desktop with a center-aligned floating text object is published to Tableau Server 2025.1.5+, the text shifts slightly to maintain its centered position, causing it to misalign with other floating objects on the dashboard.",
    "created": 1788282737000,
    "updated": 1788457969000
  },
  {
    "id": "a02Ka00000mGLBkIAO",
    "name": "",
    "title": "Tableau Server Repository Failover can fail when process count has been reduced in a Dynamic Topology change",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2024.2.x and above",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 0,
    "workId": "W-22559291",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mGLBkIAO",
    "summary": "In Tableau Server, reducing process counts during dynamic topology changes lowers the Postgres max_connections setting. If a repository failover occurs or the passive node restarts, it adopts this lower limit. Consequently, Postgres aborts recovery because secondary servers cannot have lower connection limits than the active primary server",
    "created": 1779175924000,
    "updated": 1779822978000
  },
  {
    "id": "a02g7000009JcM9AAK",
    "name": "",
    "title": "Tableau Server \u2014 Duplicate group membership records can be silently created due to a missing database constraint",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2025.3.4",
    "primaryVer": "2025.3.4",
    "allVersions": [
      "2025.3.4"
    ],
    "reports": 1,
    "workId": "W-22709723",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000009JcM9AAK",
    "summary": "In some environments, the underlying group membership table does not enforce a uniqueness constraint on the combination of site, user, and group. As a result, certain internal write paths that do not pre-check for existing membership can insert duplicate membership rows for the same user/group/site combination without raising an error. Customers who already have duplicate membership rows in their environment may experience downstream symptoms, such as incorrect counts or totals in areas of the p",
    "created": 1789116716000,
    "updated": 1791474206000
  },
  {
    "id": "a02g7000006jCETAA2",
    "name": "",
    "title": "Tableau Server: Using A Shared Link Resets The Modified Parameter Settings To Their Default Values",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2024.2.7",
    "primaryVer": "2024.2.7",
    "allVersions": [
      "2024.2.7"
    ],
    "reports": 0,
    "workId": "W-23568132",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000006jCETAA2",
    "summary": "When a workbook parameter is changed and the view is shared (or a saved Custom View is opened), the shared link or Custom View opens with the default parameter value instead of the selected value. This issue occurs in workbooks containing a Story, published with the Story tab active and the \"Show Sheets as Tabs\" option enabled.Note that this issue also affects Tableau Cloud.",
    "created": 1785458044000,
    "updated": 1787774444000
  },
  {
    "id": "a02Ka00000mGZgoIAG",
    "name": "",
    "title": "Text wrapping in dashboard is cut off when viewed in Tableau Server and/or Tableau Cloud",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2025.1, 2025.3",
    "primaryVer": "2025.1",
    "allVersions": [
      "2025.1",
      "2025.3"
    ],
    "reports": 0,
    "workId": "W-22578430",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mGZgoIAG",
    "summary": "Text wrapping in dashboard displays correctly in Tableau Desktop but is cut off when published and viewed in Tableau Server and/or Tableau Cloud",
    "created": 1779683695000,
    "updated": 1779714982000
  },
  {
    "id": "a02Ka00000mH1M2IAK",
    "name": "",
    "title": "Certified Data Source Labels Not Reflected in Explore Page Certified Filter on Tableau Server Until Search Re-Index",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2025.3",
    "primaryVer": "2025.3",
    "allVersions": [
      "2025.3"
    ],
    "reports": 1,
    "workId": "W-22811082",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mH1M2IAK",
    "summary": "On Tableau Server, data sources that have been marked as Certified in Tableau Catalog may not appear under the Certified filter on the Explore (Search & Browse) page until a manual search re-index is performed.",
    "created": 1780918618000,
    "updated": 1784864523000
  },
  {
    "id": "a02Ka00000fsKEXIA2",
    "name": "",
    "title": "Prep Flows running via Bridge are intermittently failing with the error \u201cMalformed response from Tableau Data Server\u201d",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2025.2.0",
    "primaryVer": "2025.2.0",
    "allVersions": [
      "2025.2.0"
    ],
    "reports": 17,
    "workId": "18133107",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000fsKEXIA2",
    "summary": "When a Prep flow is run via Tableau Bridge, it will intermittently fail with the following error message:\u201cMalformed response from Tableau Data Server\u201d",
    "created": 1749741432000,
    "updated": 1785163896000
  },
  {
    "id": "a02Ka00000ladVbIAI",
    "name": "",
    "title": "Tableau Server: Parameterized filter view url is randomly reverting back to undefined values",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2024.2.13",
    "primaryVer": "2024.2.13",
    "allVersions": [
      "2024.2.13"
    ],
    "reports": 1,
    "workId": "W-20268701",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000ladVbIAI",
    "summary": "Parameterized filter view URL is randomly reverting back to undefined values, causing the view to be incorrect.",
    "created": 1765192422000,
    "updated": 1765361227000
  },
  {
    "id": "a02Ka00000mQtvEIAS",
    "name": "",
    "title": "Tableau Server Error \"The User Already Exists\" When Adding Users to Identity Pool at Site Level",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2025.1, 2025.3",
    "primaryVer": "2025.1",
    "allVersions": [
      "2025.1",
      "2025.3"
    ],
    "reports": 1,
    "workId": "W-21184069",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mQtvEIAS",
    "summary": "While Server Administrators can successfully add users at the server level by assigning site roles to multiple sites, Site Administrators are unable to perform this task, preventing them from managing users within their sites.",
    "created": 1770684396000,
    "updated": 1772119907000
  },
  {
    "id": "a02Ka00000lmQjaIAE",
    "name": "",
    "title": "Incorrect Day Values Displayed for Subscriptions Scheduled on Specific Days of the Month in Tableau Server 2025.1",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2025.1.11, 2025.3.1",
    "primaryVer": "2025.1.11",
    "allVersions": [
      "2025.1.11",
      "2025.3.1"
    ],
    "reports": 0,
    "workId": "W-20736127",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000lmQjaIAE",
    "summary": "Incorrect Days Are Displayed for a Monthly Schedule on the Subscribe Dialog When Tableau Server Setting \u201cschedules.Display_schedule_description_as_name\" Is True",
    "created": 1768546410000,
    "updated": 1773777713000
  },
  {
    "id": "a02Ka00000moL2FIAU",
    "name": "",
    "title": "File Store intermittently enters a read-only state due to connection loss to the ZooKeeper, triggering alerts to Tableau Server Administrators.",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2025.1.5",
    "primaryVer": "2025.1.5",
    "allVersions": [
      "2025.1.5"
    ],
    "reports": 1,
    "workId": "W-22177250",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000moL2FIAU",
    "summary": "Intermittent alerts may report File Store as down on certain nodes. This can occur due to a brief loss of connection to ZooKeeper during leader re-election, causing File Store to temporarily enter a read-only state. Although the event is short-lived and does not indicate a service failure, a DOWN alert may be triggered without a corresponding recovery alert, which can lead to confusion.",
    "created": 1777441608000,
    "updated": 1782942525000
  },
  {
    "id": "a02Ka00000mQpKGIA0",
    "name": "",
    "title": "After upgrading Tableau Server to  2025.3.0 or later, error when accessing workbooks using context filter and connected to published data sources",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.3",
    "primaryVer": "2025.3",
    "allVersions": [
      "2025.3"
    ],
    "reports": 71,
    "workId": "W-21181921",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mQpKGIA0",
    "summary": "After upgrading Tableau Server to version 2025.3.0 or above , users encounter an error when accessing workbooks using context filter and connected to published data sources. There are multiple crashes reported for vizdataservices and vizqlserver process.",
    "created": 1770368064000,
    "updated": 1791443126000
  },
  {
    "id": "a02Ka00000f8GCxIAM",
    "name": "",
    "title": "Tableau Server: Discrepancies in admin view, Backgrounder Tasks Delay",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2024.X.X, 2025.X.X",
    "primaryVer": "",
    "allVersions": [],
    "reports": 1,
    "workId": "W-18538456",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000f8GCxIAM",
    "summary": "Background Tasks Delay Pre-built admin views showing jobs for Backgrounders on nodes where they don't exist",
    "created": 1747408506000,
    "updated": 1782212608000
  },
  {
    "id": "a02Ka00000hH3oJIAS",
    "name": "",
    "title": "Intermittent Error \"[SQLSTATE:08001] Could not connect to the Hyper server: Connection refused\" When Attempting to Run a Flow in Tableau Cloud",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2025.2",
    "primaryVer": "2025.2",
    "allVersions": [
      "2025.2"
    ],
    "reports": 35,
    "workId": "W-19119276",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000hH3oJIAS",
    "summary": "When attempting to run a flow in Tableau Cloud, the following error occurs intermittently: [SQLSTATE:08001] Could not connect to the Hyper server: Connection refused Is the server running on host \\\"localhost\\\" (127.0.0.1) and accepting TCP/IP connections on port 7483? Something went wrong. Try rerunning the flow",
    "created": 1753291255000,
    "updated": 1789637286000
  },
  {
    "id": "a02Ka00000jhuiNIAQ",
    "name": "",
    "title": "Unable to Add User with the Same Name from a Different Domain in Tableau Server",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2024.2.5",
    "primaryVer": "2024.2.5",
    "allVersions": [
      "2024.2.5"
    ],
    "reports": 0,
    "workId": "W-19777846",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000jhuiNIAQ",
    "summary": "When adding a user from a secondary Active Directory domain in Tableau Server, if a user with the same username already exists in the default domain, the new user is not added.This issue occurs when Tableau Server is configured with multiple Active Directory domains, and one is set as the default domain.Cause:When importing a user, Tableau Server currently only searches for the system user within the default domain. If a user with the same username is found in the default domain, the system inco",
    "created": 1759822213000,
    "updated": 1759825171000
  },
  {
    "id": "a02Ka00000kTvAEIA0",
    "name": "",
    "title": "Group sync with OpenLDAP removes all users when range_retrieval is enabled on Tableau Server after upgrade to 2025.1.x",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2025.1.0",
    "primaryVer": "2025.1.0",
    "allVersions": [
      "2025.1.0"
    ],
    "reports": 4,
    "workId": "W-20021641",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000kTvAEIA0",
    "summary": "Group sync with OpenLDAP removes all users when wgserver.domain.ldap.range_retrieval is enabled on Tableau Server after upgrade to 2025.1.x",
    "created": 1761246145000,
    "updated": 1786659040000
  },
  {
    "id": "a02Ka00000fAoHLIA0",
    "name": "",
    "title": "PAT Tokens on Tableau Server Are Deleted After Making Unrelated Setting Changes",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2025.1",
    "primaryVer": "2025.1",
    "allVersions": [
      "2025.1"
    ],
    "reports": 1,
    "workId": "W-18466866",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000fAoHLIA0",
    "summary": "When the Connected Clients feature is disabled, unrelated settings changes result in PAT tokens being deleted.",
    "created": 1748468899000,
    "updated": 1748553696000
  },
  {
    "id": "a028c00000yGcAEAA0",
    "name": "",
    "title": "Tableau Server - The tsm maintenance cleanup command is not removing all expected files when run",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2022.1.8",
    "primaryVer": "2022.1.8",
    "allVersions": [
      "2022.1.8"
    ],
    "reports": 3,
    "workId": "W-14926678",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yGcAEAA0",
    "summary": "The tsm maintenance\u00a0cleanup -all command does not clean up the following files that it is expected to:Hyper crash dumpsArtifacts left over from using the sendlogs feature",
    "created": 1707144269000,
    "updated": 1770082086000
  },
  {
    "id": "a028c00000yws2XAAQ",
    "name": "",
    "title": "Tableau Cloud/Server - Unable to paste multiple values in filter",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.1",
    "primaryVer": "2024.1",
    "allVersions": [
      "2024.1"
    ],
    "reports": 197,
    "workId": "W-15002643",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yws2XAAQ",
    "summary": "When pasting a list into a filter text box, the list pastes as one value instead of the expected list of multiple values.",
    "created": 1707487794000,
    "updated": 1751031801000
  },
  {
    "id": "a02Ka00000hH6hRIAS",
    "name": "",
    "title": "Dashboards Unexpectedly Display as a Blank Page or Content is Missing After Upgrading to Tableau Server 2025.1.3-4",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1.3, 2025.1.4",
    "primaryVer": "2025.1.3",
    "allVersions": [
      "2025.1.3",
      "2025.1.4"
    ],
    "reports": 79,
    "workId": "W-19118435",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000hH6hRIAS",
    "summary": "After upgrading to Tableau Server 2025.1.3-4, unexpected behavior occurs where certain dashboards may display as blank pages or content is missing even though the user(s) have the necessary permissions to view the content.EnvironmentTableau Server 2025.1.3-4",
    "created": 1753304931000,
    "updated": 1790729115000
  },
  {
    "id": "a028c00000zhBCdAAM",
    "name": "",
    "title": "The encryption job fails every hour on Tableau Server 2024.2 without Tableau Data Management Add-on License",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2024.2.0",
    "primaryVer": "2024.2.0",
    "allVersions": [
      "2024.2.0"
    ],
    "reports": 52,
    "workId": "W-16763460",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zhBCdAAM",
    "summary": "Failed encryption jobs are listed on Jobs page in 'All Sites' when Data Management is not enabled on Tableau Server 2024.2. This issue does not reproduce on TS2023.3.9 or earlier.If Tableau Server has Tableau Data Management Add-on license, the issue doesn't occur. For example the validation steps.1.Log on to Tableau Server as Server Administrator.2.(Option) Create another site, if there is a single site3.Go to All Sites.4.Go to Jobs.5.Encryption jobs fail every hour.",
    "created": 1726641535000,
    "updated": 1787774194000
  },
  {
    "id": "a028c00000zKMCGAA4",
    "name": "",
    "title": "Users search in the @mention function do not return results when searching for users with hyphens or underscores on Tableau Cloud and Tableau Server",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2024.1",
    "primaryVer": "2024.1",
    "allVersions": [
      "2024.1"
    ],
    "reports": 1,
    "workId": "W-15776205",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zKMCGAA4",
    "summary": "User names containing hyphens and/or underscores do not display correctly in incremental search.As an example, if you want to search for a user named \"f-lastname\", but you type \"f\", \"-\", \"l\" in that order, no more candidates will be displayed.This issue is confirmed in the following releases at least:TCL: 2024.2.0TS: 2024.2.0, 2023.3.7, 2023.1.14, 2022.3.18",
    "created": 1721802302000,
    "updated": 1770746364000
  },
  {
    "id": "a028c00000zhhrRAAQ",
    "name": "",
    "title": "Unexpectedly High CPU Usage After Upgrading to Tableau Server 2024.2.0-2024.2.4",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 71,
    "workId": "W-16219339",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zhhrRAAQ",
    "summary": "After upgrade to Tableau Server 2024.2.0-2024.2.4, the CPU utilization unexpectedly spikes up to 100% for Tableau processes on a node. The CPU utilization does not drop and is sustained at 100% until vizql service is restarted on that node. CPU usage is high even when there isn't much user or background activity and all antivirus exclusions are in place.The following specific processes contributes to high CPU usage on the nodes.vizqlserverdataserverEnvironmentTableau Server2024.2.0-2024.2.4",
    "created": 1728057577000,
    "updated": 1765856221000
  },
  {
    "id": "a02Ka00000mmUfwIAE",
    "name": "",
    "title": "Unable to Update Snowflake Authentication in Tableau Server",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.14, 2025.1.13",
    "primaryVer": "2024.2.14",
    "allVersions": [
      "2024.2.14",
      "2025.1.13"
    ],
    "reports": 1,
    "workId": "W-21534285",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mmUfwIAE",
    "summary": "Snowflake authentication updates are not applied to Tableau Server when switching from user/password to PAT (Snowflake's Programmatic Access Token) authentication.This issue has been confirmed in Tableau Server 2024.2 and 2025.1, but it DOES NOT occur in Tableau Server 2025.3.3 and later.",
    "created": 1774402882000,
    "updated": 1782421040000
  },
  {
    "id": "a02g7000009HosrAAC",
    "name": "",
    "title": "Tableau GET REST API request triggers org.springframework.beans.factory.NoSuchBeanDefinitionException in Dynatrace",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2026.2",
    "primaryVer": "2026.2",
    "allVersions": [
      "2026.2"
    ],
    "reports": 2,
    "workId": "W-24094858",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000009HosrAAC",
    "summary": "Following exception is observed in Dynatrace when making GET REST API requests (getViews, getWorkbooks, getDatasources) against Tableau Server:org.springframework.beans.factory.NoSuchBeanDefinitionException:\n No bean named 'NonMock' available: No matching TransactionManager bean\n found for qualifier 'NonMock' \u2013 neither qualifier match nor bean name match!\nThis logged error does not affect functionality. The REST API requests complete successfully, returning an HTTP 200 status and the expected da",
    "created": 1789088067000,
    "updated": 1791985104000
  },
  {
    "id": "a02Ka00000nqcKFIAY",
    "name": "",
    "title": "Tableau Prep Flows Failing in Tableau Server With [SQLSTATE:42P21]",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2026.2",
    "primaryVer": "2026.2",
    "allVersions": [
      "2026.2"
    ],
    "reports": 1,
    "workId": "W-22026755",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000nqcKFIAY",
    "summary": "When a Tableau Prep Flow contains input nodes that were created across different versions of Tableau Prep Builder and published to Tableau Server the Flow will fail with [SQLSTATE:42P21].",
    "created": 1782409347000,
    "updated": 1789676968000
  },
  {
    "id": "a02Ka00000moMhVIAU",
    "name": "",
    "title": "Tableau Server: Errors when access workbooks with published datasources after upgrading to version 2025.3.4 and Later.",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2025.3",
    "primaryVer": "2025.3",
    "allVersions": [
      "2025.3"
    ],
    "reports": 4,
    "workId": "W-21086572",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000moMhVIAU",
    "summary": "Known Issue W-21086572 is tracking changes made to Tableau Server logging to improve reporting and facilitate investigations into the underlying cause of this error. The changes tracked in this Known Issue are not expected to resolve this error. If you encounter the behavior described in this Known Issue, the underlying cause needs additional investigation.After upgrading Tableau Server to version 2025.3.4 or later, users may encounter errors when accessing workbooks connected to published data ",
    "created": 1777547955000,
    "updated": 1791443529000
  },
  {
    "id": "a02g700000C24NBAAZ",
    "name": "",
    "title": "Teradata Extract Refresh Performance Degradation in Tableau Server 2025.3.7",
    "status": "Solution in Progress",
    "statusType": "open",
    "foundIn": "2025.3.7",
    "primaryVer": "2025.3.7",
    "allVersions": [
      "2025.3.7"
    ],
    "reports": 0,
    "workId": "W-24548122",
    "url": "https://help.salesforce.com/s/issue?id=a02g700000C24NBAAZ",
    "summary": "Teradata extract refreshes may take significantly longer than expected to complete in the Tableau Server 2025.3 and later versions. This behavior can potentially lead to refresh failures due to timeouts in Tableau Server. The issue may also impact Teradata extract refresh operations in Tableau Desktop (2025.3.7 and later versions) and Tableau Bridge (2025.3.7 and later versions).",
    "created": 1792439462000,
    "updated": 1792729829000
  },
  {
    "id": "a02g700000B6IS9AAN",
    "name": "",
    "title": "Tableau Prep Builder local .hyper output doesn't keep field name capitalization, which breaks calculations after a data source replacement",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2026.2.3",
    "primaryVer": "2026.2.3",
    "allVersions": [
      "2026.2.3"
    ],
    "reports": 0,
    "workId": "W-24408167",
    "url": "https://help.salesforce.com/s/issue?id=a02g700000B6IS9AAN",
    "summary": "When a Tableau Prep Builder flow writes to a local .hyper file, field names lose their original capitalization. For example, uppercase fields like REGION, SALES, QUANTITY and PROFIT come out as Region, Sales, Quantity and Profit. When the same flow publishes directly to Tableau Server or Tableau Cloud, the original capitalization is kept. Because of this difference, replacing a workbook's data source in Tableau Desktop with one from the other output method can cause field mismatches. Calculated ",
    "created": 1791201156000,
    "updated": 1791440480000
  },
  {
    "id": "a02g700000BrACbAAN",
    "name": "",
    "title": "Flow May Cause Performance Degradation After Upgrading To Tableau Server",
    "status": "Solution in Progress",
    "statusType": "open",
    "foundIn": "2024.2+",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 0,
    "workId": "W-23340078",
    "url": "https://help.salesforce.com/s/issue?id=a02g700000BrACbAAN",
    "summary": "When running Tableau Prep flows\u2014created in older versions such as Tableau Prep Builder 2022.3.4\u2014on newer versions (Tableau Prep Builder / Tableau Server 2024.2+), Tableau may unexpectedly creates FQ_Temp tables during JOIN steps instead of executing native database JOIN push-down.This leads to full data extraction into the local Hyper engine and may cause performance degradation. (Note: This behavior relates to internal input step definition differences between versions.)",
    "created": 1792124180000,
    "updated": 1792373466000
  },
  {
    "id": "a02Ka00000mFY1EIAW",
    "name": "",
    "title": "Error: \"Error Publishing Flow to Tableau Server\" with Published Data Source (PDS) Input, Aggregation, and LOD in Prep Builder",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2026.1.0",
    "primaryVer": "2026.1.0",
    "allVersions": [
      "2026.1.0"
    ],
    "reports": 11,
    "workId": "W-22035696",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mFY1EIAW",
    "summary": "When publishing a flow from Tableau Prep Builder 2026.1.0 to Tableau Cloud or Tableau Server, the error\u00a0\"Error publishing flow to Tableau Server\"\u00a0may be displayed if the flow meets all of the following conditions:The flow uses a PDS as an input.The flow includes an\u00a0Aggregation\u00a0step.The flow contains a LOD\u00a0calculation (for example,\u00a0ROW_NUMBER()\u00a0or\u00a0PARTITION).",
    "created": 1778466033000,
    "updated": 1788198445000
  },
  {
    "id": "a02g7000006fizJAAQ",
    "name": "",
    "title": "Extract refresh failing intermittently in Tableau Server \"Internal Error - An unexpected error occurred and the operation could not be completed\"",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2025.1.12,2025.3.2",
    "primaryVer": "2025.1.12",
    "allVersions": [
      "2025.1.12",
      "2025.3.2"
    ],
    "reports": 0,
    "workId": "W-23568826",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000006fizJAAQ",
    "summary": "Tableau Server extract refreshes are intermittently failing due to an unexpected internal runtime error.Behavior: Extract refresh tasks fail to complete on a sporadic, non-continuous basis when those extracts are part of data sources containing multiple live connections.Error Returned: com.tableausoftware.server.status.reporting.TableauRuntimeException: Internal Error - \"An unexpected error occurred\" and the operation could not be completed.",
    "created": 1785210416000,
    "updated": 1791307307000
  },
  {
    "id": "a02g7000009cjYPAAY",
    "name": "",
    "title": "Editing or republishing a Virtual Connection may fail after upgrading from Tableau Server 2024.2 or earlier.",
    "status": "Solution in Progress",
    "statusType": "open",
    "foundIn": "2025.1 +",
    "primaryVer": "2025.1",
    "allVersions": [
      "2025.1"
    ],
    "reports": 0,
    "workId": "W-23661680",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000009cjYPAAY",
    "summary": "After upgrading Tableau Server to 2025.3 or later (including via a database restore from an older version), creating, editing, or republishing a Virtual Connection may  fail with a error \"Publish operation could not be completed\" or \"Failed to save draft virtual connection. Try again later.\"",
    "created": 1789521346000,
    "updated": 1792649305000
  },
  {
    "id": "a028c00000ixVaeAAE",
    "name": "",
    "title": "When publishing a data source from Tableau Desktop version 2022.2 or higher to a lower version of Tableau Server such as 2022.1, an error would occur",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2022.2.0",
    "primaryVer": "2022.2.0",
    "allVersions": [
      "2022.2.0"
    ],
    "reports": 1,
    "workId": "In review",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000ixVaeAAE",
    "summary": "When publishing a data source from Tableau Desktop version 2022.2 or higher to a lower version of Tableau Server such as 2022.1, an error would occur stating, \"An error occurred when publishing the data source. Cannot publish to Tableau Server. Please make sure you are connected to a compatible version of the server.\"",
    "created": 1684187941000,
    "updated": 1735399625000
  },
  {
    "id": "a02g7000008fyTRAAY",
    "name": "",
    "title": "Recycle Bin Icon Disappears on Server Status and Settings Pages in Tableau Server",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2025.1 and 2025.3",
    "primaryVer": "2025.1",
    "allVersions": [
      "2025.1",
      "2025.3"
    ],
    "reports": 0,
    "workId": "W-24006330",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000008fyTRAAY",
    "summary": "In Tableau Server, the \"Recycle Bin\" icon is not visible in the left-hand navigation pane when viewing server-level administration pages (such as \"Server Status\" or \"Settings\").This issue is observed in environments configured with a single site. While the icon is erroneously hidden on these server-level pages, it remains visible and functional on site-level pages (such as \"Explore\" or \"Users\").",
    "created": 1788489370000,
    "updated": 1789590168000
  },
  {
    "id": "a02Ka00000mRhrXIAS",
    "name": "",
    "title": "The External Assets page is greyed out in the Tableau Server GUI",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.3.1",
    "primaryVer": "2025.3.1",
    "allVersions": [
      "2025.3.1"
    ],
    "reports": 15,
    "workId": "W-20976804",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mRhrXIAS",
    "summary": "Even after having the valid Data Management License and all steps mentioned for enabling catalog are completed on Tableau Server, Lineage and adding data classification from External Assets page is greyed out on Tableau Server version 2025.3.1 and above.",
    "created": 1771394798000,
    "updated": 1791215490000
  },
  {
    "id": "a02Ka00000moCyyIAE",
    "name": "",
    "title": "When a Tableau Bridge Live Query exceeds 15 minutes, retry attempts are made resulting in duplicate concurrent queries sent to SQL Server.",
    "status": "Solution in Progress",
    "statusType": "open",
    "foundIn": "2025.3.0",
    "primaryVer": "2025.3.0",
    "allVersions": [
      "2025.3.0"
    ],
    "reports": 4,
    "workId": "W-22052867",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000moCyyIAE",
    "summary": "When a Tableau Bridge Live Query exceeds 15 minutes, retry attempts are made resulting in duplicate concurrent queries sent to SQL Server.There may be situations where the queries fail to complete resulting in the extract timing out and the job will fail with the error \"Malformed response from remote agent server\"",
    "created": 1777042460000,
    "updated": 1792741178000
  },
  {
    "id": "a02g70000080VjxAAE",
    "name": "",
    "title": "Reference band boundary line label displays in the wrong position on Tableau Server",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2025.3.1",
    "primaryVer": "2025.3.1",
    "allVersions": [
      "2025.3.1"
    ],
    "reports": 0,
    "workId": "W-24000253",
    "url": "https://help.salesforce.com/s/issue?id=a02g70000080VjxAAE",
    "summary": "When a reference band's boundary line label is set to center or middle alignment, the label renders in the wrong position on Tableau Server, unlike Tableau Desktop. On Tableau Server, the label shifts outside the shaded band area instead of overlapping the boundary line as expected; when the label's vertical alignment is set to \"Top,\" the label can be pushed completely out of view. This issue affects Tableau Server 2025.3 and later, including current 2026.x releases.",
    "created": 1787767870000,
    "updated": 1790885769000
  },
  {
    "id": "a02Ka00000mmZ3KIAU",
    "name": "",
    "title": "Tableau Server: slow navigation from one project to another",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1.5",
    "primaryVer": "2025.1.5",
    "allVersions": [
      "2025.1.5"
    ],
    "reports": 0,
    "workId": "W-21613169",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mmZ3KIAU",
    "summary": "Performance of the getProjects\u00a0call on Tableau Server seems to be slower for non-admin users\u00a020/30 seconds. The slowness is experienced when navigating to and from any projects on Tableau Server.",
    "created": 1774600372000,
    "updated": 1785456913000
  },
  {
    "id": "a02Ka00000mm7lBIAQ",
    "name": "",
    "title": "TDC customization for proxy use are not working during the \"Prompt Credentials\" or \"Test Connection\" on Tableau Server",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "Tableau Server 2024.2.6",
    "primaryVer": "2024.2.6",
    "allVersions": [
      "2024.2.6"
    ],
    "reports": 1,
    "workId": "W-21447868",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mm7lBIAQ",
    "summary": "Note this issue impacts both Tableau Cloud and Tableau ServerWhen editing a connection on Tableau Server and using the \"Test Connection\" button on a data source with 'prompt credentials' as the authentication type, any settings for a proxy server set using a TDC customizations for the ODBC driver will be ignored.",
    "created": 1773394276000,
    "updated": 1780323430000
  },
  {
    "id": "a02g700000BZimDAAT",
    "name": "",
    "title": "\"LogicAssert error 0x9821F0F0\" when opening a view in Tableau Server 2025.1.8",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2025.1.8",
    "primaryVer": "2025.1.8",
    "allVersions": [
      "2025.1.8"
    ],
    "reports": 0,
    "workId": "W-24047477",
    "url": "https://help.salesforce.com/s/issue?id=a02g700000BZimDAAT",
    "summary": "In Tableau server 2025.1.8, opening a view can fail with the Logicassert error 0x9821F0F0. The issue is happening only when a calculated field references a string parameter is added to a shelf along with a dimension with \u201cManual Sort\u201d on the Color marks card.",
    "created": 1791910043000,
    "updated": 1791915038000
  },
  {
    "id": "a02g700000CBLtRAAX",
    "name": "",
    "title": "Installing or upgrading Tableau Server 2026.3.0 on Windows Server 2016 or Windows 10 will fail and may require restoring from backup",
    "status": "Solution in Progress",
    "statusType": "open",
    "foundIn": "2026.3.0",
    "primaryVer": "2026.3.0",
    "allVersions": [
      "2026.3.0"
    ],
    "reports": 1,
    "workId": "W-24614917",
    "url": "https://help.salesforce.com/s/issue?id=a02g700000CBLtRAAX",
    "summary": "Installing or upgrading Tableau Server 2026.3.0 on Windows Server 2016 or Windows 10 will fail and may require restoring from backup.A fresh install simply fails after initial tsm configuration and may not completely install all packages.Upgrading an existing installation with the 2026.3.0 installer will fail when the upgrade-tsm script attempts to create the tabadmincontroller service.Note that this installation problem also impacts Tableau Desktop and Tableau Prep Builder.",
    "created": 1792625508000,
    "updated": 1792715527000
  },
  {
    "id": "a02Ka00000ilbHqIAI",
    "name": "",
    "title": "Intermittent incorrect calculated field values observed after upgrading to Tableau Server 2024.2.12",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.12",
    "primaryVer": "2024.2.12",
    "allVersions": [
      "2024.2.12"
    ],
    "reports": 0,
    "workId": "W-20287098",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000ilbHqIAI",
    "summary": "Issue reproducible with Tableau Desktop and Tableau Server.After upgrading Tableau Server from version 2023.2.12 to 2024.2.12, the crosstab view began returning unexpected results for the calculated field IFNULL(TRIM([field name])) + '/' + IFNULL(TRIM([field name])).For example, when applying the calculation to a string field, the expected result was a list of distinct concatenated, trimmed values. Instead, it produced repeated instances of the same value, each trimmed to a different length.",
    "created": 1763699414000,
    "updated": 1785177693000
  },
  {
    "id": "a02g7000006qLpiAAE",
    "name": "",
    "title": "Tableau Desktop: Unable to sign in to Tableau Public via external browser when EnableExternalBrowserSignInFromDesktop registry key is enabled",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 1,
    "workId": "W-23711284",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000006qLpiAAE",
    "summary": "Users who have the EnableExternalBrowserSignInFromDesktop Windows registry key set to 1 are unable to sign in to Tableau Public from Tableau Desktop. When this registry key is enabled, Tableau Desktop incorrectly routes Tableau Public sign-in through the Tableau Server OAuth flow, causing the system browser to open and immediately display a 404 Not Found error. This affects Tableau Desktop on Windows and is a pre-existing issue present across multiple versions.",
    "created": 1786026891000,
    "updated": 1787774458000
  },
  {
    "id": "a02g7000006tuZBAAY",
    "name": "",
    "title": "Embedded connections disappear from selection after republishing a flow in Tableau Cloud and Tableau Server",
    "status": "Solution in Progress",
    "statusType": "open",
    "foundIn": "2026.2.1",
    "primaryVer": "2026.2.1",
    "allVersions": [
      "2026.2.1"
    ],
    "reports": 0,
    "workId": "W-23524457",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000006tuZBAAY",
    "summary": "When a user web-edits and republishes a Tableau Prep flow that contains an embedded Salesforce connection, the connection settings may incorrectly update to show \"No authentication\". The saved embedded credentials dropdown becomes empty and cannot be selected.Note: Even though the connection UI appears broken and shows \"No authentication\", the underlying authentication is still intact, and the flow will continue to run successfully.",
    "created": 1786326043000,
    "updated": 1792692495000
  },
  {
    "id": "a02g7000005oP1xAAE",
    "name": "",
    "title": "Set Actions Behave Inconsistently on Tableau Server/Cloud when They are Driven by a Filter Action",
    "status": "Solution in Progress",
    "statusType": "open",
    "foundIn": "2025.1.9",
    "primaryVer": "2025.1.9",
    "allVersions": [
      "2025.1.9"
    ],
    "reports": 0,
    "workId": "W-23301691",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000005oP1xAAE",
    "summary": "Some set actions driven by a filter action do not get triggered when a workbook is published to Tableau Server/Cloud",
    "created": 1783369683000,
    "updated": 1791402686000
  },
  {
    "id": "a02Ka00000mH3nUIAS",
    "name": "",
    "title": "Tableau Server: Switching between sites fails with using Trusted Authentication.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.3.x",
    "primaryVer": "2025.3",
    "allVersions": [
      "2025.3"
    ],
    "reports": 0,
    "workId": "W-22925927",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mH3nUIAS",
    "summary": "On Tableau Server 2025.3, users who sign in using Trusted Authentication may experience an error when attempting to switch between different sites.The switch to a different site fails unexpectedly, and a NullPointerException error is returned.This issue affects environments with multiple sites where Trusted Authentication is in use.The user is presented with the following error, \"That page could not be accessed. You are not a member of the site, or the site does not exist.\"",
    "created": 1781084755000,
    "updated": 1785430288000
  },
  {
    "id": "a02Ka00000lbMPAIA2",
    "name": "",
    "title": "Trusted Authentication breaks in Tableau Server",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.3.0",
    "primaryVer": "2025.3.0",
    "allVersions": [
      "2025.3.0"
    ],
    "reports": 4,
    "workId": "W-20504611",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000lbMPAIA2",
    "summary": "In Tableau Server 2025.3.0, Trusted Auth breaks because of wrong routing rules.",
    "created": 1765479818000,
    "updated": 1767617721000
  },
  {
    "id": "a02Ka00000mo8AOIAY",
    "name": "",
    "title": "Tableau Server: Error When Enabling Custom TSM SSL \"entry.cert is null\"",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "Tableau Server 2025.3.2",
    "primaryVer": "2025.3.2",
    "allVersions": [
      "2025.3.2"
    ],
    "reports": 2,
    "workId": "W-22157138",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mo8AOIAY",
    "summary": "When trying to configure a custom SSL certificate for the TSM ControllerCommand: tsm security custom-tsm-ssl enable --key-file C:\\Certs\\tableau2026.key --cert-file C:\\Certs\\tableau2026CLI.crtThe following error might occur:ERROR com.tableausoftware.tabadmin.webapp.asyncjobs.JobStepRunner - Running step CreateKeystore failedjava.lang.NullPointerException: Cannot invoke \"java.security.cert.Certificate.getEncoded()\"\u00a0because \"entry.cert\" is null",
    "created": 1776845448000,
    "updated": 1792086725000
  },
  {
    "id": "a02Ka00000mGihXIAS",
    "name": "",
    "title": "Error \u201cAn unexpected error occurred\u201d appears when attempting to view the list of linked tasks on Tableau Server.",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "Tableau Server 2024.x , 2025.x",
    "primaryVer": "",
    "allVersions": [],
    "reports": 0,
    "workId": "W-22704042",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mGihXIAS",
    "summary": "Users are unable to view linked tasks in the Tableau Server UI. When clicking linked tasks, the error \u201cAn unexpected error occurred\u201d is displayed, although the linked task count reflects correctly.This issue appears to occur mainly with flows that have multiple outputs or are scheduled frequently, which may cause the flow to reach the maximum total connection limit impact the Linked task view.Version(s) Affected: Tableau Server 2024.x , 2025.x",
    "created": 1779953403000,
    "updated": 1792537667000
  },
  {
    "id": "a02g7000007bGg5AAE",
    "name": "",
    "title": "Tableau Bridge: Extract Refresh fails with \"Malformed response from Tableau Data Server\" (0xCFC8C9BB)",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2026.2",
    "primaryVer": "2026.2",
    "allVersions": [
      "2026.2"
    ],
    "reports": 2,
    "workId": "W-22622862",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000007bGg5AAE",
    "summary": "Scheduled or run-now extract refreshes on workbooks using a Bridge-connected datasource, connection may intermittently fail with a generic \"Malformed response from Tableau Data Server\" error. The issue occurs due to a transient disconnect (e.g. HTTP 503 / connection reset) between the Tableau Cloud backgrounder and the Bridge agent's remote query service (RQS) during the create-session, execute-query, or read-results phase of the refresh. ",
    "created": 1787556776000,
    "updated": 1790716443000
  },
  {
    "id": "a02Ka00000nrECBIA2",
    "name": "",
    "title": "Publish from Desktop/Prep Redirect Link Returns 404 After Publishing to Tableau Cloud or Tableau Server",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "Tableau Cloud 2026.2, Tableau Server 2025.3.7",
    "primaryVer": "2026.2",
    "allVersions": [
      "2026.2",
      "2025.3.7"
    ],
    "reports": 17,
    "workId": "W-23178369",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000nrECBIA2",
    "summary": "After publishing a flow (or workbook) to Tableau Cloud or Tableau Server, the user is redirected to the publish result page using a trusted ticket URL.This results in a 404 Not Found error. The publish itself succeeds, but users are not shown confirmation and cannot view the published content.This issue occurs on Tableau Cloud as well as Tableau Server 2025.3.7",
    "created": 1782505228000,
    "updated": 1790123878000
  },
  {
    "id": "a02Ka00000mGbTHIA0",
    "name": "",
    "title": "Tableau Server: Extract refresh fails but no notification is received",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1.11",
    "primaryVer": "2025.1.11",
    "allVersions": [
      "2025.1.11"
    ],
    "reports": 2,
    "workId": "W-22566605",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mGbTHIA0",
    "summary": "Refresh of extract fails, the notification for the failure is not received and appears to not have been sent.",
    "created": 1779717190000,
    "updated": 1791208424000
  },
  {
    "id": "a02g7000006k1AXAAY",
    "name": "",
    "title": "When adding a site user with grant role on sign in on Tableau Server 2026.2.0+ to a group, the user is added as Unlicensed instead",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2026.2.0",
    "primaryVer": "2026.2.0",
    "allVersions": [
      "2026.2.0"
    ],
    "reports": 4,
    "workId": "W-23653502",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000006k1AXAAY",
    "summary": "When the site setting \"Managing Users\" is set to \"Only Server Administrators.\", newly added users that are set to site role Unlicensed and then added to a group where grant role on sign in is enabled results in the user getting a \"your account is not licensed\" message and their role assignment is not followed.",
    "created": 1785514354000,
    "updated": 1792584162000
  },
  {
    "id": "a02Ka00000mo85TIAQ",
    "name": "",
    "title": "Unable to remove groups from Permissions dialog after upgrading Tableau Server",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1",
    "primaryVer": "2025.1",
    "allVersions": [
      "2025.1"
    ],
    "reports": 1,
    "workId": "W-22143771",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mo85TIAQ",
    "summary": "After upgrading Tableau Server from 2024.2.15 to 2025.1.x, groups that were previously added to the Permissions dialog cannot be removed.This issue specifically affects groups that existed prior to the upgrade. Attempts to remove these groups through the permissions interface would change the template to \"None\" and the groups continue to appear in the dialog.This behavior is observed only after the upgrade to Tableau Server 2025.1.x and was not present in earlier versions.",
    "created": 1776804903000,
    "updated": 1784281521000
  },
  {
    "id": "a02g700000BrVddAAF",
    "name": "",
    "title": "Tableau Desktop 2025.3 and Newer Silently Publishes Workbook to Wrong Project When Project Is Changed in the Publish Dialog",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2025.3",
    "primaryVer": "2025.3",
    "allVersions": [
      "2025.3"
    ],
    "reports": 1,
    "workId": "W-24503068",
    "url": "https://help.salesforce.com/s/issue?id=a02g700000BrVddAAF",
    "summary": "When republishing an existing workbook in Tableau Desktop 2025.3 or newer, changing the destination project in the Publish Workbook dialog causes the UI to visually reflect the new selection \u2014 but the workbook is silently published to the original project. No error or warning is shown.",
    "created": 1792133192000,
    "updated": 1792433383000
  },
  {
    "id": "a02g700000Bg5l8AAB",
    "name": "",
    "title": "Data Type Change is Reverted when Composing a Published Data Source with Another Published Data Source",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2026.2",
    "primaryVer": "2026.2",
    "allVersions": [
      "2026.2"
    ],
    "reports": 0,
    "workId": "W-24360361",
    "url": "https://help.salesforce.com/s/issue?id=a02g700000Bg5l8AAB",
    "summary": "When a user changes the data type of a column in a live data source and publishes it, the change is unexpectedly reverted to its original data type if the user reconnects to it and tries to compose it with another published data source.This issue occurs with live data sources in both Tableau Desktop and Tableau Cloud/Tableau Server web edit.",
    "created": 1791959695000,
    "updated": 1791961694000
  },
  {
    "id": "a02g7000006ZjgLAAS",
    "name": "",
    "title": "VizDataService May Generate Crashdumps During Tableau Server Start, Stop, or Restart",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2025.3.5",
    "primaryVer": "2025.3.5",
    "allVersions": [
      "2025.3.5"
    ],
    "reports": 0,
    "workId": "W-23402198",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000006ZjgLAAS",
    "summary": "On Tableau Server, background processes such as VizDataService may intermittently generate crashdump files during service startup, shutdown, or restart. Over time, these files consume disk space, which may potentially lead to low disk space issues.",
    "created": 1784881551000,
    "updated": 1787774433000
  },
  {
    "id": "a02g7000006iTNpAAM",
    "name": "",
    "title": "Tabcmd (bundled with Tableau Server installation package) throws HTTP 500 error when exporting views to PDF",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2026.2.0",
    "primaryVer": "2026.2.0",
    "allVersions": [
      "2026.2.0"
    ],
    "reports": 0,
    "workId": "W-23253714",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000006iTNpAAM",
    "summary": "Users are experiencing an export failure when using the tabcmd utility that comes bundled with Tableau Server. Specifically, when executing the command to export a view as a full PDF (--fullpdf), the command fails and throws an HTTP 500 error: \"Unexpected response from the server: 500 null\"\u00a0",
    "created": 1785405912000,
    "updated": 1788913387000
  },
  {
    "id": "a02Ka00000kVWGaIAO",
    "name": "",
    "title": "Permission changes are slow for projects with many subitems in Tableau Server",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.14",
    "primaryVer": "2024.2.14",
    "allVersions": [
      "2024.2.14"
    ],
    "reports": 0,
    "workId": "W-19745297",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000kVWGaIAO",
    "summary": "When changing permissions for a Tableau Server project that contains a large number of sub-items (e.g., thousands of nested projects, workbooks, or data sources), the operation may take a very long time (e.g., 30 minutes or more) or time out. During this process, other operations related to permissions or project creation may be blocked.This issue is observed in Tableau Server 2024.2.x but also been reported in earlier versions.",
    "created": 1762310398000,
    "updated": 1784939089000
  },
  {
    "id": "a02Ka00000lmEuEIAU",
    "name": "",
    "title": "Performance issue when generating multiple PDF files via Tableau Server REST API",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2024.2.6",
    "primaryVer": "2024.2.6",
    "allVersions": [
      "2024.2.6"
    ],
    "reports": 5,
    "workId": "W-20441163",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000lmEuEIAU",
    "summary": "When generating multiple PDF files with Tableau Server REST API, performance gradually degrades, and the generation time increases with each file.The behaviour was observed when running Tableau Server Client Python API code, and it was confirmed that it also occurred when using the Tableau Server REST API.",
    "created": 1767950006000,
    "updated": 1790755857000
  },
  {
    "id": "a02Ka00000mGmcoIAC",
    "name": "",
    "title": "VizDataService Crashes on Tableau Server Due to QualifiedName Comparison in tabcoredata.dll",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.3.4 and earlier 2025.3.X",
    "primaryVer": "2025.3.4",
    "allVersions": [
      "2025.3.4",
      "2025.3"
    ],
    "reports": 3,
    "workId": "W-20345422",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mGmcoIAC",
    "summary": "Under certain conditions, the VizDataService (VDS) process on Tableau Server crashes at a QualifiedName equality comparison in tabcoredata.dll if you set VDS feature to true, which can result in repeated process failures and excessive crash dump files accumulating on disk.Users may experience intermittent failures while connecting to published data sources from Tableau Desktop or while accessing workbooks connected to published data sources on Tableau Server after upgrade. This may result in err",
    "created": 1780057953000,
    "updated": 1784618295000
  },
  {
    "id": "a02Ka00000f9G1XIAU",
    "name": "",
    "title": "Error Occurs When Selecting WDC 3.0 Connector in Web Edit on Tableau Server",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3.12, 2024.2.6",
    "primaryVer": "2023.3.12",
    "allVersions": [
      "2023.3.12",
      "2024.2.6"
    ],
    "reports": 1,
    "workId": "W-18516053",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000f9G1XIAU",
    "summary": "When attempting to connect to a data source using WDC 3.0 from web authoring on Tableau Server, the following error occurs:Tableau Server (Version <version number>) encountered an error while working with this worksheet.Additionally, the browser receives HTTP 503 error from Gateway process.",
    "created": 1747769362000,
    "updated": 1789676837000
  },
  {
    "id": "a02Ka00000lkSLAIA2",
    "name": "",
    "title": "Snowflake extract failures with Tableau Server 2025.3.1 release",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.3.1",
    "primaryVer": "2025.3.1",
    "allVersions": [
      "2025.3.1"
    ],
    "reports": 4,
    "workId": "W-20556497",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000lkSLAIA2",
    "summary": "After upgrading to Tableau Server 2025.3.1, Snowflake live connections and extract refreshes using embedded username and password credentials may fail with the error: \"Role '{ROLE NAME}' specified in the connect string is not granted to this user. Contact your local system administrator, or attempt to login with another role, e.g. PUBLIC.\"",
    "created": 1765923507000,
    "updated": 1783487056000
  },
  {
    "id": "a02Ka00000mEiJmIAK",
    "name": "",
    "title": "Truncation of Database Names in the Virtual Connection Editor (VCE) for the Palantir Connector on Tableau Cloud and Tableau Server",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "AC-260",
    "primaryVer": "",
    "allVersions": [],
    "reports": 0,
    "workId": "W-22287115",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mEiJmIAK",
    "summary": "In Tableau Cloud and Tableau Server, database names displayed in the Virtual Connection Editor (VCE) dropdown list are truncated with an ellipsis (...), regardless of the width of the connections pane. This prevents users from viewing full database names when making selections. The issue is particularly impactful for sources such as Palantir Foundry, where longer hierarchical paths are shortened and difficult to distinguish.",
    "created": 1777620746000,
    "updated": 1785476911000
  },
  {
    "id": "a02Ka00000mGNtWIAW",
    "name": "",
    "title": "In Tableau Server 2025.1.x or higher, Data Source Revision History returns latest version instead of selected Historical Revision",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2025.1.x or higher",
    "primaryVer": "2025.1",
    "allVersions": [
      "2025.1"
    ],
    "reports": 5,
    "workId": "W-22574237",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mGNtWIAW",
    "summary": "After upgrading Tableau Server from 2024.2.x to 2025.1.x or higher, the Revision History is not working as expected. When a user downloads an older revision of a data source (e.g., March 20th) from Tableau Server, the latest changes are still visible in older version.",
    "created": 1779272202000,
    "updated": 1789503206000
  },
  {
    "id": "a02g7000006wTFtAAM",
    "name": "",
    "title": "Some extract refreshes using embedded data sources are failing in Tableau Server version 2025.1.16 and later.",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2025.1.16, 2025.3.7, 2026.2.2",
    "primaryVer": "2025.1.16",
    "allVersions": [
      "2025.1.16",
      "2025.3.7",
      "2026.2.2"
    ],
    "reports": 0,
    "workId": "W-23808933",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000006wTFtAAM",
    "summary": "After upgrading to Tableau Server 2025.1.16, 2025.3.7 or 2026.2.2 or higher, some extract refresh fail consistently with Unexpected Error or LogicAssert AD499656. The extract refreshes are successful on Tableau Desktop using the same driver.Impacted workbooks include both of the following criteria:An embedded datasource using the Other Databases (JDBC) connectorContain a calculated field which uses the COUNT([field]) function where it's possible for the field evaluated in the calculation to cont",
    "created": 1786526225000,
    "updated": 1790705456000
  },
  {
    "id": "a02Ka00000lnCtWIAU",
    "name": "",
    "title": "Disk Usage Increases on Tableau Server When Running for Long Periods",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.13",
    "primaryVer": "2024.2.13",
    "allVersions": [
      "2024.2.13"
    ],
    "reports": 1,
    "workId": "W-20396770",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000lnCtWIAU",
    "summary": "In environments where Tableau Server has been running for a long time without being stopped or restarted, disk usage may gradually increase.",
    "created": 1768885028000,
    "updated": 1771576258000
  },
  {
    "id": "a02Ka00000mGNtRIAW",
    "name": "",
    "title": "Tableau Server: Inconsistent matching results when using global quick search dropdown",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2025.3.5",
    "primaryVer": "2025.3.5",
    "allVersions": [
      "2025.3.5"
    ],
    "reports": 1,
    "workId": "W-22566918",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mGNtRIAW",
    "summary": "Tableau Server global quick search is returning inconsistent results. Specifically, certain content containing underscores (_) is omitted from the dropdown quick search results as well as the main search results after pressing Enter/Return.",
    "created": 1779271448000,
    "updated": 1784142124000
  },
  {
    "id": "a02Ka00000mnJQtIAM",
    "name": "",
    "title": "Server-side rendered views display blank while \"Pause Automatic Updates\" is enabled in Tableau Server 2023.3 and later",
    "status": "Solution in Progress",
    "statusType": "open",
    "foundIn": "2023.3.0",
    "primaryVer": "2023.3.0",
    "allVersions": [
      "2023.3.0"
    ],
    "reports": 0,
    "workId": "W-21959556",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mnJQtIAM",
    "summary": "After upgrading Tableau Server to version 2023.3 or later, views may fail to render and display as a blank screen if the \"Pause Automatic Updates\" feature is enabled. This issue specifically impacts environments or workbooks using server-side rendering.",
    "created": 1776067938000,
    "updated": 1787774327000
  },
  {
    "id": "a02Ka00000mTJjrIAG",
    "name": "",
    "title": "Extract refresh fails with error \"Couldn't find a key during dictionary lookup\" after upgrading Tableau Server from 2023.1.7 to 2025.1.8",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2025.1.8",
    "primaryVer": "2025.1.8",
    "allVersions": [
      "2025.1.8"
    ],
    "reports": 2,
    "workId": "W-21421879",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mTJjrIAG",
    "summary": "Extract refresh fails with error \"Couldn't find a key during dictionary lookup\" after upgrading  Tableau Server from 2023.1.7 to 2025.1.8 for Hyper files originally created in version 2023.1.7.The issue observed in 2025.1.8 and newer.",
    "created": 1772533522000,
    "updated": 1789734476000
  },
  {
    "id": "a02Ka00000mGFVtIAO",
    "name": "",
    "title": "Increased Extract Refresh Times After Upgrading to Tableau Server or Tableau Desktop 2024.2",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2024.2",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 0,
    "workId": "W-20954853",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mGFVtIAO",
    "summary": "After upgrading Tableau Server to version 2024.2 or later version, extract refresh times for some specific data sources may become significantly longer.",
    "created": 1778759118000,
    "updated": 1779411390000
  },
  {
    "id": "a02Ka00000kWJqUIAW",
    "name": "",
    "title": "Tableau Server: Extract refresh fails but no notification is received",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2025.1.5",
    "primaryVer": "2025.1.5",
    "allVersions": [
      "2025.1.5"
    ],
    "reports": 4,
    "workId": "W-20082278",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000kWJqUIAW",
    "summary": "Refresh of extract fails, the notification for the failure is not received. The notification is not sent for Oracle, PostgreSQL and Snowfake refreshes.",
    "created": 1762761624000,
    "updated": 1787774236000
  },
  {
    "id": "a02g7000007wfZpAAI",
    "name": "",
    "title": "Blank or spinning page with repeated authentication errors when accessing workbooks through Tableau Server Independent Gateway \"Relay connection\"",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2024.2.X, 2026.1.X",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2",
      "2026.1"
    ],
    "reports": 0,
    "workId": "W-23489249",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000007wfZpAAI",
    "summary": "When Tableau Server is accessed externally through a Tableau Server Independent Gateway (TSIG) \"Relay connection\", when not using \"Default\" page users may see a blank or continuously spinning page instead of their workbook. This affects environments where Tableau Server is reachable through two separate URLs \u2014 an internal one and an external one routed through the independent gateway. Workbooks load normally through the internal URL, but loading the same workbook through the external, gateway-ro",
    "created": 1787744664000,
    "updated": 1790182368000
  },
  {
    "id": "a02g7000006hhavAAA",
    "name": "",
    "title": "[Google Workspace Addon] Saving site config for Tableau Server not working",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2026.2",
    "primaryVer": "2026.2",
    "allVersions": [
      "2026.2"
    ],
    "reports": 0,
    "workId": "W-23560504",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000006hhavAAA",
    "summary": "When trying to save a site config for Tableau Server on the Tableau Add-on for Google Workspace the request is being rejected.",
    "created": 1785350204000,
    "updated": 1787932374000
  },
  {
    "id": "a02g7000008hLqzAAE",
    "name": "",
    "title": "Synchronizing AD groups fails in Tableau Server after update to 2026.2.0 due to missing permissions",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "Summer '26",
    "primaryVer": "",
    "allVersions": [],
    "reports": 7,
    "workId": "W-24096204",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000008hLqzAAE",
    "summary": "When \"Managing Users\" is set to \"Only Server Administrators,\" synchronizing more than one Active Directory (AD) group on Tableau Server fails with a permission error, even when the user performing the sync is a Server Administrator. This affects both manual synchronization of individual groups and the \"Synchronize All Groups\" action. This issue affects Tableau Server 2026.2.0 and later.",
    "created": 1788512112000,
    "updated": 1791468608000
  },
  {
    "id": "a02g7000006h237AAA",
    "name": "",
    "title": "Tableau Cloud/Server \u2013 PDF Export \u2013 Landscape orientation renders as Portrait",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2026.2",
    "primaryVer": "2026.2",
    "allVersions": [
      "2026.2"
    ],
    "reports": 0,
    "workId": "W-23521088",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000006h237AAA",
    "summary": "When a workbook's Page Setup orientation is set to Landscape in Tableau Desktop and published to Tableau Cloud or Server, PDFs generated by appending .pdf to the view URL render in Portrait orientation.",
    "created": 1785309229000,
    "updated": 1787953152000
  },
  {
    "id": "a02g700000ANKZlAAP",
    "name": "",
    "title": "Prep Conductor no longer reads custom connection files from the legacy Datasources folder after upgrading to Tableau Server 2026.2",
    "status": "Solution in Progress",
    "statusType": "open",
    "foundIn": "2026.2.x",
    "primaryVer": "2026.2",
    "allVersions": [
      "2026.2"
    ],
    "reports": 0,
    "workId": "W-24253570",
    "url": "https://help.salesforce.com/s/issue?id=a02g700000ANKZlAAP",
    "summary": "On Tableau Server 2026.2, Prep Conductor no longer reads customization files (such as .tds/.tdc or .properties files) placed in the previous flowprocessor/Datasources directory. Customers who rely on custom connection files for scheduled Prep flows \u2014 for example, files enabling database driver customizations \u2014 may find that flows using those customizations fail after upgrading to 2026.2, even though the same files worked correctly on earlier versions. This occurs because Prep Conductor now expec",
    "created": 1790099748000,
    "updated": 1792150713000
  },
  {
    "id": "a02Ka00000kVWFrIAO",
    "name": "",
    "title": "Changes to User Account Settings By Administrator Change Administrator's Settings instead of User's",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2023.3, 2024.2, 2025.1, 2025.2, 2025.3",
    "primaryVer": "2023.3",
    "allVersions": [
      "2023.3",
      "2024.2",
      "2025.1",
      "2025.2",
      "2025.3"
    ],
    "reports": 6,
    "workId": "W-20086677",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000kVWFrIAO",
    "summary": "When a Tableau Server or Site Administrator attempts to make changes to another user's account settings, the changes are actually being applied to the Admin's My Account Settings rather than the other user's account settings. This occurs on both Tableau Server and Tableau Cloud.Other behaviour that might be seen related to this issue is: An error occurs when attempting to set a specific Page or Workbook as the Default Start Page for all users on Tableau Server Version 2025.3.X\ufeffThe error message ",
    "created": 1762298184000,
    "updated": 1787774809000
  },
  {
    "id": "a02Ka00000mUW20IAG",
    "name": "",
    "title": "Flow Run History Overwritten by Failed Steps in Tableau Server 2025.1 or Later",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1",
    "primaryVer": "2025.1",
    "allVersions": [
      "2025.1"
    ],
    "reports": 4,
    "workId": "W-21355402",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mUW20IAG",
    "summary": "In Tableau Server 2025.1 and later, when a flow with multiple output steps fails at any point, the run history (status and row counts) for previously successful steps is incorrectly overwritten as failed.The following issues occur on the Run History screen:Status Synchronization: Steps initially marked as \"Success\" are changed to \"Failed.\"Loss of Row Counts: The \"Rows Generated\" for successful steps is displayed as \"0.\"Time Synchronization: \"End Time\" and \"Duration\" for all steps are overwritten",
    "created": 1772674627000,
    "updated": 1787935629000
  },
  {
    "id": "a02g7000005eoWHAAY",
    "name": "",
    "title": "Vertical text in dashboard headers renders horizontally in Tableau Cloud and Tableau Server",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2026.2",
    "primaryVer": "2026.2",
    "allVersions": [
      "2026.2"
    ],
    "reports": 4,
    "workId": "W-23168850",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000005eoWHAAY",
    "summary": "Vertical text configured in dashboard headers is rendering horizontally instead of vertically in Tableau Cloud. This causes text overlap and significantly impacts readability. The issue is isolated to client-side rendering. ",
    "created": 1782715535000,
    "updated": 1787935603000
  },
  {
    "id": "a02Ka00000mHI6NIAW",
    "name": "",
    "title": "Process Status icons not displaying on the Tableau Server Process Status page",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2026.2",
    "primaryVer": "2026.2",
    "allVersions": [
      "2026.2"
    ],
    "reports": 8,
    "workId": "W-22552638",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mHI6NIAW",
    "summary": "On Tableau Server 2026.2, the Process status icons are not displaying",
    "created": 1781874268000,
    "updated": 1785796417000
  },
  {
    "id": "a02Ka00000mTJl4IAG",
    "name": "",
    "title": "Tableau Cloud/Bridge 2025.3.2 exhibits latency for MS SQL Stored Procedure parameter updates compared to Tableau Server.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.3",
    "primaryVer": "2025.3",
    "allVersions": [
      "2025.3"
    ],
    "reports": 3,
    "workId": "W-21288907",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mTJl4IAG",
    "summary": "Data sources connected to MS SQL Stored Procedures show significantly slower performance through Tableau Bridge. Specifically, dashboard interactions involving Initial SQL parameters take twice as long to resolve as they do on Tableau Server.",
    "created": 1772541121000,
    "updated": 1785430080000
  },
  {
    "id": "a02Ka00000mmhhBIAQ",
    "name": "",
    "title": "Hyper Queries Are Missing from the Tableau Resource Monitoring Tool When Monitoring Tableau Server 2024.3 or Newer",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.3+",
    "primaryVer": "2024.3",
    "allVersions": [
      "2024.3"
    ],
    "reports": 1,
    "workId": "W-21723407",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mmhhBIAQ",
    "summary": "In the Tableau Resource Monitoring Tool (RMT), the Hyper Queries section under the Activity tab does not display any monitoring results when monitoring Tableau Server 2024.3 or newer. Instead, the message \"No hyper query executions found.\" is displayed, even when Hyper query activities exist on the server.",
    "created": 1774946890000,
    "updated": 1785340120000
  },
  {
    "id": "a02Ka00000mnJSlIAM",
    "name": "",
    "title": "Tableau Server: Load time of dashboard/view between 2024.2.1 and 2024.2.13 with NULL-SAFE joins has increased",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2024.2.x",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 2,
    "workId": "W-21934516",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mnJSlIAM",
    "summary": "Increased load time of dashboard/view after 2024.2.1 versions of Tableau Server (2024.2.2 and later).",
    "created": 1776090968000,
    "updated": 1791235322000
  },
  {
    "id": "a02Ka00000mT6foIAC",
    "name": "",
    "title": "Tableau Resource Management Tool Does Not Connect To Tableau Server 2025.1+'s RDS External Repository",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2025.1.0",
    "primaryVer": "2025.1.0",
    "allVersions": [
      "2025.1.0"
    ],
    "reports": 0,
    "workId": "W-21333265",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mT6foIAC",
    "summary": "When testing the repository connection to Tableau Server 2025.1+ which has been configured with an external Amazon RDS Repository, from Tableau Resource Management Tool master's webpage the error \"Unable to connect to the Tableau repository. Make sure repository access is enabled on Tableau Server.\" will be generated even though the connection to the same repository works when tested from Tableau Desktop.This effects Tableau Server 2025.1+",
    "created": 1772116028000,
    "updated": 1774416282000
  },
  {
    "id": "a02Ka00000mHGrhIAG",
    "name": "",
    "title": "Tableau Prep flows with Hyper Inputs Run Slower on Tableau Server or Cloud compared to Tableau Prep Builder",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2, 2025.1, 2025.3, 2026.1",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2",
      "2025.1",
      "2025.3",
      "2026.1"
    ],
    "reports": 3,
    "workId": "W-22717573",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mHGrhIAG",
    "summary": "When running a flow containing multiple input steps connecting to different Hyper extract sources, the flow runs significantly slow on Tableau Server/Cloud Prep Conductor than it runs when executed in Tableau Prep Builder.",
    "created": 1781712431000,
    "updated": 1790555832000
  },
  {
    "id": "a02Ka00000mH5pFIAS",
    "name": "",
    "title": "Tableau Cloud / Server : Flow Image Doesn't Appear in Flow's Overview Tab",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2026.2.0",
    "primaryVer": "2026.2.0",
    "allVersions": [
      "2026.2.0"
    ],
    "reports": 6,
    "workId": "W-22067276",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mH5pFIAS",
    "summary": "When publishing flows to Tableau Cloud or Tableau Server, the flow image may fail to capture. As a result, the image is sometimes missing in the UI, displaying the message \"Flow image unavailable\" instead. The flow itself still appears fine when opened it in Prep Web Authoring. This issue has been occurring since early June 2026 on Tableau Cloud, and is also present in Tableau Server 2026.2.0.",
    "created": 1781227845000,
    "updated": 1788198533000
  },
  {
    "id": "a02Ka00000mQybrIAC",
    "name": "",
    "title": "Performance Recording Captures Identical Data Across All Workbooks in Tableau Server 2025.3",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.3.x",
    "primaryVer": "2025.3",
    "allVersions": [
      "2025.3"
    ],
    "reports": 15,
    "workId": "W-21234205",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mQybrIAC",
    "summary": "Taking a Performance recording of any workbook on Tableau Server 2025.3, presents the same data.",
    "created": 1770821457000,
    "updated": 1787935771000
  },
  {
    "id": "a02Ka00000f9WdSIAU",
    "name": "",
    "title": "Tableau Server: When opening an embedded dashboard, TableauRuntimeException error occurs.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1.0",
    "primaryVer": "2025.1.0",
    "allVersions": [
      "2025.1.0"
    ],
    "reports": 21,
    "workId": "W-18405737",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000f9WdSIAU",
    "summary": "Generating Trusted Auth tickets for sites OTHER than the default site, Tableau Server presents the following ERROR when trying to open the view:com.tableausoftware.server.status.reporting.TableauRuntimeException\",\"message\":\"An unexpected error occurred on the server. If you continue to receive this error please contact your Tableau Server Administrator.",
    "created": 1747900061000,
    "updated": 1757411704000
  },
  {
    "id": "a02g7000007SYh3AAG",
    "name": "",
    "title": "Tableau Becomes Unresponsive When Typing a Long Snowflake Server Hostname in the Key-Pair Authentication Dialog",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2026.2.1",
    "primaryVer": "2026.2.1",
    "allVersions": [
      "2026.2.1"
    ],
    "reports": 0,
    "workId": "W-23942471",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000007SYh3AAG",
    "summary": "When a user manually types a long Snowflake server hostname into the \"Add Key Pair Authentication Credential\" dialog in Tableau UI, the browser tab can become unresponsive and display a \"Page Unresponsive\" prompt. This happens because the dialog re-validates the hostname on every keystroke, and validation becomes exponentially slower once the hostname reaches roughly 30\u201335 characters \u2014 a length many real Snowflake account URLs exceed (e.g., a hostname like myorg-myaccount.snowflakecomputing.com ",
    "created": 1787324973000,
    "updated": 1788890053000
  },
  {
    "id": "a02Ka00000mmIwVIAU",
    "name": "",
    "title": "Error When Deleting a User Owning Collections via Tableau REST API with the mapAssetsTo Option",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2024.2",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 0,
    "workId": "W-21643645",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mmIwVIAU",
    "summary": "When executing the Remove User REST API with the mapAssetsTo option, the deletion fails if the user owns any Collections.Command:DELETE /api/api-version/sites/site-id/users/user-id?mapAssetsTo=admin-user-id",
    "created": 1773906753000,
    "updated": 1774975319000
  },
  {
    "id": "a02g70000088opRAAQ",
    "name": "",
    "title": "Prep Flow Fails with tabminerva.exe Crash with Windows Exception Code 0xc0000374 on Tableau Server",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.3.2",
    "primaryVer": "2025.3.2",
    "allVersions": [
      "2025.3.2"
    ],
    "reports": 2,
    "workId": "W-22536479",
    "url": "https://help.salesforce.com/s/issue?id=a02g70000088opRAAQ",
    "summary": "When running Tableau Prep flows on Tableau Server 2025.3.2, the process may intermittently fail or stop responding (hang). The following application error is recorded in the Windows Event Viewer or system logs:\u00a0Faulting application name: tabminerva.exeFaulting module name: ntdll.dllException code: 0xc0000374 (Heap Corruption)Cause:This issue is caused by a multi-threading memory race condition within the flow execution engine (tabminerva.exe). Multiple internal processes attempt to access and fr",
    "created": 1787894779000,
    "updated": 1787900751000
  },
  {
    "id": "a02Ka00000kVUEWIA4",
    "name": "",
    "title": "Blank Screen Displays When Accessing Data Sources Page in Tableau Server After Data Source Deletion and Re-Index",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1.5",
    "primaryVer": "2025.1.5",
    "allVersions": [
      "2025.1.5"
    ],
    "reports": 3,
    "workId": "W-20039210",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000kVUEWIA4",
    "summary": "Deletion of datasource, and then re-indexing, causes errors, and items to not load properly in tableau server. ",
    "created": 1762197165000,
    "updated": 1781041597000
  },
  {
    "id": "a02Ka00000kTsjhIAC",
    "name": "",
    "title": "In Tableau Server 2025.1, Intermittent Blank Total Values in Crosstab CSV/Excel Export",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2025.1.8",
    "primaryVer": "2025.1.8",
    "allVersions": [
      "2025.1.8"
    ],
    "reports": 1,
    "workId": "W-19793024",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000kTsjhIAC",
    "summary": "In Tableau Server 2025.1, total values are intermittently missing (blank) when exporting a large crosstab view to a CSV or Excel file. This issue is specific to 2025.1, as the exact same workbook and view export successfully from versions 2023.3 and 2024.2.",
    "created": 1761192825000,
    "updated": 1784916101000
  },
  {
    "id": "a02Ka00000mHDCSIA4",
    "name": "",
    "title": "Non-Deterministic JWT Identity Resolution in Tableau Server 2025.3.4",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.3.4",
    "primaryVer": "2025.3.4",
    "allVersions": [
      "2025.3.4"
    ],
    "reports": 3,
    "workId": "W-22062337",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mHDCSIA4",
    "summary": "From version 2025.3.4, embedded reports utilizing Tableau Connected Apps encounter a 401 Unauthorized error (errorCode=16) when the JWT sub claim fails to meet inconsistent requirements for user record resolution.",
    "created": 1781532318000,
    "updated": 1785429497000
  },
  {
    "id": "a02Ka00000eNld5IAC",
    "name": "",
    "title": "HTTP 404 Error When Viewing Performance Recording Workbook in Tableau Server 2025.1",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1",
    "primaryVer": "2025.1",
    "allVersions": [
      "2025.1"
    ],
    "reports": 9,
    "workId": "W-18198532",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000eNld5IAC",
    "summary": "When attempting to view performance recording data in Tableau Server 2025.1 by clicking the \"See performance recording data\" button, an HTTP 404 error (File not found) is encountered.But the performance recording data itself is still being captured and stored in files named\u00a0metricsDataxxxx.tab, located in the directory\u00a0below:Linux: /var/opt/tableau/tableau_server/data/tabsvc/temp/vizqlserver_<version number>/Windows: \u00a0<Install drive>:\\<Install path>\\data\\tabsvc\\temp\\vizqlserver_<version number>\\",
    "created": 1744007907000,
    "updated": 1767197244000
  },
  {
    "id": "a02g7000006f1fqAAA",
    "name": "",
    "title": "Tableau Cloud/Bridge: Flows are failing intermittently with a 'Malformed response from Tableau Data Server' error.",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 4,
    "workId": "W-23568621",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000006f1fqAAA",
    "summary": "Flows running on Tableau Cloud via Bridge failing intermittently with the error \"System error: An error occurred while communicating with the data source Malformed response from Tableau Data Server.\"",
    "created": 1785160682000,
    "updated": 1790713305000
  },
  {
    "id": "a02Ka00000mQmPeIAK",
    "name": "",
    "title": "Tableau Server zoom controls may remain visible after \u201cHide Toolbar\u201d has been selected, and the \"Zoom Home\" button does not function as expected",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "Tableau Server 2024.x, 2025.x",
    "primaryVer": "",
    "allVersions": [],
    "reports": 0,
    "workId": "W-20451693",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mQmPeIAK",
    "summary": "On Tableau Server, dashboards may display zoom controls after interacting with the view, even when the View Toolbar option is set to Hidden. In Tableau Desktop, hiding the View Toolbar prevents the zoom controls from appearing during similar interactions. However, after publishing the workbook to Tableau Server, adjusting parameters (such as date parameters) can cause the Zoom Home button to appear.When the Zoom Home button is visible on Tableau Server, selecting it does not reset the view to it",
    "created": 1770146256000,
    "updated": 1785248171000
  },
  {
    "id": "a02g7000008YtThAAK",
    "name": "",
    "title": "After a successful initial sign-in, subsequent login to Tableau Cloud/Server from Tableau Desktop fail with error \"The URL type: 39/40\"",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "Tableau Desktop 2026.2.x",
    "primaryVer": "2026.2",
    "allVersions": [
      "2026.2"
    ],
    "reports": 2,
    "workId": "W-24053134",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000008YtThAAK",
    "summary": "When using the Sign In to Another Server option in Tableau Desktop. When this option is selected, Tableau Desktop successfully redirects you to the external browser, and authentication is completed successfully inside the browser. However, after switching back to Tableau Desktop, the following error is displayed:Unable to complete action:Unable to find registered URL. The URL type: 40OrUnable to complete action:Unable to find registered URL. The URL type: 39",
    "created": 1788409618000,
    "updated": 1790181917000
  },
  {
    "id": "a02Ka00000lZuwVIAS",
    "name": "",
    "title": "Google BigQuery may deny access to views with embedded access tokens for users who do not have underlying data source permissions in Tableau Server",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2023.3.5",
    "primaryVer": "2023.3.5",
    "allVersions": [
      "2023.3.5"
    ],
    "reports": 2,
    "workId": "W-20426517",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000lZuwVIAS",
    "summary": "When a workbook is published using an embedded access token that has valid permissions to a Google BigQuery project, some users may see a \"The Google BigQuery service has denied access for this request. Access Denied: Project <Google BigQuery project name>: User does not have bigquery.jobs.create permission in project <Google BigQuery project name>. Unable to connect to the Google BigQuery server. Check that the server is running and that you have access privileges to the requested database.\" er",
    "created": 1764871902000,
    "updated": 1776898615000
  },
  {
    "id": "a02Ka00000mnFu1IAE",
    "name": "",
    "title": "Salesforce OAuth \u201cTest Connection\u201d works on the initial attempt but reliably fails on all subsequent attempts in Tableau Server 2025.3.x.",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2025.3.1",
    "primaryVer": "2025.3.1",
    "allVersions": [
      "2025.3.1"
    ],
    "reports": 6,
    "workId": "W-21976360",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mnFu1IAE",
    "summary": "The Salesforce OAuth \u201cTest Connection\u201d process completes successfully on the first attempt, indicating that the initial authentication flow and token exchange are functioning as expected. However, all subsequent connection tests consistently fail, returning a TokenResponseException with the error invalid_grant.",
    "created": 1776056482000,
    "updated": 1791202966000
  },
  {
    "id": "a02Ka00000kWKHIIA4",
    "name": "",
    "title": "Tableau Server: Lineage backfill stalled with GraphQL returning error \"Still creating the Metadata API Store\"",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1.5",
    "primaryVer": "2025.1.5",
    "allVersions": [
      "2025.1.5"
    ],
    "reports": 5,
    "workId": "W-20127029",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000kWKHIIA4",
    "summary": "After upgrading from 2024.2.3 to 2025.1.5, lineage is not working and produces the following error:GraphQL query unhandled error in result. message=Still creating the Metadata API Store. Results from the query might be incomplete at this time., path=null, errorType=null",
    "created": 1762786975000,
    "updated": 1790089598000
  },
  {
    "id": "a02Ka00000mQo2nIAC",
    "name": "",
    "title": "Server Authentication Failure and Web Data Connector (WDC) Connectivity Issue \u2013 Tableau Desktop 2025.3",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.3 and above",
    "primaryVer": "2025.3",
    "allVersions": [
      "2025.3"
    ],
    "reports": 3,
    "workId": "W-21166651",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mQo2nIAC",
    "summary": "In Tableau Desktop version 2025.3, the Identity Provider (IdP) authentication page fails to render the username input field. As a result, users experience authentication failures when attempting to sign in to Tableau Server from Tableau Desktop versions 2025.3 and above.This behavior also prevents successful connections to Web Data Connectors (WDCs)",
    "created": 1770276774000,
    "updated": 1784104119000
  },
  {
    "id": "a02Ka00000mGGGtIAO",
    "name": "",
    "title": "The site selection dropdown is displayed when login to Tableau Server from Tableau Desktop even though only a single site is configured",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "Tableau Server 2025.3+, Any Desktop version of (2025.1, 2025.3, 2026.1)",
    "primaryVer": "2025.3",
    "allVersions": [
      "2025.3",
      "2025.1",
      "2025.3",
      "2026.1"
    ],
    "reports": 0,
    "workId": "W-22337868",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mGGGtIAO",
    "summary": "When logging into Tableau Server from Tableau Desktop using the external browser authentication flow, the site selection dropdown (site picker) is displayed after successful authentication \u2014 even when the user is a member of only a single site.The site picker only appears when the user already has an active Tableau Server session open in their default browser (Chrome/Edge). If no active session exists, the picker is not shown.",
    "created": 1778834074000,
    "updated": 1787952936000
  },
  {
    "id": "a02g7000006jPZtAAM",
    "name": "",
    "title": "Snowflake OAuth \"Prompt User\" Datasources Published via REST API cause authentication loop for End Users in Tableau Cloud or Tableau Server",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2026.2.3",
    "primaryVer": "2026.2.3",
    "allVersions": [
      "2026.2.3"
    ],
    "reports": 0,
    "workId": "W-23642337",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000006jPZtAAM",
    "summary": "When a Snowflake OAuth datasource configured for \"Prompt user\" authentication is published to Tableau Cloud or Tableau Server using the REST API\u2014 and the publishing user has no saved Snowflake OAuth credential \u2014 end users who attempt to connect through a workbook built on that datasource enter an infinite credential-selection loop: selecting or adding a credential has no effect, and the sign-in prompt continuously reappears.",
    "created": 1785477950000,
    "updated": 1787788349000
  },
  {
    "id": "a02Ka00000iuJ4lIAE",
    "name": "",
    "title": "Issue Editing Data Source Credentials with Long Passwords in Tableau Server",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.11",
    "primaryVer": "2024.2.11",
    "allVersions": [
      "2024.2.11"
    ],
    "reports": 1,
    "workId": "W-19373381",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000iuJ4lIAE",
    "summary": "When a password exceeds 117 characters, attempting to edit a data source connection directly in Tableau Server results in the following error:\"Could not connect to server.\"",
    "created": 1755695149000,
    "updated": 1784916464000
  },
  {
    "id": "a02g7000006gU9VAAU",
    "name": "",
    "title": "Live Published Data Sources connected to Sybase IQ with ISO_BINENG collation in Tableau Server results in a removed duplicate members from group error",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2025.1.7, 2025.3.0",
    "primaryVer": "2025.1.7",
    "allVersions": [
      "2025.1.7",
      "2025.3.0"
    ],
    "reports": 1,
    "workId": "W-23609571",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000006gU9VAAU",
    "summary": "When a published data source is selected in Tableau Desktop\u2019s Search for Data dialog and Connect is clicked for a live connection to the data source, the following error is returned from Tableau Server:Unable to complete actionThe connection to the data source might have been lost.Error Code: AB9D5A58Removed # duplicate members from the group",
    "created": 1785263164000,
    "updated": 1790014981000
  },
  {
    "id": "a02g7000005fPxFAAU",
    "name": "",
    "title": "Editing Published Redshift Data Sources using Oauth and Tableau Bridge Return \"This server violates the IP allowlist/blocklist restrictions.\"",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2026.2",
    "primaryVer": "2026.2",
    "allVersions": [
      "2026.2"
    ],
    "reports": 1,
    "workId": "W-23026420",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000005fPxFAAU",
    "summary": "When using the recently released feature of web editing from Tableau Cloud for data sources using Tableau Bridge, there is an error when using extracts of Redshift data sources using OAuth authentication:This server violates the IP allowlist/blocklist restrictions.\ufeffThe error only occurs with Redshift extract data sources using OAuth, Redshift live connections using OAuth do not encounter this error.",
    "created": 1782749603000,
    "updated": 1787935634000
  },
  {
    "id": "a02Ka00000mo6HqIAI",
    "name": "",
    "title": "Snowflake Authentication Dropdown Does Not Populate When Using Keypair In Tableau Cloud/Server",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.3.2",
    "primaryVer": "2025.3.2",
    "allVersions": [
      "2025.3.2"
    ],
    "reports": 3,
    "workId": "W-21934202",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mo6HqIAI",
    "summary": "Key Pair credentials can be added to Manage Saved Credentials for Data Connections with HTTP and successfully validate but will not appear in drop down options for selecting a data source",
    "created": 1776693416000,
    "updated": 1785792124000
  },
  {
    "id": "a02Ka00000lmRRpIAM",
    "name": "",
    "title": "Older Tableau Server log files may not be removed by tsm maintenance cleanup while Tableau server is running",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.13",
    "primaryVer": "2024.2.13",
    "allVersions": [
      "2024.2.13"
    ],
    "reports": 2,
    "workId": "W-20915821",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000lmRRpIAM",
    "summary": "If your Tableau Server environment uses data sources that require a .taco file, older Tableau Server log files may not be removed by \"tsm maintenance cleanup\" while Tableau server is running,",
    "created": 1768585617000,
    "updated": 1787953119000
  },
  {
    "id": "a02g7000005iQqLAAU",
    "name": "",
    "title": "Dashboards are unable to load after adjusting Filters with Error \"Resource Limit Exceeded\" in Tableau Server and Tableau Cloud",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2026.2.0",
    "primaryVer": "2026.2.0",
    "allVersions": [
      "2026.2.0"
    ],
    "reports": 2,
    "workId": "W-23237315",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000005iQqLAAU",
    "summary": "Customer dashboards in Tableau Cloud and Tableau Server are failing to load after adjusting filter values. The views get stuck on \"Computing Models\" and eventually time out with a \"Resource Limit Exceeded\" error",
    "created": 1782938411000,
    "updated": 1787935709000
  },
  {
    "id": "a02Ka00000mH7AjIAK",
    "name": "",
    "title": "When viewing dashboards with tiled worksheets in Tableau Server or Tableau Cloud, thin colored lines may appear between worksheets",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2026.1.0",
    "primaryVer": "2026.1.0",
    "allVersions": [
      "2026.1.0"
    ],
    "reports": 5,
    "workId": "W-22819918",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mH7AjIAK",
    "summary": "When viewing dashboards with tiled worksheets in Tableau Server or Tableau Cloud, thin lines may appear between worksheets, causing the background color of the layout container to be visible. This issue may be more noticeable at certain browser zoom levels.",
    "created": 1781302084000,
    "updated": 1787952537000
  },
  {
    "id": "a02Ka00000mGqQVIA0",
    "name": "",
    "title": "An Error Referencing Undefined Field When Using Localized Parameter Captions in New Content Web Authoring",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2025.1",
    "primaryVer": "2025.1",
    "allVersions": [
      "2025.1"
    ],
    "reports": 0,
    "workId": "W-22720770",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mGqQVIA0",
    "summary": "Parameter captions are not localized in new content web authoring on Tableau Server and Tableau Cloud. When using the localized caption (e.g. [\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc] in Japanese) an error occurs stating that it refers the undefined field. However the default caption like [Parameter] is allowed.\u00a0This issue occurs in Tableau Server version 2025.1 or later, and does not occurs in version 2024.2 or earlier. Tableau Desktop doesn't have this issue either.Issue happens in Tableau Server 2025.1 or above, not happens ",
    "created": 1780283639000,
    "updated": 1791391888000
  },
  {
    "id": "a02Ka00000gXYZdIAO",
    "name": "",
    "title": "A space appears between numbers and \"\u5e74\u5ea6\" in Tableau Server 2024.2",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2, 2025.1",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2",
      "2025.1"
    ],
    "reports": 0,
    "workId": "W-18628572",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000gXYZdIAO",
    "summary": "A space appears between numbers and \"\u5e74\u5ea6\" in Tableau Server 2024.2.No space appears between numbers and \"\u5e74\u5ea6\" in Tableau Server 2023.3 or earlier versions.This issue also occurs in Tableau Desktop and Tableau Cloud.",
    "created": 1750894822000,
    "updated": 1764969080000
  },
  {
    "id": "a02Ka00000mmWOaIAM",
    "name": "",
    "title": "After Upgrading Tableau Server to 2025.3.1, VizData Service Becomes Degraded",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "Tableau Server 2025.3.1",
    "primaryVer": "2025.3.1",
    "allVersions": [
      "2025.3.1"
    ],
    "reports": 2,
    "workId": "W-21179921",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mmWOaIAM",
    "summary": "In multi-node environments, after upgrading Tableau Server to 2025.3.1, VizData Service becomes degraded.",
    "created": 1774462897000,
    "updated": 1777048745000
  },
  {
    "id": "a02Ka00000lmUQ7IAM",
    "name": "",
    "title": "\"Connection Type\" Dropdown is Empty When Adding OAuth Client in Tableau Server",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "All supported versions",
    "primaryVer": "",
    "allVersions": [],
    "reports": 1,
    "workId": "W-20484963",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000lmUQ7IAM",
    "summary": "In Tableau Server, when navigating to\u00a0Settings\u00a0>\u00a0General\u00a0>\u00a0OAuth Clients Registry\u00a0>\u00a0Add OAuth Client\u00a0button, clicking the\u00a0Connection Type\u00a0dropdown shows no available connection types.This issue occurs when the\u00a0Let users save OAuth access tokens for data sources\u00a0option under\u00a0Settings\u00a0>\u00a0General\u00a0>\u00a0Saved Credentials for Data Sources\u00a0is\u00a0turned off.",
    "created": 1768805467000,
    "updated": 1781195331000
  },
  {
    "id": "a02g7000007OnmjAAC",
    "name": "",
    "title": "Tableau Cloud/Tableau Server 2026.2.1 doesn't allow to add Snowflake Key Pair authentication credentials when server name contains underscore",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2026.2.5 & 2026.2.1",
    "primaryVer": "2026.2.5",
    "allVersions": [
      "2026.2.5",
      "2026.2.1"
    ],
    "reports": 0,
    "workId": "W-23940104",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000007OnmjAAC",
    "summary": "Tableau Cloud/Tableau Server 2026.2.1 doesn't allow to add Snowflake Key Pair authentication credentials when server name contains underscores.The hostname validation for the Snowflake server field (no protocol/port/path) rejects hostnames containing underscores (e.g. my_server.snowflakecomputing.com). This is a regression introduced by W-21934202, which previously allowed underscores.",
    "created": 1787250157000,
    "updated": 1788888240000
  },
  {
    "id": "a02g7000009DpAnAAK",
    "name": "",
    "title": "When JMX is enabled, inplace upgrade to Tableau Server 2025.1.x fail due to AccessDeniedException on jmxpassword",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1",
    "primaryVer": "2025.1",
    "allVersions": [
      "2025.1"
    ],
    "reports": 0,
    "workId": "W-23361666",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000009DpAnAAK",
    "summary": "On Windows, if secure JMX (tsm maintenance jmx enable) has ever been enabled on a Tableau Server node, an in-place upgrade to 2025.1.x fails during service package deployment. The tabsvc service (and related services) fail to reach the INSTALL_FAILED state with a PermissionsException/AccessDeniedException on the jmxpassword config file, because the file's ACL restricts access exclusively to NT AUTHORITY\\NETWORK SERVICE, blocking the upgrade process from applying/validating permissions on it.This",
    "created": 1789022569000,
    "updated": 1789099182000
  },
  {
    "id": "a02g7000007IuKfAAK",
    "name": "",
    "title": "OAuth Sign-In Prompt Not Triggered for Expired Token in Workbook with a Live Federated PDS Connection in Tableau Server",
    "status": "Solution in Progress",
    "statusType": "open",
    "foundIn": "2025.3.5",
    "primaryVer": "2025.3.5",
    "allVersions": [
      "2025.3.5"
    ],
    "reports": 1,
    "workId": "W-23929788",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000007IuKfAAK",
    "summary": "When a Tableau workbook is connected to a live federated published data source containing an OAuth connection where the refresh token expires, users are met with an \"Unknown Server Error\" or \"An error occurred\" message instead of a sign-in prompt for the affected data source.",
    "created": 1787177719000,
    "updated": 1789746780000
  },
  {
    "id": "a02Ka00000mo7LKIAY",
    "name": "",
    "title": "In Tableau Server 2025.3.x, when a flow output is published with Hyper format it defaults to \"Extract.hyper\" and the output file path is missing.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.3.x",
    "primaryVer": "2025.3",
    "allVersions": [
      "2025.3"
    ],
    "reports": 2,
    "workId": "W-22155279",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mo7LKIAY",
    "summary": "When a Flow in Tableau Prep Builder is configured with \"Save Output to File\" and the output type is set to Hyper, publishing the Flow to Tableau Server 2025.3.x causes two UI issues in the Connections tab:The Output Name is incorrectly shown as Extract.hyper instead of the user-defined name.The Output Path is missing entirely.This behavior does not occur with Excel or CSV output types. It is also not seen in Tableau Server 2025.1.x and below",
    "created": 1776760493000,
    "updated": 1784491596000
  },
  {
    "id": "a02Ka00000mGu3cIAC",
    "name": "",
    "title": "Tableau Prep Flow Execution Causes High Load on RDBMS Due to Query Pushdown Optimization in Tableau Prep Builder / Tableau Server",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2025.1.10",
    "primaryVer": "2025.1.10",
    "allVersions": [
      "2025.1.10"
    ],
    "reports": 0,
    "workId": "W-22130496",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mGu3cIAC",
    "summary": "Under specific flow configurations, the query pushdown optimization mechanism in Tableau Prep Engine (Tableau Prep Conductor and Tableau Prep Builder) generates a disproportionately large number of queries against the connected Relational Database Management System (RDBMS). This overwhelms the database, causing timeouts or flow execution failures.This issue is caused by the pushdown optimization mechanism, which attempts to delegate data processing to the RDBMS side when multiple connections to ",
    "created": 1780517680000,
    "updated": 1787911046000
  },
  {
    "id": "a02Ka00000lkRaOIAU",
    "name": "",
    "title": "Encounter \u201cUncaught TypeError: Cannot Read Properties of Null(Reading \u2018Length\u2019)\u201d during Calculated Field Drag and Drop in Web Authoring Tableau Server",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.3.x",
    "primaryVer": "2025.3",
    "allVersions": [
      "2025.3"
    ],
    "reports": 0,
    "workId": "W-20586828",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000lkRaOIAU",
    "summary": "Users intermittently encounter an \u201cUncaught TypeError: Cannot read properties of null (reading \u2018length\u2019)\u201d error when attempting to drag a aggregate field from calculated field into the Marks shelf during Web Authoring on Tableau Server.",
    "created": 1765872672000,
    "updated": 1781191187000
  },
  {
    "id": "a02g7000005enf3AAA",
    "name": "",
    "title": "Unable to load histogram details for a Virtual Connection table in Tableau Cloud and Tableau Server",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2026.2",
    "primaryVer": "2026.2",
    "allVersions": [
      "2026.2"
    ],
    "reports": 1,
    "workId": "W-23187899",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000005enf3AAA",
    "summary": "When users click the \"Show profile pane\" icon\u00a0to load histogram information in a Virtual Connection (VConn) Table Details, the operation fails with the generic error: \"An error has occurred. Please try again.\"\u00a0",
    "created": 1782714387000,
    "updated": 1790063586000
  },
  {
    "id": "a02Ka00000mm25uIAA",
    "name": "",
    "title": "Emails sent via Tableau Cloud or Server shared content are missing the Tableau logo",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2025.1.7",
    "primaryVer": "2025.1.7",
    "allVersions": [
      "2025.1.7"
    ],
    "reports": 0,
    "workId": "W-21004780",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mm25uIAA",
    "summary": "Emails sent via Tableau Cloud or Server shared content are missing the Tableau logo",
    "created": 1773256308000,
    "updated": 1781040708000
  },
  {
    "id": "a02Ka00000mGjIZIA0",
    "name": "",
    "title": "Amazon S3 refresh fails with a bad .taco error after upgrading to Tableau Server version 2025.3.5+",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "Tableau Desktop 2025.3.5, Tableau Server 2025.3.5",
    "primaryVer": "2025.3.5",
    "allVersions": [
      "2025.3.5",
      "2025.3.5"
    ],
    "reports": 1,
    "workId": "W-21525935",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mGjIZIA0",
    "summary": "After upgrading Tableau Server to 2025.3.5+, published Amazon S3 data sources fail to refresh with a \"Bad Taco\" error message.",
    "created": 1779994838000,
    "updated": 1784621547000
  },
  {
    "id": "a02Ka00000llBKYIA2",
    "name": "",
    "title": "Tableau Server: Prep conductor service will fail to start due to a long day in acquiring license",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.10, 2025.1.3",
    "primaryVer": "2024.2.10",
    "allVersions": [
      "2024.2.10",
      "2025.1.3"
    ],
    "reports": 10,
    "workId": "W-19181226",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000llBKYIA2",
    "summary": "During a Tableau Server restart, Prep conductor will become unavailable, this is due to a delay in the service getting a license.",
    "created": 1766394532000,
    "updated": 1784649656000
  },
  {
    "id": "a02Ka00000llRQ1IAM",
    "name": "",
    "title": "Hyper memory usage for some workbooks increases significantly when upgrading Tableau Server to version 2025.1.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1.0",
    "primaryVer": "2025.1.0",
    "allVersions": [
      "2025.1.0"
    ],
    "reports": 4,
    "workId": "W-20030078",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000llRQ1IAM",
    "summary": "Hyper memory usage for some workbooks increases significantly when upgrading Tableau Server to version 2025.1.",
    "created": 1767136951000,
    "updated": 1784024096000
  },
  {
    "id": "a02Ka00000eRCVaIAO",
    "name": "",
    "title": "Tableau RMT is not displaying Resource data.",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "Summer '16",
    "primaryVer": "",
    "allVersions": [],
    "reports": 1,
    "workId": "W-18348084",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000eRCVaIAO",
    "summary": "Tableau RMT GUI is not showing any data related to Tableau Server resources but is showing what service is installed on which server.The only key point is Tableau Server is installed on a non default location(Linux)",
    "created": 1746695190000,
    "updated": 1746698088000
  },
  {
    "id": "a02Ka00000mm6kPIAQ",
    "name": "",
    "title": "Latest Flow Runs Are Not Sorted By Default In Tableau Server And Tableau Cloud",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025..1.13, 2025.3.3, Tableau Cloud 2026.1.0",
    "primaryVer": "2025.3.3",
    "allVersions": [
      "2025.3.3",
      "2026.1.0"
    ],
    "reports": 1,
    "workId": "W-20683946",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mm6kPIAQ",
    "summary": "For a flow with a very large history of runs the latest records for a flow run do not appear near the top by default in the Run History page as expected.",
    "created": 1773335745000,
    "updated": 1781196871000
  },
  {
    "id": "a02Ka00000ladWFIAY",
    "name": "",
    "title": "Unable to add two OAuth configs for Databricks in Tableau Cloud and Tableau Server",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2024.2.0 and above",
    "primaryVer": "2024.2.0",
    "allVersions": [
      "2024.2.0"
    ],
    "reports": 1,
    "workId": "W-20429531",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000ladWFIAY",
    "summary": "When trying to add 2 OAuth configs for Data Bricks in the OAuth Clients Registry, the second one will always overwrite the first one. Thus only 1 will be saved. This does not occur for other data sources.",
    "created": 1765203367000,
    "updated": 1783503912000
  },
  {
    "id": "a02Ka00000mmymLIAQ",
    "name": "",
    "title": "Tableau Desktop: Data Interpreter option missing when using French locale on Windows Server 2019 and Windows Server 2022",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.x",
    "primaryVer": "",
    "allVersions": [],
    "reports": 0,
    "workId": "W-21883887",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mmymLIAQ",
    "summary": "When connecting to Excel from Tableau Desktop, Data Interpreter option is missing when using a French locale. The issue occurs on both Windows Server 2019 & 2022, but not on 2016.",
    "created": 1775218213000,
    "updated": 1784182825000
  },
  {
    "id": "a02g700000AJDbhAAH",
    "name": "",
    "title": "In Tableau Server 2025.3.x, dashboards fails to load when axis Major Tick Marks is set to \"Fixed\" with a small interval over a wide data range",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "Tableau Server 2025.3.x",
    "primaryVer": "2025.3",
    "allVersions": [
      "2025.3"
    ],
    "reports": 0,
    "workId": "W-24260642",
    "url": "https://help.salesforce.com/s/issue?id=a02g700000AJDbhAAH",
    "summary": "On Tableau Server 2025.3.x and later versions, dashboards fail to load or experience significant performance degradation when the axis's Major Tick Marks are set to \"Fixed\" with a small interval ((e.g., seconds) spanning a wide date range (e.g., years))",
    "created": 1790062158000,
    "updated": 1790711162000
  },
  {
    "id": "a02Ka00000mQkmLIAS",
    "name": "",
    "title": "Error \"Internal Server Error Code: 500000\" when migrating content via CMT on Tableau Cloud",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.3",
    "primaryVer": "2025.3",
    "allVersions": [
      "2025.3"
    ],
    "reports": 2,
    "workId": "W-21063420",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mQkmLIAS",
    "summary": "Error \"Internal Server Error Code: 500000\" when migrating content via CMT on Tableau Cloud",
    "created": 1770032351000,
    "updated": 1781186227000
  },
  {
    "id": "a02Ka00000lZxbOIAS",
    "name": "",
    "title": "Publishing a flow to Tableau Server or Tableau Cloud from Tableau Prep Builder with '%a' characters in a step name gets stuck indefinitely",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.0",
    "primaryVer": "2024.2.0",
    "allVersions": [
      "2024.2.0"
    ],
    "reports": 1,
    "workId": "W-18775208",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000lZxbOIAS",
    "summary": "Publishing a flow to Tableau Server or Tableau Cloud from Tableau Prep Builder with '%a' or '%A' characters in a step name gets stuck indefinitely.For example, a step with the name 'Clean %act' would result in a hung publish command.",
    "created": 1764959798000,
    "updated": 1784917256000
  },
  {
    "id": "a028c000010FYIRAA4",
    "name": "",
    "title": "Same Data Source Appears Multiple Times When Connecting to Data Sources in Tableau Server",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2023.1",
    "primaryVer": "2023.1",
    "allVersions": [
      "2023.1"
    ],
    "reports": 3,
    "workId": "W-17868229",
    "url": "https://help.salesforce.com/s/issue?id=a028c000010FYIRAA4",
    "summary": "When connecting to data sources in Tableau Server, there appears multiple rows showing the same data source in the dialog.",
    "created": 1740578931000,
    "updated": 1791222252000
  },
  {
    "id": "a028c00000zheLtAAI",
    "name": "",
    "title": "Unexpected Disk Space Growth Due to Retention of All Virtual Connection Extract Versions on Tableau Server",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3.7, 2024.2",
    "primaryVer": "2023.3.7",
    "allVersions": [
      "2023.3.7",
      "2024.2"
    ],
    "reports": 13,
    "workId": "W-16862184",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zheLtAAI",
    "summary": "Tableau Server growing disk space observed, specifically the capacity of the <Tableau Server Data directory>\\dataengine\\extract_data folder after Virtual Connection extract against huge dataset is created, Virtual Connection extract refresh scheduled and executed successfully multiple times.",
    "created": 1727929225000,
    "updated": 1762248543000
  },
  {
    "id": "a02Ka00000eNHEgIAO",
    "name": "",
    "title": "Unable to Uncheck \"Add data quality warning\" for Flow Linked Tasks in Tableau Cloud and Tableau Server",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1",
    "primaryVer": "2025.1",
    "allVersions": [
      "2025.1"
    ],
    "reports": 4,
    "workId": "W-18064820",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000eNHEgIAO",
    "summary": "When editing linked tasks, unchecking \"add data quality warnings\", and then saving the settings, the settings are not saved and \"Add data quality warnings\" is still checked.This issue also affects all currently-supported versions of Tableau Server.",
    "created": 1742589286000,
    "updated": 1772653056000
  },
  {
    "id": "a02Ka00000mGnARIA0",
    "name": "",
    "title": "\"Get Groups for User\" REST API Returns Incorrect totalAvailable Count After Upgrading to Tableau Server 2025.3.4",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2025.3.4",
    "primaryVer": "2025.3.4",
    "allVersions": [
      "2025.3.4"
    ],
    "reports": 1,
    "workId": "W-22709702",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mGnARIA0",
    "summary": "The REST API endpoint GET /api/{version}/sites/{site-id}/users/{user-luid}/groups returns a totalAvailable count that is greater than the number of group entries in the response body when the group_users table contains duplicate (site_id, user_id, group_id) rows. This breaks client pagination logic that relies on totalAvailable to drive page traversal.",
    "created": 1780078212000,
    "updated": 1787774254000
  },
  {
    "id": "a02Ka00000kWBGZIA4",
    "name": "",
    "title": "Cancelled Flow Jobs Sort To The Top Of The Run History Page On Tableau Server And Cloud",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1.9",
    "primaryVer": "2025.1.9",
    "allVersions": [
      "2025.1.9"
    ],
    "reports": 0,
    "workId": "W-19835340",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000kWBGZIA4",
    "summary": "When a pending Tableau Flow job is cancelled, its \"Run Start\" time remains empty. As a result when the \"Run History\" tab is sorted by \"Run Start\" (which is the default), these cancelled jobs are always displayed at the top of the list.",
    "created": 1762449099000,
    "updated": 1785170303000
  },
  {
    "id": "a02Ka00000kVWvQIAW",
    "name": "",
    "title": "Tableau Server: SAML login fails with MSIS0009 Error Due to <samlp:Extensions> in AuthnRequest",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1.8",
    "primaryVer": "2025.1.8",
    "allVersions": [
      "2025.1.8"
    ],
    "reports": 0,
    "workId": "W-20109115",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000kVWvQIAW",
    "summary": "Attempting to sign into Tableau Server after configuring SiteSAML with ADFS causes the following error:\"MSIS0009: The <samlp:Extensions> element was encountered. To accept extensions, you must extend the SamlProtocolSerializer\"",
    "created": 1762333890000,
    "updated": 1771871820000
  },
  {
    "id": "a02g70000065tGXAAY",
    "name": "",
    "title": "Tableau Server 2025: \"Page could not be accessed\" error when opening published data source link in Grid View",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 2,
    "workId": "W-18599335",
    "url": "https://help.salesforce.com/s/issue?id=a02g70000065tGXAAY",
    "summary": "When attempting to open or access a published data source from the data source pane within a workbook, the action fails, and the following error message is displayed:\"That page could not be accessed. Either the data source does not exist or you do not have the necessary permissions.\"",
    "created": 1784123190000,
    "updated": 1785485457000
  },
  {
    "id": "a02Ka00000mFTQbIAO",
    "name": "",
    "title": "\"No entity found for query\" when loading or refreshing a Virtual Connection on Tableau Server or Tableau Cloud",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2026.1",
    "primaryVer": "2026.1",
    "allVersions": [
      "2026.1"
    ],
    "reports": 0,
    "workId": "W-22374012",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mFTQbIAO",
    "summary": "This Known Issue is related to Known Issue W-20515284When attempting to extract tables for a Virtual Connection, the following issue occurs: \"No entity found for query\".",
    "created": 1778120676000,
    "updated": 1785429573000
  },
  {
    "id": "a028c000010EXRnAAO",
    "name": "",
    "title": "Tableau Server License Key Dropped During ATR Refresh",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.3.5",
    "primaryVer": "2022.3.5",
    "allVersions": [
      "2022.3.5"
    ],
    "reports": 1,
    "workId": "W-17555713",
    "url": "https://help.salesforce.com/s/issue?id=a028c000010EXRnAAO",
    "summary": "While Tableau Server is synching with the Authorization-to-Run (ATR) Service, an individual Tableau Server license key might be dropped unexpectedly. The particular issue tracked in this article is one that arises from an ATR refresh coinciding exactly with a synchronization among internal systems for the same license. It is nearly impossible to encounter, statistically, due to the brief duration of these individual events. It is not tied to any specific Tableau Server version.Therefore, this sh",
    "created": 1737749156000,
    "updated": 1774423423000
  },
  {
    "id": "a02Ka00000jeTKKIA2",
    "name": "",
    "title": "\"Publish your workbook to edit in Tableau Desktop\" option not working on Tableau Server Web Authoring with an empty workbook",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1",
    "primaryVer": "2025.1",
    "allVersions": [
      "2025.1"
    ],
    "reports": 2,
    "workId": "W-19581209",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000jeTKKIA2",
    "summary": "When clicking the \"Publish your workbook to edit in Tableau Desktop\" icon in Tableau Server's Web Authoring with an empty workbook, Tableau Desktop throws the following error:Errors occurred while trying to load the workbook \"tableau-desktop:?server-host=http%3A%2F%2Ftableauserver&server-site-luid=3ab0eda9-3515-46c3-9a3c-0d218ce73fde&workbook-luid=&view-luid=\". The load was not able to complete successfully.",
    "created": 1757428206000,
    "updated": 1783677051000
  },
  {
    "id": "a02Ka00000mGcw6IAC",
    "name": "",
    "title": "Buffer and other spatial functions do not work for Live connections to published data sources in Tableau Server",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.3.5, 2026.2",
    "primaryVer": "2025.3.5",
    "allVersions": [
      "2025.3.5",
      "2026.2"
    ],
    "reports": 0,
    "workId": "W-22605852",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mGcw6IAC",
    "summary": "When using a live connection to a published data source in Tableau Server or Tableau Cloud, using spatial functions such as BUFFER() in a calculated field results in an error despite having the correct syntax.",
    "created": 1779779846000,
    "updated": 1782317105000
  },
  {
    "id": "a02Ka00000mnBrFIAU",
    "name": "",
    "title": "After upgrading Tableau Server from 2025.1.x to 2025.3.2 or later, Tableau Prep flows using TabPy with SSL fail at runtime with an SSL error.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.3",
    "primaryVer": "2025.3",
    "allVersions": [
      "2025.3"
    ],
    "reports": 13,
    "workId": "W-21940093",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mnBrFIAU",
    "summary": "After upgrading Tableau Server from 2025.1.x to 2025.3.2 and later, Tableau Prep flows that use a TabPy step with an SSL-secured connection fail at runtime with an SSL initialization error. The same issue is also reproducible directly in Prep Builder, confirming it is not isolated to scheduled or server-side flow runs.",
    "created": 1775749641000,
    "updated": 1780323538000
  },
  {
    "id": "a02Ka00000kUDoKIAW",
    "name": "",
    "title": "SVG Image Object in a dashboard cannot be displayed on Tableau Server",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2023.3.7 and later, 2024.2.1 and later, 2025.1.0 and later Tableau Cloud",
    "primaryVer": "2023.3.7",
    "allVersions": [
      "2023.3.7",
      "2024.2.1",
      "2025.1.0"
    ],
    "reports": 0,
    "workId": "W-20029604",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000kUDoKIAW",
    "summary": "In Tableau Server 2023.3.7 (and later), 2024.2.1 (and later), 2025.1.0 (and later), and Tableau Cloud, some SVG images may fail to render and appear as a blank space.This is an intentional change resulting from a security enhancement. This enhancement proactively blocks the rendering of SVG files that contain potentially executable elements, such as <script>, <!ENTITY>, or <foreignObject> Tags or onload attributes.",
    "created": 1761800758000,
    "updated": 1761812967000
  },
  {
    "id": "a02Ka00000kU3c4IAC",
    "name": "",
    "title": "Rest API List Virtual Connections Command Does Not Respond With The Expected Server URL Format In Tableau Cloud",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.2.4",
    "primaryVer": "2025.2.4",
    "allVersions": [
      "2025.2.4"
    ],
    "reports": 0,
    "workId": "W-20036291",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000kU3c4IAC",
    "summary": "When using the \"GET /api/api-version/sites/site-luid/virtualconnections\" REST API call to return a list of available virtual connection names and IDs in Tableau Cloud the LUID for the site is returned rather than the expected server URL format.",
    "created": 1761580923000,
    "updated": 1785167500000
  },
  {
    "id": "a02Ka00000llYCGIA2",
    "name": "",
    "title": "Workbook error D2E8DA72 in Tableau Desktop after migrating workbook from one Tableau Server site to another site using Tableau CMT",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "CMT 2025.2.0",
    "primaryVer": "2025.2.0",
    "allVersions": [
      "2025.2.0"
    ],
    "reports": 0,
    "workId": "W-20641260",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000llYCGIA2",
    "summary": "A workbook with published data sources is migrated from one Tableau Server site to another site using Tableau Content Migration Tool (CMT) 2025.2.0. After migrating the workbook, downloading the migrated workbook and opening the workbook in Tableau Desktop results in the following error:Unable to complete actionErrors occurred while trying to load the workbook \"<file path to workbook>\". The load was not able to complete successfully.Error Code: D2E8DA72",
    "created": 1767726278000,
    "updated": 1770746452000
  },
  {
    "id": "a028c00000zhFWIAA2",
    "name": "",
    "title": "Users with Server Administrator role (Explorer) does not show under All Sites when site role filter is applied.",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "Multiple versions: 2024.2, 2023.3.2,2023.3.8,2022.3.9",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2",
      "2023.3.2",
      "2023.3.8",
      "2022.3.9"
    ],
    "reports": 13,
    "workId": "W-16787686",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zhFWIAA2",
    "summary": "Users with Server Administrator role (Explorer) does not show under All Sites when site role filter is applied.",
    "created": 1726829150000,
    "updated": 1760533051000
  },
  {
    "id": "a02Ka00000frk7YIAQ",
    "name": "",
    "title": "Tableau Server Metadata API Eventing Status GET Response Is Blank Showing \"[]\"",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1",
    "primaryVer": "2025.1",
    "allVersions": [
      "2025.1"
    ],
    "reports": 2,
    "workId": "W-18707903",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000frk7YIAQ",
    "summary": "When making a GET Request for the Eventing Status through the Metadata API as per https://help.tableau.com/current/server/en-us/dm_tools_eventing.htm the response back from the API is blank.",
    "created": 1749145454000,
    "updated": 1791221926000
  },
  {
    "id": "a02Ka00000llIAPIA2",
    "name": "",
    "title": "Unable to Search for Schemas Using Cloudera Hadoop Hive Connector in Tableau Server 2024.2",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 3,
    "workId": "W-20106386",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000llIAPIA2",
    "summary": "When using the Cloudera Hadoop Hive connector in the Tableau Server 2024.2 Flow Web Authoring, searching for a schema returns no results, and dragging a table to the canvas results in an \"error in input\" message.",
    "created": 1766728118000,
    "updated": 1771871519000
  },
  {
    "id": "a02Ka00000mn98OIAQ",
    "name": "",
    "title": "When attempting to edit an older data source's connection on Tableau Server, the connection test succeeds, but saving any changes results in an error",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2024.2.x, 2025.1.x, 2025.3.x",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2",
      "2025.1",
      "2025.3"
    ],
    "reports": 0,
    "workId": "W-21935699",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mn98OIAQ",
    "summary": "When attempting to edit an older data source's connection on Tableau Server, the connection test succeeds, but saving any changes results in an error popup: \"An unexpected error occurred\".",
    "created": 1775588883000,
    "updated": 1785168014000
  },
  {
    "id": "a028c000010FkMsAAK",
    "name": "",
    "title": "Publishing a dashboard from Tableau Desktop to Cloud or Server version 2025.1 fails with 'Unable to open custom theme file' error",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1.0",
    "primaryVer": "2025.1.0",
    "allVersions": [
      "2025.1.0"
    ],
    "reports": 9,
    "workId": "W-17902064",
    "url": "https://help.salesforce.com/s/issue?id=a028c000010FkMsAAK",
    "summary": "Publishing a dashboard from Tableau Desktop to Cloud or Server version 2025.1 fails with 'Unable to open custom theme file' error. This can also occur using the workbook upload feature in the Cloud or Server UI.EnvironmentTableau CloudTHIS ISSUE HAS BEEN RESOLVED IN TABLEAU CLOUD AS OF MARCH 18, 2025\ufeffTableau Server2025.1.0This known issue has been fixed in Tableau Server versions 2025.1.1+",
    "created": 1741113745000,
    "updated": 1763620291000
  },
  {
    "id": "a02Ka00000llU3rIAE",
    "name": "",
    "title": "When logging into Tableau Server 2025.1.0 and higher with SSPI login enabled, Tableau Prep Builder does not display the site picker",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1.0",
    "primaryVer": "2025.1.0",
    "allVersions": [
      "2025.1.0"
    ],
    "reports": 2,
    "workId": "W-20643396",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000llU3rIAE",
    "summary": "When logging into Tableau Server 2025.1.0 and higher with SSPI login enabled, Tableau Prep Builder does not display the site picker. Other clients (web browser, Tableau Desktop) see the site picker normally.Note that the version of Tableau Prep Builder does not matter for this issue; all supported versions show the problem when connecting to Tableau Server 2025.1.x or 2025.3.x.",
    "created": 1767383882000,
    "updated": 1774016595000
  },
  {
    "id": "a028c00000zkmhVAAQ",
    "name": "",
    "title": "SSL Connection Errors When Using Tableau Prep Builder 2024.2.1+ with Published Data Sources on Tableau Server",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 0,
    "workId": "W-17298872",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zkmhVAAQ",
    "summary": "When attempting to connect to a Tableau Server Published Data Source using Tableau Prep Builder 2024+, users may encounter the following error:TableauException: Internet communication error: SSL connect error (<Tableau Server Name>). There was an error with the data source \"\". Verify that the data source is configured correctly.Impact:Users are unable to connect to published data sources in the Production Tableau Server environment using Tableau Prep Builder 2024.2.1 or later.Connections succeed",
    "created": 1736792552000,
    "updated": 1750860282000
  },
  {
    "id": "a028c00000zkOEjAAM",
    "name": "",
    "title": "When drilling down into a published view on Tableau Cloud or Server, the date axis shows incorrect values",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.3,2023.3,2024.2",
    "primaryVer": "2022.3",
    "allVersions": [
      "2022.3",
      "2023.3",
      "2024.2"
    ],
    "reports": 2,
    "workId": "W-17486526",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zkOEjAAM",
    "summary": "Also affects Tableau ServerWhen a workbook with views that use a continuous date field in an axis is published to Tableau Cloud or Tableau Server, the displayed information on that axis is incorrect when you drill down into the view.",
    "created": 1735587944000,
    "updated": 1750704033000
  },
  {
    "id": "a02Ka00000loJCVIA2",
    "name": "",
    "title": "Tableau Prep Builder 2025.2 - When attempting to log in to Tableau Cloud or Server using SAML Okta, the Okta screen briefly appears before going blank",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.2.1, 2025.3 and later",
    "primaryVer": "2025.2.1",
    "allVersions": [
      "2025.2.1",
      "2025.3"
    ],
    "reports": 1,
    "workId": "W-20213472",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000loJCVIA2",
    "summary": "Tableau Prep Builder 2025.2 is experiencing an issue when attempting to log in to Tableau Cloud or Server using SAML with Okta. The Okta screen briefly appears before going blank, preventing Prep Builder from successfully logging in to Tableau Server through the Electron-based Auth window when routed through Okta.",
    "created": 1769442045000,
    "updated": 1772807821000
  },
  {
    "id": "a02Ka00000lH73sIAC",
    "name": "",
    "title": "User with creator role cannot update a custom schedule for an extract refresh task on Tableau Cloud using REST API",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 1,
    "workId": "W-20190309",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000lH73sIAC",
    "summary": "On Tableau Cloud, a user with the Creator role is unable to update a custom schedule for an extract refresh task via the REST API.",
    "created": 1762940568000,
    "updated": 1785373735000
  },
  {
    "id": "a02g7000006A4wXAAS",
    "name": "",
    "title": "Login events incorrectly logged as Event 164 \"Download Workbook Revision\" in workgroup DB",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2026.2.0",
    "primaryVer": "2026.2.0",
    "allVersions": [
      "2026.2.0"
    ],
    "reports": 2,
    "workId": "W-23476115",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000006A4wXAAS",
    "summary": "Tableau Server inserts a historical_events row with historical_event_type_id = 164 during authentication \u2014 both via REST API using a Personal Access Token (PAT) and via interactive re-authentication (e.g., after session cookie expiry or connected client removal). When auditors join this table to historical_event_types, the name column returns \"Download Workbook revision\" instead of the correct \"Delete Refresh Token Session\", misleading compliance and security audits.",
    "created": 1784300558000,
    "updated": 1791474008000
  },
  {
    "id": "a02Ka00000mnAAaIAM",
    "name": "",
    "title": "BentonSans no longer rendering server-side in Tableau Cloud including PDF export",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2026.1",
    "primaryVer": "2026.1",
    "allVersions": [
      "2026.1"
    ],
    "reports": 0,
    "workId": "W-21736297",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mnAAaIAM",
    "summary": "Dashboards using BentonSans (a Tableau Cloud safelist font), no longer show that font when using server-side rendering in Tableau Cloud, including when exporting views to PDF.",
    "created": 1775676699000,
    "updated": 1785211317000
  },
  {
    "id": "a028c00000zKQyyAAG",
    "name": "",
    "title": "Data not refreshed in published Live wildcard union of Text files data source on Tableau Server",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "All",
    "primaryVer": "",
    "allVersions": [],
    "reports": 1,
    "workId": "W-16201979",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zKQyyAAG",
    "summary": "If the workbook uses a published data source that is live-connecting to a wildcard union of Text files, it may not display the latest data when the number of Text files changes, even after clicking the refresh button.The issue occurs in the workbooks published to Tableau Server, which uses a published data source that is live-connecting to a wildcard union of Text files.Wildcard union sample:If the number of Text files changes, the workbook doesn't display the latest data, even after clicking th",
    "created": 1721987502000,
    "updated": 1790603998000
  },
  {
    "id": "a028c00000yyXfoAAE",
    "name": "",
    "title": "Tableau Cloud/Server (Linux) - The size of rows in a view causes unicode icon rendering issues using server-side rendering",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2024.1",
    "primaryVer": "2024.1",
    "allVersions": [
      "2024.1"
    ],
    "reports": 1,
    "workId": "W-15145749",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yyXfoAAE",
    "summary": "In Tableau Cloud/Server on Linux and using server-side rendering, the size of rows in a view causes unicode icon rendering issues, such as icons not appearing at all or appearing as placeholder characters.",
    "created": 1709736554000,
    "updated": 1791804212000
  },
  {
    "id": "a02Ka00000kTo97IAC",
    "name": "",
    "title": "Retired Metrics process still visible as blank in Tableau Server status page.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1.x",
    "primaryVer": "2025.1",
    "allVersions": [
      "2025.1"
    ],
    "reports": 3,
    "workId": "W-19997211",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000kTo97IAC",
    "summary": "Metrics process is showing up as a blank in Tableau Server process status tab. But this process does not show in TSM GUI or CLI.Version(s) Affected:\u00a0Tableau Server\u00a0Version: 2025.1.5, 2025.1.7 and later versions",
    "created": 1761044234000,
    "updated": 1785339924000
  },
  {
    "id": "a02Ka00000kUHFRIA4",
    "name": "",
    "title": "IFNULL calculations are not behaving as expected on  Tableau Desktop/Server 2024.2.9+",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2024.2.9+",
    "primaryVer": "2024.2.9",
    "allVersions": [
      "2024.2.9"
    ],
    "reports": 0,
    "workId": "W-20054899",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000kUHFRIA4",
    "summary": "When using the IFNULL function with PREVIOUS_VALUE, the calculations mistakenly perform an implicit FLOOR calculation on the returned previous value causing unexpected results in Tableau Desktop/Server 2024.2.9+",
    "created": 1761950096000,
    "updated": 1763406369000
  },
  {
    "id": "a028c00000zhCJRAA2",
    "name": "",
    "title": "Error Occurs when Publishing Flows with Certain Connections from Prep Builder to Tableau Server 2024.2 and Tableau Cloud",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 4,
    "workId": "W-16504378",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zhCJRAA2",
    "summary": "When connected to Tableau Server to 2024.2.x and Tableau Cloud and the flow contains certain connections, such as Postgres 15, publishing it from Prep Builder will result in the below error:\u201cError publishing flow to Tableau Server.\u201dFailed to publish the flow \"FLOWNAME\". The server can't connect to the data source type: \"DATASOURCE\". Verify that the data source is supported and that the driver or connector plugin for the data source is installed. Contact your Tableau Server administrator to insta",
    "created": 1726719557000,
    "updated": 1737728008000
  },
  {
    "id": "a02Ka00000iyHKxIAM",
    "name": "",
    "title": "\"Edit Server and Site Path\" performance Tableau Server vs. Tableau Cloud",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "Tableau Cloud 2025.2",
    "primaryVer": "2025.2",
    "allVersions": [
      "2025.2"
    ],
    "reports": 3,
    "workId": "W-19469904",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000iyHKxIAM",
    "summary": "The action to edit the server and site path takes much more time when connected to Tableau Cloud then it does on Tableau Server.",
    "created": 1757058870000,
    "updated": 1783513305000
  },
  {
    "id": "a02Ka00000loRmRIAU",
    "name": "",
    "title": "Using the REST or the Migration API for Tableau Server or Cloud to migrate data source credentials throws a 403157 error",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.0",
    "primaryVer": "2024.2.0",
    "allVersions": [
      "2024.2.0"
    ],
    "reports": 1,
    "workId": "W-17682618",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000loRmRIAU",
    "summary": "When attempting to migrate credentials from Tableau Server to Tableau Cloud, authorized migration runners are encountering the following error while attempting to retrieve keychains for datasources and workbooks. This occurs using stand-alone REST API calls as well as the Tableau Migration SDK.Error Code: 403157Error Summary: Bad RequestError Detail: The request could not be completed because required functionality is disabled.. (0x5CE10192 : Encrypted keychain migration is disabled)",
    "created": 1769474724000,
    "updated": 1769538752000
  },
  {
    "id": "a02Ka00000eN8ykIAC",
    "name": "",
    "title": "Downloading a view as PowerPoint gets significantly slow on Tableau Cloud",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2022.4",
    "primaryVer": "2022.4",
    "allVersions": [
      "2022.4"
    ],
    "reports": 1,
    "workId": "W-17427523",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000eN8ykIAC",
    "summary": "In some situation downloading views as Powerpoint format gets significantly slower after migrated workbooks from Tableau Server to Tableau Cloud.For example:\u00a0Downloading certain worksheets as Powerpoint format takes only 15 seconds in Tableau Server or Tableau Desktop whereas it takes almost 300 seconds after migrated the workbook to Tableau Cloud.",
    "created": 1742203645000,
    "updated": 1750860287000
  },
  {
    "id": "a02Ka00000hHIRWIA4",
    "name": "",
    "title": "Virtual Connection Logical \u2018OR\u2019 Data Policy condition returns erroneous results in Tableau Server",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 2,
    "workId": "W-19011774",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000hHIRWIA4",
    "summary": "Policy condition does not properly filter the view as intended when the condition expression contains OR.The issue occurred on Tableau Server 2024.2.x and 2025.1.x.",
    "created": 1753712351000,
    "updated": 1791222299000
  },
  {
    "id": "a02Ka00000eNcoxIAC",
    "name": "",
    "title": "Error \"Login-based license management is not enabled on the server you connected to\" When activating Tableau Prep Builder using Tableau Cloud",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 0,
    "workId": "W-18083399",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000eNcoxIAC",
    "summary": "When using Prep Builder LBLM with Tableau Cloud, after entering \u201chttps://online.tableau.com\u201d in the Server field the following error occurred and the process could not be continued.Login-based license management is not enabled on the server you connected to. Select a different server to connect to, use a product key to activate your license, or start a trial to begin working immediately.\u00a0EnvironmentTableau CloudTableau Prep BuilderLBLM\u00a0CauseThis behavior is related to a known issue with ID W-180",
    "created": 1743586652000,
    "updated": 1748370706000
  },
  {
    "id": "a02Ka00000jhzTkIAI",
    "name": "",
    "title": "OneJDK bundled with Tableau Server 2025.1.x Preventing the Installation on Certain AMD processors",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1",
    "primaryVer": "2025.1",
    "allVersions": [
      "2025.1"
    ],
    "reports": 4,
    "workId": "W-19837752",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000jhzTkIAI",
    "summary": "The Tableau Server 2025.1.x installation or upgrade might fail on certain AMD CPU's with the following error:java.lang.RuntimeException: java.lang.IllegalStateException: Expected seed generation for 32 but got -2",
    "created": 1759908247000,
    "updated": 1784842235000
  },
  {
    "id": "a02Ka00000fAYeCIAW",
    "name": "",
    "title": "Dimension field text is not visible on hover in Tableau Server",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.5",
    "primaryVer": "2024.2.5",
    "allVersions": [
      "2024.2.5"
    ],
    "reports": 2,
    "workId": "W-18563864",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000fAYeCIAW",
    "summary": "Entire text of the dimension doesn't pop-up while hovering over it on Tableau Server. This is specific to only charts.",
    "created": 1748028049000,
    "updated": 1765206060000
  },
  {
    "id": "a028c00000yFzOBAA0",
    "name": "",
    "title": "Tableau Server/Cloud - tabcmd 2.0.11 \"get url\" command with -f option fails if the file path contains a period",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2023.3",
    "primaryVer": "2023.3",
    "allVersions": [
      "2023.3"
    ],
    "reports": 0,
    "workId": "W-13757625",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yFzOBAA0",
    "summary": "Using tabcmd v2.0.11 connecting to Tableau Server, running tabcmd \"get url\" with the the -f option while the download path contains a dot (.) , the following error occurs: \"You must specify a file type in the url or filename.\"Note: This issue only occurs when using the tabcmd utility, not the Tableau Server command-line utility. The issue may also present itself when using tabcmd with Tableau Cloud.",
    "created": 1706200543000,
    "updated": 1732204179000
  },
  {
    "id": "a02Ka00000hHDaOIAW",
    "name": "",
    "title": "QP.logical-query progressively slower after each release of Tableau Server from 2023.1.13",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2024.2.x",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 1,
    "workId": "W-19074634",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000hHDaOIAW",
    "summary": "Certain workbooks after upgrading to later versions of Tableau Server, may be slower to load than in previous version. Performance recording will show QP.logical-query is slower in later versions than previous versions.",
    "created": 1753427780000,
    "updated": 1785134651000
  },
  {
    "id": "a02Ka00000jeXWnIAM",
    "name": "",
    "title": "LBLM Activation Fails after Tableau Server Site Name Is Changed",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2024.2.13",
    "primaryVer": "2024.2.13",
    "allVersions": [
      "2024.2.13"
    ],
    "reports": 0,
    "workId": "W-19564085",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000jeXWnIAM",
    "summary": "When launching Tableau Desktop and attempting to activate via Login-Based License Management (LBLM) by signing in to Tableau Server, a dialog box appears with the message \"Item not found (errorCode=12)\". This error prevents the user from proceeding with activation.The problem typically occurs after the Tableau Server site name, to which the user was trying to connect, has been recently changed.",
    "created": 1757483043000,
    "updated": 1759902919000
  },
  {
    "id": "a02Ka00000ho9UCIAY",
    "name": "",
    "title": "\"Unable to open custom theme file\" Error when Publishing Workbooks to Tableau Server 2025.1.1 or Later",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1.1",
    "primaryVer": "2025.1.1",
    "allVersions": [
      "2025.1.1"
    ],
    "reports": 6,
    "workId": "W-19153637",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000ho9UCIAY",
    "summary": "This issue is specific to Tableau Server installed on Windows Server with Japanese language settings, and may depend on the arrangement of Japanese strings in the workbook.\u00a0The error occurs during the following operations:Publishing the workbook from Tableau Desktop to Tableau ServerUploading the workbook to Tableau Server via a browserError messages: Tableau Desktop: Publish failureUnable to open custom theme file.Tableau Server: There was a problem publishing the file '<Workbook Name>'.. (Ox6F",
    "created": 1754449576000,
    "updated": 1783477345000
  },
  {
    "id": "a02Ka00000jiK9BIAU",
    "name": "",
    "title": "Site Export Fails on Tableau Server When Data Sources are in Recycle Bin",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "Summer '16",
    "primaryVer": "",
    "allVersions": [],
    "reports": 6,
    "workId": "W-19857261",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000jiK9BIAU",
    "summary": "When a site export job runs on Tableau Server while data sources are present in the Recycle Bin, the export fails. The failure is logged with the following error:ERROR com.tableausoftware.domain.export.SiteExporter - Exception thrown during export.org.springframework.orm.jpa.JpaSystemException: Unable to commit against JDBC Connection; nested exception is org.hibernate.TransactionException: Unable to commit against JDBC Connection",
    "created": 1760614750000,
    "updated": 1781041745000
  },
  {
    "id": "a028c00000y4yr3AAA",
    "name": "",
    "title": "In some scenarios the \"Publish Workbook to Tableau Server\" window does not pop-up before the permission error message",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1",
    "primaryVer": "2023.1",
    "allVersions": [
      "2023.1"
    ],
    "reports": 9,
    "workId": "W-15584997",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000y4yr3AAA",
    "summary": "In some scenarios with Tableau Server 2023.1 or newer versions, the \"Publish Workbook to Tableau Server\" window does not pop-up before the error message \"You do not have permission to perform the requested operation\" is presented.",
    "created": 1714534190000,
    "updated": 1785908298000
  },
  {
    "id": "a02Ka00000eNsc8IAC",
    "name": "",
    "title": "When Tableau Server on Redhat 9 restarts, a Vizdataservice crashdump is being created.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.1",
    "primaryVer": "2024.2.1",
    "allVersions": [
      "2024.2.1"
    ],
    "reports": 1,
    "workId": "W-18201250",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000eNsc8IAC",
    "summary": "When Tableau Server on Redhat 9 restarts, a Vizdataservice crashdump is being created in the folder:\u00a0/var/opt/tableau/tableau_server/data/tabsvc/crashdumps/",
    "created": 1744368347000,
    "updated": 1763454206000
  },
  {
    "id": "a028c00000yzcGvAAI",
    "name": "",
    "title": "Tableau Server - Parsing errors when querying Oracle databases",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2023.1.8",
    "primaryVer": "2023.1.8",
    "allVersions": [
      "2023.1.8"
    ],
    "reports": 3,
    "workId": "W-15283424",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yzcGvAAI",
    "summary": "When connecting to the Oracle database through Tableau server, users receive many parsing errors while querying information about the compatibility parameter.",
    "created": 1711461496000,
    "updated": 1735939027000
  },
  {
    "id": "a02Ka00000fAnYhIAK",
    "name": "",
    "title": "Tableau Server Lineage doesn't show Databases and Tables for Embedded Datasources",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "Summer '16",
    "primaryVer": "",
    "allVersions": [],
    "reports": 5,
    "workId": "W-18384794",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000fAnYhIAK",
    "summary": "Lineage doesn't contain Databases and Tables for Embedded Datasources. But it's showing other fields apart from these two things. When try to republish the workbook with a different name, the Database and tables are showing for that new published workbook.",
    "created": 1748421465000,
    "updated": 1789099397000
  },
  {
    "id": "a028c00000yyzYoAAI",
    "name": "",
    "title": "The parameter action may not work properly on Tableau Server when the parameter value contains line break",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "From 2022.1 to 2024.1",
    "primaryVer": "2022.1",
    "allVersions": [
      "2022.1",
      "2024.1"
    ],
    "reports": 2,
    "workId": "W-15187563",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yyzYoAAI",
    "summary": "In a parameter action, if the parameter value contains a line break, the action may function well in Tableau Desktop but didn't function as expected after publishing to Tableau Server or Tableau Cloud.",
    "created": 1710228534000,
    "updated": 1781849571000
  },
  {
    "id": "a02Ka00000mnxyBIAQ",
    "name": "",
    "title": "In Tableau Cloud, new connectors to Trino JDBC and Starburst (via a .taco file) may fail connecting to Trino or Starburst servers earlier than 479.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "Tableau Cloud 2026.1.3",
    "primaryVer": "2026.1.3",
    "allVersions": [
      "2026.1.3"
    ],
    "reports": 0,
    "workId": "W-21971396",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mnxyBIAQ",
    "summary": "In Tableau Cloud, new connectors for Trino JDBC (v479) and Starburst (v1.51 via a .taco file) may cause connection failures when connecting to Trino or Starburst servers running versions earlier than 479.Starburst 1.5.1 .taco introduces the validateConnection propertyTrino JDBC driver 479 uses this to send a HEAD /v1/statement requestTrino Gateway (<16) and Starburst servers (<479) do not support this requestFeature flag rollback does not resolve this issue since it only controls the driver, not",
    "created": 1776283254000,
    "updated": 1781185961000
  },
  {
    "id": "a028c000010FYHxAAO",
    "name": "",
    "title": "Notification Email is Not Sent When Refreshing Extract Connecting to SQL Server via Tableau Bridge Fails",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.3",
    "primaryVer": "2024.3",
    "allVersions": [
      "2024.3"
    ],
    "reports": 5,
    "workId": "W-17868447",
    "url": "https://help.salesforce.com/s/issue?id=a028c000010FYHxAAO",
    "summary": "Upon the failure of refreshing extract of SQL Server data via Tableau Bridge, no notification email is sent.",
    "created": 1740578336000,
    "updated": 1790716310000
  },
  {
    "id": "a02Ka00000eNconIAC",
    "name": "",
    "title": "Buffer function not working for Published extract data sources for Tableau Server",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2024.2.8",
    "primaryVer": "2024.2.8",
    "allVersions": [
      "2024.2.8"
    ],
    "reports": 4,
    "workId": "W-18090431",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000eNconIAC",
    "summary": "Note: This article was found to be a duplicate of work tracked under W-16509414When\u200b editing workbook on Tableau Server connecting to pulished extracted datasource on Tableau Server, Buffer function shows that \"Unknown function BUFFER called\".",
    "created": 1743584985000,
    "updated": 1755681552000
  },
  {
    "id": "a02Ka00000mFUrLIAW",
    "name": "",
    "title": "Tableau administrators cannot transfer or delete custom views when the site user visibility is set to limited.",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2026.1",
    "primaryVer": "2026.1",
    "allVersions": [
      "2026.1"
    ],
    "reports": 0,
    "workId": "W-22363207",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mFUrLIAW",
    "summary": "When User Visibility = Limited, admins are blocked from deleting or transferring ownership of other users' custom views. The UI doesn't even show the delete/transfer buttons.\u00a0",
    "created": 1778246367000,
    "updated": 1778248165000
  },
  {
    "id": "a02Ka00000jfT4eIAE",
    "name": "",
    "title": "Embedded password option for a Snowflake datasource is working despite Snowflake key pair authentication being configured on Tableau Server",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1.5",
    "primaryVer": "2025.1.5",
    "allVersions": [
      "2025.1.5"
    ],
    "reports": 4,
    "workId": "W-19477749",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000jfT4eIAE",
    "summary": "Even though Snowflake key pair authentication is configured, embedded password option still works for Snowflake datasources",
    "created": 1757588720000,
    "updated": 1789683249000
  },
  {
    "id": "a02Ka00000ivE2MIAU",
    "name": "",
    "title": "Tableau Server, API Calls fail on 2023.3.20 on Ubuntu 20.04",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3.20",
    "primaryVer": "2023.3.20",
    "allVersions": [
      "2023.3.20"
    ],
    "reports": 0,
    "workId": "W-19375004",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000ivE2MIAU",
    "summary": "When Tableau Server 2023.3.20 is installed on Ubuntu 20.04, API calls fail.",
    "created": 1756124250000,
    "updated": 1784281443000
  },
  {
    "id": "a028c000010FMj7AAG",
    "name": "",
    "title": "Axis label interval changes on X-axis when viewing a dashboard using client-side rendering in Tableau Server",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3.10",
    "primaryVer": "2023.3.10",
    "allVersions": [
      "2023.3.10"
    ],
    "reports": 3,
    "workId": "W-17593363",
    "url": "https://help.salesforce.com/s/issue?id=a028c000010FMj7AAG",
    "summary": "Note: This issue is also present in Tableau Cloud.Issue tracked previously under W-15675287When viewing a dashboard that has been published to Tableau Server or Tableau Cloud, and using client-side rendering, the intervals at which labels are rendered on the x-axis might be different than with server-side rendering, or when viewed in Tableau Desktop. ",
    "created": 1740081732000,
    "updated": 1764887736000
  },
  {
    "id": "a02Ka00000eRCUbIAO",
    "name": "",
    "title": "Parts of the views in a dashboard display data before changing the filter value after upgrading to Tableau Server 2024.2",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2+ or 2025.1+",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2",
      "2025.1"
    ],
    "reports": 7,
    "workId": "W-18275634",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000eRCUbIAO",
    "summary": "This issue only happens for the dashboard with data source published separately.When multiple filters are set for the first time, the dashboard displays correctly. However, when a filter is changed for the second time, parts of the views in a dashboard displays the data before changing the filter value.",
    "created": 1746692047000,
    "updated": 1791300535000
  },
  {
    "id": "a028c00000y51g0AAA",
    "name": "",
    "title": "Activationservice or Tabadmincontroller crashes on multiple Linux distributions during initialization, or license activation in Tableau Server 2023.1+",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1+",
    "primaryVer": "2023.1",
    "allVersions": [
      "2023.1"
    ],
    "reports": 15,
    "workId": "W-15189402",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000y51g0AAA",
    "summary": "Installing Tableau Server on multiple distros listed below causes the issue.Ubuntu 20.04Ubuntu 22.04Base image of Ubuntu 22AlmaLinux 9Rocky Linux 9Oracle Linux 9CentOS Stream 9",
    "created": 1714645036000,
    "updated": 1783629500000
  },
  {
    "id": "a028c00000ziHxzAAE",
    "name": "",
    "title": "Intermittent \"Tableau experienced an unexpected server error\" or \"401 unauthorized\" Occurs When Viewing an Embedded Tableau Cloud View",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.3.0",
    "primaryVer": "2024.3.0",
    "allVersions": [
      "2024.3.0"
    ],
    "reports": 15,
    "workId": "W-17017912",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000ziHxzAAE",
    "summary": "When viewing Tableau Cloud embedded views, users may intermittently encounter the errorTableau experienced an unexpected server error.In the browser console, there may be a corresponding 401 Unauthorized error.",
    "created": 1729641880000,
    "updated": 1729884058000
  },
  {
    "id": "a028c00000zkdvcAAA",
    "name": "",
    "title": "Broken hyperlink when clicking \"Manage Labels\" in Extract Refresh Monitoring Dialog for a published datasource on Tableau Server 2024.2.x",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.x",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 0,
    "workId": "W-17473197",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zkdvcAAA",
    "summary": "In a\u00a0Non-Default\u00a0site on Tableau Server 2024.2.x, clicking\u00a0\"Manage Labels\"\u00a0hyperlink from the\u00a0\"Extract Refresh Monitoring\" dialog\u00a0on a\u00a0published datasource\u00a0should link to the the url:\u00a0[Tableau Server URL]/#/site/[siteurl]/labels.But, instead, it redirects to\u00a0[Tableau Server URL]/#/labels,\u00a0which is a broken link.",
    "created": 1736322037000,
    "updated": 1744654191000
  },
  {
    "id": "a02Ka00000hl948IAA",
    "name": "",
    "title": "Background maps do not load in Tableau Server and Tableau Cloud when using Client side rendering",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.2.0",
    "primaryVer": "2025.2.0",
    "allVersions": [
      "2025.2.0"
    ],
    "reports": 2,
    "workId": "W-19084720",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000hl948IAA",
    "summary": "The custom Mapbox background map fails to load in Tableau Cloud during client-side rendering, resulting in an empty map area, while server-side rendering successfully displays the map background.",
    "created": 1753872856000,
    "updated": 1784546992000
  },
  {
    "id": "a02Ka00000gbV9QIAU",
    "name": "",
    "title": "Published Flows in Tableau Server Not Resolving System Parameters in Output Filenames",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1.2",
    "primaryVer": "2025.1.2",
    "allVersions": [
      "2025.1.2"
    ],
    "reports": 24,
    "workId": "W-18986872",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000gbV9QIAU",
    "summary": "Flows with file outputs using parameterized filenames (e.g., yy-mm-dd_outputfilename.hyper) fail when published to Tableau Server. The output filename appears as a literal string (e.g., <Parameters...>-outputfile.hyper) instead of resolving the parameters, causing flow runs to fail due to invalid or unsupported characters in the filename.",
    "created": 1752658214000,
    "updated": 1772579594000
  },
  {
    "id": "a028c00000zkn7TAAQ",
    "name": "",
    "title": "Webhooks Not Triggering From Tableau Server In Container",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1",
    "primaryVer": "2023.1",
    "allVersions": [
      "2023.1"
    ],
    "reports": 1,
    "workId": "W-17433757",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zkn7TAAQ",
    "summary": "Setting up webhooks is not working in Tableau Server in Container.\u00a0When running webhook test as below, it returns error:",
    "created": 1736822243000,
    "updated": 1744655318000
  },
  {
    "id": "a02Ka00000fu8c2IAA",
    "name": "",
    "title": "\"Unexpected Server Error\" When Accessing Multiple Tableau Server Sites on the Same Browser",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.11, 2025.1.2",
    "primaryVer": "2024.2.11",
    "allVersions": [
      "2024.2.11",
      "2025.1.2"
    ],
    "reports": 3,
    "workId": "W-18812087",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000fu8c2IAA",
    "summary": "When attempting to interact with workbooks on two different Tableau Server sites via different browser tabs, the following error might occur when switching from one workbook/browser tab to the other:Unexpected Server ErrorTableau experienced and unexpected server error.Try again, or contact your Tableau Server Administrator",
    "created": 1750280393000,
    "updated": 1766171581000
  },
  {
    "id": "a028c00000zki8FAAQ",
    "name": "",
    "title": "Tableau Server Custom Views Do Not Load After Upgrades from 2022.1.x to 2023.x and Later Versions",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2023.x+",
    "primaryVer": "",
    "allVersions": [],
    "reports": 3,
    "workId": "W-17453135",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zki8FAAQ",
    "summary": "After performing an upgrade from Tableau Server 2022.1.x to 2023.x or later, existing custom views do not load as expected and instead throw an error when accessed. ",
    "created": 1736539821000,
    "updated": 1776708934000
  },
  {
    "id": "a02Ka00000eNfnpIAC",
    "name": "",
    "title": "TableauException: ConnectionID value not known error when trying to create a flow on Tableau Server",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "Summer '24",
    "primaryVer": "",
    "allVersions": [],
    "reports": 6,
    "workId": "W-18110260",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000eNfnpIAC",
    "summary": "When attempting to create a new flow on Tableau Server, the error \"TableauException: ConnectionID value not known\" appears right after adding a table.",
    "created": 1743698749000,
    "updated": 1785879916000
  },
  {
    "id": "a028c00000zjdLjAAI",
    "name": "",
    "title": "Workbooks with Large (3GB+) .csv Data Sources Embedded Fail to Publish to Tableau Server 2024.2",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1, 2023.3, 2024.2",
    "primaryVer": "2023.1",
    "allVersions": [
      "2023.1",
      "2023.3",
      "2024.2"
    ],
    "reports": 8,
    "workId": "W-17373517",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zjdLjAAI",
    "summary": "When attempting to publish workbooks with large (over 3GB) .csv embedded data sources to Tableau Server 2023.1, 2023.3, or 2024.2, the publish operation fails with an error.Notably, the publish operation would succeed in previous (2023.x) versions.Impacted Versions2023.1.0-.182023.3.0-112024.2.0-.4NOTE: 2025.1 versions of Tableau Server are unaffected",
    "created": 1733409100000,
    "updated": 1764971407000
  },
  {
    "id": "a028c00000zIK4QAAW",
    "name": "",
    "title": "Large Groups Synced to Tableau Server via OpenLDAP on Active Directory Fail Timeout",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3.1",
    "primaryVer": "2023.3.1",
    "allVersions": [
      "2023.3.1"
    ],
    "reports": 8,
    "workId": "W-15667322",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zIK4QAAW",
    "summary": "When syncing a large group (1500 by most Active Directory server defaults) in Active Directory (AD) using the openldap directoryServiceType, Tableau Server will continually poll the AD server trying to get the next set of members but will only get the original set repeatedly until it eventually times out and fails or the job disappears from the Background Tasks for Non-Extracts Admin View. This behavior relates to the maxValRange setting on the Active Directory server. Range Retrieval (wgserver.",
    "created": 1716202426000,
    "updated": 1724275426000
  },
  {
    "id": "a028c00000xBOPrAAO",
    "name": "",
    "title": "Tableau Server RMT - Concurrent Users Chart Not Loading",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3",
    "primaryVer": "2023.3",
    "allVersions": [
      "2023.3"
    ],
    "reports": 2,
    "workId": "W-14524974",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000xBOPrAAO",
    "summary": "The Concurrent Users Chart may not load properly in the Resource Monitoring Tool (RMT). This is due to the execution time of the query used; if the query does not return in 30 seconds or less it is terminated and the chart will display the 'spinner' animation indefinitely.Note: This is very similar to the issue tracked under W-17289515, which may be relevant if you are still encountering this issue in a version of RMT later than 2023.3.1. ",
    "created": 1700495634000,
    "updated": 1760447708000
  },
  {
    "id": "a02Ka00000frkItIAI",
    "name": "",
    "title": "Noninteractive service not starting while initializing and start tableau server",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1",
    "primaryVer": "2025.1",
    "allVersions": [
      "2025.1"
    ],
    "reports": 2,
    "workId": "W-18501550",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000frkItIAI",
    "summary": "In slower environments, noninteractive enable timeout not robust enough leading to the below results.the \"nonInteractive microservice container\" is in an error state.Failed to initialize or start Tableau Server.",
    "created": 1749176632000,
    "updated": 1756920693000
  },
  {
    "id": "a02Ka00000iwGhmIAE",
    "name": "",
    "title": "The Virtual Connection Fails with Collation Mismatch Error on Tableau Server 2025.1.X",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2025.1.x",
    "primaryVer": "2025.1",
    "allVersions": [
      "2025.1"
    ],
    "reports": 0,
    "workId": "W-19113927",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000iwGhmIAE",
    "summary": "A customer encountered a collation mismatch error when combining data from Snowflake and SharePoint in a virtual connection.",
    "created": 1756774709000,
    "updated": 1783679389000
  },
  {
    "id": "a02Ka00000iHf9vIAC",
    "name": "",
    "title": "Internal Error \"00BF554A\" When Publishing Workbooks to Tableau Server or Tableau Cloud",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3.5, 2023.3.18, 2024.2.8, 2025.1.2 (Server), 2025.2.0 (Cloud)",
    "primaryVer": "2023.3.5",
    "allVersions": [
      "2023.3.5",
      "2023.3.18",
      "2024.2.8",
      "2025.1.2",
      "2025.2.0"
    ],
    "reports": 2,
    "workId": "W-19048775",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000iHf9vIAC",
    "summary": "When attempting to publish a workbook via Tableau Desktop to either Tableau Server or Tableau Cloud, the following error might occur:Unable to complete actionAn error occurred when publishing the workbookError Code: 00BF554AInternal Error - An unexpected error occurred and the operation could not be completed.",
    "created": 1755273311000,
    "updated": 1764974758000
  },
  {
    "id": "a02Ka00000eNRGXIA4",
    "name": "",
    "title": "Right Unmatched-only Joins in Flows Fail to Output Rows in Tableau Cloud/Server 2025.1 or Newer",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1.0",
    "primaryVer": "2025.1.0",
    "allVersions": [
      "2025.1.0"
    ],
    "reports": 13,
    "workId": "W-18122651",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000eNRGXIA4",
    "summary": "Flows using a right unmatched-only join may fail to output rows when run in Tableau Cloud or Tableau Server 2025.1 and newer",
    "created": 1743009292000,
    "updated": 1772582965000
  },
  {
    "id": "a02Ka00000ePJ4EIAW",
    "name": "",
    "title": "Subscription Icon Missing on Views Using Live Connection to Google BigQuery JDBC in Tableau Server",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3.10 and later, 2024.2.7 and later",
    "primaryVer": "2023.3.10",
    "allVersions": [
      "2023.3.10",
      "2024.2.7"
    ],
    "reports": 3,
    "workId": "W-18325966",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000ePJ4EIAW",
    "summary": "After publishing a view to Tableau Server that uses a live connection with the Google BigQuery JDBC connector, the Subscription icon does not appear in the published view as expected.",
    "created": 1745622985000,
    "updated": 1765210485000
  },
  {
    "id": "a02Ka00000f9XHFIA2",
    "name": "",
    "title": "Error executing subquery id: \"<ID>\" happens when opening the workbook using FIXED LOD and Union in Tableau Desktop",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "Tableau Desktop 2024.3+, Tableau Server 2025.1+",
    "primaryVer": "2024.3",
    "allVersions": [
      "2024.3",
      "2025.1"
    ],
    "reports": 4,
    "workId": "W-18483078",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000f9XHFIA2",
    "summary": "When opening a workbook using FIXED LOD and Union on Tableau Desktop, the following error occurs:Unable to complete actionError executing subquery id: \"<ID>\"Error Code: 6EA18A9EInternal Error - An unexpected error occurred and the operation could not be completed.Unknown Server Error happens when opening the workbook on Tableau Server.",
    "created": 1747952370000,
    "updated": 1776666965000
  },
  {
    "id": "a028c00000zio8LAAQ",
    "name": "",
    "title": "Sets Display Mismatched Values Between Tableau Desktop and Tableau Server",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3.7+",
    "primaryVer": "2023.3.7",
    "allVersions": [
      "2023.3.7"
    ],
    "reports": 3,
    "workId": "W-16690326",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zio8LAAQ",
    "summary": "Set values experience a mismatch between Tableau Desktop and Tableau Server after a workbook is published.For example, when a Set should display the values of \"In\" or \"Out,\" once published the Set will only display \"Out\" values by default, and cannot be changed. ",
    "created": 1731083081000,
    "updated": 1742486908000
  },
  {
    "id": "a028c00000zJyXeAAK",
    "name": "",
    "title": "Numerical axis is incorrectly displayed on Tableau Cloud and Tableau Server in Japanese.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 6,
    "workId": "W-16207292",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zJyXeAAK",
    "summary": "The numerical axis format becomes incorrect when the workbook locale is set, and the Tableau Cloud/Server account setting or browser is set to the Japanese locale. This causes a different display between Tableau Desktop and Tableau Cloud/Tableau Server.Example:Tableau Desktop 2024.2:Tableau Cloud 2024.2:",
    "created": 1720774060000,
    "updated": 1761234133000
  },
  {
    "id": "a02Ka00000hnKrsIAE",
    "name": "",
    "title": "Tableau Server 2025.1.5 Fails to Install on Non-English (US) Windows",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1.5",
    "primaryVer": "2025.1.5",
    "allVersions": [
      "2025.1.5"
    ],
    "reports": 7,
    "workId": "W-19181763",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000hnKrsIAE",
    "summary": "Installation of Tableau Server 2025.1.5 fails if it is NOT Windows Server (en_US) environment.Issue happens in not only in Chinese, Japanese, Korea Windows Server but also in en_GB as well.It happens in both upgrade or new installation.Below is an example of error on Japanese Windows Server.",
    "created": 1754284757000,
    "updated": 1755508679000
  },
  {
    "id": "a028c00000xB5soAAC",
    "name": "",
    "title": "Tableau Server - SAML Sign-In Fails with iFrame embed on 2023.3.0",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3.0",
    "primaryVer": "2023.3.0",
    "allVersions": [
      "2023.3.0"
    ],
    "reports": 16,
    "workId": "W-14471111",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000xB5soAAC",
    "summary": "When signing into Tableau Server using SAML through an iframe embed, the sign-in may fail with an error:AADSTS7500512: XML element 'Extensions' in XML namespace 'urn:oasis:names:tc:SAML:2.0:metadata",
    "created": 1699886418000,
    "updated": 1719886587000
  },
  {
    "id": "a028c00000ywiD8AAI",
    "name": "",
    "title": "Tableau Server - \u201cAn error occurred\u201d is intermittently displayed in views connected to Snowflake live datasources",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2023.1.2",
    "primaryVer": "2023.1.2",
    "allVersions": [
      "2023.1.2"
    ],
    "reports": 15,
    "workId": "W-14951426",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000ywiD8AAI",
    "summary": "Workbooks connected to Live Snowflake datasources intermittently experience an error and/or nonworking filters on Tableau Server.This issue has not been observed in Tableau Server 2023.1.16 or later releases. If observing this issue in 2023.1.16 or later, please\u00a0contact Technical Support.",
    "created": 1707316182000,
    "updated": 1750692469000
  },
  {
    "id": "a02Ka00000fsKGVIA2",
    "name": "",
    "title": "Unable to open a workbook in Tableau Desktop and Tableau Server after upgrade to version 2024.2.6",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.6 to 2024.2.10,  2025.1.2",
    "primaryVer": "2024.2.6",
    "allVersions": [
      "2024.2.6",
      "2024.2.10",
      "2025.1.2"
    ],
    "reports": 7,
    "workId": "W-18714929",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000fsKGVIA2",
    "summary": "Unable to open a workook in Tableau Desktop and Tableau Server.Tableau Desktop crashes immediately after opening the workbook. On Tableau Server, the workbook fails to load with the error:An unexpected error occurred. It you continue to receive this error please contact your Tableau Server Administrator.Session ID: Uncaught Failed to re-initialize session",
    "created": 1749746676000,
    "updated": 1758904955000
  },
  {
    "id": "a02Ka00000f9FmSIAU",
    "name": "",
    "title": "Question Mark is Added to Date/Time Fields When Views are Exported From Tableau Cloud to CSV",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "Spring '25",
    "primaryVer": "",
    "allVersions": [],
    "reports": 4,
    "workId": "W-18552183",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000f9FmSIAU",
    "summary": "Note this issue also impacts Tableau ServerWhen a view is downloaded from Tableau Cloud to CSV, columns that are date/time fields with the format dd/mm/yyyy hh:mm AM/PM has an unexpected question (?) mark between the date/time and the AM/PM when viewing the downloaded CSV",
    "created": 1747762452000,
    "updated": 1765211665000
  },
  {
    "id": "a02Ka00000jfxm5IAA",
    "name": "",
    "title": "Flow run on Tableau Cloud, Tableau Server or Tableau Prep Builder 2025.2.1+ failing with \"System error: null\"",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.2.1",
    "primaryVer": "2025.2.1",
    "allVersions": [
      "2025.2.1"
    ],
    "reports": 0,
    "workId": "W-19626219",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000jfxm5IAA",
    "summary": "Flow execution on Tableau Cloud, or Tableau Prep Builder 2025.2.1+  and Tableau Server 2024.2.13 are failing due to \"System error: null\".However, the same flow runs without issue on Tableau Prep Builder 2025.2.0 or older versions.",
    "created": 1757896003000,
    "updated": 1784818371000
  },
  {
    "id": "a028c00000zgmquAAA",
    "name": "",
    "title": "Tableau Prep Builder - No Sign In Dialog When Attempting to Connect to Tableau Server",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.3+",
    "primaryVer": "2024.2.3",
    "allVersions": [
      "2024.2.3"
    ],
    "reports": 1,
    "workId": "W-16677319",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zgmquAAA",
    "summary": "When attempting to connect to Tableau Server from within Tableau Prep Builder, the sign-in dialog box does not pop up as expected. ",
    "created": 1725643187000,
    "updated": 1729792574000
  },
  {
    "id": "a028c00000zjpazAAA",
    "name": "",
    "title": "Flows Connected to Virtual Connections Fail to Run on Tableau Server 2024.2.5+",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.5",
    "primaryVer": "2024.2.5",
    "allVersions": [
      "2024.2.5"
    ],
    "reports": 13,
    "workId": "W-17400946",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zjpazAAA",
    "summary": "When running a Flow in Tableau Server 2024.2.5 that is connected to one or more Virtual Connections, the following error might occur: Something went wrong. Error: An error occurred while communicating with data source 'PrepDataSource' Unknown error: TableauException: Query_Policy_Persistence_Service reported Service encountered an unidentified internal error (code=13). Try rerunning the flow.",
    "created": 1734029072000,
    "updated": 1751887446000
  },
  {
    "id": "a02Ka00000eNSnbIAG",
    "name": "",
    "title": "Error Code: 79B9C33C or \"Mismatched quote in\" activating license in Tableau Desktop and Tableau Server 2025.1.0",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1.0",
    "primaryVer": "2025.1.0",
    "allVersions": [
      "2025.1.0"
    ],
    "reports": 41,
    "workId": "W-18137083",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000eNSnbIAG",
    "summary": "When attempting to activate a Tableau Desktop or Tableau Server license key in version 2025.1, the following error might occur:Unexpected ErrorMismatched Quote In \"<...>\"Error Code: 79B9C33CNote, this issue is known to only occur with certain special-purpose license keys, such as keys provided as part of Tableau's Academic Programs, or license keys for Embedded Analytics environments.This article will be updated as any new information comes to light.",
    "created": 1743093624000,
    "updated": 1764981658000
  },
  {
    "id": "a028c00000zIPqzAAG",
    "name": "",
    "title": "Tableau Cloud - Subscriptions can't be received when using custom SMTP Server",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.1",
    "primaryVer": "2024.1",
    "allVersions": [
      "2024.1"
    ],
    "reports": 4,
    "workId": "W-15658573",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zIPqzAAG",
    "summary": "When setting up an SMTP Server on Tableau Cloud, users cannot receive subscriptions. Subscription e-mails instead send a failure error:SubscriptionErrorResult: ErrorCode: 150024; Error Category: UNKNOWN; Error message: SUBSCRIPTION_UNKNOWN_ERROR. java.io.FileNotFoundException: /filepath/ (No such file or directory)\"",
    "created": 1716500492000,
    "updated": 1757645743000
  },
  {
    "id": "a028c00000zLXLaAAO",
    "name": "",
    "title": "Viz Preview Is Not Shown For A Slack App Created After May 8th 2024 IN Tableau Server And Slack Integration",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1.8",
    "primaryVer": "2023.1.8",
    "allVersions": [
      "2023.1.8"
    ],
    "reports": 3,
    "workId": "W-16603149",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zLXLaAAO",
    "summary": "Viz preview is not shown for a Slack app created after May 8th 2024 in Tableau Server and Slack integration.This issue occurs as the original Slack API method for uploading files to Slack, files.upload is deprecated and newly created Slack apps are unable to use files.upload starting from May 8, 2024.\ufeff",
    "created": 1724900309000,
    "updated": 1764205448000
  },
  {
    "id": "a02Ka00000f9XGqIAM",
    "name": "",
    "title": "Some Fonts are Missing from the Available List in Web Edit when Microsoft Edge Browser UI is in non-English Windows Tableau Server",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3, 2024.2, 2025.1",
    "primaryVer": "2023.3",
    "allVersions": [
      "2023.3",
      "2024.2",
      "2025.1"
    ],
    "reports": 0,
    "workId": "W-18390646",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000f9XGqIAM",
    "summary": "Some fonts are missing from the Available List in Web Edit when the Browser UI is in a non-English language, even though the conditions are met for using custom fonts in Tableau Server.For example, when the Browser UI is set to Chinese (Simplified), Microsoft YaHei UI is missing from the Web Edit Format dropdown.Browser UI is EnglishBrowser UI is Chinese (Simplified)Note that other popular fonts in Asian languages, such as \"MingLiU\", \"MS Gothic\" and \"SimSun\", are also affected.",
    "created": 1747950175000,
    "updated": 1781041976000
  },
  {
    "id": "a028c00000zj2hFAAQ",
    "name": "",
    "title": "Custom Fonts are Recognized in Tableau Desktop But Not in Tableau Server's Web Edit Mode",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2023.3.8, 2024.3",
    "primaryVer": "2023.3.8",
    "allVersions": [
      "2023.3.8",
      "2024.3"
    ],
    "reports": 1,
    "workId": "W-17240288",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zj2hFAAQ",
    "summary": "When working with custom fonts, the fonts will be recognized and display correctly in Tableau Desktop. However, when using Tableau Server's Web Edit mode, the same fonts are not recognized/listed at all. ",
    "created": 1731708237000,
    "updated": 1738020803000
  },
  {
    "id": "a02Ka00000jgrOdIAI",
    "name": "",
    "title": "\"All Sites\" Extract Refreshes Task List Is Empty in Tableau Server",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3 and above",
    "primaryVer": "2023.3",
    "allVersions": [
      "2023.3"
    ],
    "reports": 1,
    "workId": "W-19371665",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000jgrOdIAI",
    "summary": "In Tableau Server when a Server Administrator views the \"All Sites\" tasks page, the \"Extract Refreshes\" task list may appear empty if Virtual Connection extract refresh tasks exist across multiple sites.",
    "created": 1758506369000,
    "updated": 1761584943000
  },
  {
    "id": "a028c00000yCsyJAAS",
    "name": "",
    "title": "Tableau Prep/Server - Error \"Internet communication error: SSL peer certificate or SSH remote key was not OK\u201d occurs with self-signed SSL Certificate",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2023.1 (Server), 2023.2 (Builder)",
    "primaryVer": "2023.1",
    "allVersions": [
      "2023.1",
      "2023.2"
    ],
    "reports": 3,
    "workId": "W-13894560",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yCsyJAAS",
    "summary": "When trying to connect to a published data source from Tableau Prep on a Tableau Server secured with a self-signed SSL certificate, the following error may appear under specific conditions: \"Internet communication error: SSL peer certificate or SSH remote key was not OK\u201dConditions:Tableau Server must have SSL enabledThe SSL Certificate must be self-signedOn the machine where Prep Builder runs, more than one CA in the Trust Store must have the same subject name",
    "created": 1701441659000,
    "updated": 1771818222000
  },
  {
    "id": "a028c00000zLYxkAAG",
    "name": "",
    "title": "Tableau Server - Unable to Connect to Azure SQL DB from Tableau Server Running in Ubuntu using AD Password",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1.12+",
    "primaryVer": "2023.1.12",
    "allVersions": [
      "2023.1.12"
    ],
    "reports": 1,
    "workId": "W-16521321",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zLYxkAAG",
    "summary": "When connecting to Azure SQL Database from Tableau Server on Ubuntu machines using the Active Directory Password authentication method, the connection fails with an error. ",
    "created": 1724951262000,
    "updated": 1764886584000
  },
  {
    "id": "a028c000010FakWAAS",
    "name": "",
    "title": "After Upgrading to 2024.2.2, Flows Running on Tableau Server Fail Due to tabminerva.exe Crashing During the Flow Run",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.2",
    "primaryVer": "2024.2.2",
    "allVersions": [
      "2024.2.2"
    ],
    "reports": 10,
    "workId": "W-17240572",
    "url": "https://help.salesforce.com/s/issue?id=a028c000010FakWAAS",
    "summary": "After upgrading to Tableau Server version 2024.2.2 from an older version (2023.1.7 in testing), flows being run on Tableau Server consistently fail due to the tabminerva.exe service crashing. This affects both scheduled and manually-run flows.",
    "created": 1740682403000,
    "updated": 1771373238000
  },
  {
    "id": "a02Ka00000jhkyZIAQ",
    "name": "",
    "title": "\"Failed to Create An Alert\u201d error in Tableau Server due to thousands separator locale mismatch",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3.22, 2024.2.15, 2025.1.8",
    "primaryVer": "2023.3.22",
    "allVersions": [
      "2023.3.22",
      "2024.2.15",
      "2025.1.8"
    ],
    "reports": 0,
    "workId": "W-19781378",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000jhkyZIAQ",
    "summary": "When creating a Data-driven alert on Tableau Server, we get the error \"Failed to create an alert\" if thousands separator that does not match the server locale",
    "created": 1759303370000,
    "updated": 1781194042000
  },
  {
    "id": "a028c00000yz1yyAAA",
    "name": "",
    "title": "Tableau Server - E-mail Subscriptions are not triggered after successful incremental extract refreshes",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3.0",
    "primaryVer": "2023.3.0",
    "allVersions": [
      "2023.3.0"
    ],
    "reports": 4,
    "workId": "W-15208702",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yz1yyAAA",
    "summary": "After upgrading Tableau Server to 2023.3.1 subscriptions set to the frequency 'When Data Refreshes' do not send a subscription e-mail after Incremental Refresh jobs are run.Full Extract Refreshes do not experience the issue. ",
    "created": 1710270434000,
    "updated": 1719886594000
  },
  {
    "id": "a028c00000zIOU6AAO",
    "name": "",
    "title": "Extract refresh for BigQuery in Tableau Server 2023.3.0 on Windows takes longer time.",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2023.3.0",
    "primaryVer": "2023.3.0",
    "allVersions": [
      "2023.3.0"
    ],
    "reports": 0,
    "workId": "W-14834548",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zIOU6AAO",
    "summary": "Extract refresh for BigQuery in Tableau Server 2023.3.0 on Windows takes longer time compared to the one in Tableau Server 2022.3.3 on Windows.The issue occurs in Tableau Server on Windows, and it doesn't occur in Tableau Server on Linux.The issue occurs when using Google BigQuery connector (not JDBC).Roughly speaking, it seems to be around 1.5 ~ 1.8 times longer in the internal reproduction.",
    "created": 1716426371000,
    "updated": 1733551047000
  },
  {
    "id": "a028c00000yz1apAAA",
    "name": "",
    "title": "Tableau Server/Cloud - Border lines inconsistent for server and client rendering",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "Server 2023.3+, Cloud 2024.1",
    "primaryVer": "2023.3",
    "allVersions": [
      "2023.3",
      "2024.1"
    ],
    "reports": 0,
    "workId": "W-15189094",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yz1apAAA",
    "summary": "The header border lines that appear when a header line is added to a worksheet appears much thicker when client-side rendered compared to server-side rendering and within Tableau Desktop. Most noticeable with the column border line.",
    "created": 1710263039000,
    "updated": 1719886594000
  },
  {
    "id": "a02Ka00000ftcR0IAI",
    "name": "",
    "title": "Flows Fail with Internet communication error: Transferred a partial file on Tableau Server",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.8",
    "primaryVer": "2024.2.8",
    "allVersions": [
      "2024.2.8"
    ],
    "reports": 1,
    "workId": "W-18757987",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000ftcR0IAI",
    "summary": "Due to a delay in the flowprocessor to send tuples to the dataserver within the defined timeout of the dataserver, the dataserver closes the connection and the flow fails with\u00a0Flows Fail with Internet communication error: Transferred a partial file",
    "created": 1750064578000,
    "updated": 1770689418000
  },
  {
    "id": "a028c000010Fp9zAAC",
    "name": "",
    "title": "Date Filter displaying incorrect Year in Tableau Server, only for when selecting December 30 or 31 2024",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "Summer '16",
    "primaryVer": "",
    "allVersions": [],
    "reports": 0,
    "workId": "W-17978598",
    "url": "https://help.salesforce.com/s/issue?id=a028c000010Fp9zAAC",
    "summary": "In Tableau Server (2024.2.3), when selecting December 30 or 31, 2024, in the date filter, the displayed year incorrectly shows as 2025, while the date and month remain unchanged.However, when selecting December 29, 2024 it is showcasing correctly on the server.It appears that this issue occurs only in Tableau Server, where the year is incorrectly labeled as 2025 on the screen. However, in Tableau Desktop, everything displaying correctly.",
    "created": 1741346854000,
    "updated": 1756316504000
  },
  {
    "id": "a028c000010FVNLAA4",
    "name": "",
    "title": "Unable to Create or Edit the flow on Tableau Server  GUI",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.7",
    "primaryVer": "2024.2.7",
    "allVersions": [
      "2024.2.7"
    ],
    "reports": 2,
    "workId": "W-17832834",
    "url": "https://help.salesforce.com/s/issue?id=a028c000010FVNLAA4",
    "summary": "Unable to Create or Edit flow referencing published extract data source",
    "created": 1740459451000,
    "updated": 1751038696000
  },
  {
    "id": "a02Ka00000f7yfBIAQ",
    "name": "",
    "title": "REST API Query to List All Data Sources Not Showing The 'Type' Attribute For Some Data Sources in Tableau Server",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "API v3.19 and later",
    "primaryVer": "",
    "allVersions": [],
    "reports": 2,
    "workId": "W-18414057",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000f7yfBIAQ",
    "summary": "When using the \"Query Data Source\" REST API method to return a list of all published data sources on a specific Tableau Server environment, the response body might include entries where the \"type\" attribute is missing.",
    "created": 1747262500000,
    "updated": 1787774194000
  },
  {
    "id": "a028c00000yzAq6AAE",
    "name": "",
    "title": "Published flow output gets error and becomes unavailable after publishing the flow to the Tableau Server",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2023.1.7",
    "primaryVer": "2023.1.7",
    "allVersions": [
      "2023.1.7"
    ],
    "reports": 3,
    "workId": "W-15232100",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yzAq6AAE",
    "summary": "Published flow output gets error and becomes unavailable after publishing the flow to the Tableau Server.Note that this issue occurs in Tableau Server 2023.1 and 2023.3 except for 2023.1.10 (Linux).",
    "created": 1710405386000,
    "updated": 1719886595000
  },
  {
    "id": "a028c000010FQAkAAO",
    "name": "",
    "title": "Incorrect values displayed in views containing aggregations, data blending, or LOD expressions on Published Data Sources in Tableau Server 2024.2+",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.5",
    "primaryVer": "2024.2.5",
    "allVersions": [
      "2024.2.5"
    ],
    "reports": 9,
    "workId": "W-17767469",
    "url": "https://help.salesforce.com/s/issue?id=a028c000010FQAkAAO",
    "summary": "In certain situations when connecting to a Published Data Source on Tableau Server, cached query results may be incorrectly determined as reusable. This cache collision causes Tableau Server to display incorrect aggregated values in a view.This issue may impacts views utilizing the following:Basic aggregations (e.g., SUM, COUNT)Data BlendingFIXED Level of Detail (LOD) expressions",
    "created": 1740156237000,
    "updated": 1773381732000
  },
  {
    "id": "a02Ka00000eNn1PIAS",
    "name": "",
    "title": "\"Failed to obtain a lease\" When Activating Tableau Desktop/Prep Builder via Login-Based License Management (LBLM) on Tableau Server 2025.1.0",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1.0",
    "primaryVer": "2025.1.0",
    "allVersions": [
      "2025.1.0"
    ],
    "reports": 28,
    "workId": "W-18229111",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000eNn1PIAS",
    "summary": "When attempting to activate Tableau Desktop or Tableau Prep Builder via Tableau Server, using Login-Based License Management (LBLM), the following error might occur:Activation ErrorUnable to activate by signing inFailed to obtain a leaseNote, although the issue manifests to users in either Tableau Desktop or Tableau Prep Builder, a fix is in progress for Tableau Server.",
    "created": 1744150506000,
    "updated": 1770795165000
  },
  {
    "id": "a028c00000yzdzqAAA",
    "name": "",
    "title": "Tableau Prep - Unknown Server error/RESOURCE_EXHAUSTED when connecting to a database with a large number of tables",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2023.3",
    "primaryVer": "2023.3",
    "allVersions": [
      "2023.3"
    ],
    "reports": 2,
    "workId": "W-14896579",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yzdzqAAA",
    "summary": "In Tableau Prep, connecting to a database with a large number of tables with long table names results in an error. The issue is noted to also occur when using Prep in Tableau Server.",
    "created": 1711563027000,
    "updated": 1780509374000
  },
  {
    "id": "a028c00000uWRTSAA4",
    "name": "",
    "title": "Unable to download the view as PowerPoint or PDF file with custom fonts in Tableau Server on Windows",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 2,
    "workId": "W-13894246",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000uWRTSAA4",
    "summary": "Tableau Server on Windows does not use custom fonts in PDF or PowerPoint files exported from views with custom fonts specified such as Noto Sans or Noto Sans JP, even if the following conditions are met:Custom fonts are properly installed on the server OS.Custom fonts are properly installed on the client OS where Tableau Desktop is running.When viewing a view on Tableau Server in a browser, the view is displayed in a custom font properly.",
    "created": 1691657896000,
    "updated": 1791804372000
  },
  {
    "id": "a028c00000zkNrLAAU",
    "name": "",
    "title": "A Wildcard Union Flow Input Only Processes Few of the Files in Tableau Server 2023.3 and Newer",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3",
    "primaryVer": "2023.3",
    "allVersions": [
      "2023.3"
    ],
    "reports": 2,
    "workId": "W-17085946",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zkNrLAAU",
    "summary": "Flows that meet the following conditions may output fewer rows than expected in Tableau Server 2023.3 and newer.Conditions:1. The affected flows contain a wildcard union input, and each file in this wildcard union input contains only a few rows of data. For example, there are 10 Excel files in this wildcard union input, and each Excel file contains only 10 rows of data in the sheet.2. The above wildcard union input joins to a published data source in Tableau Server.3. The flows run on Tableau Se",
    "created": 1735564936000,
    "updated": 1758557507000
  },
  {
    "id": "a028c00000zLPYVAA4",
    "name": "",
    "title": "Tableau Server Backup with External File Store Enabled Fails With Error 'TApplicationException' in 2024.2 or newer",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.1",
    "primaryVer": "2024.2.1",
    "allVersions": [
      "2024.2.1"
    ],
    "reports": 3,
    "workId": "W-16517438",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zLPYVAA4",
    "summary": "Tableau Server backup with external file store enabled failed with the following error after running the tsm command \"tsm maintenance snapshot-backup prepare\"\u00a0This job failed due to unexpected error: 'TApplicationException'\u00a0This issue occurs in Tableau Server 2024.2 or newer but it works (the \"tsm maintenance snapshot-backup prepare\" successfully finishes) in older versions of Tableau Server such as 2023.3.8.a",
    "created": 1724639622000,
    "updated": 1727745171000
  },
  {
    "id": "a028c000010F8WlAAK",
    "name": "",
    "title": "Concurrent Users Chart Not Loading in Tableau Server Resource Monitoring Tool",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.2",
    "primaryVer": "2024.2.2",
    "allVersions": [
      "2024.2.2"
    ],
    "reports": 3,
    "workId": "W-17289515",
    "url": "https://help.salesforce.com/s/issue?id=a028c000010F8WlAAK",
    "summary": "When attempting to view Concurrent Users in Tableau Server Resource Monitoring Tool 2024.2.2 and later, the chart may not load.Note: This is very similar to the issue previously resolved under W-14524974.",
    "created": 1739475160000,
    "updated": 1764971459000
  },
  {
    "id": "a02g700000AQ6ATAA1",
    "name": "",
    "title": "Flows are failing intermittently due to Hyper crashing",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2026.2",
    "primaryVer": "2026.2",
    "allVersions": [
      "2026.2"
    ],
    "reports": 0,
    "workId": "W-24252317",
    "url": "https://help.salesforce.com/s/issue?id=a02g700000AQ6ATAA1",
    "summary": "Tableau Prep flows may intermittently fail with one of the following errors:- Something went wrong. Error: An error occurred while communicating with the data sourceAn error occurred while communicating with the data source[SQLSTATE:25P02] current transaction is aborted, commands ignored until end of transaction blockDataServiceFailure. Try rerunning the flow.- System error: An error occurred while communicating with Tableau Data Extract[SQLSTATE:08001] Could not connect to the Hyper server: Can",
    "created": 1790141968000,
    "updated": 1791298297000
  },
  {
    "id": "a028c00000zKjWcAAK",
    "name": "",
    "title": "Flows failing with NullPointerException error after Tableau Server upgraded to 2023.3.2 or later",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3.2",
    "primaryVer": "2023.3.2",
    "allVersions": [
      "2023.3.2"
    ],
    "reports": 4,
    "workId": "W-16190815",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zKjWcAAK",
    "summary": "Published Flows failing with NullPointerException error after Tableau Server upgraded to 2023.3.2 or later.After upgrading the Tableau Server to 2023.3.2, the flows which run successfully in previous version, may start to fail with the following error in backgrounder log file.Execution of flow with ID xxxx timed out NullPointerExceptionNote: This is the same with another Known Issue: Published Flows failing due to NullPointerException post TS upgrade which is supposed to be fixed in 2023.3.4 by ",
    "created": 1722835961000,
    "updated": 1738335377000
  },
  {
    "id": "a028c00000yzxmxAAA",
    "name": "",
    "title": "An error occurs when editing existing Amazon S3 data source on Tableau Server",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "Tableau Server 2023.3.3+, Tableau Cloud 2024.2",
    "primaryVer": "2023.3.3",
    "allVersions": [
      "2023.3.3",
      "2024.2"
    ],
    "reports": 18,
    "workId": "W-15447406",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yzxmxAAA",
    "summary": "An error occurs when editing existing Amazon S3 data source on Tableau Server.",
    "created": 1712648123000,
    "updated": 1757122933000
  },
  {
    "id": "a02Ka00000iHhNAIA0",
    "name": "",
    "title": "Tableau Prep Builder 2025.1.4 or Later Fails to Launch on Windows 10, Windows Server 2016 and 2019",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1.4, 2025.2.0, 2025.2.1",
    "primaryVer": "2025.1.4",
    "allVersions": [
      "2025.1.4",
      "2025.2.0",
      "2025.2.1"
    ],
    "reports": 8,
    "workId": "W-19311868",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000iHhNAIA0",
    "summary": "Tableau Prep Builder 2025.1.4 or later fails to launch on Windows 10, Windows Server 2016, and 2019. The Windows Task Manager shows that the Tableau Prep Builder.exe is running, but the splash screen and UI do not appear.",
    "created": 1755484618000,
    "updated": 1787163037000
  },
  {
    "id": "a028c000010ENa3AAG",
    "name": "",
    "title": "Immediately after activating a Tableau Server license, it shows as \"Ended\"",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.1 or newer versions",
    "primaryVer": "2024.2.1",
    "allVersions": [
      "2024.2.1"
    ],
    "reports": 2,
    "workId": "W-17507817",
    "url": "https://help.salesforce.com/s/issue?id=a028c000010ENa3AAG",
    "summary": "The issue happens in the following environment.Tableau Server 2024.2.1 or laterThe installation is NOT using ATRThe license key is a USL keyThe license shows as \"Ended\" immediately after the successful activation.",
    "created": 1737336448000,
    "updated": 1741275014000
  },
  {
    "id": "a028c00000zKIbPAAW",
    "name": "",
    "title": "\"This job failed due to unexpected error: 'TApplicationException'...Internal error processing completeApplyMigrations\" during Tableau Server Upgrade",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3.7, 2023.3.8, 2023.1.14, 2023.1.15, 2022.3.18, 2022.3.19",
    "primaryVer": "2023.3.7",
    "allVersions": [
      "2023.3.7",
      "2023.3.8",
      "2023.1.14",
      "2023.1.15",
      "2022.3.18",
      "2022.3.19"
    ],
    "reports": 7,
    "workId": "W-16299360",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zKIbPAAW",
    "summary": "When attempting to upgrade Tableau Server, an unexpected \"This job failed due to unexpected error: 'TApplicationException'...Internal error processing completeApplyMigrations\" error occurs during the upgrade process.NOTE: This issue can also occur during the blue/green upgrade process when restoring a Tableau Server backupThe following error may display when running the Tableau Server upgrade script:This job failed due to unexpected error: 'TApplicationException'\norg.apache.thrift.TApplicationEx",
    "created": 1721674554000,
    "updated": 1727738705000
  },
  {
    "id": "a02Ka00000ePuYQIA0",
    "name": "",
    "title": "[Tableau Server] A forced logout will occur with session expired on Chrome/Edge if certain conditions are met.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3.14",
    "primaryVer": "2023.3.14",
    "allVersions": [
      "2023.3.14"
    ],
    "reports": 3,
    "workId": "W-18264723",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000ePuYQIA0",
    "summary": "When a user who meets the following conditions logs in, they will be forcibly logged out immediately after selecting a site other than the default.Users can use the added ID Pool to authenticate with external IdPs.Users are logged in to multiple sites on Tableau Server.If the user belongs to only one site, they can sign in to the site.",
    "created": 1746084764000,
    "updated": 1756918675000
  },
  {
    "id": "a028c00000yDHrPAAW",
    "name": "",
    "title": "Tableau Server - The command \"tsm maintenance validate-resources --site-id\" fails to run successfully",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2021.4.0",
    "primaryVer": "2021.4.0",
    "allVersions": [
      "2021.4.0"
    ],
    "reports": 0,
    "workId": "W-14642579",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yDHrPAAW",
    "summary": "On Tableau Server versions 2021.4.0 and higher, the following tsm command may fail when attempted:tsm maintenance validate-resources --site-idThe error message is as follows:This job failed due to unexpected error: 'NullPointerException' User 0 is not a system admin. (errorCode=1)",
    "created": 1702306684000,
    "updated": 1719886594000
  },
  {
    "id": "a02Ka00000gb7t9IAA",
    "name": "",
    "title": "When retrieving subscription information via Tableau Server REST API, pagination is inconsistent",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2024.2.x",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 1,
    "workId": "W-18900192",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000gb7t9IAA",
    "summary": "When retrieving information from Tableau Server REST API endpoints, pagination is used to separate the results into manageable chunks. The default pagination is 100, and this can be changed with the pageSize parameter. When retrieving a list of subscriptions for a given site using GET /api/api-version/sites/site-id/subscriptions the returned result set will not consistently return the result set with the given pagination. For example, if there are three hundred subscriptions, instead of 3 pages ",
    "created": 1752250625000,
    "updated": 1753835298000
  },
  {
    "id": "a028c00000yyL3IAAU",
    "name": "",
    "title": "Tableau Server / Tableau Cloud - List of projects in Connected Apps option of settings is limited to 1000.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.1.12",
    "primaryVer": "2022.1.12",
    "allVersions": [
      "2022.1.12"
    ],
    "reports": 0,
    "workId": "W-15130478",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yyL3IAAU",
    "summary": "The list of projects is limited to the first 1000 projects in the picklist of new Connected Apps.Both Tableau Server and Tableau Cloud have the behaviour.",
    "created": 1709568043000,
    "updated": 1781099664000
  },
  {
    "id": "a028c00000xArgMAAS",
    "name": "",
    "title": "Tableau Desktop/Server - LBLM - Tableau Desktop 2023.x does not Prompt for Site selection when Activating the Product by signing into Server",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2023.1.5",
    "primaryVer": "2023.1.5",
    "allVersions": [
      "2023.1.5"
    ],
    "reports": 3,
    "workId": "W-14442361",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000xArgMAAS",
    "summary": "When attempting to activate product via Tableau Desktop with a Tableau Server using LBLM, there is no prompt for Site Selection. This may result in random site(s) being chosen and errors or activation failures as a result. ",
    "created": 1699380563000,
    "updated": 1751900818000
  },
  {
    "id": "a02Ka00000jeXWsIAM",
    "name": "",
    "title": "When opening a workbook on Tableau Cloud, An unexpected error occurred. If you continue to receive this error please contact your Tableau Server Admin",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.2.0",
    "primaryVer": "2025.2.0",
    "allVersions": [
      "2025.2.0"
    ],
    "reports": 2,
    "workId": "W-19152908",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000jeXWsIAM",
    "summary": "In Tableau Cloud the error \"An unexpected error occurred. If you continue to receive this error please contact your Tableau Server Administrator.\" is observed when opening a workbook",
    "created": 1757485840000,
    "updated": 1784273038000
  },
  {
    "id": "a028c000010EQCxAAO",
    "name": "",
    "title": "Seamless Authentication Fails For Tableau Server Views Embedded Using the Tableau View LWC",
    "status": "Solution Deploying",
    "statusType": "open",
    "foundIn": "2024.3, All current Tableau Server versions",
    "primaryVer": "2024.3",
    "allVersions": [
      "2024.3"
    ],
    "reports": 2,
    "workId": "W-17627810",
    "url": "https://help.salesforce.com/s/issue?id=a028c000010EQCxAAO",
    "summary": "Seamless authentication fails for views embedded using the Tableau View LWC (Lightning Web Component). A Tableau Server sign-in page appears instead.",
    "created": 1737402857000,
    "updated": 1744223505000
  },
  {
    "id": "a028c00000yxYwzAAE",
    "name": "",
    "title": "Flows with input connections to Presto fail on Tableau Server",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3.0",
    "primaryVer": "2023.3.0",
    "allVersions": [
      "2023.3.0"
    ],
    "reports": 1,
    "workId": "W-14783184",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yxYwzAAE",
    "summary": "Flows with embedded input connections to Presto fail to run on Tableau Server.",
    "created": 1708467304000,
    "updated": 1719886594000
  },
  {
    "id": "a028c00000zilsLAAQ",
    "name": "",
    "title": "Tableau Desktop/Server: Context filter is not respected when viewing Full Data",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.3",
    "primaryVer": "2024.2.3",
    "allVersions": [
      "2024.2.3"
    ],
    "reports": 18,
    "workId": "W-17086025",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zilsLAAQ",
    "summary": "Context filter in a view connected with published data sources is not respected when viewing full data (when using VizData Service).Issue happens in Tableau Desktop and Server 2024.2.3 or later.",
    "created": 1730972719000,
    "updated": 1750266140000
  },
  {
    "id": "a028c00000yzES8AAM",
    "name": "",
    "title": "Installing Tableau Prep Builder 2022.4+ with ACTIVATIONSERVER flag does not populate server url when first activating",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.4.0",
    "primaryVer": "2022.4.0",
    "allVersions": [
      "2022.4.0"
    ],
    "reports": 0,
    "workId": "W-14353464",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yzES8AAM",
    "summary": "When installing Tableau Prep Builder 2022.4+ via the CMD line and using the\u00a0ACTIVATIONSERVER\u00a0Installer flag, it does not populate the 'Server' field in the 'Tableau Server Sign In' dialog box when selecting 'Activate by signing into a server' with the address used in the command. It is left blank.",
    "created": 1710456747000,
    "updated": 1719886595000
  },
  {
    "id": "a028c00000ziYKzAAM",
    "name": "",
    "title": "Failed Connection from Tableau Cloud to Presto Server After Hyperforce Migration",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.3.0",
    "primaryVer": "2024.3.0",
    "allVersions": [
      "2024.3.0"
    ],
    "reports": 7,
    "workId": "W-17104737",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000ziYKzAAM",
    "summary": "The following issue occurs when connecting with Presto connector, even with IP allowlist enabled or no IP restrictions.When SSL is Required:There was an unknown connection error to the database. The error message below has additional information, but you might need to ask the database administrator to review the database logs.[Simba][Presto] (1020) Error with HTTP API at https:/***/statement : SSL connect errorUnable to connect to the Presto server \"https://{hostname}\". Check that the server is ",
    "created": 1730350494000,
    "updated": 1734927866000
  },
  {
    "id": "a028c000010EX2PAAW",
    "name": "",
    "title": "Discrepancy in Search Behavior for Parameter Drop Down Lists in Tableau Server/Cloud vs Tableau Desktop",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.3",
    "primaryVer": "2024.3",
    "allVersions": [
      "2024.3"
    ],
    "reports": 1,
    "workId": "W-17661034",
    "url": "https://help.salesforce.com/s/issue?id=a028c000010EX2PAAW",
    "summary": "There is a discrepancy in behavior with the search feature for a parameter drop down list between Tableau Desktop and Tableau Server/Cloud.In Tableau Desktop, if there is a compact parameter list and a user attempts to search for a particular item by quickly typing in the name, Tableau Desktop will navigate to that specific item in the list. If the user types slower, Tableau Desktop will navigate to the first item in the list beginning with the key entry that was last input by the user.When deal",
    "created": 1737730899000,
    "updated": 1764886873000
  },
  {
    "id": "a02Ka00000fsE7oIAE",
    "name": "",
    "title": "Tableau Server: Unexpected Server Error Occurs when Trying to Access a View on a Site with Guest Access Disabled and with \"&:redirect=auth\" in the URL",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2024.2.3",
    "primaryVer": "2024.2.3",
    "allVersions": [
      "2024.2.3"
    ],
    "reports": 3,
    "workId": "W-18679473",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000fsE7oIAE",
    "summary": "URL fails with the unexpected server error while it is trying to access the view as a Guest for the Tableau Server site where guest access is disabled",
    "created": 1749653291000,
    "updated": 1776114941000
  },
  {
    "id": "a028c00000yCgM4AAK",
    "name": "",
    "title": "Tableau Server - Creating a new workbook from a datasource migrated using CMT results in a login loop",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.3.6",
    "primaryVer": "2022.3.6",
    "allVersions": [
      "2022.3.6"
    ],
    "reports": 0,
    "workId": "W-14490391",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yCgM4AAK",
    "summary": "When creating a new workbook using a published data source that has been migrated from one site to another on the same Tableau Server using the Content Migration Tool, a login loop occurs.",
    "created": 1701270171000,
    "updated": 1722608033000
  },
  {
    "id": "a028c00000zIpzvAAC",
    "name": "",
    "title": "Initializing tsm after installing Tableau Server on RHEL 8.10 or greater fails with error",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 1,
    "workId": "W-15837471",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zIpzvAAC",
    "summary": "Initializing tsm after installing Tableau Server on RHEL 8.10 or greater fails with the following error: Error: The version of this Linux distribution is not supported ('rhel 8.10')This issue occurs because this is the first time the minor version of a Linux release has gone into double digits.A note on containers: Deploying a container that uses UBI (Universal Base Image) 8 will encounter this issue, as the latest version will contain the .10 update.",
    "created": 1717688538000,
    "updated": 1719948193000
  },
  {
    "id": "a028c00000zIBX1AAO",
    "name": "",
    "title": "Ad-hoc run of flows fail in Tableau Server",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3.4",
    "primaryVer": "2023.3.4",
    "allVersions": [
      "2023.3.4"
    ],
    "reports": 1,
    "workId": "W-15676634",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zIBX1AAO",
    "summary": "All flows execute successfully when triggered via a schedule. However, manual execution of these flows results in failure.",
    "created": 1715758123000,
    "updated": 1719886602000
  },
  {
    "id": "a02Ka00000fAng5IAC",
    "name": "",
    "title": "\"An Unexpected error occurred\" when loading Lineage page for a data source with a large amount of connected workbooks on Tableau Server",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.7",
    "primaryVer": "2024.2.7",
    "allVersions": [
      "2024.2.7"
    ],
    "reports": 8,
    "workId": "W-18642745",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000fAng5IAC",
    "summary": "When navigating to the lineage page for a data source with a large amount of connected workbooks (example: 1500+ connected workbooks) on Tableau Server, the page goes blank and returns the error message \"An unexpected error occurred\".Checking the network tab of the browser developer tools shows a timeout in response to a GraphQL query for the DatasourceLineageCounts. The response message:{\u00a0\u00a0\"errors\": [\u00a0\u00a0\u00a0\u00a0{\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\"message\": \"Execution canceled because timeout of 30000 millis was reached\",\u00a0\u00a0\u00a0\u00a0\u00a0\u00a0\"l",
    "created": 1748442023000,
    "updated": 1776870654000
  },
  {
    "id": "a02Ka00000f7IVzIAM",
    "name": "",
    "title": "Flows with a Cross Database Join May Fail with an Error \"[SQLSTATE:08006] The Hyper server closed the connection\" in Tableau Prep Builder",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 3,
    "workId": "W-17964113",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000f7IVzIAM",
    "summary": "When attempting to run a flow in Tableau Prep Builder that joins two different data source connections, the following error might occur in certain scenarios: [SQLSTATE:08006] The Hyper server closed the connectionThe scenarios for this issue will typically involve one data source that is comparatively \"small\" or \"fast', and another that is comparatively \"slow\" or \"large\". In these instances the relative speed of each data source can result in the connection to the \"fast\" data source idling while",
    "created": 1746738375000,
    "updated": 1780644611000
  },
  {
    "id": "a028c00000yDbbpAAC",
    "name": "",
    "title": "Tableau Server - After publishing a workbook from Tableau Desktop to Tableau Server using a custom gateway port, the custom port isn't included in URL",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2023.3",
    "primaryVer": "2023.3",
    "allVersions": [
      "2023.3"
    ],
    "reports": 0,
    "workId": "W-14666351",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yDbbpAAC",
    "summary": "After publishing a workbook from Tableau Desktop to Tableau Server which is using a customized gateway port, the custom port is not included in the URL when the new browser window is opened.",
    "created": 1702933251000,
    "updated": 1747772503000
  },
  {
    "id": "a02Ka00000ivMKwIAM",
    "name": "",
    "title": "Parameter Display Order Changes After Publishing a Flow from Tableau Prep Builder to Tableau Server or Tableau Cloud",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1.3",
    "primaryVer": "2025.1.3",
    "allVersions": [
      "2025.1.3"
    ],
    "reports": 0,
    "workId": "W-19181018",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000ivMKwIAM",
    "summary": "In Tableau Prep Builder, parameters are displayed in ascending order based on numerical and alphabetical sorting and this order is preserved when saving the flow file.However, when the same flow is published to Tableau Server or Tableau Cloud, the parameters are displayed with a different order.",
    "created": 1756258454000,
    "updated": 1772653148000
  },
  {
    "id": "a02Ka00000jeNk1IAE",
    "name": "",
    "title": "Unable to receive Tableau ID password reset mail on mail servers that do not support STARTTLS after August 1st, 2025.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.2",
    "primaryVer": "2025.2",
    "allVersions": [
      "2025.2"
    ],
    "reports": 2,
    "workId": "W-19574251",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000jeNk1IAE",
    "summary": "When a user attempts to reset their Tableau ID password on id.tableau.com, they may not receive the email at certain email addresses. This occurs when the mail server for that email address does not support encryption via STARTTLS.",
    "created": 1757296194000,
    "updated": 1784863288000
  },
  {
    "id": "a02Ka00000hH2qOIAS",
    "name": "",
    "title": "Dashboards are displaying the error \"Stack depth 2001 exhausted\" when opened with multiple filters on both Tableau Cloud and Tableau Server",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1",
    "primaryVer": "2025.1",
    "allVersions": [
      "2025.1"
    ],
    "reports": 1,
    "workId": "W-18139027",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000hH2qOIAS",
    "summary": "Dashboards are displaying the error \"Stack depth 2001 exhausted\" when opened with multiple filters on both Tableau Cloud and Tableau Server",
    "created": 1753253176000,
    "updated": 1785203830000
  },
  {
    "id": "a02Ka00000fujB6IAI",
    "name": "",
    "title": "Through the specific methods, a Viewer user can become an owner of data sources, enabling them to refresh extract of data sources on Tableau Server",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2025.1.2",
    "primaryVer": "2025.1.2",
    "allVersions": [
      "2025.1.2"
    ],
    "reports": 0,
    "workId": "W-18859029",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000fujB6IAI",
    "summary": "Through the specific methods, a Viewer user can become an owner of data sources, enabling them to refresh extract of data sources on Tableau Server",
    "created": 1750732882000,
    "updated": 1758057286000
  },
  {
    "id": "a028c00000zJkyhAAC",
    "name": "",
    "title": "Tableau Server -  Following upgrade From 2022.3.11 to 2023.3.4, published Data Sources (not embedded) cannot be accessed",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3.4",
    "primaryVer": "2023.3.4",
    "allVersions": [
      "2023.3.4"
    ],
    "reports": 4,
    "workId": "W-16121540",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zJkyhAAC",
    "summary": "After upgrading from Tableau Server 2022.3.11 to Tableau Server 2023.3.4, connecting to or refreshing existing/upgraded, published data sources that were not embedded in workbooks are failing with an error.The underlying cause of this issue concerns an unexpected removal of published TDS files upon upgrade to early 2023.1 or 2023.3 releases. The affected versions have been removed from our downloads page.",
    "created": 1720193262000,
    "updated": 1727444148000
  },
  {
    "id": "a028c00000zjB8oAAE",
    "name": "",
    "title": "In Tableau Server the system parameter in an output file name isn\u2019t converted correctly when outputting to a shared folder.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3.9",
    "primaryVer": "2023.3.9",
    "allVersions": [
      "2023.3.9"
    ],
    "reports": 7,
    "workId": "W-17168951",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zjB8oAAE",
    "summary": "The system parameters such as <YYYYMMDD> in an output file name isn\u2019t converted correctly when outputting from Tableau Server to a shared folder.The system parameters in an output file show string of a parameter such as YYYYMMDD not like 20241101.",
    "created": 1732078567000,
    "updated": 1761582864000
  },
  {
    "id": "a02Ka00000kTuIGIA0",
    "name": "",
    "title": "Flows Created in Prep Builder 2022.1 with Excel Wildcard Unions Fail After Upgrade to Tableau Server 2024.2 or Later",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.14",
    "primaryVer": "2024.2.14",
    "allVersions": [
      "2024.2.14"
    ],
    "reports": 1,
    "workId": "W-19988683",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000kTuIGIA0",
    "summary": "After upgrading to Tableau Server 2024.2 or later, Prep flows may fail with the error \"the path isn't included in allowed file paths.\"This issue specifically affects flows containing an Excel Wildcard Union input step. The problem is triggered if the flow was created in an older version of Tableau Prep Builder (e.g., 2022.1 or earlier) and the wildcard union connection was originally created using a local file path (like C:\\test) and then subsequently edited to point to a network share.This edit",
    "created": 1761205959000,
    "updated": 1774023956000
  },
  {
    "id": "a02Ka00000jfgB0IAI",
    "name": "",
    "title": "In Multi-Node Environments File Store Shows Status Unavailable When Viewing the Process Status on Tableau Server, but is Available Using TSM",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1",
    "primaryVer": "2025.1",
    "allVersions": [
      "2025.1"
    ],
    "reports": 36,
    "workId": "W-19443406",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000jfgB0IAI",
    "summary": "When viewing the Tableau Server process status, all File Stores in the cluster shows Status unavailable. When checking the status of the processes via TSM, the status displays.",
    "created": 1757600148000,
    "updated": 1783482476000
  },
  {
    "id": "a028c00000zJyvbAAC",
    "name": "",
    "title": "Tableau Cloud/Server - Unable to update connection details of Databricks data sources",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2024.2",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 3,
    "workId": "W-16173478",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zJyvbAAC",
    "summary": "When attempting to update the HTTP Path for Databricks in the Connection Details for workbooks or data sources published to Tableau Cloud, an error appears.",
    "created": 1720796743000,
    "updated": 1756386146000
  },
  {
    "id": "a028c00000zJYE6AAO",
    "name": "",
    "title": "Data Driven Alerts May not be Sent when Expected in Tableau Server 2023.1.12",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2023.1.12",
    "primaryVer": "2023.1.12",
    "allVersions": [
      "2023.1.12"
    ],
    "reports": 6,
    "workId": "W-16114598",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zJYE6AAO",
    "summary": "In Tableau Server 2023.1.12, data driven alerts may not be sent when expected if the alert check occurs less than 24 hours after the last notification was sent out. Due to this issue, an alert is not generated until the next time the extract is refreshed.",
    "created": 1719593087000,
    "updated": 1777365958000
  },
  {
    "id": "a02Ka00000eNftzIAC",
    "name": "",
    "title": "View Loads and Extract Refreshes may take longer to complete than in previous versions after Tableau Server and Tableau Cloud 2025.1.0 upgrade",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1.0",
    "primaryVer": "2025.1.0",
    "allVersions": [
      "2025.1.0"
    ],
    "reports": 13,
    "workId": "W-18041009",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000eNftzIAC",
    "summary": "After Tableau Server or Tableau Cloud 2025.1.0 upgrade, view loads and extract refreshes may unexpectedly take longer to complete than in previous versions",
    "created": 1743704517000,
    "updated": 1783045475000
  },
  {
    "id": "a028c00000yEleGAAS",
    "name": "",
    "title": "Tableau Server - Cannot create workbook using a Virtual Connection extract.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1",
    "primaryVer": "2023.1",
    "allVersions": [
      "2023.1"
    ],
    "reports": 0,
    "workId": "W-12926824",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yEleGAAS",
    "summary": "Attempting to create a workbook from an extract Virtual Connection will result in nothing happening.",
    "created": 1705505647000,
    "updated": 1719886590000
  },
  {
    "id": "a028c00000zJyznAAC",
    "name": "",
    "title": "Tableau Cloud/Server/Desktop - After updating to 2024.2, unnecessary ranges are added to the axis on line graph views",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 20,
    "workId": "W-16144584",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zJyznAAC",
    "summary": "After upgrading to Tableau 2024.2 (Desktop, Server, and Cloud all affected), a line graph with one day of data shows an extra day on either side of the data on the axis. Changing the time format and axis format does not rectify the issue. ",
    "created": 1720808393000,
    "updated": 1767634956000
  },
  {
    "id": "a028c00000zIzFwAAK",
    "name": "",
    "title": "Inputting Japanese texts in Flow edit page is unstable on Tableau Prep Builder, Tableau Cloud and Tableau Server",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.3",
    "primaryVer": "2022.3",
    "allVersions": [
      "2022.3"
    ],
    "reports": 0,
    "workId": "W-15494186",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zIzFwAAK",
    "summary": "When editing the output file name in flow edit page to input Japanese texts, the IME conversion is unstable and the characters are not displayed properly. This worked fine in older version e.g. Tableau Server 2022.1.8.This issue also occurs Tableau Server and Tableau Cloud.",
    "created": 1718092889000,
    "updated": 1724231330000
  },
  {
    "id": "a028c00000zLbVUAA0",
    "name": "",
    "title": "Tableau Server - Dashboard Sheet (Tab) Selector Dropdown Menu Omits \"&\" (ampersand) Character from Names",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3.4+ (multiple versions)",
    "primaryVer": "2023.3.4",
    "allVersions": [
      "2023.3.4"
    ],
    "reports": 1,
    "workId": "W-16551906",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zLbVUAA0",
    "summary": "In Tableau Server, the Dashboard Sheet (Tab) Selector Dropdown Menu is dropping the \"&\" (ampersand) character from sheet/tab names",
    "created": 1725053491000,
    "updated": 1742486752000
  },
  {
    "id": "a028c00000y4xxeAAA",
    "name": "",
    "title": "Unable to access the hyper file on the windows shared folder even when specifying the native_api.allowed_paths on Tableau Server (Windows)",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2023.1.8+",
    "primaryVer": "2023.1.8",
    "allVersions": [
      "2023.1.8"
    ],
    "reports": 6,
    "workId": "W-15600926",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000y4xxeAAA",
    "summary": "Unable to open the hyper file on windows shared folder from Tableau Server on Windows.Error message:[SQLSTATE:58S01] error opening database '\"*****\"':\u00a0There was an error during loading database:\u00a0The specified storage resource cannot be accessed:\u00a0The directory of the specified storage resource is not whitelisted.",
    "created": 1714457437000,
    "updated": 1741704660000
  },
  {
    "id": "a028c000010FiysAAC",
    "name": "",
    "title": "Error \"[Redshift][ODBC Driver][Server]22003:ERROR: smallint out of range\" with Redshift Connections in Tableau Cloud",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.3.0",
    "primaryVer": "2024.3.0",
    "allVersions": [
      "2024.3.0"
    ],
    "reports": 2,
    "workId": "W-16498654",
    "url": "https://help.salesforce.com/s/issue?id=a028c000010FiysAAC",
    "summary": "When opening a workbook published to Tableau Cloud that uses a live connection to Amazon Redshift, attempting to web edit a data source (published or embedded), or refreshing a Redshift extract, the following error might occur:Error Code: A88FA7AAAn error occurred while communicating with the Amazon Redshift data source '<data source name>' Unable to connect to the server. Check that the server is running and that you have access privileges to the requested database.[Redshift][ODBC Driver][Serve",
    "created": 1741019677000,
    "updated": 1746045539000
  },
  {
    "id": "a02Ka00000hoM0zIAE",
    "name": "",
    "title": "Embedded Credentials Lost When Republishing After Web Edit in Tableau Server/Cloud",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.8, 2025.1.3, 2025.1.4",
    "primaryVer": "2024.2.8",
    "allVersions": [
      "2024.2.8",
      "2025.1.3",
      "2025.1.4"
    ],
    "reports": 3,
    "workId": "W-19137015",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000hoM0zIAE",
    "summary": "When using web edit to update a published workbook or data source that uses embedded credentials, the credentials are lost after republishing.Note: This can also cause downstream \"User(s) do not have permission to access data source\" workbook permissions errors as well when users load workbooks connected to the workbook.",
    "created": 1754505522000,
    "updated": 1756981748000
  },
  {
    "id": "a028c00000yCbJpAAK",
    "name": "",
    "title": "Map backgrounds sometimes don't render on dashboards published to Tableau Server",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2021.4.x",
    "primaryVer": "2021.4",
    "allVersions": [
      "2021.4"
    ],
    "reports": 0,
    "workId": "W-13867726",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yCbJpAAK",
    "summary": "Map backgrounds sometimes don't render on dashboards published to Tableau Server",
    "created": 1701131517000,
    "updated": 1719886585000
  },
  {
    "id": "a028c00000zJwieAAC",
    "name": "",
    "title": "\"Error Code: 0505B44A HTTP bad request\" when republishing the workbook to a project name containing a slash (\"/\") on Tableau Cloud or Tableau Server",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3.6",
    "primaryVer": "2023.3.6",
    "allVersions": [
      "2023.3.6"
    ],
    "reports": 26,
    "workId": "W-16145191",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zJwieAAC",
    "summary": "When publishing a workbook to a project name containing a slash (\"/\") on Tableau Cloud or Tableau Server, the first publish works. However, it may fail the second time, and this error appears after clicking \"publish workbook\"Version Affected:Tableau Server: 2024.2.02023.3.6 or later2023.1.13 or later2022.3.17 or laterTableau Cloud (2024.2)",
    "created": 1720690851000,
    "updated": 1727889413000
  },
  {
    "id": "a028c00000zgtQ3AAI",
    "name": "",
    "title": "Tableau Server Resource Monitoring Tool (RMT) - Agent Installation Fails on Windows Server 2016 when Master is on Windows Server 2019",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2023.3",
    "primaryVer": "2023.3",
    "allVersions": [
      "2023.3"
    ],
    "reports": 1,
    "workId": "W-15184717",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zgtQ3AAI",
    "summary": "When installing RMT with the Master on Windows Server 2019 and the Agent(s) on Windows Server 2016, installation fails with a \"Failed to connect to the message queue\" error. Notably, the Master component will install successfully, but the Agent (when deployed to the lower OS version) will fail.",
    "created": 1725994174000,
    "updated": 1750860287000
  },
  {
    "id": "a028c00000zjAf9AAE",
    "name": "",
    "title": "Intermittent Failure When Using Tableau Prep Conductor (Server) to Write to CRM Analytics",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1.7",
    "primaryVer": "2023.1.7",
    "allVersions": [
      "2023.1.7"
    ],
    "reports": 0,
    "workId": "W-16944749",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zjAf9AAE",
    "summary": "When attempting to write data to CRM Analytics using Tableau Prep Conductor (Server), the operation will intermittently fail with an error/timout.",
    "created": 1732032141000,
    "updated": 1742487138000
  },
  {
    "id": "a028c00000xAavDAAS",
    "name": "",
    "title": "Tableau Server RMT - Unable to Re-Register Agent After Running Obliterate Script / Service Already Exists During Agent Installation",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.3.2",
    "primaryVer": "2022.3.2",
    "allVersions": [
      "2022.3.2"
    ],
    "reports": 0,
    "workId": "W-14121760",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000xAavDAAS",
    "summary": "In RMT 2022.3 (Linux) users may encounter the error, 'Error sending registration information: Agent registration requires a valid agent key.' when attempting to register or re-register the agent after having previously run the rmt-tableau-obliterate script. Users may also see an error, 'Service already installed: tabrmt-agent' during installation after having previously run our rmt-tableau-obliterate script. This is caused by a fault in the rmt-tableau-obliterate script and will only occur on a ",
    "created": 1698861505000,
    "updated": 1719886587000
  },
  {
    "id": "a02Ka00000eO4yAIAS",
    "name": "",
    "title": "Content Migration Tool login redirects to Tableau Cloud for on-prem server when configured with browser-based sign-in",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2025.1.0",
    "primaryVer": "2025.1.0",
    "allVersions": [
      "2025.1.0"
    ],
    "reports": 0,
    "workId": "W-18267193",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000eO4yAIAS",
    "summary": "Content Migration Tool login redirects to Tableau Cloud for on-prem server when configured with browser-based sign-in",
    "created": 1744842967000,
    "updated": 1771871143000
  },
  {
    "id": "a02Ka00000iHIxlIAG",
    "name": "",
    "title": "After upgrade of Tableau Server to 2024.2.9, an unexpected additional spacing appears on both sides of the X-axis in a time-based chart",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.9",
    "primaryVer": "2024.2.9",
    "allVersions": [
      "2024.2.9"
    ],
    "reports": 5,
    "workId": "W-19295996",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000iHIxlIAG",
    "summary": "Following the upgrade of Tableau Server  to 2024.2.9,  an anomalous additional spacing on both sides of the X-axis in a time-based chart. The axis now displays a wider date range than intended.",
    "created": 1755202569000,
    "updated": 1767747537000
  },
  {
    "id": "a028c00000ziS3aAAE",
    "name": "",
    "title": "Flows on Tableau Server Fail Intermittently with \"Flow run id was invalid or status was not found\" error.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.1",
    "primaryVer": "2024.2.1",
    "allVersions": [
      "2024.2.1"
    ],
    "reports": 30,
    "workId": "W-17064617",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000ziS3aAAE",
    "summary": "Flows published to Tableau Server fail intermittently with a \"Flow run id was invalid or status was not found\" error.",
    "created": 1730124004000,
    "updated": 1771602852000
  },
  {
    "id": "a028c00000yFzRBAA0",
    "name": "",
    "title": "Tableau Server - Workbooks with timeline on a map do not animate with server-side rendering prior to interaction with view",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1+",
    "primaryVer": "2023.1",
    "allVersions": [
      "2023.1"
    ],
    "reports": 3,
    "workId": "W-14842364",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yFzRBAA0",
    "summary": "When a workbook with a timeline animation on a map is published to Tableau Server 2023.1+, the animation does not run after pressing play when using server-side rendering, unless some interaction with the view has occurred first.",
    "created": 1706201475000,
    "updated": 1722607758000
  },
  {
    "id": "a02Ka00000hH1pIIAS",
    "name": "",
    "title": "In Tableau Prep Builder when a published datasource is added but not used in a flow it fails to publish to Tableau Server",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.2",
    "primaryVer": "2025.2",
    "allVersions": [
      "2025.2"
    ],
    "reports": 1,
    "workId": "W-19104669",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000hH1pIIAS",
    "summary": "Tableau Prep Builder Flows fail to publish with \"Error publishing flow to Tableau Server\"Flows may fail on publishing but not provide a specific error. This is caused by an unused data source in the connections list.",
    "created": 1753190276000,
    "updated": 1783487615000
  },
  {
    "id": "a028c00000pey1YAAQ",
    "name": "",
    "title": "Unable to deactivate license key in Tableau Server in a Docker container",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2022.1.11",
    "primaryVer": "2022.1.11",
    "allVersions": [
      "2022.1.11"
    ],
    "reports": 0,
    "workId": "W-12824953",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000pey1YAAQ",
    "summary": "Unable to deactivate license key in Tableau Server in a Docker container with error code \u2018106: TABLEAU_ERROR_LICENSING_ACTIVATION_INVALID_KEY\u2019",
    "created": 1684772127000,
    "updated": 1790605743000
  },
  {
    "id": "a028c00000yyspUAAQ",
    "name": "",
    "title": "Flow generates incorrect data when run in Tableau Prep Builder and Tableau Server",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3.0+",
    "primaryVer": "2023.3.0",
    "allVersions": [
      "2023.3.0"
    ],
    "reports": 2,
    "workId": "W-15174776",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yyspUAAQ",
    "summary": "Tableau Prep Builder and Tableau Server generate incorrect data when a flow is run.About the flow:The flow connects to and collects data from the customer's ERP system and Oracle Databases.There are multiple steps involved in the flow where the data is joined and cleaned.The output writes data back to the Oracle database.",
    "created": 1710156917000,
    "updated": 1722024975000
  },
  {
    "id": "a028c00000zKD8JAAW",
    "name": "",
    "title": "The password is Optional is misleading when creating a Virtual Connection or Published Datasource from Web in Tableau Server and Tableau Cloud",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2024.2.0",
    "primaryVer": "2024.2.0",
    "allVersions": [
      "2024.2.0"
    ],
    "reports": 0,
    "workId": "W-15788060",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zKD8JAAW",
    "summary": "When trying to create a Virtual Connection or published datasource from the GUI in Tableau Server or Tableau Cloud, for some database like Microsoft SQL Server, the \"Password\" field is marked as \"Optional\". But if the password is not specified, \"INVALID_ARGUMENT\" error will occur when trying to proceed:This happens at least Tableau Server 2023.3.5+ and Tableau Cloud",
    "created": 1721391164000,
    "updated": 1723507060000
  },
  {
    "id": "a028c00000zigEkAAI",
    "name": "",
    "title": "Unexpected [nl_NL], [nl_BE], or [ga_IE] Characters Appear in Workbooks on Tableau Server when site Locale or Workbook locale set to Dutch or Irish",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.0",
    "primaryVer": "2024.2.0",
    "allVersions": [
      "2024.2.0"
    ],
    "reports": 3,
    "workId": "W-17116387",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zigEkAAI",
    "summary": "Unexpected characters display in various places in a workbook (see screenshot below) when viewing a published workbook in Tableau Server 2024.2.X in the following scenarios:Prior to publishing to Tableau Server the Tableau Desktop\u00a0Workbook Locale is set\u00a0to a Dutch or Irish localeThe Tableau Server \"My Account Settings\" Locale is set to a Dutch or Irish locale. NOTE: Tableau Desktop workbook locale set to 'Automatic' prior to publishThe Tableau Server \"My Account Settings\" Locale is set to 'Unspe",
    "created": 1730745386000,
    "updated": 1732287912000
  },
  {
    "id": "a028c00000xAZtCAAW",
    "name": "",
    "title": "Tableau Server - When attempting to create a new Flow using the Google Analytics 4 connector, a \"connectionSettings is undefined\" error appears",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2023.1.5",
    "primaryVer": "2023.1.5",
    "allVersions": [
      "2023.1.5"
    ],
    "reports": 1,
    "workId": "W-14372636",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000xAZtCAAW",
    "summary": "When attempting to create a new Flow using the Google Analytics 4 connector in Tableau Server, the following error may appear:Your last changes may be lost when the page reloads.Details:Error: connectionSettings is undefined",
    "created": 1698846601000,
    "updated": 1719886588000
  },
  {
    "id": "a028c00000z0RkRAAU",
    "name": "",
    "title": "Parameter Hover action is not executed (does not work) on Tableau Server.",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2023.x and above",
    "primaryVer": "",
    "allVersions": [],
    "reports": 0,
    "workId": "W-15584133",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000z0RkRAAU",
    "summary": "Creating a hover action that clears selection on a target parameter doesn't work.",
    "created": 1713955125000,
    "updated": 1719886602000
  },
  {
    "id": "a02Ka00000kTsjDIAS",
    "name": "",
    "title": "When a view has been published to Tableau Server, keyboard navigation options to select \"Include Values\" or \"Exclude Values\" in a filter do not work",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2025.1.0",
    "primaryVer": "2025.1.0",
    "allVersions": [
      "2025.1.0"
    ],
    "reports": 1,
    "workId": "W-17300586",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000kTsjDIAS",
    "summary": "When a view has been published to Tableau Server, it is not possible to use the keyboard navigation options to select \"Include Values\" or \"Exclude Values\" in a filter.",
    "created": 1761176547000,
    "updated": 1783602269000
  },
  {
    "id": "a028c00000zKBTpAAO",
    "name": "",
    "title": "\"Unable to proceed because of an error from the data source...VizData Session not found\" Working with Published Data Sources in Tableau Server 2024.2",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.0",
    "primaryVer": "2024.2.0",
    "allVersions": [
      "2024.2.0"
    ],
    "reports": 7,
    "workId": "W-16273449",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zKBTpAAO",
    "summary": "When working with data sources published to Tableau Server 2024.2.0, unexpected \"Unable to proceed because of an error from the data source...VizData Session not found\" error occurs intermittently\u00a0This error may occur in the following scenarios:When loading a published dashboard in Tableau ServerWhen connected to a published data source in Tableau DesktopWhen web authoring in Tableau Server",
    "created": 1721318849000,
    "updated": 1721859621000
  },
  {
    "id": "a028c00000yCbL2AAK",
    "name": "",
    "title": "Tableau Server 2023.3 is Degraded due to NonRelational Storage (NRS) Service Failing to Start",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3.0",
    "primaryVer": "2023.3.0",
    "allVersions": [
      "2023.3.0"
    ],
    "reports": 1,
    "workId": "W-14561356",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yCbL2AAK",
    "summary": "After upgrading to Tableau Server 2023.3.0, Tableau Server is Degraded due to the NonRelational Storage (NRS) Service Failing to Start. \ufeffThe NonRelational Storage service is a microservice managed and used internally by other Tableau services. NOTE: The service appears in the CLI but is deprecated. It will be retired (entirely removed) in a future release.",
    "created": 1701132448000,
    "updated": 1719886589000
  },
  {
    "id": "a028c00000zJ1KUAA0",
    "name": "",
    "title": "Prep input connections to Presto fail in Prep Conductor on Tableau Server",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "Tableau Server, Tableau Prep 2024.2",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 0,
    "workId": "W-15548427",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zJ1KUAA0",
    "summary": "Users are unable to connect to Presto connector to run the flows.",
    "created": 1718181360000,
    "updated": 1724231809000
  },
  {
    "id": "a028c00000yGeOyAAK",
    "name": "",
    "title": "Tableau Server - Unexpected Error occurs when adding a user to a site configured with server-wide SAML via UI",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1.5, 2023.3.0",
    "primaryVer": "2023.1.5",
    "allVersions": [
      "2023.1.5",
      "2023.3.0"
    ],
    "reports": 0,
    "workId": "W-14727993",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yGeOyAAK",
    "summary": "An unexpected error occurs when adding a user to a site that is configured with server-wide SAML. The error appears when attempting to add the user via the UI.",
    "created": 1707173362000,
    "updated": 1719886589000
  },
  {
    "id": "a028c00000yEWcOAAW",
    "name": "",
    "title": "Tableau Server RMT - Error \"Unable to connect to Tableau Server Repository\" when repository certificate configuration does not use thumbprint",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3",
    "primaryVer": "2023.3",
    "allVersions": [
      "2023.3"
    ],
    "reports": 0,
    "workId": "W-14750370",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yEWcOAAW",
    "summary": "When changing the Tableau Repository Configuration from using SSL Certificate Thumbprint to using installed certificate, an error message appears even though the data collection and display still works properly.If an invalid thumbprint is used, then the test connection fails. If no thumbprint is used, then the test connection succeeds.",
    "created": 1704915308000,
    "updated": 1719886593000
  },
  {
    "id": "a028c00000zgtLhAAI",
    "name": "",
    "title": "Tableau Server Resource Monitoring Tool (RMT) - Unknown System Status when Accessing Web Interface",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2024.2 and prior",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 8,
    "workId": "W-16709348",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zgtLhAAI",
    "summary": "Users accessing the RMT web interface receive an \"Unknown System Status\" message.The following may also be observed in conjunction with this issue:Running 'rmtadmin status' shows no errors and a valid system status.Running 'rmtadmin restart' does NOT resolve the issue.The RabbitMQ management UI shows no connection from the RMT Web process.",
    "created": 1725982006000,
    "updated": 1755792855000
  },
  {
    "id": "a028c000010ExWJAA0",
    "name": "",
    "title": "Extracts and Flows failing with error \"[Redshift][ODBC Driver][Server]SSL SYSCALL error: EOF detected\" on Tableau Cloud Hyperforce PODs",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.3.0",
    "primaryVer": "2024.3.0",
    "allVersions": [
      "2024.3.0"
    ],
    "reports": 0,
    "workId": "W-17683918",
    "url": "https://help.salesforce.com/s/issue?id=a028c000010ExWJAA0",
    "summary": "Extracts and Flows are failing after ~60 minutes (sometimes sooner on Tableau Cloud Hyperforce PODs. This has been reported with Redshift connections in particular, but can affect any long running database query.\u00a0For Redshift data sources, \ufeffExtracts and Flows are failing with the following error:[Redshift][ODBC Driver][Server]SSL SYSCALL error: EOF detected",
    "created": 1738968578000,
    "updated": 1739381789000
  },
  {
    "id": "a028c00000zKrn2AAC",
    "name": "",
    "title": "Fiscal year's format is displayed incorrectly in Tableau Desktop / Server / Cloud",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2024.2",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 0,
    "workId": "W-16403066",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zKrn2AAC",
    "summary": "Fiscal year's format is displayed incorrectly in Tableau Desktop / Server / CloudActual format:Expected format:",
    "created": 1723197528000,
    "updated": 1723571929000
  },
  {
    "id": "a028c00000yGBSAAA4",
    "name": "",
    "title": "Tableau Server/Cloud: Collections Are Broken After SiteImport - Permissions, Item Numbers",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1",
    "primaryVer": "2023.1",
    "allVersions": [
      "2023.1"
    ],
    "reports": 0,
    "workId": "W-14346286",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yGBSAAA4",
    "summary": "Collections are not currently part of the site import/export process, which results in broken collections after performing a site import operation. ",
    "created": 1706566380000,
    "updated": 1719886589000
  },
  {
    "id": "a028c00000zIzhJAAS",
    "name": "",
    "title": "Tableau Server - Data Catalog produces inconsistent information between versions in its associated tables when ingesting resources",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2022.3",
    "primaryVer": "2022.3",
    "allVersions": [
      "2022.3"
    ],
    "reports": 0,
    "workId": "W-15931600",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zIzhJAAS",
    "summary": "When enabling metadata-services on Tableau Server, there is inconsistent behavior and missing information in its tables between versions:In 2022.3, there are entries for customSQL and non-customSQL workbooks in the database_assets table, but for customSQL host_name is left blank and these resources are not able to be traced back to their workbook due to other missing column information.In 2023.3.5, there are entries for non-customSQL workbooks in the database_assets table, but not for other colu",
    "created": 1718129855000,
    "updated": 1723139502000
  },
  {
    "id": "a028c000010FHHgAAO",
    "name": "",
    "title": "A hidden field on a published data source can be seen at a workbook after unhidden a logical table in Tableau Server and Tableau Cloud",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "All",
    "primaryVer": "",
    "allVersions": [],
    "reports": 0,
    "workId": "W-17824036",
    "url": "https://help.salesforce.com/s/issue?id=a028c000010FHHgAAO",
    "summary": "A hidden field on a published data source can be seen at a workbook after unhidden a logical table\u00a0in Tableau Server and Tableau Cloud",
    "created": 1739858456000,
    "updated": 1764971472000
  },
  {
    "id": "a028c00000zjdd4AAA",
    "name": "",
    "title": "Color Palette Edit Form in Tableau Server Does Not Fully Display if the Character Length for Description is Too Long",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3.0+",
    "primaryVer": "2023.3.0",
    "allVersions": [
      "2023.3.0"
    ],
    "reports": 2,
    "workId": "W-17367009",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zjdd4AAA",
    "summary": "Starting in Tableau Server 2023.3, the \"Edit Color\" palette form can cut off the edit options if a field or item's text/description is too long.",
    "created": 1733412697000,
    "updated": 1764971505000
  },
  {
    "id": "a028c00000yD6I7AAK",
    "name": "",
    "title": "Guest users experience \"Unexpected Server Error\" message for dashboards published to Tableau Server 2023.3",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3",
    "primaryVer": "2023.3",
    "allVersions": [
      "2023.3"
    ],
    "reports": 2,
    "workId": "W-14618383",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yD6I7AAK",
    "summary": "In Tableau Server 2023.3, if a second site has Guest user access enabled and the Default site does not, Guest users will encounter an \"Unexpected Server Error\" message when attempting to load a view on the second site - making the view unusable for guests.",
    "created": 1701891352000,
    "updated": 1719886589000
  },
  {
    "id": "a02Ka00000gYHl2IAG",
    "name": "",
    "title": "Autosave in Workbook Webedit is not working in Tableau Server the same way as in Tableau Cloud",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 0,
    "workId": "W-18909080",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000gYHl2IAG",
    "summary": "Auto save function on Tableau Server may not save recent changes on a workbook in WebEdit.If the tab is closed changes may be lost if the content was not saved prior to closing the tab",
    "created": 1751284728000,
    "updated": 1751318073000
  },
  {
    "id": "a028c00000yyYv4AAE",
    "name": "",
    "title": "Tableau Server - WDC 2.0 Extract Refreshes fail with TableauRuntimeException: WebDataRequestor::InitAPIObj Unable to load URL",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2023.1.5, 2023.1.7, 2023.3, 2023.3.1",
    "primaryVer": "2023.1.5",
    "allVersions": [
      "2023.1.5",
      "2023.1.7",
      "2023.3",
      "2023.3.1"
    ],
    "reports": 11,
    "workId": "W-14664537",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yyYv4AAE",
    "summary": "In Tableau Server, WDC 2.0 Extract Refreshes fail with an error message:TableauRuntimeException: WebDataRequestor::InitAPIObj Unable to load URL",
    "created": 1709747569000,
    "updated": 1729544052000
  },
  {
    "id": "a028c00000zijskAAA",
    "name": "",
    "title": "Unable to connect to a published data source using VizDataService client",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "Tableau Desktop, Tableau Server 2024.2.x+",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 118,
    "workId": "W-17144531",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zijskAAA",
    "summary": "When trying to connect to a published data source on Tableau Server From Tableau Desktop or when trying to create a new workbook by the \"New > Workbook Using This Data Source\" action on the Tableau Server, we see error messages and can't complete the actions.The problem occurs in the Tableau Desktop and Server with version 2024.2.x and above.",
    "created": 1730892706000,
    "updated": 1785294069000
  },
  {
    "id": "a028c00000yxHlSAAU",
    "name": "",
    "title": "Tableau Cloud/Server - \"No Such Column\" error occurs Intermittently when running Flows",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.2",
    "primaryVer": "2023.2",
    "allVersions": [
      "2023.2"
    ],
    "reports": 0,
    "workId": "W-14480358",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yxHlSAAU",
    "summary": "When running Flow jobs on Tableau Cloud or Tableau Server, an error may appear intermittently indicating \"no such column.\"",
    "created": 1708027755000,
    "updated": 1719886588000
  },
  {
    "id": "a028c00000zJFTXAA4",
    "name": "",
    "title": "Linux Install Script for Tableau Server warns \"Unsupported OS\" For RHEL 8.10",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "All supported versions",
    "primaryVer": "",
    "allVersions": [],
    "reports": 0,
    "workId": "W-15920463",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zJFTXAA4",
    "summary": "Linux Install Script gives warning of \"Unsupported OS\" For RHEL 8.10.",
    "created": 1718820485000,
    "updated": 1719886600000
  },
  {
    "id": "a028c00000yFaluAAC",
    "name": "",
    "title": "Tableau Server - Running a Flow and attempting to overwrite a file with the output results in a permission error despite having necessary permissions",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2022.3.8",
    "primaryVer": "2022.3.8",
    "allVersions": [
      "2022.3.8"
    ],
    "reports": 12,
    "workId": "W-14794856",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yFaluAAC",
    "summary": "When running a Flow on Tableau Server that contains output steps intended to overwrite an existing file, the Run-As user  is encountering an error that the Run-As account does not have permissions to overwrite the file. Running a second Flow with the exact same output location at the exact same time as the first Flow will result in one Flow succeeding in overwriting the intended file, but the other fails. Running individually, both Flows fail. ",
    "created": 1705607183000,
    "updated": 1757604631000
  },
  {
    "id": "a028c00000zKZAzAAO",
    "name": "",
    "title": "Tableau Application Server (vizportal) crashes when publishing workbook by tabcmd or by UI Workbook Upload in Linux",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.3+",
    "primaryVer": "2022.3",
    "allVersions": [
      "2022.3"
    ],
    "reports": 0,
    "workId": "W-16246445",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zKZAzAAO",
    "summary": "Tableau Application Server (vizportal)\u00a0crashes when publishing a packaged workbook by tabcmd or by UI Workbook Upload in TS 2022.3+ running in Linux.",
    "created": 1722340891000,
    "updated": 1742507212000
  },
  {
    "id": "a028c00000zKfJeAAK",
    "name": "",
    "title": "Tableau Server - Upgrades from versions prior to 2022.3 result in the Views (all-time) counts displaying and sorting incorrectly.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.3+",
    "primaryVer": "2022.3",
    "allVersions": [
      "2022.3"
    ],
    "reports": 0,
    "workId": "W-15840768",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zKfJeAAK",
    "summary": "Upgrades from Tableau Server versions prior to 2022.3, to version 2022.3 or later, result in the Views (all-time) counts displaying and sorting incorrectly in the \"Explore\" section.Notably, the sorting order from the prior version may be preserved, despite the view counts being different and out-of-order numerically even when viewing in Descending Sort Order.",
    "created": 1722606945000,
    "updated": 1727808452000
  },
  {
    "id": "a028c00000zKdvxAAC",
    "name": "",
    "title": "Flowprocessor in HA Tableau Server with ATR got UNAVAILABLE status and could not run flows if the initial node was DOWN for more than 1 hour",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2023.1 or later",
    "primaryVer": "2023.1",
    "allVersions": [
      "2023.1"
    ],
    "reports": 0,
    "workId": "W-16278979",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zKdvxAAC",
    "summary": "Flowprocessor (Tableau Prep Conductor) in high availability(HA) Tableau Server cluster with ATR got UNAVAILABLE status and could not run flows if the initial node was DOWN for more than 1 hour like below screenshot",
    "created": 1722571025000,
    "updated": 1727134697000
  },
  {
    "id": "a028c00000yzdBLAAY",
    "name": "",
    "title": "Rendering Maps from Custom Geographic Roles Takes Significantly Longer in Tableau Desktop/Server/Cloud 2023.3.1 and later",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2023.3.1+",
    "primaryVer": "2023.3.1",
    "allVersions": [
      "2023.3.1"
    ],
    "reports": 1,
    "workId": "W-15315979",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yzdBLAAY",
    "summary": "When assigning a custom geographic role, the geocoding-interpreter process rendering the map takes significantly longer starting with Tableau Desktop/Server/Cloud 2023.3.1+In Tableau Server and Tableau Cloud, an error message is generated.",
    "created": 1711544908000,
    "updated": 1719886599000
  },
  {
    "id": "a028c00000yDb3GAAS",
    "name": "",
    "title": "Tableau Desktop/Server - Discrepancy between query results returned in versions 2023.1 vs 2023.3",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1, 2023.3",
    "primaryVer": "2023.1",
    "allVersions": [
      "2023.1",
      "2023.3"
    ],
    "reports": 3,
    "workId": "W-14666451",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yDb3GAAS",
    "summary": "After creating a workbook in Tableau Desktop 2023.1 and publishing it to Tableau Server 2023.3, the number of rows returned in the workbook is reduced and its scroll bar is missing entirely. This issue also may occur when opening a workbook created in Tableau Desktop 2023.1 in Tableau Desktop version 2023.3.",
    "created": 1702913574000,
    "updated": 1719949033000
  },
  {
    "id": "a028c00000yzcHjAAI",
    "name": "",
    "title": "Tableau Desktop and Tableau Server: Spaces are being stripped from PostgreSQL password and MySQL password.",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2022.4, 2023.1, 2023.3, 2023.3 and 2024.1",
    "primaryVer": "2022.4",
    "allVersions": [
      "2022.4",
      "2023.1",
      "2023.3",
      "2023.3",
      "2024.1"
    ],
    "reports": 2,
    "workId": "W-15333055",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yzcHjAAI",
    "summary": "PostgreSQL:\u00a0When connecting to PostgreSQL, password accepts and strips all spaces from password. If password is 'password', then also ' p a s s w o r d ' is accepted. This results in an issue if user choose space in a password such as 'pass word', tableau can't connect in this case.MySQL:\u00a0When connecting to MySQL, leading and trailing spaces are stripped from the password, but space is a valid character and the user may choose to have password with a space including leading/trailing.",
    "created": 1711464740000,
    "updated": 1727183172000
  },
  {
    "id": "a028c00000zLDMrAAO",
    "name": "",
    "title": "\"Tableau Server\" appears in the list of connectors when creating Workbooks, Data sources, Virtual connections on Tableau Cloud",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "Tableau Server 2024.2, Tableau Cloud 2024.2",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2",
      "2024.2"
    ],
    "reports": 0,
    "workId": "W-16347772",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zLDMrAAO",
    "summary": "\"Tableau Server\" appears in the list of connectors when creating Workbooks, Data sources, Virtual connections.Selecting 'Tableau Server' above leads to the error:",
    "created": 1724053005000,
    "updated": 1734394066000
  },
  {
    "id": "a028c00000peoXnAAI",
    "name": "",
    "title": "unknown server error in Tableau Public (expected=INTEGER actual=REAL)",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1",
    "primaryVer": "2023.1",
    "allVersions": [
      "2023.1"
    ],
    "reports": 1,
    "workId": "W-13189093",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000peoXnAAI",
    "summary": "When attempt to open a dashboard in Tableau Public, the dashboard is not visible and the error ... TableauException: DataType mismatch: column=[TEMP(TC_)(2271885910)(0)] expected=INTEGER actual=REAL ... is displayed",
    "created": 1684310112000,
    "updated": 1790188541000
  },
  {
    "id": "a02Ka00000frQeZIAU",
    "name": "",
    "title": "Published Snowflake connection with Key-pair Authentication from Tableau Prep Builder to Tableau Server does not maintain authentication method",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1",
    "primaryVer": "2025.1",
    "allVersions": [
      "2025.1"
    ],
    "reports": 1,
    "workId": "W-18327022",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000frQeZIAU",
    "summary": "After publishing a Snowflake connection made with Key-pair Authentication from Tableau Prep Builder to Tableau Server a \"Could not find the private key for Snowflake KeyPair Auth\" error occurs and the embedded authentication is no longer selected for the connection.",
    "created": 1748969513000,
    "updated": 1764887487000
  },
  {
    "id": "a028c00000yCtPUAA0",
    "name": "",
    "title": "Tableau Cloud/Bridge - Error [0x9F4C5638] [Internet communication error: Couldn't connect to server...]",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1",
    "primaryVer": "2023.1",
    "allVersions": [
      "2023.1"
    ],
    "reports": 0,
    "workId": "W-13016436",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yCtPUAA0",
    "summary": "Extracts may fail to run due to the following error:[0x9F4C5638] [Internet communication error: Couldn't connect to server...]The error comes as a result of the Dataserver being unable to connect to the specific Worker nodes required to complete the operation. ",
    "created": 1701450934000,
    "updated": 1722608419000
  },
  {
    "id": "a028c00000yzSZ8AAM",
    "name": "",
    "title": "Loading a view as the Guest account on a non-default site in Tableau Server 2023.3.x results in missing image icons being displayed in the browser",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3.0",
    "primaryVer": "2023.3.0",
    "allVersions": [
      "2023.3.0"
    ],
    "reports": 3,
    "workId": "W-15275189",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yzSZ8AAM",
    "summary": "When loading a view using the Guest account on Tableau Server 2023.3.x requiring requests to tilecache, Tableau Server returns a 500 response for the tilecache requests resulting in the view not being populated and missing image icons being displayed in the browser. This issue occurs on non-Default sites.",
    "created": 1711056378000,
    "updated": 1722937971000
  },
  {
    "id": "a028c00000xG7zQAAS",
    "name": "",
    "title": "Tableau Server RMT - RMT Master fails test connection after enabling FIPS on RHEL 8 (pfx cert is SHA1)",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2023.1.2",
    "primaryVer": "2023.1.2",
    "allVersions": [
      "2023.1.2"
    ],
    "reports": 0,
    "workId": "W-13553250",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000xG7zQAAS",
    "summary": "Using a SHA1 pfx certificate for TLS with Rabbitmq causes the TLS connection to RabbitMQ to fail when attempting to run a status check when installing RMT Master to a FIPS-enabled OS.The following error is observed upon running the status check:[ERR] Failed to connect to the message queue: localhost:5671This error occurs in part because Tableau Server RMT is not FIPS-compliant. FIPS-enabled systems are not currently supported for use of RMT. ",
    "created": 1694786109000,
    "updated": 1790606014000
  },
  {
    "id": "a028c00000yzNDSAA2",
    "name": "",
    "title": "Tableau Server: After publishing workbook to Server configured with customized gateway port and SSL enabled, the browser redirect fails",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2023.1.7",
    "primaryVer": "2023.1.7",
    "allVersions": [
      "2023.1.7"
    ],
    "reports": 6,
    "workId": "W-15260343",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yzNDSAA2",
    "summary": "After publishing workbook from Tableau Desktop to Tableau Server configured with customized gateway port and SSL enabled, the browser redirect fails and a \"This page isn't working right now\" browser error appears.",
    "created": 1710800635000,
    "updated": 1737985168000
  },
  {
    "id": "a028c000010FMjCAAW",
    "name": "",
    "title": "Flow Run Fails with an Error Message  on Tableau Server Linux Connecting to Excel Files in a Windows Share Directory",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3.12, 2024.2.3",
    "primaryVer": "2023.3.12",
    "allVersions": [
      "2023.3.12",
      "2024.2.3"
    ],
    "reports": 8,
    "workId": "W-17817790",
    "url": "https://help.salesforce.com/s/issue?id=a028c000010FMjCAAW",
    "summary": "Flow Run Fails with \"An error occurred while communicating with Microsoft Excel\" on Tableau Server Linux When Connecting to Excel Files in a Windows Shared Directory. ",
    "created": 1740081817000,
    "updated": 1749738215000
  },
  {
    "id": "a028c00000xB1QHAA0",
    "name": "",
    "title": "After upgrading to Tableau Server 2023.1.x, the Statistical Service remains in an error state.",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2023.1.4",
    "primaryVer": "2023.1.4",
    "allVersions": [
      "2023.1.4"
    ],
    "reports": 0,
    "workId": "W-14319394",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000xB1QHAA0",
    "summary": "After upgrading to Tableau Server 2023.1.x, the Statistical Service remains in an error state.",
    "created": 1699639897000,
    "updated": 1719886597000
  },
  {
    "id": "a028c00000zjFAGAA2",
    "name": "",
    "title": "Upgrade to Tableau Server 2024.2 fails with error: \"vizdatanativeservice_0.xxxxx: Failed to reach requested state. Current state: INSTALL_FAILED\"",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 32,
    "workId": "W-17258052",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zjFAGAA2",
    "summary": "While upgrading Tableau Server version to 2024.2, upgrade fails while installing \"vizdatanativeservice\" and \"vizdataservice\".These services have recently been added to Tableau Server version 2024.2",
    "created": 1732244804000,
    "updated": 1748320011000
  },
  {
    "id": "a02Ka00000mQnirIAC",
    "name": "",
    "title": "Unexpected data was filtered out using the \"Exclude\" option in a view based in Multi-fact Relationship Data Models",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2024.2",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 1,
    "workId": "W-21082877",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mQnirIAC",
    "summary": "Filtering data (excluding a cell) in a view using multi-fact relationship data model produced an unexpected outcome in Tableau Cloud, Tableau Server and Tableau Desktop.\ufeff",
    "created": 1770243547000,
    "updated": 1770746459000
  },
  {
    "id": "a028c00000sv3g6AAA",
    "name": "",
    "title": "Tableau Server - Unable to see Data Quality Warning (DQW) in Web Authoring mode",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1.4",
    "primaryVer": "2023.1.4",
    "allVersions": [
      "2023.1.4"
    ],
    "reports": 0,
    "workId": "W-14215814",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000sv3g6AAA",
    "summary": "Users may be unable to see Data Quality Warning in Web Authoring mode.When using a data source (that has a data quality warning set) to create a new workbook the warning is not visible.",
    "created": 1696251995000,
    "updated": 1791221562000
  },
  {
    "id": "a028c00000xAAJWAA4",
    "name": "",
    "title": "Tableau Server - Local File Connections",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 0,
    "workId": "W-13190787",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000xAAJWAA4",
    "summary": "Changed the default value of native_api.allowed_paths to accept no local file connections.",
    "created": 1698254063000,
    "updated": 1719886584000
  },
  {
    "id": "a028c00000yzpysAAA",
    "name": "",
    "title": "Error Is Thrown When Signing In To Tableau Server With Ts-Api_3_19.xsd",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1",
    "primaryVer": "2023.1",
    "allVersions": [
      "2023.1"
    ],
    "reports": 0,
    "workId": "W-15396601",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yzpysAAA",
    "summary": "Error such as javax.xml.bind.UnmarshalException is thrown when signing in to Tableau Server with\u00a0ts-api_3_19.xsd.",
    "created": 1712306774000,
    "updated": 1719948333000
  },
  {
    "id": "a02Ka00000jglDNIAY",
    "name": "",
    "title": "Embedded Views Based on Embed Code from Tableau Server 2024.2.x or 2025.1.x with Multiple Sites Result in \"Unexpected Server Error\"",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.1",
    "primaryVer": "2024.2.1",
    "allVersions": [
      "2024.2.1"
    ],
    "reports": 6,
    "workId": "W-19380709",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000jglDNIAY",
    "summary": "When accessing an embedded viz in Server 2024.2 or newer that has multiple sites and SSL enabled, an \"Unexpected Server Error\" is presented, but can then be resolved by refreshing the browser tab",
    "created": 1758226608000,
    "updated": 1766171628000
  },
  {
    "id": "a02g700000Az8PVAAZ",
    "name": "",
    "title": "Error \"VisitRelation: Field is missing in the subquery result\" when viewing a workbook in Tableau Cloud",
    "status": "Solution in Progress",
    "statusType": "open",
    "foundIn": "2026.2.x",
    "primaryVer": "2026.2",
    "allVersions": [
      "2026.2"
    ],
    "reports": 22,
    "workId": "W-24294880",
    "url": "https://help.salesforce.com/s/issue?id=a02g700000Az8PVAAZ",
    "summary": "Some users may encounter an \"Unknown Server Error\" or a \"VisitRelation: Field ... is missing in the subquery result for relation ...\" error when opening or interacting with a workbook in Tableau Cloud. The error can occur immediately on opening a workbook or after changing a filter value, and does not reproduce in Tableau Desktop. Affected workbooks typically use calculated fields referenced through subqueries against a federated or extract-based data source.\u201c**Note that this issue also affects ",
    "created": 1790957204000,
    "updated": 1792692730000
  },
  {
    "id": "a028c00000yG3tEAAS",
    "name": "",
    "title": "Tableau Server/Cloud (Linux Only) - The bottom section of dashboards/text is cut off when published",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2023.3.0",
    "primaryVer": "2023.3.0",
    "allVersions": [
      "2023.3.0"
    ],
    "reports": 1,
    "workId": "W-14695219",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yG3tEAAS",
    "summary": "When publishing a dashboard to Tableau Server/Cloud (Linux), the bottom portion of the dashboard is cut-off visually. This causes text and other content to appear incomplete. ",
    "created": 1706291738000,
    "updated": 1752741642000
  },
  {
    "id": "a028c00000iwTvWAAU",
    "name": "",
    "title": "Tableau Server is Not Compatible With Windows Server 2022",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "All currently available versions",
    "primaryVer": "",
    "allVersions": [],
    "reports": 22,
    "workId": "W-12894454",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000iwTvWAAU",
    "summary": "Windows Server 2022 does not currently meet the requirements for Tableau Server.Originally Tracked under Tableau TFS 1316530.With this update, Tableau Server can now be installed on Windows Server 2022.",
    "created": 1681842435000,
    "updated": 1719886593000
  },
  {
    "id": "a028c00000yyKgOAAU",
    "name": "",
    "title": "Tableau Cloud - Data from some Microsoft SQL Server/Azure SQL tables displays \"Error\" or \"null\"",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.1",
    "primaryVer": "2024.1",
    "allVersions": [
      "2024.1"
    ],
    "reports": 12,
    "workId": "W-15099462",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yyKgOAAU",
    "summary": "In Tableau Cloud, data from some Microsoft SQL Server tables displays \"Error\" or \"null\" despite displaying properly in Tableau Desktop and the database itself. ",
    "created": 1709563081000,
    "updated": 1719886602000
  },
  {
    "id": "a028c00000iwSqTAAU",
    "name": "",
    "title": "Extract refresh using QuickBooks is failing with \"No realm ID is detected\" error on Tableau Online and Server 2022.3 when using saved credentials",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1.11",
    "primaryVer": "2023.1.11",
    "allVersions": [
      "2023.1.11"
    ],
    "reports": 0,
    "workId": "W-12924495",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000iwSqTAAU",
    "summary": "QuickBooks Online extracts could fail to refresh with error \"No realm ID is detected\" when using saved credentials for the data connection starting with Tableau Server 2022.3 and on Tableau Cloud. For more information see the Tableau Knowledge Base article.Originally tracked under Tableau TFS 1470029.",
    "created": 1681831615000,
    "updated": 1781039096000
  },
  {
    "id": "a028c00000xG52vAAC",
    "name": "",
    "title": "Tableau Server - RMT Linux Installation Fails Due To Unexpected systemctl Output",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1.2",
    "primaryVer": "2023.1.2",
    "allVersions": [
      "2023.1.2"
    ],
    "reports": 0,
    "workId": "W-13942636",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000xG52vAAC",
    "summary": "When installing RMT Server on CentOS 7.9, install may fail with the following error message:[ERR] Starting of tabrmt-rabbitmq failed. System.IndexOutOfRangeException:Index was outside the bounds of the array.atTableau.PowerTools.Server.Common.Service.LinuxServiceController.<>c.<ParseKeyValuePairs>b__15_2(String[] parts)This is because the output from the command systemctl --user show tabrmt-master --property=ExecStart,ActiveState,SubState is different than expected, adding an additional line to ",
    "created": 1694700818000,
    "updated": 1732203056000
  },
  {
    "id": "a028c00000zgzH8AAI",
    "name": "",
    "title": "All Flows Fail When Initial Node Has No Gateway Process Configured for Tableau Server 2024.2.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 3,
    "workId": "W-16681931",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zgzH8AAI",
    "summary": "All flows will fail with the error \"Error starting flow run spec id XX\" when initial node has no Gateway process configured for Tableau Server 2024.2",
    "created": 1726138136000,
    "updated": 1729792496000
  },
  {
    "id": "a028c00000zLbPHAA0",
    "name": "",
    "title": "Tableau Prep Builder/Tableau Server - Prep flow fails to run when adding string value to an Aggregate Step",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2023.3.5, 2024.2",
    "primaryVer": "2023.3.5",
    "allVersions": [
      "2023.3.5",
      "2024.2"
    ],
    "reports": 0,
    "workId": "W-16460391",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zLbPHAA0",
    "summary": "When attempting to run certain flows with a string field in an Aggregation Step in Tableau Prep Builder or Tableau Server 2023.3.5 and 2024.2.0, one of the following errors occurs:\"System Error: An error occurred when communicating with the data source Abstract query SELECT [$temp0_agg] is not defined\"OR\"System Error: An error occurred when communicating with the data source No such column [$temp0_agg]\"",
    "created": 1725035488000,
    "updated": 1726035189000
  },
  {
    "id": "a028c00000zJcpOAAS",
    "name": "",
    "title": "Unable to connect to Virtual Connections created on servers prior to 2024.1, in Tableau Prep Builder 2024.1",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.1",
    "primaryVer": "2024.1",
    "allVersions": [
      "2024.1"
    ],
    "reports": 4,
    "workId": "W-16112063",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zJcpOAAS",
    "summary": "Prep builder 2024.1 is unable to connect to Virtual Connections on Tableau server versions below 2024.1.",
    "created": 1719818127000,
    "updated": 1764886426000
  },
  {
    "id": "a028c00000yElaMAAS",
    "name": "",
    "title": "Tableau Desktop/Server - Collation error during extract creation from SQL and File",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 4,
    "workId": "W-14783051",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yElaMAAS",
    "summary": "Extract refresh and creation fails with the following error : Cannot resolve the collation conflict.\u00a0This issue occurs when Table Collation is different than the default value of SQL_Latin1_General_CP1_CI_AS in MSSQL, and a join to other files (such as CSV files) is used. ",
    "created": 1705502337000,
    "updated": 1730110128000
  },
  {
    "id": "a028c00000zjPmpAAE",
    "name": "",
    "title": "Unable to edit published S3 datasources due to unexpected server error on Tableau Cloud",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2024.3.0",
    "primaryVer": "2024.3.0",
    "allVersions": [
      "2024.3.0"
    ],
    "reports": 2,
    "workId": "W-17328741",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zjPmpAAE",
    "summary": "*** This issue is now being tracked under W-15447406 ***Attempting to edit S3 datasource on published on Tableau cloud results in an unexpected server error. Issue reproduces for both Live or Extracts Published Data Sources\ufeff",
    "created": 1732779194000,
    "updated": 1742522425000
  },
  {
    "id": "a028c000010ETuqAAG",
    "name": "",
    "title": "String Type fields shows empty value when using live connection via Tableau Bridge linux to MS SQL Server.",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2024.3",
    "primaryVer": "2024.3",
    "allVersions": [
      "2024.3"
    ],
    "reports": 2,
    "workId": "W-17632936",
    "url": "https://help.salesforce.com/s/issue?id=a028c000010ETuqAAG",
    "summary": "String Type fields shows empty value when using live connection via Tableau Bridge linux to MS SQL Server.Collations in MSSQL Server which can cause this issue:Japanese_BIN2Japanese_CI_ASThe issue only happens with String type field with remote type \"ANSI/MBCS character string.\"Note:VARCHAR (or CHAR) is used for ANSI/MBCS character strings.NVARCHAR (or NCHAR) is used for Unicode character strings.",
    "created": 1737595084000,
    "updated": 1741707800000
  },
  {
    "id": "a028c00000yxdZPAAY",
    "name": "",
    "title": "Tableau Server - inconsistent rendering of Dashboard items when using Polygon marks with other types",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2023.1.5",
    "primaryVer": "2023.1.5",
    "allVersions": [
      "2023.1.5"
    ],
    "reports": 0,
    "workId": "W-15059223",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yxdZPAAY",
    "summary": "When using Polygon-type Marks alongside other types of Marks, the rendering of various dashboard items is inconsistent.",
    "created": 1708537373000,
    "updated": 1719886603000
  },
  {
    "id": "a028c00000ziRmjAAE",
    "name": "",
    "title": "Pre-built \"Stale Content\" and \"Stats for Space Usage\" admin view missing from Tableau Server having multiple sites.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2+",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 2,
    "workId": "W-17071484",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000ziRmjAAE",
    "summary": "The pre-built \"Stale Content\" and the \"Stats for Space Usage\" admin view is no longer presented for Tableau Server instances that contain multiple sites. For single-site instances, the \"Stale Content\" admin view can be seen in the Analysis Dashboard list.",
    "created": 1730122025000,
    "updated": 1746046079000
  },
  {
    "id": "a028c00000zKb8zAAC",
    "name": "",
    "title": "Tableau Desktop - When Connecting to a SQL Server Stored Procedure Decimal Values are Not Displayed Correctly",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.1+",
    "primaryVer": "2024.1",
    "allVersions": [
      "2024.1"
    ],
    "reports": 4,
    "workId": "W-16361723",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zKb8zAAC",
    "summary": "When showing values of a field with Data Type set to Number (decimal), values to the right of the decimal place show as \".00\" instead of the correct values (e.g. .50)Additionally, the following error message appears intermittently:\"Incorrect data type integer getting expected real type\"",
    "created": 1722442196000,
    "updated": 1747116928000
  },
  {
    "id": "a02Ka00000frqJ2IAI",
    "name": "",
    "title": "Dashboard sizing issue when opening other dashboards using a navigation button in Tableau Server 2024.4.9",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 0,
    "workId": "W-18667673",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000frqJ2IAI",
    "summary": "Dashboards when opened using a navigation button do not size correctly across the display.Non-working exampleWorking example",
    "created": 1749468945000,
    "updated": 1749514083000
  },
  {
    "id": "a028c00000zKnuWAAS",
    "name": "",
    "title": "Tableau Server/Cloud/Desktop - Unable to Setup OAuth for Redshift with Temporary Credentials using the IAM Identity",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3.5, 2024.2",
    "primaryVer": "2023.3.5",
    "allVersions": [
      "2023.3.5",
      "2024.2"
    ],
    "reports": 0,
    "workId": "W-16391526",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zKnuWAAS",
    "summary": "The Tableau Redshift connector relies on the Redshift ODBC driver for functionality. When connecting using to Redshift using OAuth and IAM (not IAM IDC), Tableau uses the JWT IAM Auth Plugin. This is the only plugin that satisfies the requirements to connect using OAuth from Tableau Server or Tableau Cloud. This plugin will call the API GetClusterCredentials - Amazon Redshift, which works for some environments. Other environments must use the API GetClusterCredentialsWithIAM - Amazon Redshift. T",
    "created": 1723037162000,
    "updated": 1743176499000
  },
  {
    "id": "a028c00000zi0zPAAQ",
    "name": "",
    "title": "Border lines disappear or become double lines after publishing the workbook to Tableau Server 2021.1 or later/Tableau Cloud",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2024.2.2",
    "primaryVer": "2024.2.2",
    "allVersions": [
      "2024.2.2"
    ],
    "reports": 6,
    "workId": "W-16886193",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zi0zPAAQ",
    "summary": "Row/column dividers are not rendered correctly (missing or doubled).",
    "created": 1728954243000,
    "updated": 1746642918000
  },
  {
    "id": "a028c00000z0AAzAAM",
    "name": "",
    "title": "Tableau Server/Cloud - Horizontally Aligned Grand Totals Title is Truncated When the first Row Header is aligned Vertically with Client-Side Rendering",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3, 2024.1",
    "primaryVer": "2023.3",
    "allVersions": [
      "2023.3",
      "2024.1"
    ],
    "reports": 4,
    "workId": "W-15490355",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000z0AAzAAM",
    "summary": "When the Grand Totals Title is aligned horizontally with the first row header rotated vertically, the Grand Totals Title is truncated to display only \"Gr\".",
    "created": 1713194733000,
    "updated": 1764971736000
  },
  {
    "id": "a028c00000z04W1AAI",
    "name": "",
    "title": "Custom reset button created in Tableau Desktop does not work in Tableau Server/Cloud",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "Tableau Server 2023.3.3",
    "primaryVer": "2023.3.3",
    "allVersions": [
      "2023.3.3"
    ],
    "reports": 0,
    "workId": "W-15351984",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000z04W1AAI",
    "summary": "A dashboard contains a custom reset button to clear all the filters on the dashboard. This button is in reality a worksheet that has a couple of dashboard actions applied to it. When clicking on a mark in a worksheet, which filters this and the rest of the worksheets, all the charts in the dashboard are successfully filtered. However, after clicking the reset button, the worksheet where the mark is selected does not reset - the filters were cleared. ",
    "created": 1712927276000,
    "updated": 1719886605000
  },
  {
    "id": "a028c00000yxhvIAAQ",
    "name": "",
    "title": "Tableau Prep/Server - Site-picker is bypassed when Logging Back In to Tableau Server From Tableau Prep Builder with Kerberos Authentication",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1",
    "primaryVer": "2023.1",
    "allVersions": [
      "2023.1"
    ],
    "reports": 0,
    "workId": "W-14761894",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yxhvIAAQ",
    "summary": "When using Kerberos to log into Tableau Server, Tableau Prep successfully completes the sign-in process but does not offer the option to switch sites during the second login attempt.",
    "created": 1708613448000,
    "updated": 1719886594000
  },
  {
    "id": "a028c00000yzP1tAAE",
    "name": "",
    "title": "Tableau Server - The time zone of the timestamp attached to the output filename using system parameters on Prep Conductor is UTC.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3.1",
    "primaryVer": "2023.3.1",
    "allVersions": [
      "2023.3.1"
    ],
    "reports": 4,
    "workId": "W-15195888",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yzP1tAAE",
    "summary": "The time zone of the timestamp attached to an output filename using system parameters on Prep Conductor is UTC.",
    "created": 1710868445000,
    "updated": 1727736926000
  },
  {
    "id": "a02Ka00000f7JtBIAU",
    "name": "",
    "title": "Content is not Permanently Deleted from Recycle Bin when 1000 or more Items are Selected in Tableau Cloud and Tableau Server 2025.1",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1",
    "primaryVer": "2025.1",
    "allVersions": [
      "2025.1"
    ],
    "reports": 0,
    "workId": "W-18289968",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000f7JtBIAU",
    "summary": "When attempting to permanently delete 1000 or more items from the Recycle Bin at once, the action does not complete and none of the selected items are deleted.In a browser debugger, the following is returned:finalDeleteArchivedContent returns 400 status with response payload\u00a0{\"result\":{\"errors\":[{\"code\":25}]}}EnvironmentTableau CloudTableau Server 2025.1.0-2025.1.1",
    "created": 1746808492000,
    "updated": 1758555264000
  },
  {
    "id": "a028c00000xanRYAAY",
    "name": "",
    "title": "Tableau Server/Cloud - \"LogicException: Internal Error - an unexpected error occurred\" when editing a Box Plot using Web Authoring",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.2",
    "primaryVer": "2023.2",
    "allVersions": [
      "2023.2"
    ],
    "reports": 1,
    "workId": "W-14239619",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000xanRYAAY",
    "summary": "When editing a box plot in web authoring, the following error occurs:Unexpected Server ErrorLogicException: Internal Error - An unexpected error occurred and the operation could not be completed.Please note that this behavior has been observed on both Tableau Cloud and Tableau Server.",
    "created": 1696511592000,
    "updated": 1749209954000
  },
  {
    "id": "a028c00000yxHg8AAE",
    "name": "",
    "title": "Tableau Server - The flow_attachment temp files are never removed from the flow_run_attachment directory",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.3.4",
    "primaryVer": "2022.3.4",
    "allVersions": [
      "2022.3.4"
    ],
    "reports": 0,
    "workId": "W-14484821",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yxHg8AAE",
    "summary": "After enabling the feature \"Notify Users of Successful Flow Runs\" with the output of the flow as the attachment, the flow_attachment files under .../tabsvc/dataengine/flow_run_attachment are never removed and cause the disk space used by /flow_run_attachment keeps growing. Each run_flow job adds a new flow attachment even though the output is the same as the previous jobs.",
    "created": 1708026858000,
    "updated": 1719886588000
  },
  {
    "id": "a02Ka00000fusBJIAY",
    "name": "",
    "title": "Project Leaders with Site Role of Creator/Explorer (Can Publish) Cannot Create Extract Refresh Schedules on Tableau Server or Cloud",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1.0",
    "primaryVer": "2025.1.0",
    "allVersions": [
      "2025.1.0"
    ],
    "reports": 1,
    "workId": "W-18383600",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000fusBJIAY",
    "summary": "Project Leaders with a site role of Creator or Explorer (Can Publish) are unable to create extract refresh schedules unless they are the content owner or have a Site Administrator role. This behavior impacts the ability to manage data refreshes even with Project Leader permissions.",
    "created": 1750760508000,
    "updated": 1752240818000
  },
  {
    "id": "a02Ka00000fueqjIAA",
    "name": "",
    "title": "Using 'Update Data Source Now' REST API Method in Tableau Server 2025.1.x Indefinitely Stays in Pending State and Displays 'Bridge Refresh' In UI",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1.1",
    "primaryVer": "2025.1.1",
    "allVersions": [
      "2025.1.1"
    ],
    "reports": 3,
    "workId": "W-18754310",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000fueqjIAA",
    "summary": "When using the REST API to refresh a Data Source that contains at least one flat file using the 'Update Data Source Now' method in Tableau Server 2025.1.x, the refresh will stay in a pending state and shows as 'Bridge Refresh' in the Tableau Server UI.",
    "created": 1750457918000,
    "updated": 1758895833000
  },
  {
    "id": "a028c00000yGRsnAAG",
    "name": "",
    "title": "Error \"'org.yaml.snakeyaml.error.YAMLException: The incoming YAML document exceeds the limit\" occurs in Tableau Server 2023.3",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3.x",
    "primaryVer": "2023.3",
    "allVersions": [
      "2023.3"
    ],
    "reports": 0,
    "workId": "W-14943826",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yGRsnAAG",
    "summary": "When deploying a coordination service ensemble in Tableau Server 2023.3, unexpected \"org.yaml.snakeyaml.error.YAMLException: The incoming YAML document exceeds the limit\" occurs",
    "created": 1706831363000,
    "updated": 1722607697000
  },
  {
    "id": "a028c00000zIxqwAAC",
    "name": "",
    "title": "Tableau Server - Add Active Directory Group - highlight of group does not persist when choosing minimum site role",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2021.4",
    "primaryVer": "2021.4",
    "allVersions": [
      "2021.4"
    ],
    "reports": 2,
    "workId": "W-15946380",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zIxqwAAC",
    "summary": "When selecting the active directory group, the group selected becomes highlighted; however, after clicking on the minimum site role drop-down, the highlight of the group disappears. In pre-2021.4 versions, the highlight persists as expected. ",
    "created": 1718042699000,
    "updated": 1742495407000
  },
  {
    "id": "a028c00000zIPnqAAG",
    "name": "",
    "title": "Tableau Server/Cloud - Data Details of Workbooks Connected to Prep Flow Outputs do not contain Lineage Information",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2023.1.11, 2023.3.4, 2024.1",
    "primaryVer": "2023.1.11",
    "allVersions": [
      "2023.1.11",
      "2023.3.4",
      "2024.1"
    ],
    "reports": 0,
    "workId": "W-15559921",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zIPnqAAG",
    "summary": "With Data Management, when Prep Outputs datasources with Lineage information(Field Descriptions), the workbooks connected to those outputs do not contain the field descriptions in the Data Details pane for Fields in Use. Instead of showing the field description, the user will receive \"No description available.\"",
    "created": 1716489903000,
    "updated": 1723139502000
  },
  {
    "id": "a028c00000tIv3NAAS",
    "name": "",
    "title": "Tableau Server (versions 2021-2023) is unable to refresh WDC 2.0 extract",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1.2-3, 2022.3.6-7, 2022.1.14-15, 2021.4.18-19, 2021.3.23-24, 2021.2.4-5",
    "primaryVer": "2023.1.2",
    "allVersions": [
      "2023.1.2",
      "2022.3.6",
      "2022.1.14",
      "2021.4.18",
      "2021.3.23",
      "2021.2.4"
    ],
    "reports": 42,
    "workId": "W-13568882",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000tIv3NAAS",
    "summary": "Tableau Server may be unable to refresh WDC extracts. Such extracts may fail with the error:\"This job failed on Date,time after running for 0.1 min because of: com.tableausoftware.server.status.reporting.TableauRuntimeException: WebDataRequestor::InitAPIObj Unable to load URL: URL here\"AFFECTED VERSIONS: All May-July 2023 current releases, including:2023.1.2 + 2023.1.42022.3.6 + 2022.3.82022.1.14 + 2022.1.162021.4.18 + 2021.4.202021.3.23 + 2021.3.252021.2.24 + 2021.2.25 ",
    "created": 1686775664000,
    "updated": 1719886570000
  },
  {
    "id": "a028c00000xA0XAAA0",
    "name": "",
    "title": "Tableau Server - reap_repository_garbage_records job fails as of an upgrade to 2023.1.1",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 0,
    "workId": "W-13772508",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000xA0XAAA0",
    "summary": "Repository garbage records are not cleaned anymore since 2023.1.1 upgrade of Tableau Server.\u00a0The job fails with the following error:job_type: --- :reap_repository_garbage_recordscom.tableausoftware.server.status.reporting.TableauRuntimeException: org.hibernate.exception.ConstraintViolationException: could not extract ResultSet",
    "created": 1698077229000,
    "updated": 1719886594000
  },
  {
    "id": "a028c00000zHu3QAAS",
    "name": "",
    "title": "Tableau Server and Cloud Error \"Custom OAuth is not configured for this datasource\" when creating a new Flow using SharePoint Lists (JDBC)",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 3,
    "workId": "W-15694753",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zHu3QAAS",
    "summary": "Error \"Custom OAuth is not configured for this datasource. Learn more. (errorCode=170001)\" when creating a new Flow using SharePoint Lists (JDBC) connector even if the Oauth has been set up.",
    "created": 1715120535000,
    "updated": 1719886599000
  },
  {
    "id": "a02Ka00000fAoGwIAK",
    "name": "",
    "title": "Dashboards Are Not Properly Formatted on Tableau Cloud When Using Tableau Book Fonts in Client-Side Rendering",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2025.1",
    "primaryVer": "2025.1",
    "allVersions": [
      "2025.1"
    ],
    "reports": 1,
    "workId": "W-18565608",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000fAoGwIAK",
    "summary": "Text table views on Tableau Cloud are not formatted properly when using the Tableau Book fonts, the dashboard displays truncated text in columns instead of word wrapping correctly.",
    "created": 1748467323000,
    "updated": 1755022998000
  },
  {
    "id": "a028c00000ixQZnAAM",
    "name": "",
    "title": "Tableau Server excessive logging by VizPortal instrumentation is filling up disk space.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.3.1",
    "primaryVer": "2022.3.1",
    "allVersions": [
      "2022.3.1"
    ],
    "reports": 19,
    "workId": "W-12902788",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000ixQZnAAM",
    "summary": "Tableau Server excessive logging by VizPortal instrumentation is filling up disk space.Originally tracked under Tableau TFS 1497052",
    "created": 1683931106000,
    "updated": 1747772893000
  },
  {
    "id": "a028c000010F5u3AAC",
    "name": "",
    "title": "When using 'Edit Connection' on an OData data source with a filter on Tableau Server, special characters in the filter are replaced by &#39;",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3.9",
    "primaryVer": "2023.3.9",
    "allVersions": [
      "2023.3.9"
    ],
    "reports": 0,
    "workId": "W-17776013",
    "url": "https://help.salesforce.com/s/issue?id=a028c000010F5u3AAC",
    "summary": "When using 'Edit Connection' on an OData data source with a filter on Tableau Server, special characters in the filter are replaced by &#39;",
    "created": 1739378412000,
    "updated": 1751303427000
  },
  {
    "id": "a028c00000yzjBEAAY",
    "name": "",
    "title": "The response of REST API \"Query Groups\" is not localized but in English even in localized Tableau Server installation.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.3.10",
    "primaryVer": "2022.3.10",
    "allVersions": [
      "2022.3.10"
    ],
    "reports": 0,
    "workId": "W-15348699",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yzjBEAAY",
    "summary": "The \"name\" attribute of the response in <group> tag in REST API \"Query Groups\" is not Localized but is returned as \"All Users\" (in English) even in localized Tableau Server installation.",
    "created": 1711931522000,
    "updated": 1719886596000
  },
  {
    "id": "a028c00000zJl3XAAS",
    "name": "",
    "title": "Tableau Server - \"Processing...\" dialog appears when loading an embedded page, and snaps display to middle of page",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3.6",
    "primaryVer": "2023.3.6",
    "allVersions": [
      "2023.3.6"
    ],
    "reports": 14,
    "workId": "W-16138779",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zJl3XAAS",
    "summary": "Upon attempting to load an embedded page, a \"Processing...\" dialog box appears, then snaps the display of the page to the middle. This is most notable when there are scrollbars visible on the page for longer views. ",
    "created": 1720207421000,
    "updated": 1738696932000
  },
  {
    "id": "a028c00000xBNFfAAO",
    "name": "",
    "title": "Tableau Prep Builder does not show the \"To a Server\" section of the \"Connect\" pane in air-gapped environment",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1",
    "primaryVer": "2023.1",
    "allVersions": [
      "2023.1"
    ],
    "reports": 2,
    "workId": "W-14500075",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000xBNFfAAO",
    "summary": "Tableau Prep Builder does not show the \"To a Server\" section of the \"Connect\" pane in air-gapped environment.",
    "created": 1700441159000,
    "updated": 1719886594000
  },
  {
    "id": "a028c00000yDf8XAAS",
    "name": "",
    "title": "Tableau Server - Unable to Setup Identity Pool when utilizing OpenID with Azure AD due to IDP error",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 3,
    "workId": "W-14289868",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yDf8XAAS",
    "summary": "When attempting to setup the Identity Pool using OpenID and Azure AD, the following error occurs:Sorry, but we\u2019re having trouble signing you in.AADSTS901001: Invalid request. The 'acr' values request parameter value 'Empty' is invalid.Passing \"null\" as the acr value in the API Call during Identity Pool creation leads to the IDP login, but is met with the following error:Error 69",
    "created": 1703008882000,
    "updated": 1732203018000
  },
  {
    "id": "a028c00000yzqJGAAY",
    "name": "",
    "title": "Tableau Server: Published Google BiqQuery (JDBC) Data Sources Using Service Accounts Do Not Allow Switching Saved Credentials Through the Edit Connect",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1.2",
    "primaryVer": "2023.1.2",
    "allVersions": [
      "2023.1.2"
    ],
    "reports": 2,
    "workId": "W-15431380",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yzqJGAAY",
    "summary": "On Tableau Server, Google Big Query (JDBC) Data Sources published with embedded credentials using an embedded Service Account does not allow switching embedded user credentials when attempting to Edit Connection on the data source. Instead, the connection prompts for Server name, Server port, and Username.",
    "created": 1712327702000,
    "updated": 1719886596000
  },
  {
    "id": "a028c00000zJywPAAS",
    "name": "",
    "title": "Tableau Server - Dashboards that include a map will not reset the map after using a manual reset button/filter",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2023.3.2",
    "primaryVer": "2023.3.2",
    "allVersions": [
      "2023.3.2"
    ],
    "reports": 0,
    "workId": "W-16059163",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zJywPAAS",
    "summary": "Dashboards that include a map will not reset after using a manual reset button (utilizing Dashboard Filter Actions). When a data set on a map is selected the data will properly filter, however when the reset button is clicked, all other data will reset but the map will continue to display the selected data point. This behavior only occurs after publishing to Tableau Server.",
    "created": 1720799391000,
    "updated": 1722366557000
  },
  {
    "id": "a028c00000yxeWZAAY",
    "name": "",
    "title": "Tableau Cloud/Server - Tabcmd export --fullpdf command fails to respect parameter values added via a URL filter",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2023.1",
    "primaryVer": "2023.1",
    "allVersions": [
      "2023.1"
    ],
    "reports": 3,
    "workId": "W-12824314",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yxeWZAAY",
    "summary": "When exporting a full pdf using tabcmd 2.0.7/2.0.10 and parameter value added in the URL, the exported pdf does not respect the value given in the URL. Instead, tabcmd exports a version of the pdf with the parameter value as the default parameter value.",
    "created": 1708554456000,
    "updated": 1719886594000
  },
  {
    "id": "a028c00000zi11zAAA",
    "name": "",
    "title": "Tableau Server and Desktop wrongly encode the URL used for the Image Role request. As a result, the image failed to be loaded and is not displayed.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "All",
    "primaryVer": "",
    "allVersions": [],
    "reports": 0,
    "workId": "W-15580258",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zi11zAAA",
    "summary": "When accessing an online image with Image Role, the first \"+\" in the URL is replaced with %20. As a result, the image failed to be loaded and is not displayed:For example, if the view includes a URL like:https://image.example.com/images/7CzVs+5FzV.pngTableau encodes the URL and makes the HTTP request as:https://image.example.com/images/7CzVs%205FzV.pngThe '+' between \"Vs\" and \"5F\" in the original URL is replaced to '%20'.\u00a0",
    "created": 1728962840000,
    "updated": 1750860282000
  },
  {
    "id": "a028c00000yDbi8AAC",
    "name": "",
    "title": "Tableau Server - Flow output hyperlinks are not retained after an upgrade from version 2021.1.4 to TS v2022.3.8",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2021.1.4, 2022.3.8",
    "primaryVer": "2021.1.4",
    "allVersions": [
      "2021.1.4",
      "2022.3.8"
    ],
    "reports": 0,
    "workId": "W-14673398",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yDbi8AAC",
    "summary": "After upgrading from TS v2021.1.4 to TS v2022.3.8, all the flows do not contain hyperlinks in their output steps even though the published data source exists and are searchable through explore in the UI.",
    "created": 1702938224000,
    "updated": 1719886594000
  },
  {
    "id": "a028c00000yD6IMAA0",
    "name": "",
    "title": "Tableau Server - Incorrect text appears in search box when using dictation for Ask Data lenses feature on iOS mobile browsers",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2023.1.2",
    "primaryVer": "2023.1.2",
    "allVersions": [
      "2023.1.2"
    ],
    "reports": 0,
    "workId": "W-14039701",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yD6IMAA0",
    "summary": "On iPhone or iPad, when using the Voice option in the keyboard to type question in the Ask Data question bar, it distorts the text.Example:Speaking the phrase: \"Top Customers by Profit\", the text that appears is distorted text to \"Tto TopTop fiveTop five customersTopb five customers bTopfive.......\".",
    "created": 1701891437000,
    "updated": 1719886593000
  },
  {
    "id": "a028c00000zL37NAAS",
    "name": "",
    "title": "Flows failing on Tableau Cloud due to 'db name' attribute missing in request to Data Server.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 2,
    "workId": "W-16452884",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zL37NAAS",
    "summary": "The issue was reported where scheduled flow runs are intermittently failing with the following error presentation:\"unable to publish the data source. Verify the project exists on your server and you have permission to access it or select a different project.\"Running a flow which is also attempting to append to an existing extract and Google Big Query table. For this scenario, we see a Data Service Failure, stating that there is \"No 'DBname' attribute in request\" and we are getting a 404 error co",
    "created": 1723646650000,
    "updated": 1726829803000
  },
  {
    "id": "a028c00000yxdgpAAA",
    "name": "",
    "title": "Tableau Server - When Project Asset permission is \"Customizable,\" users without connect permissions can see other users'  Virtual Connection tables",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2023.1.2",
    "primaryVer": "2023.1.2",
    "allVersions": [
      "2023.1.2"
    ],
    "reports": 0,
    "workId": "W-14460013",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yxdgpAAA",
    "summary": "When Project Asset permission is \u201cCustomizable\u201d, users without connect permissions can see the Virtual Connection tables created by another user.",
    "created": 1708538851000,
    "updated": 1723530506000
  },
  {
    "id": "a028c00000yx95vAAA",
    "name": "",
    "title": "Tableau Server/Prep - When Connected Clients is disabled, Tableau Prep Builder will fail to connect to Published Data Sources with an error",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.3.4",
    "primaryVer": "2022.3.4",
    "allVersions": [
      "2022.3.4"
    ],
    "reports": 1,
    "workId": "W-15025681",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yx95vAAA",
    "summary": "When Connected Clients is disabled, Tableau Prep Builder will fail to connect to Published Data Sources with an error: \"No Tableau Server User Found.\"",
    "created": 1707862123000,
    "updated": 1719886595000
  },
  {
    "id": "a028c00000yzcZWAAY",
    "name": "",
    "title": "Unexpected Server Error Occurs In Creating A New Data Source For Amazon S3 On Tableau Server When Vizqlserver.native_api.log.level Is Set As Warn.",
    "status": "Solution in Progress",
    "statusType": "open",
    "foundIn": "2023.3 or later",
    "primaryVer": "2023.3",
    "allVersions": [
      "2023.3"
    ],
    "reports": 3,
    "workId": "15250812",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yzcZWAAY",
    "summary": "Unexpected server error occurs in creating a new data source for Amazon S3 on Tableau Server when vizqlserver.native_api.log.level is set as warn.",
    "created": 1711516005000,
    "updated": 1728578183000
  },
  {
    "id": "a028c00000yGAFAAA4",
    "name": "",
    "title": "Tableau Cloud - Refreshing an Azure Synapse extract results in an error: \"[ODBC Driver 17 for SQL Server] Invalid cursor state.\"",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2023.2.0+",
    "primaryVer": "2023.2.0",
    "allVersions": [
      "2023.2.0"
    ],
    "reports": 2,
    "workId": "W-14778514",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yGAFAAA4",
    "summary": "When attempting to refresh an Azure Synapse Extract, an error message appears. The error may appear intermittently, or only for the initial extract refresh.This issue is noted to occur when using a Serverless SQL Pool.",
    "created": 1706553301000,
    "updated": 1748958175000
  },
  {
    "id": "a028c00000tJQWOAA4",
    "name": "",
    "title": "Data Server Processes Fail to Start After Upgrading Tableau Server Cluster to 2022.1 or Newer Versions.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 3,
    "workId": "W-12900190",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000tJQWOAA4",
    "summary": "Data Server processes fail to start after upgrading Tableau Server cluster to 2022.1 or newer versions.This issue is reported to occur in the following Tableau Server environment:Tableau Server on LinuxDistributed or High Availability Tableau Server (Tableau Server with multiple nodes)",
    "created": 1687744847000,
    "updated": 1763539987000
  },
  {
    "id": "a028c00000yz1bSAAQ",
    "name": "",
    "title": "Tableau Desktop/Server - relative \"Days\" filters missing data after midnight UTC",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2023.3.1",
    "primaryVer": "2023.3.1",
    "allVersions": [
      "2023.3.1"
    ],
    "reports": 0,
    "workId": "W-15162828",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yz1bSAAQ",
    "summary": "When a relative date filter uses \"Days\" as the increment with a value such as \"Today,\" records show up correctly until whenever the date rolls over in UTC, after which no more data from the same day in a non-UTC timezone will be displayed. For example:A user works in PST on 1/1/24.At 4PM PST (UTC = Midnight), a new \"day\" begins for UTC (1/2/24).Data from 4PM to 12AM PST will be listed under 1/2/24 rather than 1/1/24, as UTC is used in BigQuery.",
    "created": 1710265434000,
    "updated": 1719886601000
  },
  {
    "id": "a028c00000tIphIAAS",
    "name": "",
    "title": "Tableau Server - Kubernetes Container Upgrade Fails for version 2023.1.2",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1.2",
    "primaryVer": "2023.1.2",
    "allVersions": [
      "2023.1.2"
    ],
    "reports": 1,
    "workId": "W-13510710",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000tIphIAAS",
    "summary": "Deploying Tableau Server in Container on Kubernetes fails for version 2023.1.2 fails. Three services do not reach their expected state:floweditor_0.20231.23.0511.1508: Failed to start. Current status: DOWNflowprocessor_0.20231.23.0511.1508: Failed to start. Current status: STATUS_UNAVAILABLEwebhooks_0.20231.23.0511.1508: Failed to start. Current status: DOWN\u00a0",
    "created": 1686595747000,
    "updated": 1730237641000
  },
  {
    "id": "a028c00000yxcbyAAA",
    "name": "",
    "title": "Tableau Server (Prep Web Edit) - Error When Adding Rscript to Flow - Can't Upload Files: This filetype is currently not supported on the web",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1.2",
    "primaryVer": "2023.1.2",
    "allVersions": [
      "2023.1.2"
    ],
    "reports": 0,
    "workId": "W-14005634",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yxcbyAAA",
    "summary": "When trying to insert an external RScript via the Web-Editing into a flow in, the error \"Can't Upload Files: This filetype is currently not supported on the web\" appears.",
    "created": 1708526298000,
    "updated": 1719886594000
  },
  {
    "id": "a028c00000yyLJfAAM",
    "name": "",
    "title": "Tableau Server - Authentication in an embedded view through Identity Pools does not close the pop-up window and redirects to the home page",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2023.1.1",
    "primaryVer": "2023.1.1",
    "allVersions": [
      "2023.1.1"
    ],
    "reports": 1,
    "workId": "W-15144866",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yyLJfAAM",
    "summary": "When authenticating through an embedded view with an Identity Pool, the authentication does not close the pop-up window and load the embedded view. Instead, the user is redirected to their home page within the pop-up.",
    "created": 1709571125000,
    "updated": 1719886594000
  },
  {
    "id": "a02g700000AyZ5BAAV",
    "name": "",
    "title": "Dashboards may fail to load with \"An Unexpected Error Occurred\" under high concurrent usage",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 1,
    "workId": "W-23568519",
    "url": "https://help.salesforce.com/s/issue?id=a02g700000AyZ5BAAV",
    "summary": "Under certain conditions, dashboards may fail to load and display an \"An Unexpected Error Occurred\" message. This issue occurs when a dashboard is accessed by many users at the same time, particularly when the dashboard contains certain calculated fields used in tooltips or labels. Not all users or sessions are affected \u2014 a single user accessing the dashboard under normal, low-traffic conditions typically does not encounter the error",
    "created": 1790939204000,
    "updated": 1792411203000
  },
  {
    "id": "a028c00000z0GotAAE",
    "name": "",
    "title": "In Tableau Cloud 2024.1, Error \"Request Rejected by Server\" Occurs When Accessing A Dashboard With Too Long View URL And Filtering Strings",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.1",
    "primaryVer": "2024.1",
    "allVersions": [
      "2024.1"
    ],
    "reports": 1,
    "workId": "W-15190790",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000z0GotAAE",
    "summary": "In Tableau Cloud 2024.1, the one of the following 3 errors occur when attempting to access a dashboard by too long view URL and filtering strings.Error Message1:Error Message2:Error Message3:",
    "created": 1713488597000,
    "updated": 1732693654000
  },
  {
    "id": "a028c00000zgmmnAAA",
    "name": "",
    "title": "Tableau Desktop/Server/Cloud - Filter has missing values when set to show \"Only relevant values\" and using multiple data sources",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2020.2+",
    "primaryVer": "2020.2",
    "allVersions": [
      "2020.2"
    ],
    "reports": 0,
    "workId": "W-16678573",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zgmmnAAA",
    "summary": "In Tableau Desktop, Server, and Cloud, Filters have missing values when using the \"Only Relevant Values\" option when connected to multiple data sources. When filtering based off of a single data value, the quick filter list is modified when selecting the \"Only Relevant Values\" option. When filtering off of one singular filter and selecting the \"Only Relevant Values\" option, the domain of the quick filter list should not change.",
    "created": 1725630041000,
    "updated": 1727282329000
  },
  {
    "id": "a028c00000yG04gAAC",
    "name": "",
    "title": "Tableau Server - Published datasources fail to refresh, and views connected to published data sources fail to open after upgrading to 2023.3.0",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3.0",
    "primaryVer": "2023.3.0",
    "allVersions": [
      "2023.3.0"
    ],
    "reports": 6,
    "workId": "W-14656892",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yG04gAAC",
    "summary": "After upgrade from 2021.3.18 to 2023.3.0, published datasources fail to refresh and connected views fail to open. Publishing new datasources also fail immediately.If running into this issue on 2023.1, see https://issues.salesforce.com/issue/a028c00000tIwnLAAS/tds-file-is-not-found-in-local-storage-for-siteluid-after-upgrade-from-ts-20213-to-20231",
    "created": 1706208423000,
    "updated": 1720194809000
  },
  {
    "id": "a02Ka00000mGsSaIAK",
    "name": "",
    "title": "Error \"Restricted data type attribute violation\" Displays Connecting to MS SQL Server Using Stored Procedures",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.3",
    "primaryVer": "2025.3",
    "allVersions": [
      "2025.3"
    ],
    "reports": 6,
    "workId": "W-22782187",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mGsSaIAK",
    "summary": "The below error displays when attempting to connect to MS SQL Server using Stored Procedures. Bad Connection: Tableau could not connect to the data source. Error Code: 08F00D51 \u2013 Restricted data type attribute violation",
    "created": 1780424311000,
    "updated": 1787952800000
  },
  {
    "id": "a028c00000yzQQSAA2",
    "name": "",
    "title": "Tableau Server - Poor Performance (High Hyper CPU usage, long-running Hyper queries, slow view loads) after upgrade to 2022.3.x",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.3.x",
    "primaryVer": "2022.3",
    "allVersions": [
      "2022.3"
    ],
    "reports": 0,
    "workId": "W-15244838",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yzQQSAA2",
    "summary": "After upgrading to 2022.3.x via in-place upgrade, poor performance is observed: High Hyper CPU Usage, long-running Hyper & sqlproxy queries (>1600 seconds), slow view loads with extracts.Live connections do not experience any issues.",
    "created": 1710941599000,
    "updated": 1719886594000
  },
  {
    "id": "a028c00000yFYgcAAG",
    "name": "",
    "title": "Tableau Cloud/Server - Cannot edit data source with two different snowflake connections in web authoring",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3.0",
    "primaryVer": "2023.3.0",
    "allVersions": [
      "2023.3.0"
    ],
    "reports": 1,
    "workId": "W-14798004",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yFYgcAAG",
    "summary": "When the published data source involving two different Snowflake database connections, Tableau Cloud does not show the correct saved OAuth credentials for the second Snowflake database connection.",
    "created": 1705535502000,
    "updated": 1719886595000
  },
  {
    "id": "a028c00000zHrnDAAS",
    "name": "",
    "title": "Drop-down filter in Tableau Desktop shows \"(Multiple values)\" but on the Tableau Cloud/Server it shows \"(All)\" in the textbox control",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "Summer '16",
    "primaryVer": "",
    "allVersions": [],
    "reports": 1,
    "workId": "W-15639656",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zHrnDAAS",
    "summary": "When using a mutiple value drop-down filter in Tableau Desktop and selecting multiple values, the textbox control shows \"(Multiple values)\" in Tableau Desktop however in Tableau Cloud/Server, the control shows \"(All)\".\ufeff",
    "created": 1714982847000,
    "updated": 1719886596000
  },
  {
    "id": "a028c00000ziAnEAAU",
    "name": "",
    "title": "Flows Run in either Tableau Prep Builder or Tableau Server outputting to Excel See Increases in Runtime and File size due to sharedStrings.xml",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.3.0",
    "primaryVer": "2022.3.0",
    "allVersions": [
      "2022.3.0"
    ],
    "reports": 1,
    "workId": "W-17014738",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000ziAnEAAU",
    "summary": "When a flow run includes an output to Excel, the elapsed time for the flow run to finish continues to increase with each subsequent run if the output file exists. Additionally, it is observed that the file size is increasing within the sharedStrings.xml of the .xlsx archive. This issue reproduces in all currently supported versions of Tableau Prep Builder and Tableau Server.",
    "created": 1729272649000,
    "updated": 1750279096000
  },
  {
    "id": "a028c000010FQDPAA4",
    "name": "",
    "title": "Published Datasources Containing Multiple Connections (including Virtual Connections) Are Duplicated in Web Authoring \"Connect to Data\" Dialog",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2023.3.0",
    "primaryVer": "2023.3.0",
    "allVersions": [
      "2023.3.0"
    ],
    "reports": 1,
    "workId": "W-17864216",
    "url": "https://help.salesforce.com/s/issue?id=a028c000010FQDPAA4",
    "summary": "Note: This issue also affects Tableau Cloud.When Web Authoring in Tableau Server or Tableau Cloud and using a published data source that contains more than 1 data source connection and/or Virtual Connection, that published data source's name might appear multiple times in the \"Connect to Data\" dialog.",
    "created": 1740164871000,
    "updated": 1742316736000
  },
  {
    "id": "a028c00000tJBw7AAG",
    "name": "",
    "title": "Tableau Server - VizQL Displaying HTML Error Messages when Viewing/Creating a Workbook",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2022.1.14",
    "primaryVer": "2022.1.14",
    "allVersions": [
      "2022.1.14"
    ],
    "reports": 0,
    "workId": "W-13623635",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000tJBw7AAG",
    "summary": "When accessing a dashboard or creating a new workbook from Tableau Server, an unexpected error occurs. This error contains a large amount of HTML parameters and their values.Issue confirmed in Tableau Server versions:2022.1.142022.3.62023.1.2",
    "created": 1687291328000,
    "updated": 1719886570000
  },
  {
    "id": "a028c00000yxcenAAA",
    "name": "",
    "title": "Tableau Server/Prep - Starting in 2022.3.3, flows that utilize a direct connection to a PDF file on a network fail to run",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.3.3",
    "primaryVer": "2022.3.3",
    "allVersions": [
      "2022.3.3"
    ],
    "reports": 0,
    "workId": "W-13969616",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yxcenAAA",
    "summary": "Starting in 2022.3.3, flows that utilize a direct connection to a PDF file on a network drive fail to run on Tableau Server.",
    "created": 1708526945000,
    "updated": 1719886594000
  },
  {
    "id": "a02Ka00000mGOeRIAW",
    "name": "",
    "title": "Intermittent Prep flow run failure with error [SQLSTATE:08006] \u201cThe Hyper server closed the connection unexpectedly.\u201d connecting to CSV",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1.5",
    "primaryVer": "2025.1.5",
    "allVersions": [
      "2025.1.5"
    ],
    "reports": 3,
    "workId": "W-22586654",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mGOeRIAW",
    "summary": "In Tableau Server 2025.1.5 or later, Prep flow jobs intermittently fail with the error: \u201cAn error occurred while communicating with the data source [SQLSTATE:08006] \u2013 The Hyper server closed the connection unexpectedly.\u201d on Tableau Server. This behavior occurs when the Prep flow uses a large CSV file on a network share.This error message or one similar may be encountered in a number of different scenarios, this specific issue occurs when active connections to a text file are interrupted by inter",
    "created": 1779323505000,
    "updated": 1791387168000
  },
  {
    "id": "a028c00000yG0kIAAS",
    "name": "",
    "title": "Tableau Cloud/Server- Authentication incorrectly displayed as No authentication even though OAuth credentials have been embedded",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3",
    "primaryVer": "2023.3",
    "allVersions": [
      "2023.3"
    ],
    "reports": 1,
    "workId": "W-14882837",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yG0kIAAS",
    "summary": "In Tableau Cloud, credentials are not embedded for Salesforce Data Cloud connections even though OAuth credentials have been embedded.As a result, attempting to refresh these connections will result in an error. ",
    "created": 1706214767000,
    "updated": 1719886595000
  },
  {
    "id": "a028c00000suW2CAAU",
    "name": "",
    "title": "Web Data Connectors (WDCs) published to Tableau Server are failing to refresh",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1.5",
    "primaryVer": "2023.1.5",
    "allVersions": [
      "2023.1.5"
    ],
    "reports": 20,
    "workId": "W-14139863",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000suW2CAAU",
    "summary": "Data sources based on Web Data Connector 2.0 connectors (WDC) are failing to refresh even after upgrading Tableau Server to August 17th, 2023 maintenance release versions (2021.3.26, 2021.4.21, 2022.1.17, 2022.3.9, 2023.1.5).Please note that this issue is very similar to an issue previously resolved in the August 17th, 2023 Maintenance Release for Tableau Server.\u00a0(https://issues.salesforce.com/issue/a028c00000tIv3N/tableau-server-versions-2021-2023-is-unable-to-refresh-wdc-20-extract)However, wh",
    "created": 1695314876000,
    "updated": 1719886593000
  },
  {
    "id": "a028c00000zjZf2AAE",
    "name": "",
    "title": "Error Occurs When Using Published Data Source in a Site with CJK Site Name or by a User with CJK in Username on Tableau Server 2024.2.3 and Newer",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.3",
    "primaryVer": "2024.2.3",
    "allVersions": [
      "2024.2.3"
    ],
    "reports": 5,
    "workId": "W-17241137",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zjZf2AAE",
    "summary": "When the site name or logged-in user's username uses non-ASCII characters (such as Chinese, Japanese, or Korean), opening a view or creating a workbook using the published data source results in the following error. The issue occurs from Tableau Server 2024.2.3 but not in 2024.2.2 or before.",
    "created": 1733275825000,
    "updated": 1742491243000
  },
  {
    "id": "a028c00000xG5BMAA0",
    "name": "",
    "title": "Tableau Server RMT - master-setup Command Disregards --require-https And Always Uses 'true'",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2023.1.2",
    "primaryVer": "2023.1.2",
    "allVersions": [
      "2023.1.2"
    ],
    "reports": 1,
    "workId": "W-14010449",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000xG5BMAA0",
    "summary": "Running master-setup with or without --require-https results in the same value of require-https=true. Using --require-https=false is ignored and still sets the value to true.The issue is present on all current versions of Tableau Server/RMT as of 9/14/23.",
    "created": 1694704468000,
    "updated": 1732201150000
  },
  {
    "id": "a028c00000iwh1PAAQ",
    "name": "",
    "title": "When opening reports using MSAS on Tableau Server, VizQL becomes unresponsive",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2022.1.0",
    "primaryVer": "2022.1.0",
    "allVersions": [
      "2022.1.0"
    ],
    "reports": 0,
    "workId": "W-12863838",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000iwh1PAAQ",
    "summary": "After an upgrade to 2022.1, the Microsoft Analysis Service workbooks could cause the VizQL server process to crash when using version 15 or 16 of the MSAS driver.Previously tracked under TFS item 1431834.",
    "created": 1682344637000,
    "updated": 1719886598000
  },
  {
    "id": "a028c00000yzCAPAA2",
    "name": "",
    "title": "Tableau Server Unable to connect to Google Analytics 4 in a multi-node environment when the OAuth service starts from a secondary node.",
    "status": "Solution in Progress",
    "statusType": "open",
    "foundIn": "2023.1.2",
    "primaryVer": "2023.1.2",
    "allVersions": [
      "2023.1.2"
    ],
    "reports": 4,
    "workId": "W-15201814",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yzCAPAA2",
    "summary": "OAuthService (oauthservice.jar) includes \u201cOrigin host\u201d headers when launched from nodes other than the primary node. When the \u201cOrigin host\u201d is present, the authentication screen displays an error after completing the login and authorization.",
    "created": 1710434350000,
    "updated": 1723225983000
  },
  {
    "id": "a028c00000yGOYyAAO",
    "name": "",
    "title": "Error \"creating Table On Shared Database Is Not Allowed\" Occurs When Accessing Read-Only Snowflake Datasources In Tableau Desktop/Server",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1, 2023.2",
    "primaryVer": "2023.1",
    "allVersions": [
      "2023.1",
      "2023.2"
    ],
    "reports": 3,
    "workId": "W-15713115",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yGOYyAAO",
    "summary": "Views connected to Snowflake shared databases do not load but the error message \"TableauException: SQL execution error: Creating table on shared database '<name>' is not allowed.\" is presented in Tableau Desktop/Server 2023.1 and later versions.",
    "created": 1706768662000,
    "updated": 1722376015000
  },
  {
    "id": "a028c00000uWSRpAAO",
    "name": "",
    "title": "Scroll Bar missing from parameter dropdown after upgrade to Tableau Server 2023.1.4",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1.4",
    "primaryVer": "2023.1.4",
    "allVersions": [
      "2023.1.4"
    ],
    "reports": 10,
    "workId": "W-13916322",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000uWSRpAAO",
    "summary": "After upgrading to Tableau Server 2023.1.4, workbooks that contain a parameter dropdown are not displaying the scroll bar as expected.\ufeff",
    "created": 1691683231000,
    "updated": 1719886574000
  },
  {
    "id": "a028c00000uXffjAAC",
    "name": "",
    "title": "Publishing The Workbook On The Web Hangs When Tableau Server Has 10,000+ Projects",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1.3",
    "primaryVer": "2023.1.3",
    "allVersions": [
      "2023.1.3"
    ],
    "reports": 0,
    "workId": "W-14049197",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000uXffjAAC",
    "summary": "Unable to publish the workbook on the web when Tableau Server has 10,000+ projects.The publish button is not activated due to the page that follows.\ufeff",
    "created": 1693802557000,
    "updated": 1719886602000
  },
  {
    "id": "a02g7000007Tu2nAAC",
    "name": "",
    "title": "OAuth Connections Published with REST API, tabcmd, or Workbook Upload loop with Error \"Tableau needs an unexpired OAuth refresh token...\"",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2026.2, 2026.3",
    "primaryVer": "2026.2",
    "allVersions": [
      "2026.2",
      "2026.3"
    ],
    "reports": 7,
    "workId": "W-23895845",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000007Tu2nAAC",
    "summary": "For Tableau Server and Tableau Cloud, when a workbook or data sourced containing a Box, Snowflake, or any cloud OAuth connection is published to Tableau Server via:REST APItabcmd publishTableau Server UI \"Upload Workbook\" buttonthe server-side publish handler strips the `username` attribute off connection code for the workbook or published data source. this causes a persistent mismatch between the content code and the server-side oauth client configuration, resulting in the data source authentic",
    "created": 1787354596000,
    "updated": 1791912806000
  },
  {
    "id": "a028c00000suScAAAU",
    "name": "",
    "title": "Cross tab not visible in Tableau Server when running with Tableau Server Independent Gateway (TSIG)",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.1",
    "primaryVer": "2022.1",
    "allVersions": [
      "2022.1"
    ],
    "reports": 0,
    "workId": "W-12824605",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000suScAAAU",
    "summary": "When running Tableau Server with the Independent Gateway option and attempting to view cross tab data from a view the data will load but it will not render properly, displaying 'image not found' icons where the data would be.",
    "created": 1695227905000,
    "updated": 1719886570000
  },
  {
    "id": "a02Ka00000ftgmkIAA",
    "name": "",
    "title": "Custom Axis Range Using Both \"Automatic\" and \"Fixed end\" With a Value of \"0\" Does Not Render As Expected in Tableau Desktop/Cloud/Server",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2025.1.1",
    "primaryVer": "2025.1.1",
    "allVersions": [
      "2025.1.1"
    ],
    "reports": 0,
    "workId": "W-18717151",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000ftgmkIAA",
    "summary": "When editing a view to set an axis to have a combination of both \"Automatic\" for one end point, and \"Fixed end\" that is set to 0 for the other, the corresponding axis may not render correctly. ",
    "created": 1750175164000,
    "updated": 1755024865000
  },
  {
    "id": "a028c00000tJa7XAAS",
    "name": "",
    "title": "Tableau Prep Output Parameter for W2DB tablenames Failure on Tableau Server",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.3.3",
    "primaryVer": "2022.3.3",
    "allVersions": [
      "2022.3.3"
    ],
    "reports": 1,
    "workId": "W-13483849",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000tJa7XAAS",
    "summary": "When using a dynamic output parameter and writing to a TABLENAME defined within Tableau Prep (with an output for a  database), selecting a parameter value results in the default selection when the parameter was created taking priority over the actual selection being made. As a result, a new table in the output database is created with the default parameter name (Such as \"TableName\") instead of the selected parameter (such as \"CorrectTableName\")Only applicable when running Flow through Tableau Se",
    "created": 1687874621000,
    "updated": 1719886594000
  },
  {
    "id": "a02Ka00000moIUwIAM",
    "name": "",
    "title": "Custom View loads unfiltered data when Published Datasource cache is enabled",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2025.1.15",
    "primaryVer": "2025.1.15",
    "allVersions": [
      "2025.1.15"
    ],
    "reports": 4,
    "workId": "W-22216201",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000moIUwIAM",
    "summary": "Custom views fail to retain their applied filters and revert to the original unfiltered view. This issue occurs specifically when the workbook uses a Live connection to a Published Data Source (PDS) that is configured as an extract. The behavior has been reproduced in both Tableau Server 2025.1.5 and Tableau Cloud.",
    "created": 1777367237000,
    "updated": 1784864240000
  },
  {
    "id": "a028c00000x9HCoAAM",
    "name": "",
    "title": "Tableau Server - Extract Refreshes of Snowflake Virtual Connections fail on 2023.1.4 and 2023.1.5",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1.4, 2023.1.5",
    "primaryVer": "2023.1.4",
    "allVersions": [
      "2023.1.4",
      "2023.1.5"
    ],
    "reports": 3,
    "workId": "W-14070829",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000x9HCoAAM",
    "summary": "Extract Refreshes using Snowflake Virtual Connections fail in Tableau Server 2023.1.4 and 2023.1.5 with the following error:com.tableausoftware.server.status.reporting.TableauRuntimeException: Extract Service returns the status of the extract command with id: bxxxxxx-exxx-4xxx-9xxx-9xxxxxxxxx, with message: Error happened when extract table axxxxxx-1xxx-4xxxxxx-3xxxxxxxxx, as FAILED, in the task: null.",
    "created": 1696945392000,
    "updated": 1733352424000
  },
  {
    "id": "a028c00000xA3y0AAC",
    "name": "",
    "title": "Tableau Server - Prep Flow Authoring & Prep Minerva Service in error state and background maps not loading with server side rendering after upgrade",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.3.10",
    "primaryVer": "2022.3.10",
    "allVersions": [
      "2022.3.10"
    ],
    "reports": 1,
    "workId": "W-14046116",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000xA3y0AAC",
    "summary": "Following a Tableau Server upgrade, Prep Flow Authoring + Prep Minerva Service may appear in an error state, with tabminerva.exe generating multiple crashes.Users may observe their Tableau\\data\\tabsvc\\crashdumps folder filling excessively.Additionally background maps may fail to load with server side rendering.",
    "created": 1698153740000,
    "updated": 1719886588000
  },
  {
    "id": "a028c00000yx7yUAAQ",
    "name": "",
    "title": "Tableau Cloud - Trino JDBC Driver version 376 (included with Cloud) does not work with Trino server version 392",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3.0",
    "primaryVer": "2023.3.0",
    "allVersions": [
      "2023.3.0"
    ],
    "reports": 0,
    "workId": "W-14695907",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yx7yUAAQ",
    "summary": "Refreshing extracts connected to a Trino instance fail with an error. The issue is noted to occur when utilizing the Starburst connector in Tableau Cloud. ",
    "created": 1707850697000,
    "updated": 1719886593000
  },
  {
    "id": "a028c00000x9p4oAAA",
    "name": "",
    "title": "Tableau Server - Index and Search Server error \"no mapping found for `datasourceId_number` in order to collapse on\"",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2022.1",
    "primaryVer": "2022.1",
    "allVersions": [
      "2022.1"
    ],
    "reports": 0,
    "workId": "W-12865652",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000x9p4oAAA",
    "summary": "When managing users in Tableau Server and using a local identity store, clicking on usernames in the User Record may result in an \"Unexpected Error - no mapping found...\" error. ",
    "created": 1697725316000,
    "updated": 1732200289000
  },
  {
    "id": "a028c00000x9fEcAAI",
    "name": "",
    "title": "Tableau Server - Flow processor does not talk to activation service in Flexnet mode; may become unlicensed",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.1, 2022.3, 2023.1",
    "primaryVer": "2022.1",
    "allVersions": [
      "2022.1",
      "2022.3",
      "2023.1"
    ],
    "reports": 0,
    "workId": "W-14073154",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000x9fEcAAI",
    "summary": "The Tableau Prep Conductor process can become unavailable state or unlicensed state randomly when using the legacy Flexera activation method.\u00a0When running the \"tsm status -v\" command, you may view the following status:Status: DEGRADEDTableau Prep Conductor 0' status is unavailable. or\u00a0Tableau Prep Conductor 0' status is unlicensed.To check to see if the ATR Activation method was selected during installation, run the following command:tsm config get -k serverauthorizationtorun.enabled",
    "created": 1697566055000,
    "updated": 1719886587000
  },
  {
    "id": "a028c00000iwTwgAAE",
    "name": "",
    "title": "Tableau Server running on Linux operating system may encounter problems remaining licensed when not using ATR",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2021.1.11",
    "primaryVer": "2021.1.11",
    "allVersions": [
      "2021.1.11"
    ],
    "reports": 0,
    "workId": "W-12771358",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000iwTwgAAE",
    "summary": "Some processes (Prep Conductor, Flowprocessor, Vizportal, Backgrounder) could enter a STATUS_UNAVAILABLE state due to an inability to obtain the license state.Licensing vendor daemon could crash \"Due to Signal 36 Exit reason 4\" after rebootOriginally tracked under Tableau TFS 1429870, 1234439, 1463599",
    "created": 1681843918000,
    "updated": 1753963198000
  },
  {
    "id": "a028c000010FwJdAAK",
    "name": "",
    "title": "Intermittent Error \"[SQLSTATE:08006] The Hyper server closed the connection unexpectedly\" When Loading Extract-Based Viz on Tableau Cloud",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.3",
    "primaryVer": "2024.3",
    "allVersions": [
      "2024.3"
    ],
    "reports": 8,
    "workId": "W-18013229",
    "url": "https://help.salesforce.com/s/issue?id=a028c000010FwJdAAK",
    "summary": "When opening any extract-based dashboard/viz on Tableau Cloud, an SQLSTATE:08006 error intermittently appears.",
    "created": 1741812044000,
    "updated": 1750296505000
  },
  {
    "id": "a028c00000xA5ASAA0",
    "name": "",
    "title": "Tableau Server - Running Virtual Connection (vconn) extracts fails for Oauth connectors and Google Big Query after token expires",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3",
    "primaryVer": "2023.3",
    "allVersions": [
      "2023.3"
    ],
    "reports": 0,
    "workId": "W-14212909",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000xA5ASAA0",
    "summary": "When using a Virtual Connection that utilizes OAuth, extracts may begin to fail after a period of idle time. For Snowflake Vconns, this may take around 10 minutes for a failure, whereas in Google Big Query Vconns the failure will occur during extract creation.Browser Dev Tools may show the following error when a refresh is attempted:com.tableausoftware.server.status.reporting.TableauRuntimeException: OAuth access token expired.",
    "created": 1698170298000,
    "updated": 1747772487000
  },
  {
    "id": "a028c00000suSJhAAM",
    "name": "",
    "title": "Tableau Server - Data extract running queries to Oracle database may use incorrect account/schema",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.3.6",
    "primaryVer": "2022.3.6",
    "allVersions": [
      "2022.3.6"
    ],
    "reports": 1,
    "workId": "W-14119835",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000suSJhAAM",
    "summary": "When refreshing OracleDB extracts on Tableau Server, the connection protocol from previous sessions may be used. This causes queries to have the incorrect target schemas, and/or to attempt to utilize the incorrect user account. This has been observed to occur most often during periods of high load on the server. ",
    "created": 1695225747000,
    "updated": 1730237274000
  },
  {
    "id": "a028c00000iwXR9AAM",
    "name": "",
    "title": "TS: Data source \"Location\" column is empty when searching from the \"Home\" page in Tableau Server",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "20223.23.0112.0407",
    "primaryVer": "",
    "allVersions": [],
    "reports": 0,
    "workId": "W-12867622",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000iwXR9AAM",
    "summary": "Data source \"Location\" column is empty when a returned data sources search is listed from the Home page on Tableau Server.In v2022.3.3 Tableau Server, when searching for data sources the location of the data source is not populated in the returned search.\u00a0Originally tracked under Tableau TFS 1504666.",
    "created": 1681952500000,
    "updated": 1719886593000
  },
  {
    "id": "a02Ka00000eNsfHIAS",
    "name": "",
    "title": "Tableau Cloud: Extract refresh fails to finish successfully with the error: \"The Hyper server closed the connection unexpectedly: pqsecure_raw_read\u201d",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 0,
    "workId": "W-18228736",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000eNsfHIAS",
    "summary": "When trying to run a manual or scheduled extract refresh, the refresh may fail with the error:\"The Hyper server closed the connection unexpectedly: pqsecure_raw_read\u201d",
    "created": 1744380483000,
    "updated": 1750705480000
  },
  {
    "id": "a028c00000uWA7kAAG",
    "name": "",
    "title": "Tableau Server 2023.1 becomes degraded after enabling Connection Pooling Service",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1.0",
    "primaryVer": "2023.1.0",
    "allVersions": [
      "2023.1.0"
    ],
    "reports": 3,
    "workId": "W-13684254",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000uWA7kAAG",
    "summary": "After enabling Connection Pooling Service, Tableau Server 2023.1.x goes into degraded state and will not start.",
    "created": 1691176888000,
    "updated": 1719886589000
  },
  {
    "id": "a028c00000uXXc9AAG",
    "name": "",
    "title": "Tableau Server - Shortcut to Export PNG or PDF with a Parameter Filter in the URL Produces Incorrect Result",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2021.1+",
    "primaryVer": "2021.1",
    "allVersions": [
      "2021.1"
    ],
    "reports": 2,
    "workId": "W-14041482",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000uXXc9AAG",
    "summary": "Using the shortcut /<viewname>.png or /<viewname>.pdf to export either PNG or PDF produces incorrect result when the below conditions are met.A parameter has its initial value based on a calculated field.The parameter is passed in the URL as a filter.The Tableau Server refresh frequency is set to always.",
    "created": 1693488330000,
    "updated": 1719886593000
  },
  {
    "id": "a028c00000xA0l2AAC",
    "name": "",
    "title": "Tableau Server - Inherited descriptions on Virtual Connections do not show in Web Edit's Data Details pane",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.x",
    "primaryVer": "",
    "allVersions": [],
    "reports": 0,
    "workId": "W-13143983",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000xA0l2AAC",
    "summary": "When viewing the \"Data Details\" for a workbook/connection on Tableau Server, inherited descriptions may not display when the data source is a Virtual Connector. ",
    "created": 1698080231000,
    "updated": 1719886594000
  },
  {
    "id": "a028c00000xazhaAAA",
    "name": "",
    "title": "Tableau Server - TSM Restore Does Not Override/Delete Old Data Completely",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.3.9+",
    "primaryVer": "2022.3.9",
    "allVersions": [
      "2022.3.9"
    ],
    "reports": 3,
    "workId": "W-14258363",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000xazhaAAA",
    "summary": "During the tsm maintenance restore process, previous data is not completely overwritten.This results in inconsistent content after adding new sites, projects, and workbooks with the same names as before the restore.The issue has currently been verified on versions 2022.3.9 and 2023.1.5, but may affect other versions as well.",
    "created": 1696859999000,
    "updated": 1722608143000
  },
  {
    "id": "a028c00000x9TIVAA2",
    "name": "",
    "title": "Tableau Cloud - Long Load Time and Unexpected Server Error when changing Filters in a published workbook",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3",
    "primaryVer": "2023.3",
    "allVersions": [
      "2023.3"
    ],
    "reports": 0,
    "workId": "W-14244285",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000x9TIVAA2",
    "summary": "In Tableau Cloud 2023.3, users may experience long load times followed by an \"Unexpected Server Error\" when attempting to change filters in a published workbook.The issue is a result of a VizQL Server crash.",
    "created": 1697203678000,
    "updated": 1730236842000
  },
  {
    "id": "a028c00000iwh4OAAQ",
    "name": "",
    "title": "TSM Shows Connection Pooling Service in Tableau Server 2022.3",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2022.3.0",
    "primaryVer": "2022.3.0",
    "allVersions": [
      "2022.3.0"
    ],
    "reports": 0,
    "workId": "W-12902054",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000iwh4OAAQ",
    "summary": "An unexpected new process, the \"Connection Pooling Service\", shows in the TSM UI of Tableau Server v2022.3, with 0 process count.Previously tracked under TF item 1477190.",
    "created": 1682346869000,
    "updated": 1719886570000
  },
  {
    "id": "a028c00000uXOEhAAO",
    "name": "",
    "title": "Tableau Server RMT - CPU use maxed out due to continual disk space consumption",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1.2",
    "primaryVer": "2023.1.2",
    "allVersions": [
      "2023.1.2"
    ],
    "reports": 1,
    "workId": "W-13933782",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000uXOEhAAO",
    "summary": "Over a period of time, the Resource Monitoring Tool's postgres database continues to consume more and more diskspace within the hangfire schema.A logic issue prevents the automatic cleanup of some records in these internal tables.",
    "created": 1693231083000,
    "updated": 1771352492000
  },
  {
    "id": "a028c00000x9H3jAAE",
    "name": "",
    "title": "Tableau Server - RMT \"Query History\" details provides inconsistent information, workbook detail fields display \"unknown\" or are missing",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "Server 2022.3, RMT 2023.1",
    "primaryVer": "2022.3",
    "allVersions": [
      "2022.3",
      "2023.1"
    ],
    "reports": 1,
    "workId": "W-14258181",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000x9H3jAAE",
    "summary": "Tableau Resource Monitoring Tool may not capture full details of Data Queries, workbook detail fields display \"unknown\" or are missing entirely.The Query History list shows User, Workbook, and Location fields as \"unknown.\"Individual query history shows Workbook Name, Location, and Site as \"unknown\" or missing.",
    "created": 1696943302000,
    "updated": 1775554717000
  },
  {
    "id": "a028c00000xG5o1AAC",
    "name": "",
    "title": "Tableau Server RMT - Username/Password fields may autocomplete unintentionally",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.1.0",
    "primaryVer": "2022.1.0",
    "allVersions": [
      "2022.1.0"
    ],
    "reports": 0,
    "workId": "W-13899698",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000xG5o1AAC",
    "summary": "If a browser is used in a shared computing environment where more than one person may use the browser, then \"autocomplete\" values may be retrieved or submitted by an unauthorized user when logging into RMT. Additionally, most modern browsers ignore the autocomplete=off attribute, making it crucial that the application controls this appropriately. Expected: The autocomplete feature should be disabled for these fields in the RMT application.",
    "created": 1694710675000,
    "updated": 1730237377000
  },
  {
    "id": "a028c00000uYhOjAAK",
    "name": "",
    "title": "Tableau Server/Desktop - Snowflake Role is sent in uppercase even when wrapped in quotes which should preserve case-sensitivity",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "Server - 2022.1.4, Desktop - 2022.3.5",
    "primaryVer": "2022.1.4",
    "allVersions": [
      "2022.1.4",
      "2022.3.5"
    ],
    "reports": 1,
    "workId": "W-13630830",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000uYhOjAAK",
    "summary": "Connecting from Tableau Desktop or Tableau Server to Snowflake when the Role Name is entered with double quotes results in \u201cInvalid consent request\u201d error.When a role is entered with double quotes in the Tableau server to connect to Snowflake, the role gets capitalized and does not allow it to connect to the Data source. Case sensitivity (lower case) is not retained with the double quotes.",
    "created": 1689686593000,
    "updated": 1719886570000
  },
  {
    "id": "a02g700000Aqc53AAB",
    "name": "",
    "title": "Monthly Schedule Displayed Wrong in Tableau Desktop",
    "status": "Solution in Progress",
    "statusType": "open",
    "foundIn": "2024.2",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 0,
    "workId": "W-24331817",
    "url": "https://help.salesforce.com/s/issue?id=a02g700000Aqc53AAB",
    "summary": "When multiple dates are set in a monthly schedule on Tableau Server, Tableau Desktop only displays the first date in the refresh schedule drop-down menu, omitting the remaining dates.",
    "created": 1790729918000,
    "updated": 1790961379000
  },
  {
    "id": "a028c00000xA66gAAC",
    "name": "",
    "title": "Tableau Server - Ziplogs job fails intermittently due to ZipException: duplicate entry after upgrading Tableau Server 2021.3.7 to 2022.1.11",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.1.11",
    "primaryVer": "2022.1.11",
    "allVersions": [
      "2022.1.11"
    ],
    "reports": 0,
    "workId": "W-14127210",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000xA66gAAC",
    "summary": "Intermittently, a ziplogs job run on Tableau Server will fail due to a java.lang.RuntimeException error.Tracing this error through the Server logs reveals that this is caused by ZipExeception: Duplicate Entry.The issue is observed to occur following an upgrade from Tableau Server version 2021.3.7 to 2022.1.11",
    "created": 1698180098000,
    "updated": 1719886587000
  },
  {
    "id": "a028c00000xanY6AAI",
    "name": "",
    "title": "Tableau Server - When Editing a Flow using Web Edit, the Flow may appear completely blank.",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2023.1.4",
    "primaryVer": "2023.1.4",
    "allVersions": [
      "2023.1.4"
    ],
    "reports": 2,
    "workId": "W-14234238",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000xanY6AAI",
    "summary": "When opening a flow in web edit, sometimes instead of seeing the flow, a blank page may appear. A \"500 Internal Server Error\" may be noticed in the web browser's developer tools console.The error is intermittent, and when the page is refreshed again, the flow starts to display correctly.",
    "created": 1696513344000,
    "updated": 1760947974000
  },
  {
    "id": "a028c00000tIuJHAA0",
    "name": "",
    "title": "Error Code B9F09DDB when using a publish Snowflake live data source from Tableau Server in Tableau Desktop",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.1.12",
    "primaryVer": "2022.1.12",
    "allVersions": [
      "2022.1.12"
    ],
    "reports": 0,
    "workId": "W-13581915",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000tIuJHAA0",
    "summary": "When publishing a live Snowflake data source using specific calculations to Tableau Server and using it as a workbook's data source, the following error may occur:An error occurred while communicating with data source '(data source name)'Error Code:B9F09DDBAn error occurred while communicating with the Snowflake data source '(data source name) (local copy)'SQL compilation error: error line (#) at position (#)'\"t7\".\"$temp1_import1\"' in select clause is neither an aggregate nor in the group by cla",
    "created": 1686756321000,
    "updated": 1719886570000
  },
  {
    "id": "a02g7000005nqvRAAQ",
    "name": "",
    "title": "Tableau Catalog Lineage Missing for Native Union-based Published Data Sources",
    "status": "Solution in Progress",
    "statusType": "open",
    "foundIn": "Any Tableau Server Version",
    "primaryVer": "",
    "allVersions": [],
    "reports": 3,
    "workId": "W-23321444",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000005nqvRAAQ",
    "summary": "When publishing a data source using a physical(Native) Union, Tableau Catalog Lineage and the Metadata API fail to display upstream databases or tables in Tableau Cloud version 2026.2 and any Tableau Server version.",
    "created": 1783332345000,
    "updated": 1791364448000
  },
  {
    "id": "a028c00000uWi84AAC",
    "name": "",
    "title": "Unable to run flow by Prep Builder command line (CLI) if the same Tableau Server is connected more than two times in a flow",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.2, 2022.3, 2022.4, 2023.1, 2023.2",
    "primaryVer": "2022.2",
    "allVersions": [
      "2022.2",
      "2022.3",
      "2022.4",
      "2023.1",
      "2023.2"
    ],
    "reports": 0,
    "workId": "W-13902615",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000uWi84AAC",
    "summary": "An error occurs when using the command line to run the flow which has two connections to the same Tableau Server as input data. See Error Code/Message for detail message.",
    "created": 1692007872000,
    "updated": 1719886594000
  },
  {
    "id": "a028c00000xGJtrAAG",
    "name": "",
    "title": "Data Source Owner is Displayed as \"Hidden User\" even if User Visibility is Set to \"Full\" in Tableau Server 2022.3.4+",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.3.4",
    "primaryVer": "2022.3.4",
    "allVersions": [
      "2022.3.4"
    ],
    "reports": 0,
    "workId": "W-12903785",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000xGJtrAAG",
    "summary": "When connecting to a published data source in Tableau Server or Tableau Desktop, the data source owner name is shown as \"Hidden User\" even if user visibility is set to \"Full\".Originally tracked under Tableau TFS 1506106",
    "created": 1695161315000,
    "updated": 1719886571000
  },
  {
    "id": "a028c00000uYLIgAAO",
    "name": "",
    "title": "Tableau Desktop/Server - Error 63CFBA9A \"[SQLSTATE:42710] database alias name 'dbXXXX' already in use\" Appears Frequently with specific workbooks",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1.0",
    "primaryVer": "2023.1.0",
    "allVersions": [
      "2023.1.0"
    ],
    "reports": 11,
    "workId": "W-13598143",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000uYLIgAAO",
    "summary": "When repeatedly opening and closing a workbook or selecting filters, error 63CFBA9A \"[SQLSTATE:42710] database alias name 'dbXXXX' already in use\" appears irregularly.Please note that this error may occur both in Tableau Desktop as well as Tableau Server.",
    "created": 1689039902000,
    "updated": 1719886589000
  },
  {
    "id": "a028c00000x9YqiAAE",
    "name": "",
    "title": "Tableau Server - Error when exporting site: \"ERROR: insert or update on table \"user_default_customized_views\" violates foreign key constraint \"...",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2021.4.10",
    "primaryVer": "2021.4.10",
    "allVersions": [
      "2021.4.10"
    ],
    "reports": 0,
    "workId": "W-14302414",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000x9YqiAAE",
    "summary": "When attempting to export a site from Tableau Server, the export may fail with the error \"ERROR: insert or update on table \"user_default_customized_views\" violates foreign key constraint \"user_default_customized_views_customized_view_id_fkey\"This issue appears specifically when a custom view has been saved and the option \"Make it my default\" has been selected for that view. Exporting without this option checked is successful.",
    "created": 1697462234000,
    "updated": 1719886593000
  },
  {
    "id": "a028c00000uWkCXAA0",
    "name": "",
    "title": "An unknown error related to remote content was detected (500)\" error when publishing the workbook to Tableau Server that personal space is disabled",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1",
    "primaryVer": "2023.1",
    "allVersions": [
      "2023.1"
    ],
    "reports": 5,
    "workId": "W-13827661",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000uWkCXAA0",
    "summary": "Tableau Desktop 2023.1 encountered the following error when publishing the workbook to\u00a0Tableau Server personal space is disabled.-----Unable to complete actionAn error occurred when publishing the workbook.Error Code:0xC926DA9FAn unknown error related to remote content was detected (500)",
    "created": 1692028925000,
    "updated": 1719886570000
  },
  {
    "id": "a028c00000uYN3sAAG",
    "name": "",
    "title": "Port number is missing in the Share View URL on Tableau Server 2022.3 or later with a non-default gateway port being used",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.3+",
    "primaryVer": "2022.3",
    "allVersions": [
      "2022.3"
    ],
    "reports": 0,
    "workId": "W-13714546",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000uYN3sAAG",
    "summary": "The URL link which is generated by pressing Share View button is missing a port number. This issue is reproduced on Tableau Server 2022.3 or later with a non-default gateway port being used.",
    "created": 1689080952000,
    "updated": 1730237556000
  },
  {
    "id": "a028c00000xaznMAAQ",
    "name": "",
    "title": "Tableau Server/Cloud - When adding an Azure SQL Database as an input source in the Flow Editor, \"Validation Failed...\" error appears",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.2.0",
    "primaryVer": "2023.2.0",
    "allVersions": [
      "2023.2.0"
    ],
    "reports": 0,
    "workId": "W-13827676",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000xaznMAAQ",
    "summary": "When adding an Azure SQL Database as an input source in the Flow Editor from Tableau Server or Tableau Cloud, the following error may appear after signing in:\"Validation failed for your input Oauth custom domain: https://example.net (error code=170006)\"",
    "created": 1696862430000,
    "updated": 1719886600000
  },
  {
    "id": "a02g7000005ekm1AAA",
    "name": "",
    "title": "Error running \"Run Optimizer\" in Tableau Desktop 2026.2.",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 20,
    "workId": "W-23183444",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000005ekm1AAA",
    "summary": "In Tableau Desktop 2026.2, attempting to run the Run Optimizer function from the Server menu results in a script error, preventing users from successfully optimizing their workbooks.When clicking \"Run Optimizer\", the application throws the following error messages and aborts the action:HybridDialog JS is not responding across webchannel. Aborting show \u2014 Error Code: 2B2D38E4TypeError: Cannot read properties of undefined (reading 'apply')",
    "created": 1782709753000,
    "updated": 1792507251000
  },
  {
    "id": "a028c00000tJCCLAA4",
    "name": "",
    "title": "Error \"you must have the Connection permission for its data source\" When Opening Space Usage Admin View If There are multiple sites in Tableau Server",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1.1",
    "primaryVer": "2023.1.1",
    "allVersions": [
      "2023.1.1"
    ],
    "reports": 1,
    "workId": "W-13155154",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000tJCCLAA4",
    "summary": "If there are more than 1 site in Tableau Server, when opening\u00a0Site Status / Stats for Space Usage,\u00a0an error may occurs and unable to see the view.Forbidden ActionYou are not authorized to perform this action. (20)To access this workbook, you must have the Connect permission for its data source.",
    "created": 1687311368000,
    "updated": 1719886571000
  },
  {
    "id": "a02Ka00000mm8NVIAY",
    "name": "",
    "title": "Embedded dashboards containing web objects that redirect to LAN resources fail to load in Chrome 142+ due to Local Network Access (LNA) restrictions",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2025.3.3",
    "primaryVer": "2025.3.3",
    "allVersions": [
      "2025.3.3"
    ],
    "reports": 2,
    "workId": "W-21554597",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mm8NVIAY",
    "summary": "Dashboards that contain web objects pointing to resources hosted on a Local Area Network (LAN) may fail to load when the dashboard is embedded and viewed in Google Chrome version 142 or later. This behavior is caused by Chrome\u2019s Local Network Access (LNA) security restrictions, which block requests from public web pages to private network resources. As a result, the embedded dashboard may display a blank area or an error indicator where the web object should appear.",
    "created": 1773424948000,
    "updated": 1777943374000
  },
  {
    "id": "a028c00000peqXwAAI",
    "name": "",
    "title": "When installing Tableau Server in a container, the environment variables HTTP_PROXY and HTTPS_PROXY are no longer recognized",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.3.5",
    "primaryVer": "2022.3.5",
    "allVersions": [
      "2022.3.5"
    ],
    "reports": 0,
    "workId": "W-13213604",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000peqXwAAI",
    "summary": "When installing Tableau Server in a Docker container, and using a forward proxy to connect to the internet, the installation fails. The environment variables HTTP_PROXY and HTTPS_PROXY are no longer recognized, making it impossible to reach the ATR service for licensing. ",
    "created": 1684358876000,
    "updated": 1730237667000
  },
  {
    "id": "a028c00000xA0OFAA0",
    "name": "",
    "title": "Tableau Server - Port number is missing in the Share View URL on Tableau Server 2023.1 or later with a non-default gateway port used",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.3+",
    "primaryVer": "2022.3",
    "allVersions": [
      "2022.3"
    ],
    "reports": 0,
    "workId": "W-13483869",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000xA0OFAA0",
    "summary": "The URL link which is generated by pressing Share View button is missing a port number. This issue is reproduced on Tableau Server 2022.3 or later with a non-default gateway port being used.",
    "created": 1698078902000,
    "updated": 1719886594000
  },
  {
    "id": "a02g700000CHDRlAAP",
    "name": "",
    "title": "Table names are blank when connecting to Published Data Sources with an inner join on Tableau Desktop 2026.3.0",
    "status": "Solution in Progress",
    "statusType": "open",
    "foundIn": "2026.3.0",
    "primaryVer": "2026.3.0",
    "allVersions": [
      "2026.3.0"
    ],
    "reports": 0,
    "workId": "W-23952654",
    "url": "https://help.salesforce.com/s/issue?id=a02g700000CHDRlAAP",
    "summary": "In Tableau Desktop 2026.3.0, Table names appear blank for tables connected via joins in published datasources on Tableau Cloud and Tableau Server; however, the table names appear correctly when opening a locally saved .tds file or in Tableau Desktop 2026.2.3 or below.",
    "created": 1792705949000,
    "updated": 1792709454000
  },
  {
    "id": "a028c00000suSwxAAE",
    "name": "",
    "title": "Tableau Server - Subscription result shows stale for dynamic parameter, different from rendering the view",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2021.4.5",
    "primaryVer": "2021.4.5",
    "allVersions": [
      "2021.4.5"
    ],
    "reports": 0,
    "workId": "W-12865572",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000suSwxAAE",
    "summary": "When using dynamic parameters in the dashboard to show yesterday's date (calculation: today()-1), subscriptions will sometimes show today's data instead of yesterday's data.However, when accessing the view directly, the view shows yesterday's data correctly.",
    "created": 1695236481000,
    "updated": 1719886570000
  },
  {
    "id": "a028c00000uYS5iAAG",
    "name": "",
    "title": "Hyper Server Closes the Connection Unexpectedly when connect to data source from Tableau Desktop or Tableau Prep Builder",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.2",
    "primaryVer": "2023.2",
    "allVersions": [
      "2023.2"
    ],
    "reports": 4,
    "workId": "W-13607869",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000uYS5iAAG",
    "summary": "When connect to data source from Tableau Desktop 2023.2 occur the error \"[SQLSTATE:HY000] The call to `select()` failed: Connection reset by peer (0x00002746/10054)\"This also occurs in Tableau Prep Builder:When connecting to a file that contains Non-ASCII character (such as \"\u2460\") in the file name from Tableau Prep Builder 2023.2, the following error message appears or data load does not finish.",
    "created": 1689217021000,
    "updated": 1780616002000
  },
  {
    "id": "a02Ka00000mHGL2IAO",
    "name": "",
    "title": "Tableau Desktop Crashes Silently on Apple Silicon Mac When Publishing to Tableau Cloud",
    "status": "Solution in Progress",
    "statusType": "open",
    "foundIn": "Tableau Desktop 2026.1 and Tableau Desktop 2026.2",
    "primaryVer": "2026.1",
    "allVersions": [
      "2026.1",
      "2026.2"
    ],
    "reports": 12,
    "workId": "W-22247390",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mHGL2IAO",
    "summary": "Users running Tableau Desktop on Mac devices with Apple Silicon processors (M-series chips) may experience a silent crash \u2014 with no error dialog \u2014 when attempting to publish a workbook to Tableau Cloud or Tableau Server. The crash occurs during the publish operation and results in Tableau Desktop closing unexpectedly.\u00a0",
    "created": 1781706233000,
    "updated": 1791841936000
  },
  {
    "id": "a02Ka00000mmE34IAE",
    "name": "",
    "title": "Query Without WHERE Clause Issued When Executing a Flow Containing a Join Between a Denodo Data Source and a Published Data Source",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2024.2.15",
    "primaryVer": "2024.2.15",
    "allVersions": [
      "2024.2.15"
    ],
    "reports": 0,
    "workId": "W-21353304",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mmE34IAE",
    "summary": "When joining a Denodo table and a published data source in a flow, a query without a WHERE clause is issued against the Denodo table during execution, even if an input filter is applied to it.",
    "created": 1773740066000,
    "updated": 1789777368000
  },
  {
    "id": "a028c00000ixQSfAAM",
    "name": "",
    "title": "Site imported content does not display immediately in the new site without the search index being rebuilt starting with Tableau Server version 2022.3.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.3.0",
    "primaryVer": "2022.3.0",
    "allVersions": [
      "2022.3.0"
    ],
    "reports": 0,
    "workId": "W-12903298",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000ixQSfAAM",
    "summary": "Site imported content does not display immediately in the new site without the search index being rebuilt starting with Tableau Server version 2022.3.Originally tracked under TFS 1500310",
    "created": 1683930157000,
    "updated": 1727371225000
  },
  {
    "id": "a028c00000yz5ODAAY",
    "name": "",
    "title": "Non-admin users are unable to get the schedules.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.3.14, 2023.1.10, 2023.3.3",
    "primaryVer": "2022.3.14",
    "allVersions": [
      "2022.3.14",
      "2023.1.10",
      "2023.3.3"
    ],
    "reports": 120,
    "workId": "W-14526335",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yz5ODAAY",
    "summary": "Note: This Known Issue only applies to versions 2023.3.x and earlier. There is a similar issue in newer versions of the product referenced under a separate Work Item here.Users without administrative privileges (users other than server or site admins) are unable to view extract or subscription schedules or assign schedules, as the list appears empty. \ufeff",
    "created": 1710325904000,
    "updated": 1783346066000
  },
  {
    "id": "a028c00000xaol6AAA",
    "name": "",
    "title": "Tableau Desktop/Server - \"A query error occurred. No Description Available\" appears when using the \"Describe Field\" functionality for String datatypes",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1",
    "primaryVer": "2023.1",
    "allVersions": [
      "2023.1"
    ],
    "reports": 0,
    "workId": "W-14166032",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000xaol6AAA",
    "summary": "When using the Describe Field functionality on a field with a string data type in Tableau Desktop or Tableau Server web edit 2023.1.3 or newer (note: only in the 2023.1 branch) with a datasource containing relationships or joins, a generic \"A query error occurred. No description available.\" error is thrown.Please note that this behavior is observed both in Tableau Desktop as well as in the Web Authoring function of Tableau Server. ",
    "created": 1696533506000,
    "updated": 1719950697000
  },
  {
    "id": "a028c00000uXRUxAAO",
    "name": "",
    "title": "Tableau Server/Cloud - Dynamic Zone Visibility does not function on shared sessions (such as on browser tab duplication)",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.3+",
    "primaryVer": "2022.3",
    "allVersions": [
      "2022.3"
    ],
    "reports": 6,
    "workId": "W-14031469",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000uXRUxAAO",
    "summary": "In circumstances where a session is cloned in Tableau Server/Tableau Cloud, Dynamic Zone Visibility(DZV) does not function. This is most easily reproduced by duplicating a browser tab containing a dashboard using DZV, but reproduces in all other cases where shared sessions are used as well. The issue can be observed regardless of client- or server- side rendering.The issue has been observed in versions 2022.3+",
    "created": 1693315864000,
    "updated": 1719886594000
  },
  {
    "id": "a028c00000uVsPhAAK",
    "name": "",
    "title": "Tableau Server - Blank content when downloading via API Call if Polish characters are used",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1.2",
    "primaryVer": "2023.1.2",
    "allVersions": [
      "2023.1.2"
    ],
    "reports": 3,
    "workId": "W-13836853",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000uVsPhAAK",
    "summary": "Issue in downloading workbook and data source definitions when there are Polish characters in the name (characters from the UTF-8 set). This issue happens if the user wants to download it through an API call.\ufeff",
    "created": 1690810414000,
    "updated": 1730237489000
  },
  {
    "id": "a028c00000uWMPPAA4",
    "name": "",
    "title": "Sorting 'Top Level Projects' in Tableau Cloud or Tableau Server results in \"There are no projects\" message",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.3.2",
    "primaryVer": "2022.3.2",
    "allVersions": [
      "2022.3.2"
    ],
    "reports": 1,
    "workId": "W-13651434",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000uWMPPAA4",
    "summary": "Sorting 'Top Level Projects' in Tableau Cloud or Tableau Server results in \"There are no projects\" message",
    "created": 1691540345000,
    "updated": 1719886594000
  },
  {
    "id": "a02Ka00000fubeZIAQ",
    "name": "",
    "title": "Dashboard fails with \"Errore Interno\" when language is set to Italian",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2025.2.0",
    "primaryVer": "2025.2.0",
    "allVersions": [
      "2025.2.0"
    ],
    "reports": 0,
    "workId": "18713361",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000fubeZIAQ",
    "summary": "Accessing a Workbook on either Tableau Cloud/Server, when preferred language is set to Italian, cause the view/dashboard not to render. Errore interno - Si \u00e8 verificato un errore imprevisto e non \u00e8 stato possibile completare l\u2019operazione.",
    "created": 1750414115000,
    "updated": 1750860287000
  },
  {
    "id": "a02g7000009ntuDAAQ",
    "name": "",
    "title": "Snowflake keypair auth: Tableau Desktop \"Refresh from Source\" fails silently for published datasources (E4DAAEC1)",
    "status": "Solution in Progress",
    "statusType": "open",
    "foundIn": "2026.2.2",
    "primaryVer": "2026.2.2",
    "allVersions": [
      "2026.2.2"
    ],
    "reports": 1,
    "workId": "W-24212900",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000009ntuDAAQ",
    "summary": "Refreshing a published Snowflake datasource from Tableau Desktop using Refresh from Source fails when the datasource uses Snowflake key-pair authentication. Tableau Desktop does not have access to the private key used for key-pair authentication \u2014 similar to how embedded credentials are not shared between users \u2014 so the refresh cannot complete and the operation fails with an error. The same Refresh from Source action completes successfully when the datasource uses Snowflake username/password or ",
    "created": 1789670096000,
    "updated": 1791460282000
  },
  {
    "id": "a028c00000uVrccAAC",
    "name": "",
    "title": "Email notifications of Tableau Server process events (up, down, and failover) might not be sent intermittently in Tableau Server multi-node",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2021.4.11+",
    "primaryVer": "2021.4.11",
    "allVersions": [
      "2021.4.11"
    ],
    "reports": 0,
    "workId": "W-13779789",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000uVrccAAC",
    "summary": "Email notifications of Tableau Server process events (up, down, and failover) might not be sent intermittently in Tableau Server multi-node",
    "created": 1690783928000,
    "updated": 1719886570000
  },
  {
    "id": "a028c00000tJeiUAAS",
    "name": "",
    "title": "Attempting to create an extract using web edit in Tableau Server 2023.1 or 2023.3 on Ubuntu fails",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1.2",
    "primaryVer": "2023.1.2",
    "allVersions": [
      "2023.1.2"
    ],
    "reports": 15,
    "workId": "W-13665676",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000tJeiUAAS",
    "summary": "Attempting to create an extract using web edit in Tableau Server 2023.1 or 2023.3 on Ubuntu fails with an error.",
    "created": 1687985847000,
    "updated": 1719886597000
  },
  {
    "id": "a028c00000tIRz8AAG",
    "name": "",
    "title": "Browser context menu not displaying when right-clicking in search box for filters in tableau server 2021.2+",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2021.2.12",
    "primaryVer": "2021.2.12",
    "allVersions": [
      "2021.2.12"
    ],
    "reports": 2,
    "workId": "W-12862600",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000tIRz8AAG",
    "summary": "When right-clicking the text box for a wildcard filter in a published view, no menu to copy/paste/etc is displayed.\u00a0\u00a0",
    "created": 1685568682000,
    "updated": 1734438230000
  },
  {
    "id": "a028c00000uYpVvAAK",
    "name": "",
    "title": "Tableau Server - \"Add User to Site\" REST API call using ServerDefault returns error code 400003 for non-SAML users after Site SAML has been enabled",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1",
    "primaryVer": "2023.1",
    "allVersions": [
      "2023.1"
    ],
    "reports": 1,
    "workId": "W-13767821",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000uYpVvAAK",
    "summary": "On Tableau Server 2023.1, the REST API call \"Add User to Site\" fails with error code=\"400003\" and error \"Payload is either malformed or incomplete\", if:Site SAML has been enabled on the server (note: this happens immediately after enabling Site SAML, regardless of whether or not a Site SAML site has actually been configured for a site)The payload for the user contains: \"authSetting\":\"ServerDefault\"Despite the error, the user is actually created on the server as expected.",
    "created": 1689772944000,
    "updated": 1719886589000
  },
  {
    "id": "a028c00000xA0FqAAK",
    "name": "",
    "title": "Tableau Server - Data source information may layer on top of \"Fields in Use\" when viewing Data Details",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.x",
    "primaryVer": "",
    "allVersions": [],
    "reports": 0,
    "workId": "W-13841166",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000xA0FqAAK",
    "summary": "When viewing the Data Details in a workbook using connections to multiple data sources, the text details may begin to spill over/overlap the \"Fields in Use\" section, per the screenshot below:",
    "created": 1698073531000,
    "updated": 1719886594000
  },
  {
    "id": "a02g70000096a6rAAA",
    "name": "",
    "title": "Cookie console warning appears when Tableau dashboards are embedded cross-site",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2025.3.1",
    "primaryVer": "2025.3.1",
    "allVersions": [
      "2025.3.1"
    ],
    "reports": 0,
    "workId": "W-24067044",
    "url": "https://help.salesforce.com/s/issue?id=a02g70000096a6rAAA",
    "summary": "When a Tableau dashboard is embedded in an iframe on a different domain, the browser console may show a rejected-cookie warning even though the dashboard loads and functions normally. This affects Tableau Server 2025.3.1 and later, and does not occur in Tableau 2024.2.6 and earlier. The warning is cosmetic \u2014 no dashboard functionality is broken. ",
    "created": 1788942808000,
    "updated": 1788978165000
  },
  {
    "id": "a028c00000tIRy5AAG",
    "name": "",
    "title": "Tableau Server (Windows) - ZstdOutputStream in zstd-jni leaking thread handles on Windows when running backup with multithreaded option",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2020.4.15",
    "primaryVer": "2020.4.15",
    "allVersions": [
      "2020.4.15"
    ],
    "reports": 4,
    "workId": "W-12326893",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000tIRy5AAG",
    "summary": "When taking a backup of a Tableau Server installation on Windows, and using the multi-threaded option, zstd-jni (a compression algorithm) may leak thread handles. ",
    "created": 1685566099000,
    "updated": 1719886588000
  },
  {
    "id": "a02Ka00000llBKdIAM",
    "name": "",
    "title": "Inaccurate Warning Message When Updating Project Owner in Tableau 2025.3.x",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "Summer '16",
    "primaryVer": "",
    "allVersions": [],
    "reports": 1,
    "workId": "W-20629183",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000llBKdIAM",
    "summary": "In Tableau Cloud and Tableau Server version 2025.3.x, when changing the owner of a project, Tableau displays a warning message indicating that embedded credentials will be removed and that refresh schedules will stop.However, based on observed behavior, embedded credentials in workbooks and data sources within the project are not removed after the project ownership change. Refresh schedules continue to function as before.This makes the warning message misleading for this specific scenario.Notifi",
    "created": 1766394979000,
    "updated": 1783641177000
  },
  {
    "id": "a028c00000uXpOHAA0",
    "name": "",
    "title": "Tableau Server Linux - RMT Default Installation may fail with \"\"chown: invalid group: `tabrmt-agent:rmtagentapp' or \" `tabrmt-master:rmtmasterapp'\"",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2023.1.5",
    "primaryVer": "2023.1.5",
    "allVersions": [
      "2023.1.5"
    ],
    "reports": 0,
    "workId": "W-14082246",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000uXpOHAA0",
    "summary": "When performing a new default installation the Resource Monitoring Tool Agent the installation will fail with an error message: \"chown: invalid group: `tabrmt-agent:rmtagentapp'\" OR `tabrmt-master:rmtmasterapp'\"This issue is only present in Linux environments in 2023.1.5. Cause is identified to be faulty logic which prevents creation of necessary groups.\u00a0",
    "created": 1694034165000,
    "updated": 1732211129000
  },
  {
    "id": "a028c00000zk0HRAAY",
    "name": "",
    "title": "Extract Folder Unexpectedly Growing in Size After Upgrade to 2024.2.3+",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.3+",
    "primaryVer": "2024.2.3",
    "allVersions": [
      "2024.2.3"
    ],
    "reports": 86,
    "workId": "W-17453634",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zk0HRAAY",
    "summary": "After an in-place upgrade to Tableau Server 2024.2.3+, old extract files/folders are intermittently not being reaped/deleted, causing the size of the dataengine/extract folder to continually increase.",
    "created": 1734447094000,
    "updated": 1784309139000
  },
  {
    "id": "a02Ka00000lYMRiIAO",
    "name": "",
    "title": "Live And Extract Data Connections Using The Tableau Data Cloud Connector Display \"[SQLSTATE:HY000] RST_STREAM\" Error Message",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2025.1.1",
    "primaryVer": "2025.1.1",
    "allVersions": [
      "2025.1.1"
    ],
    "reports": 1,
    "workId": "W-18878424",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000lYMRiIAO",
    "summary": "Tableau users connecting to Data Cloud via a live connection or with an extract using the Data Cloud Connector for Tableau Cloud or Tableau Server may experience failures with the following messages:[SQLSTATE:HY000] RST_STREAM[SQLSTATE:HY000] Socket closedConnection reset by peer.The Hyper server closed the connection unexpectedly.",
    "created": 1764006498000,
    "updated": 1772549615000
  },
  {
    "id": "a02Ka00000kU2COIA0",
    "name": "",
    "title": "\u201cAn error occurred while communicating with PDF file\u201d with Uploaded PDF Input in Tableau Prep Flows After Publishing or Editing",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1.6",
    "primaryVer": "2025.1.6",
    "allVersions": [
      "2025.1.6"
    ],
    "reports": 0,
    "workId": "W-19645493",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000kU2COIA0",
    "summary": "When a PDF file is configured as a data input in a Tableau Prep flow, the execution of the flow may fail after being published to Tableau Cloud/Server or upon reopening the flow in Tableau Prep Builder.An error occurred while communicating with PDF fileUnable to connect to the file \"{fileName}.pdf\". Check that the file exists and that you have sufficient access privileges for it.This error message is misleading because it implies an issue with file existence or user permissions, even though the ",
    "created": 1761541762000,
    "updated": 1766511837000
  },
  {
    "id": "a028c00000uYetHAAS",
    "name": "",
    "title": "After Upgrading To Tableau Server 2023.1.2, FQDN In The URL Browser Opens With After Publishing Is Set To The Value Of gateway.public.host",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2021.4.18-.20 2022.1.14-.16 2022.3.6-.8 2023.1.2-.4",
    "primaryVer": "2021.4.18",
    "allVersions": [
      "2021.4.18",
      "2022.1.14",
      "2022.3.6",
      "2023.1.2"
    ],
    "reports": 9,
    "workId": "W-13671399",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000uYetHAAS",
    "summary": "After upgrading to Tableau Server 2023.1.2, FQDN in the URL browser opens with after publishing is set to the value of gateway.public.host, regardless of The Server name specified at login.",
    "created": 1689649294000,
    "updated": 1719886574000
  },
  {
    "id": "a02Ka00000gZN3ZIAW",
    "name": "",
    "title": "Server Offline Activation File Upload Fails with Error Referencing Either \"Invalid Identity\" or \"Unknown Error\"",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2025.1, 2024.2, 2023.3, 2023.1, 2022.3",
    "primaryVer": "2025.1",
    "allVersions": [
      "2025.1",
      "2024.2",
      "2023.3",
      "2023.1",
      "2022.3"
    ],
    "reports": 3,
    "workId": "W-18963439",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000gZN3ZIAW",
    "summary": "The Tableau Development team is currently investigating the following issue that is currently known to impact a small number of customers using Updatable Subscription Licensing (USL) keys when attempting to activate Tableau Server offline.IssueWhen submitting an offline activation file while following the Activate Tableau Server Offline process,  one of the following error messages is received, depending on the Activation Method (Flexera vs ATR) in use:For Flexera activation: \"We are unable to p",
    "created": 1751578308000,
    "updated": 1770795032000
  },
  {
    "id": "a028c00000uYLJ0AAO",
    "name": "",
    "title": "Tableau Prep Builder added client security token accumulates in Tableau Server and this causes exceeded_max_refresh_token_count error",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 0,
    "workId": "W-13499848",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000uYLJ0AAO",
    "summary": "When using Prep Command Line to run a flow, each time a flow runs it adds a new connected client entry to the users account and the connection never goes away. It has to be manually deleted. If there are too many connections token limit errors for all clients that connect to TS start to occur: Desktop, Prep, etc.In addition, creating Personal Access Tokens also results in an error.",
    "created": 1689041082000,
    "updated": 1719886594000
  },
  {
    "id": "a02Ka00000lZrsfIAC",
    "name": "",
    "title": "Tableau Bridge Connections Fail Due to \"WebSocket connection closed\" Error After Tableau Cloud 2025.3 Upgrade",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.3",
    "primaryVer": "2025.3",
    "allVersions": [
      "2025.3"
    ],
    "reports": 9,
    "workId": "W-20251300",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000lZrsfIAC",
    "summary": "The connection to data source via Tableau Bridge fails intermittently with the errorError executing subquery id: \"<number>\"HTTP ConflictUnable to connect to the server \"<Server URL>\". Check that the server is running and that you have access privileges to the requested database.DataServiceFailureThe issue may happen when connecting to a data source via Tableau Bridge, and it is particularly prevalent when long queries containing multibyte characters are executed internally.",
    "created": 1764829119000,
    "updated": 1770833367000
  },
  {
    "id": "a028c00000ixGWVAA2",
    "name": "",
    "title": "On Tableau Cloud/Server, the action item \"Resume\" found under Tasks for Suspended jobs is no longer working",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1",
    "primaryVer": "2023.1",
    "allVersions": [
      "2023.1"
    ],
    "reports": 1,
    "workId": "W-13161814",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000ixGWVAA2",
    "summary": "On Tableau Cloud/Server, the action item \"Resume\" found under Tasks for Suspended jobs is no longer working and is returning a 404 to the end user in the console.",
    "created": 1683640002000,
    "updated": 1719886589000
  },
  {
    "id": "a028c00000uXnQvAAK",
    "name": "",
    "title": "Unable to run flow by Prep Command Line Interface (CLI)  When virtual connection and another data source from the same Tableau Server or Tableau Cloud",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 0,
    "workId": "W-14075693",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000uXnQvAAK",
    "summary": "An error occurs when using the Tableau Prep command line (CLO) to run the flow, which uses a virtual connection and published data source from the same Tableau Cloud/Server.",
    "created": 1693990941000,
    "updated": 1719886597000
  },
  {
    "id": "a02g7000005s7o1AAA",
    "name": "",
    "title": "Error Code: D2E8DA72 when loading workbooks with unused extensions in Tableau Desktop and in web authoring",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2026.2.0",
    "primaryVer": "2026.2.0",
    "allVersions": [
      "2026.2.0"
    ],
    "reports": 2,
    "workId": "W-23291479",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000005s7o1AAA",
    "summary": "In Tableau Desktop 2026.2.0 and web authoring in Tableau Cloud and Tableau Server 2026.2.0, workbooks can be saved with one or more unused extensions. These unused extension are not tied to any worksheet, dashboard or storypoints.\u00a0When opening workbooks that contain unused extensions in Tableau Desktop, users encounter Error Code: D2E8DA72 and details such as:no declaration found for element 'worksheet-extension'attribute 'extension-version' is not declared for element 'worksheet-extension'attri",
    "created": 1783536607000,
    "updated": 1789555946000
  },
  {
    "id": "a02g700000BgXyvAAF",
    "name": "",
    "title": "Auto-contrast for mark label text in Tableau intermittently fails on dark fills",
    "status": "Solution in Progress",
    "statusType": "open",
    "foundIn": "2025.3.6",
    "primaryVer": "2025.3.6",
    "allVersions": [
      "2025.3.6"
    ],
    "reports": 1,
    "workId": "W-24275494",
    "url": "https://help.salesforce.com/s/issue?id=a02g700000BgXyvAAF",
    "summary": "Tableau Desktop and Server auto contrast feature intermittently fails to adjust mark label font color based on the background fill. When using automatic text coloring on dark marks, the label text may render in black instead of a high-contrast light color, making the text invisible or difficult to read.",
    "created": 1791966350000,
    "updated": 1792590194000
  },
  {
    "id": "a02Ka00000mm7k2IAA",
    "name": "",
    "title": "Duplicate sheets seen after workbook connected to Amazon Athena (private cloud) is published to Tableau Cloud with Tableau Bridge.",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 0,
    "workId": "W-21566214",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mm7k2IAA",
    "summary": "Duplicate sheets are seen in a workbook after that workbook is published to Tableau Cloud. That workbook is connected to Amazon Athena Private cloud with a Tableau Bridge connection.These copies of the sheets in that workbook give the following error \u201cUnexpected Server Error.\u201d when clicked on. ",
    "created": 1773390787000,
    "updated": 1782827021000
  },
  {
    "id": "a02Ka00000mmFreIAE",
    "name": "",
    "title": "Tableau Mobile App on IOS 26.3 fails to login to Tableau Cloud",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2026.1.0",
    "primaryVer": "2026.1.0",
    "allVersions": [
      "2026.1.0"
    ],
    "reports": 21,
    "workId": "W-21640867",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mmFreIAE",
    "summary": "When trying to sign into Tableau Cloud using Tableau Mobile App on iOS 26.3(version 26.223.10380), it returns an error messageTableau Server cannot complete the operation because the repository is not available. ",
    "created": 1773811613000,
    "updated": 1783906799000
  },
  {
    "id": "a028c00000x9VkqAAE",
    "name": "",
    "title": "Cannot paste multi-line text into a text box in web editing in Tableau Server 2023.1 or newer and in Tableau Cloud",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2023.1 or newer versions",
    "primaryVer": "2023.1",
    "allVersions": [
      "2023.1"
    ],
    "reports": 0,
    "workId": "W-14089673",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000x9VkqAAE",
    "summary": "When pasting text with two or more lines into the text box of the web editing dashboard, the values do not get reflected in the text box:",
    "created": 1697252056000,
    "updated": 1719886589000
  },
  {
    "id": "a02Ka00000mo674IAA",
    "name": "",
    "title": "Performance Degradation on SAP HANA Workbooks using Tableau Bridge",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 0,
    "workId": "W-21979228",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mo674IAA",
    "summary": "Users may experience a performance disparity when interacting with SAP HANA data sources on Tableau Cloud compared to Tableau Server. When routing requests through Tableau Bridge, query processing times and overall dashboard responsiveness may be notably extended relative to local server environments.",
    "created": 1776670927000,
    "updated": 1785429602000
  },
  {
    "id": "a028c00000ixB18AAE",
    "name": "",
    "title": "Tableau Desktop/Server - Connection to OData data source fails in 2023.1.0 with a \"Tableau failed to create extract\" error.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1.0",
    "primaryVer": "2023.1.0",
    "allVersions": [
      "2023.1.0"
    ],
    "reports": 4,
    "workId": "W-13155241",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000ixB18AAE",
    "summary": "When connecting to an OData data source that does not require authentication, the following  error might occur: Tableau failed to create an extract. This data source requires an extract before you can start your analysis.Click Edit Data Source, and then click the sheet tab to create the required extract.Click Continue to proceed without creating the required extract.An error occurred while communicating with the OData data source (OData URL)null [HTTP/1.1 403 Forbidden]Unable to create extract",
    "created": 1683322082000,
    "updated": 1719886588000
  },
  {
    "id": "a02Ka00000gZs84IAC",
    "name": "",
    "title": "When using English (South African) locale, number formatting is incorrect in 2025.x",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2025.1.0",
    "primaryVer": "2025.1.0",
    "allVersions": [
      "2025.1.0"
    ],
    "reports": 1,
    "workId": "18963890",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000gZs84IAC",
    "summary": "In 2025.x version, Number formatting with English (South Africa) locale: thousands separators show as commas and decimals as periods (like US format)The issue affects Tableau Desktop/Server",
    "created": 1751962753000,
    "updated": 1751981026000
  },
  {
    "id": "a02g7000005gxwrAAA",
    "name": "",
    "title": "Table names are blank when connecting to Published Data Sources with an inner join on Tableau Desktop 2026.2.0",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2026.2.0",
    "primaryVer": "2026.2.0",
    "allVersions": [
      "2026.2.0"
    ],
    "reports": 19,
    "workId": "W-23252399",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000005gxwrAAA",
    "summary": "In Tableau Desktop 2026.2.0, Table names appear blank for tables connected via joins in published datasources on Tableau Cloud and Tableau Server; however, the table names appear correctly when opening a locally saved .tds file or in Tableau Desktop 2026.1.2 or below.",
    "created": 1782845402000,
    "updated": 1790525840000
  },
  {
    "id": "a02Ka00000moChsIAE",
    "name": "",
    "title": "TSM commands return a \"Unable to verify the server's HTTPS certificate\" message.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 0,
    "workId": "W-22158361",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000moChsIAE",
    "summary": "TSM commands return a \"Unable to verify the server's HTTPS certificate\" message when they are not run on the primary node. This can be seen in Tableau Server 2025.3.",
    "created": 1777031052000,
    "updated": 1784756171000
  },
  {
    "id": "a02g7000006OohmAAC",
    "name": "",
    "title": "Tableau Cloud: Composable Datasource feature fails when using an extracted Google Big Query connection.",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 1,
    "workId": "W-23448539",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000006OohmAAC",
    "summary": "When a user attempts to compose two Published Data Source where one or both use an extracted Google BigQuery connection, Tableau returns an \"Unexpected Server Error\" or an \"Unable to complete action\" message stating the data source cannot be related to other data sources.",
    "created": 1784623960000,
    "updated": 1787774378000
  },
  {
    "id": "a028c000010FifqAAC",
    "name": "",
    "title": "Admin Insight Site Content data source is not displaying all certified data sources",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2025.1.0",
    "primaryVer": "2025.1.0",
    "allVersions": [
      "2025.1.0"
    ],
    "reports": 6,
    "workId": "W-17942856",
    "url": "https://help.salesforce.com/s/issue?id=a028c000010FifqAAC",
    "summary": "Admin Insight \"Site Content\" data source on Tableau Cloud is not displaying all certified data sources. The count of certified data sources compared to the UI is incorrect. Even after the refresh is successful, the count is incorrect.",
    "created": 1740993675000,
    "updated": 1792487275000
  },
  {
    "id": "a028c00000ix1xGAAQ",
    "name": "",
    "title": "Tableau Server: After an upgrade from TS 2020.4.6 to 2021.3.8, excel and pdf exports via REST API have different values (intermittently)",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2021.3.8",
    "primaryVer": "2021.3.8",
    "allVersions": [
      "2021.3.8"
    ],
    "reports": 1,
    "workId": "W-12863889",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000ix1xGAAQ",
    "summary": "Post REST API upgrade (v3.10 to v3.13) data from downloaded excel and pdf files are inconsistent.\u00a0The API calls show wrong data or data mismatch when report is downloaded as Excel/PDF using API calls.Previously tracked in TFS 1435326.",
    "created": 1683048612000,
    "updated": 1727372588000
  },
  {
    "id": "a02Ka00000mH3nKIAS",
    "name": "",
    "title": "Intermittent \u201cSession Not Found\u201d Error When Connecting to Published Data Source with Multi-Fact Relationship from Tableau Desktop",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "Tableau Server  2024.x, 2025.x, 2026.x .",
    "primaryVer": "",
    "allVersions": [],
    "reports": 4,
    "workId": "W-22925363",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mH3nKIAS",
    "summary": "Attempts to Connect from Tableau Desktop to a Published Data Source with Multi-Fact Relationships on Tableau Server where Vizdataservice Nodes Have Been Removed and Added Back May Result in Errors.Version(s) Affected: 2024.x, 2025.x, 2026.x .",
    "created": 1781082933000,
    "updated": 1785170919000
  },
  {
    "id": "a028c00000uY28qAAC",
    "name": "",
    "title": "Tableau Cloud - When opening views users intermittently see: \"Tableau server (version) encountered an error while working with this worksheet\"",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.2",
    "primaryVer": "2023.2",
    "allVersions": [
      "2023.2"
    ],
    "reports": 24,
    "workId": "W-13710608",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000uY28qAAC",
    "summary": "When opening views on Tableau Cloud, users intermittently receive an error: \"Tableau server (version 20231.23.0320.2007) encountered an error while working with this worksheet\"Customers are intermittently getting 502 errors while rendering or interacting views due to Vizqlserver crashing frequently.",
    "created": 1688658474000,
    "updated": 1730237579000
  },
  {
    "id": "a02Ka00000mGqQLIA0",
    "name": "",
    "title": "The Blue Icon Showing Data Source Usage in Tableau Prep Flow Disappears When Table Names in Virtual Connections Are Changed",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2026.1",
    "primaryVer": "2026.1",
    "allVersions": [
      "2026.1"
    ],
    "reports": 0,
    "workId": "W-22608588",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mGqQLIA0",
    "summary": "In Prep web authoring UI, the blue-dot icon indicates the use of virtual connection tables. When table names are changed in the virtual connection, the blue icon disappears while the flow itself runs correctly.Issue also happens in Tableau Server 2023.3 or above.",
    "created": 1780282135000,
    "updated": 1785373221000
  },
  {
    "id": "a02Ka00000jhkcIIAQ",
    "name": "",
    "title": "Recycle Bin Icon Disappears on Server Status and Settings Pages",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1.7",
    "primaryVer": "2025.1.7",
    "allVersions": [
      "2025.1.7"
    ],
    "reports": 1,
    "workId": "W-19607501",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000jhkcIIAQ",
    "summary": "When a Server Administrator navigates to a server-level administration page, the \"Recycle Bin\" menu icon disappears from the left navigation pane when Tableau Server has a single site.Icon is MISSING on pages like:Server StatusServer SettingsIcon is VISIBLE on site-level pages like:ExploreUsersGroupsSite Status / Settings",
    "created": 1759300256000,
    "updated": 1784297499000
  },
  {
    "id": "a02g7000006mZfxAAE",
    "name": "",
    "title": "\"Invalid Credentials\" Error When Editing Downloaded Snowflake Key-Pair Data Source in Tableau Desktop",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "Tableau Desktop 2025.3.7, 2026.2.1",
    "primaryVer": "2025.3.7",
    "allVersions": [
      "2025.3.7",
      "2026.2.1"
    ],
    "reports": 4,
    "workId": "W-23791268",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000006mZfxAAE",
    "summary": "After upgrading Tableau Desktop to version 2025.3.7 or later, users are unable to edit published Snowflake data sources (authenticated via Key-Pair) after downloading them from Tableau Server or Tableau Cloud.",
    "created": 1785729252000,
    "updated": 1790182852000
  },
  {
    "id": "a02g7000008UFwHAAW",
    "name": "",
    "title": "TC - Authentication Failure When Updating Starburst Connection Details in Tableau Data Source",
    "status": "Solution in Progress",
    "statusType": "open",
    "foundIn": "2026.2.x",
    "primaryVer": "2026.2",
    "allVersions": [
      "2026.2"
    ],
    "reports": 1,
    "workId": "W-24054009",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000008UFwHAAW",
    "summary": "Unable to update existing Starburst connection due to the below error: Can't connect to Starburst by StarburstDetailed Error MessageAuthentication failed: Authentication requiredUnable to connect to the Starburst by Starburst server \"xxxxxxxxxxx\". Check that the server is running and that you have access privileges to the requested database.The above occurs when attempting to update the role in the connection info. ",
    "created": 1788337962000,
    "updated": 1791958088000
  },
  {
    "id": "a028c00000z09mvAAA",
    "name": "",
    "title": "An error \"The server encountered an error\" may occur when opening a published data source from flow web authoring or Prep Builder 2024.1",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2024.1",
    "primaryVer": "2024.1",
    "allVersions": [
      "2024.1"
    ],
    "reports": 0,
    "workId": "W-15420952",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000z09mvAAA",
    "summary": "In Prep Builder 2024.1 or Tableau Cloud flow edit, when creating a new connection to the published data source on Tableau Cloud, an error \"The server encountered an error. Try again.\" occurred in the [Search for Data] dialog, and no data source was listed up.",
    "created": 1713161294000,
    "updated": 1790603151000
  },
  {
    "id": "a02Ka00000mRhnFIAS",
    "name": "",
    "title": "UNSUPPORTED_API_VERSION Error When Connecting to Salesforce Using Tableau Prep Builder or Tableau Desktop 2025.1 and Later",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1+",
    "primaryVer": "2025.1",
    "allVersions": [
      "2025.1"
    ],
    "reports": 3,
    "workId": "W-18964907",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mRhnFIAS",
    "summary": "When attempting to connect to Salesforce using Tableau Prep Builder or Tableau Desktop 2025.1 or later, the connection fails, and users may encounter an \"UNSUPPORTED_API_VERSION\" error.Notes & Cause:Affected Products: This issue can also occur on Tableau Server.Root Cause: This is typically a temporary issue caused by Salesforce's phased instance upgrades (staggered releases). During this transitional period, a version mismatch can occur if the instance used by the Tableau connector to verify th",
    "created": 1771384858000,
    "updated": 1785372664000
  },
  {
    "id": "a02Ka00000lHj0MIAS",
    "name": "",
    "title": "Unable to activate Tableau Desktop using LBLM through UberProxy",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1.3",
    "primaryVer": "2025.1.3",
    "allVersions": [
      "2025.1.3"
    ],
    "reports": 0,
    "workId": "W-19640841",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000lHj0MIAS",
    "summary": "Attempting to activate Tableau Desktop using LBLM with UberProxy deployed between the workstation and Tableau Server returns the error \"Failed to get ATR from server with error: Received an HTML response when requesting auth info.\"",
    "created": 1762982664000,
    "updated": 1784146601000
  },
  {
    "id": "a02Ka00000kTusFIAS",
    "name": "",
    "title": "Quickfilter: Apply button dynamic coloring follows story background color instead of layout color causing it to not be visible after publishing",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 0,
    "workId": "W-20004600",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000kTusFIAS",
    "summary": "The apply and cancel button of filter added to dashboard does not adhere to the color of the background set in the dashboard layout when used in a story after it has been published. It is expected that the appearance of the buttons should match what has been set in Tableau Desktop but after publishing, the dynamic coloring is matching against the story's shading/background color which causes it to be non-visible/barely visible depending on color of background set to the filter.",
    "created": 1761236876000,
    "updated": 1785286922000
  },
  {
    "id": "a02Ka00000mGL7EIAW",
    "name": "",
    "title": "Unable to Delete Group Sets From Tableau Cloud",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "Tableau Cloud, Tableau Server 2025.3, 2026.2",
    "primaryVer": "2025.3",
    "allVersions": [
      "2025.3",
      "2026.2"
    ],
    "reports": 0,
    "workId": "W-22334165",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mGL7EIAW",
    "summary": "When deleting a Group Set via the Tableau Server or Tableau Cloud User Interface or REST API, a successful message displays, but the Group Set is not removed. ",
    "created": 1779147728000,
    "updated": 1785430228000
  },
  {
    "id": "a02Ka00000kVUdiIAG",
    "name": "",
    "title": "Error Occurs When Manually Sorting Published Excel Data Source from Tableau Desktop",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1",
    "primaryVer": "2025.1",
    "allVersions": [
      "2025.1"
    ],
    "reports": 1,
    "workId": "W-19588107",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000kVUdiIAG",
    "summary": "When a Tableau Desktop workbook connects to a published data source (which originated from an Excel file) on Tableau Server or Tableau Cloud, attempting to manually sort a dimension or field results in an error. The error message displayed is \"Unable to complete action\" with the specific error code \"2AE9E43C\". This issue specifically occurs when the workbook's locale is set to Japanese (or set to Automatic and the operating system's locale is Japanese).",
    "created": 1762237578000,
    "updated": 1772761993000
  },
  {
    "id": "a028c00000zJcqgAAC",
    "name": "",
    "title": "'Internal Server Error' when using REST API to update Hyper file",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2024.1, Tableau Server",
    "primaryVer": "2024.1",
    "allVersions": [
      "2024.1"
    ],
    "reports": 0,
    "workId": "W-16111749",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zJcqgAAC",
    "summary": "When trying to update data in a hyper file, which is a published data source, on Tableau Cloud using the REST API and  trying to perform any action (insert, update, upsert, replace or delete), the following error is received:<?xml version='1.0' encoding='UTF-8'?><tsResponse\u00a0xmlns=\"http://tableau.com/api\"\u00a0xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\u00a0xsi:schemaLocation=\"http://tableau.com/api\u00a0https://help.tableau.com/samples/en-us/rest_api/ts-api_3_22.xsd\">\u00a0\u00a0<error code=\"500000\">\u00a0\u00a0\u00a0\u00a0<summ",
    "created": 1719821867000,
    "updated": 1721825956000
  },
  {
    "id": "a028c00000zIJywAAG",
    "name": "",
    "title": "The \"tsm maintenance cleanup\" command doesn't delete logs in deep folders such as EPS logs",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2023.1.5",
    "primaryVer": "2023.1.5",
    "allVersions": [
      "2023.1.5"
    ],
    "reports": 2,
    "workId": "W-15776343",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zIJywAAG",
    "summary": "The \"tsm maintenance cleanup\" command doesn't delete logs in deep folders such as EPS under vizqlserver logs folder and some folders under databasemaintenance like below.\u30fb/var/opt/tableau/tableau_server/data/tabsvc/logs/vizqlserver/EPS\u30fb/var/opt/tableau/tableau_server/data/tabsvc/logs/databasemaintenance/xxxxxxxx",
    "created": 1716185789000,
    "updated": 1741963479000
  },
  {
    "id": "a02Ka00000jiGYKIA2",
    "name": "",
    "title": "When running the Get Users in Group REST API call, there is a mismatch between the list of users and the totalAvailable count of the records",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2024.2.7",
    "primaryVer": "2024.2.7",
    "allVersions": [
      "2024.2.7"
    ],
    "reports": 1,
    "workId": "W-19746194",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000jiGYKIA2",
    "summary": "Note--this issue could also affect Tableau CloudWhen running the Get Users in Group REST API call, the pagination->totalAvailable value includes duplicate records, if those exist in the repository.\u00a0However, the list of users returned only contains distinct users -- the duplicate record is omitted from the list.This results in the totalAvailable value not matching an actual count of the retrieved records.",
    "created": 1760469148000,
    "updated": 1770746434000
  },
  {
    "id": "a02g7000006j9GcAAI",
    "name": "",
    "title": "Calculated Measures using Ratios or Percentages in Tableau Next Semantic Models Have Precision to Only 2 Decimal Places",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2026.0",
    "primaryVer": "2026.0",
    "allVersions": [
      "2026.0"
    ],
    "reports": 0,
    "workId": "W-23576687",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000006j9GcAAI",
    "summary": "This issue impacts Tableau Desktop, Tableau Server, Tableau Cloud.Ratio/percentage-calculated measures in Tableau Semantic Models return values rounded to 2 decimal places instead of the standard precision used in Tableau Desktop (6 decimal places).",
    "created": 1785456114000,
    "updated": 1787774444000
  },
  {
    "id": "a02Ka00000kWCzeIAG",
    "name": "",
    "title": "Tableau Bridge - RPM dependencies missing (find), Amazon Linux. Unable to connect to Redshift.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 0,
    "workId": "W-20111746",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000kWCzeIAG",
    "summary": "Containerized Tableau Bridge 2025.2.25.0912.2314 on Amazon Linux is unable to connect to embedded data sources in Amazon Redshift during runtime. The issue persists across multiple versions of Tableau Bridge and is specific to embedded data sources.Other data sources such as PostgreSQL and Microsoft SQL Server worked as expected.The run-bridge.sh script uses the find command on multiple lines to ensure that required packages are available before launching the Bridge client.The package that provi",
    "created": 1762514941000,
    "updated": 1790716359000
  },
  {
    "id": "a028c00000zhDWFAA2",
    "name": "",
    "title": "The number of users on the All Sites screen does not match the total number of users shown in Site Users for each site",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2022.3.x, 2023.1.x, 2023.3.x, 2024.2.x",
    "primaryVer": "2022.3",
    "allVersions": [
      "2022.3",
      "2023.1",
      "2023.3",
      "2024.2"
    ],
    "reports": 1,
    "workId": "W-16003629",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zhDWFAA2",
    "summary": "The number of users is inconsistent between the following two screens.All Sites > Sites > Number of Users in each lineEach Site > Users > Number of Site Users on top",
    "created": 1726741800000,
    "updated": 1750860284000
  },
  {
    "id": "a028c00000iwtkDAAQ",
    "name": "",
    "title": "Tableau Installer still warns about NOT installing Offline if serverATR.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1",
    "primaryVer": "2023.1",
    "allVersions": [
      "2023.1"
    ],
    "reports": 0,
    "workId": "W-12903694",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000iwtkDAAQ",
    "summary": "The Tableau Server 2023.1 installer incorrectly shows that offline activations are not compatible with the ATR activation service. Starting with 2023.1, offline activations on Tableau Server can be performed via the ATR Service.Originally tracked under Tableau TFS1505100.",
    "created": 1682726538000,
    "updated": 1733352138000
  },
  {
    "id": "a028c00000zhP5PAAU",
    "name": "",
    "title": "Flows Connected to Published Data Sources via Bridge Fail with \"Can't display the view because of Tableau Cloud site settings...\" Error",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 3,
    "workId": "W-16589377",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zhP5PAAU",
    "summary": "Flows Connected to published data sources via Bridge fail with the following error:Can't display the view because of Tableau Cloud site settings that affect the data source used by this view. Contact your site administrator to configure the site for live connections using Tableau Bridge. Unable to connect to the server \"<Server name> \". Check that the server is running and that you have access privileges to the requested database.Note: This issue is currently specific to the CA-A POD following t",
    "created": 1727286651000,
    "updated": 1755068681000
  },
  {
    "id": "a02Ka00000gXll1IAC",
    "name": "",
    "title": "Filtering a dashboard causes \"Incorrect data type integer\"",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2025.1.2",
    "primaryVer": "2025.1.2",
    "allVersions": [
      "2025.1.2"
    ],
    "reports": 1,
    "workId": "18779912",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000gXll1IAC",
    "summary": "Live MSSQL Stored Procedure Connection Throws Data Type Errors on Dashboard Filters:\"Incorrect data type integer, getting expected string type\"\"Incorrect data type integer, getting expected real type\"Tabelau Desktop, Server, Cloud 2023.2 and above are affected.",
    "created": 1751014666000,
    "updated": 1760342501000
  },
  {
    "id": "a02Ka00000lc0y8IAA",
    "name": "",
    "title": "OAUTH authentication in Tableau Desktop with Published Datasource throws an error without option to Login",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.2.4, 2025.3.0",
    "primaryVer": "2025.2.4",
    "allVersions": [
      "2025.2.4",
      "2025.3.0"
    ],
    "reports": 0,
    "workId": "W-20517301",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000lc0y8IAA",
    "summary": "In Tableau Desktop, when publishing a data source that uses OAuth authentication with the Prompt User option (no embedded credentials), an issue occurs if the Tableau Cloud/Server credentials are deleted or expire. Tableau Desktop then throws errors such as \u201cUnable to complete action,\u201d \u201cNo associated keychain entry found,\u201d and/or \u201cUnexpected Error \u2013 OAuth refresh token is expired.\u201d",
    "created": 1765783566000,
    "updated": 1776965284000
  },
  {
    "id": "a02Ka00000eNoMCIA0",
    "name": "",
    "title": "Application Server/Vizportal Process in Error State with Kerberos SSO enabled in 2025.1",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1",
    "primaryVer": "2025.1",
    "allVersions": [
      "2025.1"
    ],
    "reports": 6,
    "workId": "W-18236374",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000eNoMCIA0",
    "summary": "When either upgrading a Tableau Server with Kerberos SSO enabled to version 2025.1, or when enabling Kerberos SSO on an existing instance running 2025.1, the Vizportal process will not start and remain in Error/Down state. Logins will be unsuccessful and the Tableau Server will be inaccessible.",
    "created": 1744215167000,
    "updated": 1747137540000
  },
  {
    "id": "a02g7000007Nf4rAAC",
    "name": "",
    "title": "Tableau Desktop LBLM Auto Sign-In and Licensing Fail on Relaunch When Last Sign-In Used a Custom Domain",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2026.2",
    "primaryVer": "2026.2",
    "allVersions": [
      "2026.2"
    ],
    "reports": 1,
    "workId": "W-23736872",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000007Nf4rAAC",
    "summary": "In Tableau Desktop, users who last signed in to Tableau Server/Cloud via a custom domain (e.g., custom.domain.com) may experience silent failures of License-Based License Management (LBLM) licensing and auto sign-in on application relaunch. Additionally, the sign-in dialog may pre-fill with an incorrect http:// URL instead of https://, or display a blank site and username. Users who sign in via a direct pod URL (e.g., prod-uswest-c.online.tableau.com) are not affected.This issue was introduced a",
    "created": 1787238023000,
    "updated": 1790352607000
  },
  {
    "id": "a02Ka00000ivYRWIA2",
    "name": "",
    "title": "Error \"There is something wrong with connector: EPS launch\" When Attempting to Connect to Google Analytics 4 in Tableau Desktop/Prep",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2024.2 and later",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 6,
    "workId": "W-19330630",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000ivYRWIA2",
    "summary": "After authenticating to Google Analytics 4, Tableau Desktop shows an error message or gets into a sign in loop instead of showing the GA4 window.Example error:Unable to connect to the server. Check that the server is running and that you have access privileges to the requested database. Error Code: 2BD7027A\" \"There is something wrong with connector: EPS launch call error: Connector Class: google_analytics_4, Version: 1.2.1",
    "created": 1756308970000,
    "updated": 1784281829000
  },
  {
    "id": "a02Ka00000mHQdFIAW",
    "name": "",
    "title": "Tableau Resource Monitoring Tool can sometimes fail to ingest correctly causing queues to grow",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2025.3.4",
    "primaryVer": "2025.3.4",
    "allVersions": [
      "2025.3.4"
    ],
    "reports": 1,
    "workId": "W-23043358",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mHQdFIAW",
    "summary": "Resource Monitoring Tool will occasionally show a \"Unknown System Status - The status of the system could not be determined\" screen ",
    "created": 1782233989000,
    "updated": 1790068730000
  },
  {
    "id": "a02Ka00000mH5pKIAS",
    "name": "",
    "title": "Incorrect Checkbox Selections Displayed in Set Field Filter After Deselecting 'All' and then Searching When \"Show Apply Button\" is Enabled",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2025.1, 2025.3",
    "primaryVer": "2025.1",
    "allVersions": [
      "2025.1",
      "2025.3"
    ],
    "reports": 2,
    "workId": "W-22937804",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mH5pKIAS",
    "summary": "When using a Set field filter with the \"Show Apply Button\" option enabled in Tableau Server, incorrect checkbox selections are displayed after a user deselects \"all\" followed by a searching for a new field value. Specifically, items that were never individually selected appear as checked in the search results, creating a mismatch between the visual state of the filter and the actual selection state.Despite this visual inconsistency, clicking Apply does correctly clear all selections \u2014 resulting ",
    "created": 1781228464000,
    "updated": 1792749716000
  },
  {
    "id": "a02Ka00000moMiTIAU",
    "name": "",
    "title": "Tableau Pulse: Error 0x09A7C4B3 (Databricks Live Connection)",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.3.11",
    "primaryVer": "2025.3.11",
    "allVersions": [
      "2025.3.11"
    ],
    "reports": 0,
    "workId": "W-20394226",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000moMiTIAU",
    "summary": "Note: This issue also impacts Tableau ServerAn error occurs when creating Tableau Pulse metrics using a published data source with a live Databricks connection.Error Message: \u2018Can\u2019t load the chart. Tableau Pulse couldn\u2019t load the chart.\u2019",
    "created": 1777559885000,
    "updated": 1782318402000
  },
  {
    "id": "a02Ka00000lbMPUIA2",
    "name": "",
    "title": "Some \"OneDrive (shared with you)\" Files are Unexpectedly Missing When Using the OneDrive and SharePoint connector in Tableau",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1, 2023.2, 2023.3, 2024.2, 2024.3, 2025.1, 2025.2, 2025.3",
    "primaryVer": "2023.1",
    "allVersions": [
      "2023.1",
      "2023.2",
      "2023.3",
      "2024.2",
      "2024.3",
      "2025.1",
      "2025.2",
      "2025.3"
    ],
    "reports": 42,
    "workId": "W-20518541",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000lbMPUIA2",
    "summary": "When connecting to data using the OneDrive and SharePoint connector in Tableau, files listed in the \"OneDrive (shared with you)\" tab are unexpectedly missing.\u00a0EnvironmentTableau DesktopTableau CloudTableau ServerTableau Prep BuilderVersionsAll Supported Versions of Tableau productsCauseIssue stems from a third party change made by Microsoft to the now deprecated 'sharedWithMe' API. Tableau development is investigating in-product resolution options.",
    "created": 1765480578000,
    "updated": 1784093061000
  },
  {
    "id": "a028c00000zJ3KZAA0",
    "name": "",
    "title": "Initial SQL parameter [TableauServer User] is not showing the correct value for Tableau Cloud",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.1",
    "primaryVer": "2024.1",
    "allVersions": [
      "2024.1"
    ],
    "reports": 1,
    "workId": "W-15921554",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zJ3KZAA0",
    "summary": "When using the parameter [TableauServerUser] in Initial SQL, sometimes the value does not show properly.",
    "created": 1718297509000,
    "updated": 1727817069000
  },
  {
    "id": "a02Ka00000f8qV2IAI",
    "name": "",
    "title": "Tableau Sharepoint Lists JDBC REST connection does not bring in Lookup Columns",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "Tableau Cloud 2025.1, Tableau Desktop 2025.1.1/2024.3.4, Tableau Server 2024.2.10",
    "primaryVer": "2025.1",
    "allVersions": [
      "2025.1",
      "2025.1.1",
      "2024.3.4",
      "2024.2.10"
    ],
    "reports": 2,
    "workId": "W-16479009",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000f8qV2IAI",
    "summary": "When connected to Sharepoint Lists JDBC through the REST API on Tableau Desktop/Server/Cloud, Lookup Columns are not brought into the tables.",
    "created": 1747722541000,
    "updated": 1792541298000
  },
  {
    "id": "a02Ka00000kVWVfIAO",
    "name": "",
    "title": "Teradata query banding for <WorkbookName> is empty when the request comes from Tableau Cloud via Tableau Bridge",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.2",
    "primaryVer": "2025.2",
    "allVersions": [
      "2025.2"
    ],
    "reports": 1,
    "workId": "W-19821151",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000kVWVfIAO",
    "summary": "Teradata query banding for <WorkbookName> is empty in Tableau Cloud using Tableau Bridge but works as expected in Tableau Desktop and Tableau ServerTableau Bridge/Cloud: \"Setting Running Query Band: SET QUERY_BAND='WorkbookName=;' FOR SESSION\"Tableau Desktop/Server: \"Setting Running Query Band: SET QUERY_BAND='WorkbookName=Book1;' FOR SESSION\"",
    "created": 1762327036000,
    "updated": 1766081347000
  },
  {
    "id": "a02Ka00000lHrFwIAK",
    "name": "",
    "title": "Tableau Resource Monitoring Tool (RMT)  2024.2.1 / 2025.2  exhibits continuous disk space consumption over time",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.1, 2025.2",
    "primaryVer": "2024.2.1",
    "allVersions": [
      "2024.2.1",
      "2025.2"
    ],
    "reports": 8,
    "workId": "W-19380780",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000lHrFwIAK",
    "summary": "Tableau RMT exhibits continuous disk space consumption over time, as the Resource Monitoring Tool\u2019s PostgreSQL database progressively grows, particularly within the Hangfire schema.",
    "created": 1763406638000,
    "updated": 1791257762000
  },
  {
    "id": "a02Ka00000mmoT1IAI",
    "name": "",
    "title": "Backup Restore Fails Due to Orphaned Export Schemas from Source.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.3.2",
    "primaryVer": "2025.3.2",
    "allVersions": [
      "2025.3.2"
    ],
    "reports": 2,
    "workId": "W-21754389",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mmoT1IAI",
    "summary": "When upgrading or restoring to Tableau Server, the process may fail during the database migration phase. This issue occurs if the source environment contains \"orphaned\" database schemas leftover data from previous site export operations that did not complete successfully.Tableau Server does not automatically purge these failed export_ prefixed schemas. Because the standard backup process (tsm maintenance backup) captures the entire state of the PostgreSQL repository, these orphaned schemas are c",
    "created": 1775060287000,
    "updated": 1792580580000
  },
  {
    "id": "a028c00000zhFVtAAM",
    "name": "",
    "title": "Flow Authoring not highly available when Cache Server is not running in the initial node",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "All versions",
    "primaryVer": "",
    "allVersions": [],
    "reports": 0,
    "workId": "W-16145521",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zhFVtAAM",
    "summary": "Unable to create a flow when a worker node is down. When Cache Server is on the initial node, users can create flow in the event one of Tableau Prep Flow Authoring nodes is down. However, if Cache Server is not running on the initial node, there is a potential for Flow Authoring to be not highly available. Tableau Prep Flow Authoring is dependent on Cache Server running in the lowest numbered node. If that specific Cache Server (installed in the lowest numbered node) is down, users cannot create",
    "created": 1726828156000,
    "updated": 1750860284000
  },
  {
    "id": "a028c00000ziXwEAAU",
    "name": "",
    "title": "Scheduled AD (Active Directory) Group Sync No Longer Syncs All Groups Server-wide When Groups Are Manually Synced for a Specific Site",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.3.21 - 2024.2.3+",
    "primaryVer": "2022.3.21",
    "allVersions": [
      "2022.3.21",
      "2024.2.3"
    ],
    "reports": 25,
    "workId": "W-17017935",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000ziXwEAAU",
    "summary": "When Tableau Server is scheduled to synchronize all Active Directory groups on the server but AD groups within a specific site are synced on-demand, the server-wide AD group sync no longer syncs all groups on the server. Instead, this syncs the AD groups for the specific site that was synchronized on-demand.",
    "created": 1730313073000,
    "updated": 1766635797000
  },
  {
    "id": "a02Ka00000lbOnMIAU",
    "name": "",
    "title": "When signing in to Tableau Cloud from Tableau Desktop after a prior successful login using the external browser, an error is received",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.x,2026.x",
    "primaryVer": "",
    "allVersions": [],
    "reports": 3,
    "workId": "W-22252933",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000lbOnMIAU",
    "summary": "\u00a0When signing in to Tableau Cloud from Tableau Desktop after a prior successful first login using the external browser, an error is received stating \"Unable to find registered URL. The URL type: 39\"",
    "created": 1765579657000,
    "updated": 1785182331000
  },
  {
    "id": "a028c00000yxd1cAAA",
    "name": "",
    "title": "Tableau Cloud/Prep - After Cloud upgrade to 2024.1, Tableau Prep cannot sign-in/Authenticate",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.1",
    "primaryVer": "2024.1",
    "allVersions": [
      "2024.1"
    ],
    "reports": 2,
    "workId": "W-15083087",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yxd1cAAA",
    "summary": "Attempting to log in via the [Server => Sign In] workflow fails silently (No error given) after going through all the authentication windows.Attempting to log in via the [(+) icon => To a Server] workflow via the connection pane fails with the following error dialog: \"An error occurred when signing into your server. Try signing in again.\" ",
    "created": 1708531693000,
    "updated": 1772412809000
  },
  {
    "id": "a02Ka00000eON55IAG",
    "name": "",
    "title": "Tableau Prep Flow connecting to Snowflake with key pair auth fails with the error \"The provided username/password combination was invalid\"",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2025.1",
    "primaryVer": "2025.1",
    "allVersions": [
      "2025.1"
    ],
    "reports": 8,
    "workId": "W-18283750",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000eON55IAG",
    "summary": "Tableau Prep Flow connecting to Snowflake with key pair auth fails with the error \"The provided username/password combination was invalid\"\u00a0EnvironmentTableau ServerTableau CloudSnowflake",
    "created": 1744962656000,
    "updated": 1777747877000
  },
  {
    "id": "a028c00000zKrnWAAS",
    "name": "",
    "title": "Unable to connect to MS SQL Server using a comma for non default port.",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2024.2",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 4,
    "workId": "W-16422783",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zKrnWAAS",
    "summary": "Unable to connect to MS SQL Server using a comma for a non-default port after upgrading to Tableau Desktop 2024.2 on a Mac with Apple Silicon. The following error is seen:",
    "created": 1723198549000,
    "updated": 1743605942000
  },
  {
    "id": "a02Ka00000fs6DiIAI",
    "name": "",
    "title": "\u201cServer Administrator\u201d role is not showing in user filter options.",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2024.2.1+",
    "primaryVer": "2024.2.1",
    "allVersions": [
      "2024.2.1"
    ],
    "reports": 13,
    "workId": "W-16821408",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000fs6DiIAI",
    "summary": "User filter options does not show \"Server Administrator\" role.",
    "created": 1749645423000,
    "updated": 1790265715000
  },
  {
    "id": "a02Ka00000mHEU3IAO",
    "name": "",
    "title": "Intermittent but increasingly frequent failures across multiple Tableau Prep flows on Tableau Cloud",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2026.1.5",
    "primaryVer": "2026.1.5",
    "allVersions": [
      "2026.1.5"
    ],
    "reports": 2,
    "workId": "W-22922005",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mHEU3IAO",
    "summary": "Flow job fails due to pod termination or data server restart after flowprocessor consumed too much memory.",
    "created": 1781614886000,
    "updated": 1788657824000
  },
  {
    "id": "a02Ka00000kWJxwIAG",
    "name": "",
    "title": "Flow refresh failing with error \"[SQLSTATE:08001] Could not connect to the Hyper server: Cannot assign requested address\"",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.2",
    "primaryVer": "2025.2",
    "allVersions": [
      "2025.2"
    ],
    "reports": 0,
    "workId": "W-19772766",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000kWJxwIAG",
    "summary": "Flow refresh failing with error \"[SQLSTATE:08001] Could not connect to the Hyper server: Cannot assign requested address\\r\\nIs the server running on host \\\"localhost\\\" (::1) and accepting TCP/IP connections on port\"",
    "created": 1762771185000,
    "updated": 1784865072000
  },
  {
    "id": "a02Ka00000mGCOFIA4",
    "name": "",
    "title": "Unable to switch sites in Tableau Desktop 2025.3.5+ using the Tableau embedded browser",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.3.5",
    "primaryVer": "2025.3.5",
    "allVersions": [
      "2025.3.5"
    ],
    "reports": 4,
    "workId": "W-22473252",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mGCOFIA4",
    "summary": "In Tableau Desktop versions 2025.3.5 or 2026.1.1 and later, users are blocked from switching sites when using the Tableau embedded browser. This behavior does not occur when switching sites when using an external browser.",
    "created": 1778715758000,
    "updated": 1786130840000
  },
  {
    "id": "a02Ka00000ivxfWIAQ",
    "name": "",
    "title": "Tableau Cloud Metadata API returns incorrect value while querying \"extractLastRefreshedAt\" field of virtual connections",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.2.0",
    "primaryVer": "2025.2.0",
    "allVersions": [
      "2025.2.0"
    ],
    "reports": 1,
    "workId": "W-18289231",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000ivxfWIAQ",
    "summary": "When using Metadata API to query \"extractLastRefreshedAt\" field of Virtual Connections in Tableau Cloud or Tableau Server, the \"extractLastRefreshedAt\" field shows incorrect date.",
    "created": 1756390592000,
    "updated": 1791222313000
  },
  {
    "id": "a02Ka00000mmXYyIAM",
    "name": "",
    "title": "Postcodes for Lituania(LT) and Poland(PL) fails to render on maps in Tableau Desktop",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 2,
    "workId": "W-21729187",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mmXYyIAM",
    "summary": "When using Tableau Desktop version 2025.3.1 the postcodes for Lithuania (LT) and Poland (PL) fail to render polygons on maps.The issue can also be seen in Tableau Server",
    "created": 1774515694000,
    "updated": 1784846811000
  },
  {
    "id": "a028c00000yE2ihAAC",
    "name": "",
    "title": "AskData returns \"Unknown Server Error\" when signing into a datasource with the \"Remember my password until I sign out\" option checked",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "Summer '16",
    "primaryVer": "",
    "allVersions": [],
    "reports": 1,
    "workId": "W-14614193",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yE2ihAAC",
    "summary": "After publishing a datasource such as Snowflake or Postgresql from Tableau Desktop to Tableau Cloud/Server with the \"Prompt user for password\" option, it fails with \"Unknown Server Error\" after entering the username/password and checking the option \"Remember my password until I sign out\".",
    "created": 1703820736000,
    "updated": 1719886589000
  },
  {
    "id": "a028c00000yxCxIAAU",
    "name": "",
    "title": "Error \"Internet communication error: Couldn't connect to server (localhost)\" Accessing Workbooks with Published Extracts After 2024.1 Release",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 2,
    "workId": "W-15039722",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yxCxIAAU",
    "summary": "After the 2024.1 release, when accessing workbooks which connect to published data sources and *.tableau.com\u00a0or localhost exists on the Private Network Allowlist, the below error displays.Unable to proceed because of an error from the data source. Try connecting again. If the problem persists, disconnect from the data source and contact the data source owner.Internet communication error: Couldn't connect to server(localhost).",
    "created": 1707940235000,
    "updated": 1719886594000
  },
  {
    "id": "a02Ka00000iw1NOIAY",
    "name": "",
    "title": "Output Field Cannot Be Modified When Configuring Incremental Refresh Since Tableau 2024.3.4",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "Tableau Prep Builder 2025.1",
    "primaryVer": "2025.1",
    "allVersions": [
      "2025.1"
    ],
    "reports": 0,
    "workId": "W-18979265",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000iw1NOIAY",
    "summary": "Since Tableau's March 2025 Maintenance Release, such as Tableau Prep Builder 2024.3.4, the Output Field cannot be modified when Incremental Refresh is enabled on an input step in the Flow pane.The Output Field automatically matches the Input Field. Changing a different field from the dropdown has no effect. Therefore, it is not possible to configure a custom Output Field for Incremental Refresh on those versions.This issue on the flow editing screen can also be reproduced on Tableau Server and T",
    "created": 1756435725000,
    "updated": 1784298803000
  },
  {
    "id": "a028c00000zioE4AAI",
    "name": "",
    "title": "Error \"Client unable to establish connection...\u201d When Connecting to Microsoft SQL Server in Flows and Virtual Connections on Hyperforce",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.3",
    "primaryVer": "2024.3",
    "allVersions": [
      "2024.3"
    ],
    "reports": 0,
    "workId": "W-17033896",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zioE4AAI",
    "summary": "Some Flows and Virtual Connections using cloud-based Microsoft SQL Server connections are failing intermittently with an unexpected \"Client unable to establish connection because an error was encountered\u201d error on Tableau Cloud hosted on Hyperforce POD.",
    "created": 1731100360000,
    "updated": 1742489949000
  },
  {
    "id": "a028c00000zKD8TAAW",
    "name": "",
    "title": "Linked Tasks are not able to be imported to a site of different server and their internal schedule IDs are output to the mappingsScheduleMapper.csv",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1.8",
    "primaryVer": "2023.1.8",
    "allVersions": [
      "2023.1.8"
    ],
    "reports": 0,
    "workId": "W-16270784",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zKD8TAAW",
    "summary": "When importing to a target site that exists under the different server against the source site, after the import of mapping files,\u00a0their internal schedule ID(s) will be output to the mappingsScheduleMapper.csv like the example below:source_name,target_nameLinkedTask_d5fd4876-a4c0-4dd3-9ba0-fc4ed85e296b,???But there is no information about how to create and find the target schedule and this blocks the site import.",
    "created": 1721391475000,
    "updated": 1787346943000
  },
  {
    "id": "a028c00000zhoylAAA",
    "name": "",
    "title": "Unable to Delete or Revert Custom SSL for Index and Search Server Process using TSM Commands",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1.7",
    "primaryVer": "2023.1.7",
    "allVersions": [
      "2023.1.7"
    ],
    "reports": 0,
    "workId": "W-15326219",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zhoylAAA",
    "summary": "After running the command to enable custom certificates for Tableau Server's Index and Search Server process, there is no way to revert back to the default certificates and settings. This issue exists in all versions of Tableau Server 2023.1.0 and newer.",
    "created": 1728427212000,
    "updated": 1732286738000
  },
  {
    "id": "a02g7000006VzdFAAS",
    "name": "",
    "title": "AD Groups with Distinguished Names Containing Special Characters are Not Syncing/Importing Users Correctly",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2026.2.0",
    "primaryVer": "2026.2.0",
    "allVersions": [
      "2026.2.0"
    ],
    "reports": 15,
    "workId": "W-23529482",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000006VzdFAAS",
    "summary": "For groups containing members with Distinguished Names containing special characters, such as ',' or '*', \\users in those AD groups are not getting added or getting deleted after a sync of the group is performed, starting in version 2026.2.0. New groups get added to the Tableau Server but those users are not added in that group.",
    "created": 1784764197000,
    "updated": 1792175346000
  },
  {
    "id": "a02Ka00000mQsyuIAC",
    "name": "",
    "title": "Tableau Mobile, Using the Enter key inserts newline instead of applying value",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 1,
    "workId": "W-21173175",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mQsyuIAC",
    "summary": "On mobile devices using Tableau Mobile for iOS and Tableau Server 2025.1.9. pressing ENTER in a text parameter appends a newline instead of confirming the value. This causes parameter-based filters or calculations to return no results, impacting mobile dashboard usability.",
    "created": 1770632351000,
    "updated": 1784215293000
  },
  {
    "id": "a02Ka00000jhahrIAA",
    "name": "",
    "title": "User Attribute Claims Not Populating in Tableau JWT for External Salesforce Experience Cloud Users",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.2",
    "primaryVer": "2025.2",
    "allVersions": [
      "2025.2"
    ],
    "reports": 7,
    "workId": "W-18773926",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000jhahrIAA",
    "summary": "When external users with the Customer Community Plus Login license access Tableau dashboards through Salesforce Experience Cloud, their User Attribute Claims (UAF) are not included in the JWT token used for authentication with Tableau Server or Tableau Cloud. As a result, row-level security based on these attributes does not apply, and users may see all data instead of the expected filtered data.",
    "created": 1758812358000,
    "updated": 1792136440000
  },
  {
    "id": "a02Ka00000iG7WhIAK",
    "name": "",
    "title": "\"Error: [SQLSTATE:58S01] error opening database <XXX> There was an error during loading the database\" occurs when opening a view in Tableau Cloud",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.2",
    "primaryVer": "2025.2",
    "allVersions": [
      "2025.2"
    ],
    "reports": 3,
    "workId": "W-19268955",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000iG7WhIAK",
    "summary": "When opening a view in Tableau Cloud the error presents instead of the view rendering as expected:[SQLSTATE:58S01] error opening database <database name>: There was an error during loading the database:The database does not exist. Unable to connect to the data extract server \"\".Check that the server is running and that you have access privileges to the requested database.",
    "created": 1754980239000,
    "updated": 1783518154000
  },
  {
    "id": "a02Ka00000mQkivIAC",
    "name": "",
    "title": "Text Is Not Wrapped Properly When Published To Tableau Cloud",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.3",
    "primaryVer": "2025.3",
    "allVersions": [
      "2025.3"
    ],
    "reports": 3,
    "workId": "W-18885378",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mQkivIAC",
    "summary": "Text wrapping may fail when viewing a workbook published from Tableau Desktop to Tableau Cloud in a web browser. This results in incomplete text display, which is particularly noticeable with Japanese characters.",
    "created": 1770021982000,
    "updated": 1781186192000
  },
  {
    "id": "a02Ka00000llRQ6IAM",
    "name": "",
    "title": "In a Tableau dashboard, when clicking on an axis point that is a Bin, the target sheet shows more data than what was selected in source sheet",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2022.4.20; 2023.3.23; 2025.2.4",
    "primaryVer": "2022.4.20",
    "allVersions": [
      "2022.4.20",
      "2023.3.23",
      "2025.2.4"
    ],
    "reports": 1,
    "workId": "W-20495487",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000llRQ6IAM",
    "summary": "Note that this issue affects Tableau Cloud, Desktop and ServerIn a Tableau dashboard, when clicking on an axis point that is a Bin, the target sheet shows more data than what was selected in source sheet.",
    "created": 1767137997000,
    "updated": 1770746452000
  },
  {
    "id": "a028c00000zko9CAAQ",
    "name": "",
    "title": "Flow Fail to Output the Result to Google BigQuery with an Authentication Error after Publishing to Tableau Cloud",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.3.0",
    "primaryVer": "2024.3.0",
    "allVersions": [
      "2024.3.0"
    ],
    "reports": 2,
    "workId": "W-17409009",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zko9CAAQ",
    "summary": "Note: issue also impacts Tableau ServerWhen running a published flow which successfully outputs to Google BigQuery in Tableau Prep Builder, the flow fails with the following error message:\u00a0An error occurred while communicating with Google BigQuery Authentication failed.\u00a0EnvironmentTableau Cloud or Tableau Server 2024.3 Tableau Prep Builder 2024.3Google BigQuery",
    "created": 1736838904000,
    "updated": 1745856471000
  },
  {
    "id": "a02Ka00000mHHGMIA4",
    "name": "",
    "title": "Tableau Cloud Dashboard Header Loses Custom Background Color When Filters Are Applied",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 8,
    "workId": "W-23065393",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mHHGMIA4",
    "summary": "When viewing a dashboard published to Tableau Cloud, interacting with or applying any filter causes custom header cell background colors to unexpectedly reset to white.\u00a0Visual Impact:If both the font and the original background color were white, the header becomes completely invisible.If the font is a contrasting color (e.g., black), the text remains visible but the background still turns white.",
    "created": 1781792890000,
    "updated": 1791926650000
  },
  {
    "id": "a02Ka00000lYIhcIAG",
    "name": "",
    "title": "Publishing extract data sources to Tableau Cloud intermittently fails",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "Tableau Cloud 2026.2",
    "primaryVer": "2026.2",
    "allVersions": [
      "2026.2"
    ],
    "reports": 4,
    "workId": "W-20295879",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000lYIhcIAG",
    "summary": "Publishing extract data sources to Tableau Cloud\u2014particularly when using third-party tools\u2014intermittently fails with the following error:(0xD7294631 : com.tableausoftware.domain.exception.PublishingException: Could not find this datasource on Server.) (Error code: 400011)",
    "created": 1763961456000,
    "updated": 1781195404000
  },
  {
    "id": "a028c00000ziXtyAAE",
    "name": "",
    "title": "Published or Web-Authored Flows Containing LOD Calculations Fail with Error: \"Tableau cannot evaluate the query that results from this calculation.\"",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "Cloud 2024.3, Server 2024.2.3",
    "primaryVer": "2024.3",
    "allVersions": [
      "2024.3",
      "2024.2.3"
    ],
    "reports": 2,
    "workId": "W-17027922",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000ziXtyAAE",
    "summary": "Flows containing LOD calculations that are published to Tableau Server or Tableau Cloud fail with the following error:Something went wrong. Error: TableauException: Tableau cannot evaluate the query that results from this calculation.",
    "created": 1730306380000,
    "updated": 1741096260000
  },
  {
    "id": "a02g7000006811tAAA",
    "name": "",
    "title": "[Tableau Next] Dashboard visualization becomes empty when changing filters after expanding or collapsing a Dimension Hierarchy",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "Summer '26",
    "primaryVer": "",
    "allVersions": [],
    "reports": 4,
    "workId": "W-23481918",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000006811tAAA",
    "summary": "When a dashboard visualization uses a Dimension Hierarchy, changing the dashboard filter after expanding or collapsing the hierarchy can cause the visualization to display no results. The issue occurs only when the filter is applied before interacting with the hierarchy. Refreshing the dashboard and expanding the hierarchy before applying the filter serves as a temporary workaround.",
    "created": 1784270811000,
    "updated": 1792321674000
  },
  {
    "id": "a02g7000009DF8vAAG",
    "name": "",
    "title": "Manual sort on an MSAS/SSAS named set is lost when reopening a workbook in Tableau Desktop",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2025.3",
    "primaryVer": "2025.3",
    "allVersions": [
      "2025.3"
    ],
    "reports": 1,
    "workId": "W-24120915",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000009DF8vAAG",
    "summary": "When a workbook containing a manual sort applied to a Microsoft Analysis Services (MSAS/SSAS) named set with the hierarchy dimension members are at levels less than the hierarchy's maximum level is closed and reopened in Tableau Desktop, the sort is silently dropped",
    "created": 1789014167000,
    "updated": 1789410207000
  },
  {
    "id": "a02Ka00000llCqnIAE",
    "name": "",
    "title": "Inconsistent Weekday Values Returned from Oracle Custom SQL in Tableau",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 2,
    "workId": "W-20472435",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000llCqnIAE",
    "summary": "When Tableau uses Oracle Custom SQL that derives weekday values with TO_CHAR(date,'D'), the returned weekday numbers can vary depending on the Oracle session\u2019s NLS_TERRITORY setting. Oracle determines weekday numbering based on regional territory rules, which can cause the same date to return different weekday values across environments. This may lead to inconsistent weekday-based calculations, filters, and visualizations in Tableau.Products AffectedTableau Desktop / Tableau Server / Tableau Clo",
    "created": 1766489545000,
    "updated": 1784622163000
  },
  {
    "id": "a02Ka00000eNruYIAS",
    "name": "",
    "title": "Accessing Lineage for a Tableau Flow that outputs to an external database may throw an error.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.x",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 15,
    "workId": "W-18171095",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000eNruYIAS",
    "summary": "Note that this issue also has impacted some Tableau Cloud sitesAccessing Lineage on Tableau Server for a Tableau Flow that outputs to an external database may throw the following error: \"Information for this page not found. It may still be loading, or you don't have permissions to view it.\"",
    "created": 1744309369000,
    "updated": 1769549168000
  },
  {
    "id": "a028c00000suQicAAE",
    "name": "",
    "title": "TS: Prep Conductor: Intermittent error \"SQLSTATE:08006 The Hyper server closed the connection unexpectedly\" when running prep flows with linked tasks",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.3.0",
    "primaryVer": "2022.3.0",
    "allVersions": [
      "2022.3.0"
    ],
    "reports": 11,
    "workId": "W-12926340",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000suQicAAE",
    "summary": "Scheduled Tableau Prep Conductor flows with linked tasks may fail intermittently with the error, SQLSTATE:08006 The Hyper server closed the connection unexpectedly",
    "created": 1695218240000,
    "updated": 1785858911000
  },
  {
    "id": "a02Ka00000mmZcLIAU",
    "name": "",
    "title": "Relationship DB Size Increases by 4GB+ Per Day Due to Sharelocks Preventing Deletions from Occurring",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2024.2.13",
    "primaryVer": "2024.2.13",
    "allVersions": [
      "2024.2.13"
    ],
    "reports": 0,
    "workId": "W-21553363",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mmZcLIAU",
    "summary": "Relationship DB is increasing in size daily when the following conditions are met:Tableau Server is multi-nodeTableau Server has at least 2 machines with Backgrounder processes (meaning there is more than a single noninteractive microservices container)Tableau Server has a significant number of updates/deletes happening in Catalog",
    "created": 1774635310000,
    "updated": 1790023977000
  },
  {
    "id": "a02Ka00000mQzWQIA0",
    "name": "",
    "title": "Certain Flows with Parallel Aggregation Steps Produce Incorrect Results in Tableau Prep 2025.2 and Newer",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2025.2",
    "primaryVer": "2025.2",
    "allVersions": [
      "2025.2"
    ],
    "reports": 1,
    "workId": "W-21224381",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mQzWQIA0",
    "summary": "In Tableau Prep Builder 2025.2 and newer versions (and corresponding versions of Tableau Server/Cloud), running flows that contain specific complex logic (such as aggregation steps configured in parallel branches or involving self-joins) may result in incorrect data output.This issue does not affect all flows with parallel aggregations. It is specifically observed in flows with a higher degree of complexity where the underlying query plan triggers a regression in the Hyper engine introduced in t",
    "created": 1770866420000,
    "updated": 1781856114000
  },
  {
    "id": "a02g7000006mkhpAAA",
    "name": "",
    "title": "Tableau Cloud REST API: Updating a data source connection from OAuth to Key-Pair auth returns 200 OK but does not embed credentials",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2026.2",
    "primaryVer": "2026.2",
    "allVersions": [
      "2026.2"
    ],
    "reports": 0,
    "workId": "W-23621915",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000006mkhpAAA",
    "summary": "When using the Tableau REST API \"Update Data Source Connection\" endpoint to change a data source connection's authentication type from OAuth to Key-Pair (auth-keypair) with embedPassword=true, the API returns HTTP 200 OK, but the Key-Pair credentials are not actually persisted server-side. This issue occurs exclusively when the data source was originally published using OAuth authentication. After the API call, the connection UI shows \"No authentication\" and any extract refresh or dashboard view",
    "created": 1785740931000,
    "updated": 1790133774000
  },
  {
    "id": "a02g7000006o7E9AAI",
    "name": "",
    "title": "Tableau Desktop Forces OneDrive and SharePoint Online Live Connection to Extract During Publishing for Embedded Connections",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2026.2",
    "primaryVer": "2026.2",
    "allVersions": [
      "2026.2"
    ],
    "reports": 1,
    "workId": "W-23461428",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000006o7E9AAI",
    "summary": "When publishing a workbook from Tableau Desktop to Tableau Cloud where the data source uses the OneDrive and SharePoint Online connector with an embedded live connection, Tableau Desktop forces the connection type to Extract during the publishing process. The user is presented with a message indicating that the connection will be converted to an extract, and after publishing, the workbook in Tableau Cloud contains an extract data source instead of the expected live connection.",
    "created": 1785844328000,
    "updated": 1791227419000
  },
  {
    "id": "a02Ka00000eNQh2IAG",
    "name": "",
    "title": "An error occurs on Refresh Extract from Live Virtual Connection published as data source via Tableau Desktop",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "Tableau Cloud, Tableau Server",
    "primaryVer": "",
    "allVersions": [],
    "reports": 2,
    "workId": "W-16730148",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000eNQh2IAG",
    "summary": "\u201cThis content uses a virtual connection. Virtual connections don't support completing this task for content published to Tableau Cloud or Tableau Server\u201d error occurs when refreshing extracts of live virtual connection data sources published via Tableau Desktop",
    "created": 1742992192000,
    "updated": 1776743632000
  },
  {
    "id": "a02Ka00000moIVGIA2",
    "name": "",
    "title": "Users with the Viewer role are unable to create subscriptions",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.3",
    "primaryVer": "2025.3",
    "allVersions": [
      "2025.3"
    ],
    "reports": 29,
    "workId": "W-17240044",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000moIVGIA2",
    "summary": "Users with the Viewer role are unable to create subscriptions in Tableau Server",
    "created": 1777373747000,
    "updated": 1792702495000
  },
  {
    "id": "a02Ka00000mEqVQIA0",
    "name": "",
    "title": "Publishing a flow with Snowflake key-pair authentication from Prep Builder to Tableau Cloud, the option \"Embedded Password\" should not appear",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2026.1",
    "primaryVer": "2026.1",
    "allVersions": [
      "2026.1"
    ],
    "reports": 1,
    "workId": "W-19057546",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mEqVQIA0",
    "summary": "When publishing a flow that connects to Snowflake using key-pair authentication from Prep Builder to Tableau Cloud, in the publish dialog to select the data source authentication type, users see the option Embed Password.Embed Password should not be an available option in this scenario, the dialog should display a list of credentials which match the server and role that have been saved to Tableau Cloud.",
    "created": 1777932848000,
    "updated": 1785791459000
  },
  {
    "id": "a028c000010F1kXAAS",
    "name": "",
    "title": "Quarter Info from Continuous Date Field does not display after publishing the workbook to Tableau Cloud",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.3",
    "primaryVer": "2024.3",
    "allVersions": [
      "2024.3"
    ],
    "reports": 1,
    "workId": "W-17555960",
    "url": "https://help.salesforce.com/s/issue?id=a028c000010F1kXAAS",
    "summary": "The abbreviation of the quarter with 'Q' on the axis is truncated to a number only after publishing to Tableau Cloud or Tableau Server.For example, the X-axis of the workbook is displayed as Q1, Q2, Q3, Q4 in Tableau Desktop. However, after publishing the dashboard to Tableau Cloud or Tableau Server, it is displayed as 1, 2, 3, 4.",
    "created": 1739166699000,
    "updated": 1750289946000
  },
  {
    "id": "a028c00000ziHhVAAU",
    "name": "",
    "title": "\"Unknown error: (code=2)\" When Accessing Workbook Connected to Azure SQL Virtual Connection Extract in Tableau Cloud",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 5,
    "workId": "W-16954455",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000ziHhVAAU",
    "summary": "When accessing a workbook in Tableau Cloud that uses a Virtual Connection Extract from Azure SQL, the following error might occur intermittently: Unable to proceed because of an error from the data source.Error executing subquery id: \"<number>\"An error occurred while communicating with the data source Unable to connect to the server. Check that the server is running and that you have access privileges to the requested database.Unknown error: (code=2)DataServiceFailure",
    "created": 1729628567000,
    "updated": 1791891149000
  },
  {
    "id": "a028c00000yxzlLAAQ",
    "name": "",
    "title": "Unknown Server Error: CheckpointRecoveryServiceNotAvailaible 0x535f8373 during bootstrap",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3",
    "primaryVer": "2023.3",
    "allVersions": [
      "2023.3"
    ],
    "reports": 4,
    "workId": "W-15031938",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yxzlLAAQ",
    "summary": "When a guest user interacts with a dashboard (by adjusting filters or clicking a navigation button to open a different view in the dashboard), and the guest then attempts to refresh the page by using the browser's refresh button, Tableau may present the user with an \"Unknown Server Error\".",
    "created": 1709052038000,
    "updated": 1719886596000
  },
  {
    "id": "a02Ka00000ji0jnIAA",
    "name": "",
    "title": "Tableau Prep Builder is processing table joins locally in Hyper rather than the source database",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "Tableau Prep Builder 2024.3.x and higher, Tableau Server 2024.2.2 and higher",
    "primaryVer": "2024.3",
    "allVersions": [
      "2024.3",
      "2024.2.2"
    ],
    "reports": 1,
    "workId": "W-19746036",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000ji0jnIAA",
    "summary": "Note that this issue also impacts Tableau Server 2024.2.2+ and Tableau CloudTableau Prep Builder is processing table joins locally in Hyper rather than the source database.Prior versions of Tableau Prep processed the table joins within the source database, retrieving the final results back to Tableau Prep Builder.",
    "created": 1759955927000,
    "updated": 1784281394000
  },
  {
    "id": "a02g700000BE3nhAAD",
    "name": "",
    "title": "Users with \"Viewer\" and \"Explorer\"/\"Explorer can publish\" site roles are unable to access or view the contents of project",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2026.2.0",
    "primaryVer": "2026.2.0",
    "allVersions": [
      "2026.2.0"
    ],
    "reports": 0,
    "workId": "W-24428381",
    "url": "https://help.salesforce.com/s/issue?id=a02g700000BE3nhAAD",
    "summary": "When User Visibility is set to Limited on Tableau Cloud and Tableau Server 2026.2.0 users with Viewer and Explorer site roles are unable to access or view the contents of projects, even though they have the required permissions explicitly granted.The users were seeing the below prompt on the Project space where they should see the workbooks:\"That page could not be accessed.Either the project does not exist or you do not have the necessary permissions.\"\u201c**Note that this issue also affects Tableau",
    "created": 1791397457000,
    "updated": 1791478298000
  },
  {
    "id": "a02g700000ACn2PAAT",
    "name": "",
    "title": "Incomplete User list under Effective Permissions",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "Tableau Server 2025.3.x, 2026.2.2",
    "primaryVer": "2025.3",
    "allVersions": [
      "2025.3",
      "2026.2.2"
    ],
    "reports": 2,
    "workId": "W-24247091",
    "url": "https://help.salesforce.com/s/issue?id=a02g700000ACn2PAAT",
    "summary": "On Tableau Server, users beyond the first 99 were not displayed in the Effective Permissions section when a group was selected on the Permissions page. This behavior appears to be consistent across content types and was particularly observed with AD groups containing more than 100 users, even though all users remained members of the group on Tableau Server.",
    "created": 1789981233000,
    "updated": 1790185973000
  },
  {
    "id": "a028c00000zhFueAAE",
    "name": "",
    "title": "When using the Amazon S3 Connector (Desktop, Server, Cloud), New AWS Users Cannot Fetch Data Due to an Error",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3+",
    "primaryVer": "2023.3",
    "allVersions": [
      "2023.3"
    ],
    "reports": 9,
    "workId": "W-16739546",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zhFueAAE",
    "summary": "Customers with new AWS accounts cannot fetch data when using the Amazon S3 connector in Tableau Desktop, Tableau Server, and Tableau Cloud, instead failing with an error.\"New\" AWS accounts refer to the following:AWS account created after July 25, 2024.AWS account created before July 25, 2024 but has never used S3 Select or the Tableau S3 Connector",
    "created": 1726852893000,
    "updated": 1751510553000
  },
  {
    "id": "a02Ka00000mRk3HIAS",
    "name": "",
    "title": "Following the upgrade from Tableau 2023.3 to 2025.1, specific worksheets in dashboards are not re-querying when filters are changed for calculations.",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2024.1.0 and above",
    "primaryVer": "2024.1.0",
    "allVersions": [
      "2024.1.0"
    ],
    "reports": 2,
    "workId": "W-21306760",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mRk3HIAS",
    "summary": "Following the upgrade from Tableau 2023.3 to 2025.1, specific worksheets in dashboards are not re-querying when filters are changed for certain calculations. The view remains fixed to the initial filter state and does not refresh to reflect subsequent filter selections.",
    "created": 1771543594000,
    "updated": 1779282055000
  },
  {
    "id": "a02g7000009z8ujAAA",
    "name": "",
    "title": "Renamed Physical Table or Union Name on Published Data Source Not Reflected in Workbook Data Pane",
    "status": "Solution in Progress",
    "statusType": "open",
    "foundIn": "2026.2",
    "primaryVer": "2026.2",
    "allVersions": [
      "2026.2"
    ],
    "reports": 4,
    "workId": "W-24147506",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000009z8ujAAA",
    "summary": "When connected to a Published Data Source on Tableau Cloud or Tableau Server 2026.2 or later, physical table or union names renamed in the data source editor fail to update in the workbook data pane and display original object names.This issue can be reproduced in Tableau Server 2026.2 as well.",
    "created": 1789798845000,
    "updated": 1791885222000
  },
  {
    "id": "a02g7000008AwhFAAS",
    "name": "",
    "title": "Dual-pane blended view shows incorrect/NULL values on the bottom pane's axis",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2025.1.19, 2025.3.8, 2026.2.2",
    "primaryVer": "2025.1.19",
    "allVersions": [
      "2025.1.19",
      "2025.3.8",
      "2026.2.2"
    ],
    "reports": 4,
    "workId": "W-23972225",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000008AwhFAAS",
    "summary": "On certain Tableau Desktop, Tableau Server, and Tableau Cloud versions, a dual-pane view using a secondary data source blend can render all marks in the bottom pane at a NULL x-axis position, while the top pane displays correctly.This affects Tableau Desktop 2025.1.19, 2025.3.8 and 2026.2.2. Tableau Server 2026.2, and Tableau Cloud. The top pane of the view is unaffected and continues to render as expected.",
    "created": 1787940604000,
    "updated": 1792066419000
  },
  {
    "id": "a02g7000006kE7lAAE",
    "name": "",
    "title": "Safari Fails to Download View Images and CSV Files When Content Security Policy Enforcement Is Enabled",
    "status": "Solution in Progress",
    "statusType": "open",
    "foundIn": "2025.1",
    "primaryVer": "2025.1",
    "allVersions": [
      "2025.1"
    ],
    "reports": 1,
    "workId": "W-23665640",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000006kE7lAAE",
    "summary": "Beginning in Tableau Server 2025.1, users on Safari browsers are unable to download view images or CSV files when Content Security Policy (CSP) enforcement is enabled (content_security_policy.enforce_enabled = true). The download produces no visible error to the user, but the browser's developer console shows that the request was blocked because blob: is not included in the frame-src CSP directive. This issue does not affect Chrome or other Chromium-based browsers, and did not affect any browser",
    "created": 1785530482000,
    "updated": 1787774444000
  },
  {
    "id": "a02Ka00000eNcplIAC",
    "name": "",
    "title": "Tableau Cloud: Error \"Cannot read properties of undefined (reading 'getContext')\" when zooming or panning on certain chart types",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1.0",
    "primaryVer": "2025.1.0",
    "allVersions": [
      "2025.1.0"
    ],
    "reports": 11,
    "workId": "W-18157475",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000eNcplIAC",
    "summary": "When using certain chart types, such as Box and Whisker Plot or line chart, on a dashboard with \u201cShow View Toolbar \u201c enabled on Tableau Cloud, an error is returned when attempting to zoom.Unexpected ErrorAn unexpected error occurred. If you continue to receive this error please contact your Tableau Server Administrator.Session ID: Uncaught TypeError: Cannot read properties of undefined (reading 'getContext')",
    "created": 1743590199000,
    "updated": 1748371218000
  },
  {
    "id": "a02Ka00000mH5b3IAC",
    "name": "",
    "title": "Error when attempting to publish a workbook downloaded from a custom domain using Tableau Desktop.",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2026.2",
    "primaryVer": "2026.2",
    "allVersions": [
      "2026.2"
    ],
    "reports": 0,
    "workId": "W-22936243",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mH5b3IAC",
    "summary": "When Tableau Desktop is already logged in to a custom domain, opening a workbook which is connected to a published data source on the same custom domain and trying to publish the workbook returns an error.",
    "created": 1781194475000,
    "updated": 1787774254000
  },
  {
    "id": "a028c00000zJhTEAA0",
    "name": "",
    "title": "Embedded Dashboards fail to load intermittently for multiple users in Tableau Cloud",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.0",
    "primaryVer": "2024.2.0",
    "allVersions": [
      "2024.2.0"
    ],
    "reports": 22,
    "workId": "W-16135846",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zJhTEAA0",
    "summary": "Embedded Dashboards fail to load intermittently for multiple users in Tableau Cloud with \"Unexpected Server Error.\"This issue has been observed following the rollout of the Partitioned Cookies feature flag in Tableau Cloud. ",
    "created": 1720030383000,
    "updated": 1765863862000
  },
  {
    "id": "a028c00000zjEtYAAU",
    "name": "",
    "title": "Addressed issue impacting Tableau's row-level access controls.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 0,
    "workId": "W-16890104",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zjEtYAAU",
    "summary": "Addressed issue impacting Tableau's row-level access controls in applicable versions of Tableau Server and Tableau Desktop.",
    "created": 1732233695000,
    "updated": 1750860284000
  },
  {
    "id": "a02Ka00000mQlXRIA0",
    "name": "",
    "title": "When Selecting A Run Flow Job Type In The Background Jobs View Within The Tableau Resource Monitoring Tool An Error Occurs",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.9",
    "primaryVer": "2024.2.9",
    "allVersions": [
      "2024.2.9"
    ],
    "reports": 0,
    "workId": "W-21051119",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mQlXRIA0",
    "summary": "In the Tableau Resource Monitoring Tool within the Background Jobs the error messageERROR: relation \"tableauprepflowrun\" does not exist at character 624 is displayed when attempting to click on any \"Run Flow\" type entries.",
    "created": 1770071534000,
    "updated": 1775059971000
  },
  {
    "id": "a02Ka00000mH31kIAC",
    "name": "",
    "title": "Attempts to Run Multiple Instances of Tableau Bridge 2026.1 on the Same Machine Result in Crashing of the Application",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2026.1",
    "primaryVer": "2026.1",
    "allVersions": [
      "2026.1"
    ],
    "reports": 1,
    "workId": "W-22854172",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mH31kIAC",
    "summary": "When users try to run their own instance of Tableau Bridge in their respective Windows user profile on the same machine, it causes the application to crash.",
    "created": 1781020925000,
    "updated": 1785176752000
  },
  {
    "id": "a02g7000006hm4LAAQ",
    "name": "",
    "title": "When using keyboard navigation in a cross tab workbook, users may be unable to use Tab, Enter, or Spacebar keys to navigate the workbook.",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2025.1.8",
    "primaryVer": "2025.1.8",
    "allVersions": [
      "2025.1.8"
    ],
    "reports": 0,
    "workId": "W-23576102",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000006hm4LAAQ",
    "summary": "After applying accessibility changes to an existing workbook such as font size, color, etc. and republishing to Tableau Server, users may not be able to use keyboard navigation to reach cells or rows in a workbook containing a cross-tab table. This behavior may be specific to workbooks containing 3 or more worksheets. It may also be specific to Tableau Server versions 2025.1.8 and higher.This issue is currently under investigation.",
    "created": 1785355911000,
    "updated": 1787774444000
  },
  {
    "id": "a02g7000006fItaAAE",
    "name": "",
    "title": "Audit events missing for implicit site-user creation (admin promotion) and site-level user deletion",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2026.2.1",
    "primaryVer": "2026.2.1",
    "allVersions": [
      "2026.2.1"
    ],
    "reports": 1,
    "workId": "W-23569523",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000006fItaAAE",
    "summary": "Inconsistent logging of user creation and deletion events in the Tableau Server Repository historical tables.",
    "created": 1785179155000,
    "updated": 1792166906000
  },
  {
    "id": "a02Ka00000gXlkwIAC",
    "name": "",
    "title": "Tableau Prep Builder with TC/TS: OAuth Credentials do not appear during publishing",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.1",
    "primaryVer": "2024.2.1",
    "allVersions": [
      "2024.2.1"
    ],
    "reports": 1,
    "workId": "W-18584729",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000gXlkwIAC",
    "summary": "When trying to publish a flow connecting to OneDrive and Sharepoint from Tableau Prep Builder, the embedded credentials are not available even though they are added under Saved Credentials on Tableau Cloud and Tableau Server",
    "created": 1751014452000,
    "updated": 1766421517000
  },
  {
    "id": "a02g7000006rH0rAAE",
    "name": "",
    "title": "Blurry or pixelated text on Tableau phone layout after selecting filters in a vertical container",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "Summer '16",
    "primaryVer": "",
    "allVersions": [],
    "reports": 0,
    "workId": "W-23749359",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000006rH0rAAE",
    "summary": "When viewing a dashboard with a custom phone layout (mobile device view) that contains a vertical filter container, text and visualization elements can appear blurry or pixelated after two or more filters have been selected. This has been observed across Tableau Mobile app, and mobile browsers (Safari on iOS, Chrome on Android), regardless of rendering settings. The degraded rendering persists until the page is refreshed, and adjusting the container height does not resolve it.",
    "created": 1786092117000,
    "updated": 1791350493000
  },
  {
    "id": "a02Ka00000hn1sEIAQ",
    "name": "",
    "title": "Tableau Cloud Client-side rendering misaligns X-Axis when tick mark settings are set to 'fixed'",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2025.2.0",
    "primaryVer": "2025.2.0",
    "allVersions": [
      "2025.2.0"
    ],
    "reports": 2,
    "workId": "W-19150850",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000hn1sEIAQ",
    "summary": "Also affects Tableau ServerWhen a workbook is configured to use fixed Major Tick Marks, and the X-axis uses future date values, client-side rendering misaligns the axis labels with the visualizations marks.",
    "created": 1754074977000,
    "updated": 1772722862000
  },
  {
    "id": "a02Ka00000ftcPhIAI",
    "name": "",
    "title": "Missing fields in a data source generated by the flow on Tableau Prep Builder or Tableau Cloud",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "Tableau Prep Builder 2024.1.4, 2024.2.4, 2025.1.2, Tableau Server 2024.2.x, 2025.1.x",
    "primaryVer": "2024.1.4",
    "allVersions": [
      "2024.1.4",
      "2024.2.4",
      "2025.1.2",
      "2024.2",
      "2025.1"
    ],
    "reports": 2,
    "workId": "W-18252520",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000ftcPhIAI",
    "summary": "The issue of missing fields in the data source generated by the flow. The issue does not occur when output file is CSV or Excel. Certain calculated fields that appear in output preview of flow are not included in the output of hyper file or the published data source Tableau Server after the flow is run.",
    "created": 1750061632000,
    "updated": 1764695243000
  },
  {
    "id": "a02g700000Abrh7AAB",
    "name": "",
    "title": "Duplicate Column Headers Displayed When Viewing a Single-Row View",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2026.2",
    "primaryVer": "2026.2",
    "allVersions": [
      "2026.2"
    ],
    "reports": 1,
    "workId": "W-24011185",
    "url": "https://help.salesforce.com/s/issue?id=a02g700000Abrh7AAB",
    "summary": "When a dashboard or view containing a table with column/row borders is published to Tableau Cloud and displayed with only a single row of data, the column headers may render twice.This issue can also happen in Tableau Server 2026.2 or later.",
    "created": 1790319674000,
    "updated": 1790806995000
  },
  {
    "id": "a028c00000zL8DPAA0",
    "name": "",
    "title": "Tableau Desktop - Buffer and Other Spatial Functions Not Available for Published Extract Data Sources",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.0+",
    "primaryVer": "2024.2.0",
    "allVersions": [
      "2024.2.0"
    ],
    "reports": 41,
    "workId": "W-16509414",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zL8DPAA0",
    "summary": "Note: this article's status was previously showing \"Working as Expected\" incorrectly.When connecting to an extract published to either Tableau Cloud or Tableau Server using Tableau Desktop 2024.2.0 and higher, spatial functions such as BUFFER, INTERSECT, and OUTLINE are not available in the Calculated Field editor.Additionally, existing published data sources already containing these functions, or opening workbooks using these data sources, may show an error message saying the calculation is inv",
    "created": 1723828835000,
    "updated": 1772758592000
  },
  {
    "id": "a02Ka00000mT7SEIA0",
    "name": "",
    "title": "Tableau Prep Builder 2025.3.1+ Fails to Launch on Azure Virtual Desktop",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.3.1+",
    "primaryVer": "2025.3.1",
    "allVersions": [
      "2025.3.1"
    ],
    "reports": 7,
    "workId": "W-21309966",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mT7SEIA0",
    "summary": "Tableau Prep Builder 2025.3.1+ fails to launch in virtual machine environments, specifically Azure Virtual Desktop. The Windows Task Manager shows that the Tableau Prep Builder.exe is running, but the splash screen and UI do not appear.",
    "created": 1772170945000,
    "updated": 1787712967000
  },
  {
    "id": "a02Ka00000mH3FoIAK",
    "name": "",
    "title": "Receiving an 'Unknown Worksheet Name' Error When Attempting To Access Dashboard(s) on Tableau Cloud",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.2",
    "primaryVer": "2025.2",
    "allVersions": [
      "2025.2"
    ],
    "reports": 2,
    "workId": "W-22815067",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mH3FoIAK",
    "summary": "When attempting to access Dashboards on a Tableau Cloud site, users are receiving an 'Unknown Worksheet Name' error when attempting to load the Views. ",
    "created": 1781038108000,
    "updated": 1784283158000
  },
  {
    "id": "a02Ka00000ePzmCIAS",
    "name": "",
    "title": "Incorrect behavior when displaying trillion abbreviations if user is using Tableau product in Japanese.",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2025.1.0",
    "primaryVer": "2025.1.0",
    "allVersions": [
      "2025.1.0"
    ],
    "reports": 1,
    "workId": "W-18339367",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000ePzmCIAS",
    "summary": "When the language is set to Japanese, different behaviors were observed between Tableau Desktop and Tableau Server/Tableau Cloud when the value reached a value equivalent to trillions.When abbreviating Trillion by T, the behavior is strange after publishing to Tableau Server/Tableau Cloud.",
    "created": 1746094652000,
    "updated": 1748480283000
  },
  {
    "id": "a028c00000xAfKDAA0",
    "name": "",
    "title": "Tableau Desktop/Web Edit - Incorrect reference of a Parameter when it is added to a Web Page Object",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.4",
    "primaryVer": "2022.4",
    "allVersions": [
      "2022.4"
    ],
    "reports": 2,
    "workId": "W-14411304",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000xAfKDAA0",
    "summary": "When a parameter with string value is added to the URL of a Web Page object, a strange error \"%3Cparameters.url%3E\u2019s server IP address could not be found\" (the parameter name can vary) may appear. This appears to be an authoring issue - in other words, the issue only occurs with new workbooks, or when the Web Page object is modified.The issue is observed as of 2022.4.",
    "created": 1698962393000,
    "updated": 1719886595000
  },
  {
    "id": "a02Ka00000mGqX8IAK",
    "name": "",
    "title": "Cannot Connect to Published Data Sources in New Flows Using Tableau Prep Builder or Web Authoring in Tableau Cloud",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2026.1",
    "primaryVer": "2026.1",
    "allVersions": [
      "2026.1"
    ],
    "reports": 3,
    "workId": "W-22460687",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mGqX8IAK",
    "summary": "When attempting to connect to a published data source and add a table to a new flow using Tableau Prep Builder or Web Authoring in Tableau Cloud, the process may intermittently fail and an error message is displayed.This issue specifically occurs during the creation of new flows. Existing flows already connected to published data sources can be opened and run without errors.Note: This issue does NOT affect all Tableau Cloud sites.",
    "created": 1780304988000,
    "updated": 1785286798000
  },
  {
    "id": "a028c00000zhP2QAAU",
    "name": "",
    "title": "Attempting to refresh a workbook with a hyper file as an embedded data source in Tableau Bridge 2024.2 will return an error",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2024.2",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 0,
    "workId": "W-16313760",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zhP2QAAU",
    "summary": "Using Tableau Bridge 2024.2, attempting to refresh a workbook that uses a .hyper file as an embedded data source will fail with the following error:TableauRuntimeException: [SQLSTATE:58S01] error opening database 'Extract 01': There was an error during loading database: unable to resolve the database path: Directory does not exist: DatabaseId: \"hyper.file:/***/Extract 01.hyper\" Unable to connect to the Tableau Data Extract server \"\". Check that the server is running and that you have access priv",
    "created": 1727277613000,
    "updated": 1731006647000
  },
  {
    "id": "a02Ka00000lZDxTIAW",
    "name": "",
    "title": "Snowflake Key Pair Auth: Tableau Desktop Publish Dialog Incorrectly Shows Case-insensitive Roles",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.2.4",
    "primaryVer": "2025.2.4",
    "allVersions": [
      "2025.2.4"
    ],
    "reports": 1,
    "workId": "W-20378065",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000lZDxTIAW",
    "summary": "When attempting to publish a Snowflake data source using Key Pair Authentication from Tableau Desktop, the following behavior is observed:The \"Authentication\" dropdown list for embedded credentials incorrectly displays all saved credentials that match the user and server. This occurs regardless of the specific case-sensitive role that was specified during the data source connection setup.\u00a0",
    "created": 1764744762000,
    "updated": 1766165564000
  },
  {
    "id": "a02Ka00000jeTsjIAE",
    "name": "",
    "title": "Error \"Can't connect to Looker by Google\" Connecting to Looker From Tableau Cloud",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.2",
    "primaryVer": "2025.2",
    "allVersions": [
      "2025.2"
    ],
    "reports": 0,
    "workId": "W-19563447",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000jeTsjIAE",
    "summary": "When attempting to connect to Looker from Tableau Cloud, the following error occurs: Can't connect to Looker by Google'void kotlin.jvm.internal.FunctionReferencelmpl.<init>(int, java.lang.Class, java.lang.String, java.lang.String, int)' Unable to connect to the Looker by Google server \"cloud.looker.com\". Check that the server is running and that you have access privileges to the requested database.",
    "created": 1757431788000,
    "updated": 1772745189000
  },
  {
    "id": "a02Ka00000mGKKBIA4",
    "name": "",
    "title": "Tableau Cloud: \"Unexpected Error\" When Saving OAuth Connection Changes for Input Data Sources in Edit Connection Dialog",
    "status": "Solution in Progress",
    "statusType": "open",
    "foundIn": "2026.1",
    "primaryVer": "2026.1",
    "allVersions": [
      "2026.1"
    ],
    "reports": 0,
    "workId": "W-23740892",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mGKKBIA4",
    "summary": "When attempting to save OAuth credentials in the Flow connection edit screen on Tableau Cloud, the updateConnectionsOAuth API fails and an \"An unexpected error occurred\" error is displayed.Test Connection succeedsEven though the error is displayed, the input OAuth username is saved in flow's \"Usernames\" columns of \"Connection\" tab of the flow",
    "created": 1779081255000,
    "updated": 1791262284000
  },
  {
    "id": "a028c000010F1OnAAK",
    "name": "",
    "title": "Tableau Desktop SAP NetWeaver Business Warehouse Connection returns empty connection dropdown with SAP GUI 8.00 PL9 64 bit",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.3, 2024.2, 2024.1, 2023.3, 2023.2, 2023.1, 2022.4, 2022.3, 2022.2",
    "primaryVer": "2024.3",
    "allVersions": [
      "2024.3",
      "2024.2",
      "2024.1",
      "2023.3",
      "2023.2",
      "2023.1",
      "2022.4",
      "2022.3",
      "2022.2"
    ],
    "reports": 3,
    "workId": "W-17679184",
    "url": "https://help.salesforce.com/s/issue?id=a028c000010F1OnAAK",
    "summary": "Note that this issue also impacts Tableau ServerTableau Desktop fails to display SAP NetWeaver Business Warehouse connection options when using SAP GUI 8.00 64-bit. The same works with SAP GUI 7.70 PL10 and\u00a0SAP GUI 8.00 32-bit.",
    "created": 1739142916000,
    "updated": 1762251775000
  },
  {
    "id": "a028c00000y4yrIAAQ",
    "name": "",
    "title": "NOW() returns timestamp in timezone of Tableau Cloud pod where data source is published as Live connection via Tableau Bridge",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2024.1.0",
    "primaryVer": "2024.1.0",
    "allVersions": [
      "2024.1.0"
    ],
    "reports": 1,
    "workId": "W-15628246",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000y4yrIAAQ",
    "summary": "Issue occurs when NOW() is created after connecting to published data source(i.e. IBM DB2, PostgreSQL and Microsoft SQL Server at least) with Live connection via Tableau Bridge.NOW() returns timestamp in timezone of Tableau Cloud pod where data source is published and connected via Tableau Bridge.\u00a0In a workbook, TODAY() function and NOW() function return different date value if connecting to a published datasource (from at least IBM DB2, PostgreSQL and Microsoft SQL Server) with Live connection ",
    "created": 1714534804000,
    "updated": 1766632390000
  },
  {
    "id": "a028c00000zjmRiAAI",
    "name": "",
    "title": "Contents in only one site are tagged when tagging Stale Content in the Stale Content admin view accessed from \"Server\" status",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 1,
    "workId": "W-17409373",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zjmRiAAI",
    "summary": "When tagging Stale Content in the Stale Content admin view accessed from \"Server\" status (not Site status of each site), only one site contents are tagged even though contents in other sites are presented in the view.",
    "created": 1733898040000,
    "updated": 1764971420000
  },
  {
    "id": "a02Ka00000ho9S1IAI",
    "name": "",
    "title": "Although the Date Parameter in Tableau Desktop Is Set to \"12/31/9999\", the View Displays \"12/31/7999\"",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "All supported versions",
    "primaryVer": "",
    "allVersions": [],
    "reports": 0,
    "workId": "W-19183952",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000ho9S1IAI",
    "summary": "A date parameter's current value is set to \"12/31/9999\". However, it displays as \"12/31/7999\" in Tableau Desktop.After publishing to Tableau Server or Tableau Cloud, it correctly shows \"12/31/9999\" in the browser.",
    "created": 1754446347000,
    "updated": 1783488202000
  },
  {
    "id": "a02Ka00000mQlXWIA0",
    "name": "",
    "title": "No Queries Appear Under Data Queries In The Tableau Resource Monitoring Tool Version 2025.3",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.3",
    "primaryVer": "2025.3",
    "allVersions": [
      "2025.3"
    ],
    "reports": 0,
    "workId": "W-21051097",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mQlXWIA0",
    "summary": "After upgrading or with a fresh install to the Tableau Resource Monitoring Tool Version 2025.3, the Data Queries tab will appear empty.",
    "created": 1770071917000,
    "updated": 1784242182000
  },
  {
    "id": "a02Ka00000mGOeMIAW",
    "name": "",
    "title": "Prep flows fail with SQLSTATE:08006 error when concurrent flows share same source file",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2025.1.5",
    "primaryVer": "2025.1.5",
    "allVersions": [
      "2025.1.5"
    ],
    "reports": 3,
    "workId": "W-22586576",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mGOeMIAW",
    "summary": "On Tableau Server 2025.1.5 and later, Tableau Prep Conductor flow jobs fail with the error SQLSTATE:08006 when there are concurrent flow run jobs that share the same source file.",
    "created": 1779322629000,
    "updated": 1791305508000
  },
  {
    "id": "a02Ka00000ilbI0IAI",
    "name": "",
    "title": "Error \"clientId is marked non-null but is null\" When Refreshing OAuth Data Sources via Tableau Bridge in Tableau Cloud 2025.3",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.3",
    "primaryVer": "2025.3",
    "allVersions": [
      "2025.3"
    ],
    "reports": 3,
    "workId": "W-20287276",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000ilbI0IAI",
    "summary": "After upgrading to Tableau Cloud 2025.3, extract refreshes for OAuth-based data sources (such as Box) that are configured to use a Private Network (Tableau Bridge) may fail.When this issue occurs, the refresh job fails, and the following error message is displayed in the job details:clientId is marked non-null but is nullThis issue is specific to data sources using OAuth authentication routed through Tableau Bridge.",
    "created": 1763704477000,
    "updated": 1783489860000
  },
  {
    "id": "a02Ka00000hDUJqIAO",
    "name": "",
    "title": "In a Web Authoring Session Connection to Data Cloud Fails if the Tableau Sever 2024.2, Site Name Contains Unicode Characters",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 0,
    "workId": "W-18985103",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000hDUJqIAO",
    "summary": "When connecting to Data Cloud from a CJK-named Tableau Server site, the error \"Lost connection to Tableau\" occurs.",
    "created": 1752704959000,
    "updated": 1756919401000
  },
  {
    "id": "a02g700000BzQvfAAF",
    "name": "",
    "title": "Tableau Cloud Private Network Allowlist rejects hostnames containing underscores (_) after the 2026.3 release",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 0,
    "workId": "W-24465242",
    "url": "https://help.salesforce.com/s/issue?id=a02g700000BzQvfAAF",
    "summary": "After the Tableau Cloud 2026.3 upgrade, customers who use Private Network connectivity may be unable to add new entries to the Private Network Allowlist if the hostname or domain contains an underscore (_). This affects hostnames such as Oracle TNS names and aliases that include underscores. The error \"Domain and subdomains cannot have underscores\" is returned. Entries added before the upgrade continue to work. Only new entries are affected. Hostname validation was made stricter in this release,",
    "created": 1792396599000,
    "updated": 1792397282000
  },
  {
    "id": "a02Ka00000fuhiMIAQ",
    "name": "",
    "title": "Background map in Tableau Cloud dashboard unexpectedly changed from Japanese to English",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.2",
    "primaryVer": "2025.2",
    "allVersions": [
      "2025.2"
    ],
    "reports": 8,
    "workId": "W-18813554",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000fuhiMIAQ",
    "summary": "Background map in Tableau Cloud dashboard unexpectedly changed from Japanese to English.The workbook locale is set to Japanese, so background maps display in Japanese in Tableau Desktop but it changes to in English when published to Tableau Cloud. This issue occurs only with server rendering.Tableau DesktopTableau Cloud",
    "created": 1750650475000,
    "updated": 1753469281000
  },
  {
    "id": "a028c00000ziWO7AAM",
    "name": "",
    "title": "Running flow shows \"Parameter settings must first be enabled on this server....\" error",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "All",
    "primaryVer": "",
    "allVersions": [],
    "reports": 3,
    "workId": "W-17065730",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000ziWO7AAM",
    "summary": "When attempting to run flow from Flow editor, an alert appears and it says \"Parameter settings must first be enabled on this server....\". This issue occurs in case \"Let users to run and schedule flows that use parameters\" is Unchecked, even if parameters are not being used.This issue is specific to the Flow editor. The flow can still be run using \"Run Now\" or by scheduling a task.",
    "created": 1730256481000,
    "updated": 1742490067000
  },
  {
    "id": "a028c00000zJF8TAAW",
    "name": "",
    "title": "Installing RMT 2023.3 on Windows Server 2016 results in a RabbitMQ connection error",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2023.3",
    "primaryVer": "2023.3",
    "allVersions": [
      "2023.3"
    ],
    "reports": 1,
    "workId": "W-15805275",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zJF8TAAW",
    "summary": "Installing RMT 2023.3 on Windows Server 2016 results in the following RabbitMQ connection error:Message queue authentication configuration is invalid: Client certificate password is not validRMT 2023.3 uses a more secure algorithm in it's connection to RabbitMQ, but it is not supported correctly by Windows Server 2016.",
    "created": 1718809728000,
    "updated": 1721745894000
  },
  {
    "id": "a02Ka00000kVU4tIAG",
    "name": "",
    "title": "Ephemeral User (On-Demand Access) Breaks Row-level Security (RLS) After Overwriting Data Source with Local Copy in Tableau Cloud",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2025.2",
    "primaryVer": "2025.2",
    "allVersions": [
      "2025.2"
    ],
    "reports": 2,
    "workId": "W-20054837",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000kVU4tIAG",
    "summary": "After editing any field in a data source created by local copy and republishing it to overwrite the original, the Row-Level Security (RLS) conditions may break in workbooks using a Usage-Based License (UBL) when user names are passed through User Functions.",
    "created": 1762192556000,
    "updated": 1785175973000
  },
  {
    "id": "a028c000010FKfrAAG",
    "name": "",
    "title": "Error \"Package signature verification failed\"  Loading a View Connected to Starburst Enterprise on Tableau Cloud",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.3",
    "primaryVer": "2024.3",
    "allVersions": [
      "2024.3"
    ],
    "reports": 3,
    "workId": "W-17705797",
    "url": "https://help.salesforce.com/s/issue?id=a028c000010FKfrAAG",
    "summary": "When loading a view in Tableau Cloud that uses a connection to Starburst Enterprise, the following error message might appear:An unexpected error occurred. If you continue to receive this error please contact your Tableau Server AdministratorSession ID: <session ID>An error occurred while communicating with Starburst Enterprise by StarburstPackage signature verification failed during connection creation.DataServiceFailureThere was an error with the data source \"<name of data source>\" . Verify th",
    "created": 1740006035000,
    "updated": 1787953325000
  },
  {
    "id": "a028c00000ziMCWAA2",
    "name": "",
    "title": "400 Bad Request \"Server Down\" returned by Add User to Site REST API when adding a user with @ symbol in username to Identity Pool",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2023.1.8",
    "primaryVer": "2023.1.8",
    "allVersions": [
      "2023.1.8"
    ],
    "reports": 0,
    "workId": "W-16836825",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000ziMCWAA2",
    "summary": "When adding users via REST API to a non-default Identity Pool, and that username contains an @ symbol, the REST API \"Add User to Site\" will return a 400 error due to \"Server Down\".This does not happen when:Adding to the default identity pool, orIf the default identity store on Tableau Server is \"Local\", orIf adding the user in the Tableau Server GUI",
    "created": 1729807041000,
    "updated": 1734393726000
  },
  {
    "id": "a02Ka00000lnrYCIAY",
    "name": "",
    "title": "Extract Refreshes Fail with \"encountered issue for storing separate reduced tdsx\" when Internal Repository Table Grows Too Large",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2, 2025.1",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2",
      "2025.1"
    ],
    "reports": 1,
    "workId": "W-20608613",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000lnrYCIAY",
    "summary": "When Tableau Server is experiencing storage latency issues, we may see a high volume of Extract failures with \u201cencountered issue for storing separate reduced tdsx\u201d errors. This indicates that storage is blocked, locked, or suffering from significant latency, and the last step of the Extract creation process is failing as a result.There are a number of potential causes, including interference from security software or issues with your storage, network, etc. It can also be a combination of sources",
    "created": 1769130344000,
    "updated": 1789504165000
  },
  {
    "id": "a028c00000zj0p3AAA",
    "name": "",
    "title": "When Server-Side Rendering, Web Images May Display with a Black Background and Left Alignment",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.3.0, Tableau Desktop 2024.3.0",
    "primaryVer": "2024.3.0",
    "allVersions": [
      "2024.3.0",
      "2024.3.0"
    ],
    "reports": 4,
    "workId": "W-17043821",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zj0p3AAA",
    "summary": "When using server-side rendering, web images might appear with a black background and become left-aligned.",
    "created": 1731608009000,
    "updated": 1742365762000
  },
  {
    "id": "a02Ka00000mHPyBIAW",
    "name": "",
    "title": "Flow Name Is Missing When Opening Job Details From Job List",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "All",
    "primaryVer": "",
    "allVersions": [],
    "reports": 1,
    "workId": "W-23063832",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mHPyBIAW",
    "summary": "A flow's name and link disappear from previous job details, though they remain visible for the current run. This occurs under the following conditions:Using Tableau Cloud, or Tableau Server without Data Management.A flow with existing job history is re-published and run.Note: Data Management capabilities are only available if you previously purchased Data Management as an add-on license, or if you use specific license editions\u2014either Tableau Enterprise (for Tableau Server or Tableau Cloud) or Ta",
    "created": 1782196241000,
    "updated": 1787936549000
  },
  {
    "id": "a028c00000zIYBJAA4",
    "name": "",
    "title": "Connections pane doesn't show \"To a Server\" connectors returned when creating a new flow.",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "Tableau Server 2022.3.10 and later",
    "primaryVer": "2022.3.10",
    "allVersions": [
      "2022.3.10"
    ],
    "reports": 0,
    "workId": "W-14856916",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zIYBJAA4",
    "summary": "Connections pane doesn't show \"To a Server\" connectors returned when creating a new flow.",
    "created": 1716799325000,
    "updated": 1723526888000
  },
  {
    "id": "a02Ka00000lYbc8IAC",
    "name": "",
    "title": "Republishing a datasource through WebEdit causes the embedded credential authentication username to reset to the previously stored username.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "Summer '16",
    "primaryVer": "",
    "allVersions": [],
    "reports": 0,
    "workId": "W-21066266",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000lYbc8IAC",
    "summary": "When the Tableau Server option 'Let users save passwords for data sources' is enabled, and the authentication user name in the connection of a published datasource has been changed from\u00a0A\u00a0to\u00a0B, if try to edit the datasource and republish it, the user name in the embedded credential of this published datasource will be reverted to\u00a0A.The issue will not occur when disabling the option 'Let users save passwords for data sources'.",
    "created": 1764572722000,
    "updated": 1784028298000
  },
  {
    "id": "a02g7000007B9VNAA0",
    "name": "",
    "title": "Error \"SAML assertion not found\" Connecting to Amazon Redshift DSN Using AD FS SAML Authentication via 2.x ODBC driver.",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 0,
    "workId": "W-23827607",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000007B9VNAA0",
    "summary": "When connecting Tableau Desktop (2023.3 and later) to Amazon Redshift via \"Other Databases (ODBC)\" using the Amazon Redshift ODBC Driver 2.x with AD FS SAML Authentication (plugin_name=ADFS), the connection fails with:\"[Redshift][ODBC Driver][Server][860:8:IAMConnectionError]: SAML assertion not found. (Error Code: B19090E0)\"This occurs because Tableau Desktop automatically prepends \"IAM:\" to the database username (e.g., UID=IAM:<DbUser>) at the end of the generated connection string. This right",
    "created": 1787058379000,
    "updated": 1790981179000
  },
  {
    "id": "a02Ka00000mmDx5IAE",
    "name": "",
    "title": "Attempts an Incremental Extract Refresh with Minimum Date Range Can Fail with LogicAssert 0x1849846D if the Existing Extract Contains 0 Rows",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1.9",
    "primaryVer": "2025.1.9",
    "allVersions": [
      "2025.1.9"
    ],
    "reports": 0,
    "workId": "W-21475757",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mmDx5IAE",
    "summary": "Attempts an incremental extract refresh with minimum date range can fail with LogicAssert 0x1849846D if the existing extract contains 0 rows. The issue can be reproduced in both Tableau Desktop and Tableau Server with any data source types.",
    "created": 1773716046000,
    "updated": 1790189642000
  },
  {
    "id": "a02Ka00000kWL0aIAG",
    "name": "",
    "title": "Error \"Unable to connect to data source\" When Connecting to a File On Azure GovCloud GCC OneDrive/Sharepoint Online Site",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1.1",
    "primaryVer": "2025.1.1",
    "allVersions": [
      "2025.1.1"
    ],
    "reports": 0,
    "workId": "W-19679966",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000kWL0aIAG",
    "summary": "Error when connecting to any file that resides on an Azure GovCloud GCC OneDrive/Sharepoint Online site via web editing on Tableau Server 2025.1.1 with the error \"Unable to connect to data source An error occurred when connecting to your data source. The data source might be corrupt or not valid.\"",
    "created": 1762814951000,
    "updated": 1764803433000
  },
  {
    "id": "a02Ka00000jg4e6IAA",
    "name": "",
    "title": "Extract Refresh Failures When Multiple Snowflake Key Pairs with the Same Username are Configured in Tableau Cloud.",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2025.1",
    "primaryVer": "2025.1",
    "allVersions": [
      "2025.1"
    ],
    "reports": 20,
    "workId": "W-19618683",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000jg4e6IAA",
    "summary": "When two Snowflake key pair authentication credentials are added to Tableau Cloud with the same username and private key file, but with different roles, extract refreshes may fail.",
    "created": 1757951327000,
    "updated": 1786638593000
  },
  {
    "id": "a02Ka00000mmUg6IAE",
    "name": "",
    "title": "Field selection state persists when publishing a workbook from Web Authoring after clearing the selection.",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "Tableau Cloud 2026.1, Tableau Server 2025.3.3, 2025.1.13, 2024.2.20",
    "primaryVer": "2026.1",
    "allVersions": [
      "2026.1",
      "2025.3.3",
      "2025.1.13",
      "2024.2.20"
    ],
    "reports": 1,
    "workId": "W-21642896",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mmUg6IAE",
    "summary": "In Tableau Cloud and Tableau Server, a published workbook may incorrectly retain a selected (highlighted) state on a field, even if that selection was cleared before saving and publishing via Web Authoring.This issue is triggered only when the following conditions are met:A Filter Action is configured.The \"Source Sheets\" and \"Target Sheet\" are set to the\u00a0same sheet.\"Clearing the selection will\" is set to \"Show all values\".Note: This issue has also been observed in Tableau Server versions 2025.3.",
    "created": 1774408133000,
    "updated": 1776134784000
  },
  {
    "id": "a02Ka00000frawvIAA",
    "name": "",
    "title": "Incorrect Result of the Tableau LEN Function When Connected to Published Data",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2025.1",
    "primaryVer": "2025.1",
    "allVersions": [
      "2025.1"
    ],
    "reports": 0,
    "workId": "W-18667296",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000frawvIAA",
    "summary": "In Tableau Desktop when connected to a published extract that has been refreshed, the LEN function displays incorrect values. The LEN function displays the same constant value for all rows instead of the correct LEN of each.",
    "created": 1749051348000,
    "updated": 1787552725000
  },
  {
    "id": "a028c00000zIPq6AAG",
    "name": "",
    "title": "Tableau Cloud - An error \"40550 Invalid character value for cast specification\" when Snowflake extract refresh fails in Tableau Cloud v2024.1",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "Tableau Cloud 20241.24.0328.1309, Tableau Desktop 2024.1.1",
    "primaryVer": "2024.1.1",
    "allVersions": [
      "2024.1.1"
    ],
    "reports": 0,
    "workId": "W-15668499",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zIPq6AAG",
    "summary": "Snowflake extract refreshes fail with an error: \"40550 Invalid character value for cast specification\"",
    "created": 1716496900000,
    "updated": 1790188043000
  },
  {
    "id": "a028c00000xB1LVAA0",
    "name": "",
    "title": "Server Administrators with a license level of Explorer do not display when sorting by 'Max Site Role'",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.3.7",
    "primaryVer": "2022.3.7",
    "allVersions": [
      "2022.3.7"
    ],
    "reports": 2,
    "workId": "W-14076750",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000xB1LVAA0",
    "summary": "If a user with a license level of Explorer (rather than 'Creator') is a Server Administrator, their account will not list in the 'Server Users' page when sorting by 'Max Site Role'. ",
    "created": 1699637928000,
    "updated": 1727370163000
  },
  {
    "id": "a02Ka00000mQmaTIAS",
    "name": "",
    "title": "Members of Group Sets not refreshed in Effective Permissions",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2025.3",
    "primaryVer": "2025.3",
    "allVersions": [
      "2025.3"
    ],
    "reports": 1,
    "workId": "W-20907708",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mQmaTIAS",
    "summary": "When viewing the Tableau asset's permissions and selecting the added Group Sets, the members not refreshed in the Effective Permissions section.\ufeffThis affects both Tableau Cloud and Tableau Server 2025.3 and newer.",
    "created": 1770170039000,
    "updated": 1781470278000
  },
  {
    "id": "a02Ka00000ll5MsIAI",
    "name": "",
    "title": "Unable to save text containing line break, copied and pasted into a text box during web authoring",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2, 2025.1, 2025.3",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2",
      "2025.1",
      "2025.3"
    ],
    "reports": 0,
    "workId": "W-20620535",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000ll5MsIAI",
    "summary": "When you copy and paste multiple lines of text, including line breaks, into a dashboard text box on Tableau Server while using web authoring, the text editor fails to save the entered content.",
    "created": 1766121023000,
    "updated": 1774020467000
  },
  {
    "id": "a028c00000yGC73AAG",
    "name": "",
    "title": "Site Administrator is unable to rename groups when the \"Managing Users\" (Specify who can add and remove users) is set to \"Only server Administrators\"",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3",
    "primaryVer": "2023.3",
    "allVersions": [
      "2023.3"
    ],
    "reports": 2,
    "workId": "W-14890163",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yGC73AAG",
    "summary": "When \"Managing Users\" (Specify who can add and remove users) is set to \"Only server administrators\" in \"Settings\" - \"General\" page, Site Administrator should be able to rename groups but not.In 2023.1 or earlier versions, it works as expected, but in 2023.3, Site Administrator is unable to rename groups because \"Edit Group Details...\", which is newly built in 2023.3, is unavailable:",
    "created": 1706587034000,
    "updated": 1722607729000
  },
  {
    "id": "a028c00000yDuAkAAK",
    "name": "",
    "title": "Flow sometimes fails with the Error \"The Hyper Server Closed The Connection Unexpectedly\"",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "Summer '16",
    "primaryVer": "",
    "allVersions": [],
    "reports": 0,
    "workId": "W-14200391",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yDuAkAAK",
    "summary": "Run flow job fails with the error \"The Hyper server closed the connection unexpectedly\" because the shadow extract was unloaded by another run flow job.The issue occurs when the following pre-conditions.A CSV input data source is used by multiple flows;The flow has more than one input data source hence the data federation will be used and a shadow extract will be created for the CSV file;There is more than one flow being kicked off at the same time.",
    "created": 1703556340000,
    "updated": 1719886588000
  },
  {
    "id": "a02Ka00000nqbCmIAI",
    "name": "",
    "title": "Compound Data sources show up multiple times when search in the \"Connect to Data\" dialog",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "Tableau Server  2025.3.x , 2026.2",
    "primaryVer": "2025.3",
    "allVersions": [
      "2025.3",
      "2026.2"
    ],
    "reports": 3,
    "workId": "W-22264378",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000nqbCmIAI",
    "summary": "Compound Data sources(Published data source) show up multiple times when search in the \"Connect to Data\" dialog.Version(s) Affected: Tableau Server  2025.3.x ,\u00a02026.2",
    "created": 1782380149000,
    "updated": 1791523722000
  },
  {
    "id": "a02Ka00000mEisdIAC",
    "name": "",
    "title": "Upgrading to 2024.2.18+ breaks live Redshift connections with IAM+Plugin auth on first attempt; succeeds on retry after saving password.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.0",
    "primaryVer": "2024.2.0",
    "allVersions": [
      "2024.2.0"
    ],
    "reports": 0,
    "workId": "W-22277982",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mEisdIAC",
    "summary": "After upgrading Tableau Server from 2023.1.16 to 2024.2.18, live Redshift connections embedded in a workbook and using IAM (Identity Access Management) + Plugin authentication fail on the first password prompt with an \"invalid credentials\" error, but will succeed on retry after saving the password.",
    "created": 1777656560000,
    "updated": 1784756379000
  },
  {
    "id": "a02Ka00000mmCN6IAM",
    "name": "",
    "title": "Map geographic coordinates (latitude/longitude) marks are not displaying on Tableau Cloud",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "Tableau Cloud 2026.1",
    "primaryVer": "2026.1",
    "allVersions": [
      "2026.1"
    ],
    "reports": 3,
    "workId": "W-21453221",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mmCN6IAM",
    "summary": "After Tableau Cloud upgraded to 2026.1, maps using geographic coordinates (latitude/longitude) are no longer displaying marks.",
    "created": 1773692109000,
    "updated": 1785199906000
  },
  {
    "id": "a02Ka00000mmUNXIA2",
    "name": "",
    "title": "Some FIPS 10 Country Codes Do Not Map Correctly, Resulting in \"Missing Location\" Errors or Incorrect Map Placements",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "All current Tableau versions",
    "primaryVer": "",
    "allVersions": [],
    "reports": 0,
    "workId": "W-21729928",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mmUNXIA2",
    "summary": "Tableau fails to identify some FIPS 10 country codes, resulting in unknown or incorrectly mapped geographic locations. While the issue can be temporarily resolved using the \u201cEdit Locations\u201d feature, these manual corrections do not persist after a Tableau Server backup and restore, causing the issue to reoccur.",
    "created": 1774367633000,
    "updated": 1781108237000
  },
  {
    "id": "a02Ka00000jgrPHIAY",
    "name": "",
    "title": "After Installing The Recent Tableau Bridge 2025.2+, The Mode Switching Screen May Not Be Displayed Depending On The Windows Display Scaling Settings",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.2",
    "primaryVer": "2025.2",
    "allVersions": [
      "2025.2"
    ],
    "reports": 8,
    "workId": "W-19552357",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000jgrPHIAY",
    "summary": "Tableau Bridge \u201cmode switching screen\u201d does not appear when the display scaling setting is not 100% on Windows.When Windows display scaling is set to 100%, it appears normally.",
    "created": 1758507809000,
    "updated": 1785472921000
  },
  {
    "id": "a028c00000zLawyAAC",
    "name": "",
    "title": "Tagging more than 1000 objects in \"Stale Content\" admin view results in error",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2022.3 or later",
    "primaryVer": "2022.3",
    "allVersions": [
      "2022.3"
    ],
    "reports": 1,
    "workId": "W-16603124",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zLawyAAC",
    "summary": "In built-in Tableau Server administrative views \"Stale Content\", selecting more than 1000 objects and marking them as \"Stale\" returns error.Issue happens in Tableau Server 2022.3 or later.",
    "created": 1725000522000,
    "updated": 1791889354000
  },
  {
    "id": "a028c00000iwTwAAAU",
    "name": "",
    "title": "Date axis scale shows different date in server rendering mode",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2021.1.13",
    "primaryVer": "2021.1.13",
    "allVersions": [
      "2021.1.13"
    ],
    "reports": 1,
    "workId": "W-12865859",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000iwTwAAAU",
    "summary": "The date axis scale shows a different date after publishing to Tableau Server when using server rendering mode and the range of dates is set to a period of two days.Originally tracked under Tableau TFS 1478663.",
    "created": 1681842985000,
    "updated": 1722608486000
  },
  {
    "id": "a02g70000064s81AAA",
    "name": "",
    "title": "Column headers for bin size may not update properly from parameter selection",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1.3",
    "primaryVer": "2025.1.3",
    "allVersions": [
      "2025.1.3"
    ],
    "reports": 0,
    "workId": "W-23428625",
    "url": "https://help.salesforce.com/s/issue?id=a02g70000064s81AAA",
    "summary": "On Tableau Server 2025.1.3 and later, column headers for bin size that are controlled by parameters may not update as expected. The parameter selection of the bin size may not be reflected in all views for headers which are controlled by that parameter.For example, if a view shows data that is grouped in bins that are sized using a parameter. Changing the parameter value from 5 to 10 may not result in the headers updating to show the data in bins of 10 instead of 5. If the parameter is used to c",
    "created": 1784059523000,
    "updated": 1787953364000
  },
  {
    "id": "a02Ka00000eNdtQIAS",
    "name": "",
    "title": "\"Reconnect to <Published Data Source Name>?\" Dialog Appears When Working on a Workbook in Tableau Desktop Connected to a Published Data Source",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 0,
    "workId": "W-17966513",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000eNdtQIAS",
    "summary": "When using Tableau Desktop to open multiple workbooks that access a published data source on Tableau Cloud or Tableau Server, actively working in multiple workbooks simultaneously (e.g., changing filters on workbooks) may cause a warning dialog showing the message: \u201cReconnect to <Published Data Source Name>?\u201d. Users may need to click \"Yes\" once or multiple times, depending on the number of sheets in the dashboard.Cause:Instances of Tableau Desktop share a refresh token when connecting to Tableau",
    "created": 1743648073000,
    "updated": 1750860287000
  },
  {
    "id": "a02Ka00000mmjBHIAY",
    "name": "",
    "title": "webpageUrl for federated data sources is missing, when running REST API query for datasources",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2026.1.0",
    "primaryVer": "2026.1.0",
    "allVersions": [
      "2026.1.0"
    ],
    "reports": 1,
    "workId": "W-21781581",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mmjBHIAY",
    "summary": "When using the Tableau REST API Query Data Sources endpoint (version 3.27 with Tableau Server 2025.3.4) with the fields parameter set to include webpageUrl, the field is silently omitted from the JSON response. This behavior appears specifically linked to the presence of federated data sources within the requested batch and the field are omitted once it hits a federated datasource in the list.Example query:http://<serverURL>/api/3.27/sites/<siteID>/datasources?fields=Id,contentUrl,webpageUrlResu",
    "created": 1774954334000,
    "updated": 1788848580000
  },
  {
    "id": "a02Ka00000mGtRiIAK",
    "name": "",
    "title": "Error when changing text data type to Geospatial type in Tableau Next",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 1,
    "workId": "W-22810469",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mGtRiIAK",
    "summary": "Tableau Next: Error when changing text data type to Geospatial type.Internal server error: Unhandled Internal error occurred. No enum constant com.salesforce.authoring.common.lib.enums.SemanticDataTypeInternalEnum.CountryThis is an issue with all Geospatial type changes.",
    "created": 1780473383000,
    "updated": 1782327599000
  },
  {
    "id": "a02Ka00000jho6EIAQ",
    "name": "",
    "title": "When creating an extract in Tableau from a live Snowflake connection, the number of rows and marks changes",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 8,
    "workId": "W-19318714",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000jho6EIAQ",
    "summary": "Note--this issue impacts Desktop, Prep Builder, Bridge, and ServerTableau Cloud is not impactedWhen creating an extract in Tableau from a live Snowflake connection, the number of rows and marks changes.",
    "created": 1759452268000,
    "updated": 1764678530000
  },
  {
    "id": "a02Ka00000gXZTRIA4",
    "name": "",
    "title": "Tableau RMT Shows Incorrect Data on the Insight Tab for Extract Refreshes",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2024.2.x",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 4,
    "workId": "W-18889682",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000gXZTRIA4",
    "summary": "Incorrect data may be seen for extract refreshes in RMT in the \"Longest Extract Refreshes\" section under the Insights tab.",
    "created": 1750924762000,
    "updated": 1778830782000
  },
  {
    "id": "a028c000010Fv0PAAS",
    "name": "",
    "title": "When using keyboard navigation on a published Tableau workbook, the Esc (escape) key is not collapsing open parameter drop down lists as expected.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3.0",
    "primaryVer": "2023.3.0",
    "allVersions": [
      "2023.3.0"
    ],
    "reports": 0,
    "workId": "W-17705464",
    "url": "https://help.salesforce.com/s/issue?id=a028c000010Fv0PAAS",
    "summary": "Issue also affects Tableau ServerWhen using keyboard navigation on a published Tableau workbook, the Esc (escape) key is not collapsing open parameter drop down lists as expected.",
    "created": 1741728802000,
    "updated": 1764957618000
  },
  {
    "id": "a02Ka00000f7q0vIAA",
    "name": "",
    "title": "Adding SAML users to Tableau Cloud site using \"authSetting\" parameter sets authentication type to Unspecified",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1.0",
    "primaryVer": "2025.1.0",
    "allVersions": [
      "2025.1.0"
    ],
    "reports": 1,
    "workId": "W-18482697",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000f7q0vIAA",
    "summary": "On a Tableau Cloud site where SAML was configured after November 2024, when adding users to a site using REST API, particularly when using Tableau Server Client Python library, users with the specified parameter authSetting will be successfully added to the site but will be unable to login. The user's authentication type will show as Unspecified.This is an expected behavior when using the parameter authSetting on sites where SAML was configured after November, 2024, as documented in the Tableau ",
    "created": 1747072527000,
    "updated": 1765210516000
  },
  {
    "id": "a02Ka00000hH9PtIAK",
    "name": "",
    "title": "In Some Cases Discrepancy in Duplicate Row Identification Between Prep Builder and Tableau Cloud occurs.",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2025.1",
    "primaryVer": "2025.1",
    "allVersions": [
      "2025.1"
    ],
    "reports": 1,
    "workId": "W-18949467",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000hH9PtIAK",
    "summary": "When executing the same Tableau Prep flow, a difference in output may be observed between local execution using Tableau Prep Builder, Tableau Server or Tableau Cloud if following conditions are met.Prep Builder, Tableau Server or Tableau Cloud are using different locales'Identify Duplicates Rows' is used in a cleanup step in the flow.The input data contains half-width spaces and case.Note: If 'Identify Duplicates Rows' is selected, it creates a calculated field that uses ROW_NUMBER() with the ke",
    "created": 1753417710000,
    "updated": 1754010743000
  },
  {
    "id": "a02Ka00000fuhiCIAQ",
    "name": "",
    "title": "OAuth Failures with Azure Data Lake Storage Gen2 connector in Certain Azure Regions on Tableau Products",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3, 2024.2, 2025.1, 2025.2",
    "primaryVer": "2023.3",
    "allVersions": [
      "2023.3",
      "2024.2",
      "2025.1",
      "2025.2"
    ],
    "reports": 26,
    "workId": "W-18838805",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000fuhiCIAQ",
    "summary": "Since around the weekend of June 14, extract refreshes using OAuth tokens issued by the Azure Data Lake Storage Gen2 connector have started failing when accessing Storage Accounts in certain Azure regions, such as \"Japan East.\" In addition, new connection attempts are also unsuccessful.Some versions of Tableau Desktop and Tableau Prep Builder don't display any error messages, just spinning animation.This is a Virtual Connection's error on Tableau Cloud/ServerSome versions of Tableau Desktop and ",
    "created": 1750645631000,
    "updated": 1757299798000
  },
  {
    "id": "a028c00000xB8rZAAS",
    "name": "",
    "title": "Tableau map data changes to accommodate Hamamatsu City districts change on January 1, 2024",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 1,
    "workId": "W-14484648",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000xB8rZAAS",
    "summary": "After January 1, 2024, Hamamatsu City in Japan will be merged/split and new data will be required as boundaries according to\u00a0https://www.city.hamamatsu.shizuoka.jp/hamaeng/kusaihen/index.html.As a result, starting in 2024, the current Tableau map data will not be able to show the correct cities and boundaries.Note that this also applies to Tableau Cloud and Tableau Server as well as Tableau Desktop.",
    "created": 1699945745000,
    "updated": 1719886589000
  },
  {
    "id": "a02Ka00000jhWyMIAU",
    "name": "",
    "title": "When Loading Views in Tableau Cloud, the error \"An Unexpected Error occurred. If you continue to receive this error ...\" appears.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.2",
    "primaryVer": "2025.2",
    "allVersions": [
      "2025.2"
    ],
    "reports": 1,
    "workId": "W-19709220",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000jhWyMIAU",
    "summary": "While loading data on a view in Tableau Cloud, users are given an error: \"An unexpected error occurred. If you continue to receive this error please contact your Tableau Server Administrator.\"",
    "created": 1758724820000,
    "updated": 1783950053000
  },
  {
    "id": "a028c00000zKOPYAA4",
    "name": "",
    "title": "Tableau View Rendering- Logic query exception when using a dimension from the secondary source on a blended extract connection",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2024.2",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 17,
    "workId": "W-16322741",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zKOPYAA4",
    "summary": "Impacts Tableau Cloud, Tableau Desktop & Tableau ServerWhen using blending from two extracts, adding one of the fields (listed as <fieldName> in the example below) from the secondary data source results in a logical query exception error.\"Logical Query missing field [TEMP(Tableau_lkup(federated.0lidp6d1njhkhs13edcwh0v4f87c)(none:<fieldName>:nk))(290714814)(0)] from aggregateOp. This is an invalid query\"",
    "created": 1721921946000,
    "updated": 1782114273000
  },
  {
    "id": "a028c00000zjQbyAAE",
    "name": "",
    "title": "The incremental flow using a field name with underscore constantly fails on Tableau Cloud",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.3",
    "primaryVer": "2024.3",
    "allVersions": [
      "2024.3"
    ],
    "reports": 2,
    "workId": "W-17320547",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zjQbyAAE",
    "summary": "Note: also impacts Tableau ServerThe newly created incremental refresh flow that uses a field name with an underscore has been failing since upgrading to Tableau Cloud 2024.3.",
    "created": 1732845032000,
    "updated": 1745854205000
  },
  {
    "id": "a02Ka00000hoyu9IAA",
    "name": "",
    "title": "Publishing multiple large extracts to Tableau Cloud parallely via TSC fails with HTTP 408 timeout after 45 seconds.",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "Summer '16",
    "primaryVer": "",
    "allVersions": [],
    "reports": 0,
    "workId": "W-19257213",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000hoyu9IAA",
    "summary": "When attempting to publish large extracts to Tableau Cloud using the Python Tableau Server Client (TSC) library, the operation may fail intermittently with an HTTP 408 error. This typically occurs when publishing in parallel or when the extract size is large (e.g., several hundred MBs or more).The issue stems from a gateway timeout on Tableau Cloud: the gateway attempts to buffer the request body before forwarding it to Vizportal but does not complete this within the 45-second timeout, leading t",
    "created": 1754628788000,
    "updated": 1784282210000
  },
  {
    "id": "a028c00000yDTE0AAO",
    "name": "",
    "title": "Tableau Metadata API duplicates the 'greater than' and 'lesser than' characters in some responses.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3.0,2023.1.2,2022.3.8",
    "primaryVer": "2023.3.0",
    "allVersions": [
      "2023.3.0",
      "2023.1.2",
      "2022.3.8"
    ],
    "reports": 0,
    "workId": "W-14543248",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yDTE0AAO",
    "summary": "Tableau Metadata API duplicates the 'greater than' and 'lesser than' characters in some responses.",
    "created": 1702572615000,
    "updated": 1791221519000
  },
  {
    "id": "a02Ka00000hooLpIAI",
    "name": "",
    "title": "Google BigQuery Service Account Credentials Not Retained After Publishing Workbook with Multiple Embedded Data Sources",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2025.2.0",
    "primaryVer": "2025.2.0",
    "allVersions": [
      "2025.2.0"
    ],
    "reports": 6,
    "workId": "W-19024461",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000hooLpIAI",
    "summary": "After publishing a workbook to Tableau Cloud /Tableau Server containing multiple Google BigQuery data sources embedded with Service Account credentials, some of the embedded data sources may show as having \"no authentication\" or \"Prompt User\" in the UI.",
    "created": 1754597833000,
    "updated": 1792647654000
  },
  {
    "id": "a02Ka00000gbKrrIAE",
    "name": "",
    "title": "Web Data Connector (WDC) 2.0 Data Sources Fail To Refresh When Embedded In A Workbook In Tableau Cloud",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2025.1",
    "primaryVer": "2025.1",
    "allVersions": [
      "2025.1"
    ],
    "reports": 0,
    "workId": "W-19018321",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000gbKrrIAE",
    "summary": "After running a refresh on a WDC 2.0 data source in Tableau Cloud the following error appears for the refresh:\"com.tableausoftware.server.status.reporting.TableauRuntimeException: An error occurred when refreshing extracts for the workbook '<workbook name>'. Tableau doesn't support extract refreshes for one or more data sources in your workbook. (errorCode=60007)\"",
    "created": 1752507108000,
    "updated": 1784006527000
  },
  {
    "id": "a02Ka00000fthAQIAY",
    "name": "",
    "title": "On Tableau Cloud, Published Prep Flow Fails to Read Uploaded Text Files (CSV/TXT)",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.2.0",
    "primaryVer": "2025.2.0",
    "allVersions": [
      "2025.2.0"
    ],
    "reports": 3,
    "workId": "W-18788792",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000fthAQIAY",
    "summary": "A Tableau Prep flow, after being published to Tableau Cloud, fails to read input text files (such as CSV and TXT). This issue arises even when the files are uploaded directly to Tableau Cloud during the publishing process by selecting \"Upload\" in the \"Connections\" section of the \"Publish Flow to Tableau Cloud\" window in Tableau Prep Builder.The error occurs during both flow execution and when editing the flow on Tableau Cloud.During flow execution, the following error message appears:Failed to c",
    "created": 1750212512000,
    "updated": 1757343632000
  },
  {
    "id": "a028c00000yDkEiAAK",
    "name": "",
    "title": "Flow with a hyper file input stored in a windows shared directory fails, if it is published from Tableau Prep Builder.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "We confirmed this issue at least in these versions: 2022.3.9, 2023.1.6, 2023.3.0",
    "primaryVer": "2022.3.9",
    "allVersions": [
      "2022.3.9",
      "2023.1.6",
      "2023.3.0"
    ],
    "reports": 2,
    "workId": "W-14648115",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yDkEiAAK",
    "summary": "Flow with a hyper file input stored in a windows shared directory fails, if it is published from Tableau Prep Builder.",
    "created": 1703123492000,
    "updated": 1719886588000
  },
  {
    "id": "a02Ka00000ladVgIAI",
    "name": "",
    "title": "Setting permissions for User/Groups causes the UI to become unresponsive",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2025.3.0",
    "primaryVer": "2025.3.0",
    "allVersions": [
      "2025.3.0"
    ],
    "reports": 17,
    "workId": "W-20451289",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000ladVgIAI",
    "summary": "When setting User/Group permissions on a Project in Tableau Cloud/Server, adding a 12th or more users/groups can result in the permissions UI becoming unresponsive.",
    "created": 1765192850000,
    "updated": 1785941683000
  },
  {
    "id": "a02Ka00000iuRyRIAU",
    "name": "",
    "title": "Intermittent refresh extract failure with error \"Error creating bean with name 'remoteQueryConnectionAttributesHelper'\" in Tableau Cloud",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.2.0",
    "primaryVer": "2025.2.0",
    "allVersions": [
      "2025.2.0"
    ],
    "reports": 0,
    "workId": "W-19379755",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000iuRyRIAU",
    "summary": "Extract refreshes are intermittently failing in Tableau Cloud with the following error:This job failed on <MMM DD, YYYY, time> after running for 0.0 min because of: com.tableausoftware.server.status.reportin Error creating bean with name 'remoteQueryConnectionAttributesHelper': Singleton bean creation not allowed while singletons of this factory are in destruction (Do not request a bean from a BeanFactory in a destroy method implementation!)The error can occur with extracts refreshed through Tab",
    "created": 1755721018000,
    "updated": 1766165596000
  },
  {
    "id": "a02Ka00000hH1ovIAC",
    "name": "",
    "title": "Unable to Grant Access to Workbook with Special Characters in Workbook Name",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1.5",
    "primaryVer": "2025.1.5",
    "allVersions": [
      "2025.1.5"
    ],
    "reports": 0,
    "workId": "W-19062993",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000hH1ovIAC",
    "summary": "Users are encountering an error when attempting to grant access to Tableau Server and Tableau Cloud views via the \"Grant Access\" link in email notifications. This issue specifically affects views with special characters (such as \u00e5, \u00e4, \u00f6) in their names.When users click the \"Grant Access\" button from the email, they are redirected to a page displaying the error:\"Page unavailable \u2013 The content you are looking for doesn't exist.\"",
    "created": 1753189516000,
    "updated": 1783477583000
  },
  {
    "id": "a02Ka00000lkTIDIA2",
    "name": "",
    "title": "Error \"Conversion error at column... numeric value out of range. Error Code: A3E43C3B\" when Working with Snowflake Data Sources",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2024.2.17, 2025.1.10, 2025.2.5, 2025.3.1",
    "primaryVer": "2024.2.17",
    "allVersions": [
      "2024.2.17",
      "2025.1.10",
      "2025.2.5",
      "2025.3.1"
    ],
    "reports": 0,
    "workId": "W-20273345",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000lkTIDIA2",
    "summary": "Note--Issue impacts Tableau Cloud, Desktop, Prep Builder and ServerError \"[Snowflake][Support] (40470) Conversion error at column... numeric value out of range. Error Code: A3E43C3B\" when Working with Snowflake Data SourcesThis error occurs because the impacted data source contains a\u00a0NUMERIC\u00a0data type field containing a number that falls outside of the allowable range. The largest number allowed by Tableau falls inside the range for\u00a0SQL_C_SBIGINT data types. SQL_C_SBIGINT data types can range fr",
    "created": 1766010825000,
    "updated": 1784940575000
  },
  {
    "id": "a028c00000zJJbwAAG",
    "name": "",
    "title": "Cannot See all entities after Summer '23  in Tableau Dashboard.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 4,
    "workId": "W-16057563",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zJJbwAAG",
    "summary": "When tried to connect the Salesforce Org to Tableau we are not able to see the all Objects which get introduced after Summer '23 in dashboard.Tableau cannot access any entity introduced after 242 (Spring '23, Api Version 57.0). Fundraising entities are not visible until\u00a0API 59.0\u00a0because they were not introduced until 246.",
    "created": 1719000872000,
    "updated": 1722019328000
  },
  {
    "id": "a028c00000xaoEIAAY",
    "name": "",
    "title": "TS - An Unexpected Error Occurs when Trying to Get to the Second Page of the List of Server Users when Sorting on \"Last Signed In\"",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.3, 2023.1",
    "primaryVer": "2022.3",
    "allVersions": [
      "2022.3",
      "2023.1"
    ],
    "reports": 1,
    "workId": "W-14115033",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000xaoEIAAY",
    "summary": "When viewing the Users list in Tableau Server, sorting the entries by \"Last Signed In\" results in an error when attempting to scroll beyond the first page of users.",
    "created": 1696525244000,
    "updated": 1745346104000
  },
  {
    "id": "a02Ka00000fuFfmIAE",
    "name": "",
    "title": "Error \"TableauException: Incorrect data type integer, getting expected real type\" When Accessing Workbook Using a Live Connection with a Stored Proced",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.3",
    "primaryVer": "2024.3",
    "allVersions": [
      "2024.3"
    ],
    "reports": 0,
    "workId": "W-18797731",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000fuFfmIAE",
    "summary": "User receives an error \"TableauException: Incorrect data type integer, getting expected real type\" when accessing workbook using Stored Procedure in Tableau Cloud. This is issue is only occurring on direct live connection to the database and not on Tableau Bridge connections.",
    "created": 1750346277000,
    "updated": 1791300486000
  },
  {
    "id": "a02Ka00000kWL0QIAW",
    "name": "",
    "title": "Duplicate rows appear for Workbooks using Dual Axis columns with Placeholder Measures.",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2025.1",
    "primaryVer": "2025.1",
    "allVersions": [
      "2025.1"
    ],
    "reports": 0,
    "workId": "W-19642961",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000kWL0QIAW",
    "summary": "Opening Workbooks that utilize a Dual Axis and Placeholder Measures, e.g. MIN(0), there may be duplicate rows shown. Issue Occurs in both Tableau Desktop and Tableau Server.",
    "created": 1762814935000,
    "updated": 1770908339000
  },
  {
    "id": "a02Ka00000hHJc0IAG",
    "name": "",
    "title": "Users are unable to re-activate Tableau Desktop via LBLM due to an incorrect site name used in the IBA connection",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.3 - 2025.2.1",
    "primaryVer": "2022.3",
    "allVersions": [
      "2022.3",
      "2025.2.1"
    ],
    "reports": 2,
    "workId": "W-19121171",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000hHJc0IAG",
    "summary": "Users are unable to re-activate Tableau Desktop via LBLM due to an incorrect site name used in the IBA connection.",
    "created": 1753791253000,
    "updated": 1756920631000
  },
  {
    "id": "a028c00000zjXXcAAM",
    "name": "",
    "title": "100% CPU usage for two hours when one user is connecting to a published data source from Tableau Desktop.",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2022.1.21+",
    "primaryVer": "2022.1.21",
    "allVersions": [
      "2022.1.21"
    ],
    "reports": 8,
    "workId": "W-17128807",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zjXXcAAM",
    "summary": "100% CPU usage for two hours when one user is connecting to a published data source from Tableau Desktop.",
    "created": 1733158151000,
    "updated": 1780903864000
  },
  {
    "id": "a028c00000zioEnAAI",
    "name": "",
    "title": "\"Error: ENOENT: no such file or directory...\" Occurs When Connecting to Amazon S3 in Tableau Cloud on Hyperforce",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.3",
    "primaryVer": "2024.3",
    "allVersions": [
      "2024.3"
    ],
    "reports": 0,
    "workId": "W-16927941",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zioEnAAI",
    "summary": "When connecting to Amazon S3 data connection in Tableau Cloud on Hyperforce, an unexpected \"Error: ENOENT: no such file or directory...\"error occursFull error details:Error: ENOENT: no such file or directory, stat '/var/opt/tableau/tableau_server/data/tabsvc/services/vizqlserver_0.20243.24.1022.2337/vizqlserver/local/eps-connectors/app/s3-97a5fb62ad7a3487c240a6de1b7190c96921b08ee4b0f6789fcf24daa82dfe81/index.en_US.en_US.html`",
    "created": 1731102265000,
    "updated": 1732287953000
  },
  {
    "id": "a02Ka00000fAneNIAS",
    "name": "",
    "title": "While accessing workbook using Stored Procedure User receives an error \"TableauException: Incorrect data type integer, getting expected real type\"",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "Summer '16",
    "primaryVer": "",
    "allVersions": [],
    "reports": 1,
    "workId": "W-17958189",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000fAneNIAS",
    "summary": "User receives an error \"TableauException: Incorrect data type integer, getting expected real type\"\u00a0when accessing workbook using Stored Procedure (MSSQL in this repro).\u00a0This is issue is only occurring on Direct connection to the database and NOT on Tableau Bridge connections\u00a0(tested on 2 identical instances, bridge and direct connection)",
    "created": 1748428663000,
    "updated": 1778502391000
  },
  {
    "id": "a02Ka00000f8D7rIAE",
    "name": "",
    "title": "Tableau: Error when comments exceeds 512 bytes",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 1,
    "workId": "W-18483840",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000f8D7rIAE",
    "summary": "The issue can occur in Tableau Desktop, Server & CloudWhen loading a view which uses databricks, if driver version is 2.7.5, the following error will occur: comments exceed 512 bytes.",
    "created": 1747384041000,
    "updated": 1769551519000
  },
  {
    "id": "a028c00000yy8zgAAA",
    "name": "",
    "title": "Data story feature is not working when Tableau workbook is embedded in a website by using the trusted authentication.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1+",
    "primaryVer": "2023.1",
    "allVersions": [
      "2023.1"
    ],
    "reports": 0,
    "workId": "W-14979343",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yy8zgAAA",
    "summary": "When adding the data story feature to the workbook, the data story is not visible, and the tile throws an error: \"Could not write a story because Tableau could not interpret the data.\"\ufeff",
    "created": 1709201308000,
    "updated": 1722607553000
  },
  {
    "id": "a02Ka00000fAeNnIAK",
    "name": "",
    "title": "Redshift Extract refresh on Tableau Cloud takes longer after around March 30th, 2025",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1.0",
    "primaryVer": "2025.1.0",
    "allVersions": [
      "2025.1.0"
    ],
    "reports": 1,
    "workId": "W-18334898",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000fAeNnIAK",
    "summary": "Redshift extract refresh on Tableau Cloud takes longer after around March 30th, 2025.The Redshift ODBC driver version changed from 2.1.2 to 1.5.20 around that time. This change occurred due to issues with the Redshift ODBC Driver 2.X.Issues include the following:Missing fields with the data type \"timestamp with timezone\" on Tableau Cloud when connecting to Amazon Redshift.The column with the string data type in the external table using Redshift Spectrum is not displayed on Tableau Cloud after Au",
    "created": 1748267228000,
    "updated": 1750709572000
  },
  {
    "id": "a02Ka00000eON5FIAW",
    "name": "",
    "title": "Export Crosstab to CSV file consistently failed with \"Lost connection to Tableau\" message.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.3",
    "primaryVer": "2024.2.3",
    "allVersions": [
      "2024.2.3"
    ],
    "reports": 2,
    "workId": "W-18199258",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000eON5FIAW",
    "summary": "Issues arise when exporting Crosstab to CSV from a specific worksheet. The Excel export functions correctly.A \"Lost connection to Tableau\" message appears, resulting in session loss.Tableau Server logs indicate Vizqlserver crashes with a \"Stack overflow\" exception.",
    "created": 1744963891000,
    "updated": 1781099804000
  },
  {
    "id": "a028c00000tIETaAAO",
    "name": "",
    "title": "Tableau Bridge - Live connection failing using Custom SQL View in datasource that uses GetDate()",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2019.3",
    "primaryVer": "2019.3",
    "allVersions": [
      "2019.3"
    ],
    "reports": 0,
    "workId": "W-12966456",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000tIETaAAO",
    "summary": "When publishing or accessing a Tableau Online view that used the TableauServerUser variable with Tableau Bridge, a \"Cannot evaluate user filter\" or \"Unable to connect to the server\" error occurred.\u00a0Request is to support impersonation with Tableau Bridge.Previously tracked in TFS Item(s) 830502, 900096, 869056",
    "created": 1685044862000,
    "updated": 1732203376000
  },
  {
    "id": "a02g7000006pBCTAA2",
    "name": "",
    "title": "Virtual Connection error message does not accurately reflect site-role  restriction for non-Creator users",
    "status": "Solution in Progress",
    "statusType": "open",
    "foundIn": "2026.2.1",
    "primaryVer": "2026.2.1",
    "allVersions": [
      "2026.2.1"
    ],
    "reports": 1,
    "workId": "W-23723672",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000006pBCTAA2",
    "summary": "When a non-Creator user (such as Explorer, Explorer (Can Publish), or Viewer) attempts to connect to a Virtual Connection, they receive a generic transient-error message instead of a message that accurately identifies the site-role restriction as the cause.Under certain conditions, a site administrator may grant explicit permissions (such as \"Administer\") on a Virtual Connection to a user with a non-Creator site role. When that user then attempts to connect to the Virtual Connection in the web e",
    "created": 1785928693000,
    "updated": 1790317371000
  },
  {
    "id": "a02g700000AxseXAAR",
    "name": "",
    "title": "[Subscriptions] Button turns to \"Alerts\" when a workbook with multiple Snowflake live data sources (Key-Pair Auth) has \"Show sheets as tabs\" enabled",
    "status": "Solution in Progress",
    "statusType": "open",
    "foundIn": "2025.3.2, 2025.3.9, 2026.2.2",
    "primaryVer": "2025.3.2",
    "allVersions": [
      "2025.3.2",
      "2025.3.9",
      "2026.2.2"
    ],
    "reports": 0,
    "workId": "W-24367177",
    "url": "https://help.salesforce.com/s/issue?id=a02g700000AxseXAAR",
    "summary": "When a workbook containing two or more embedded live Snowflake data sources using Key-Pair authentication is published with \"Show sheets as tabs\" enabled, the Subscription feature becomes unavailable.Instead of showing the standard \"Subscribe\" or \"Watch\" button on the toolbar when viewing the published workbook, the button is replaced by an \"Alerts\" button.This issue occurs on both Tableau Server and Tableau Cloud.",
    "created": 1790923651000,
    "updated": 1792620484000
  },
  {
    "id": "a02Ka00000lYPUsIAO",
    "name": "",
    "title": "Decimal Values Become Null When Connecting to CSV on Box via Virtual Connection",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1",
    "primaryVer": "2025.1",
    "allVersions": [
      "2025.1"
    ],
    "reports": 2,
    "workId": "W-20264392",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000lYPUsIAO",
    "summary": "When connecting to a CSV file stored on Box via a Virtual Connection in Tableau Cloud or Tableau Server, the following symptoms occur:Data that should be a number with decimals (e.g., 123.45) is displayed as Null in Tableau.Even if the data type for the field is manually changed from the automatically detected \"Number (whole)\" to \"Number (decimal)\" in the Virtual Connection data settings, the value remains Null.",
    "created": 1764148631000,
    "updated": 1770832904000
  },
  {
    "id": "a028c00000xAQ4eAAG",
    "name": "",
    "title": "Installing Tableau Resource Monitoring Tool with the external RabbitMQ service fails to set the correct port",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1.2",
    "primaryVer": "2023.1.2",
    "allVersions": [
      "2023.1.2"
    ],
    "reports": 0,
    "workId": "W-14144422",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000xAQ4eAAG",
    "summary": "When following the steps to install Tableau Server Resource Monitoring Tool (RMT) with the external RabbitMQ option as documented here, executing the command in step (4):\ufeffrmtadmin master-setup --mq-config=external --mq-server=aws_amq_servername --mq-vhost='/' --mq-port=5671 --mq-username=aws_amq_username --mq-password='aws_amq_password' --mq-tls-certificate-host=aws_amq_servername...results in the mq port being set to 15671 with a failure to connect to the MQ service message.",
    "created": 1698700620000,
    "updated": 1720452418000
  },
  {
    "id": "a028c00000zIzG6AAK",
    "name": "",
    "title": "Tableau Prep Builder Does Not Delegate Where Conditions When Using The Denodo Connector",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2023.1.7",
    "primaryVer": "2023.1.7",
    "allVersions": [
      "2023.1.7"
    ],
    "reports": 3,
    "workId": "W-15480167",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zIzG6AAK",
    "summary": "When a filter is added\u00a0to a Denodo connection in Prep Builder, Prep Builder does not delegate WHERE conditions.This issue does not occur with Tableau Desktop nor Tableau Server, but this is specific to Prep Builder.",
    "created": 1718093386000,
    "updated": 1735918286000
  },
  {
    "id": "a02Ka00000mQoveIAC",
    "name": "",
    "title": "Subscription jobs occasionally fails with error code 0x56f74306",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.3",
    "primaryVer": "2025.3",
    "allVersions": [
      "2025.3"
    ],
    "reports": 2,
    "workId": "W-21182905",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mQoveIAC",
    "summary": "The subscription job occasionally failed with the following error:SubscriptionErrorResult: ErrorCode: 150068; Error Category: CAUSED_BY_NON_SUBSCRIPTION_SERVICE; Error message: VIZ_GENERATION_FAILED. The query limit resource limit (2700 seconds) was exceeded.;Unable to generate the view; Original exception: The query limit resource limit (2700 seconds) was exceeded.; Tableau Error Source: NEEDSCLASSIFICATION; Tableau Status Code: RESOURCE_EXHAUSTED; Tableau Error Code: 0x56f74306;<Subscription S",
    "created": 1770338482000,
    "updated": 1791912559000
  },
  {
    "id": "a028c00000zisXpAAI",
    "name": "",
    "title": "cloudmanager.tableau.com URL Does Not Redirect as Intended When Logging In to Tableau Cloud with SiteSAML From Tableau Desktop",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2024.2+",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 1,
    "workId": "W-16689206",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zisXpAAI",
    "summary": "When attempting to login to Tableau Cloud using Site SAML from Tableau Desktop, the login process fails when the \"cloudmanager.tableau.com\" URL is used to process the login request. This URL does not properly redirect to SSO as intended. ",
    "created": 1731362665000,
    "updated": 1750860284000
  },
  {
    "id": "a02Ka00000fubaCIAQ",
    "name": "",
    "title": "Tableau REST API: Reading and Setting Overwrite Permissions not Possible",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.0",
    "primaryVer": "2024.2.0",
    "allVersions": [
      "2024.2.0"
    ],
    "reports": 1,
    "workId": "W-15830859",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000fubaCIAQ",
    "summary": "When querying the capabilities from a virtual connection, the overwrite capability is missing from the results.At the same time, when trying to set the overwrite permission of a virtual connection a error occurs:\"Capability 'Overwrite' with mode 'Allow' could not be found.\"",
    "created": 1750412666000,
    "updated": 1766165663000
  },
  {
    "id": "a02g7000005wDjbAAE",
    "name": "",
    "title": "Error occurs with Composable Data Sources when adding connections to encrypted extracts",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2026.2.0",
    "primaryVer": "2026.2.0",
    "allVersions": [
      "2026.2.0"
    ],
    "reports": 1,
    "workId": "W-22625200",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000005wDjbAAE",
    "summary": "When creating a Composable Data Source that connects to an encrypted extract, the connection may fail with an error such as:[SQLSTATE:58030] error opening database 'federated_[ID]: There was an error during loading database: cannot unlock object store: wrong encryption key\u00a0Issue impacts Composable Published Data Sources, which is a new available feature in Tableau Cloud, and beginning in  Tableau Server and Tableau Desktop in 2026.2.0",
    "created": 1783624006000,
    "updated": 1783705781000
  },
  {
    "id": "a028c00000zK7bJAAS",
    "name": "",
    "title": "Unable to Interact with the Input Field of \"Edit Colors\" in Tableau Cloud",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 6,
    "workId": "W-15597678",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zK7bJAAS",
    "summary": "When attempting to set a custom Color value in the Edit Colors dialog for Tableau Cloud Web Authoring or Tableau Server Web Authoring, it is not possible to interact with the input field.",
    "created": 1721153028000,
    "updated": 1729031583000
  },
  {
    "id": "a028c00000zIxpFAAS",
    "name": "",
    "title": "Tableau Desktop - Dashboards connected live to parquet files on Amazon S3 do not load",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3.2",
    "primaryVer": "2023.3.2",
    "allVersions": [
      "2023.3.2"
    ],
    "reports": 0,
    "workId": "W-15946142",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zIxpFAAS",
    "summary": "When re-opening a workbook, which is connected live to a parquet file in an Amazon S3 bucket, dashboards do not load if three or more worksheets are on the dashboard. A \"sending data to server\" dialog window is displayed continuously.If a worksheet is removed, then the dashboard loads successfully.If any worksheet is loaded, then the user switches to the dashboard, it loads successfully.",
    "created": 1718037689000,
    "updated": 1736276449000
  },
  {
    "id": "a028c00000zJFUVAA4",
    "name": "",
    "title": "Bridge incremental refresh & Desktop \"Refresh from source\" fail on Tableau Cloud 10ax sites with encryption enabled",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.1",
    "primaryVer": "2024.1",
    "allVersions": [
      "2024.1"
    ],
    "reports": 0,
    "workId": "W-15963112",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zJFUVAA4",
    "summary": "Bridge incremental refresh & Desktop \"Refresh from source\" fail on Tableau Cloud 10ax sites with encryption enabled.As a result, an error appears when attempting to interact with a published view + connection.",
    "created": 1718823643000,
    "updated": 1722019691000
  },
  {
    "id": "a02Ka00000mHLG0IAO",
    "name": "",
    "title": "\"WorkbookUpdated\" webhook is triggered when downloading a workbook",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2024.2.0",
    "primaryVer": "2024.2.0",
    "allVersions": [
      "2024.2.0"
    ],
    "reports": 0,
    "workId": "W-22622540",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mHLG0IAO",
    "summary": "This issue impacts Tableau Cloud and all versions of Tableau Server from 2024.2+.When using the WorkbookUpdated webhook, downloading any workbook will also trigger a WorkbookUpdated webhook event.",
    "created": 1781900690000,
    "updated": 1781903294000
  },
  {
    "id": "a028c00000xAQ9yAAG",
    "name": "",
    "title": "Installing Tableau Resource Monitoring Tool (RMT) on Red Hat Linux (RHEL) with locale set to fr_UTF-8 fails",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2021.3.26",
    "primaryVer": "2021.3.26",
    "allVersions": [
      "2021.3.26"
    ],
    "reports": 0,
    "workId": "W-14080154",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000xAQ9yAAG",
    "summary": "Installing Tableau Resource Monitoring Tool (RMT) on Red Hat Linux (RHEL) with locale configured as LANG=fr_UTF-8 fails.",
    "created": 1698701857000,
    "updated": 1719886587000
  },
  {
    "id": "a028c00000yE0yqAAC",
    "name": "",
    "title": "Tableau Cloud - Tableau Prep flow refreshes fail in Tableau Cloud with the error code 0x925AE018",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3",
    "primaryVer": "2023.3",
    "allVersions": [
      "2023.3"
    ],
    "reports": 1,
    "workId": "W-14451923",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yE0yqAAC",
    "summary": "When refreshing Prep flows in Tableau Cloud, the following error appears:Error Code: 0x925AE018 Something went wrong. Try rerunning the flow. com.tableausoftware.server.status.reporting.TableauRuntimeException: System error: TableauException: Internal Error - An unexpected error occurred and the operation could not be completed. Something went wrong. Try rerunning the flow.\u00a0Run flow job failed with the error code 0x925AE018The issue occurs both for scheduled and manual runs of the Flow.",
    "created": 1703777035000,
    "updated": 1719886594000
  },
  {
    "id": "a028c00000z0C00AAE",
    "name": "",
    "title": "Tableau Desktop doesn't allow credential embedding changes when publishing workbook if data source is published connection",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.1+",
    "primaryVer": "2024.1",
    "allVersions": [
      "2024.1"
    ],
    "reports": 29,
    "workId": "W-15528753",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000z0C00AAE",
    "summary": "In Tableau Desktop 2024.1 and later, when a user publishes a workbook that is connected to a published data source, they can no longer change the authentication method. The drop-down menu under the Authentication header is absent. ",
    "created": 1713277418000,
    "updated": 1750626129000
  },
  {
    "id": "a028c00000uXRUdAAO",
    "name": "",
    "title": "Tableau Desktop - \"An unknown error related to remote content was detected (500)\" with Code C926DA9F Occurs when Working on Published Workbooks",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2021.2.25",
    "primaryVer": "2021.2.25",
    "allVersions": [
      "2021.2.25"
    ],
    "reports": 2,
    "workId": "W-13903191",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000uXRUdAAO",
    "summary": "When working on workbooks downloaded from Tableau Server (or previously published), or workbooks with published datasources using multiple Tableau Desktop instances at the same time, users may intermittently encounter the following error:C926DA9F: \"An unknown error related to remote content was detected (500)\".Sometimes, users may be able to dismiss the error prompt and continue their work, but others may have to kill the Tableau Desktop instance completely which could result in lost work.This b",
    "created": 1693315032000,
    "updated": 1753463329000
  },
  {
    "id": "a028c00000yxdHbAAI",
    "name": "",
    "title": "Tableau Cloud/REST API - When cancelling pending Flows, a 500000 Internal Error appears, but the cancellation completes successfully.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.2",
    "primaryVer": "2023.2",
    "allVersions": [
      "2023.2"
    ],
    "reports": 0,
    "workId": "W-13939834",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yxdHbAAI",
    "summary": "When cancelling pending flow run jobs using REST API, ApiCallError: 500000: Internal Server Error is returned, but cancellation job completes.",
    "created": 1708535104000,
    "updated": 1722608209000
  },
  {
    "id": "a028c00000zI9tNAAS",
    "name": "",
    "title": "Tableau Prep Conductor Fails Outputting Large Amounts of Data to Snowflake.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.1.0",
    "primaryVer": "2024.1.0",
    "allVersions": [
      "2024.1.0"
    ],
    "reports": 0,
    "workId": "W-15752693",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zI9tNAAS",
    "summary": "Attempting to output a huge amount of data(~3.9M rows) to Snowflake through a Flow, the job fails with the error \"There was a communication problem with Tableau Data Server. Internet communication error: Transferred a partial file (localhost).\"",
    "created": 1715680378000,
    "updated": 1725031702000
  },
  {
    "id": "a02Ka00000eNSsOIAW",
    "name": "",
    "title": "Unexpected \"Page not found\" When Attempting to \"Export Metadata\" while Configuring SAML Authentication in Tableau Cloud Manager",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1",
    "primaryVer": "2025.1",
    "allVersions": [
      "2025.1"
    ],
    "reports": 0,
    "workId": "W-18138432",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000eNSsOIAW",
    "summary": "When attempting to \"Export Metadata\" while configuring SAML authentication in Tableau Cloud Manager, an unexpected \"Page not found\" message occurs and metadata file is not exported.",
    "created": 1743113028000,
    "updated": 1748534003000
  },
  {
    "id": "a02Ka00000eRF6mIAG",
    "name": "",
    "title": "Creating a calculated field that overwrites an existing field can affect previously created calculated fields in Tableau Prep Builder",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "All",
    "primaryVer": "",
    "allVersions": [],
    "reports": 1,
    "workId": "W-18459914",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000eRF6mIAG",
    "summary": "In some flows, switching the step display repeatedly can show correct values in the GUI, but the output may remain incorrect. Additionally, the correct values might not display in the GUI.The issue arises when splitting an already created calculated field that uses the overwritten field. This does not occur with a single calculated field.When branching the overwritten calculated field with an IF statement, the output and GUI match. However, this still affects previously created calculated fields",
    "created": 1746696540000,
    "updated": 1764887457000
  },
  {
    "id": "a02Ka00000gZ6J6IAK",
    "name": "",
    "title": "After changing the default value for the parameter in flow, user could not edit the parameter value on existing linked task schedules.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 0,
    "workId": "W-18835693",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000gZ6J6IAK",
    "summary": "After changing the default value for the parameter in flow, user could not edit the parameter value on existing linked task schedules on Tableau Server or Tableau Cloud.When users try to edit the parameter from existing linked task schedules, the following error message occurs.Issue also happens with single task schedule.",
    "created": 1751524998000,
    "updated": 1784280705000
  },
  {
    "id": "a028c00000ixF0IAAU",
    "name": "",
    "title": "Sometimes using 'tsm maintenance send-logs' does not send the log files to the Tableau Support case",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.3",
    "primaryVer": "2022.3",
    "allVersions": [
      "2022.3"
    ],
    "reports": 7,
    "workId": "W-13073139",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000ixF0IAAU",
    "summary": "Sometimes using 'tsm maintenance send-logs' with more recent versions of Tableau Server, the log files are not sent to the Tableau Support case as expected.There are no errors in tsm, and the job shows as succeeding.",
    "created": 1683567904000,
    "updated": 1719886593000
  },
  {
    "id": "a028c00000zLHTaAAO",
    "name": "",
    "title": "Unable to create flows using prep conductor on Tableau Cloud with Databricks data sources.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "Tableau Cloud, Tableau Server 2024.1",
    "primaryVer": "2024.1",
    "allVersions": [
      "2024.1"
    ],
    "reports": 0,
    "workId": "W-15364455",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zLHTaAAO",
    "summary": "When attempting to create a new flow with prep conductor on Tableau Cloud, using either a Sharepoint Lists or Databricks data source, an error is seen instead of the OAuth sign-in page.",
    "created": 1724228341000,
    "updated": 1739259372000
  },
  {
    "id": "a02g7000005keKXAAY",
    "name": "",
    "title": "Web authoring OAuth popup silently fails when Identity Provider enforces Cross-Origin-Opener-Policy (COOP)",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2025.1.16",
    "primaryVer": "2025.1.16",
    "allVersions": [
      "2025.1.16"
    ],
    "reports": 4,
    "workId": "W-23303775",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000005keKXAAY",
    "summary": "Under certain conditions, users attempting to create OAuth-authenticated connections in Tableau's web editing flow may find that clicking \"Sign In\" opens the OAuth popup as expected and authentication completes on the provider's side \u2014 but the parent connection dialog does not progress and the Sign In button remains greyed out with no error message displayed. This occurs when the identity provider enforces a Cross-Origin-Opener-Policy: same-origin header, which severs the browser's window.opener",
    "created": 1783081201000,
    "updated": 1790816010000
  },
  {
    "id": "a02Ka00000llIAKIA2",
    "name": "",
    "title": "Snowflake Query Continues Running Even After Extract Refresh is Canceled",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 0,
    "workId": "W-20529735",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000llIAKIA2",
    "summary": "When a user manually cancels an extract refresh job for a Snowflake data source, the job status shows as canceled within Tableau.\u00a0However, the corresponding query continues to execute on the Snowflake backend.EnvironmentTableau ServerTableau Cloud",
    "created": 1766727611000,
    "updated": 1783955390000
  },
  {
    "id": "a02Ka00000jhUevIAE",
    "name": "",
    "title": "Dashboard alignment issue in Tableau Mobile app version 25.707.9643",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "25.707.9643",
    "primaryVer": "",
    "allVersions": [],
    "reports": 2,
    "workId": "W-19677094",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000jhUevIAE",
    "summary": "Users are experiencing dashboard alignment issues in Tableau Mobile app versions after v25.110.9078. When accessing dashboards with large datasets:The alignment is incorrect \u2014 users must zoom out or drag right to view the full content.Issue occurs only in Tableau Mobile app (latest versions), not in mobile browsers or older app versions.",
    "created": 1758613376000,
    "updated": 1785224423000
  },
  {
    "id": "a02g700000AOlCvAAL",
    "name": "",
    "title": "Unable to Connect to SharePoint Online Team Sites Using a Teams Managed Path URL",
    "status": "Solution in Progress",
    "statusType": "open",
    "foundIn": "2025.3",
    "primaryVer": "2025.3",
    "allVersions": [
      "2025.3"
    ],
    "reports": 1,
    "workId": "W-24253717",
    "url": "https://help.salesforce.com/s/issue?id=a02g700000AOlCvAAL",
    "summary": "The OneDrive and SharePoint Online connector does not accept SharePoint site URLs that use the /teams/ managed path. When users attempt to connect to a SharePoint Team site (a site created under the /teams/ path in SharePoint Admin), Tableau rejects the URL with a format error, even though the URL is a valid SharePoint site address. This affects Tableau Desktop, Tableau Prep Builder, Tableau Server, and Tableau Cloud.",
    "created": 1790113005000,
    "updated": 1792559361000
  },
  {
    "id": "a028c00000zI9rgAAC",
    "name": "",
    "title": "In environments where the operating system time zone is greater than UTC, the TSM Web UI converts the non-default start and end date one day earlier.",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2023.1.11",
    "primaryVer": "2023.1.11",
    "allVersions": [
      "2023.1.11"
    ],
    "reports": 1,
    "workId": "W-15737587",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zI9rgAAC",
    "summary": "In environments where the operating system time zone is greater than UTC, such as UTC+1, TSM Web UI converts the start and end date to 1 day before when they are non-default values.For example, in an environment where the OS time zone is UTC+1, if 4/15/2024, which will be converted to UTC, is specified as the start and end date using the TSM Web UI, then 4/14/2024(UTC), one day earlier, is the actual range of a log archive generated.On the other hand, TSM CLI correctly converts start and end dat",
    "created": 1715674270000,
    "updated": 1791232593000
  },
  {
    "id": "a028c00000yz6RaAAI",
    "name": "",
    "title": "Tableau Resource Monitoring Tool Agent will fail to install if the Run As User account's password contains a space",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3",
    "primaryVer": "2023.3",
    "allVersions": [
      "2023.3"
    ],
    "reports": 0,
    "workId": "W-14946999",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yz6RaAAI",
    "summary": "Tableau Resource Monitoring Tool (RMT) Agent will fail to install if the user-defined Run As User account's password contains a space",
    "created": 1710345228000,
    "updated": 1719886593000
  },
  {
    "id": "a02Ka00000mmY8hIAE",
    "name": "",
    "title": "Custom Snowflake OAuth Access Token Refresh Workflow Failing Credentials Service Calls",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "Tableau Server 2025.1.5",
    "primaryVer": "2025.1.5",
    "allVersions": [
      "2025.1.5"
    ],
    "reports": 0,
    "workId": "W-21651263",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mmY8hIAE",
    "summary": "When refreshing an Access Token for Custom OAuth Snowflake Authentication, communications to the credentials service fails with DEADLINE_EXCEEDED errors and output the error \"Tableau detected that your OAuth refresh token is expired. Reauthenticate with new credentials. Ask your Tableau admin if you need help\"",
    "created": 1774550689000,
    "updated": 1775668237000
  },
  {
    "id": "a028c00000tIv4BAAS",
    "name": "",
    "title": "When creating an MSSQL Server extract that contains Primary + Foreign Keys and Constraints, data in view differs from live connection",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2023.1.0",
    "primaryVer": "2023.1.0",
    "allVersions": [
      "2023.1.0"
    ],
    "reports": 3,
    "workId": "W-13506936",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000tIv4BAAS",
    "summary": "After creating an extract based on MS SQL Server tables, where underlying tables contain Primary Keys, Foreign Keys, and Constraints, the data in a view differs from the live connection and from the same tables without the PK, FK, and Constraints added.This issue is confirmed to appear in the following versions:2023.2.0 (20232.23.0524.2249) 2023.1.2+ (20231.23.0525.1550)2022.4.3+ (20224.23.0525.1344)2022.3.6+ (20223.23.0525.1657)2022.2.9+ (20222.23.0525.1851)2022.1.14 (20221.23.0507.0957)2021.4.",
    "created": 1686777317000,
    "updated": 1765401324000
  },
  {
    "id": "a02Ka00000nqX1dIAE",
    "name": "",
    "title": "Viz Extensions using discrete month date part become non-responsive",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2026.2.0",
    "primaryVer": "2026.2.0",
    "allVersions": [
      "2026.2.0"
    ],
    "reports": 0,
    "workId": "W-23089320",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000nqX1dIAE",
    "summary": "Beginning in 2026.2.0, viz extensions used in Tableau Desktop, Tableau Cloud, Tableau Server, and Tableau Public will silently error when used with a discrete month date part.\u00a0This results in the extension \"locking up\" and not respond to further encoding or not proceeding. This issue does not seem to reproduce with any other datatypes or other dateparts at this time; it is specific to discrete months used in viz extensions only.",
    "created": 1782262670000,
    "updated": 1782421077000
  },
  {
    "id": "a02Ka00000eOSEvIAO",
    "name": "",
    "title": "Resource Monitoring Tool Shows No Recorded Data for Tableau Processes on Environment Page in Web UI When Running on Newer Versions of Linux Distros",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.2.0 +",
    "primaryVer": "2023.2.0",
    "allVersions": [
      "2023.2.0"
    ],
    "reports": 5,
    "workId": "W-18325945",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000eOSEvIAO",
    "summary": "Resource Monitoring Tool running on newer versions of Linux distros will not show any recorded data for Tableau Processes, on the Environment Page in the Web UI",
    "created": 1745251531000,
    "updated": 1752455178000
  },
  {
    "id": "a02Ka00000jiGjnIAE",
    "name": "",
    "title": "Last Refreshed Time Not Updating After Non-Unique Incremental Refresh via Tableau Bridge",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.2.0",
    "primaryVer": "2025.2.0",
    "allVersions": [
      "2025.2.0"
    ],
    "reports": 1,
    "workId": "W-19863373",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000jiGjnIAE",
    "summary": "The 'Last update' field on Tableau Cloud shows 'Never' even after an incremental refresh via Tableau Bridge is successfully completed. This issue misleads users about the data freshness and impacts confidence in the platform.",
    "created": 1760496990000,
    "updated": 1783950505000
  },
  {
    "id": "a028c00000ziuaWAAQ",
    "name": "",
    "title": "Extract Refreshes are Failing Unexpectedly in Tableau Cloud with Error \"The Connection to [Datasource] had a fatal error and was disconnected...\"",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.3",
    "primaryVer": "2024.3",
    "allVersions": [
      "2024.3"
    ],
    "reports": 2,
    "workId": "W-17102482",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000ziuaWAAQ",
    "summary": "Some Extract refreshes are failing unexpectedly in Tableau Cloud. In reviewing the Jobs page, you will see an error similar to the following associated with the unexpected failure:\"The Connection to [Datasource] had a fatal error and was disconnected. ReadBytes: Communication with the Tableau Protocol Server process was lost. Tableau Protocol Server process might be terminated, possible due to system resource constraints or another external source IPC_SocketConnection:Read(len=4, connection=): T",
    "created": 1731443637000,
    "updated": 1760637780000
  },
  {
    "id": "a02Ka00000iHfaUIAS",
    "name": "",
    "title": "User search in Tableau Cloud fails for usernames starting with \"v-\"",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.2.0",
    "primaryVer": "2025.2.0",
    "allVersions": [
      "2025.2.0"
    ],
    "reports": 0,
    "workId": "W-19301147",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000iHfaUIAS",
    "summary": "In Tableau Cloud, searching for usernames that start with \"v-\" does not return results if the username is 8 characters or fewer. Usernames starting with \"v-\" and containing 9 or more characters are searchable as expected.NOTE: This issue also affects Tableau Server.",
    "created": 1755298823000,
    "updated": 1772665656000
  },
  {
    "id": "a02Ka00000mGtS7IAK",
    "name": "",
    "title": "Subscriptions Emails Failing With PDF Attachments when Email Customization is configured",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2026.2.0",
    "primaryVer": "2026.2.0",
    "allVersions": [
      "2026.2.0"
    ],
    "reports": 4,
    "workId": "W-22798901",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mGtS7IAK",
    "summary": "Tableau Cloud users who have Email Customization configured will experience job failures (and will not receive the email) for emails that contain `AttachmentData`",
    "created": 1780476282000,
    "updated": 1784285036000
  },
  {
    "id": "a028c000010ETiHAAW",
    "name": "",
    "title": "Teradata live query using a relative date filter sets a CAST which is different than in Tableau Desktop",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.3.2, Tableau Cloud",
    "primaryVer": "2024.3.2",
    "allVersions": [
      "2024.3.2"
    ],
    "reports": 1,
    "workId": "W-17623290",
    "url": "https://help.salesforce.com/s/issue?id=a028c000010ETiHAAW",
    "summary": "Tableau Bridge is using a cast for date fields when using a live teradata connection from Tableau Cloud. Tableau Desktop and Tableau Server does not do this.",
    "created": 1737562060000,
    "updated": 1764886647000
  },
  {
    "id": "a02g7000006nVyTAAU",
    "name": "",
    "title": "\"Computing the current visualization has exceeded the resource limit\" when Clearing All Filter Selections then Selecting Subset and Apply",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2025.3, 2026.2",
    "primaryVer": "2025.3",
    "allVersions": [
      "2025.3",
      "2026.2"
    ],
    "reports": 3,
    "workId": "W-23665051",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000006nVyTAAU",
    "summary": "When changing an interactive multiple value filter on a Tableau view where the filter has millions of selectable values, certain changes can result in a categorical-filter-by-index POST request with a request payload of 15 MB or higher. After a recent change where a default maxPostSize of 2MB on multipart requests was enforced, these payload sizes result in the request returning a 413 \"Content Too Large\" error which is presented in the view with the message \"Computing the current visualization h",
    "created": 1785795373000,
    "updated": 1788453782000
  },
  {
    "id": "a02Ka00000mmzqjIAA",
    "name": "",
    "title": "IDP-Initiated Single Logout Not Behaving as Expected",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.5",
    "primaryVer": "2024.2.5",
    "allVersions": [
      "2024.2.5"
    ],
    "reports": 0,
    "workId": "W-21886921",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mmzqjIAA",
    "summary": "When signing out of OKTA via front-channel single logout, IDP-initiated single log out is not working as expected.",
    "created": 1775242740000,
    "updated": 1787936007000
  },
  {
    "id": "a02Ka00000gYHZwIAO",
    "name": "",
    "title": "Extract Refresh Fails with Embedded Credentials for Published Datasource via ODBC DSN",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 1,
    "workId": "W-18882314",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000gYHZwIAO",
    "summary": "Extract Refresh Fails for Tableau Cloud Published Datasources Using Embedded Credentials via Other ODBC DSN (e.g., Snowflake, Redshift) \u2013 But Works if Server Name is Specified in Edit Connection",
    "created": 1751270054000,
    "updated": 1787957604000
  },
  {
    "id": "a028c00000zguyNAAQ",
    "name": "",
    "title": "Attempts to Connect to Sharepoint List (JDBC) in Prep Web Authoring Result in an Unexpected HTTP 404 Error",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3.8",
    "primaryVer": "2023.3.8",
    "allVersions": [
      "2023.3.8"
    ],
    "reports": 3,
    "workId": "W-16538277",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zguyNAAQ",
    "summary": "When connecting to SharePoint List JDBC connector from Prep Conductor on Tableau Server, the user receives a \"404 NOT FOUND\" error when redirected to authenticate the connection.This issue doesn't occur on Tableau Server 2024.2.x.",
    "created": 1726045163000,
    "updated": 1735915498000
  },
  {
    "id": "a028c00000zIYD5AAO",
    "name": "",
    "title": "Large workbook extract refreshes via Tableau Bridge fail with \"Operation timed out\".",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2024.1.0",
    "primaryVer": "2024.1.0",
    "allVersions": [
      "2024.1.0"
    ],
    "reports": 0,
    "workId": "W-15775609",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zIYD5AAO",
    "summary": "When trying to refresh a large extract via Tableau Bridge, it fails with \u201cOperation timed out\u201d. This does not occur when using published data source, only when it is embedded in the workbook.",
    "created": 1716806878000,
    "updated": 1754468006000
  },
  {
    "id": "a028c00000zLfqKAAS",
    "name": "",
    "title": "Using continuous filters on published data sources fails.",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2024.2+, Tableau Server 2024.2+",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2",
      "2024.2"
    ],
    "reports": 12,
    "workId": "W-16452628",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zLfqKAAS",
    "summary": "When trying to filter Date type fields on Range of Dates in Tableau Cloud or Tableau Server with Shared Dimensions, the following error is seen:Uncaught TypeError: Cannot read properties of undefined (reading 'minValue')",
    "created": 1725272256000,
    "updated": 1777475006000
  },
  {
    "id": "a02Ka00000eNfNRIA0",
    "name": "",
    "title": "\"LogicException: Internal Error - An unexpected error occurred....\" in Tableau Cloud When Selecting a Total and Attempting to View Underlying Data",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1.0",
    "primaryVer": "2025.1.0",
    "allVersions": [
      "2025.1.0"
    ],
    "reports": 2,
    "workId": "W-17515244",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000eNfNRIA0",
    "summary": "When attempting to view the underlying data for a Total in a view published to Tableau Cloud, the following error may occur:LogicException: Internal Error - An unexpected error occurred and the operation could not be completed.<timestamp>(<session identifier>, <request identifier>)",
    "created": 1743696075000,
    "updated": 1765206390000
  },
  {
    "id": "a028c000010EhmzAAC",
    "name": "",
    "title": "Field Descriptions in the Data Source Lineage Page do not Save Updates",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2024.3",
    "primaryVer": "2024.3",
    "allVersions": [
      "2024.3"
    ],
    "reports": 45,
    "workId": "W-17701026",
    "url": "https://help.salesforce.com/s/issue?id=a028c000010EhmzAAC",
    "summary": "In Tableau Cloud and Tableau Server, edits made to Field Descriptions in a data source's Lineage page are not being saved as expected.The UI still displays a banner indicating the following: \"Description was successfully updated. There might be a delay before you can see the your change.\" However, the updates do not appear, even after several days.",
    "created": 1738250866000,
    "updated": 1790670936000
  },
  {
    "id": "a02Ka00000eNt9TIAS",
    "name": "",
    "title": "When selecting the contextual menu option \"Edit All Trend Lines\" by right-clicking on a trend line in a published view, an uncaught error is thrown",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.x",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 0,
    "workId": "W-18165719",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000eNt9TIAS",
    "summary": "Note that this issue also impacts Tableau CloudWhen selecting the contextual menu option \"Edit All Trend Lines\" by right-clicking on a trend line in a published view on Tableau Server, the following error is thrown:\"Uncaught No command redirect registerd for type: command-redirect-edit\"",
    "created": 1744408205000,
    "updated": 1764970925000
  },
  {
    "id": "a02Ka00000eOEEIIA4",
    "name": "",
    "title": "Direct Presto Connections from Tableau Cloud to Trino Databases behind Cloudflare May Fail due to SSL Errors",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2025.1",
    "primaryVer": "2025.1",
    "allVersions": [
      "2025.1"
    ],
    "reports": 1,
    "workId": "W-18249375",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000eOEEIIA4",
    "summary": "The below error may occur when connecting to Trino from Tableau Cloud using the Presto connector: [Simba][Presto] (1020) Error with HTTP API at https://<serverAddress>:443/v1/statement: SSL connect errorUnable to connect to the Presto server \u201c<serverAddress>\u201d",
    "created": 1744903395000,
    "updated": 1751051080000
  },
  {
    "id": "a028c00000zkdvhAAA",
    "name": "",
    "title": "A user's display name can start with a space when creating a new user, but it cannot be updated to a display name starting with a space",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "All Tableau Server versions with Local Identity Store",
    "primaryVer": "",
    "allVersions": [],
    "reports": 1,
    "workId": "W-17148673",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zkdvhAAA",
    "summary": "When Tableau Server is using a Local Identity Store, how Tableau Server handles a user's display name varies depending on the page, as follows:1. A user's display name can start with spaces when adding a user to Tableau Server. However, in the user list, the leading spaces in the display name are not shown:2. An existing user's display name cannot be updated to a name starting with spaces because the \"Save changes\" button is not displayed:",
    "created": 1736322175000,
    "updated": 1757629973000
  },
  {
    "id": "a028c000010Fzq2AAC",
    "name": "",
    "title": "Exporting a Site that uses a Subscription and Linked Task Results in a Constraint Violation Error on the Subscriptions Table",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.8",
    "primaryVer": "2024.2.8",
    "allVersions": [
      "2024.2.8"
    ],
    "reports": 1,
    "workId": "W-17833420",
    "url": "https://help.salesforce.com/s/issue?id=a028c000010Fzq2AAC",
    "summary": "When attempting to export a site using a Subscription and Linked Task on Tableau Server, the export fails with a constraint violation error that can be seen in the terminal or command line prompt:ERROR: insert or update on table \"subscriptions\" violates foreign key constraint \"subscriptions_schedule_id_fkey\"\u00a0Detail: Key (schedule_id)=(number) is not present in table \"schedules\"",
    "created": 1741986318000,
    "updated": 1764887535000
  },
  {
    "id": "a02Ka00000loYBOIA2",
    "name": "",
    "title": "\"Workbooks\" Column Count for Data Sources Does Not Update in Explore View After Deleting Connected Workbooks",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2025.3",
    "primaryVer": "2025.3",
    "allVersions": [
      "2025.3"
    ],
    "reports": 1,
    "workId": "W-20671267",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000loYBOIA2",
    "summary": "When navigating to the Explore page and viewing the list with Content Type set to Data Sources in Tableau Cloud or Tableau Server, the Workbooks column may not display the correct value.",
    "created": 1769495379000,
    "updated": 1771968628000
  },
  {
    "id": "a028c00000zIeXBAA0",
    "name": "",
    "title": "Flow Output Path Gets Blank And Error When Opening A Downloaded Flow In Prep Builder",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2023.1.3",
    "primaryVer": "2023.1.3",
    "allVersions": [
      "2023.1.3"
    ],
    "reports": 1,
    "workId": "W-15879206",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zIeXBAA0",
    "summary": "Flow output path gets blank and error when opening a downloaded flow in Prep BuilderThe issue happens in Tableau Server on Windows but not on Linux.The issue does not occur with Tableau Server (Windows) 2022.3.x.",
    "created": 1717115513000,
    "updated": 1726828442000
  },
  {
    "id": "a02Ka00000eNfsiIAC",
    "name": "",
    "title": "Error \"NullPointerException: Cannot read field \"startIndex\" because \"pagingParams\" is null\" when Attempting to Restore Content from Recycle Bin",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1.0",
    "primaryVer": "2025.1.0",
    "allVersions": [
      "2025.1.0"
    ],
    "reports": 0,
    "workId": "W-18174139",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000eNfsiIAC",
    "summary": "When a Creator user attempts to restore deleted content from the Recycle Bin in Tableau Server 2025.1, the content is not restored and the following error is displayed:NullPointerException: Cannot read field \"startIndex\" because \"pagingParams\" is null",
    "created": 1743700209000,
    "updated": 1764959711000
  },
  {
    "id": "a02Ka00000mFTQMIA4",
    "name": "",
    "title": "Non-admin Users are Unable to See Schedules to Assign to Tasks",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.3, 2023.1, 2023.3, 2024.2, 2025.1, 2025.3, 2026.1",
    "primaryVer": "2022.3",
    "allVersions": [
      "2022.3",
      "2023.1",
      "2023.3",
      "2024.2",
      "2025.1",
      "2025.3",
      "2026.1"
    ],
    "reports": 4,
    "workId": "W-21939393",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mFTQMIA4",
    "summary": "Users without administrative privileges (users other than server or site admins) are unable to view extract or subscription schedules or assign schedules to these tasks, as the list appears empty.",
    "created": 1778113357000,
    "updated": 1785170239000
  },
  {
    "id": "a02Ka00000jeOceIAE",
    "name": "",
    "title": "Some workbooks no longer load as expected and ultimately result to an \"Incompatible Types\" error after upgrading to 2025.1",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1",
    "primaryVer": "2025.1",
    "allVersions": [
      "2025.1"
    ],
    "reports": 14,
    "workId": "W-19565321",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000jeOceIAE",
    "summary": "In Tableau Desktop and Tableau Server 2025.1, some workbooks no longer load successfully (timing out) which ultimately result in an unexpected \"Incompatible Types\" error causing CPU to spike for extended periods of time.",
    "created": 1757340659000,
    "updated": 1784901505000
  },
  {
    "id": "a028c00000iwSsWAAU",
    "name": "",
    "title": "Extract Refresh with Google Drive Fail  with \"Tableau detected that your OAuth refresh token is expired.\" After Initial Success",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "20223.22.1005.1835",
    "primaryVer": "",
    "allVersions": [],
    "reports": 0,
    "workId": "W-12925702",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000iwSsWAAU",
    "summary": "When publishing an extract that contains multiple connections including:Google DriveA connection requiring Tableau Bridgethe initial refresh of the extract will be successful, but after the access token expires in 2 hours, subsequent refresh attempts will fail to refresh the token and give the error:Failed to refresh data source: <ds name> due to the following error: ExpiredOAuthRefreshToken\"Tableau detected that your OAuth refresh token is expired. Reauthenticate with new credentials. Ask your ",
    "created": 1681833807000,
    "updated": 1719886567000
  },
  {
    "id": "a028c00000zKzlyAAC",
    "name": "",
    "title": "The number of users in \"All Users\" group on \"Groups\" page is always more than actual number of users",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2024.2.0",
    "primaryVer": "2024.2.0",
    "allVersions": [
      "2024.2.0"
    ],
    "reports": 5,
    "workId": "W-16467603",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zKzlyAAC",
    "summary": "In Tableau Server 2023.3.8, 2024.2.0 and 2024.2.1 at least, after installing or upgrading from older versions, Tableau Server indicates more users count for \"All Users\" group than actual users.This issue does NOT happen when using core-based license in Tableau Server.",
    "created": 1723520163000,
    "updated": 1741857514000
  },
  {
    "id": "a028c00000zK7bIAAS",
    "name": "",
    "title": "\"Incorrect Username or Password\" When Connecting to Snowflake Using Account With Special Characters in Password",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.1.15",
    "primaryVer": "2022.1.15",
    "allVersions": [
      "2022.1.15"
    ],
    "reports": 1,
    "workId": "W-15340615",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zK7bIAAS",
    "summary": "When attempting to connect to Snowflake using Tableau Desktop, Tableau Server web authoring, or Tableau Cloud web authoring, passwords containing certain special characters may result in the following error: Incorrect username or password was specified.[Snowflake][Snowflake] (17) 1 invalid keys are found in the connection string: }A22\";application",
    "created": 1721150096000,
    "updated": 1787937321000
  },
  {
    "id": "a028c00000xADnXAAW",
    "name": "",
    "title": "Tableau Desktop - Hidden rows in bar chart are intermittently shown, causing the chart to visually break",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2023.1.2",
    "primaryVer": "2023.1.2",
    "allVersions": [
      "2023.1.2"
    ],
    "reports": 2,
    "workId": "W-14321355",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000xADnXAAW",
    "summary": "In Tableau Desktop using a bar chart, hidden rows may intermittently appear in the visualization, causing visual impairments such as extra or unintended chart entries. The issue may also appear once the workbook is published to Tableau Server.",
    "created": 1698326442000,
    "updated": 1719886588000
  },
  {
    "id": "a02g700000BAU05AAH",
    "name": "",
    "title": "Tooltip may display stale content when opening tooltips via keyboard navigation across dashboard worksheets",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2025.3",
    "primaryVer": "2025.3",
    "allVersions": [
      "2025.3"
    ],
    "reports": 0,
    "workId": "W-24351817",
    "url": "https://help.salesforce.com/s/issue?id=a02g700000BAU05AAH",
    "summary": "When using keyboard navigation to open tooltips on a dashboard, the tooltip may continue to show content from the first worksheet instead of the worksheet currently in focus. After opening a tooltip on one worksheet, tabbing (or shift+tabbing) to another worksheet and opening its tooltip may display the earlier worksheet's tooltip content rather than the correct one. This affects only keyboard accessibility; hovering with a mouse displays the correct tooltip without issue. The behavior can be in",
    "created": 1791299891000,
    "updated": 1791911307000
  },
  {
    "id": "a02Ka00000fvOZhIAM",
    "name": "",
    "title": "Connecting to a workbook or editing a datasource may fail if the datasource contains multiple connections with different credentials",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 3,
    "workId": "W-18837293",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000fvOZhIAM",
    "summary": "If a Datasource has 2 connections to the same database but different schemas.For example it has 2 different username and passwords and the users connect to a different schema/table in the datasource and each user has specific permissions for only certain required tables.When trying to edit a published datasource or create a workbook to a datasource in Tableau Server or Tableau Cloud a \"Unable to proceed because of an error from the datasource\" message is shown. ",
    "created": 1750840180000,
    "updated": 1758670220000
  },
  {
    "id": "a02Ka00000mHF0xIAG",
    "name": "",
    "title": "Users Intermittently Receiving Duplicate Email Subscriptions",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "Tableau Server 2025.1.6",
    "primaryVer": "2025.1.6",
    "allVersions": [
      "2025.1.6"
    ],
    "reports": 7,
    "workId": "W-23006490",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mHF0xIAG",
    "summary": "When subscribed to a subscription that is scheduled to run after an extract refresh occurs, intermittently some users are receiving duplicate emails even though the refresh only occurred once.",
    "created": 1781623372000,
    "updated": 1791828483000
  },
  {
    "id": "a028c00000xBPw5AAG",
    "name": "",
    "title": "Unable to configure native_api.allowed_paths if it contains non-ASCII characters in the paths.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 3,
    "workId": "W-14521788",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000xBPw5AAG",
    "summary": "When configure Tableau Server allowlist as described in online help, 'tsm pending-changes apply' fails and hyper process fails to start if paths in native_api.allowed_paths contain non-ASCII characters.Example of problematic path:\u00a0\\\\<hostname>\\\u30c6\u30b9\u30c8\u30c7\u30fc\u30bfIssue happens in all versions of Tableau Server.",
    "created": 1700539891000,
    "updated": 1747802748000
  },
  {
    "id": "a028c00000yzzsnAAA",
    "name": "",
    "title": "Tableau Content Migration Tool - When using CMT the Migrated Data Sources Do Not Include the Schema Selected",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2024.1, Build 1.1.618, pre-release-1.1.619",
    "primaryVer": "2024.1",
    "allVersions": [
      "2024.1"
    ],
    "reports": 1,
    "workId": "W-15401605",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yzzsnAAA",
    "summary": "After running a migration plan to migrate a data source in CMT that involves finding and replacing a schema, the schema is not replaced correctly -- the migrated data source does not have the correct schema indicated.",
    "created": 1712754424000,
    "updated": 1759229939000
  },
  {
    "id": "a028c00000yE13vAAC",
    "name": "",
    "title": "Large snowflake extracts fail to refresh with expired OAuth token error",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "Tableau Server 2023.1.7, Tableau Cloud 2024.1",
    "primaryVer": "2023.1.7",
    "allVersions": [
      "2023.1.7",
      "2024.1"
    ],
    "reports": 4,
    "workId": "W-14724659",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yE13vAAC",
    "summary": "When attempting to refresh a large (in testing, 400+ columns and 22 million rows) Snowflake extract on Tableau Server, the refresh operation fails after several hours with the following error:\"OAuth Token Expired\"",
    "created": 1703779013000,
    "updated": 1727372290000
  },
  {
    "id": "a02Ka00000ePQscIAG",
    "name": "",
    "title": "Font 'Benton Sans' Does Not Render Correctly on Tableau Cloud",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2025.1",
    "primaryVer": "2025.1",
    "allVersions": [
      "2025.1"
    ],
    "reports": 0,
    "workId": "W-18278076",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000ePQscIAG",
    "summary": "Workbooks published to Tableau Cloud might not render 'Benton Sans' fonts correctly. Note that depending on the online resource, these can appear as either 'Benton Sans' or 'BentonSans'. ",
    "created": 1745960736000,
    "updated": 1750366663000
  },
  {
    "id": "a028c00000zLZ39AAG",
    "name": "",
    "title": "Flows Connecting to Virtual Connection Data Sources Fail with TableauException Error",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.0",
    "primaryVer": "2024.2.0",
    "allVersions": [
      "2024.2.0"
    ],
    "reports": 4,
    "workId": "W-16252276",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zLZ39AAG",
    "summary": "On Tableau Cloud, new and existing flows using Virtual Connection data sources fail to run. In Tableau Prep Conductor, the connection may appear to work but when running the flow the job will fail with the error:Failed to connect to [Virtual Connection data source] on [url]. Check that the data source is available, or edit the connection and enter your credentials again. Error: TableauException: Internet communication error: couldn't connect to server (localhost). Can't connect using the virtual",
    "created": 1724965717000,
    "updated": 1730122766000
  },
  {
    "id": "a028c00000zisTOAAY",
    "name": "",
    "title": "Successful Flows in Linked Tasks Can Occasionally Reuse the Connection Used by the Previous Flow and Return Stale Data",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.3.5+",
    "primaryVer": "2022.3.5",
    "allVersions": [
      "2022.3.5"
    ],
    "reports": 2,
    "workId": "W-15310043",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zisTOAAY",
    "summary": "Successful flows run as Linked Tasks on Tableau Server can occasionally reuse the connection used by the previous flow run. This results in the return of stale data. ",
    "created": 1731348499000,
    "updated": 1750207793000
  },
  {
    "id": "a02Ka00000mGFW3IAO",
    "name": "",
    "title": "Unexpected product key included in offline activation request JSON (ATR mode)",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2024.2",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 0,
    "workId": "W-21934031",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mGFW3IAO",
    "summary": "When generating the offline activation request file, an unexpected product key is included in the \"productKeys\" field of the generated file.",
    "created": 1778760142000,
    "updated": 1789366020000
  },
  {
    "id": "a02Ka00000ivIsWIAU",
    "name": "",
    "title": "Error 403004 when querying sites with REST API as a Site Admin in 2025.1+",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "Tableau Server 2025.1.3",
    "primaryVer": "2025.1.3",
    "allVersions": [
      "2025.1.3"
    ],
    "reports": 9,
    "workId": "W-19387225",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000ivIsWIAU",
    "summary": "Site Administrator roles (Site Administrator Creator / Explorer) encounter a \"Forbidden: User does not have permission for action\" error when calling the Query Sites REST API endpoint (GET /api/3.25/sites) on Tableau Server 2025.1.x, despite having access.",
    "created": 1756193276000,
    "updated": 1784298963000
  },
  {
    "id": "a02Ka00000lnF1KIAU",
    "name": "",
    "title": "REST API to Update Snowflake to Key Pair Authentication Does Not Work Leading to \"Could not find the private key for Snowflake KeyPair Auth\"",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.3",
    "primaryVer": "2025.3",
    "allVersions": [
      "2025.3"
    ],
    "reports": 4,
    "workId": "W-20175273",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000lnF1KIAU",
    "summary": "When attempting to update a Snowflake data source's authentication method to key pair authentication via REST API, testing connection succeeds but the extract refresh fails with the message \"Could not find the private key for Snowflake KeyPair Auth\".This impacts both Tableau Cloud and Tableau Server.",
    "created": 1768935611000,
    "updated": 1791559432000
  },
  {
    "id": "a028c00000zjCsyAAE",
    "name": "",
    "title": "When using type in parameters or wild card match filters on Tableau Cloud, graphical artifacts show on the right side of the field.",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2024.3.0",
    "primaryVer": "2024.3.0",
    "allVersions": [
      "2024.3.0"
    ],
    "reports": 3,
    "workId": "W-17241502",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zjCsyAAE",
    "summary": "When using type in parameters or wild card match filters on Tableau Cloud, graphical artifacts show on the right side of the field.Cloud display--Desktop/Server display--     ",
    "created": 1732144368000,
    "updated": 1733163592000
  },
  {
    "id": "a028c00000zKfSHAA0",
    "name": "",
    "title": "Tableau Cloud - Unable to embed OAuth credentials using tabcmd --save-oauth flag when publishing",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2024.2",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 0,
    "workId": "W-15726284",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zKfSHAA0",
    "summary": "When publishing a Snowflake data source using tabcmd, tabcmd allows the option to save the OAuth credentials using the --save-oauth flag. When using this flag with -oauth-username flag, publishing fails with an error.",
    "created": 1722633618000,
    "updated": 1750860282000
  },
  {
    "id": "a028c000010EXOAAA4",
    "name": "",
    "title": "Unexpected \"There was no SAML assertion available for delegation.class DOMException.\" Connecting to SAP HANA or SAP BW using SSO",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.3+",
    "primaryVer": "2024.2.3",
    "allVersions": [
      "2024.2.3"
    ],
    "reports": 2,
    "workId": "W-17647045",
    "url": "https://help.salesforce.com/s/issue?id=a028c000010EXOAAA4",
    "summary": "After upgrading Tableau Server to 2024.2.3+ the connection to SAP HANA or SAP BW using SSO data sources fail and the following error occurs when loading a connected workbook:There was no SAML assertion available for delegation.class DOMExceptionNOTE: The above error will only occur when opening workbooks connected to published data sources (live connection)",
    "created": 1737741059000,
    "updated": 1741275194000
  },
  {
    "id": "a02Ka00000eNW4wIAG",
    "name": "",
    "title": "'Custom Views' tab missing from user page.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1.0",
    "primaryVer": "2025.1.0",
    "allVersions": [
      "2025.1.0"
    ],
    "reports": 6,
    "workId": "W-18149087",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000eNW4wIAG",
    "summary": "The Custom Views tab (<serverURL>/<user>/customViews) is no longer present/visible.\ufeffNote: This issue has been resolved as of the Tableau Server 2025.1.1 release.",
    "created": 1743408386000,
    "updated": 1747864006000
  },
  {
    "id": "a02Ka00000lbJXmIAM",
    "name": "",
    "title": "In a Rare Case where One of the Gateway Nodes is Down All Published Data Source Become Inaccessible",
    "status": "Solution in Progress",
    "statusType": "open",
    "foundIn": "2024.2.10",
    "primaryVer": "2024.2.10",
    "allVersions": [
      "2024.2.10"
    ],
    "reports": 1,
    "workId": "W-23077279",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000lbJXmIAM",
    "summary": "When one node in the cluster is down, all published data sources become inaccessible.Connecting to the data source results in:\"Datasource error\"\"Unable to proceed because of an error from the data source.\"",
    "created": 1765335827000,
    "updated": 1788153756000
  },
  {
    "id": "a028c00000zJJAaAAO",
    "name": "",
    "title": "When Prep Builder is connected to a published data source and reaches the idle session timeout, users are not directed to reauthenticate",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.2.5, 2023.1.3, 2023.3.3, 2024.1.0",
    "primaryVer": "2022.2.5",
    "allVersions": [
      "2022.2.5",
      "2023.1.3",
      "2023.3.3",
      "2024.1.0"
    ],
    "reports": 0,
    "workId": "W-15317525",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zJJAaAAO",
    "summary": "When Tableau Prep Builder is connected to a Published Datasource and reaches the Tableau Server/Cloud idle session timeout, the user's next actions will fail due to the error \"No Tableau Server user Found. DataServiceFailure\". If the login session exceeds the Data Server session timeout on the Tableau Server where the data source is published, the next action using that data source will fail. Additionally, if the user attempts to click into the Tableau Server login under \"Connections\", Prep Buil",
    "created": 1718963792000,
    "updated": 1722453377000
  },
  {
    "id": "a028c00000xA5LkAAK",
    "name": "",
    "title": "Tableau Cloud - Year (Date) showing 'null' value after the Date field is added to a worksheet",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.3",
    "primaryVer": "2022.3",
    "allVersions": [
      "2022.3"
    ],
    "reports": 0,
    "workId": "W-12925312",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000xA5LkAAK",
    "summary": "When editing a worksheet on Tableau Cloud, dragging the \"Date\" field into the worksheet(or columns shelf) may result in the \"Year\" value appearing as \"null.\"While this issue has primarily been observed in Tableau Cloud, the underlying problem may affect Tableau Server as well. Updated/fixed maintenance releases will be noted in this Known Issue once deployed.This issue was previously tracked under TFS ID 1475181.",
    "created": 1698172437000,
    "updated": 1719886594000
  },
  {
    "id": "a028c00000yzndMAAQ",
    "name": "",
    "title": "Unable to type a few Japanese characters in Multiple values (dropdown) text box filter in Tableau Cloud",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "Tableau Cloud 2023.3, Tableau Server 2024.2.8",
    "primaryVer": "2023.3",
    "allVersions": [
      "2023.3",
      "2024.2.8"
    ],
    "reports": 5,
    "workId": "W-15394061",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yzndMAAQ",
    "summary": "When trying to type a few Japanese characters to search a value in Multiple values (dropdown) text box, input entries are automatically confirmed without any opportunity to edit them.When pausing when typing between Japanese character, the filter search completes and searches for value, rather than await for more Japanese characters to be fully typed in.",
    "created": 1712189999000,
    "updated": 1764578221000
  },
  {
    "id": "a028c000010FaHoAAK",
    "name": "",
    "title": "Uninstalling Tableau desktop or Tableau Prep uninstalls the flexera licensing service",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2020.3 - 2024.3",
    "primaryVer": "2020.3",
    "allVersions": [
      "2020.3",
      "2024.3"
    ],
    "reports": 1,
    "workId": "W-17913947",
    "url": "https://help.salesforce.com/s/issue?id=a028c000010FaHoAAK",
    "summary": "If the same Major release of both Tableau Desktop and Tableau Prep Builder are installed, when one of these is uninstalled, the Flexnet service is uninstalled unintentionally, which breaks the license of the other software that is still installed.",
    "created": 1740648135000,
    "updated": 1750290201000
  },
  {
    "id": "a02Ka00000lHsDkIAK",
    "name": "",
    "title": "Dashboard migration issue on CMT: Duplicate parameters are appearing in workbook filters after migration.",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2025.2.0",
    "primaryVer": "2025.2.0",
    "allVersions": [
      "2025.2.0"
    ],
    "reports": 2,
    "workId": "W-20259626",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000lHsDkIAK",
    "summary": "Duplicate parameters are appearing in workbook filters after migration the workbooks using Content Migration Tool.",
    "created": 1763457573000,
    "updated": 1784683955000
  },
  {
    "id": "a02g7000008ToRRAA0",
    "name": "",
    "title": "Flow Editor validation takes a long time to complete for flows connecting to XLSX files with multiple sheets configured as input fields",
    "status": "Solution in Progress",
    "statusType": "open",
    "foundIn": "2024.2.24, 2025.1.18, 2025.3.6",
    "primaryVer": "2024.2.24",
    "allVersions": [
      "2024.2.24",
      "2025.1.18",
      "2025.3.6"
    ],
    "reports": 1,
    "workId": "W-24020023",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000008ToRRAA0",
    "summary": "When a flow uses Excel (.xlsx) files with multiple sheets configured as input fields, validating connections in the Flow Editor can take significantly longer than expected. Users may see validation take two minutes or more, and the data preview may take several minutes to load. This is most noticeable when the number of Excel sheets configured as inputs increases \u2014 testing showed validation times growing to 2\u20134 minutes as more sheets were added. The issue affects, Tableau Server (Web Edit), and ",
    "created": 1788330183000,
    "updated": 1791197474000
  },
  {
    "id": "a02Ka00000frb2dIAA",
    "name": "",
    "title": "Parameter dropdown list has changed",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2024.2.8",
    "primaryVer": "2024.2.8",
    "allVersions": [
      "2024.2.8"
    ],
    "reports": 1,
    "workId": "W-18628588",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000frb2dIAA",
    "summary": "After updating Tableau Server to 2024.2 and 2025.1, appearance of parameter dropdown list has changed. Characters are at the top. \u200bFilter dropdown list still evenly spaced.",
    "created": 1749094777000,
    "updated": 1758309342000
  },
  {
    "id": "a02Ka00000hHDaEIAW",
    "name": "",
    "title": "Workbook-parser.parse is taking more time than earlier version slowing down workbook open.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.x",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 0,
    "workId": "W-19073907",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000hHDaEIAW",
    "summary": "Specific workbook has increased load time in 2024.2.x, when compared to older version of Tableau Server.According to the performance recordings, the workbook-parser.parse has increased in 2024.2.12.",
    "created": 1753427456000,
    "updated": 1758772713000
  },
  {
    "id": "a02Ka00000mHGsLIAW",
    "name": "",
    "title": "Incremental Extract Refresh File Size Increasing Unexpectedly",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2025.1.11",
    "primaryVer": "2025.1.11",
    "allVersions": [
      "2025.1.11"
    ],
    "reports": 0,
    "workId": "W-23030545",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mHGsLIAW",
    "summary": "Incremental Extract file size increasing beyond what should be expected after each incremental extract refresh.",
    "created": 1781719643000,
    "updated": 1792651120000
  },
  {
    "id": "a02g7000006ZzgHAAS",
    "name": "",
    "title": "PostgreSQL Repository Logs May Grow Excessively After Upgrading to 2025.3 When Metadata Services Are Enabled",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.3",
    "primaryVer": "2025.3",
    "allVersions": [
      "2025.3"
    ],
    "reports": 0,
    "workId": "W-23344278",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000006ZzgHAAS",
    "summary": "When upgrading to Tableau Server 2025.3, if Metadata Services are enabled (`tsm maintenance metadata-services enable`), PostgreSQL repository log files (`postgres-*.csv`) may grow rapidly and consume large amounts of disk space. Disabling Metadata Services stops the excessive log growth.Note: This issue does not occur in every environment. The occurrence and log growth rate depend on the repository's content, complexity, and database size.",
    "created": 1784893131000,
    "updated": 1790181823000
  },
  {
    "id": "a028c00000zKIb5AAG",
    "name": "",
    "title": "Intermittent Error \"TableauException: Cannot find a total needed to compute a percentage\" When Using a String Parameter to Filter",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2024.2.0",
    "primaryVer": "2024.2.0",
    "allVersions": [
      "2024.2.0"
    ],
    "reports": 0,
    "workId": "W-16252596",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zKIb5AAG",
    "summary": "When interacting with a view that uses a type-in String Parameter in conjunction with filtering logic, and a data source with Row Level Security applied, the following error might occur intermittently: An unexpected error occurred. If you continue to received this error please contact Tableau Server Administrator.Session ID: <session ID>Tableau Exception: Cannot find a total needed to compute a percentage. The database may have changed or a calculation cannot be completed. Trying refreshing your",
    "created": 1721673985000,
    "updated": 1722018740000
  },
  {
    "id": "a02Ka00000mQzRtIAK",
    "name": "",
    "title": "\"LogicException\" error seen when attempting to load specific dashboards in a workbook",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1.8",
    "primaryVer": "2025.1.8",
    "allVersions": [
      "2025.1.8"
    ],
    "reports": 38,
    "workId": "W-19327268",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mQzRtIAK",
    "summary": " \"LogicException\" error seen when attempting to load specific dashboards in a workbook on Tableau Server / Tableau Cloud. There may be some correlation with colors existing on the marks card. It also may not show on the first load of an affected dashboard on that day, but is usually seen on subsequent loads.May be seen in Tableau Cloud and Tableau Server.",
    "created": 1770850763000,
    "updated": 1788171562000
  },
  {
    "id": "a028c00000yD7xhAAC",
    "name": "",
    "title": "Error while adding license service to another node when following initial node recovery process",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2022.1.15, 2022.3.7, 2023.1.2",
    "primaryVer": "2022.1.15",
    "allVersions": [
      "2022.1.15",
      "2022.3.7",
      "2023.1.2"
    ],
    "reports": 6,
    "workId": "W-14320712",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yD7xhAAC",
    "summary": "When recovering from an initial node failure, an error while adding license service on the node by the command below:tsm topology set-process -pr licenseservice -n <nodeID> -c 1This issue has not been observed in Tableau Server 2023.3.0 or later releases. If observing this issue in 2023.3.0 or later, please contact Technical Support.",
    "created": 1701932323000,
    "updated": 1729705687000
  },
  {
    "id": "a02Ka00000ji7msIAA",
    "name": "",
    "title": "Unable to overwrite an output file on a network drive when running a flow in Tableau Prep Builder on Windows 11",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3.0",
    "primaryVer": "2023.3.0",
    "allVersions": [
      "2023.3.0"
    ],
    "reports": 3,
    "workId": "W-19799393",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000ji7msIAA",
    "summary": "When running a flow in Tableau Prep Builder on Windows 11 and overwriting an existing file on a network drive, the following error message is encountered:\"Error in output 'Output'. The file path for the output step isn't valid. Check that the file name and path is valid, the file name doesn't use '/', '', or other special characters, and that you have write permissions to that location.\"",
    "created": 1760315486000,
    "updated": 1768470544000
  },
  {
    "id": "a02g7000008MR3NAAW",
    "name": "",
    "title": "Subscription preview images shows data for the wrong user when using Snowflake OAuth with row-level security",
    "status": "Solution in Progress",
    "statusType": "open",
    "foundIn": "2025.1.7",
    "primaryVer": "2025.1.7",
    "allVersions": [
      "2025.1.7"
    ],
    "reports": 0,
    "workId": "W-23953720",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000008MR3NAAW",
    "summary": "When a data source uses Snowflake OAuth authentication together with row-level security (RLS) configured on the Snowflake side, the preview image included in a subscription email may not reflect the data the recipient is authorised to see. Some subscribers may report that the preview image instead shows data scoped to a different user \u2014 potentially exposing data the recipient should not have access to.",
    "created": 1788202271000,
    "updated": 1790709364000
  },
  {
    "id": "a028c00000zI0JUAA0",
    "name": "",
    "title": "X-Axis Line not Visible When Row Count is High (550+)",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 3,
    "workId": "W-15705632",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zI0JUAA0",
    "summary": "In some views the bottom x-axis separation line might be not visible if the row count exceeds 550+ rows.The exact row count to trigger this behavior might vary with the complexity of the view.This behavior has been seen in Tableau Server version 2023.3.x",
    "created": 1715262315000,
    "updated": 1755479070000
  },
  {
    "id": "a02Ka00000kT6IrIAK",
    "name": "",
    "title": ".rda File Connection Fails When Using CJK Characters in Path",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "All supported versions",
    "primaryVer": "",
    "allVersions": [],
    "reports": 0,
    "workId": "W-19645687",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000kT6IrIAK",
    "summary": "In Tableau Prep Builder,\u00a0an error occurs when attempting to connect to a statistical file (.rda) if the file name or file path contains Japanese characters:Error in input \u201c<.rda file name>\u201d. Can't connect to datasource . An error occurred while communicating with the data sourceThe same issue also occurs when the file name or path contains Chinese or Korean characters.Tableau Desktop also fails to load and outputs the following message:Unable to complete actionUnable to connect to the server. Ch",
    "created": 1760680906000,
    "updated": 1783489636000
  },
  {
    "id": "a028c00000zLfqtAAC",
    "name": "",
    "title": "When viewing the license overview page, the licensed machines under Verify the Core License Management Section is incomplete.",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2022.3.13",
    "primaryVer": "2022.3.13",
    "allVersions": [
      "2022.3.13"
    ],
    "reports": 4,
    "workId": "W-16593728",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zLfqtAAC",
    "summary": "When viewing the license overview page on Tableau Server, not all the nodes repopulate into the table causing the on-screen report to appear inconsistent.When viewing in TSM > Licensing or using the command 'tsm licenses list', all licenses are displayed with no issues.",
    "created": 1725273835000,
    "updated": 1756184678000
  },
  {
    "id": "a028c00000zixxmAAA",
    "name": "",
    "title": "Backgrounder jobs node encountering storage issues due to a massive increase in Crashdump file generation.",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2024.2.2",
    "primaryVer": "2024.2.2",
    "allVersions": [
      "2024.2.2"
    ],
    "reports": 6,
    "workId": "W-17212919",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zixxmAAA",
    "summary": "After upgrading Tableau Server to version 2024.2.2, the background jobs node is frequently encountering storage issues due to a large increase in Crashdump file generation.",
    "created": 1731497598000,
    "updated": 1749136851000
  },
  {
    "id": "a02Ka00000fuQ5vIAE",
    "name": "",
    "title": "Duplicate Values Appearing While Dealing With Extract Connection Data That Has Soft Hyphens (Unicode character U+00AD)",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2025.1.2",
    "primaryVer": "2025.1.2",
    "allVersions": [
      "2025.1.2"
    ],
    "reports": 0,
    "workId": "W-18823507",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000fuQ5vIAE",
    "summary": "In certain edge cases with Tableau Desktop, fields containing Soft Hyphens (Unicode character U+00AD) characters may display duplicate entries, even though no such duplicates exist in the underlying Microsoft SQL Server database.This issue is specific to Microsoft SQL Server connections. It occurs only when using extract connections. Live connections do not show duplicate values. Switching to extracts causes the duplicates to appear.",
    "created": 1750354110000,
    "updated": 1753712683000
  },
  {
    "id": "a02Ka00000mmP1uIAE",
    "name": "",
    "title": "Lineage backfill stalled with GraphQL returning error \"Still creating the Metadata API Store\"",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.3.1, 2024.2.13",
    "primaryVer": "2025.3.1",
    "allVersions": [
      "2025.3.1",
      "2024.2.13"
    ],
    "reports": 7,
    "workId": "W-21306237",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mmP1uIAE",
    "summary": "Contents\u2019s lineage does not show correct status (showing 0 contents) and shows error \"Still creating the Metadata API Store\". Results from the query might be incomplete at this time.\"The Metadata API file store does not complete successfully and shows the same error.",
    "created": 1774261983000,
    "updated": 1791278708000
  },
  {
    "id": "a02Ka00000mH4bBIAS",
    "name": "",
    "title": "TSM Maintenance Backup/Ziplog Fails When Specified Filename Contains CJK Characters",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.3",
    "primaryVer": "2025.3",
    "allVersions": [
      "2025.3"
    ],
    "reports": 0,
    "workId": "W-22910075",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mH4bBIAS",
    "summary": "After upgrading Tableau Server from v2024.2 to v2025.3, various tsm maintenance commands (such as backup, ziplogs, etc.) now throw an error if the specified filename contains CJK characters (such as Japanese or Chinese). This issue has only been confirmed on Tableau Server for Windows.",
    "created": 1781143062000,
    "updated": 1784756243000
  },
  {
    "id": "a028c00000yxXsWAAU",
    "name": "",
    "title": "Prep Builder 'Connect-To' dialog throws a large number of errors when a published data source connects to a deleted Virtual Connection",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.2",
    "primaryVer": "2023.2",
    "allVersions": [
      "2023.2"
    ],
    "reports": 1,
    "workId": "W-15051774",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yxXsWAAU",
    "summary": "When trying to connect to data published on Tableau Server or Tableau Cloud, the Prep Builder 'Connect-To' dialog throws \"The server encountered an error. Try again\" message continually when a published data source on the Tableau Server or Cloud site connects to a deleted Virtual Connection.",
    "created": 1708453847000,
    "updated": 1724949384000
  },
  {
    "id": "a02Ka00000ftfn7IAA",
    "name": "",
    "title": "Tableau Error handling for Connected Apps Embedded API V3",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "Tableau Server 2023.3.5, Tableau Cloud",
    "primaryVer": "2023.3.5",
    "allVersions": [
      "2023.3.5"
    ],
    "reports": 2,
    "workId": "W-18792912",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000ftfn7IAA",
    "summary": "When a viz fails to load (e.g., due to a bad workbook or permissions), the vizloaderror event should:Trigger reliablyExpose error details via getErrorCode() and getErrorMessage()according to our documentation: https://help.tableau.com/current/api/embedding_api/en-us/docs/embedding_api_auth.html#error-handling-for-connected-appsIn practice, this doesn\u2019t happen, the event fires, but the expected error details are missing or inaccessible. Only seem to be visible in the console logs",
    "created": 1750145985000,
    "updated": 1750701891000
  },
  {
    "id": "a02Ka00000mUW1MIAW",
    "name": "",
    "title": "Vizdataservice intermittently throws logic exception over dashboard interaction",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.3.1",
    "primaryVer": "2025.3.1",
    "allVersions": [
      "2025.3.1"
    ],
    "reports": 0,
    "workId": "W-21274869",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mUW1MIAW",
    "summary": "The dashboard failed to render after updating a quick filter or parameter, displaying the following error message:",
    "created": 1772662676000,
    "updated": 1783930921000
  },
  {
    "id": "a02Ka00000eNgNiIAK",
    "name": "",
    "title": "Incremental Refresh with Prep Flows Fail in Tableau Cloud if an Input Data Source is a Virtual Connection",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2024.3.0",
    "primaryVer": "2024.3.0",
    "allVersions": [
      "2024.3.0"
    ],
    "reports": 0,
    "workId": "W-18092636",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000eNgNiIAK",
    "summary": "When running a flow on Tableau Cloud that uses a Virtual Connection as an input, and that uses the incremental refresh option, the flow might fail with the following error message: The incremental refresh field that identifies the last processed value in the output \"[value]\" is missing or has been removed from the flow. Flow run ID:{[number]} failed on output step:{ [output node identifier] }.",
    "created": 1743712464000,
    "updated": 1746814723000
  },
  {
    "id": "a02g7000006nQtxAAE",
    "name": "",
    "title": "Screen Reader Unable to Read Filter Alt Text on Published Dashboards",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2025.3",
    "primaryVer": "2025.3",
    "allVersions": [
      "2025.3"
    ],
    "reports": 0,
    "workId": "W-23666460",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000006nQtxAAE",
    "summary": "Publishing a Workbook without an active selection causes screen reader tools (such as NVDA and Microsoft Narrator) to fail to read the configured Alt Text for filters when navigating the Published Dashboard.",
    "created": 1785788929000,
    "updated": 1787774444000
  },
  {
    "id": "a028c00000yxc2iAAA",
    "name": "",
    "title": "Unable To Delete Users Using Rest Api With The MapAssetsTo Option",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2021.4.6",
    "primaryVer": "2021.4.6",
    "allVersions": [
      "2021.4.6"
    ],
    "reports": 0,
    "workId": "W-14995414",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yxc2iAAA",
    "summary": "Unable to delete users who have customized views using REST API with the mapAssetsTo option.The issue occurs in different conditions depending on the Tableau Server versions.At least, we confirmed that the issue also occurs in 2023.3.x and 2022.1.x.The conditions to cause this error are different depending on Tableau Server versions.For example, in 2021.4.6,\u00a0when using the mgapAssetsTo option, REST API seems to transfer customized views to another user and get the error if the new owner already ",
    "created": 1708498771000,
    "updated": 1719886594000
  },
  {
    "id": "a028c00000uX4xUAAS",
    "name": "",
    "title": "Tableau Cloud/Desktop - Filter in dashboard returns Error code D6944D11 when selecting value in 2023.1+",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1+",
    "primaryVer": "2023.1",
    "allVersions": [
      "2023.1"
    ],
    "reports": 25,
    "workId": "W-13899955",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000uX4xUAAS",
    "summary": "When certain values are selected in a filter dropdown, the following error may intermittently occurRequest Rejected by ServerLogicException: Internal Error - An unexpected error occurred and the operation could not be completed.Error Code: D6944D11\u00a0",
    "created": 1692637604000,
    "updated": 1787935955000
  },
  {
    "id": "a028c00000tIwnLAAS",
    "name": "",
    "title": "TDS file is not found in local storage for siteLuid after upgrade from TS 2021.3 to 2023.1",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1.2",
    "primaryVer": "2023.1.2",
    "allVersions": [
      "2023.1.2"
    ],
    "reports": 5,
    "workId": "W-13590841",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000tIwnLAAS",
    "summary": "After upgrading Tableau Server from 2021.3 to 2023.1, when accessing the published data source or the workbook that connect a published data source, \"Internal error fetching datasource from repository\" occurred.If publishing data sources from Tableau Desktop 2023.1, \"Internal server error ExecutionException\" will occur.\u00a0The issue in question affects both Tableau Server and Tableau Desktop 2023.1. For information on 2023.3, see https://issues.salesforce.com/issue/a028c00000yG04gAAC/tableau-server",
    "created": 1686845362000,
    "updated": 1719886594000
  },
  {
    "id": "a02Ka00000lnF7TIAU",
    "name": "",
    "title": "After upgrading to 2025.1.5+ some collections may appear missing.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1.5",
    "primaryVer": "2025.1.5",
    "allVersions": [
      "2025.1.5"
    ],
    "reports": 14,
    "workId": "W-20880072",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000lnF7TIAU",
    "summary": "After completing an upgrade from 2023.3.9 to 2025.1.5 a subset of collections and favorites may be missing in the user interface. Immediately after restoring, during the very first attempt to access the collection for a site, an error message is displayed in the UI. This error does not reoccur on subsequent access attempts; however, the collections remain missing in the UI. There are no additional errors reported in the logs.Error message in the UI: Showing partial results. Unable to load comple",
    "created": 1768940424000,
    "updated": 1788463934000
  },
  {
    "id": "a028c00000zKmECAA0",
    "name": "",
    "title": "Tableau Cloud - Multiple event types not being recorded as expected in Activity Log in Amazon S3",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 2,
    "workId": "W-15762164",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zKmECAA0",
    "summary": "In Tableau Cloud, entries for various events (such as extract refreshes) are not displayed as expected in the Activity Log for Amazon S3. The following event types have been reported to either appear incorrectly, or not be recorded at all:Create PermissionsDelete PermissionsHist_access_datasourceHist_create_datasource_triggerHist_Create_flow_triggerHist_delete_flow_triggerHist_delete_system_userHist_issue_refresh_tokenHist_loginHist_logoutHist_redeem_refresh_tokenHist_refresh_datasource_extracth",
    "created": 1722951146000,
    "updated": 1737048944000
  },
  {
    "id": "a02Ka00000lmOz4IAE",
    "name": "",
    "title": "Webhooks DatasourceCreated event fires twice when an existing datasource is modified.",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2025.1.3",
    "primaryVer": "2025.1.3",
    "allVersions": [
      "2025.1.3"
    ],
    "reports": 1,
    "workId": "W-20898776",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000lmOz4IAE",
    "summary": "When subscribing to the DatasourceCreated webhook event, Tableau emits the same event not only when a datasource is created for the first time but also when an existing datasource is modified and republished (overwritten)",
    "created": 1768472141000,
    "updated": 1783476103000
  },
  {
    "id": "a02Ka00000mTv09IAC",
    "name": "",
    "title": "\u201cThe provided username/password combination was invalid\u201d error when running TCL Flow having direct connection to privatelink.snowflakecomputing.com",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2025.1.x",
    "primaryVer": "2025.1",
    "allVersions": [
      "2025.1"
    ],
    "reports": 1,
    "workId": "W-21442003",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mTv09IAC",
    "summary": "Flows which use Snowflake Privatelink and are published with direct connection through Prep Builder onto Cloud are not working through Bridge. The error being returned is: \"The provided username/password combination was invalid\u201d while they work with the published data source.",
    "created": 1772610821000,
    "updated": 1784003846000
  },
  {
    "id": "a028c000010FoAHAA0",
    "name": "",
    "title": "When features.VizDataServiceHTTPEndpointEnable is set to false, Multi-fact relationship models no longer work",
    "status": "Solution in Progress",
    "statusType": "open",
    "foundIn": "2024.2.5",
    "primaryVer": "2024.2.5",
    "allVersions": [
      "2024.2.5"
    ],
    "reports": 2,
    "workId": "W-17979576",
    "url": "https://help.salesforce.com/s/issue?id=a028c000010FoAHAA0",
    "summary": "When features.VizDataServiceHTTPEndpointEnable is set to false, Multi-fact relationship models no longer work.There are some known issues that currently recommend setting this value to false to work around them, and some versions of Tableau Server will ship with 'false' as the default setting.",
    "created": 1741288576000,
    "updated": 1747702812000
  },
  {
    "id": "a028c00000zKmYqAAK",
    "name": "",
    "title": "\"Error Publishing Flow\" or \"Check that all fields...don't exceed 250 characters\" when Publishing a Flow using Virtual Connections",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 21,
    "workId": "W-16226997",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zKmYqAAK",
    "summary": "When publishing a flow from Tableau Prep Builder to Tableau Cloud or Tableau Server 2024.2.x, an unexpected \"Error Publishing Flow\" or \"Check that all fields...don't exceed 250 characters\" error message occurs when the flow contains a connection to a published Virtual ConnectionEnvironmentAll supported Tableau Prep Builder versionsTableau CloudTableau Server 2024.2.x",
    "created": 1722963228000,
    "updated": 1764699734000
  },
  {
    "id": "a028c00000zjPtMAAU",
    "name": "",
    "title": "Scope Error when connecting to Snowflake from Tableau Desktop when using a role name that contains spaces.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "All Tableau Desktop versions prior to 2025.1",
    "primaryVer": "2025.1",
    "allVersions": [
      "2025.1"
    ],
    "reports": 1,
    "workId": "W-17323633",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zjPtMAAU",
    "summary": "When establishing a snowflake connection in Tableau Desktop utilizing OAuth and the Role is set to a value that contains a special character or a space, we are presented an Authorization Error stating, \"The requested scope is invalid.\"",
    "created": 1732797261000,
    "updated": 1742491421000
  },
  {
    "id": "a028c00000zKkS0AAK",
    "name": "",
    "title": "Tableau Bridge/Cloud - Issue creating and updating Prep Flow after updating a view used on a Virtual Connection",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2023.2(Bridge), 2024.2",
    "primaryVer": "2023.2",
    "allVersions": [
      "2023.2",
      "2024.2"
    ],
    "reports": 3,
    "workId": "W-16414341",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zKkS0AAK",
    "summary": "When using a Virtual Connection and updating a View directly on the database, attempting to edit/update existing connected flows results in an error. ",
    "created": 1722883031000,
    "updated": 1729521619000
  },
  {
    "id": "a028c00000z0TcUAAU",
    "name": "",
    "title": "Cannot connect to Amazon S3 if pressing Enter key instead of clicking \"Sign In\" button.",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2023.3.3",
    "primaryVer": "2023.3.3",
    "allVersions": [
      "2023.3.3"
    ],
    "reports": 1,
    "workId": "W-15331479",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000z0TcUAAU",
    "summary": "In Tableau Server, pressing the Enter key instead of clicking the \"Sign In\" button in the connection dialog box encounters the following error after a short wait.Error: There was a timeout waiting for the Connector object to initialize.In Tableau Desktop, pressing the Enter key instead of clicking the \"Sign In\" button in the connection dialog box closes the dialog box immediately. The connection is still not successful.",
    "created": 1714032446000,
    "updated": 1736537509000
  },
  {
    "id": "a028c000010FUXfAAO",
    "name": "",
    "title": "\"That page could not be accessed\" Error When Switching From Default Site to Another Site After Upgrade to 2024.2.5 with Trusted Authentication",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.5",
    "primaryVer": "2024.2.5",
    "allVersions": [
      "2024.2.5"
    ],
    "reports": 1,
    "workId": "W-17448130",
    "url": "https://help.salesforce.com/s/issue?id=a028c000010FUXfAAO",
    "summary": "After successfully signing into recently upgraded Tableau Server environment, attempting to change site from current to another site, users receive a \"That page could not be accessed\" error.Other sites can be accessed directly, but anytime the user switches sites, they receive this error.",
    "created": 1740405948000,
    "updated": 1754599655000
  },
  {
    "id": "a02Ka00000gYp9sIAC",
    "name": "",
    "title": "The 'Edit Data Source' option is disabled for published data sources connected to Excel files and saved as extracts.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1.1",
    "primaryVer": "2025.1.1",
    "allVersions": [
      "2025.1.1"
    ],
    "reports": 4,
    "workId": "W-18949178",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000gYp9sIAC",
    "summary": "In Tableau Server, the 'Edit Data Source' option is disabled (grayed out) for published data sources that are connected to Excel files and saved as extracts.",
    "created": 1751448425000,
    "updated": 1773917672000
  },
  {
    "id": "a02g700000BAGkcAAH",
    "name": "",
    "title": "Keyboard tab navigation becomes unpredictable on a dashboard after changing a parameter value",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2026.2",
    "primaryVer": "2026.2",
    "allVersions": [
      "2026.2"
    ],
    "reports": 0,
    "workId": "W-24366705",
    "url": "https://help.salesforce.com/s/issue?id=a02g700000BAGkcAAH",
    "summary": "After a parameter value is changed on a dashboard, keyboard tab navigation no longer moves focus in a predictable, orderly path. Normally, pressing Tab moves focus across dashboard components in a logical left-to-right, top-to-bottom order. Once a parameter value is changed, focus begins jumping between worksheets and zones in an unexpected sequence, making keyboard-only navigation difficult. The issue does not occur if the parameter value is left unchanged, and refreshing the view after changin",
    "created": 1791298316000,
    "updated": 1791300075000
  },
  {
    "id": "a02Ka00000f9WhaIAE",
    "name": "",
    "title": "Tableau Bridge Extracts Fail Intermittently with an \"Operation Timed Out\" Error During Peak Hours on Tableau Cloud",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2024.3.4",
    "primaryVer": "2024.3.4",
    "allVersions": [
      "2024.3.4"
    ],
    "reports": 2,
    "workId": "W-18412493",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000f9WhaIAE",
    "summary": "Tableau Bridge Extracts fail intermittently with an \"Operation Timed Out\" error\u00a0or \"Can't display the view\" error. Additionally, the Tableau Bridge client status will indicate \"Disconnected\" or \"Not Responding.",
    "created": 1747924998000,
    "updated": 1776440240000
  },
  {
    "id": "a02Ka00000freP2IAI",
    "name": "",
    "title": "Significant Memory Increase in TS Hyper Process from Version 2022.3.20 to 2024.2.5",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "Summer '16",
    "primaryVer": "",
    "allVersions": [],
    "reports": 0,
    "workId": "W-18183221",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000freP2IAI",
    "summary": "A significant increase in memory consumption by the Hyper process has been observed when upgrading from Tableau Server version 2022.3.20 to 2024.2.5. When running the same workbook with identical data and queries, the older version exhibits low memory usage, while the newer version shows significantly higher memory consumption.",
    "created": 1749118614000,
    "updated": 1750860287000
  },
  {
    "id": "a02Ka00000mFYi3IAG",
    "name": "",
    "title": "Upstream/Downstream table not representing the number of tables(Unfiltered Table) in Virtual Connection",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2025.1.11",
    "primaryVer": "2025.1.11",
    "allVersions": [
      "2025.1.11"
    ],
    "reports": 1,
    "workId": "W-22417289",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mFYi3IAG",
    "summary": "When comparing number of tables for a virtual connection to lineage, there will be a discrepancy in the count of tables.  ",
    "created": 1778485802000,
    "updated": 1788934959000
  },
  {
    "id": "a028c00000yDb0KAAS",
    "name": "",
    "title": "Flows with \"append to table\" option fail with \"System error: Read timed out An internal error occurred. Contact your administrator.\"",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1.5 (Server), 2023.3.0 (Cloud)",
    "primaryVer": "2023.1.5",
    "allVersions": [
      "2023.1.5",
      "2023.3.0"
    ],
    "reports": 6,
    "workId": "W-14540014",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yDb0KAAS",
    "summary": "On Tableau Server or Tableau Cloud, running a flow that appends a large amount of data to a table fails with the following error:\"System error: Read timed out An internal error occurred. Contact your administrator.\" The data does actually append after a varying amount of time, however, due to the error the flow job will eventually be suspended. ",
    "created": 1702911180000,
    "updated": 1719948970000
  },
  {
    "id": "a028c00000uWoCFAA0",
    "name": "",
    "title": "Tableau Cloud 2023.2 - TableauException: Incorrect data type real, getting expected integer type",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.2",
    "primaryVer": "2023.2",
    "allVersions": [
      "2023.2"
    ],
    "reports": 11,
    "workId": "W-13918599",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000uWoCFAA0",
    "summary": "Beginning in Tableau Cloud 2023.2, users may experience an issue wherein a workbook, when worksheets are viewed, triggers an error which reads \"Incorrect data type real, getting expected integer type\"The issue does not reproduce on Tableau Desktop or Tableau Server versions of 2023.2.",
    "created": 1692114648000,
    "updated": 1750095970000
  },
  {
    "id": "a028c00000yxKlKAAU",
    "name": "",
    "title": "Tableau Desktop - Workbooks migrated through CMT (Content Migration Tool) can no longer open and receive error",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1.8",
    "primaryVer": "2023.1.8",
    "allVersions": [
      "2023.1.8"
    ],
    "reports": 0,
    "workId": "W-14617568",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yxKlKAAU",
    "summary": "When workbooks have been migrated using the Tableau Content Migration Tool, the target site's workbooks can no longer open in Tableau Desktop with error \"element 'datasource-dependencies' is not allowed for content model\"",
    "created": 1708093626000,
    "updated": 1722607981000
  },
  {
    "id": "a028c00000zL5LbAAK",
    "name": "",
    "title": "Tableau Cloud - Cannot connect to Redshift using the v2 driver if temp tables are disabled",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 1,
    "workId": "W-16348616",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zL5LbAAK",
    "summary": "Whenever Tableau connects to Redshift, and many other databases, Tableau will attempt to check for the ability to create temp tables. Tableau uses these for non-required performance optimizations. This issue is caused during temp table checks.One of Tableau's queries starts a transaction that fails. The connection (using the newly-deployed v2 driver) is left in a bad state. At this point, an error is logged internally, but the UI may display one of the following symptoms:Error: [Amazon][Amazon R",
    "created": 1723757060000,
    "updated": 1727298631000
  },
  {
    "id": "a028c00000yGSCaAAO",
    "name": "",
    "title": "Intermittent Error \"System Error. An error occurred while communicating with the data source: No such column\" when running Flows",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1.5",
    "primaryVer": "2023.1.5",
    "allVersions": [
      "2023.1.5"
    ],
    "reports": 0,
    "workId": "W-14480349",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yGSCaAAO",
    "summary": "Some flows start to fail intermittently after upgrading the Tableau Server to 2023.1.5Backgrounder Error: System Error. An error occurred while communicating with the data sourceFlow processor error: DataSourceException: No such column [<column name>]",
    "created": 1706852666000,
    "updated": 1719886591000
  },
  {
    "id": "a028c00000uVrd0AAC",
    "name": "",
    "title": "The error \"Could not find Hyper hosts to connect to\" when opening the view on Ubuntu 20.04",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 0,
    "workId": "W-13777665",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000uVrd0AAC",
    "summary": "The error \"Could not find Hyper hosts to connect to\" or \"Cannot create temp database\"\u00a0when trying to open the view.Could not find Hyper hosts to connect to.Unable to connect to the Tableau Data Extract server \"\".\u00a0Check that the server is running and that you have access privileges to the requested database.[SQLSTATE:53000] Cannot create temp database: The transient database could not be created",
    "created": 1690785319000,
    "updated": 1719886594000
  },
  {
    "id": "a02g7000006YdRhAAK",
    "name": "",
    "title": "Change Frequency dialog for scheduling Flow task does not reflect existing schedule",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2026.2.0",
    "primaryVer": "2026.2.0",
    "allVersions": [
      "2026.2.0"
    ],
    "reports": 0,
    "workId": "W-23448844",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000006YdRhAAK",
    "summary": "When changing the frequency of a Flow scheduled using Tableau Prep Conductor, the dialog box does not populate to show the current schedule. Instead, the dialog shows the current day and the next possible time to run a schedule.Note: Despite the information displayed in the dialog, unless changes are saved, the existing schedule for the flow will not be modified.",
    "created": 1784859916000,
    "updated": 1787774433000
  },
  {
    "id": "a028c00000tIH2HAAW",
    "name": "",
    "title": "BigQuery : Error Code 305B73A6 when dragging and dropping a dimension when using a BigQuery virtual connection",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2021.4.3",
    "primaryVer": "2021.4.3",
    "allVersions": [
      "2021.4.3"
    ],
    "reports": 0,
    "workId": "W-12919050",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000tIH2HAAW",
    "summary": "Affects Tableau Server, Tableau Desktop, and Tableau Cloud.When trying to create a view with dimension data using a virtual connection and BigQuery in Tableau Server or Tableau Desktop, and dragging and dropping some of the dimension data, an error appears.The error message is different dependent on using Tableau Desktop or Tableau Server:Tableau Server: Unknown error: An error occurred while accessing data. Contact your Tableau administrator. (code=13)Tableau Desktop: Bad Connection: Tableau co",
    "created": 1685135306000,
    "updated": 1719886570000
  },
  {
    "id": "a02Ka00000mmXZIIA2",
    "name": "",
    "title": "Creator users who have Extract Refresh permission for a workbook are unable to update the extract refresh schedule for that workbook",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "Tableau Cloud 2025.3",
    "primaryVer": "2025.3",
    "allVersions": [
      "2025.3"
    ],
    "reports": 0,
    "workId": "W-21307878",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mmXZIIA2",
    "summary": "In Tableau Cloud, users with the workbook/project owner or Site Administrator roles can add Extract Refresh schedules to workbooks. However, if a user\u2019s site role is later changed to Creator and they are no longer the owner of the workbook or project, they cannot delete or modify the schedule frequency, even if they have been explicitly granted Extract Refresh permissions.",
    "created": 1774524809000,
    "updated": 1785286437000
  },
  {
    "id": "a02g7000005p3PBAAY",
    "name": "",
    "title": "Existing workbooks fail to route via Bridge after updating connection to Snowflake PrivateLink.",
    "status": "Solution in Progress",
    "statusType": "open",
    "foundIn": "2026.2.2",
    "primaryVer": "2026.2.2",
    "allVersions": [
      "2026.2.2"
    ],
    "reports": 0,
    "workId": "W-23285551",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000005p3PBAAY",
    "summary": "When an existing Tableau workbook that was originally published using a standard Snowflake connection is updated in Tableau Desktop to use a Snowflake PrivateLink endpoint and then republished to Tableau Cloud, the workbook fails to load. Users are prompted to re-enter their Snowflake credentials, but authentication continues to fail.The same PrivateLink connection works successfully when publishing a newly created workbook from Tableau Desktop, indicating the issue is specific to republishing e",
    "created": 1783416491000,
    "updated": 1791337904000
  },
  {
    "id": "a028c00000ywn9DAAQ",
    "name": "",
    "title": "Extract refresh alerts don't show up for Site Administrator",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3.0",
    "primaryVer": "2023.3.0",
    "allVersions": [
      "2023.3.0"
    ],
    "reports": 1,
    "workId": "W-14981093",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000ywn9DAAQ",
    "summary": "Extract refresh alerts don't show up for Site Administrator. This also occurs in Tableau Cloud 2023.3.0.The issue is reproducible in multiple versions of Tableau Server, but the versions are not all confirmed.",
    "created": 1707393245000,
    "updated": 1722607638000
  },
  {
    "id": "a02Ka00000moDFfIAM",
    "name": "",
    "title": "When using a calculation that using aggregation of fields from multiple base tables, stacked/multiple marks are being displayed vs. a single mark",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2024.2.x, 2025.1.x, 2025.2.x, 2025.3.x, 2026.1.x",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2",
      "2025.1",
      "2025.2",
      "2025.3",
      "2026.1"
    ],
    "reports": 0,
    "workId": "W-21981957",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000moDFfIAM",
    "summary": "Note this issue also impacts Tableau Cloud and Tableau ServerWhen using a calculation that using aggregation of fields from multiple base tables (Multi-fact Relationship Data Source), stacked/multiple marks are being displayed where a single mark is expected.",
    "created": 1777046711000,
    "updated": 1778198219000
  },
  {
    "id": "a02g700000BZtuXAAT",
    "name": "",
    "title": "Parameter using Current value \"Value when workbook opens\" is displaying cache instead of latest data",
    "status": "Solution in Progress",
    "statusType": "open",
    "foundIn": "Summer '16",
    "primaryVer": "",
    "allVersions": [],
    "reports": 0,
    "workId": "W-24475591",
    "url": "https://help.salesforce.com/s/issue?id=a02g700000BZtuXAAT",
    "summary": "When a workbook that uses a parameter which shows the latest value from the database, upon refreshing the underlying published extract, the workbook doesn't show the latest data (via tabcmd export, REST API export, or in the UI). Within the UI, the user would need to click on the Refresh button on the toolbar for it to show. Accessing the dashboard using ?:refresh=y also does not affect it, it still shows cached data (i.e. before the refresh).",
    "created": 1791914106000,
    "updated": 1792735661000
  },
  {
    "id": "a028c00000yDbfDAAS",
    "name": "",
    "title": "Tableau Cloud - Extract refresh fails to send to Bridge for Linux with error \"REMOTE_EXTRACT_REFRESH_ALL_AGENTS_BUSY\"",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3",
    "primaryVer": "2023.3",
    "allVersions": [
      "2023.3"
    ],
    "reports": 2,
    "workId": "W-14682653",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yDbfDAAS",
    "summary": "Extract refresh jobs on Tableau Cloud, when sent to Tableau Bridge for Linux, may fail unexpectedly.The user receives a notification that the job failed because \"Tableau Bridge Pool at Capacity\" and in the error logging the following error is observed:com.tableausoftware.server.status.reporting.TableauRuntimeException: category=UNAVAILABLE errorId=REMOTE_EXTRACT_REFRESH_ALL_AGENTS_BUSY domainErrorCode=330217 id=[ID]f host=[host] timeStamp=[date/time] (errorCode=330217)Note: This issue does not a",
    "created": 1702936120000,
    "updated": 1719886588000
  },
  {
    "id": "a028c00000zgtTMAAY",
    "name": "",
    "title": "\"Error Publishing Flow\" or \"Check that all fields...don't exceed 250 characters\" when Publishing a Flow connected to a Private IP Database",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 1,
    "workId": "W-16565132",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zgtTMAAY",
    "summary": "When publishing a flow from Tableau Prep Builder to Tableau Cloud or Tableau Server 2024.2.x, an unexpected \"Error Publishing Flow\" or \"Check that all fields...don't exceed 250 characters\" error message occurs when the flow contains a connection to a Database that uses a Private IP address (i.e. connecting to database hosted on an internal network).EnvironmentAll supported Tableau Prep Builder versionsTableau CloudTableau Server 2024.2.x",
    "created": 1726004012000,
    "updated": 1730122572000
  },
  {
    "id": "a028c00000zi0jzAAA",
    "name": "",
    "title": "When more than 1049 tags exist, only the first 1049 will display on the Explore page Filter > Tag.",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2022.3, 2023.1, 2023.3, 2024.2",
    "primaryVer": "2022.3",
    "allVersions": [
      "2022.3",
      "2023.1",
      "2023.3",
      "2024.2"
    ],
    "reports": 0,
    "workId": "W-16925176",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zi0jzAAA",
    "summary": "On Tableau Server on the following versions, the number of tags visible in the UI is limited to 1049. Looking at the list of tags in filters will only show 1049 tags even if more exist.Versions where problem is observed:2024.2.32023.3.102023.1.16, 2023.1.52022.3.21",
    "created": 1728944468000,
    "updated": 1750860282000
  },
  {
    "id": "a028c00000ziSXiAAM",
    "name": "",
    "title": "Connected apps edit broken for Direct Trust from the list view",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.0",
    "primaryVer": "2024.2.0",
    "allVersions": [
      "2024.2.0"
    ],
    "reports": 3,
    "workId": "W-17031264",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000ziSXiAAM",
    "summary": "Fail to edit Direct Trusted connected apps with error shows \u201cAn unexpected error occurred\u201dThe issue also occurs on Tableau Server 2024.2.x.Before Tableau Server 2023.3, since the design of dialog is different, so the issue doesn't occur.",
    "created": 1730165713000,
    "updated": 1750278875000
  },
  {
    "id": "a028c000010EsFoAAK",
    "name": "",
    "title": "When attempting to edit a connection that uses Oauth, \"Invalid Provide: 0\" error is thrown",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3.0",
    "primaryVer": "2023.3.0",
    "allVersions": [
      "2023.3.0"
    ],
    "reports": 1,
    "workId": "W-17563915",
    "url": "https://help.salesforce.com/s/issue?id=a028c000010EsFoAAK",
    "summary": "Can also affect Tableau Server MRs after Nov 2024When attempting to edit a connection that uses Oauth, \"Invalid Provide: 0\" error is thrown",
    "created": 1738685788000,
    "updated": 1750370471000
  },
  {
    "id": "a028c00000yGWBJAA4",
    "name": "",
    "title": "Error \"Validation failed for your input OAuth custom domain\" when connecting to Snowflake",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2021.2.x, 2022.x.x, 2023.x.x",
    "primaryVer": "2021.2",
    "allVersions": [
      "2021.2"
    ],
    "reports": 2,
    "workId": "W-14168367",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yGWBJAA4",
    "summary": "With Tableau Desktop and Tableau Server 2021.2.x and later, when using the Snowflake connector to connect to Snowflake data source using a custom URL and OAuth, the following error occurs:Authentication failed.Error Code: 84223ADAValidation failed for your input OAuth custom domain:\u00a0https://xxxxxxx.xxx",
    "created": 1706906360000,
    "updated": 1744057914000
  },
  {
    "id": "a028c00000zi0jpAAA",
    "name": "",
    "title": "In Published Views, Sheets Filtered Using Parameter to 'Select A View' do not Reflect Selection Changes",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2024.3",
    "primaryVer": "2024.3",
    "allVersions": [
      "2024.3"
    ],
    "reports": 0,
    "workId": "W-16955247",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zi0jpAAA",
    "summary": "When using the Parameter option to 'Select a View' based on a filter selection, changing the selection does not result in minimizing the selected view or deselecting the filtered values.This behavior occurs in views published on Tableau Cloud and Tableau Server.",
    "created": 1728944179000,
    "updated": 1734122297000
  },
  {
    "id": "a028c00000zJyyQAAS",
    "name": "",
    "title": "Filter Action Disappears From Tooltip in a Published Workbook After Use of a Navigation Button",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2024.2.0",
    "primaryVer": "2024.2.0",
    "allVersions": [
      "2024.2.0"
    ],
    "reports": 1,
    "workId": "W-16139230",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zJyyQAAS",
    "summary": "After publishing a workbook to either Tableau Cloud or Tableau Server that contains both of the following:a Filter Actiona Navigation buttonThe Filter Action might disappear from its tooltip after using the Navigation button to go back to the original view.",
    "created": 1720805350000,
    "updated": 1723674594000
  },
  {
    "id": "a02Ka00000gbPxCIAU",
    "name": "",
    "title": "Refresh Job Failure on Virtual Connection after adding new column to the database source",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.x",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 1,
    "workId": "W-18696595",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000gbPxCIAU",
    "summary": "The extract refresh error will show:\"The job failed on [DATE/TIME] after running for 0.0 min because of com.tableausoftware server status reportin. Logical Query missing field [New Column Name] from [Warehouse] in connection [string] This is an invalid query\"Version(s) Affected: Tableau Server 2024.2.X",
    "created": 1752656614000,
    "updated": 1785331486000
  },
  {
    "id": "a02Ka00000ll5ANIAY",
    "name": "",
    "title": "\"No entity found for query\" error when extracting tables for a Virtual Connection",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1.5",
    "primaryVer": "2025.1.5",
    "allVersions": [
      "2025.1.5"
    ],
    "reports": 1,
    "workId": "W-20515284",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000ll5ANIAY",
    "summary": "When attempting to extract tables for a Virtual Connection, the following issue occurs: \"No entity found for query\".",
    "created": 1766076632000,
    "updated": 1778173840000
  },
  {
    "id": "a02Ka00000eNdkLIAS",
    "name": "",
    "title": "\"[SQLSTATE:53S03] Cannot allocate [number] bytes of memory: The `local transaction memory limit` limit of [number] bytes was exceeded\" Loading View",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1.0",
    "primaryVer": "2025.1.0",
    "allVersions": [
      "2025.1.0"
    ],
    "reports": 9,
    "workId": "W-18169496",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000eNdkLIAS",
    "summary": "When attempting to bring up a view in Tableau Cloud or Tableau Server, the following error message might appear after waiting several minutes: An error occurred while communicating with the data source \"[name of data source]\"[SQLSTATE:53S03] Cannot allocate [number] bytes of memory: The `local transaction memory limit` limit of [number] bytes was exceeded.DataServiceFailure",
    "created": 1743606414000,
    "updated": 1774435486000
  },
  {
    "id": "a02Ka00000mRjuDIAS",
    "name": "",
    "title": "Tabcmd 2025.3.X Package Has Missing Bouncy Castle Library \u2013 Linux / Java 17",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1.11, 2025.3.1",
    "primaryVer": "2025.1.11",
    "allVersions": [
      "2025.1.11",
      "2025.3.1"
    ],
    "reports": 1,
    "workId": "W-21307692",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mRjuDIAS",
    "summary": "The Tabcmd package version 2025.3.X and later has a missing Bouncy Castle Library for Linux/Java 17. ",
    "created": 1771528129000,
    "updated": 1774016529000
  },
  {
    "id": "a028c00000yzk4lAAA",
    "name": "",
    "title": "Filter values reset to large multiple when creating filter on continuous measure.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.3.0",
    "primaryVer": "2022.3.0",
    "allVersions": [
      "2022.3.0"
    ],
    "reports": 0,
    "workId": "W-12865442",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yzk4lAAA",
    "summary": "Basic measure range filter changes the upper and lower filter limit values by x10^12, when setting up the filter. Tableau Server is set up in German (Germany) locale and the hosting OS locale is German as well.",
    "created": 1711986722000,
    "updated": 1719886594000
  },
  {
    "id": "a02Ka00000iIEiFIAW",
    "name": "",
    "title": "Workbook may fail to load due to a Logical Query Missing Field error",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.2.0",
    "primaryVer": "2025.2.0",
    "allVersions": [
      "2025.2.0"
    ],
    "reports": 2,
    "workId": "W-19283711",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000iIEiFIAW",
    "summary": "Issue affects Tableau Cloud, Desktop and ServerWorkbook that opened in earlier versions of Tableau may fail to load with version 2025.2.x or higher, throwing the following error:\"Logical Query missing field[TEMP(Calculation_25252525252525255)(2048204825)(0)] from aggregateOp. This is an invalid query.\"The numbers after \"Calculation_\" and before the (0) will differ depending on your own data, the above are sample values.",
    "created": 1755646043000,
    "updated": 1773076567000
  },
  {
    "id": "a02Ka00000frXoIIAU",
    "name": "",
    "title": "An unexpected error occurred\" while opening settings page in 2025.1.1",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1.1",
    "primaryVer": "2025.1.1",
    "allVersions": [
      "2025.1.1"
    ],
    "reports": 1,
    "workId": "W-18128910",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000frXoIIAU",
    "summary": "An unexpected error occurred\" while opening settings page in 2025.1.1 version of Tableau serverError is encountered only when Tableau Server has multiple Sites, error is not encountered for TS with Single Site.",
    "created": 1749029740000,
    "updated": 1751904001000
  },
  {
    "id": "a02Ka00000mGNuZIAW",
    "name": "",
    "title": "Dimension and Measure Swap Parameters Do Not Render Marks Correctly For Published Views That Have LOD Calculations",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "Tableau Server 2025.1",
    "primaryVer": "2025.1",
    "allVersions": [
      "2025.1"
    ],
    "reports": 0,
    "workId": "W-19888875",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mGNuZIAW",
    "summary": "When LOD calculations are used in a published view, making changes to the selected values in the dimension and measure swap parameters does not update the view to reflect those parameter value changes.",
    "created": 1779286322000,
    "updated": 1779288379000
  },
  {
    "id": "a028c00000zIYFaAAO",
    "name": "",
    "title": "Unable to open workbooks using Virtual Connections : Call to QGS failed because session wasn't found.",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2022.3.13 and later",
    "primaryVer": "2022.3.13",
    "allVersions": [
      "2022.3.13"
    ],
    "reports": 9,
    "workId": "W-13113932",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zIYFaAAO",
    "summary": "Unable to open several workbooks using Virtual Connections in Tableau Server and Tableau Cloud due to an error: Call to QGS failed because session wasn't found.",
    "created": 1716816638000,
    "updated": 1776870450000
  },
  {
    "id": "a02Ka00000gbJzbIAE",
    "name": "",
    "title": "Initial URL is not being sent in the relay state to OIDC provider when multiple identity pools and OIDC is used",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1.0",
    "primaryVer": "2025.1.0",
    "allVersions": [
      "2025.1.0"
    ],
    "reports": 2,
    "workId": "W-19014234",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000gbJzbIAE",
    "summary": "When using multiple identity pools with Active Directory and having OpenID (OIDC) as the secondary pool, the relay states aren\u2019t passed.Since the relay state is not passed, this causes end users to have to sign into Tableau Server, even though they've already signed into the IDP. The issue occurs 2024.2 to 2025.1.",
    "created": 1752497316000,
    "updated": 1758904761000
  },
  {
    "id": "a028c00000xB7brAAC",
    "name": "",
    "title": "Unable To Access Windows Shared Folder Containing A Space After It Is Configured Configured With \"tsm configuration set -k native_api.unc_mountpoints",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "Summer '16",
    "primaryVer": "",
    "allVersions": [],
    "reports": 3,
    "workId": "W-14476869",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000xB7brAAC",
    "summary": "Unable to access windows shared folder after running \"tsm configuration set -k native_api.unc_mountpoints -v\" in Linux Tableau Server.",
    "created": 1699931755000,
    "updated": 1744730508000
  },
  {
    "id": "a02Ka00000fuirvIAA",
    "name": "",
    "title": "Username Field Not Updating/Showing Blank When Republishing Extract-Based Workbooks with Databricks PAT (Personal Access Token)",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3.5+",
    "primaryVer": "2023.3.5",
    "allVersions": [
      "2023.3.5"
    ],
    "reports": 0,
    "workId": "W-18841141",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000fuirvIAA",
    "summary": "When republishing a workbook with an extract-based connection to Databricks to change from OAuth to PAT (Personal Access Token), the UI for Tableau Server 2023.3.5+ or Tableau Cloud will incorrectly show the old value for Username (which should be blank).",
    "created": 1750691829000,
    "updated": 1764802984000
  },
  {
    "id": "a028c00000uYS4BAAW",
    "name": "",
    "title": "tableau-rmt-obliterate script doesn't remove \"/var/opt/tableau/tabrmt\" folder",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "Tableau Server/RMT 2023.1.2",
    "primaryVer": "2023.1.2",
    "allVersions": [
      "2023.1.2"
    ],
    "reports": 0,
    "workId": "W-13721432",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000uYS4BAAW",
    "summary": "tableau-rmt-obliterate script doesn't remove \"/var/opt/tableau/tabrmt\" folder",
    "created": 1689210857000,
    "updated": 1730237531000
  },
  {
    "id": "a028c00000zk0NAAAY",
    "name": "",
    "title": "\"Can't Load Page...Error refreshing region list\" occurs In Tableau Cloud Manager Preventing Further Operations",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.3",
    "primaryVer": "2024.3",
    "allVersions": [
      "2024.3"
    ],
    "reports": 1,
    "workId": "W-17407187",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zk0NAAAY",
    "summary": "After signing into Tableau Cloud Manager, the following error message occurs, preventing any further operations in Tableau Cloud Manager.",
    "created": 1734459936000,
    "updated": 1737145995000
  },
  {
    "id": "a02Ka00000moLJVIA2",
    "name": "",
    "title": "When creating or editing a Union using the SharePoint Lists (JDBC) connector, the error occurs: \u201cbad value: connection-name\u201d  (Error Code: 47BF7751)",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1.7",
    "primaryVer": "2025.1.7",
    "allVersions": [
      "2025.1.7"
    ],
    "reports": 1,
    "workId": "W-22256155",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000moLJVIA2",
    "summary": "When creating or editing a Union using the SharePoint Lists (JDBC) connector in Tableau Desktop, the error \"Unable to complete action \u2014 Error in parameters for command 'launch-union-dialog', bad value: connection-name (Error Code: 47BF7751)\" is displayed and the union dialog fails to open.Version(s) Affected: 2025.1.7, 2024.2.3 (tested versions - issue may affect other versions as well)",
    "created": 1777448622000,
    "updated": 1785430025000
  },
  {
    "id": "a028c00000yzSVfAAM",
    "name": "",
    "title": "Tableau Desktop - Tableau does not fetch next-page data from OData paginated results if the first page is empty",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.1.7, 2024.1",
    "primaryVer": "2022.1.7",
    "allVersions": [
      "2022.1.7",
      "2024.1"
    ],
    "reports": 7,
    "workId": "W-15299792",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yzSVfAAM",
    "summary": "Tableau Desktop does not fetch next-page data from OData paginated results if the first page of those results is empty, resulting in a blank view.",
    "created": 1711046665000,
    "updated": 1719948477000
  },
  {
    "id": "a028c00000yxdxqAAA",
    "name": "",
    "title": "TS - When Project Asset permission is \u201cLocked\u201d, user with connect permissions cannot see the Virtual Connection tables created by another user",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2023.1",
    "primaryVer": "2023.1",
    "allVersions": [
      "2023.1"
    ],
    "reports": 0,
    "workId": "W-14459487",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yxdxqAAA",
    "summary": "When Project Asset permission is \u201cLocked\u201d, user with connect permissions cannot see the Virtual Connection tables created by another user on Tableau Server 2023.1.x",
    "created": 1708542345000,
    "updated": 1719886594000
  },
  {
    "id": "a02g7000007OubJAAS",
    "name": "",
    "title": "Extract Refreshes Fail After Rotating an OAuth Client Secret, Even When Saved Credentials Test Successful.",
    "status": "Solution in Progress",
    "statusType": "open",
    "foundIn": "2025.3.7",
    "primaryVer": "2025.3.7",
    "allVersions": [
      "2025.3.7"
    ],
    "reports": 0,
    "workId": "W-23911854",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000007OubJAAS",
    "summary": "When an OAuth client secret used for a data source connection is rotated, scheduled extract refreshes can fail even though the saved credentials pass a successful connection test. This happens because the saved credential's refresh token was issued under the previous client secret, and testing the credential from account settings does not always request a new token from the identity provider. As a result, users may see a successful credential test while background extract refreshes continue to f",
    "created": 1787251649000,
    "updated": 1790603197000
  },
  {
    "id": "a028c00000iwU47AAE",
    "name": "",
    "title": "\"Authentication/authorization error\" occurs when trying to edit a published Databricks connection on Tableau Cloud using web edit",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2022.2",
    "primaryVer": "2022.2",
    "allVersions": [
      "2022.2"
    ],
    "reports": 0,
    "workId": "W-12921890",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000iwU47AAE",
    "summary": "When attempting to change the connection information in edit connection for a databricks database, the following error occurs after entering the new information:The username or password is not valid.\u00a0Check the database name and credentials and try again.[Simba][ThriftExtension] (8) Authentication/authorization error occurred. Error details: Bad status with no error message: Unauthorized/Forbidden: Status code : 401Invalid username or password.",
    "created": 1681851827000,
    "updated": 1790605223000
  },
  {
    "id": "a028c00000uYUq5AAG",
    "name": "",
    "title": "initialize-rmt-agent script doesn't assign expected owner group for /var/opt/tableau/tabrmt/agent/logs",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "Tableau Server/RMT 2023.1.2",
    "primaryVer": "2023.1.2",
    "allVersions": [
      "2023.1.2"
    ],
    "reports": 0,
    "workId": "W-13737377",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000uYUq5AAG",
    "summary": "The script\u00a0initialize-rmt-agent\u00a0doesn't assign owner group specified by \"--rmt-logs-group\" or\u00a0the default group (rmtagentlogs) to\u00a0/var/opt/tableau/tabrmt/agent/logs folder.After running the initialize-rmt-agent script, the owner of\u00a0/var/opt/tableau/tabrmt/agent/log is\u00a0\"rmtagentapp\u201d\u00a0even though the documentation (RMT Agent Initialization Script Options) says:\u00a0--rmt-logs-group=<value>Version:\u00a0Added in version 2023.1.0.Optional.Name of the group that owns the\u00a0install_dir/agent/logs\u00a0directory. If sp",
    "created": 1689314619000,
    "updated": 1732203256000
  },
  {
    "id": "a028c00000yEVkaAAG",
    "name": "",
    "title": "The extract refresh itself is successfully updated but marked as failed with the error \"invalid input syntax for type integer\" in Jobs page.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3.0, Tableau Server 2023.3.x",
    "primaryVer": "2023.3.0",
    "allVersions": [
      "2023.3.0",
      "2023.3"
    ],
    "reports": 6,
    "workId": "W-14750937",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yEVkaAAG",
    "summary": "Extract refreshes are reporting as failed from Jobs page on Tableau Cloud. On the other hand, the extract refresh itself is successfully updated (data-wise).However, since the extract refresh continually \"fails\" this way, if the schedule will enter a suspended state due to the repeated failures.Same extract refresh issue is observed with Tableau Server 2023.3.x release.",
    "created": 1704876369000,
    "updated": 1719886594000
  },
  {
    "id": "a028c00000yDKkkAAG",
    "name": "",
    "title": "Tableau Cloud - Viewer users cannot view workbooks with virtual connection data sources when \"User Visibility\" setting is 'Limited'",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.2",
    "primaryVer": "2023.2",
    "allVersions": [
      "2023.2"
    ],
    "reports": 5,
    "workId": "W-14626552",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yDKkkAAG",
    "summary": "In Tableau Cloud, users that are part of a data policy group and hold the role \"Viewer\" may encounter the following error when attempting to load a workbook governed by the data policy:An error occurred while communicating with data sourcePermission deniedDataServiceFailure",
    "created": 1702390574000,
    "updated": 1728436668000
  },
  {
    "id": "a028c000010FxOMAA0",
    "name": "",
    "title": "Adding Measure Names and Values to a View Using a Published (Tableau Cloud) Datasource in Tableau Desktop Results in an Unexpected Error",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2024.2.2 - 2024.3.3",
    "primaryVer": "2024.2.2",
    "allVersions": [
      "2024.2.2",
      "2024.3.3"
    ],
    "reports": 0,
    "workId": "W-18021773",
    "url": "https://help.salesforce.com/s/issue?id=a028c000010FxOMAA0",
    "summary": "When measure names and measure values are added to an existing view, dashboards connected to a published (Tableau Cloud) data source fail to load the view with an unexpected error.",
    "created": 1741873050000,
    "updated": 1746468123000
  },
  {
    "id": "a028c00000yxJ8zAAE",
    "name": "",
    "title": "The PostgreSQL Connection Is Not Released After A Refreshing Extract Fails Due To Exceeding Backgrounder.querylimit.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "Summer '16",
    "primaryVer": "",
    "allVersions": [],
    "reports": 1,
    "workId": "W-14698046",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yxJ8zAAE",
    "summary": "The PostgreSQL connection is not released after a refreshing extract fails due to exceeding backgrounder.querylimit on Tableau Server version 2023.1+.",
    "created": 1708057135000,
    "updated": 1719948653000
  },
  {
    "id": "a02Ka00000mH2UqIAK",
    "name": "",
    "title": "Tooltip Displays Incomplete Data After Saving a Custom View on a Line Chart",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2025.1.5, 2026.1 & Tableau cloud",
    "primaryVer": "2025.1.5",
    "allVersions": [
      "2025.1.5",
      "2026.1"
    ],
    "reports": 1,
    "workId": "W-22782461",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mH2UqIAK",
    "summary": "When a custom view is saved after changing a line chart to daily granularity, the tooltip no longer displays the full measure and date information upon reloading that custom view. Under certain conditions, users may experience an incomplete tooltip on a line chart when loading a saved custom view. Specifically, when the level of detail on a line chart is changed to daily (by clicking the \"+\" icon) and a custom view is then saved, reopening that custom view results in the tooltip not displaying t",
    "created": 1781011691000,
    "updated": 1784700134000
  },
  {
    "id": "a028c00000zkPkSAAU",
    "name": "",
    "title": "Tableau Bridge Extracts Fail Intermittently with an \"Operation Timed Out\" Error During Peak Hours on Tableau Cloud",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.3",
    "primaryVer": "2024.3",
    "allVersions": [
      "2024.3"
    ],
    "reports": 22,
    "workId": "W-17553323",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zkPkSAAU",
    "summary": "During peak traffic hours, Tableau Bridge Extracts fail intermittently with an \"Operation Timed Out\" error \u00a0or \"Can't display the view\" error. Additionally, the Tableau Bridge client status will indicate \"Disconnected\" or \"Not Responding.\"",
    "created": 1735656667000,
    "updated": 1747772427000
  },
  {
    "id": "a02Ka00000llWYHIA2",
    "name": "",
    "title": "Inherited Descriptions Dialog Displays Field Name (Copy) Rather Than Actual Field Name.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.3",
    "primaryVer": "2025.3",
    "allVersions": [
      "2025.3"
    ],
    "reports": 0,
    "workId": "W-20736733",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000llWYHIA2",
    "summary": "Inherited descriptions dialog displays field name (Copy) rather than actual field name after workbook is published with field having description and copied via \u2018Duplicate\u2019.It can be reproduced in Tableau Server (any version) as well.",
    "created": 1767594147000,
    "updated": 1781108317000
  },
  {
    "id": "a02Ka00000f8AH1IAM",
    "name": "",
    "title": "Extract Refresh Fails in Virtual Connection After Adding or Removing Columns",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2023.3",
    "primaryVer": "2023.3",
    "allVersions": [
      "2023.3"
    ],
    "reports": 5,
    "workId": "W-18243924",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000f8AH1IAM",
    "summary": "When editing a virtual connection in Tableau Cloud or Tableau Server, the extract can't refresh after adding or removing columns in the database table.",
    "created": 1747357616000,
    "updated": 1764057980000
  },
  {
    "id": "a02Ka00000iyHL2IAM",
    "name": "",
    "title": "When updating Show Aliases setting an error occurs when launching View Data from a Dashboard",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2025.1",
    "primaryVer": "2025.1",
    "allVersions": [
      "2025.1"
    ],
    "reports": 0,
    "workId": "W-18349626",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000iyHL2IAM",
    "summary": "An issue occurs when updating \"Show Aliases\" setting when launching \"View Data from a Dashboard\"The issue occurs in Tableau Desktop, Tableau Server and Tableau Cloud.",
    "created": 1757059036000,
    "updated": 1757061896000
  },
  {
    "id": "a02g70000085xKbAAI",
    "name": "",
    "title": "Slow Performance When Querying Composable Data Sources Built From Multiple Published Extracts",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2026.2.2",
    "primaryVer": "2026.2.2",
    "allVersions": [
      "2026.2.2"
    ],
    "reports": 0,
    "workId": "W-23521913",
    "url": "https://help.salesforce.com/s/issue?id=a02g70000085xKbAAI",
    "summary": "Workbooks using composable data sources that combine multiple published extracts can experience significantly slower query performance, particularly when queries join data across the combined extracts. This issue can result in longer load times or query timeouts, especially when working with large extracts and configurations such as row-level security.",
    "created": 1787833548000,
    "updated": 1791584484000
  },
  {
    "id": "a02g7000005exxlAAA",
    "name": "",
    "title": "rmtadmin status --verbose prints every console line twice (duplicate output)",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2025.3.6",
    "primaryVer": "2025.3.6",
    "allVersions": [
      "2025.3.6"
    ],
    "reports": 0,
    "workId": "W-23158510",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000005exxlAAA",
    "summary": "When running the rmtadmin status command with the --verbose flag, every line of the console output is printed twice. While the content of the output is accurate, this duplication impacts the readability of administrative diagnostics.",
    "created": 1782720955000,
    "updated": 1782944318000
  },
  {
    "id": "a028c00000yDaglAAC",
    "name": "",
    "title": "When adding contents permissions with REST API (\"Add default permission\"), a locked parent project doesn't cascade them to the nested projects",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2021.4, 2022.1, 2022.3, 2023.1",
    "primaryVer": "2021.4",
    "allVersions": [
      "2021.4",
      "2022.1",
      "2022.3",
      "2023.1"
    ],
    "reports": 0,
    "workId": "W-14309577",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yDaglAAC",
    "summary": "When adding contents permissions with REST API (\"Add default permission\"), a locked parent project doesn't cascade them to the nested projects.This has already been fixed in Tableau Server 2023.3 and Tableau Cloud but not in Tableau Server 2023.1.7 or older supported versions.",
    "created": 1702889021000,
    "updated": 1745344932000
  },
  {
    "id": "a028c00000zKBlnAAG",
    "name": "",
    "title": "Kerberos Authentication option not available for Virtual Connections with Cloudera Hadoop Connector",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3.1",
    "primaryVer": "2023.3.1",
    "allVersions": [
      "2023.3.1"
    ],
    "reports": 1,
    "workId": "W-16183835",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zKBlnAAG",
    "summary": "When attempting to create a Virtual Connection for the Cloudera Hadoop connector in Tableau Server versions 2023.3.1 and later, the authentication option for Kerberos is not available.",
    "created": 1721344457000,
    "updated": 1734393436000
  },
  {
    "id": "a02Ka00000fusA0IAI",
    "name": "",
    "title": "TD/TS - After upgrade from 2023.3.10 to 2025.1.x workbook is slower to load begin-qp.logical-query",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2024.3.4, 2025.1.0, 2025.1.2",
    "primaryVer": "2024.3.4",
    "allVersions": [
      "2024.3.4",
      "2025.1.0",
      "2025.1.2"
    ],
    "reports": 15,
    "workId": "W-18606802",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000fusA0IAI",
    "summary": "From Tableau Desktop, Server 2024.3.4 and upwards the performance of the dashboard being generated goes from a few seconds to over a minute to be generated.This Known Issue is being 'Closed' as it is a Duplicate of an existing Known Issue: Some workbooks no longer load as expected and ultimately result to an \"Incompatible Types\" error after upgrading to 2025.1",
    "created": 1750754111000,
    "updated": 1762898083000
  },
  {
    "id": "a028c00000zI9sKAAS",
    "name": "",
    "title": "Subscription image and pdf rendering without text marks.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.1.0",
    "primaryVer": "2024.1.0",
    "allVersions": [
      "2024.1.0"
    ],
    "reports": 2,
    "workId": "W-15578455",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zI9sKAAS",
    "summary": "When a subscription is sent to a subscriber, the image and pdf of the viz does not display marks correctly for a number of sheets of the dashboard. The same sheets render properly on Tableau Desktop and Tableau Cloud/Server on both client and server render. The individual sheet itself when subscribed loads without issue and changing, removing, or moving the impacted sheets renders the sheets differently (sometimes normal and sometimes blank.",
    "created": 1715676588000,
    "updated": 1722376418000
  },
  {
    "id": "a02Ka00000eNxb5IAC",
    "name": "",
    "title": "No workbooks are displayed when sorting by Load time post-acceleration (sec) or Load time pre-acceleration (sec) in the View Acceleration tab",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.7",
    "primaryVer": "2024.2.7",
    "allVersions": [
      "2024.2.7"
    ],
    "reports": 1,
    "workId": "W-18258772",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000eNxb5IAC",
    "summary": "After clicking on\u00a0\"Load time post-acceleration (sec)\" or \"Load time pre-acceleration (sec)\", no workbooks are displayed on Tableau Server 2024.2.7 and Tableau Server 2025.1.0. However, for example, clicking on \"View\" will sort by view name in descending or ascending order.The same issue is also present in Tableau Cloud.",
    "created": 1744763690000,
    "updated": 1765210428000
  },
  {
    "id": "a028c00000yEm1yAAC",
    "name": "",
    "title": "TS - Backgrounder processes in error state after configuring backgrounder.restart_interval_in_minutes to any value more than default 0",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3.0",
    "primaryVer": "2023.3.0",
    "allVersions": [
      "2023.3.0"
    ],
    "reports": 1,
    "workId": "W-14642174",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yEm1yAAC",
    "summary": "In Tableau Server 2023.3.0, All Backgrounder processes are in error state after configuring backgrounder.restart_interval_in_minutes to 480 or to any value other than the default value of zero (0).",
    "created": 1705516122000,
    "updated": 1727371998000
  },
  {
    "id": "a02Ka00000mQzS3IAK",
    "name": "",
    "title": "Jobs related to workbook or flow creation, extract refreshes, or flow executions are failing due to an 'Operation Timed Out' error",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.18 2025.1.11, 2025.3.1",
    "primaryVer": "2024.2.18",
    "allVersions": [
      "2024.2.18",
      "2025.1.11",
      "2025.3.1"
    ],
    "reports": 1,
    "workId": "W-21241153",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mQzS3IAK",
    "summary": "Jobs related to workbook or flow creation, extract refreshes, or flow executions are encountering failures when attempting to connect to external data sources, including:Salesforce connectorGoogle DriveMarketing Cloud/Data CloudThe issues arise particularly during the processing of large datasets, resulting in network timeout errors such as:Process query TableauException: Operation timed outError unpausing data transfer: A value or data field grew larger than allowedError prompt in Tableau Deskt",
    "created": 1770859591000,
    "updated": 1783511586000
  },
  {
    "id": "a028c000010FmI4AAK",
    "name": "",
    "title": "CData Sharepoint JDBC Connector returns 404 error when creating extract for the list named \"Users\"",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2023.3.1",
    "primaryVer": "2023.3.1",
    "allVersions": [
      "2023.3.1"
    ],
    "reports": 0,
    "workId": "W-17640466",
    "url": "https://help.salesforce.com/s/issue?id=a028c000010FmI4AAK",
    "summary": "When connecting to a SharePoint Online list named \"Users\" from Tableau Desktop(as well as Tableau Server) and running an extract refresh, \"404 Not Found\" error occurs.",
    "created": 1741175568000,
    "updated": 1750115979000
  },
  {
    "id": "a028c00000yDv5zAAC",
    "name": "",
    "title": "When web authoring using WDC 3.0-based Connectors, receiving HTTP 503 along with error \"encountered an error\"",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.3.11",
    "primaryVer": "2022.3.11",
    "allVersions": [
      "2022.3.11"
    ],
    "reports": 8,
    "workId": "W-14569994",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yDv5zAAC",
    "summary": "When using connectors built with the WDC 3.0 SDK under Web Authoring, the error \"Tableau Server (Version <version number>) encountered an error while working with this worksheet.\" will be presented. Network capture will show that a /vizql request containing \"eps/static-server\" returns a 503.All connectors built using the WDC 3.0 SDK are affected. This includes the native, built-in connectors for \"Amazon S3\" and \"Google Analytics 4\".",
    "created": 1703571558000,
    "updated": 1751296029000
  },
  {
    "id": "a028c00000zIPN7AAO",
    "name": "",
    "title": "Lots of 'Trying to create ZookeeperClientCertificates' and 'Invalid config event received' messages in java logs.",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2022.2 and later",
    "primaryVer": "2022.2",
    "allVersions": [
      "2022.2"
    ],
    "reports": 2,
    "workId": "W-12899978",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zIPN7AAO",
    "summary": "A lot of 'Trying to create ZookeeperClientCertificates' and 'Invalid config event received' messages are seen in the logs for Tableau Server. Note that these errors are benign.",
    "created": 1716454714000,
    "updated": 1756888257000
  },
  {
    "id": "a02g70000071xgLAAQ",
    "name": "",
    "title": "Watch icon disappears in dashboard connecting to Snowflake embedded Live Connection with embedded OAuth credentials after Access Token validity expire",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2024.3",
    "primaryVer": "2024.3",
    "allVersions": [
      "2024.3"
    ],
    "reports": 1,
    "workId": "W-23824123",
    "url": "https://help.salesforce.com/s/issue?id=a02g70000071xgLAAQ",
    "summary": "Watch icon disappears in dashboard connecting to Snowflake embedded Live Connection with embedded OAuth credentials after Access Token validity expires. No error message appears in the dashboard just the Watch icon disappears after 1 hour which is the validity of the Access Token.Exiting subscriptions continue to work.",
    "created": 1786817319000,
    "updated": 1790181765000
  },
  {
    "id": "a02Ka00000jfglhIAA",
    "name": "",
    "title": "GraphQL returns \"null\" value for the database field while using \"CustomSQLTable\"",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "Tableau Server 2025.2.1",
    "primaryVer": "2025.2.1",
    "allVersions": [
      "2025.2.1"
    ],
    "reports": 2,
    "workId": "W-19609486",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000jfglhIAA",
    "summary": "Some Tableau workbooks return null values for the \"name\" and \"connection type\" fields in the CustomSQLTable when queried with GraphQL.",
    "created": 1757611449000,
    "updated": 1781108473000
  },
  {
    "id": "a02Ka00000iGpzkIAC",
    "name": "",
    "title": "Flow run failures in Prep Web Authoring and Prep Conductor due to error \"InsertData: unbound column\"",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.2.0",
    "primaryVer": "2025.2.0",
    "allVersions": [
      "2025.2.0"
    ],
    "reports": 26,
    "workId": "W-19309192",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000iGpzkIAC",
    "summary": "When running Flows in Tableau Cloud that connect to Salesforce data, the error below is intermittently received:An error occurred while communicating with the data source InsertData: unbound column: com.tableau.loom.runtime.SelectIntoExecutor.updateErrorMessage(SelectIntoExecutor.java:1035)Note that this issue can also affect Tableau Server and Prep Builder",
    "created": 1755110913000,
    "updated": 1758929995000
  },
  {
    "id": "a02Ka00000fsNisIAE",
    "name": "",
    "title": "An error occurs when a user attempts to access a workbook published by another author using SAP HANA Oauth over Bridge",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1",
    "primaryVer": "2025.1",
    "allVersions": [
      "2025.1"
    ],
    "reports": 1,
    "workId": "W-18769729",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000fsNisIAE",
    "summary": "When a dashboard is publsihed with embedded data source published live connection, it works only for owner/publisher. When another user tries to access the same workbook, having correct credentials and permissions to the datasource & connection method, the following error occurs:\"Confirm that you have provided valid credentials for this data source.Tableau needs an unexpired OAuth refresh token to connect to the data. Authorize refresh tokens or ask the datasource owner for help.SAP DBTech JDBC:",
    "created": 1749805604000,
    "updated": 1787953423000
  },
  {
    "id": "a02Ka00000laiaEIAQ",
    "name": "",
    "title": "Flows failing with the error messages \"Unable to Publish Data Source\"",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.2",
    "primaryVer": "2025.2",
    "allVersions": [
      "2025.2"
    ],
    "reports": 1,
    "workId": "W-20309636",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000laiaEIAQ",
    "summary": "Flows fail with \"Unable to Publish Data Source\". The error message states: \"Unable to publish the data source. Verify that the project exists on your server and that you have permission to access it, or select a different project.\"",
    "created": 1765272006000,
    "updated": 1766165580000
  },
  {
    "id": "a028c00000tJl92AAC",
    "name": "",
    "title": "Tableau Desktop (Mac) - Publishing data sources to Cloud hangs while sending data",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2022.3.0",
    "primaryVer": "2022.3.0",
    "allVersions": [
      "2022.3.0"
    ],
    "reports": 0,
    "workId": "W-12865882",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000tJl92AAC",
    "summary": "When publishing an extract of Snowflake to Tableau Cloud from Desktop 2022.2.x or 2022.3 running on Mac OS (Big Sur or Monterrey), the publish dialog initially shows progress and then freezes at random elapsed times. The issue does not occur on version 2022.1.x or in Windows machines.Sometimes, after users cancel the publishing, the following error message is encountered:Unable to complete actionAn error occurred when publishing the data source.A communication error (0) has occurred",
    "created": 1688137332000,
    "updated": 1719886570000
  },
  {
    "id": "a028c00000yEJVMAA4",
    "name": "",
    "title": "TIMESTAMP WITH LOCAL TIME fields from Oracle data sources are converted to STRING data types instead of expected DATETIME",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3.0",
    "primaryVer": "2023.3.0",
    "allVersions": [
      "2023.3.0"
    ],
    "reports": 1,
    "workId": "W-14743833",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yEJVMAA4",
    "summary": "Oracle's \"TIMESTAMP WITH LOCAL TIME\" fields are converted to STRING data types instead of expected DATETIME in Tableauaffects Server and Desktop",
    "created": 1704385587000,
    "updated": 1719886588000
  },
  {
    "id": "a02Ka00000mRhbqIAC",
    "name": "",
    "title": "When displaying a filtered mark, text alignment may differ when only one value is shown",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2023.1 or later",
    "primaryVer": "2023.1",
    "allVersions": [
      "2023.1"
    ],
    "reports": 1,
    "workId": "W-21263518",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mRhbqIAC",
    "summary": "Note that this issue also impacts Tableau Cloud and Tableau ServerWhen displaying a filtered mark, text alignment may differ when only one value is shown. Filtering to a single value will offset the text alignment.",
    "created": 1771352654000,
    "updated": 1784939783000
  },
  {
    "id": "a02Ka00000gYHEyIAO",
    "name": "",
    "title": "Flow run failed as it unable to retrieve new OAuth Access Token",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.2.0",
    "primaryVer": "2025.2.0",
    "allVersions": [
      "2025.2.0"
    ],
    "reports": 3,
    "workId": "W-18907580",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000gYHEyIAO",
    "summary": "In Tableau Cloud, flow references datasource using OAuth; failed to retrieve new OAuth Access Token causing flow run to fail. \u00a0The flow run was successful within the first hour after flow was freshly published, or the when referenced embedded OAuth data source or published OAuth data source was updated. However, subsequent flow runs may fail when it requires new OAuth Access Token.Once the flow failed, an attempt to connect to the same published OAuth data source in Tableau Cloud using Tableau D",
    "created": 1751246770000,
    "updated": 1753721181000
  },
  {
    "id": "a028c00000yzmwHAAQ",
    "name": "",
    "title": "Incremental refresh of a flow with published datasource and 'append to table' option and a calculated field named \"Number of Records\" fails.",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2023.3.3",
    "primaryVer": "2023.3.3",
    "allVersions": [
      "2023.3.3"
    ],
    "reports": 0,
    "workId": "W-15377413",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yzmwHAAQ",
    "summary": "Incremental Refresh is failing with an error:\u00a0\"Unable to publish the datasource. Verify the project exists on your server and you have permission to access it or select a different project\"",
    "created": 1712128945000,
    "updated": 1719886602000
  },
  {
    "id": "a028c00000zksVoAAI",
    "name": "",
    "title": "When working with Snowflake TIMESTAMP_TZ data types, changing from continuous to discrete displays inaccurate MONTH information",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.3.x, 2024.2.x",
    "primaryVer": "2024.3",
    "allVersions": [
      "2024.3",
      "2024.2"
    ],
    "reports": 1,
    "workId": "W-17494013",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zksVoAAI",
    "summary": "Also affects Tableau Desktop and Tableau ServerWhen working with Snowflake TIMESTAMP_TZ data types, changing from continuous to discrete displays inaccurate MONTH information. Instead of the correct month, Tableau will list the previous month.",
    "created": 1736973916000,
    "updated": 1746034924000
  },
  {
    "id": "a028c00000tJQXKAA4",
    "name": "",
    "title": "Tableau Desktop Hangs When Publishing to Large Site with 5000+ Projects",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 0,
    "workId": "W-12867364",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000tJQXKAA4",
    "summary": "Tableau Desktop hangs when publishing to large site with over 5000+ projects. Publish windows takes a long time to display",
    "created": 1687751584000,
    "updated": 1719886570000
  },
  {
    "id": "a02Ka00000frQd2IAE",
    "name": "",
    "title": "\"System Error\" When Renaming Domain Values on a Pivoted Field in Prep Builder & Prep Web Authoring",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1",
    "primaryVer": "2023.1",
    "allVersions": [
      "2023.1"
    ],
    "reports": 0,
    "workId": "W-18511397",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000frQd2IAE",
    "summary": "Note, this issue occurs in Tableau Prep Builder, Tableau Server, and Tableau Cloud.\ufeffWhen authoring a flow in Tableau Prep Builder or Prep Web Authoring, an attempt to rename domain values on a pivoted field might fail with the following error: System Error: An error occurred while communicating with data source 'federated.<value>'",
    "created": 1748964013000,
    "updated": 1764971848000
  },
  {
    "id": "a028c00000ixYd7AAE",
    "name": "",
    "title": "Unable to edit flow from web after publish flow with union input to Tableau Cloud (AbstractFlowDraftOperation - Unrecognized error in FlowDraftGrpcSer",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "Summer '16",
    "primaryVer": "",
    "allVersions": [],
    "reports": 0,
    "workId": "W-12925710",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000ixYd7AAE",
    "summary": "Unable to edit a published flow on the web and the input step hangs. This can happen when the input step is using a wildcard union and the data structure contains multiple subfolders.\ufeffOriginally tracked under Tableau TFS1478645",
    "created": 1684260857000,
    "updated": 1771013741000
  },
  {
    "id": "a028c00000iwlKiAAI",
    "name": "",
    "title": "SAP HANA input parameters updated in a published data source are not reflected in associated workbooks",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2021.1.9",
    "primaryVer": "2021.1.9",
    "allVersions": [
      "2021.1.9"
    ],
    "reports": 0,
    "workId": "W-12315718",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000iwlKiAAI",
    "summary": "Changing the input parameters of a SAP HANA data source and republishing the change to Tableau Server does not show the changes when opening a workbook from Tableau Server that connects to this updated data source.Originally tracked under Tableau TFS 1396192 and TFS 1444786",
    "created": 1682448177000,
    "updated": 1719886569000
  },
  {
    "id": "a028c00000ixLSlAAM",
    "name": "",
    "title": "Intermittent Flow Failure on Tableau Cloud \"System error: An error occurred while communicating with data source 'LoomDataSource'\"",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.4.0",
    "primaryVer": "2022.4.0",
    "allVersions": [
      "2022.4.0"
    ],
    "reports": 1,
    "workId": "W-12799794",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000ixLSlAAM",
    "summary": "While running a scheduled Prep Flow on Tableau Cloud, the flow will fail intermittently with the following error:System error: An error occurred while communicating with data source 'LoomDataSource' com.tableausoftware.server.status.reporting.TableauRuntimeException: System error: An error occurred while communicating with data source 'LoomDataSource'Previously tracked in TFS# 1499745",
    "created": 1683826190000,
    "updated": 1756221548000
  },
  {
    "id": "a028c00000z00eLAAQ",
    "name": "",
    "title": "After refreshing an extract created from Amazon S3 data source, the field name set by \"Field names are in the first row\" will be changed.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.1 (Cloud), 2023.3.4 (Server), 2024.1.3 (Desktop)",
    "primaryVer": "2024.1",
    "allVersions": [
      "2024.1",
      "2023.3.4",
      "2024.1.3"
    ],
    "reports": 17,
    "workId": "W-15447252",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000z00eLAAQ",
    "summary": "When creating an extract from Amazon S3 using web authoring on Tableau Cloud with the setting \"Field names are in the first row\", the field names will be reset to initial values, such as Column 0, Column 1, after the next refresh extract.Note: Issue can be reproduced in Tableau Server 2023.3.4 as well as Tableau Desktop 2024.1.3.",
    "created": 1712799345000,
    "updated": 1750264958000
  },
  {
    "id": "a028c00000zkmeCAAQ",
    "name": "",
    "title": "Wording issues on OAuth prompt for published data sources.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.3.0, Tableau Desktop",
    "primaryVer": "2024.3.0",
    "allVersions": [
      "2024.3.0"
    ],
    "reports": 0,
    "workId": "W-17473582",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zkmeCAAQ",
    "summary": "When connecting to published data sources on Tableau Cloud, users receive an alert causing confusion amongst users due to the wording in the warnings.",
    "created": 1736783438000,
    "updated": 1745948340000
  },
  {
    "id": "a028c00000zkOHJAA2",
    "name": "",
    "title": "Unexpected Additional Metadata Query Against Snowflake Databases Executes Each Time the Database is Accessed",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2+",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 6,
    "workId": "W-17116800",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zkOHJAA2",
    "summary": "Each time a workbook or datasource accesses a Snowflake instance (Making a connection, loading a dashboard, updating data, etc...), an additional metadata query is executed starting with SELECT TYPE FROM...As this query fires each time a dashboard is loaded, it can cause an excessive amount of queries to be sent to the Snowflake instance per day.This issue also occurs in Tableau Server.For Tableau Cloud, this issue was first reported on US-EAST-1, but confirmed to occur across all pods.",
    "created": 1735596122000,
    "updated": 1748445471000
  },
  {
    "id": "a028c00000iwtjZAAQ",
    "name": "",
    "title": "ATR: Prep Conductor Core licenses older than half a day are not re-allocated after restart of no-flows backgrounder process",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2022.1.6",
    "primaryVer": "2022.1.6",
    "allVersions": [
      "2022.1.6"
    ],
    "reports": 0,
    "workId": "W-12926295",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000iwtjZAAQ",
    "summary": "Tableau Prep Conductor Core license can disappear in the \"Settings\" > \"Licenses\" page in 12 hours after a Tableau Server service restart. The TSM web user interface and the TSM licenses list page show the correct license results. There is no functional impact and only a display issue on Tableau Server.Originally tracked under Tableau TFS1490935",
    "created": 1682724885000,
    "updated": 1719886600000
  },
  {
    "id": "a028c00000xBOdJAAW",
    "name": "",
    "title": "Error \"ResizeObserver loop completed with undelivered notifications\" When Using Flow Editor",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 1,
    "workId": "W-13859342",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000xBOdJAAW",
    "summary": "When editing a connection in the Flow Editor on Tableau Cloud or Tableau Server, the following error occurs: ResizeObserver loop completed with undelivered notifications.",
    "created": 1700500039000,
    "updated": 1719886600000
  },
  {
    "id": "a02g7000006NA85AAG",
    "name": "",
    "title": "Data Pane Focus Jump on CJK Fields with Numeric Suffixes",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2026.2",
    "primaryVer": "2026.2",
    "allVersions": [
      "2026.2"
    ],
    "reports": 1,
    "workId": "W-23189097",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000006NA85AAG",
    "summary": "Tableau Cloud/Server 2026.2 causes the Data pane to jump focus when users click measures with CJK (Chinese/Japanese/Korean).Field names that share numeric suffixes with dimension names. This breaks the user's ability to interact with affected measures.For example in the following screenshot, after clicking the Measure \"\u6570\u91cf 10\", the focus jumps to Dimension \"\u5546\u54c1 10\" that shares the same suffix 10 with the Measure \"\u6570\u91cf 10\".The issue happens with following conditionsWorkbook contains \u22651 Dimension and ",
    "created": 1784599547000,
    "updated": 1789439583000
  },
  {
    "id": "a028c000010FWshAAG",
    "name": "",
    "title": "\"[SQLSTATE:42P21] collation mismatch between explicitly provided collations\" Error When Running Flow using Union Step Combining Multiple Excel Sheets",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.3 and older",
    "primaryVer": "2024.3",
    "allVersions": [
      "2024.3"
    ],
    "reports": 1,
    "workId": "W-17872999",
    "url": "https://help.salesforce.com/s/issue?id=a028c000010FWshAAG",
    "summary": "In Tableau Prep Builder, running a flow using a union step combining multiple Excel sheets results in a collation mismatch error.This issue is resolved with following releases:Tableau Prep Builder 2025.1.1Tableau Prep Builder 2025.2Tableau Server 2023.3.17\ufeffTableau Server 2024.2.10\ufeffTableau Server 2025.1.1\ufeffTableau Server 2025.3Tableau Cloud 2025.2",
    "created": 1740518853000,
    "updated": 1750300597000
  },
  {
    "id": "a028c00000tIECAAA4",
    "name": "",
    "title": "\"Read Timed Out\" or \"Estimating required disk space failed.\" when running \"tsm maintenance backup\" on multi-node cluster",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.1.14, 2022.3.6, 2023.1.0, 2023.1.1, 2023.1.2",
    "primaryVer": "2022.1.14",
    "allVersions": [
      "2022.1.14",
      "2022.3.6",
      "2023.1.0",
      "2023.1.1",
      "2023.1.2"
    ],
    "reports": 9,
    "workId": "W-13476908",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000tIECAAA4",
    "summary": "Tableau Server backups will fail during the estimating disk space step of the job and will output a message similar to below:tsm maintenance backup -f TableauServer_BackupJob id is '54', timeout is 1440 minutes.7% - Starting the Active Repository instance, File Store, and Cluster Controller.14% - Waiting for the Active Repository, File Store, and Cluster Controller to start.21% - Installing backup services.28% - Estimating required disk space failed.35% - Stopping the Active Repository if necess",
    "created": 1685032854000,
    "updated": 1723078432000
  },
  {
    "id": "a028c00000iwXRxAAM",
    "name": "",
    "title": "Error \"Invalid authentication tokens. Login again and retry\" Intermittently Occurs When Refreshing Extract in Tableau Online",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2019.4.0",
    "primaryVer": "2019.4.0",
    "allVersions": [
      "2019.4.0"
    ],
    "reports": 6,
    "workId": "W-12879134",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000iwXRxAAM",
    "summary": "When a scheduled extract refresh of a Quickbooks Online data source runs on Tableau Online, the following error occurs intermittently: \"Intuit API Authentication error: Invalid authentication tokens. Login again and retry.\"Originally tracked under Tableau TFS 1068267",
    "created": 1681954505000,
    "updated": 1727881399000
  },
  {
    "id": "a02Ka00000mQzRjIAK",
    "name": "",
    "title": "Connecting to Redshift with IAM IDC auth results in a spinning wheel.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.3",
    "primaryVer": "2025.3",
    "allVersions": [
      "2025.3"
    ],
    "reports": 3,
    "workId": "W-21221949",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mQzRjIAK",
    "summary": "Connecting to Redshit from Tableau Cloud in web authoring using OAuth - Federated Identity (IAM IDC) results spinning wheel and eventually times out. This happens while fetching metadata when there are more than 1000 tables to fetch.",
    "created": 1770847938000,
    "updated": 1781185981000
  },
  {
    "id": "a028c00000zLFSyAAO",
    "name": "",
    "title": "Unable to create Virtual connections after a repository failover.",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2022.x, 2023.x",
    "primaryVer": "",
    "allVersions": [],
    "reports": 1,
    "workId": "W-15235228",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zLFSyAAO",
    "summary": "After a successful failover, transitioning the second node to an active state, immediate attempts to create virtual connections without supplying the server enough time lead to an ongoing inability to establish new virtual connections.This issue is consistently accompanied by a query policy error, hindering the creation of additional virtual connections.An error occurs during the creation of a virtual connection, specifically a \"Policy Update Failed\" error.",
    "created": 1724144082000,
    "updated": 1759887521000
  },
  {
    "id": "a028c00000z0G2hAAE",
    "name": "",
    "title": "Prep loses the schema information when connecting to Cloudera Hadoop HiveServer2.",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2023.3",
    "primaryVer": "2023.3",
    "allVersions": [
      "2023.3"
    ],
    "reports": 0,
    "workId": "W-15463153",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000z0G2hAAE",
    "summary": "When connecting to a Hive datasource and dragging a table to the canvas, the schema information is lost after a while. Error shown: \u201cError in input <table name>, Specify a valid Table name.\"",
    "created": 1713426317000,
    "updated": 1722197161000
  },
  {
    "id": "a028c00000tIRxgAAG",
    "name": "",
    "title": "TSM Not Reporting Registration With All Keys During Activations",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2019.2.6",
    "primaryVer": "2019.2.6",
    "allVersions": [
      "2019.2.6"
    ],
    "reports": 0,
    "workId": "W-13386083",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000tIRxgAAG",
    "summary": "When activating multiple keys with TSM, only the first key activated has registration data associated with the key.\u00a0Customers have multiple keys to activate in order to stand up the Tableau Server. The license server and the Tableau Customer Portal do not correctly reflect registration data for all keys activated on Tableau Server.\u00a0This failure of registration data getting not getting passed to license servers can occur with TSM using the command line and the TSM UI.",
    "created": 1685564676000,
    "updated": 1719886575000
  },
  {
    "id": "a02Ka00000mGFVZIA4",
    "name": "",
    "title": "Suspension Notification Emails Are Not Delivered to Administrators When \"Don't send if view is empty\" Is Enabled",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 0,
    "workId": "W-22305397",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mGFVZIA4",
    "summary": "When a subscription fails on each run, it eventually reaches the consecutive failure threshold (backgrounder.subscription_failure_threshold_for_run_prevention), causing it to be suspended.However, the administrator suspension notification email is never sent when the \"Don't send if view is empty\" option is enabled for a subscription. As a result, admins are silently unaware that the subscription has been suspended.",
    "created": 1778756828000,
    "updated": 1785430168000
  },
  {
    "id": "a02Ka00000iHfPiIAK",
    "name": "",
    "title": "The workbook fails to fully load due to a logical query error indicating a missing field.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.2",
    "primaryVer": "2025.2",
    "allVersions": [
      "2025.2"
    ],
    "reports": 4,
    "workId": "W-19308638",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000iHfPiIAK",
    "summary": "The workbook fails to fully load due to a logical query error indicating a missing field.Error: Logical Query missing field [TEMP(Calculation_1804536083049943040)(1825610553)(0)] from tablefunctionOpThis issue affects the 2025.2 releases of Tableau Desktop, Tableau Cloud, and Tableau Server.",
    "created": 1755277011000,
    "updated": 1785138183000
  },
  {
    "id": "a028c000010F4NJAA0",
    "name": "",
    "title": "Extract Creation Fails in Web Authoring When Using Extract Filters and a New Datasource or Workbook",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2+ (Cloud, Server)",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 0,
    "workId": "W-16588794",
    "url": "https://help.salesforce.com/s/issue?id=a028c000010F4NJAA0",
    "summary": "Extract creation in web authoring fails with an error when using extract filters and a new datasource or workbook. This issue appears in both Tableau Cloud and Tableau Server.",
    "created": 1739312729000,
    "updated": 1790190297000
  },
  {
    "id": "a028c00000yzfKRAAY",
    "name": "",
    "title": "In some cases the date that was converted from a String field is displayed incorrectly in TD/TS 2022.2 or later in Japanese Windows",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.2 or later",
    "primaryVer": "2022.2",
    "allVersions": [
      "2022.2"
    ],
    "reports": 0,
    "workId": "W-15250631",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yzfKRAAY",
    "summary": "In some cases In Window Japanese environment after converted a field of String in format of 'YYYY/MM' (e.g. 2022/02) to 'Date' using the type converting menu in Tableau Desktop and Tableau Server, even though the same workbook is opened, the auto-completed dates displayed are different depending on the version.In 2022.1 or before:A string'YYYY/MM' is converted to 'YYYY/MM/01'i.e.\u00a02024/01 to 2024/01/012023/11 to 2023/11/012022/02 to 2023/02/01\u00a0In 2022.1 or before: A string'YYYY/MM' is converted t",
    "created": 1711609749000,
    "updated": 1719947743000
  },
  {
    "id": "a028c000010ETi7AAG",
    "name": "",
    "title": "Virtual connections in certified projects display Personal Space as location when viewed from Workbook lineage",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "Tableau Server 2023.3.0, Tableau Cloud",
    "primaryVer": "2023.3.0",
    "allVersions": [
      "2023.3.0"
    ],
    "reports": 2,
    "workId": "W-16079775",
    "url": "https://help.salesforce.com/s/issue?id=a028c000010ETi7AAG",
    "summary": "When browsing from the workbook >Lineage tabs and when selecting the Virtual Connection option, it is showing as Personal.",
    "created": 1737561804000,
    "updated": 1790031161000
  },
  {
    "id": "a028c00000zJF8SAAW",
    "name": "",
    "title": "\"isWorkbookTemplatesEnabled\" API fails during embedded web authoring of empty workbook without datasource with JWT auth",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2023.3.3",
    "primaryVer": "2023.3.3",
    "allVersions": [
      "2023.3.3"
    ],
    "reports": 2,
    "workId": "W-16009813",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zJF8SAAW",
    "summary": "The isWorkbookTemplatesEnabled API fails during embedded web authoring of an empty workbook without a datasource with JWT authentication, re-directing the user to the Server sign-in screen.",
    "created": 1718804140000,
    "updated": 1720626614000
  },
  {
    "id": "a028c00000xA0pnAAC",
    "name": "",
    "title": "Tableau Desktop - Parameter changes on a Story Point also change the underlying worksheet",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2021.3.6+",
    "primaryVer": "2021.3.6",
    "allVersions": [
      "2021.3.6"
    ],
    "reports": 0,
    "workId": "W-13143369",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000xA0pnAAC",
    "summary": "When editing a story and attempting to change a parameter on a Story Point, the changes also affect the underlying worksheet, rather than only the Story as expected. This issue may also occur during Web Edit on Tableau Server. ",
    "created": 1698081223000,
    "updated": 1719886594000
  },
  {
    "id": "a028c00000zIcEVAA0",
    "name": "",
    "title": "Error \"Not enough permissions\" when attempting to overwrite content in personal space",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 1,
    "workId": "W-15796673",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zIcEVAA0",
    "summary": "Starting in 2024.2, only Server Admins are able to overwrite content saved in personal space. All other users, including site admins receive a \"Not enough permissions\" error stating the user cannot view permissions for the resource. This affects both data sources and workbooks.",
    "created": 1717013688000,
    "updated": 1719948558000
  },
  {
    "id": "a028c00000tIeUJAA0",
    "name": "",
    "title": "Latest changes in the datasource are not immediately reflected in the flow connecting to data sources via Tableau Bridge live connection.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 1,
    "workId": "W-13523647",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000tIeUJAA0",
    "summary": "If the same flow connecting to data sources via Tableau Bridge live connection run repeatedly in a short period of time, latest changes in the database are not Immediately reflected to the flow.",
    "created": 1686128447000,
    "updated": 1719886571000
  },
  {
    "id": "a02Ka00000mQmaJIAS",
    "name": "",
    "title": "Tabcmd (github version) refreshes the wrong extract if you have multiple data sources with the same project name and data source name",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2.0.18",
    "primaryVer": "",
    "allVersions": [],
    "reports": 0,
    "workId": "W-21164239",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mQmaJIAS",
    "summary": "The Tabcmd utility (formerly \"Tabcmd 2.0\") on github refreshes the wrong extract if you have multiple data sources with the same project name and name when running the 'refreshextracts' command.",
    "created": 1770165347000,
    "updated": 1771469037000
  },
  {
    "id": "a028c00000iwh44AAA",
    "name": "",
    "title": "Data Orientation pane shows in embedded views unexpectedly",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.3.0",
    "primaryVer": "2022.3.0",
    "allVersions": [
      "2022.3.0"
    ],
    "reports": 0,
    "workId": "W-12044906",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000iwh44AAA",
    "summary": "When Guest access is enabled on a Tableau Server with Core licensing, the Data Orientation pane is available for embedded users, including the Guest user.Previously tracked under TFS item 1474725.",
    "created": 1682346368000,
    "updated": 1761031140000
  },
  {
    "id": "a028c00000zhZoaAAE",
    "name": "",
    "title": "Login Failure Connecting to Snowflake Published Data Sources Migrated with Content Migration Tool When Set Connection Info is \"Prompt User\"",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.0",
    "primaryVer": "2024.2.0",
    "allVersions": [
      "2024.2.0"
    ],
    "reports": 0,
    "workId": "W-16857308",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zhZoaAAE",
    "summary": "When using the Content Migration Tool (CMT) to migrate a Snowflake published datasource with the Set Connection Info transformation, the \"instanceUrl\" field is missing from \"getDatasource\" or \"getDataConnections\" API calls, resulting in a successful migration; however, the user encounters an error when prompted to sign-in to the migrated Snowflake published data source.Impacts: Content Migration Tool with Tableau Cloud or Tableau Server",
    "created": 1727741025000,
    "updated": 1781038968000
  },
  {
    "id": "a028c00000tIxKzAAK",
    "name": "",
    "title": "(Tableau Bridge) Virtual Connection - Scheduled Extract Refresh Failure with timeout error message",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.4.2",
    "primaryVer": "2022.4.2",
    "allVersions": [
      "2022.4.2"
    ],
    "reports": 2,
    "workId": "W-12927826",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000tIxKzAAK",
    "summary": "Changing the schema of a remote database may cause scheduled extract refreshes for virtual connections that connect to that schema to fail with the following error:com.tableausoftware.server.status.reporting.TableauRuntimeException: Extract Service returns the status of the extract command with id: (id # here), with message: TableauException: Operation timed out.",
    "created": 1686864158000,
    "updated": 1733352109000
  },
  {
    "id": "a028c00000tIcfAAAS",
    "name": "",
    "title": "\"System error: null\" Occurs When Re-running A Flow And The Output Filename Contains Non-English Characters",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1.2, 2022.3.6, 2022.1.14, 2021.4.18",
    "primaryVer": "2023.1.2",
    "allVersions": [
      "2023.1.2",
      "2022.3.6",
      "2022.1.14",
      "2021.4.18"
    ],
    "reports": 26,
    "workId": "W-13541386",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000tIcfAAAS",
    "summary": "After upgrading Tableau Server to the May 2023 maintenance release, the \"System error: null\" occurs when re-running a flow and the output filename contains Non-English characters, such as Chinese, Japanese, and Korean.",
    "created": 1686049261000,
    "updated": 1719886574000
  },
  {
    "id": "a028c00000peoVRAAY",
    "name": "",
    "title": "Perpetual licenses is shown as \"Expired\" in TSM after maintenance period ends.",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2021.4.2",
    "primaryVer": "2021.4.2",
    "allVersions": [
      "2021.4.2"
    ],
    "reports": 1,
    "workId": "W-13172659",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000peoVRAAY",
    "summary": "When a maintenance ends for a perpetual Tableau Server license key, the key will show as expired in TSM.This is a change in behavior as previously the keys were shown as N/A.This does not affect the functionality of Tableau Server.",
    "created": 1684309322000,
    "updated": 1719886593000
  },
  {
    "id": "a028c00000tIhB9AAK",
    "name": "",
    "title": "Tableau Desktop Background Process Does Not Stop for a While in an Environment Where a Proxy Is Configured",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2021.3.7",
    "primaryVer": "2021.3.7",
    "allVersions": [
      "2021.3.7"
    ],
    "reports": 1,
    "workId": "W-12935722",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000tIhB9AAK",
    "summary": "After closing Tableau Desktop, the background process does not stop for a while (about 10 - 15 minutes) in an environment where a proxy is configured and internet connection is not possible without the proxy. It occurs even when not connected to any data source.",
    "created": 1686221265000,
    "updated": 1719886571000
  },
  {
    "id": "a028c00000svC0XAAU",
    "name": "",
    "title": "Tableau Cloud - \"Encryption key not provided\" error after appending to table multiple times for extract generated from flow.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.2",
    "primaryVer": "2023.2",
    "allVersions": [
      "2023.2"
    ],
    "reports": 1,
    "workId": "W-14231925",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000svC0XAAU",
    "summary": "When trying to access the output of a flow, on a site where extract encryption is enabled, the following error occurs:[SQLSTATE:22023] error opening database '(Database ID will show here)': There was an error during loading database: encryption key not provided: DatabaseId: \"(Database ID address will show here)\"",
    "created": 1696425347000,
    "updated": 1719886600000
  },
  {
    "id": "a028c00000iwXSNAA2",
    "name": "",
    "title": "Unable to edit data source filter on the web when data source name includes the right square bracket",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.1.5 & 2022.3.4",
    "primaryVer": "2022.1.5",
    "allVersions": [
      "2022.1.5",
      "2022.3.4"
    ],
    "reports": 0,
    "workId": "W-12903609",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000iwXSNAA2",
    "summary": "It is not possible to edit the data source filter using the web edit option on Tableau Server when the data source name includes a right square bracket (\"]\"). An error will display when trying to add a filter showing, \"TableauException: Error parsing command parameter value string\" when the data source name includes both a multi-byte character and the right square bracket.When adding data source filters in Web edit, \"error parsing command parameter value string\" occur. Cannot edit the filter whe",
    "created": 1681953706000,
    "updated": 1727372647000
  },
  {
    "id": "a028c00000zIY9rAAG",
    "name": "",
    "title": "Error 0xAB029461 when trying to connect to a published datasource.",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2023.3 or earlier, 2024.1, 2024.1.2",
    "primaryVer": "2023.3",
    "allVersions": [
      "2023.3",
      "2024.1",
      "2024.1.2"
    ],
    "reports": 4,
    "workId": "W-15715773",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zIY9rAAG",
    "summary": "When trying to connect to a published datasource from Tableau Desktop to Tableau Cloud (site: prod-apnortheast-a), the following error is received:There was an error with the data source \"datasource name\". Verify that the data source is configured correctly. The data source is located on a different server.",
    "created": 1716794223000,
    "updated": 1727183071000
  },
  {
    "id": "a02Ka00000gZJqaIAG",
    "name": "",
    "title": "RMT: Unable to View Details of Flow Jobs",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.9",
    "primaryVer": "2024.2.9",
    "allVersions": [
      "2024.2.9"
    ],
    "reports": 4,
    "workId": "W-18960272",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000gZJqaIAG",
    "summary": "In the Resource Monitoring Tool (RMT), when checking the Background Jobs, you can also view entries of the Job Type \"Run Flow.\"However, when attempting to click on one of these entries, an error message is displayed.\"...OuchSomething just went sideways.We've logged information about the error \u2014 please inform your administrator and have them contact support.\"Version(s) Affected:2024.2.92025.1.12025.1.22025.2",
    "created": 1751550898000,
    "updated": 1785308403000
  },
  {
    "id": "a028c00000uWsP6AAK",
    "name": "",
    "title": "ERROR: column \"credential_luid\" of relation \"data_connections\" does not exist when exporting sites between TS 2022.x to 2023.1+",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.x",
    "primaryVer": "",
    "allVersions": [],
    "reports": 0,
    "workId": "W-13723722",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000uWsP6AAK",
    "summary": "When exporting a site from Tableau Server version 2022.x to Tableau Server version 2023.1+, the import/export job fails with an error.",
    "created": 1692194325000,
    "updated": 1719886584000
  },
  {
    "id": "a028c00000zjjdqAAA",
    "name": "",
    "title": "Unable to Connect Using the SharePoint Lists (JDBC) Connector When the SharePoint Site Name Contains a Space",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "All current Tableau Server versions",
    "primaryVer": "",
    "allVersions": [],
    "reports": 6,
    "workId": "W-17373793",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zjjdqAAA",
    "summary": "Attempting to create a connection using the SharePoint Lists (JDBC) connector will fail with an error if the SharePoint site name contains a space.",
    "created": 1733757376000,
    "updated": 1759363901000
  },
  {
    "id": "a028c000010FmZKAA0",
    "name": "",
    "title": "Excluding a Sheet from Source Dashboard of a Filter Action Causes the Target Dashboard to be Opened on a New Tab Unexpectedly",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "Tableau Cloud 2025.1, Tableau Server 2025.1",
    "primaryVer": "2025.1",
    "allVersions": [
      "2025.1",
      "2025.1"
    ],
    "reports": 0,
    "workId": "W-17921134",
    "url": "https://help.salesforce.com/s/issue?id=a028c000010FmZKAA0",
    "summary": "When using Filter Actions in a published dashboard on Tableau Cloud to either navigate to, or drill down to, a second dashboard as the target object, the target dashboard is opened on a new browser tab instead of the same tab. ",
    "created": 1741191687000,
    "updated": 1775155673000
  },
  {
    "id": "a02Ka00000mQtXGIA0",
    "name": "",
    "title": "The initial URL is not being transmitted to the OIDC provider during the relay state when multiple identity pools and OIDC are utilized in mobile",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2024.2.15, 2025.3.2",
    "primaryVer": "2024.2.15",
    "allVersions": [
      "2024.2.15",
      "2025.3.2"
    ],
    "reports": 0,
    "workId": "W-21155037",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mQtXGIA0",
    "summary": "When using multiple identity pools with Active Directory and OpenID (OIDC) as the secondary pool, the relay states aren\u2019t transmitted when accessing the dashboard from a mobile device (Android or iOS).As a result, the user is redirected to the default or home page instead of the dashboard link that was shared by another user.",
    "created": 1770654223000,
    "updated": 1770746428000
  },
  {
    "id": "a02Ka00000fAnYcIAK",
    "name": "",
    "title": "Content Owners cannot set rules for a Group Set",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1.0",
    "primaryVer": "2025.1.0",
    "allVersions": [
      "2025.1.0"
    ],
    "reports": 0,
    "workId": "W-18558959",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000fAnYcIAK",
    "summary": "Note that this issue also impacts Tableau ServerThe Site Admin is able to create user groups and groups sets (available since 2024.2). But the Content owner is not able to edit the permission on Groupset.",
    "created": 1748420947000,
    "updated": 1765214661000
  },
  {
    "id": "a02Ka00000gbJz2IAE",
    "name": "",
    "title": "Unable to Download Crosstab From Download Object on the Dashboard Without \"Download Image/pdf\" Permission",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1.5",
    "primaryVer": "2025.1.5",
    "allVersions": [
      "2025.1.5"
    ],
    "reports": 0,
    "workId": "W-18823998",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000gbJz2IAE",
    "summary": "If following conditions are met, the object to download the crosstab is grayed out and an error occurs when clicked.\u00a0Has permission for \u201cDownload Summary Data\u201d.Does not have permissions for \u201cDownload Image/PDF\u201d.",
    "created": 1752487983000,
    "updated": 1764969014000
  },
  {
    "id": "a02Ka00000jg5MoIAI",
    "name": "",
    "title": "Dynamic SAML Group Permissions are not Working on Workbooks using Published Datasource",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2025.2",
    "primaryVer": "2025.2",
    "allVersions": [
      "2025.2"
    ],
    "reports": 1,
    "workId": "W-19625285",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000jg5MoIAI",
    "summary": "Dynamic SAML group permissions are not working on workbooks using a published datasource and user will get a permission denied error message.",
    "created": 1758006783000,
    "updated": 1783671803000
  },
  {
    "id": "a028c00000uWMStAAO",
    "name": "",
    "title": "\"Bad Connection\" error when editing the worksheet with the self-joined Google BigQuery tables in virtual connection",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 1,
    "workId": "W-13883990",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000uWMStAAO",
    "summary": "Note: this issue occurs on not only Tableau Desktop but Tableau Cloud, and Tableau Server too.If the following conditions match, an error would occur when editing a worksheet. (For an example of how to reproduce, please refer \"Steps to Reproduce\")Data source is Google BigQuery Virtual ConnectionIn Tableau Desktop, the table is created with inner join to the same table of Google BigQueryIn Google BigQuery, the table contains a DATETIME columnIn Tableau Desktop, the worksheet uses the filter whose",
    "created": 1691550177000,
    "updated": 1719886590000
  },
  {
    "id": "a02Ka00000jg5ZgIAI",
    "name": "",
    "title": "\"Showing partial results. Still loading lineage information. Try again later. \" Warning That Does Not go Away",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "Tableau Server 2025.3.0",
    "primaryVer": "2025.3.0",
    "allVersions": [
      "2025.3.0"
    ],
    "reports": 10,
    "workId": "W-19211923",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000jg5ZgIAI",
    "summary": "\ufeff\"Showing partial results. Still loading lineage information. Try again later. \" warning appears at the top of the page and does not appear to go away over time.",
    "created": 1758021270000,
    "updated": 1773405941000
  },
  {
    "id": "a028c00000suTFDAA2",
    "name": "",
    "title": "No projects returned when sorting All Projects or Top-Level Projects by Projects (most-least) or (least-most)",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1.2",
    "primaryVer": "2023.1.2",
    "allVersions": [
      "2023.1.2"
    ],
    "reports": 0,
    "workId": "W-13838494",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000suTFDAA2",
    "summary": "When browsing content in Tableau Server with \"All Projects\" or \"Top-Level Projects\" selected, sorting by 'Projects' results in an empty page (ie., no Projects listed).",
    "created": 1695244961000,
    "updated": 1719886570000
  },
  {
    "id": "a028c00000suqxNAAQ",
    "name": "",
    "title": "Data from a spreadsheet in Google Drive randomly shows NULL values when refreshing the view or extract",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "Summer '16",
    "primaryVer": "",
    "allVersions": [],
    "reports": 2,
    "workId": "W-14041894",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000suqxNAAQ",
    "summary": "The issue happened with data connected to Google spreadsheets stored in Google Drive.Some data randomly becomes a NULL value after a full extract refresh of published data source or a view refresh for a live connection.Null value randomly changes if we extract refresh again, even if there is no change on the Google Spreadsheet side.Can be reproduced in Tableau Server 2022.1 or later as well.",
    "created": 1695959968000,
    "updated": 1719886594000
  },
  {
    "id": "a028c000010EsMgAAK",
    "name": "",
    "title": "Parameter/Set Actions do not Show Calculated Field Values in the Tooltip for Menu-based Actions",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1, 2024.2",
    "primaryVer": "2023.1",
    "allVersions": [
      "2023.1",
      "2024.2"
    ],
    "reports": 1,
    "workId": "W-17698858",
    "url": "https://help.salesforce.com/s/issue?id=a028c000010EsMgAAK",
    "summary": "In Tableau Desktop, Parameter Actions do not show the value of calculated fields in the tooltips that are generated with Menu-based Actions (actions set to run when selected from a menu). This issue is known to reproduce for Set Actions as well.",
    "created": 1738704859000,
    "updated": 1764886613000
  },
  {
    "id": "a02g7000005ej6nAAA",
    "name": "",
    "title": "rmtadmin commands incorrectly log \"failed: Unexpected error\" in security audit on WARNING-level exits.",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 1,
    "workId": "W-23161174",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000005ej6nAAA",
    "summary": "When running rmtadmin commands in Resource Monitoring Tool (RMT) version 2025.3.6, any condition that triggers a standard warning (Exit Code 1) incorrectly logs a failure message in the security audit logs (logs/Activity/Security/rmtadmin_status/*.log)\u00a0. Instead of indicating a successful execution with warnings, the log records rmtadmin_<cmd> failed: Unexpected error with success:false and eventOutcome:client_error.This creates false positives for benign warnings such as a large Hangfire schema",
    "created": 1782707319000,
    "updated": 1782944318000
  },
  {
    "id": "a028c00000zJ5thAAC",
    "name": "",
    "title": "User functions in data source filters are ignored when checking for user-sensitivity in Dataserver queries using acceleration",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.3, 2023.1, 2023.3",
    "primaryVer": "2022.3",
    "allVersions": [
      "2022.3",
      "2023.1",
      "2023.3"
    ],
    "reports": 0,
    "workId": "W-15924990",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zJ5thAAC",
    "summary": "User-based functions in workbooks become ignored when utilizing view acceleration. As a result, users may be able to access views despite not being a part of a specified user group.",
    "created": 1718371331000,
    "updated": 1720537253000
  },
  {
    "id": "a028c00000zIfJRAA0",
    "name": "",
    "title": "Users From Other Trusted Active Directory Domains Failed to Access Delegated Data Sources",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1.5",
    "primaryVer": "2023.1.5",
    "allVersions": [
      "2023.1.5"
    ],
    "reports": 5,
    "workId": "W-15454746",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zIfJRAA0",
    "summary": "When users from other trusted Active Directory domains try to open the \"Ask Data\" Tab of the data source published using Viewer credentials, the error may occur and users can\u2019t use \"Ask Data\".\u00a0This error is observed in Tableau Server on Windows when connecting Denodo / PostgreSQL\u00a0with JDBC Driver andKerberos Delegation.",
    "created": 1717134893000,
    "updated": 1727890081000
  },
  {
    "id": "a028c000010FoW7AAK",
    "name": "",
    "title": "Incremental refresh failure using relational table join with a date sub-range",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.6",
    "primaryVer": "2024.2.6",
    "allVersions": [
      "2024.2.6"
    ],
    "reports": 0,
    "workId": "W-16599362",
    "url": "https://help.salesforce.com/s/issue?id=a028c000010FoW7AAK",
    "summary": "Issue also impacts Tableau DesktopWhen create a extract by using relational table join with date sub range\u00a0then incremental refresh is failing",
    "created": 1741329700000,
    "updated": 1746035962000
  },
  {
    "id": "a028c00000yzjpOAAQ",
    "name": "",
    "title": "User count in User groups shows as zero after site import.",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2023.3.0, 2023.3.1, 2023.3.2",
    "primaryVer": "2023.3.0",
    "allVersions": [
      "2023.3.0",
      "2023.3.1",
      "2023.3.2"
    ],
    "reports": 8,
    "workId": "W-14778711",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yzjpOAAQ",
    "summary": "User count of user groups shows as zero after site import in TS 2023.3.0, but the users in each group can be seen when clicking each group.",
    "created": 1711956849000,
    "updated": 1765540429000
  },
  {
    "id": "a028c00000zIr7DAAS",
    "name": "",
    "title": "Error '[SQLSTATE:42601]' Occurs When Changing Multiple Values Filters To A Single Selection",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3.0",
    "primaryVer": "2023.3.0",
    "allVersions": [
      "2023.3.0"
    ],
    "reports": 0,
    "workId": "W-15890957",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zIr7DAAS",
    "summary": "When trying to change multiple values filter to a single selection, the following error may occur and the filter cannot be changed:[SQLSTATE:42601] column \"<Column Name>\".\"__measure__0\" must appear in the GROUP BY clause or be used in an aggregate functionThis error can also occur in Tableau Desktop 2024.1",
    "created": 1717749295000,
    "updated": 1732202669000
  },
  {
    "id": "a02Ka00000hH2IuIAK",
    "name": "",
    "title": "Extract Refreshes for Google BigQuery Datasources Return the Error: \"The Google BigQuery service experienced an unknown internal error\"\"",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 1,
    "workId": "W-17833006",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000hH2IuIAK",
    "summary": "When attempting to refresh an extract, the following error message occurs: \"The Google BigQuery service experienced an unknown internal error. Please report this problem to Google. Visibility check was unavailable. Please retry the request and contact support if the problem persists.\"",
    "created": 1753196844000,
    "updated": 1783004077000
  },
  {
    "id": "a028c00000zISYyAAO",
    "name": "",
    "title": "ESRI file geodatabase .gdb file cannot be opened",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2024.1.2",
    "primaryVer": "2024.1.2",
    "allVersions": [
      "2024.1.2"
    ],
    "reports": 1,
    "workId": "W-15835392",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zISYyAAO",
    "summary": "When trying to open an ESRI file geodatabase .gdb file format in Tableau Prep Builder, the folder shows as empty and the file cannot be connected to. You can only connect to the .zip file of the .gdb file (which is .gdb.zip) in Prep Builder. Tableau Desktop can connect to both file formats.",
    "created": 1716552230000,
    "updated": 1753377917000
  },
  {
    "id": "a028c00000yxYwyAAE",
    "name": "",
    "title": "Reducing browser zoom level removes the titles of sheets in the thumbnail file of the export PDF or Powerpoint dialogs",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3.0",
    "primaryVer": "2023.3.0",
    "allVersions": [
      "2023.3.0"
    ],
    "reports": 1,
    "workId": "W-15061344",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yxYwyAAE",
    "summary": "When the browser zoom level is below 100%, the dialog box for exporting PDF or Powerpoint removes the titles of sheets in the thumbnail listAlso affects Tableau Cloud",
    "created": 1708466078000,
    "updated": 1732202834000
  },
  {
    "id": "a028c00000zIYB4AAO",
    "name": "",
    "title": "Action links within embedded views with Trusted Authentication token require authentication in Chrome if HTTPS is embedded in HTTP page.",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2023.3 and later",
    "primaryVer": "2023.3",
    "allVersions": [
      "2023.3"
    ],
    "reports": 1,
    "workId": "W-15815676",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zIYB4AAO",
    "summary": "Embedding views with Action links in embedded views with Trusted Authentication require authentication if HTTPS is embeded in HTTP page. This is only happening in Chrome or Chromium browsers (Edge has not been tested yet) but works in Firefox.",
    "created": 1716798638000,
    "updated": 1771488376000
  },
  {
    "id": "a02Ka00000jhkyeIAA",
    "name": "",
    "title": "Advanced Filter in Ligntning Web Component (LWC) Does Not Work as Expected When First Loaded",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2024.2.5",
    "primaryVer": "2024.2.5",
    "allVersions": [
      "2024.2.5"
    ],
    "reports": 1,
    "workId": "W-19777297",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000jhkyeIAA",
    "summary": "Advanced Filter in LWC has no effect when the Tableau embedded view is first loaded hence requiring authentication and the filter name containing ampersand (&).",
    "created": 1759303632000,
    "updated": 1772130684000
  },
  {
    "id": "a028c00000tJkv9AAC",
    "name": "",
    "title": "Tableau Desktop - On the Datasource tab, a filtered extract with a dynamic parameter generates unfiltered live query",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2022.3.2",
    "primaryVer": "2022.3.2",
    "allVersions": [
      "2022.3.2"
    ],
    "reports": 1,
    "workId": "W-12927474",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000tJkv9AAC",
    "summary": "Dynamic parameter lists generate unfiltered queries which lead to performance issues in Tableau Desktop 2022.3.2.",
    "created": 1688135521000,
    "updated": 1719886570000
  },
  {
    "id": "a028c00000zJJApAAO",
    "name": "",
    "title": "Client-side rendering of some italicized fonts cut off the end of the last character.",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "Tableau Server(Windows/Linux) 2021.1 - 2023.3, Tableau Cloud 2024.1",
    "primaryVer": "2021.1",
    "allVersions": [
      "2021.1",
      "2023.3",
      "2024.1"
    ],
    "reports": 0,
    "workId": "W-15289663",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zJJApAAO",
    "summary": "When using italicized fonts in a sheet, part of the last character gets cut off regardless of the field width when client-side rendering is used.",
    "created": 1718964059000,
    "updated": 1746642918000
  },
  {
    "id": "a028c00000z0CUdAAM",
    "name": "",
    "title": "Permission rules remain \"None\" even deleting the permission rules",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1",
    "primaryVer": "2023.1",
    "allVersions": [
      "2023.1"
    ],
    "reports": 4,
    "workId": "W-15458538",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000z0CUdAAM",
    "summary": "When deleting a permissiong rule, permission group won't be deleted. The rule remains as \"None\".",
    "created": 1713324108000,
    "updated": 1774874136000
  },
  {
    "id": "a028c00000zKMC6AAO",
    "name": "",
    "title": "Can't edit the description of a flow published with the REST API",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3.4",
    "primaryVer": "2023.3.4",
    "allVersions": [
      "2023.3.4"
    ],
    "reports": 1,
    "workId": "W-16304880",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zKMC6AAO",
    "summary": "After publishing a flow using the REST API, attempting to edit the flow's description from the Web UI does not display the \"Edit Description\" screen, and the description cannot be edited.The same issue is also found in the following versions:Tableau Server 2023.3.7Tableau Server 2024.2.0",
    "created": 1721801979000,
    "updated": 1727736762000
  },
  {
    "id": "a028c00000xFuZfAAK",
    "name": "",
    "title": "Authentication Incorrectly Displayed as \"Not Embedded\" for Google BiqQuery (JDBC) Data Sources Using Service Accounts",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.2",
    "primaryVer": "2023.2",
    "allVersions": [
      "2023.2"
    ],
    "reports": 0,
    "workId": "W-14094838",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000xFuZfAAK",
    "summary": "Google BigQuery JDBC datasources (whether embedded in workbooks or published separately), with embedded service account credentials, display in the UI for Tableau Cloud/Tableau Server as\u00a0not\u00a0having embedded credentials, despite the fact that the service account creds are actually embedded, valid, and working.Functionality is not affected\u00a0(the data source/embedded service account creds do work, whether using as a live connection or to refresh an extract), so this is merely a UI issue.  Additional",
    "created": 1694457370000,
    "updated": 1719886594000
  },
  {
    "id": "a028c00000ziHf5AAE",
    "name": "",
    "title": "Inconsistent UI Behavior When Viewing an Asset's Locked/Inherited Permissions",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 0,
    "workId": "W-16997758",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000ziHf5AAE",
    "summary": "When a project has locked and inherited permissions, the permissions UI for assets does not display the permissions for the group that has been assigned as project leaders. Additionally, if a group is assigned a template for permissions prior to being promoted to project leaders, the permissions UI will show the groups previous template rather than the expected \"Administer\" template creating a confusing and misleading experience.This issue affects Tableau Server as well as Tableau Cloud.",
    "created": 1729620089000,
    "updated": 1752242670000
  },
  {
    "id": "a028c00000zKQzXAAW",
    "name": "",
    "title": "Unable to browse SharePoint Site via OneDrive and Sharepoint Online connector if the site name contains underscore",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.1, 2024.2",
    "primaryVer": "2024.1",
    "allVersions": [
      "2024.1",
      "2024.2"
    ],
    "reports": 2,
    "workId": "W-16333856",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zKQzXAAW",
    "summary": "Using the Tableau OneDrive and Sharepoint Online connectors, when entering a URL with an underscore \"_\" in the site name, an error message appears and unable to click the \"Browse This Site\" button in Tableau Desktop or Tableau Prep Builder.*The input field is added from 2024.1, and the issue has been confirmed both 2024.1 and 2024.2 in Tableau Desktop and Tableau Prep Builder.",
    "created": 1721988763000,
    "updated": 1758732947000
  },
  {
    "id": "a028c00000zjEqlAAE",
    "name": "",
    "title": "Published Extract Data Source Filter Settings Intermittently Do Not Update",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 4,
    "workId": "W-17071448",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zjEqlAAE",
    "summary": "Tableau Desktop and Tableau Server (Web Edit) Auto Updates are intermittently not updating the filter settings for Top N filters when connected to an Extracted Published Data Source.",
    "created": 1732227162000,
    "updated": 1750263035000
  },
  {
    "id": "a028c00000zkvcaAAA",
    "name": "",
    "title": "Amazon S3 Extract Refresh Intermittent Failures With \"EPS main cannot start properly:Could not parse EPS Port number from string\" Error",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 0,
    "workId": "W-17344568",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zkvcaAAA",
    "summary": "Amazon S3 Extract Refresh Intermittent Failures With 'EPS main cannot start properly:Could not parse EPS Port number from string' Error.This issue may also be present in Tableau Cloud.",
    "created": 1737084807000,
    "updated": 1764971432000
  },
  {
    "id": "a028c00000zI9wqAAC",
    "name": "",
    "title": "Axis label interval changes on X-axis when viewing a dashboard using client-side rendering.",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "Tableau Server 2023.3.1, Tableau Cloud 2024.1",
    "primaryVer": "2023.3.1",
    "allVersions": [
      "2023.3.1",
      "2024.1"
    ],
    "reports": 2,
    "workId": "W-15675287",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zI9wqAAC",
    "summary": "Note: this issue is now being tracked under W-17593363.Axis label interval changes (interval of 2 instead of 1) on X-axis when viewing a dashboard using client-side rendering.",
    "created": 1715691762000,
    "updated": 1740161978000
  },
  {
    "id": "a028c00000zjlkzAAA",
    "name": "",
    "title": "The returned status code is wrong when delete user with contents with REST API in the site managed under TCM",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.3.0",
    "primaryVer": "2024.3.0",
    "allVersions": [
      "2024.3.0"
    ],
    "reports": 0,
    "workId": "W-17365106",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zjlkzAAA",
    "summary": "Deleting a user who owns contents on Tableau Cloud site with REST API, the status code to be returned supposed to be \"409\", however, it returns \"204\" in the client's site.The error message when deleting user who owns contents on GUI is also different between Site managed under Tableau Cloud Manager (TCM) or not.It appears that this problem is occurring only at sites managed under TCM.https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_ref_users_and_groups.htm#remove_user_from_site4",
    "created": 1733883781000,
    "updated": 1746044158000
  },
  {
    "id": "a028c00000yzmIfAAI",
    "name": "",
    "title": "Unable to Access a View Using Url Query Parameter with Multi-byte Characters When Open ID Connect Authentication",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.3",
    "primaryVer": "2022.3",
    "allVersions": [
      "2022.3"
    ],
    "reports": 0,
    "workId": "W-15334584",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yzmIfAAI",
    "summary": "Unable to access a view using URL query parameter with multi-byte (non-ascii) characters when Open ID Connect Authentication is verified at the same time.",
    "created": 1712119647000,
    "updated": 1727370954000
  },
  {
    "id": "a028c00000zk2N3AAI",
    "name": "",
    "title": "Overwriting Workbooks Using the Content Migration Tool migration and the \"Archive Workbooks\" Option Results in NullPointerException Error",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.4",
    "primaryVer": "2024.2.4",
    "allVersions": [
      "2024.2.4"
    ],
    "reports": 0,
    "workId": "W-17425087",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zk2N3AAI",
    "summary": "When migrating workbooks using the Content Migration Tool with the version control option enabled to archive workbooks, migration fails due to a NullPointerException Error relating to the archiving workbook step.",
    "created": 1734548626000,
    "updated": 1751303233000
  },
  {
    "id": "a028c000010F6OxAAK",
    "name": "",
    "title": "Errors Occur when Filtering Search Results by Tags which Contain Square Brackets or Vertical Bars",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1 or later",
    "primaryVer": "2023.1",
    "allVersions": [
      "2023.1"
    ],
    "reports": 1,
    "workId": "W-17785234",
    "url": "https://help.salesforce.com/s/issue?id=a028c000010F6OxAAK",
    "summary": "When a tag contains one of \"[\", \"]\" and \"|\", filtering search by the tag results in errors.",
    "created": 1739421408000,
    "updated": 1764886918000
  },
  {
    "id": "a028c00000ziJmUAAU",
    "name": "",
    "title": "Logic-Assert Error 0x938B3BD5 When Placing a Calculated Field onto a View Containing a Conditional Set Referencing Fields from Another Table",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "Tableau Desktop, Server, Cloud 2024.2+",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 1,
    "workId": "W-16628460",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000ziJmUAAU",
    "summary": "When using a calculated field that uses a conditional set which references a field from a different table, the error \"Unable to complete action Internal Error - An unexpected error occurred and the operation could not be completed. Error Code: 938B3BD5\" is presented.This issue appears in Tableau Desktop, Tableau Server, and Tableau Cloud.",
    "created": 1729705551000,
    "updated": 1741680245000
  },
  {
    "id": "a02Ka00000ftdUhIAI",
    "name": "",
    "title": "Fields used in calculated fields are not clickable when viewing field details in Lineage, if the calculated field contains multi-line comments",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1",
    "primaryVer": "2023.1",
    "allVersions": [
      "2023.1"
    ],
    "reports": 0,
    "workId": "W-18796633",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000ftdUhIAI",
    "summary": "When inserting an appropriately formatted multi-line comment at the top or middle of a calculated field, the field details viewed from the Lineage tab selection of the calculated field appear as grey text which is not interactive, and cannot be selected for further analysis.Fields which are above the multi-line comment can be selected and interacted with for further lineage exploration, the components will match the appropriate colors outlined in the product help, At a glance: calculation syntax",
    "created": 1750118727000,
    "updated": 1781182812000
  },
  {
    "id": "a028c00000yDv99AAC",
    "name": "",
    "title": "Message \"Congratulations! You have published '<data source name>' to your site.\" is not displayed, after publishing a data source.",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2023.3.0, 2023.1.7, 2022.3.11",
    "primaryVer": "2023.3.0",
    "allVersions": [
      "2023.3.0",
      "2023.1.7",
      "2022.3.11"
    ],
    "reports": 0,
    "workId": "W-14690675",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yDv99AAC",
    "summary": "Message \"Congratulations! You have published '<data source name>' to your site.\" is not displayed, after publishing a data source.",
    "created": 1703575843000,
    "updated": 1727183192000
  },
  {
    "id": "a028c00000zJyyGAAS",
    "name": "",
    "title": "Publishing a hyper file with append fails with an error when a 128-bit numeric type is used",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1.1",
    "primaryVer": "2023.1.1",
    "allVersions": [
      "2023.1.1"
    ],
    "reports": 1,
    "workId": "W-16188708",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zJyyGAAS",
    "summary": "The \u00a0REST API Publish (specifically, append) call is failing when a 128-bit decimal type is used in the .hyper file being used.",
    "created": 1720804920000,
    "updated": 1727889810000
  },
  {
    "id": "a028c00000yzvZ6AAI",
    "name": "",
    "title": "\"Edit Data Source\" button disappears after turning off the web authoring of flow.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.3 or later",
    "primaryVer": "2022.3",
    "allVersions": [
      "2022.3"
    ],
    "reports": 1,
    "workId": "W-15446586",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yzvZ6AAI",
    "summary": "\"Edit Data Source\" button disappears after turning off the web authoring of flow.",
    "created": 1712549907000,
    "updated": 1724229269000
  },
  {
    "id": "a028c00000zIKN8AAO",
    "name": "",
    "title": "Unable to publish or edit a flow on Prep Web Authoring when it contains a text, hyper, or excel connection",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "Tableau Server 2023.3.x, Tableau Cloud 2024.1",
    "primaryVer": "2023.3",
    "allVersions": [
      "2023.3",
      "2024.1"
    ],
    "reports": 7,
    "workId": "W-14851210",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zIKN8AAO",
    "summary": "Unable to publish or edit a flow on Prep Web Authoring when it contains a text, hyper, or excel connection.",
    "created": 1716214290000,
    "updated": 1724312949000
  },
  {
    "id": "a028c00000yzfKWAAY",
    "name": "",
    "title": "User Management Page Does Not Handle User List Properly when It Is Sorted by \"Last Signed In\" Field",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2023.1.10",
    "primaryVer": "2023.1.10",
    "allVersions": [
      "2023.1.10"
    ],
    "reports": 0,
    "workId": "W-15282250",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yzfKWAAY",
    "summary": "When the sort order of the user list is descending by \"Last sign in\", clicking \u201cSelect All\" does not complete the selection of all users.",
    "created": 1711611200000,
    "updated": 1719886603000
  },
  {
    "id": "a028c000010EeZ9AAK",
    "name": "",
    "title": "Flow File Is Cached by the Browser, Preventing the User from Getting the Latest Update",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1 or later",
    "primaryVer": "2023.1",
    "allVersions": [
      "2023.1"
    ],
    "reports": 1,
    "workId": "W-17500363",
    "url": "https://help.salesforce.com/s/issue?id=a028c000010EeZ9AAK",
    "summary": "When downloading a flow operation is repeated in a short period in single browser, the file is downloaded from the browser's cache with \"200 OK (from disk cache) \"and edits made in other browsers or prep builder in same time are not reflected.",
    "created": 1738131333000,
    "updated": 1745855483000
  },
  {
    "id": "a028c00000ixN42AAE",
    "name": "",
    "title": "Site Export Job Failed due to ERROR: null value in column \"created_at\" of relation \"comments\"",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1.0",
    "primaryVer": "2023.1.0",
    "allVersions": [
      "2023.1.0"
    ],
    "reports": 0,
    "workId": "W-13155441",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000ixN42AAE",
    "summary": "When performing a site export, the job failed with the following errorC:\\Windows\\system32>tsm sites export --site-id default --file SiteExportTestPY20230508Starting site export for site 'default'.The previous SiteExportJob did not succeed after running for 0 minute(s)....An error occurred on the server while trying to export site 'default'.This job failed due to unexpected error: 'SiteImportExportException'org.hibernate.exception.GenericJDBCException: could not extract ResultSetSee 'C:\\ProgramDa",
    "created": 1683861659000,
    "updated": 1719886594000
  },
  {
    "id": "a02Ka00000fBPAAIA4",
    "name": "",
    "title": "CMT Dropdown Does Not Display All Available Published Datasources for Transformation.",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 0,
    "workId": "W-18690094",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000fBPAAIA4",
    "summary": "CMT does not have all the datasources in the lists for Transformation for published datasource when Replace Table/Schema Datasource Name is selected.Set Connection Info has a lot more datasources as compared.Athena is one of the datasources missing from the list.Request is to add all the missing datasources.",
    "created": 1748931572000,
    "updated": 1749842762000
  },
  {
    "id": "a028c00000zI0K3AAK",
    "name": "",
    "title": "Subscription Email Image Shows Unfiltered View Although Filters Were Applied",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2022.3.13",
    "primaryVer": "2022.3.13",
    "allVersions": [
      "2022.3.13"
    ],
    "reports": 1,
    "workId": "W-15642783",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zI0K3AAK",
    "summary": "When a subscription for a custom view is delivered, the image in that email might not show filtered results.The PDF attached to the subscription shows the correct filtered results.",
    "created": 1715263522000,
    "updated": 1719886596000
  },
  {
    "id": "a028c00000xaiJoAAI",
    "name": "",
    "title": "MSAS Quick filter of string value with double quote shows error \"A7AED4D2 Analysis Services database error 0x80004005...\"",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2021.3.7",
    "primaryVer": "2021.3.7",
    "allVersions": [
      "2021.3.7"
    ],
    "reports": 0,
    "workId": "W-13721938",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000xaiJoAAI",
    "summary": "In Tableau Desktop OR Tableau Server, using a Quick Filter of a string value with double quotations for a MSAS datasource shows Error Code: A7AED4D2 \"Analysis Services database error 0x80004005: Query(<number>,<number>) The syntax for \"<StringValue>\" is incorrect\"",
    "created": 1696433721000,
    "updated": 1719886594000
  },
  {
    "id": "a02Ka00000ji8nhIAA",
    "name": "",
    "title": "Flowprocessor Runs Out of Memory Due to Potential Memory Leak when Running Flows with Large Volume of Data via Analytics Extension (TabPy)",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1.7",
    "primaryVer": "2025.1.7",
    "allVersions": [
      "2025.1.7"
    ],
    "reports": 2,
    "workId": "W-19879516",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000ji8nhIAA",
    "summary": "Flow processor experiences out-of-memory errors when running large data flows via the Analytics Extension (TabPy), indicating a potential memory leak.",
    "created": 1760346778000,
    "updated": 1783487288000
  },
  {
    "id": "a028c00000zL4sEAAS",
    "name": "",
    "title": "LUID Is Displayed Instead of Field Name in Created Relationship Calculations When Using Virtual Connection",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3.5",
    "primaryVer": "2023.3.5",
    "allVersions": [
      "2023.3.5"
    ],
    "reports": 0,
    "workId": "W-16492090",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zL4sEAAS",
    "summary": "Field Name is not shown correctly but LUID is displayed in relationship calculation when using Virtual Connection.",
    "created": 1723704818000,
    "updated": 1742509021000
  },
  {
    "id": "a028c00000ixHT8AAM",
    "name": "",
    "title": "The date of 1899/12/30 could be in the output file of a clean step after changing a string to a date format when connected to a published data source",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2022.2.3",
    "primaryVer": "2022.2.3",
    "allVersions": [
      "2022.2.3"
    ],
    "reports": 0,
    "workId": "W-12924159",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000ixHT8AAM",
    "summary": "The date of 1899/12/30 could be in the output file of a clean step after changing a string to a date format when connected to a published data source when the Tableau Server is using a non-English operating system.Originally tracked under TFS 1465501",
    "created": 1683657493000,
    "updated": 1719886595000
  },
  {
    "id": "a028c00000zJ1JlAAK",
    "name": "",
    "title": "create_permissions Events Unexpectedly Get Logged as update_permissions Events in Activity Logs.",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "Tableau Server 2023.3, Tableau Cloud 2024.2.0",
    "primaryVer": "2023.3",
    "allVersions": [
      "2023.3",
      "2024.2.0"
    ],
    "reports": 0,
    "workId": "W-14612372",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zJ1JlAAK",
    "summary": "create_permissions Events Unexpectedly Get Logged as update_permissions Events in Activity Logs.",
    "created": 1718179553000,
    "updated": 1721059057000
  },
  {
    "id": "a028c00000ywnMHAAY",
    "name": "",
    "title": "TS - Calculated field and RLS settings disappear from Flow output after each run when a datasource filter is applied directly on the output",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3.1",
    "primaryVer": "2023.3.1",
    "allVersions": [
      "2023.3.1"
    ],
    "reports": 2,
    "workId": "W-14989678",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000ywnMHAAY",
    "summary": "Calculated Field and row-level security settings disappear from a flow output after every flow run when a datasource filter is applied directly on the output.",
    "created": 1707402516000,
    "updated": 1724225723000
  },
  {
    "id": "a028c00000zjL98AAE",
    "name": "",
    "title": "Column Values Change to Null/Blank When Datasource is Changed from Embedded to Published",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2023.3.7+",
    "primaryVer": "2023.3.7",
    "allVersions": [
      "2023.3.7"
    ],
    "reports": 1,
    "workId": "W-17262325",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zjL98AAE",
    "summary": "Null/blank column values are being introduced when switching a workbook's datasource from Embedded to Published.This issue affects both Tableau Desktop and Tableau Server.",
    "created": 1732570521000,
    "updated": 1740768278000
  },
  {
    "id": "a028c00000yzlcsAAA",
    "name": "",
    "title": "Virtual Connection with a Large Number of Columns Returns No Items in the Metadata Request",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2023.3.0, 2024.1.0",
    "primaryVer": "2023.3.0",
    "allVersions": [
      "2023.3.0",
      "2024.1.0"
    ],
    "reports": 7,
    "workId": "W-14977257",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yzlcsAAA",
    "summary": "In Tableau Cloud and Tableau Server, virtual Connection with a large number of columns returns no items in the metadata request. And as a result, the lineage of the VConn cannot be seen, and the query of Metadata API returns no data.This issue also occurs in Tableau Server 2023.3.0",
    "created": 1712047123000,
    "updated": 1749156102000
  },
  {
    "id": "a028c00000ziEa8AAE",
    "name": "",
    "title": "Fails to Edit and Save/Publish an Existing Virtual Connection When the Site Revision History Is Disabled",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2023.3",
    "primaryVer": "2023.3",
    "allVersions": [
      "2023.3"
    ],
    "reports": 5,
    "workId": "W-16840767",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000ziEa8AAE",
    "summary": "When a site revision history is disabled, cannot edit and save/publish an existing virtual connection showing error: Publish operation could not be completed",
    "created": 1729472990000,
    "updated": 1748923554000
  },
  {
    "id": "a028c00000yESJgAAO",
    "name": "",
    "title": "Issue creating an extract using certain combinations of Custom SQL query or Database Table and File",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3",
    "primaryVer": "2023.3",
    "allVersions": [
      "2023.3"
    ],
    "reports": 40,
    "workId": "W-14762809",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yESJgAAO",
    "summary": "When creating Extract from Database Table or Custom SQL query joined to CSV or Excel File and then Joined to another Table or query, extract is failing.",
    "created": 1704799194000,
    "updated": 1732670653000
  },
  {
    "id": "a02Ka00000fuelfIAA",
    "name": "",
    "title": "Scheduled Prep Flows with linked tasks fail to execute when 'Run Now' is disabled due to SchedulingService.checkRunNowEnabled check",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2.X",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 3,
    "workId": "W-18772803",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000fuelfIAA",
    "summary": "Scheduled linked tasks that involve multiple flows fail to execute when the \"Run Now \u2013 Let users run manually using Run Now\" setting is disabled in the Sites Settings",
    "created": 1750440961000,
    "updated": 1756918926000
  },
  {
    "id": "a02Ka00000ho9RwIAI",
    "name": "",
    "title": "Embedding passwords in workbooks is not functioning as expected when data sources are published separately from web",
    "status": "Solution in Progress",
    "statusType": "open",
    "foundIn": "2025.2.0",
    "primaryVer": "2025.2.0",
    "allVersions": [
      "2025.2.0"
    ],
    "reports": 7,
    "workId": "W-19244302",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000ho9RwIAI",
    "summary": "Embedding passwords in workbooks is not functioning as expected when data sources are published separately (not embedded within the workbook) from web.If a password is embedded in the workbook, but a user lacks \"Connect\" permission for the data source itself, they will encounter the error.",
    "created": 1754444912000,
    "updated": 1784671337000
  },
  {
    "id": "a028c00000yzq00AAA",
    "name": "",
    "title": "The measure filter slider is longer while the text box is smaller after publishing",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2024.1",
    "primaryVer": "2024.1",
    "allVersions": [
      "2024.1"
    ],
    "reports": 0,
    "workId": "W-15379794",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yzq00AAA",
    "summary": "The measure filter slider is longer while the text box next to the slider is smaller after publishing.Not only Tableau Cloud but Tableau Server also behaves the same.",
    "created": 1712309396000,
    "updated": 1727183153000
  },
  {
    "id": "a028c00000zL0v1AAC",
    "name": "",
    "title": "Incremental flow job failed after renaming output data source",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "Tableau Cloud, Tableau Server 2023.3.7, 2024.2.0",
    "primaryVer": "2023.3.7",
    "allVersions": [
      "2023.3.7",
      "2024.2.0"
    ],
    "reports": 0,
    "workId": "W-16374966",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zL0v1AAC",
    "summary": "Incremental flow job failed after renaming output data source.",
    "created": 1723539673000,
    "updated": 1725087163000
  },
  {
    "id": "a028c00000iwSqdAAE",
    "name": "",
    "title": "The sort order of a calculated field could be changed or duplicated after replacing the published data source using the REST API.",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2021.4.3",
    "primaryVer": "2021.4.3",
    "allVersions": [
      "2021.4.3"
    ],
    "reports": 1,
    "workId": "W-12862805",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000iwSqdAAE",
    "summary": "Impacts both Tableau Server and Tableau CloudAfter publishing (overwriting) the published data source using REST API, the manual sort order is reset to alphabetical sort order.This issue can occur when overwriting the data source with Tableau Desktop.",
    "created": 1681832111000,
    "updated": 1727183260000
  },
  {
    "id": "a028c00000y4r8WAAQ",
    "name": "",
    "title": "Unable to create data alerts when database credentials are embedded only in the View.",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2022.3.15 and later",
    "primaryVer": "2022.3.15",
    "allVersions": [
      "2022.3.15"
    ],
    "reports": 2,
    "workId": "W-15449834",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000y4r8WAAQ",
    "summary": "Unable to create data alerts when credentials are only embedded within a workbook and the datasource connection is left as 'prompt user'.",
    "created": 1714144055000,
    "updated": 1733732194000
  },
  {
    "id": "a028c00000yzILAAA2",
    "name": "",
    "title": "The 'Refresh Type' column in the 'Flow Linked Task Settings' dialog always displays 'Full refresh'",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1.0",
    "primaryVer": "2023.1.0",
    "allVersions": [
      "2023.1.0"
    ],
    "reports": 0,
    "workId": "W-15001062",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yzILAAA2",
    "summary": "The 'Refresh Type' column in the 'Flow Linked Task Settings' dialog always displays 'Full refresh', even when originally set to 'Incremental refresh'",
    "created": 1710544219000,
    "updated": 1719886594000
  },
  {
    "id": "a02Ka00000fuemdIAA",
    "name": "",
    "title": "Data Catalog graphql queries for views return null index in 2025.1+",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1",
    "primaryVer": "2025.1",
    "allVersions": [
      "2025.1"
    ],
    "reports": 25,
    "workId": "W-18833617",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000fuemdIAA",
    "summary": "Executing a graphql query for views and requesting the index will return a \"null\" index value instead of a numeric response for all views in 25.1+",
    "created": 1750444751000,
    "updated": 1791221626000
  },
  {
    "id": "a028c00000zI9sLAAS",
    "name": "",
    "title": "Unable to delete user who owns orphaned objects.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "Tableau Cloud/Tableau Server 2023.3.x+",
    "primaryVer": "2023.3",
    "allVersions": [
      "2023.3"
    ],
    "reports": 0,
    "workId": "W-15627285",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zI9sLAAS",
    "summary": "Unable tdelete a user who is not a content owner. When a project is deleted, the contents managed by this project are not removed, resulting in orphaned objects. As a result, attempting to remove the owner user from the site will fail with a warning prompt stating that the user cannot be deleted because they own content.",
    "created": 1715681436000,
    "updated": 1727370452000
  },
  {
    "id": "a02Ka00000gYLlIIAW",
    "name": "",
    "title": "Unknown Error After Excluding Fields in Virtual Connections",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.2",
    "primaryVer": "2025.2",
    "allVersions": [
      "2025.2"
    ],
    "reports": 0,
    "workId": "W-18886893",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000gYLlIIAW",
    "summary": "After editing a Virtual connection to exclude fields, existing connections throw an unknown error after clicking \"Update Now\". New connections to the edited Virtual connection still shows excluded fields, and when dragged into a view, it throws a Virtual connection not found error.",
    "created": 1751376397000,
    "updated": 1783476632000
  },
  {
    "id": "a028c00000z0DiUAAU",
    "name": "",
    "title": "Existing/Old Permission rules cannot be copied/pasted",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.1",
    "primaryVer": "2024.1",
    "allVersions": [
      "2024.1"
    ],
    "reports": 0,
    "workId": "W-15448475",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000z0DiUAAU",
    "summary": "Old/Existing permission rules created before the latest upgrade of Tableau Cloud (2024.1.0) cannot be copied and pasted. The \"Save\" button does not work and the screen stays frozen until you hit \"Cancel\".If a new permission rule is created, you can copy and paste it without any issues.",
    "created": 1713342134000,
    "updated": 1729031110000
  },
  {
    "id": "a028c00000zJB1sAAG",
    "name": "",
    "title": "Content Migration Tool: Project Permissions are not Copied to a Project Selected in Workbook Mapping",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2024.1",
    "primaryVer": "2024.1",
    "allVersions": [
      "2024.1"
    ],
    "reports": 2,
    "workId": "W-15997685",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zJB1sAAG",
    "summary": "When moving a project using the Content Migration Tool, the permissions from a origin project may not be correctly applied to the destination project.",
    "created": 1718621240000,
    "updated": 1719954530000
  },
  {
    "id": "a028c00000xBTzCAAW",
    "name": "",
    "title": "Fiscal Year is Displayed as Calendar Year on Axis when a Continuous Date Field Has a Custom Fiscal Year Start after Publish",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2021.4.22",
    "primaryVer": "2021.4.22",
    "allVersions": [
      "2021.4.22"
    ],
    "reports": 0,
    "workId": "W-14393839",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000xBTzCAAW",
    "summary": "When we publish a dashboard with Fiscal Year in axis, the date is displayed as Calendar Year if it is a continuous date field and we have a custom start date as Fiscal Year date.e.g.If we connect to the sample Superstore datasource, right-click on [Ship Date] and choose Default Properties > Fiscal Year Start as \"July\". The Superstore dashboard will display properly on Tableau Desktop but wrongly on Tableau Cloud&Tableau Server.",
    "created": 1700623995000,
    "updated": 1719886600000
  },
  {
    "id": "a028c000010FmYvAAK",
    "name": "",
    "title": "Running a flow that publishes a large data source throws a permissions error",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2024.3.0",
    "primaryVer": "2024.3.0",
    "allVersions": [
      "2024.3.0"
    ],
    "reports": 0,
    "workId": "W-17930095",
    "url": "https://help.salesforce.com/s/issue?id=a028c000010FmYvAAK",
    "summary": "Running a flow that publishes a large data source throws the error\"Unable to publish the datasource. Verify the project exists on your server and you have permission to access it, or select a different project.\"This error may be erroneous, and the actual problem is an internal time out.",
    "created": 1741187774000,
    "updated": 1741583427000
  },
  {
    "id": "a02Ka00000jfT10IAE",
    "name": "",
    "title": "The horizontal border at the bottom of the crosstab appears shorter when viewed on mobile devices than it was anticipated",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2025.2",
    "primaryVer": "2025.2",
    "allVersions": [
      "2025.2"
    ],
    "reports": 0,
    "workId": "W-19593704",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000jfT10IAE",
    "summary": "The border lines in the crosstab are rendered accordingly in Tableau Deskop:Accessing the dashboard published to Tableau Cloud, the crosstab's bottom border line appears shorter than anticipated on mobile devices:This impacts the visualizations on both the Tableau Mobile app and mobile browsers.",
    "created": 1757577777000,
    "updated": 1758749316000
  },
  {
    "id": "a028c00000yDlkdAAC",
    "name": "",
    "title": "TC/TS: Content permissions are overridden by nested project permissions when parent project changed from Locked without nested to Customizable",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3",
    "primaryVer": "2023.3",
    "allVersions": [
      "2023.3"
    ],
    "reports": 0,
    "workId": "W-14617451",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yDlkdAAC",
    "summary": "When there is a nested project hierarchy which contains content with permissions that are different than the nested project permissions, and the parent project is set to Locked without nested, and then changed to Customizable, the content permissions within the nested project get overridden by the nested project permissions.This issue is noted to affect Tableau Cloud and Tableau Server. ",
    "created": 1703169826000,
    "updated": 1719886589000
  },
  {
    "id": "a028c00000yGCYGAA4",
    "name": "",
    "title": "TS: The filter actions of Admin views does not work when user account language is Japanese, Thai, Swedish, Francais (Canada + France)",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.3.x, 2023.1.5",
    "primaryVer": "2022.3",
    "allVersions": [
      "2022.3",
      "2023.1.5"
    ],
    "reports": 0,
    "workId": "W-14578049",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yGCYGAA4",
    "summary": "The filter actions does not work when user account language is Japanese, Korean, Thai, Swedish (Svenska), Francais (Canada) and Francais (France) at least in the following 2 pre-built admin views:Background Tasks for ExtractsBackground Tasks for Non Extracts\u200b",
    "created": 1706623958000,
    "updated": 1719886589000
  },
  {
    "id": "a028c000010EuJmAAK",
    "name": "",
    "title": "Fatal error connecting to MySQL when using Oracle 9 version drivers",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 15,
    "workId": "W-17637364",
    "url": "https://help.salesforce.com/s/issue?id=a028c000010EuJmAAK",
    "summary": "Connecting to MySQL using the MySQL 9.x drivers, the connection will fail with \"Unable to proceed because of an error from the data source\" or \"The connection to mysql had a fatal error and was disconnected\"",
    "created": 1738793673000,
    "updated": 1768802596000
  },
  {
    "id": "a028c00000z0AAkAAM",
    "name": "",
    "title": "'Test Connection' button is enabled for Bridge connections used by Live Data Sources and Embedded Extract Data Sources.",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2024.1",
    "primaryVer": "2024.1",
    "allVersions": [
      "2024.1"
    ],
    "reports": 2,
    "workId": "W-15486324",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000z0AAkAAM",
    "summary": "Test Connection button should be disabled for Bridge connections for Live Data Sources and Embedded Extract Data Sources.",
    "created": 1713194176000,
    "updated": 1786135685000
  },
  {
    "id": "a028c00000zijq0AAA",
    "name": "",
    "title": "Egress gateway causing extracts failing if query doesn't returned results within 30 min",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.3.0",
    "primaryVer": "2024.3.0",
    "allVersions": [
      "2024.3.0"
    ],
    "reports": 15,
    "workId": "W-17140798",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zijq0AAA",
    "summary": "Redshift extracts are failing with \"SSL SYSCALL error: EOF detected\" or \"Unable to connect to the Amazon Redshift server\" when the query doesn't return results within 30 minutes.",
    "created": 1730883747000,
    "updated": 1745617475000
  },
  {
    "id": "a028c00000yzdjkAAA",
    "name": "",
    "title": "Password Autofill in Edit Connection Dialog for Published Data Sources leads to failed Test Connections.",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "All",
    "primaryVer": "",
    "allVersions": [],
    "reports": 3,
    "workId": "W-15334577",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yzdjkAAA",
    "summary": "Autofilling of passwords causes the 'Test Connection' to fail for Published Data Sources with embedded credentials. Potentially, not the most ideal experience for the end user since a lot of users tend to use autofill from Chrome or LastPass (or equivalent apps). Once there is any text in the password field or removing the auto-filled password, it will try to connect as an empty string.",
    "created": 1711528470000,
    "updated": 1736192897000
  },
  {
    "id": "a02Ka00000eOXuPIAW",
    "name": "",
    "title": "Exporting/downloading a dashboard as PDF generates a blurry or a low quality image.",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "2023.3.12, 2024.2.2, 2024.2.8",
    "primaryVer": "2023.3.12",
    "allVersions": [
      "2023.3.12",
      "2024.2.2",
      "2024.2.8"
    ],
    "reports": 2,
    "workId": "W-18308226",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000eOXuPIAW",
    "summary": "When downloading the workbook view as a PDF, images appear blurry with low resolution.\u00a0",
    "created": 1745328763000,
    "updated": 1753200773000
  },
  {
    "id": "a02Ka00000gbJxPIAU",
    "name": "",
    "title": "Unable to edit action filters when 'Dynamic Zone Visibility' is enabled on the view.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1.5",
    "primaryVer": "2025.1.5",
    "allVersions": [
      "2025.1.5"
    ],
    "reports": 0,
    "workId": "W-19002946",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000gbJxPIAU",
    "summary": "The following errors may appear one after another when attempting to edit an action filter on a dashboard when the data is not populated for the Dynamic Zone Visability\"Error: Cannot read properties of undefined (reading'filterSectionDropdownFieldItemsForSource')\"this then changes to,\"HybridDialog JS is not responding across webchannel. Aborting show Error Code: 2B2D38E4\"",
    "created": 1752477580000,
    "updated": 1782824727000
  },
  {
    "id": "a028c00000zhPgVAAU",
    "name": "",
    "title": "Displays of records are out of alignment after scrolled on Android tablet",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3 or later",
    "primaryVer": "2023.3",
    "allVersions": [
      "2023.3"
    ],
    "reports": 0,
    "workId": "W-16117724",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zhPgVAAU",
    "summary": "When scrolling a text table on a Android tablet, the left and right displays of records are out of alignment.Under certain specific conditions,\u00a0after scrolled a text table on a Android tablet, data on the same row appeared on different lines. As a result, it is unable to read the data correctly.",
    "created": 1727325271000,
    "updated": 1764971649000
  },
  {
    "id": "a02Ka00000f7yjNIAQ",
    "name": "",
    "title": "Virtual connection extract refresh jobs are not executed based on the priority set for the task but on the priority set for the schedule",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3.15",
    "primaryVer": "2023.3.15",
    "allVersions": [
      "2023.3.15"
    ],
    "reports": 0,
    "workId": "W-18434481",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000f7yjNIAQ",
    "summary": "Virtual connection extract refresh jobs are not executed based on the priority set for the task but on the priority set for the schedule.Note: Non-Virtual Connection extract refresh jobs are executed based on the priority set for the task though.",
    "created": 1747291122000,
    "updated": 1758905056000
  },
  {
    "id": "a028c00000ziIBOAA2",
    "name": "",
    "title": "Unexpected error occurs when selecting a filter value or changing a parameter value",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 0,
    "workId": "W-16999173",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000ziIBOAA2",
    "summary": "The error happens when (a) selecting or deselecting a filter value or (b) changing a parameter value.The issue happens when a dashboard uses custom format for Date on an axis.",
    "created": 1729644653000,
    "updated": 1750265163000
  },
  {
    "id": "a028c00000ziO5sAAE",
    "name": "",
    "title": "Using Key Pair as the Authentication Method for a Snowflake Data Source Connection Results in an Error on Mac",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.3",
    "primaryVer": "2024.3",
    "allVersions": [
      "2024.3"
    ],
    "reports": 7,
    "workId": "W-17035928",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000ziO5sAAE",
    "summary": "When using the \"Key Pair\" authentication method for a Snowflake connection in Tableau Desktop or Tableau Prep Builder on Mac, an error is received when attempting to sign in. ",
    "created": 1729881947000,
    "updated": 1732287853000
  },
  {
    "id": "a028c00000zkOCnAAM",
    "name": "",
    "title": "\"Executing Query\" event missing from Performance Recordings when using VizDataService",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2+",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 4,
    "workId": "W-17354875",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zkOCnAAM",
    "summary": "When reviewing a performance recording in 2024.2 and above for workbooks connected to a published datasource (vizdataservice), the executing query events are no longer present. The executing query event is comprised of a set grouping which consists of solely qp.run-query as the event in which workbooks connecting to published datasources are no longer using (instead using viz data api where we see events such as executeQueries and vizdata.<event_name_here>).",
    "created": 1735581956000,
    "updated": 1765656154000
  },
  {
    "id": "a028c00000ixJjBAAU",
    "name": "",
    "title": "Client side rendered visualizations that have a continuous axis may not format correctly after publishing",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2021.3.3",
    "primaryVer": "2021.3.3",
    "allVersions": [
      "2021.3.3"
    ],
    "reports": 1,
    "workId": "W-12903672",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000ixJjBAAU",
    "summary": "Also occurs in Tableau ServerClient side rendered visualizations that have a continuous axis may see data source derived formatting or custom formatting ignored or not drawn correctly.This can include (but is not limited to) formatting for fiscal year information showing the wrong year and other date information listed on an axis.Originally tracked under Tableau issue TFS 1472027",
    "created": 1683759320000,
    "updated": 1719886585000
  },
  {
    "id": "a028c00000zI00yAAC",
    "name": "",
    "title": "Flow fails with the \"Missing password\" error message after changing connection credentials for Starburst connector by using REST API",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.1",
    "primaryVer": "2024.1",
    "allVersions": [
      "2024.1"
    ],
    "reports": 2,
    "workId": "W-15709870",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zI00yAAC",
    "summary": "Flow fails with the \"Missing password\" error message after changing connection credentials for Starburst connector by using REST API: Update Flow Connection.",
    "created": 1715248611000,
    "updated": 1732285851000
  },
  {
    "id": "a028c00000tIGTaAAO",
    "name": "",
    "title": "[Extract Security] Enable incremental extract creation for Virtual Connections in WebEdit",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1",
    "primaryVer": "2023.1",
    "allVersions": [
      "2023.1"
    ],
    "reports": 1,
    "workId": "W-12926352",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000tIGTaAAO",
    "summary": "The ability to create incremental extract refreshes in Web Edit for virtual connections is currently blocked by another Known Issue. Affects both Tableau Server and Tableau Cloud.Previously tracked in TFS 1495636",
    "created": 1685122785000,
    "updated": 1791913043000
  },
  {
    "id": "a028c00000yEal6AAC",
    "name": "",
    "title": "Addressed Issue in Messaging Service",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 0,
    "workId": "W-14508592",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yEal6AAC",
    "summary": "Addressed Issue in Messaging Service.",
    "created": 1705011814000,
    "updated": 1719886587000
  },
  {
    "id": "a028c00000zIcEpAAK",
    "name": "",
    "title": "Issue in Flow Editor",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 0,
    "workId": "W-15478748",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zIcEpAAK",
    "summary": "Addressed issue in Flow Editor. ",
    "created": 1717014420000,
    "updated": 1719886596000
  },
  {
    "id": "a028c00000yzlsdAAA",
    "name": "",
    "title": "Published Flows failing due to NullPointerException post TS upgrade",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3.2",
    "primaryVer": "2023.3.2",
    "allVersions": [
      "2023.3.2"
    ],
    "reports": 1,
    "workId": "W-15106464",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yzlsdAAA",
    "summary": "Published flow schedules\u00a0started failing with \"Execution of flow with ID xxxx timed out\" after TS upgrade.For flows with failed schedules:\"Run Now\" (Ad-Hoc) for an individual output flow also FAILED\"Run All\" (Ad-Hoc) for all outputs: WORKED",
    "created": 1712077733000,
    "updated": 1741991860000
  },
  {
    "id": "a028c00000zJ1JWAA0",
    "name": "",
    "title": "Loading an Extension fails on sites that have duplicate entries in the allowlist.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.2.3",
    "primaryVer": "2023.2.3",
    "allVersions": [
      "2023.2.3"
    ],
    "reports": 0,
    "workId": "W-15200295",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zJ1JWAA0",
    "summary": "Network enabled extensions fail to load when multiple identical URLs exists in the allowlist for a site.",
    "created": 1718179040000,
    "updated": 1722607538000
  },
  {
    "id": "a028c00000tIRLQAA4",
    "name": "",
    "title": "Site-Specific SAML authentication fails after changing \"Email\" of the user",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2021.4.13",
    "primaryVer": "2021.4.13",
    "allVersions": [
      "2021.4.13"
    ],
    "reports": 1,
    "workId": "W-13193579",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000tIRLQAA4",
    "summary": "At a Tableau Server site that is enabled site SAML authentication, all users doesn't have email address, both \"Server Default (Local)\" authentication and \"<Idp name> (SAML)\" authentication.After adding \"Email\" (email address) on \"<Idp name> (SAML)\" authentication user, Site-Specific SAML sign-in failed and the page was redirected to https://<Tableau Server>/#/error/\u00a0When using Site SAML, there is a column called \"user_name\" in the internal table public.site_saml_users. When a user is created for",
    "created": 1685544388000,
    "updated": 1732203282000
  },
  {
    "id": "a028c00000yyjQYAAY",
    "name": "",
    "title": "Permission rules for groups at project level are set to \"None\" when deleted instead of being removed.",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "Tableau Cloud 2024.1, Tableau Server 2023.1.9+",
    "primaryVer": "2024.1",
    "allVersions": [
      "2024.1",
      "2023.1.9"
    ],
    "reports": 4,
    "workId": "W-15153602",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yyjQYAAY",
    "summary": "When attempting to delete a permission rule at the Project level, the observed behaviour is the update of permissions to \"None.\" Upon clicking the delete button, the system displays a message stating, \"There might be a delay before you can see your changes.\"The issue is specific to the Project level, and deleting permission rules at the Workbook and Data Source levels does not show the same behaviour.",
    "created": 1709892939000,
    "updated": 1740768547000
  },
  {
    "id": "a028c00000ziWNTAA2",
    "name": "",
    "title": "Unable to display the row-level security preview data  when the policy table and the entitlement table are in different connection type",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2023.3.6",
    "primaryVer": "2023.3.6",
    "allVersions": [
      "2023.3.6"
    ],
    "reports": 0,
    "workId": "W-17066736",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000ziWNTAA2",
    "summary": "The row-level security preview data with a virtual connection does not display because it failed with an INVALID_ARGUMENT error.This can occur if the entitlement table is in Snowflake and the policies table is in OneDrive, for example, when the tables are located in different connection types.",
    "created": 1730254721000,
    "updated": 1741098061000
  },
  {
    "id": "a028c00000zjbD4AAI",
    "name": "",
    "title": "When a character follows parentheses in a field name, it is not possible to filter view by that field in url.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1 or later",
    "primaryVer": "2023.1",
    "allVersions": [
      "2023.1"
    ],
    "reports": 2,
    "workId": "W-17167300",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zjbD4AAI",
    "summary": "When a character follows parentheses in a field name, it is not possible to filter view by that field in url.For example, if the field name is f(1)a, appending ?f(1)a=val to the view url does not work as a filter.Note that if the field name is f(1),\u00a0appeding ?f(1)=a filters the view appropriately. The issue only happens when something follows ().",
    "created": 1733299761000,
    "updated": 1742491202000
  },
  {
    "id": "a028c00000z0AaxAAE",
    "name": "",
    "title": "Custom view URL is invalid after changing the custom view owner when custom view name is all non-alphanumeric characters",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1.9",
    "primaryVer": "2023.1.9",
    "allVersions": [
      "2023.1.9"
    ],
    "reports": 2,
    "workId": "W-14981397",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000z0AaxAAE",
    "summary": "Unable to open the custom view due to the following error after changing the custom view owner.\"That page could not be accessed. Either it does not exist, or you do not have the necessary permissions.\"",
    "created": 1713232593000,
    "updated": 1719886606000
  },
  {
    "id": "a02Ka00000kTyWrIAK",
    "name": "",
    "title": "Extract refreshes fail when the FQDN of the network share drive contains an underscore.",
    "status": "Solution Scheduled",
    "statusType": "open",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 2,
    "workId": "W-20023950",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000kTyWrIAK",
    "summary": "Extract refreshes fail when the FQDN of the network share drive contains an underscore (_). In this scenario, Tableau Cloud\u00a0does not route the extract to the assigned Bridge Pool.",
    "created": 1761289301000,
    "updated": 1770746444000
  },
  {
    "id": "a02Ka00000gXljtIAC",
    "name": "",
    "title": "Level of Detail (LOD) calculation fails in Multi-Fact Data Sources with shared dimensions",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1.3",
    "primaryVer": "2025.1.3",
    "allVersions": [
      "2025.1.3"
    ],
    "reports": 4,
    "workId": "W-18836874",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000gXljtIAC",
    "summary": "When using a multi-fact data source where two fact tables share common dimensional tables, Level of Detail (LOD) expressions involving fields from these shared dimension tables may fail with an error\u2014even when all fields referenced in the calculation are logically connected to the same base fact table.This behavior occurs despite the LOD calculation validating correctly in the calculation editor. The error is triggered when the field is used in a worksheet.",
    "created": 1751011729000,
    "updated": 1756922447000
  },
  {
    "id": "a028c00000zIK4GAAW",
    "name": "",
    "title": "GBQ/Snowflake/Azure \"Edit connection\" on the web for Prep Flows shows error when account is changed.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3.1",
    "primaryVer": "2023.3.1",
    "allVersions": [
      "2023.3.1"
    ],
    "reports": 0,
    "workId": "W-15710563",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zIK4GAAW",
    "summary": "Editing the data connection for a prep flow fails consistently. Selecting an account & clicking \"save\" results in the red banner \"An unexpected error occurred\".Observed on Tableau Online (dub01) with GBQ-connections.",
    "created": 1716201954000,
    "updated": 1719886602000
  },
  {
    "id": "a028c00000zIYBKAA4",
    "name": "",
    "title": "Data loss after \u201cDatasource check returned false\u201d and incremental refresh overwrote data source rather than appending data.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.1 and later, Tableau Cloud 2023.3",
    "primaryVer": "2022.1",
    "allVersions": [
      "2022.1",
      "2023.3"
    ],
    "reports": 0,
    "workId": "W-15749529",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zIYBKAA4",
    "summary": "Data lost after the incremental refresh of a scheduled flow. A flow scheduled by a linked task is run. Only the rows that are new since the previous run are output to the data source. The rows that existed before this run were lost. Since incremental refresh is configured for the flow, the new rows should be appended to existing rows rather than overwriting them. ",
    "created": 1716800116000,
    "updated": 1719948829000
  },
  {
    "id": "a028c00000zJcopAAC",
    "name": "",
    "title": "Flows with \"append to table\" option fail with \"System error: Read timed out An internal error occurred. Contact your administrator.\"",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1.5, 2023.1.11",
    "primaryVer": "2023.1.5",
    "allVersions": [
      "2023.1.5",
      "2023.1.11"
    ],
    "reports": 0,
    "workId": "W-15670939",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zJcopAAC",
    "summary": "Running a flow that appends a large amount of data to a table fails with \"System error: Read timed out An internal error occurred. Contact your administrator.\" however the data does append after some time.",
    "created": 1719817029000,
    "updated": 1719886600000
  },
  {
    "id": "a028c00000zIK3rAAG",
    "name": "",
    "title": "Auto alignment truncates letters in client-side rendering",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.3.x",
    "primaryVer": "2023.3",
    "allVersions": [
      "2023.3"
    ],
    "reports": 4,
    "workId": "W-15780233",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zIK3rAAG",
    "summary": "Actual resultExpected result",
    "created": 1716200610000,
    "updated": 1764971537000
  },
  {
    "id": "a028c00000iwlKnAAI",
    "name": "",
    "title": "View load error \"SQLSTATE:58S01 Hyper was unable to resolve the database file path\" after running \"tabcmd refreshextracts\" with the \"-addcalculations\"",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2021.2.0",
    "primaryVer": "2021.2.0",
    "allVersions": [
      "2021.2.0"
    ],
    "reports": 1,
    "workId": "W-12899194",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000iwlKnAAI",
    "summary": "Running \"tabcmd refreshextracts\" with the \"-addcalculations\" flag caused the error, \"SQLSTATE:58S01\" and \"Hyper was unable to resolve the database file path\" to occur when loading associated workbook views.Originally tracked under Tableau TFS 1427637",
    "created": 1682448812000,
    "updated": 1734438243000
  },
  {
    "id": "a028c00000uYxH3AAK",
    "name": "",
    "title": "Content not displaying properly after Site import completes due to incorrect project_id information in repository tables",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "Summer '16",
    "primaryVer": "",
    "allVersions": [],
    "reports": 4,
    "workId": "W-13762934",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000uYxH3AAK",
    "summary": "Content not displaying properly after Site import completes due to incorrect project_id information in repository tables",
    "created": 1689971154000,
    "updated": 1719886602000
  },
  {
    "id": "a028c00000yyoCgAAI",
    "name": "",
    "title": "Unable to select/deselect output steps after creating a linked tasks",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2021.4 or later",
    "primaryVer": "2021.4",
    "allVersions": [
      "2021.4"
    ],
    "reports": 0,
    "workId": "W-14442957",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yyoCgAAI",
    "summary": "After saving a liked task, users can't perform select/deselect output steps in the linked tasks due to being forced to close the dialog.Uncheck [Output] in the output steps, then the dialog is suddenly closed.Debug console in web browser shows errors.",
    "created": 1709953513000,
    "updated": 1719886594000
  },
  {
    "id": "a028c00000tISytAAG",
    "name": "",
    "title": "Site export can failed due to Violation of Foreign Key \"flow_run_spec_output_steps_flow_output_step_id_fkey\"",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2021.4.x",
    "primaryVer": "2021.4",
    "allVersions": [
      "2021.4"
    ],
    "reports": 0,
    "workId": "W-12926461",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000tISytAAG",
    "summary": "Tableau site export is failing, especially if we have assets in Tableau personal space.",
    "created": 1685604545000,
    "updated": 1719886594000
  },
  {
    "id": "a028c00000yxfNmAAI",
    "name": "",
    "title": "When opening a flow file that has a TCL data source set in the input step, a sign-in window appears",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.2.2",
    "primaryVer": "2023.2.2",
    "allVersions": [
      "2023.2.2"
    ],
    "reports": 1,
    "workId": "W-15020779",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yxfNmAAI",
    "summary": "This issue occurs after closing Tableau Prep Builder (TP) that has signed in to Tableau Cloud (TCL).Afterward, open a flow file that has a TCL data source set in the input step.In this state, a sign-in window appears.Closing the sign-in window results in being signed in to TCL.But the flow editing screen does not appear, so it is necessary to reopen the flow file from the TP menu.Note this also occurs 2023.3",
    "created": 1708563496000,
    "updated": 1719886594000
  },
  {
    "id": "a028c00000zKQvLAAW",
    "name": "",
    "title": "Invite Emails Not Being Sent To New Users Added via SSO Authentication",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.2",
    "primaryVer": "2024.2",
    "allVersions": [
      "2024.2"
    ],
    "reports": 8,
    "workId": "W-16316881",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zKQvLAAW",
    "summary": "When adding new users with single sign-on (SSO) authentication, the invite email is not being received by the new users despite the \"Enabled site invite emails\" option being checked.",
    "created": 1721973455000,
    "updated": 1756809350000
  },
  {
    "id": "a02Ka00000iIESRIA4",
    "name": "",
    "title": "Viewers are denied from accessing re-published workbooks when the datasource access is restricted",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2025.1.6",
    "primaryVer": "2025.1.6",
    "allVersions": [
      "2025.1.6"
    ],
    "reports": 2,
    "workId": "W-19360987",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000iIESRIA4",
    "summary": "Viewers who open a workbook with a published datasource with embedded password receive \"do not have permission to access datasource\" message although connect permissions for a datasource are not required in this scenario. This may happen when the workbook was republished using web-edit.",
    "created": 1755619958000,
    "updated": 1773152470000
  },
  {
    "id": "a028c00000tIO45AAG",
    "name": "",
    "title": "Scheduled flow job kept running until the job hit timeout after 24 hours",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1",
    "primaryVer": "2023.1",
    "allVersions": [
      "2023.1"
    ],
    "reports": 2,
    "workId": "W-13140498",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000tIO45AAG",
    "summary": "Scheduled flow job kept running until the job hit timeout after 24 hours",
    "created": 1685453605000,
    "updated": 1719886594000
  },
  {
    "id": "a028c00000suZ6oAAE",
    "name": "",
    "title": "JMXClient logging causes huge logs to Content Exploration service",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1.2",
    "primaryVer": "2023.1.2",
    "allVersions": [
      "2023.1.2"
    ],
    "reports": 30,
    "workId": "W-13626778",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000suZ6oAAE",
    "summary": "Following processes.output large excessive logs per day\u00a0contentexplorationcollectionswebhooksvizqlserver",
    "created": 1695376103000,
    "updated": 1747802722000
  },
  {
    "id": "a028c00000iwlanAAA",
    "name": "",
    "title": "Cannot search or filter users or groups that include Japanese characters with has the dakuten or handakuten diacritic mark",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.1.1",
    "primaryVer": "2022.1.1",
    "allVersions": [
      "2022.1.1"
    ],
    "reports": 0,
    "workId": "W-12899778",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000iwlanAAA",
    "summary": "If a user or group has a Japanese character with the dakuten or handakuten diacritic mark, you will not be able to search/filter for their name in the edit permissions dialog.Originally tracked under Tableau TFS 1422395",
    "created": 1682454990000,
    "updated": 1732203522000
  },
  {
    "id": "a028c00000tJiePAAS",
    "name": "",
    "title": "Error \"The process cannot access the file because it is being used by another process\" when trying to refresh extracts",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.3.x",
    "primaryVer": "2022.3",
    "allVersions": [
      "2022.3"
    ],
    "reports": 19,
    "workId": "W-12824663",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000tJiePAAS",
    "summary": "When use calculated fields from an extract with dynamic zone visibility or dynamic axis tittles, refresh extracts failed.",
    "created": 1688096452000,
    "updated": 1747149051000
  },
  {
    "id": "a028c00000iwTwbAAE",
    "name": "",
    "title": "Column band shading displays incorrectly",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.2.0",
    "primaryVer": "2022.2.0",
    "allVersions": [
      "2022.2.0"
    ],
    "reports": 0,
    "workId": "W-12863902",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000iwTwbAAE",
    "summary": "When viewing a workbook in the latest version of Desktop 2022.2.0, the header color is blue/teal as expected. After publishing the workbook, some header sections turn white.",
    "created": 1681843594000,
    "updated": 1719886573000
  },
  {
    "id": "a028c00000iwkglAAA",
    "name": "",
    "title": "\"No Match\" error during Identity Migration for Usernames Generated from UPN Prefixes",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.1.0",
    "primaryVer": "2022.1.0",
    "allVersions": [
      "2022.1.0"
    ],
    "reports": 0,
    "workId": "W-13074713",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000iwkglAAA",
    "summary": "When running an Identity Migration (either due to an in-place upgrade or a backup restore), some users fail during migration with \"No Match\". These users have usernames longer than 20 characters pulled from UPN prefixes.",
    "created": 1682441866000,
    "updated": 1719886594000
  },
  {
    "id": "a02Ka00000frk74IAA",
    "name": "",
    "title": "Unable to authenticate to Databricks while creating a new Virtual Connection via web authoring",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2025.1",
    "primaryVer": "2025.1",
    "allVersions": [
      "2025.1"
    ],
    "reports": 1,
    "workId": "W-18671176",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000frk74IAA",
    "summary": "\u00a0Error \"INVALID_ARGUMENT: An error occurred while communicating with Databricks\" while creating a new Virtual Connection via web authoring for Databricks hosted on private cloud (connects via Bridge).",
    "created": 1749142353000,
    "updated": 1757613191000
  },
  {
    "id": "a028c00000iwtjmAAA",
    "name": "",
    "title": "Error \"Incorrect data type real, getting expected integer type.\" Occurs immediately When Accessing Views",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2021.2.4",
    "primaryVer": "2021.2.4",
    "allVersions": [
      "2021.2.4"
    ],
    "reports": 46,
    "workId": "W-12867744",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000iwtjmAAA",
    "summary": "During view rendering an error could intermittently occur stating \"Incorrect data type real, getting expected integer type.\"Originally tracked under Tableau TFS  items 1343178.",
    "created": 1682727811000,
    "updated": 1758771451000
  },
  {
    "id": "a028c00000tIG1dAAG",
    "name": "",
    "title": "Unable to generate table in Virtual Connection using Custom SQL that has greater than (>) & less than (<) symbols used together",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.1.9",
    "primaryVer": "2022.1.9",
    "allVersions": [
      "2022.1.9"
    ],
    "reports": 0,
    "workId": "W-12926575",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000tIG1dAAG",
    "summary": "Unable to generate a table in a Virtual Connection using Custom SQL that has a greater than \">\" and a less than \"<\" symbol used together. The error would display \"UNKNOWN: TableauException: Custom SQL relation refers to a non-existent parameter\".Affects Tableau Server, Tableau Cloud.Previously tracked in TFS 1496855",
    "created": 1685110331000,
    "updated": 1719886575000
  },
  {
    "id": "a028c000010FIHgAAO",
    "name": "",
    "title": "An error occurs when \"Union mutiple table\" is selected in the input of a flow and the first file is specified by a parameter.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "All",
    "primaryVer": "",
    "allVersions": [],
    "reports": 1,
    "workId": "W-17762156",
    "url": "https://help.salesforce.com/s/issue?id=a028c000010FIHgAAO",
    "summary": "Configure the input data settings using parameters as \"<Folder Path>/<File Name>\", but when applying \"Multiple Union,\" the error \"Something went wrong and the application needs to restart.\" occurs.This error occurs when using parameters as \"<Folder Path>/<File Name>\" and applying \"Multiple Union\".",
    "created": 1739882524000,
    "updated": 1745622056000
  },
  {
    "id": "a028c00000yFbsGAAS",
    "name": "",
    "title": "Flow Job Starts At 21:00 JST Fails Intermittently In Asia Pacific - Japan Pod (prod-apnortheast-a)",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1",
    "primaryVer": "2023.1",
    "allVersions": [
      "2023.1"
    ],
    "reports": 0,
    "workId": "W-13488924",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000yFbsGAAS",
    "summary": "Flow Job Starts At 21:00 JST Fails Intermittently In Asia Pacific - Japan Pod (prod-apnortheast-a)",
    "created": 1705644891000,
    "updated": 1719886594000
  },
  {
    "id": "a028c00000ixNgsAAE",
    "name": "",
    "title": "Data details functionality in toolbar gives 401 in console for Connected Apps session",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2021.4",
    "primaryVer": "2021.4",
    "allVersions": [
      "2021.4"
    ],
    "reports": 1,
    "workId": "W-12895411",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000ixNgsAAE",
    "summary": "When attempting to view Data Details in an embedded view that has Connected Apps configured, an error may be displayed in the Data Details panel.An unexpected error occurred.",
    "created": 1683885361000,
    "updated": 1719886594000
  },
  {
    "id": "a028c00000zjAJDAA2",
    "name": "",
    "title": "Unable to find the datasource in project if there are more than 100 projects with the same name",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2024.3",
    "primaryVer": "2024.3",
    "allVersions": [
      "2024.3"
    ],
    "reports": 0,
    "workId": "W-17268300",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zjAJDAA2",
    "summary": "While running the Tabcmd 2.0 command for extract refresh and if there are more than 100 projects with the same name then tabcmd command fails with error \"IndexError: list index out of range\"",
    "created": 1732016072000,
    "updated": 1742491358000
  },
  {
    "id": "a028c00000zguz1AAA",
    "name": "",
    "title": "Unable to display embedded view with prompt user authentication on data source using Embedding API v3",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2023.3 or later",
    "primaryVer": "2023.3",
    "allVersions": [
      "2023.3"
    ],
    "reports": 1,
    "workId": "W-16663552",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000zguz1AAA",
    "summary": "When opening the embedded view, an error message is displayed and the connection authentication with the data source fails, causing a continuous loop.The issue can be reproduced using Google Chrome and Edge but not with Firefox or Safari.It does NOT happen with the views with embedded password.",
    "created": 1726047186000,
    "updated": 1733181611000
  },
  {
    "id": "a028c00000uXt7EAAS",
    "name": "",
    "title": "The value of the decimal-type field is changed to integer value after publishing the datasource by flows",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.1",
    "primaryVer": "2022.1",
    "allVersions": [
      "2022.1"
    ],
    "reports": 2,
    "workId": "W-12926232",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000uXt7EAAS",
    "summary": "The value of the decimal-type field is changed to integer value after publishing the data source by flows.",
    "created": 1694081089000,
    "updated": 1719947647000
  },
  {
    "id": "a028c00000pepyBAAQ",
    "name": "",
    "title": "After opening a view via trusted authentication and leaving it idle for 10 or more minutes, users are redirected to the login page.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.3.1",
    "primaryVer": "2022.3.1",
    "allVersions": [
      "2022.3.1"
    ],
    "reports": 25,
    "workId": "W-13149264",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000pepyBAAQ",
    "summary": "The request /vizportal/api/web/v1/refreshSession used with a trusted or restricted session will redirect to a login page rather than refreshing the session and leaving the current view open.",
    "created": 1684343329000,
    "updated": 1719886567000
  },
  {
    "id": "a028c00000tInSOAA0",
    "name": "",
    "title": "Error \"There was an error extracting tables. Try again, and then contact your administrator\u201d After Creating An Extract of The Virtual Connection",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1",
    "primaryVer": "2023.1",
    "allVersions": [
      "2023.1"
    ],
    "reports": 4,
    "workId": "W-12867621",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000tInSOAA0",
    "summary": "The following error occurs after creating an extract of a virtual connection:There was an error extracting tables. Try again, and then contact your administrator.If the site administrator has enabled refresh failure emails, users will receive the following error message:Error message\u00a0\u00a0An error occurred while communicating with the data source.",
    "created": 1686566746000,
    "updated": 1719886589000
  },
  {
    "id": "a028c00000tK9POAA0",
    "name": "",
    "title": "The workbooks and data sources which use Managed Keychain turn to be inaccessible after deleting unused managed keychain records.",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2021.3",
    "primaryVer": "2021.3",
    "allVersions": [
      "2021.3"
    ],
    "reports": 0,
    "workId": "W-13647718",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000tK9POAA0",
    "summary": "After deleting unused managed keychain from \"Delete Unused Managed Keychain Records...\" button, the workbooks and data sources which use Managed Keychain turn to be inaccessible\u00a0The following errors may be shown up when accessing the workbook:Error1:Unable to proceed because of an error from the data source.Error2:Forbidden ActionYou are not authorized to perform this action. (22)",
    "created": 1688437707000,
    "updated": 1719886594000
  },
  {
    "id": "a028c00000iw4ViAAI",
    "name": "",
    "title": "Virtual Connection extract refresh times out",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.3.1",
    "primaryVer": "2022.3.1",
    "allVersions": [
      "2022.3.1"
    ],
    "reports": 2,
    "workId": "W-12903001",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000iw4ViAAI",
    "summary": "Virtual Connection extract refresh jobs may intermittently timeout at 4 hours, even though a successful refresh takes much less time.Originally tracked under Tableau Issue ID 1499423",
    "created": 1680803557000,
    "updated": 1719886593000
  },
  {
    "id": "a028c00000peuLQAAY",
    "name": "",
    "title": "With Web Edit, when you edit content and select a column name that includes a hyphen in the \"identify new rows using column\" drop-down list in the inc",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1.0",
    "primaryVer": "2023.1.0",
    "allVersions": [
      "2023.1.0"
    ],
    "reports": 0,
    "workId": "W-12926567",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000peuLQAAY",
    "summary": "Also affects Tableau CloudWith Web Edit, when you edit content and select a column name that includes a hyphen in the \"identify new rows using column\" drop-down list in the incremental refresh settings, the extract fails and an error will display.\ufeff",
    "created": 1684529145000,
    "updated": 1719886571000
  },
  {
    "id": "a028c00000tIrZqAAK",
    "name": "",
    "title": "External assets not being removed by BG job: \"One-time job re-canonicalize existing database/table assets after a canonicalization logic change\"",
    "status": "Closed",
    "statusType": "closed",
    "foundIn": "2022.3.3",
    "primaryVer": "2022.3.3",
    "allVersions": [
      "2022.3.3"
    ],
    "reports": 2,
    "workId": "W-13517421",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000tIrZqAAK",
    "summary": "When running the background job to remove external assets (One-time job re-canonicalize existing database/table assets after a canonicalization logic change) the job fails to remove any assets that do not have any workbooks or datasources associated with them. ",
    "created": 1686664155000,
    "updated": 1739554964000
  },
  {
    "id": "a028c00000iwTx1AAE",
    "name": "",
    "title": "Column and Row Border Thickness Differs between Header and Pane",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2021.3.8",
    "primaryVer": "2021.3.8",
    "allVersions": [
      "2021.3.8"
    ],
    "reports": 1,
    "workId": "W-12867721",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000iwTx1AAE",
    "summary": "When setting the same border settings for rows or columns in a worksheet, the thickness renders differently for headers versus panes below the headers.",
    "created": 1681844662000,
    "updated": 1719886584000
  },
  {
    "id": "a028c00000tIjWXAA0",
    "name": "",
    "title": "The background task \"Remove Garbage Repository Records\" might not complete with the exception: \"could not extract ResultSet\"",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "",
    "primaryVer": "",
    "allVersions": [],
    "reports": 7,
    "workId": "W-13561680",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000tIjWXAA0",
    "summary": "The background task \"Remove Garbage Repository Records\" might not complete with the exception: \"could not extract ResultSet\" which stops the background task prematurely.The behaviour could lead to an excess of garbage records within the Postgres repository.",
    "created": 1686316948000,
    "updated": 1719886594000
  },
  {
    "id": "a028c00000tIFxAAAW",
    "name": "",
    "title": "Not able to export a specific sheet using JavaScript showExportDataDialog()",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2022.2.0",
    "primaryVer": "2022.2.0",
    "allVersions": [
      "2022.2.0"
    ],
    "reports": 0,
    "workId": "W-12968872",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000tIFxAAAW",
    "summary": "It is not possible to export a specific sheet using the JavaScript showExportDataDialog function starting with version 2022.1, as JavaScript API - showExportDataDialog() always exports the currently active sheet no matter what the worksheetInDashboard parameter is specified.Previously tracked in TFS 1431798",
    "created": 1685107597000,
    "updated": 1719886570000
  },
  {
    "id": "a028c00000uXUWvAAO",
    "name": "",
    "title": "Google Big Query - JDBC Connector - Slow Extract Performance",
    "status": "Working as Expected",
    "statusType": "open",
    "foundIn": "2023.1+",
    "primaryVer": "2023.1",
    "allVersions": [
      "2023.1"
    ],
    "reports": 4,
    "workId": "W-13159940",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000uXUWvAAO",
    "summary": "Beginning with the inclusion of the Google Big Query (GBQ) JDBC Connector in 2023.1+, users have reported poor performance when running extracts from the GBQ data source, in some cases up to 20x slower than baseline.This may affect Tableau Desktop, Tableau Server, Tableau Cloud, and Tableau Prep which all allow use of the GBQ JDBC driver.",
    "created": 1693401920000,
    "updated": 1724952398000
  },
  {
    "id": "a028c00000uYVxYAAW",
    "name": "",
    "title": "User attribute functions are returning \"null\" when sheets are reloaded using the Embedding API",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2023.1.0",
    "primaryVer": "2023.1.0",
    "allVersions": [
      "2023.1.0"
    ],
    "reports": 0,
    "workId": "W-13114780",
    "url": "https://help.salesforce.com/s/issue?id=a028c00000uYVxYAAW",
    "summary": "User attribute functions are returning \"null\" values when sheets are reloaded using the Embedding API. This may be especially prevalent when switching back-and-forth between multiple sheets in a workbook or views.",
    "created": 1689340589000,
    "updated": 1719886594000
  }
];

const KI_CURRENT_VERSION = "2025.3.8";
const KI_TARGET_VERSIONS = ["2025.3.11", "2026.2.4", "2026.3"];
const KI_MILESTONES = [{"role": "target", "version": "2025.3.11"}, {"role": "stable", "version": "2026.2.4"}, {"role": "latest", "version": "2026.3"}];
const KI_ENV_NOTES = "Update with your environment details.";
const KI_GENERATED = "2026-10-26T21:00:41Z";
