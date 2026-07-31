// Known Issues data — sourced from Salesforce Help (help.salesforce.com/s/issues)
// 197 Tableau Server known issues (filtered to 2025.1.7+ and open issues from 2025.1 series)

const KNOWN_ISSUES = [
  {
    "id": "a02Ka00000mHF0xIAG",
    "name": "",
    "title": "Users Intermittently Receiving Duplicate Email Subscriptions",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "Tableau Server 2025.1.6",
    "primaryVer": "2025.1.6",
    "allVersions": [
      "2025.1.6"
    ],
    "reports": 6,
    "workId": "W-23006490",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mHF0xIAG",
    "summary": "When subscribed to a subscription that is scheduled to run after an extract refresh occurs, intermittently some users are receiving duplicate emails even though the refresh only occurred once.",
    "created": 1781623372000,
    "updated": 1785376163000
  },
  {
    "id": "a02g7000006iTNpAAM",
    "name": "",
    "title": "Tabcmd (bundled with Tableau Server installation package) throws HTTP 500 error when exporting views to PDF",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2026.2.0",
    "primaryVer": "2026.2.0",
    "allVersions": [
      "2026.2.0"
    ],
    "reports": 0,
    "workId": "W-23253714",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000006iTNpAAM",
    "summary": "Users are experiencing an export failure when using the tabcmd utility that comes bundled with Tableau Server. Specifically, when executing the command to export a view as a full PDF (--fullpdf), the command fails and throws an HTTP 500 error: &quot;Unexpected response from the server: 500 null&quot",
    "created": 1785405912000,
    "updated": 1785406100000
  },
  {
    "id": "a02g7000006fizJAAQ",
    "name": "",
    "title": "Extract refresh failing intermittently in Tableau Server \"Internal Error - An unexpected error occurred and the operation could not be completed\"",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2025.1.12",
    "primaryVer": "2025.1.12",
    "allVersions": [
      "2025.1.12"
    ],
    "reports": 0,
    "workId": "W-23568826",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000006fizJAAQ",
    "summary": "Tableau Server extract refreshes are intermittently failing due to an unexpected internal runtime error.Behavior: Extract refresh tasks fail to complete on a sporadic, non-continuous basis.Error Returned: com.tableausoftware.server.status.reporting.TableauRuntimeException: Internal Error - An unexpe",
    "created": 1785210416000,
    "updated": 1785213910000
  },
  {
    "id": "a02g7000006hhavAAA",
    "name": "",
    "title": "[Google Workspace Addon] Saving site config for Tableau Server not working",
    "status": "In Review",
    "statusType": "open",
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
    "updated": 1785351022000
  },
  {
    "id": "a02Ka00000kWJqUIAW",
    "name": "",
    "title": "Tableau Server: Extract refresh fails but no notification is received",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2025.1.5",
    "primaryVer": "2025.1.5",
    "allVersions": [
      "2025.1.5"
    ],
    "reports": 3,
    "workId": "W-20082278",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000kWJqUIAW",
    "summary": "Refresh of extract fails, the notification for the failure is not received. The notification is not sent for Oracle, PostgreSQL and Snowfake refreshes.",
    "created": 1762761624000,
    "updated": 1785248726000
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
    "reports": 1,
    "workId": "W-23076608",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000005faRFAAY",
    "summary": "In Tableau Desktop, borders formatted between row-header columns display correctly. However, after the workbook is published to Tableau Cloud or Tableau Server 2026.2, the borders in the header row are no longer visible.",
    "created": 1782758005000,
    "updated": 1785232031000
  },
  {
    "id": "a02g7000005oP1xAAE",
    "name": "",
    "title": "Set Actions Behave Inconsistently on Tableau Server/Cloud when They are Driven by a Filter Action",
    "status": "In Review",
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
    "updated": 1784559666000
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
    "reports": 1,
    "workId": "W-20588421",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mm1KwIAI",
    "summary": "In Tableau Server 2025.3, the Messaging Service is no longer visible in the Tableau Services Manager (TSM) Web UI.Specifically:The Messaging Service is missing from the Status page.The Messaging Service is missing from the Configuration page.This service was previously visible in Tableau Server 2025",
    "created": 1773207734000,
    "updated": 1783431406000
  },
  {
    "id": "a02Ka00000mTJjrIAG",
    "name": "",
    "title": "Extract refresh fails with error \"Couldn't find a key during dictionary lookup\" after upgrading Tableau Server from 2023.1.7 to 2025.1.8",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2025.1.8",
    "primaryVer": "2025.1.8",
    "allVersions": [
      "2025.1.8"
    ],
    "reports": 0,
    "workId": "W-21421879",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mTJjrIAG",
    "summary": "Extract refresh fails with error &quot;Couldn&#39;t find a key during dictionary lookup&quot; after upgrading  Tableau Server from 2023.1.7 to 2025.1.8 for Hyper files originally created in version 2023.1.7.The issue observed in 2025.1.8 and newer.",
    "created": 1772533522000,
    "updated": 1784818975000
  },
  {
    "id": "a02g7000006gU9VAAU",
    "name": "",
    "title": "Live Published Data Sources connected to Sybase IQ with ISO_BINENG collation in Tableau Server results in a removed duplicate members from group error",
    "status": "In Review",
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
    "summary": "When a published data source is selected in Tableau Desktop\u2019s Search for Data dialog and Connect is clicked for a live connection to the data source, the following error is returned from Tableau Server:Unable to complete actionThe connection to the data source might have been lost.Error Code: AB9D5A",
    "created": 1785263164000,
    "updated": 1785264762000
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
    "summary": "On Tableau Server, data sources that have been marked as Certified in Tableau Catalog may not appear under the Certified filter on the Explore (Search &amp; Browse) page until a manual search re-index is performed.",
    "created": 1780918618000,
    "updated": 1784864523000
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
    "summary": "When using Tableau Agent (web authoring) on Tableau Server with a large dataset/workbook, the following error is displayed to the user:&quot;Something went wrong. Try again.&quot;contentexploration logs show the following underlying error &quot;Requested &lt;x&gt; tokens, max 300000 tokens per reque",
    "created": 1780016146000,
    "updated": 1781698470000
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
    "id": "a02g7000005enf3AAA",
    "name": "",
    "title": "Unable to load histogram details for a Virtual Connection table in Tableau Cloud and Tableau Server",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2026.2",
    "primaryVer": "2026.2",
    "allVersions": [
      "2026.2"
    ],
    "reports": 1,
    "workId": "W-23187899",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000005enf3AAA",
    "summary": "When users click the &quot;Show profile pane&quot; icon\u00a0to load histogram information in a Virtual Connection (VConn) Table Details, the operation fails with the generic error: &quot;An error has occurred. Please try again.&quot;\u00a0",
    "created": 1782714387000,
    "updated": 1782780548000
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
    "summary": "Intermittent alerts may report File Store as down on certain nodes. This can occur due to a brief loss of connection to ZooKeeper during leader re-election, causing File Store to temporarily enter a read-only state. Although the event is short-lived and does not indicate a service failure, a DOWN al",
    "created": 1777441608000,
    "updated": 1782942525000
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
    "summary": "Incorrect Days Are Displayed for a Monthly Schedule on the Subscribe Dialog When Tableau Server Setting \u201cschedules.Display_schedule_description_as_name&quot; Is True",
    "created": 1768546410000,
    "updated": 1773777713000
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
    "reports": 33,
    "workId": "W-19119276",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000hH3oJIAS",
    "summary": "When attempting to run a flow in Tableau Cloud, the following error occurs intermittently: [SQLSTATE:08001] Could not connect to the Hyper server: Connection refused Is the server running on host \\&quot;localhost\\&quot; (127.0.0.1) and accepting TCP/IP connections on port 7483? Something went wrong.",
    "created": 1753291255000,
    "updated": 1784078949000
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
    "reports": 3,
    "workId": "W-20021641",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000kTvAEIA0",
    "summary": "Group sync with OpenLDAP removes all users when wgserver.domain.ldap.range_retrieval is enabled on Tableau Server after upgrade to 2025.1.x",
    "created": 1761246145000,
    "updated": 1761800671000
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
    "reports": 69,
    "workId": "W-21181921",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mQpKGIA0",
    "summary": "After upgrading Tableau Server to version 2025.3.0 or above , users encounter an error when accessing workbooks using context filter and connected to published data sources. There are multiple crashes reported for vizdataservices and vizqlserver process.",
    "created": 1770368064000,
    "updated": 1781700240000
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
    "id": "a02Ka00000mGsSaIAK",
    "name": "",
    "title": "Error \"Restricted data type attribute violation\" Displays Connecting to MS SQL Server Using Stored Procedures",
    "status": "In Review",
    "statusType": "open",
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
    "updated": 1783904266000
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
    "summary": "On Tableau Server 2025.3, users who sign in using Trusted Authentication may experience an error when attempting to switch between different sites.The switch to a different site fails unexpectedly, and a NullPointerException error is returned.This issue affects environments with multiple sites where",
    "created": 1781084755000,
    "updated": 1785430288000
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
    "summary": "Snowflake authentication updates are not applied to Tableau Server when switching from user/password to PAT (Snowflake&#39;s Programmatic Access Token) authentication.This issue has been confirmed in Tableau Server 2024.2 and 2025.1, but it DOES NOT occur in Tableau Server 2025.3.3 and later.",
    "created": 1774402882000,
    "updated": 1782421040000
  },
  {
    "id": "a02Ka00000mHGL2IAO",
    "name": "",
    "title": "Tableau Desktop Crashes Silently on Apple Silicon Mac When Publishing to Tableau Cloud",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "Tableau Desktop 2026.1 and Tableau Desktop 2026.2",
    "primaryVer": "2026.1",
    "allVersions": [
      "2026.1",
      "2026.2"
    ],
    "reports": 8,
    "workId": "W-22247390",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mHGL2IAO",
    "summary": "Users running Tableau Desktop on Mac devices with Apple Silicon processors (M-series chips) may experience a silent crash \u2014 with no error dialog \u2014 when attempting to publish a workbook to Tableau Cloud or Tableau Server. The crash occurs during the publish operation and results in Tableau Desktop cl",
    "created": 1781706233000,
    "updated": 1785319390000
  },
  {
    "id": "a02Ka00000kTsjhIAC",
    "name": "",
    "title": "In Tableau Server 2025.1, Intermittent Blank Total Values in Crosstab CSV/Excel Export",
    "status": "Working as Expected",
    "statusType": "closed",
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
    "id": "a02Ka00000mFY1EIAW",
    "name": "",
    "title": "Error: \"Error Publishing Flow to Tableau Server\" with Published Data Source (PDS) Input, Aggregation, and LOD in Prep Builder",
    "status": "Solution Deploying",
    "statusType": "fixed",
    "foundIn": "2026.1.0",
    "primaryVer": "2026.1.0",
    "allVersions": [
      "2026.1.0"
    ],
    "reports": 11,
    "workId": "W-22035696",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mFY1EIAW",
    "summary": "When publishing a flow from Tableau Prep Builder 2026.1.0 to Tableau Cloud or Tableau Server, the error\u00a0&quot;Error publishing flow to Tableau Server&quot;\u00a0may be displayed if the flow meets all of the following conditions:The flow uses a PDS as an input.The flow includes an\u00a0Aggregation\u00a0step.The flo",
    "created": 1778466033000,
    "updated": 1784911530000
  },
  {
    "id": "a02Ka00000nqcKFIAY",
    "name": "",
    "title": "Tableau Prep Flows Failing in Tableau Server With [SQLSTATE:42P21]",
    "status": "Solution Scheduled",
    "statusType": "fixed",
    "foundIn": "2026.2",
    "primaryVer": "2026.2",
    "allVersions": [
      "2026.2"
    ],
    "reports": 1,
    "workId": "W-22026755",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000nqcKFIAY",
    "summary": "When a Tableau Prep Flow contains input nodes that were created across different versions of Tableau Prep Builder and published to Tableau Server the Flow will fail with <strong style=\"background-color: rgb(255, 255, 25",
    "created": 1782409347000,
    "updated": 1782872879000
  },
  {
    "id": "a02g7000005s7o1AAA",
    "name": "",
    "title": "Error Code: D2E8DA72 when loading workbooks with unused extensions in Tableau Desktop and in web authoring",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2026.2.0",
    "primaryVer": "2026.2.0",
    "allVersions": [
      "2026.2.0"
    ],
    "reports": 2,
    "workId": "W-23291479",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000005s7o1AAA",
    "summary": "In Tableau Desktop 2026.2.0 and web authoring in Tableau Cloud and Tableau Server 2026.2.0, workbooks can be saved with one or more unused extensions. These unused extension are not tied to any worksheet, dashboard or storypoints.\u00a0When opening workbooks that contain unused extensions in Tableau Desk",
    "created": 1783536607000,
    "updated": 1784549635000
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
    "summary": "This Known Issue is related to Known Issue W-20515284When attempting to extract tables for a Virtual Connection, the following issue occurs: &quot;No entity found for query&quot;.",
    "created": 1778120676000,
    "updated": 1785429573000
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
    "reports": 3,
    "workId": "W-21086572",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000moMhVIAU",
    "summary": "Known Issue W-21086572 is tracking changes made to Tableau Server logging to improve reporting and facilitate investigations into the underlying cause of this error. The changes tracked in this Known Issue are not expected to resolve this error. If you encounter the behavior described in this Known ",
    "created": 1777547955000,
    "updated": 1781783709000
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
    "updated": 1785362243000
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
    "reports": 14,
    "workId": "W-23178369",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000nrECBIA2",
    "summary": "After publishing a flow (or workbook) to Tableau Cloud or Tableau Server, the user is redirected to the publish result page using a trusted ticket URL.This results in a 404 Not Found error. The publish itself succeeds, but users are not shown confirmation and cannot view the published content.This i",
    "created": 1782505228000,
    "updated": 1785171233000
  },
  {
    "id": "a02Ka00000mGbTHIA0",
    "name": "",
    "title": "Tableau Server: Extract refresh fails but no notification is received",
    "status": "Solution Scheduled",
    "statusType": "fixed",
    "foundIn": "2025.1.11",
    "primaryVer": "2025.1.11",
    "allVersions": [
      "2025.1.11"
    ],
    "reports": 1,
    "workId": "W-22566605",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mGbTHIA0",
    "summary": "Refresh of extract fails, the notification for the failure is not received and appears to not have been sent.",
    "created": 1779717190000,
    "updated": 1785257910000
  },
  {
    "id": "a02g7000005eoWHAAY",
    "name": "",
    "title": "Vertical text in dashboard headers renders horizontally in Tableau Cloud and Tableau Server",
    "status": "Solution Scheduled",
    "statusType": "fixed",
    "foundIn": "2026.2",
    "primaryVer": "2026.2",
    "allVersions": [
      "2026.2"
    ],
    "reports": 3,
    "workId": "W-23168850",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000005eoWHAAY",
    "summary": "Vertical text configured in dashboard headers is rendering horizontally instead of vertically in Tableau Cloud. This causes text overlap and significantly impacts readability. The issue is isolated to client-side rendering. ",
    "created": 1782715535000,
    "updated": 1785272255000
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
    "summary": "Under certain conditions, the VizDataService (VDS) process on Tableau Server crashes at a QualifiedName equality comparison in tabcoredata.dll if you set VDS feature to true, which can result in repeated process failures and excessive crash dump files accumulating on disk.Users may experience interm",
    "created": 1780057953000,
    "updated": 1784618295000
  },
  {
    "id": "a02g7000006ZjgLAAS",
    "name": "",
    "title": "VizDataService May Generate Crashdumps During Tableau Server Start, Stop, or Restart",
    "status": "Solution in Progress",
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
    "updated": 1784884563000
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
    "reports": 2,
    "workId": "W-21934202",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mo6HqIAI",
    "summary": "Key Pair credentials can be added to Manage Saved Credentials for Data Connections with HTTP and successfully validate but will not appear in drop down options for selecting a data source",
    "created": 1776693416000,
    "updated": 1785208725000
  },
  {
    "id": "a02Ka00000mGnARIA0",
    "name": "",
    "title": "\"Get Groups for User\" REST API Returns Incorrect totalAvailable Count After Upgrading to Tableau Server 2025.3.4",
    "status": "Solution in Progress",
    "statusType": "open",
    "foundIn": "2025.3.4",
    "primaryVer": "2025.3.4",
    "allVersions": [
      "2025.3.4"
    ],
    "reports": 1,
    "workId": "W-22709702",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mGnARIA0",
    "summary": "The REST API endpoint GET /api/{version}/sites/{site-id}/users/{user-luid}/groups returns a totalAvailable count that is greater than the number of group entries in the response body when the group_users table contains duplicate (site_id, user_id, group_id) rows. This breaks client pagination logic ",
    "created": 1780078212000,
    "updated": 1785374362000
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
    "summary": "After upgrading to Tableau Server 2025.3.1, Snowflake live connections and extract refreshes using embedded username and password credentials may fail with the error: &quot;Role &#39;{ROLE NAME}&#39; specified in the connect string is not granted to this user. Contact your local system administrator",
    "created": 1765923507000,
    "updated": 1783487056000
  },
  {
    "id": "a02Ka00000mGNtRIAW",
    "name": "",
    "title": "Tableau Server: Inconsistent matching results when using global quick search dropdown",
    "status": "Solution Scheduled",
    "statusType": "fixed",
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
    "id": "a02Ka00000mHI6NIAW",
    "name": "",
    "title": "Process Status icons not displaying on the Tableau Server Process Status page",
    "status": "Solution Scheduled",
    "statusType": "fixed",
    "foundIn": "2026.2",
    "primaryVer": "2026.2",
    "allVersions": [
      "2026.2"
    ],
    "reports": 7,
    "workId": "W-22552638",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mHI6NIAW",
    "summary": "On Tableau Server 2026.2, the Process status icons are not displaying",
    "created": 1781874268000,
    "updated": 1784812323000
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
    "reports": 13,
    "workId": "W-20976804",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mRhrXIAS",
    "summary": "Even after having the valid Data Management License and all steps mentioned for enabling catalog are completed on Tableau Server, Lineage and adding data classification from External Assets page is greyed out on Tableau Server version 2025.3.1 and above.",
    "created": 1771394798000,
    "updated": 1782908257000
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
    "reports": 1,
    "workId": "W-22157138",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mo8AOIAY",
    "summary": "When trying to configure a custom SSL certificate for the TSM ControllerCommand: tsm security custom-tsm-ssl enable --key-file C:\\Certs\\tableau2026.key --cert-file C:\\Certs\\tableau2026CLI.crtThe following error might occur:ERROR com.tableausoftware.tabadmin.webapp.asyncjobs.JobStepRunner - Running s",
    "created": 1776845448000,
    "updated": 1784756023000
  },
  {
    "id": "a02g7000005fPxFAAU",
    "name": "",
    "title": "Editing Published Redshift Data Sources using Oauth and Tableau Bridge Return \"This server violates the IP allowlist/blocklist restrictions.\"",
    "status": "Solution in Progress",
    "statusType": "open",
    "foundIn": "2026.2",
    "primaryVer": "2026.2",
    "allVersions": [
      "2026.2"
    ],
    "reports": 1,
    "workId": "W-23026420",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000005fPxFAAU",
    "summary": "When using the recently released feature of web editing from Tableau Cloud for data sources using Tableau Bridge, there is an error when using Redshift data sources using OAuth authentication:This server violates the IP allowlist/blocklist restrictions.",
    "created": 1782749603000,
    "updated": 1784829726000
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
    "id": "a02g7000006hm4LAAQ",
    "name": "",
    "title": "When using keyboard navigation in a cross tab workbook, users may be unable to use Tab, Enter, or Spacebar keys to navigate the workbook.",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2025.1.8",
    "primaryVer": "2025.1.8",
    "allVersions": [
      "2025.1.8"
    ],
    "reports": 0,
    "workId": "W-23576102",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000006hm4LAAQ",
    "summary": "After applying accessibility changes to an existing workbook such as font size, color, etc. and republishing to Tableau Server, users may not be able to use keyboard navigation to reach cells or rows in a workbook containing a cross-tab table. This behavior may be specific to workbooks containing 3 ",
    "created": 1785355911000,
    "updated": 1785371058000
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
    "summary": "When a pending Tableau Flow job is cancelled, its &quot;Run Start&quot; time remains empty. As a result when the &quot;Run History&quot; tab is sorted by &quot;Run Start&quot; (which is the default), these cancelled jobs are always displayed at the top of the list.",
    "created": 1762449099000,
    "updated": 1785170303000
  },
  {
    "id": "a02Ka00000moCyyIAE",
    "name": "",
    "title": "When a Tableau Bridge Live Query exceeds 15 minutes, retry attempts are made resulting in duplicate concurrent queries sent to SQL Server.",
    "status": "Solution Scheduled",
    "statusType": "fixed",
    "foundIn": "2025.3.0",
    "primaryVer": "2025.3.0",
    "allVersions": [
      "2025.3.0"
    ],
    "reports": 4,
    "workId": "W-22052867",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000moCyyIAE",
    "summary": "When a Tableau Bridge Live Query exceeds 15 minutes, retry attempts are made resulting in duplicate concurrent queries sent to SQL Server.There may be situations where the queries fail to complete resulting in the extract timing out and the job will fail with the error &quot;Malformed response from ",
    "created": 1777042460000,
    "updated": 1784619255000
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
    "summary": "Flow execution on Tableau Cloud, or Tableau Prep Builder 2025.2.1+  and Tableau Server 2024.2.13 are failing due to &quot;System error: null&quot;.However, the same flow runs without issue on Tableau Prep Builder 2025.2.0 or old",
    "created": 1757896003000,
    "updated": 1784818371000
  },
  {
    "id": "a02Ka00000mGGGtIAO",
    "name": "",
    "title": "The site selection dropdown is displayed when login to Tableau Server from Tableau Desktop even though only a single site is configured",
    "status": "Solution in Progress",
    "statusType": "open",
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
    "summary": "When logging into Tableau Server from Tableau Desktop using the external browser authentication flow, the site selection dropdown (site picker) is displayed after successful authentication \u2014 even when the user is a member of only a single site.The site picker only appears when the user already has a",
    "created": 1778834074000,
    "updated": 1784741509000
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
    "summary": "In Tableau Desktop version 2025.3, the Identity Provider (IdP) authentication page fails to render the username input field. As a result, users experience authentication failures when attempting to sign in to Tableau Server from Tableau Desktop versions 2025.3 and above.This behavior also prevents s",
    "created": 1770276774000,
    "updated": 1784104119000
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
    "reports": 2,
    "workId": "W-22717573",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mHGrhIAG",
    "summary": "When running a flow containing multiple input steps connecting to different Hyper extract sources, the flow runs significantly slow on Tableau Server/Cloud Prep Conductor than it runs when executed in Tableau Prep Builder.",
    "created": 1781712431000,
    "updated": 1784846369000
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
    "summary": "When using the &quot;GET /api/api-version/sites/site-luid/virtualconnections&quot; REST API call to return a list of available virtual connection names and IDs in Tableau Cloud the LUID for the site is returned rather than the expected server URL format.",
    "created": 1761580923000,
    "updated": 1785167500000
  },
  {
    "id": "a02Ka00000mn98OIAQ",
    "name": "",
    "title": "When attempting to edit an older data source's connection on Tableau Server, the connection test succeeds, but saving any changes results in an error",
    "status": "Solution Scheduled",
    "statusType": "fixed",
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
    "summary": "When attempting to edit an older data source&#39;s connection on Tableau Server, the connection test succeeds, but saving any changes results in an error popup: &quot;An unexpected error occurred&quot;.",
    "created": 1775588883000,
    "updated": 1785168014000
  },
  {
    "id": "a02Ka00000mH7AjIAK",
    "name": "",
    "title": "When viewing dashboards with tiled worksheets in Tableau Server or Tableau Cloud, thin colored lines may appear between worksheets",
    "status": "Solution in Progress",
    "statusType": "open",
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
    "updated": 1784662426000
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
    "summary": "After upgrading Tableau Server to 2025.3.5+, published Amazon S3 data sources fail to refresh with a &quot;Bad Taco&quot; error message.",
    "created": 1779994838000,
    "updated": 1784621547000
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
    "summary": "When a Flow in Tableau Prep Builder is configured with &quot;Save Output to File&quot; and the output type is set to Hyper, publishing the Flow to Tableau Server 2025.3.x causes two UI issues in the Connections tab:The Output Name is incorrectly shown as Extract.hyper instead of the user-defined nam",
    "created": 1776760493000,
    "updated": 1784491596000
  },
  {
    "id": "a02Ka00000mGu3cIAC",
    "name": "",
    "title": "Tableau Prep Flow Execution Causes High Load on RDBMS Due to Query Pushdown Optimization in Tableau Prep Builder / Tableau Server",
    "status": "Solution in Progress",
    "statusType": "open",
    "foundIn": "2025.1.10",
    "primaryVer": "2025.1.10",
    "allVersions": [
      "2025.1.10"
    ],
    "reports": 0,
    "workId": "W-22130496",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mGu3cIAC",
    "summary": "Under specific flow configurations, the query pushdown optimization mechanism in Tableau Prep Engine (Tableau Prep Conductor and Tableau Prep Builder) generates a disproportionately large number of queries against the connected Relational Database Management System (RDBMS). This overwhelms the datab",
    "created": 1780517680000,
    "updated": 1784869510000
  },
  {
    "id": "a02Ka00000mnAAaIAM",
    "name": "",
    "title": "BentonSans no longer rendering server-side in Tableau Cloud including PDF export",
    "status": "Solution Scheduled",
    "statusType": "fixed",
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
    "id": "a02g7000006VzdFAAS",
    "name": "",
    "title": "AD Groups with Distinguished Names Containing Special Characters are Not Syncing/Importing Users Correctly",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2026.2.0",
    "primaryVer": "2026.2.0",
    "allVersions": [
      "2026.2.0"
    ],
    "reports": 3,
    "workId": "W-23529482",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000006VzdFAAS",
    "summary": "For groups containing members with Distinguished Names containing special characters, such as &#39;,&#39; or &#39;*&#39;, \\users in those AD groups are not getting added or getting deleted after a sync of the group is performed, starting in version 2026.2.0. New groups get added to the Tableau Serve",
    "created": 1784764197000,
    "updated": 1785244108000
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
    "id": "a02Ka00000mH5pFIAS",
    "name": "",
    "title": "Tableau Cloud / Server : Flow Image Doesn't Appear in Flow's Overview Tab",
    "status": "Solution Scheduled",
    "statusType": "fixed",
    "foundIn": "2026.2.0",
    "primaryVer": "2026.2.0",
    "allVersions": [
      "2026.2.0"
    ],
    "reports": 6,
    "workId": "W-22067276",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mH5pFIAS",
    "summary": "When publishing flows to Tableau Cloud or Tableau Server, the flow image may fail to capture. As a result, the image is sometimes missing in the UI, displaying the message &quot;Flow image unavailable&quot; instead. The flow itself still appears fine when opened it in Prep Web Authoring. This issue ",
    "created": 1781227845000,
    "updated": 1782832072000
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
    "summary": "In Tableau Cloud the error &quot;An unexpected error occurred. If you continue to receive this error please contact your Tableau Server Administrator.&quot; is observed when opening a workbook",
    "created": 1757485840000,
    "updated": 1784273038000
  },
  {
    "id": "a02Ka00000mHEU3IAO",
    "name": "",
    "title": "Intermittent but increasingly frequent failures across multiple Tableau Prep flows on Tableau Cloud",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2026.1.5",
    "primaryVer": "2026.1.5",
    "allVersions": [
      "2026.1.5"
    ],
    "reports": 1,
    "workId": "W-22922005",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mHEU3IAO",
    "summary": "Flow job fails due to pod termination or data server restart after flowprocessor consumed too much memory.",
    "created": 1781614886000,
    "updated": 1782752449000
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
    "summary": "When a Tableau Server or Site Administrator attempts to make changes to another user&#39;s account settings, the changes are actually being applied to the Admin&#39;s My Account Settings rather than the other user&#39;s account settings. This occurs on both Tableau Server and Tableau Cloud.",
    "created": 1762298184000,
    "updated": 1784685950000
  },
  {
    "id": "a02Ka00000mnFu1IAE",
    "name": "",
    "title": "Salesforce OAuth \u201cTest Connection\u201d works on the initial attempt but reliably fails on all subsequent attempts in Tableau Server 2025.3.x.",
    "status": "Solution Scheduled",
    "statusType": "fixed",
    "foundIn": "2025.3.1",
    "primaryVer": "2025.3.1",
    "allVersions": [
      "2025.3.1"
    ],
    "reports": 3,
    "workId": "W-21976360",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mnFu1IAE",
    "summary": "The Salesforce OAuth \u201cTest Connection\u201d process completes successfully on the first attempt, indicating that the initial authentication flow and token exchange are functioning as expected. However, all subsequent connection tests consistently fail, returning a TokenResponseException with the error in",
    "created": 1776056482000,
    "updated": 1784150922000
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
    "id": "a02Ka00000mm25uIAA",
    "name": "",
    "title": "Emails sent via Tableau Cloud or Server shared content are missing the Tableau logo",
    "status": "Solution Scheduled",
    "statusType": "fixed",
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
    "summary": "When creating a Data-driven alert on Tableau Server, we get the error &quot;Failed to create an alert&quot; if thousands separator that does not match the server locale",
    "created": 1759303370000,
    "updated": 1781194042000
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
    "summary": "Error &quot;Internal Server Error Code: 500000&quot; when migrating content via CMT on Tableau Cloud",
    "created": 1770032351000,
    "updated": 1781186227000
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
    "summary": "When attempting to publish a workbook via Tableau Desktop to either Tableau Server or Tableau Cloud, the following error might occur:Unable to complete actionAn error occurred when publishing the workbookError Code: 00BF554AInternal Error - An unexpected error occurred and the operation could not be",
    "created": 1755273311000,
    "updated": 1764974758000
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
    "reports": 7,
    "workId": "W-19311868",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000iHhNAIA0",
    "summary": "Tableau Prep Builder 2025.1.4 or later fails to launch on Windows 10, Windows Server 2016, and 2019. The Windows Task Manager shows that the Tableau Prep Builder.exe is running, but the splash screen and UI do not appear.",
    "created": 1755484618000,
    "updated": 1781531490000
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
    "summary": "After upgrading Tableau Server from 2025.1.x to 2025.3.2 and later, Tableau Prep flows that use a TabPy step with an SSL-secured connection fail at runtime with an SSL initialization error. The same issue is also reproducible directly in Prep Builder, confirming it is not isolated to scheduled or se",
    "created": 1775749641000,
    "updated": 1780323538000
  },
  {
    "id": "a02g7000006fItaAAE",
    "name": "",
    "title": "Audit events missing for implicit site-user creation (admin promotion) and site-level user deletion",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2026.2.1",
    "primaryVer": "2026.2.1",
    "allVersions": [
      "2026.2.1"
    ],
    "reports": 0,
    "workId": "W-23569523",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000006fItaAAE",
    "summary": "Inconsistent logging of user creation and deletion events in the Tableau Server Repository historical tables.",
    "created": 1785179155000,
    "updated": 1785182567000
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
    "summary": "Attempting to sign into Tableau Server after configuring SiteSAML with ADFS causes the following error:&quot;MSIS0009: The &lt;samlp:Extensions&gt; element was encountered. To accept extensions, you must extend the SamlProtocolSerializer&quot;",
    "created": 1762333890000,
    "updated": 1771871820000
  },
  {
    "id": "a02Ka00000llYCGIA2",
    "name": "",
    "title": "Workbook error D2E8DA72 in Tableau Desktop after migrating workbook from one Tableau Server site to another site using Tableau CMT",
    "status": "Solution Scheduled",
    "statusType": "fixed",
    "foundIn": "CMT 2025.2.0",
    "primaryVer": "2025.2.0",
    "allVersions": [
      "2025.2.0"
    ],
    "reports": 0,
    "workId": "W-20641260",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000llYCGIA2",
    "summary": "A workbook with published data sources is migrated from one Tableau Server site to another site using Tableau Content Migration Tool (CMT) 2025.2.0. After migrating the workbook, downloading the migrated workbook and opening the workbook in Tableau Desktop results in the following error:Unable to co",
    "created": 1767726278000,
    "updated": 1770746452000
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
    "summary": "Tableau Prep Builder 2025.2 is experiencing an issue when attempting to log in to Tableau Cloud or Server using SAML with Okta. The Okta screen briefly appears before going blank, preventing Prep Builder from successfully logging in to Tableau Server through the Electron-based Auth window when route",
    "created": 1769442045000,
    "updated": 1772807821000
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
    "summary": "Parameter captions are not localized in new content web authoring on Tableau Server and Tableau Cloud. When using the localized caption (e.g. [\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc] in Japanese) an error occurs stating that it refers the undefined field. However the default caption like [Parameter] is allowed.\u00a0This issue occurs i",
    "created": 1780283639000,
    "updated": 1780303668000
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
    "reports": 0,
    "workId": "W-23476115",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000006A4wXAAS",
    "summary": "Tableau Server inserts a historical_events row with historical_event_type_id = 164 during authentication \u2014 both via REST API using a Personal Access Token (PAT) and via interactive re-authentication (e.g., after session cookie expiry or connected client removal). When auditors join this table to his",
    "created": 1784300558000,
    "updated": 1784302743000
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
    "id": "a02Ka00000mGOeMIAW",
    "name": "",
    "title": "Prep flows fail with SQLSTATE:08006 error when concurrent flows share same source file",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2025.1.5",
    "primaryVer": "2025.1.5",
    "allVersions": [
      "2025.1.5"
    ],
    "reports": 2,
    "workId": "W-22586576",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mGOeMIAW",
    "summary": "On Tableau Server 2025.1.5 and later, Tableau Prep Conductor flow jobs fail with the error SQLSTATE:08006 when there are concurrent flow run jobs that share the same source file.",
    "created": 1779322629000,
    "updated": 1784741878000
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
    "summary": "In Tableau Cloud, new connectors for Trino JDBC (v479) and Starburst (v1.51 via a .taco file) may cause connection failures when connecting to Trino or Starburst servers running versions earlier than 479.Starburst 1.5.1 .taco introduces the validateConnection propertyTrino JDBC driver 479 uses this ",
    "created": 1776283254000,
    "updated": 1781185961000
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
    "summary": "When User Visibility = Limited, admins are blocked from deleting or transferring ownership of other users&#39; custom views. The UI doesn&#39;t even show the delete/transfer buttons.\u00a0",
    "created": 1778246367000,
    "updated": 1778248165000
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
    "summary": "Tableau Prep Builder Flows fail to publish with &quot;Error publishing flow to Tableau Server&quot;Flows may fail on publishing but not provide a specific error. This is caused by an unused data source in the connections list.",
    "created": 1753190276000,
    "updated": 1783487615000
  },
  {
    "id": "a02Ka00000nqbCmIAI",
    "name": "",
    "title": "Compound Data sources show up multiple times when search in the \"Connect to Data\" dialog",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "Tableau Server  2025.3.x , 2026.2",
    "primaryVer": "2025.3",
    "allVersions": [
      "2025.3",
      "2026.2"
    ],
    "reports": 2,
    "workId": "W-22264378",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000nqbCmIAI",
    "summary": "Compound Data sources(Published data source) show up multiple times when search in the &quot;Connect to Data&quot; dialog.Version(s) Affected: Tableau Server  2025.3.x ,\u00a02026.2",
    "created": 1782380149000,
    "updated": 1782387070000
  },
  {
    "id": "a02Ka00000mmjBHIAY",
    "name": "",
    "title": "webpageUrl for federated data sources is missing, when running REST API query for datasources",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2026.1.0",
    "primaryVer": "2026.1.0",
    "allVersions": [
      "2026.1.0"
    ],
    "reports": 1,
    "workId": "W-21781581",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mmjBHIAY",
    "summary": "When using the Tableau REST API Query Data Sources endpoint (version 3.27 with Tableau Server 2025.3.4) with the fields parameter set to include webpageUrl, the field is silently omitted from the JSON response. This behavior appears specifically linked to the presence of federated data sources withi",
    "created": 1774954334000,
    "updated": 1776782029000
  },
  {
    "id": "a02g7000005keKXAAY",
    "name": "",
    "title": "Web authoring OAuth popup silently fails when Identity Provider enforces Cross-Origin-Opener-Policy (COOP)",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2025.3.x",
    "primaryVer": "2025.3",
    "allVersions": [
      "2025.3"
    ],
    "reports": 0,
    "workId": "W-23303775",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000005keKXAAY",
    "summary": "Under certain conditions, users attempting to create OAuth-authenticated connections in Tableau&#39;s web editing flow may find that clicking &quot;Sign In&quot; opens the OAuth popup as expected and authentication completes on the provider&#39;s side \u2014 but the parent connection dialog does not prog",
    "created": 1783081201000,
    "updated": 1784759528000
  },
  {
    "id": "a02g7000006ZzgHAAS",
    "name": "",
    "title": "PostgreSQL Repository Logs May Grow Excessively After Upgrading to 2025.3 When Metadata Services Are Enabled",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2025.3",
    "primaryVer": "2025.3",
    "allVersions": [
      "2025.3"
    ],
    "reports": 0,
    "workId": "W-23344278",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000006ZzgHAAS",
    "summary": "When upgrading to Tableau Server 2025.3, if Metadata Services are enabled (`tsm maintenance metadata-services enable`), PostgreSQL repository log files (`postgres-*.csv`) may grow rapidly and consume large amounts of disk space. Disabling Metadata Services stops the excessive log growth.Note: This i",
    "created": 1784893131000,
    "updated": 1785120075000
  },
  {
    "id": "a02g7000006YdRhAAK",
    "name": "",
    "title": "Change Frequency dialog for scheduling Flow task does not reflect existing schedule",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2026.2.0",
    "primaryVer": "2026.2.0",
    "allVersions": [
      "2026.2.0"
    ],
    "reports": 0,
    "workId": "W-23448844",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000006YdRhAAK",
    "summary": "When changing the frequency of a Flow scheduled using Tableau Prep Conductor, the dialog box does not populate to show the current schedule. Instead, the dialog shows the current day and the next possible time to run a schedule.Note: Despite the information displayed in the dialog, unless changes ar",
    "created": 1784859916000,
    "updated": 1785187744000
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
    "summary": "Custom views fail to retain their applied filters and revert to the original unfiltered view. This issue occurs specifically when the workbook uses a Live connection to a Published Data Source (PDS) that is configured as an extract. The behavior has been reproduced in both Tableau Server 2025.1.5 an",
    "created": 1777367237000,
    "updated": 1784864240000
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
    "summary": "When a Server Administrator navigates to a server-level administration page, the &quot;Recycle Bin&quot; menu icon disappears from the left navigation pane when Tableau Server has a single site.Icon is MISSING on pages like:Server StatusServer SettingsIcon is VISIBLE on site-level pages like:Explore",
    "created": 1759300256000,
    "updated": 1784297499000
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
    "id": "a02Ka00000mGOeRIAW",
    "name": "",
    "title": "Intermittent Prep flow run failure with error [SQLSTATE:08006] \u201cThe Hyper server closed the connection unexpectedly.\u201d connecting to CSV",
    "status": "Solution in Progress",
    "statusType": "open",
    "foundIn": "2025.1.5",
    "primaryVer": "2025.1.5",
    "allVersions": [
      "2025.1.5"
    ],
    "reports": 2,
    "workId": "W-22586654",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mGOeRIAW",
    "summary": "In Tableau Server 2025.1.5 or later, Prep flow jobs intermittently fail with the error: \u201cAn error occurred while communicating with the data source [SQLSTATE:08006] \u2013 The Hyper server closed the connection unexpectedly.\u201d on Tableau Server. This behavior occurs when the Prep flow uses a large CSV fil",
    "created": 1779323505000,
    "updated": 1784070121000
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
    "id": "a02Ka00000mFYi3IAG",
    "name": "",
    "title": "Upstream/Downstream table not representing the number of tables(Unfiltered Table) in Virtual Connection",
    "status": "In Review",
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
    "updated": 1782971666000
  },
  {
    "id": "a02g7000005gxwrAAA",
    "name": "",
    "title": "Table names are blank when connecting to Published Data Sources with an inner join on Tableau Desktop 2026.2.0",
    "status": "Solution Scheduled",
    "statusType": "fixed",
    "foundIn": "2026.2.0",
    "primaryVer": "2026.2.0",
    "allVersions": [
      "2026.2.0"
    ],
    "reports": 9,
    "workId": "W-23252399",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000005gxwrAAA",
    "summary": "In Tableau Desktop 2026.2.0, Table names appear blank for tables connected via joins in published datasources on Tableau Cloud and Tableau Server; however, the table names appear correctly when opening a locally saved .tds file or in Tableau Desktop 2026.1.2 or below.",
    "created": 1782845402000,
    "updated": 1785361040000
  },
  {
    "id": "a02g7000005p3PBAAY",
    "name": "",
    "title": "Existing workbooks fail to route via Bridge after updating connection to Snowflake PrivateLink.",
    "status": "In Review",
    "statusType": "open",
    "foundIn": "2026.2.2",
    "primaryVer": "2026.2.2",
    "allVersions": [
      "2026.2.2"
    ],
    "reports": 0,
    "workId": "W-23285551",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000005p3PBAAY",
    "summary": "When an existing Tableau workbook that was originally published using a standard Snowflake connection is updated in Tableau Desktop to use a Snowflake PrivateLink endpoint and then republished to Tableau Cloud, the workbook fails to load. Users are prompted to re-enter their Snowflake credentials, b",
    "created": 1783416491000,
    "updated": 1783420266000
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
    "summary": "Dashboards that contain web objects pointing to resources hosted on a Local Area Network (LAN) may fail to load when the dashboard is embedded and viewed in Google Chrome version 142 or later. This behavior is caused by Chrome\u2019s Local Network Access (LNA) security restrictions, which block requests ",
    "created": 1773424948000,
    "updated": 1777943374000
  },
  {
    "id": "a02Ka00000mHGsLIAW",
    "name": "",
    "title": "Incremental Extract Refresh File Size Increasing Unexpectedly",
    "status": "In Review",
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
    "updated": 1782993138000
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
    "summary": "When opening a view in Tableau Cloud the error presents instead of the view rendering as expected:[SQLSTATE:58S01] error opening database &lt;database name&gt;: There was an error during loading the database:The database does not exist. Unable to connect to the data extract server &quot;&quot;.Check",
    "created": 1754980239000,
    "updated": 1783518154000
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
    "summary": "The connection to data source via Tableau Bridge fails intermittently with the errorError executing subquery id: &quot;&lt;number&gt;&quot;HTTP ConflictUnable to connect to the server &quot;&lt;Server URL&gt;&quot;. Check that the server is running and that you have access privileges to the requeste",
    "created": 1764829119000,
    "updated": 1770833367000
  },
  {
    "id": "a02Ka00000mH5b3IAC",
    "name": "",
    "title": "Error when attempting to publish a workbook downloaded from a custom domain using Tableau Desktop.",
    "status": "Solution Deploying",
    "statusType": "fixed",
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
    "updated": 1785430443000
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
    "summary": "When external users with the Customer Community Plus Login license access Tableau dashboards through Salesforce Experience Cloud, their User Attribute Claims (UAF) are not included in the JWT token used for authentication with Tableau Server or Tableau Cloud. As a result, row-level security based on",
    "created": 1758812358000,
    "updated": 1784906058000
  },
  {
    "id": "a02Ka00000ivxfWIAQ",
    "name": "",
    "title": "Tableau Cloud Metadata API returns incorrect value while querying \"extractLastRefreshedAt\" field of virtual connections",
    "status": "Solution Scheduled",
    "statusType": "fixed",
    "foundIn": "2025.2.0",
    "primaryVer": "2025.2.0",
    "allVersions": [
      "2025.2.0"
    ],
    "reports": 0,
    "workId": "W-18289231",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000ivxfWIAQ",
    "summary": "When using Metadata API to query &quot;extractLastRefreshedAt&quot; field of Virtual Connections in Tableau Cloud or Tableau Server, the &quot;extractLastRefreshedAt&quot; field shows incorrect date.",
    "created": 1756390592000,
    "updated": 1783641529000
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
    "reports": 3,
    "workId": "W-22473252",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mGCOFIA4",
    "summary": "In Tableau Desktop versions 2025.3.5 or 2026.1.1 and later, users are blocked from switching sites when using the Tableau embedded browser. This behavior does not occur when switching sites when using an external browser.",
    "created": 1778715758000,
    "updated": 1785170563000
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
    "summary": "Flow refresh failing with error &quot;[SQLSTATE:08001] Could not connect to the Hyper server: Cannot assign requested address\\r\\nIs the server running on host \\&quot;localhost\\&quot; (::1) and accepting TCP/IP connections on port&quot;",
    "created": 1762771185000,
    "updated": 1784865072000
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
    "summary": "When connecting to data using the OneDrive and SharePoint connector in Tableau, files listed in the &quot;OneDrive (shared with you)&quot; tab are unexpectedly missing.\u00a0EnvironmentTableau DesktopTableau CloudTableau ServerTableau Prep Builder<p style=\"text-align: just",
    "created": 1765480578000,
    "updated": 1784093061000
  },
  {
    "id": "a02Ka00000mGKKBIA4",
    "name": "",
    "title": "Tableau Cloud: \"Unexpected Error\" When Saving OAuth Connection Changes for Input Data Sources in Edit Connection Dialog",
    "status": "Solution Deployed",
    "statusType": "fixed",
    "foundIn": "2026.1",
    "primaryVer": "2026.1",
    "allVersions": [
      "2026.1"
    ],
    "reports": 0,
    "workId": "W-21758877",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mGKKBIA4",
    "summary": "When attempting to save OAuth credentials in the Flow connection edit screen on Tableau Cloud, the updateConnectionsOAuth API fails and an &quot;An unexpected error occurred&quot; error is displayed.Test Connection succeedsEven though the error is displayed, the input OAuth username is saved in flow",
    "created": 1779081255000,
    "updated": 1785430141000
  },
  {
    "id": "a02Ka00000hn1sEIAQ",
    "name": "",
    "title": "Tableau Cloud Client-side rendering misaligns X-Axis when tick mark settings are set to 'fixed'",
    "status": "Working as Expected",
    "statusType": "closed",
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
    "summary": "When attempting to connect to Looker from Tableau Cloud, the following error occurs: Can&#39;t connect to Looker by Google&#39;void kotlin.jvm.internal.FunctionReferencelmpl.&lt;init&gt;(int, java.lang.Class, java.lang.String, java.lang.String, int)&#39; Unable to connect to the Looker by Google ser",
    "created": 1757431788000,
    "updated": 1772745189000
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
    "summary": "In Tableau Desktop, when publishing a data source that uses OAuth authentication with the Prompt User option (no embedded credentials), an issue occurs if the Tableau Cloud/Server credentials are deleted or expire. Tableau Desktop then throws errors such as \u201cUnable to complete action,\u201d \u201cNo associate",
    "created": 1765783566000,
    "updated": 1776965284000
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
    "summary": "Live MSSQL Stored Procedure Connection Throws Data Type Errors on Dashboard Filters:&quot;Incorrect data type integer, getting expected string type&quot;&quot;Incorrect data type integer, getting expected real type&quot;Tabelau Desktop, Server, Cloud 2023.2 and above are affected.",
    "created": 1751014666000,
    "updated": 1760342501000
  },
  {
    "id": "a02Ka00000mH31kIAC",
    "name": "",
    "title": "Attempts to Run Multiple Instances of Tableau Bridge 2026.1 on the Same Machine Result in Crashing of the Application",
    "status": "Working as Expected",
    "statusType": "closed",
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
    "summary": "When attempting to connect to a published data source and add a table to a new flow using Tableau Prep Builder or Web Authoring in Tableau Cloud, the process may intermittently fail and an error message is displayed.This issue specifically occurs during the creation of new flows. Existing flows alre",
    "created": 1780304988000,
    "updated": 1785286798000
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
    "summary": "While loading data on a view in Tableau Cloud, users are given an error: &quot;An unexpected error occurred. If you continue to receive this error please contact your Tableau Server Administrator.&quot;",
    "created": 1758724820000,
    "updated": 1783950053000
  },
  {
    "id": "a02Ka00000mHQdFIAW",
    "name": "",
    "title": "Tableau Resource Monitoring Tool can sometimes fail to ingest correctly causing queues to grow",
    "status": "Solution Scheduled",
    "statusType": "fixed",
    "foundIn": "2025.3.4",
    "primaryVer": "2025.3.4",
    "allVersions": [
      "2025.3.4"
    ],
    "reports": 0,
    "workId": "W-23043358",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mHQdFIAW",
    "summary": "Resource Monitoring Tool will occasionally show a &quot;Unknown System Status - The status of the system could not be determined&quot; screen ",
    "created": 1782233989000,
    "updated": 1782944318000
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
    "reports": 7,
    "workId": "W-19380780",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000lHrFwIAK",
    "summary": "Tableau RMT exhibits continuous disk space consumption over time, as the Resource Monitoring Tool\u2019s PostgreSQL database progressively grows, particularly within the Hangfire schema.",
    "created": 1763406638000,
    "updated": 1784274116000
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
    "summary": "Teradata query banding for &lt;WorkbookName&gt; is empty in Tableau Cloud using Tableau Bridge but works as expected in Tableau Desktop and Tableau ServerTableau Bridge/Cloud: &quot;Setting Running Query Band: SET QUERY_BAND=&#39;WorkbookName=;&#39; FO",
    "created": 1762327036000,
    "updated": 1766081347000
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
    "id": "a02Ka00000kVU4tIAG",
    "name": "",
    "title": "Ephemeral User (On-Demand Access) Breaks Row-level Security (RLS) After Overwriting Data Source with Local Copy in Tableau Cloud",
    "status": "Solution Scheduled",
    "statusType": "fixed",
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
    "id": "a02Ka00000mQzWQIA0",
    "name": "",
    "title": "Certain Flows with Parallel Aggregation Steps Produce Incorrect Results in Tableau Prep 2025.2 and Newer",
    "status": "Working as Expected",
    "statusType": "closed",
    "foundIn": "2025.2",
    "primaryVer": "2025.2",
    "allVersions": [
      "2025.2"
    ],
    "reports": 1,
    "workId": "W-21224381",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mQzWQIA0",
    "summary": "In Tableau Prep Builder 2025.2 and newer versions (and corresponding versions of Tableau Server/Cloud), running flows that contain specific complex logic (such as aggregation steps configured in parallel branches or involving self-joins) may result in incorrect data output.This issue does not affect",
    "created": 1770866420000,
    "updated": 1781856114000
  },
  {
    "id": "a02Ka00000llRQ6IAM",
    "name": "",
    "title": "In a Tableau dashboard, when clicking on an axis point that is a Bin, the target sheet shows more data than what was selected in source sheet",
    "status": "Working as Expected",
    "statusType": "closed",
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
    "summary": "When attempting to access Dashboards on a Tableau Cloud site, users are receiving an &#39;Unknown Worksheet Name&#39; error when attempting to load the Views. ",
    "created": 1781038108000,
    "updated": 1784283158000
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
    "id": "a02Ka00000jgrPHIAY",
    "name": "",
    "title": "After Installing The Recent Tableau Bridge 2025.2+, The Mode Switching Screen May Not Be Displayed Depending On The Windows Display Scaling Settings",
    "status": "Solution Scheduled",
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
    "updated": 1771218145000
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
    "updated": 1784274654000
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
    "summary": "Extract refreshes are intermittently failing in Tableau Cloud with the following error:This job failed on &lt;MMM DD, YYYY, time&gt; after running for 0.0 min because of: com.tableausoftware.server.status.reportin Error creating bean with name &#39;remoteQueryConnectionAttributesHelper&#39;: Singlet",
    "created": 1755721018000,
    "updated": 1766165596000
  },
  {
    "id": "a02Ka00000mH5pKIAS",
    "name": "",
    "title": "Incorrect Checkbox Selections Displayed in Set Field Filter After Deselecting 'All' and then Searching When \"Show Apply Button\" is Enabled",
    "status": "Solution in Progress",
    "statusType": "open",
    "foundIn": "2025.1, 2025.3",
    "primaryVer": "2025.1",
    "allVersions": [
      "2025.1",
      "2025.3"
    ],
    "reports": 1,
    "workId": "W-22937804",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mH5pKIAS",
    "summary": "When using a Set field filter with the &quot;Show Apply Button&quot; option enabled in Tableau Server, incorrect checkbox selections are displayed after a user deselects &quot;all&quot; followed by a searching for a new field value. Specifically, items that were never individually selected appear as",
    "created": 1781228464000,
    "updated": 1783704723000
  },
  {
    "id": "a02Ka00000mEqVQIA0",
    "name": "",
    "title": "Publishing a flow with Snowflake key-pair authentication from Prep Builder to Tableau Cloud, the option \"Embedded Password\" should not appear",
    "status": "Working as Expected",
    "statusType": "closed",
    "foundIn": "2026.1",
    "primaryVer": "2026.1",
    "allVersions": [
      "2026.1"
    ],
    "reports": 0,
    "workId": "W-19057546",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mEqVQIA0",
    "summary": "When publishing a flow that connects to Snowflake using key-pair authentication from Prep Builder to Tableau Cloud, in the publish dialog to select the data source authentication type, users see the option Embed Password.Embed Password should not be an available option in this scenario, the dialog s",
    "created": 1777932848000,
    "updated": 1779219577000
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
    "summary": "The &#39;Last update&#39; field on Tableau Cloud shows &#39;Never&#39; even after an incremental refresh via Tableau Bridge is successfully completed. This issue misleads users about the data freshness and impacts confidence in the platform.",
    "created": 1760496990000,
    "updated": 1783950505000
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
    "summary": "After upgrading to Tableau Cloud 2025.3, extract refreshes for OAuth-based data sources (such as Box) that are configured to use a Private Network (Tableau Bridge) may fail.When this issue occurs, the refresh job fails, and the following error message is displayed in the job details:clientId is mark",
    "created": 1763704477000,
    "updated": 1783489860000
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
    "reports": 24,
    "workId": "W-17240044",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000moIVGIA2",
    "summary": "Users with the Viewer role are unable to create subscriptions in Tableau Server",
    "created": 1777373747000,
    "updated": 1784793494000
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
    "reports": 1,
    "workId": "W-21754389",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mmoT1IAI",
    "summary": "When upgrading or restoring to Tableau Server, the process may fail during the database migration phase. This issue occurs if the source environment contains &quot;orphaned&quot; database schemas leftover data from previous site export operations that did not complete successfully.Tableau Server doe",
    "created": 1775060287000,
    "updated": 1781831383000
  },
  {
    "id": "a02Ka00000ladVgIAI",
    "name": "",
    "title": "Setting permissions for User/Groups causes the UI to become unresponsive",
    "status": "Solution Deployed",
    "statusType": "fixed",
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
    "updated": 1785160153000
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
    "summary": "After publishing a workbook to Tableau Cloud /Tableau Server containing multiple Google BigQuery data sources embedded with Service Account credentials, some of the embedded data sources may show as having &quot;no authentication&quot; or &quot;Prompt User&quot; in the UI.",
    "created": 1754597833000,
    "updated": 1783920172000
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
    "summary": "When attempting to publish a Snowflake data source using Key Pair Authentication from Tableau Desktop, the following behavior is observed:The &quot;Authentication&quot; dropdown list for embedded credentials incorrectly displays all saved credentials that match the user and server. This occurs regar",
    "created": 1764744762000,
    "updated": 1766165564000
  },
  {
    "id": "a02Ka00000lkTIDIA2",
    "name": "",
    "title": "Error \"Conversion error at column... numeric value out of range. Error Code: A3E43C3B\" when Working with Snowflake Data Sources",
    "status": "Working as Expected",
    "statusType": "closed",
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
    "summary": "Note--Issue impacts Tableau Cloud, Desktop, Prep Builder and ServerError &quot;[Snowflake][Support] (40470) Conversion error at column... numeric value out of range. Error Code: A3E43C3B&quot; when Working with Snowflake Data SourcesThis error occurs because th",
    "created": 1766010825000,
    "updated": 1784940575000
  },
  {
    "id": "a02Ka00000mQmaTIAS",
    "name": "",
    "title": "Members of Group Sets not refreshed in Effective Permissions",
    "status": "Solution Scheduled",
    "statusType": "fixed",
    "foundIn": "2025.3",
    "primaryVer": "2025.3",
    "allVersions": [
      "2025.3"
    ],
    "reports": 1,
    "workId": "W-20907708",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mQmaTIAS",
    "summary": "When viewing the Tableau asset&#39;s permissions and selecting the added Group Sets, the members not refreshed in the Effective Permissions section.\ufeffThis affects both ",
    "created": 1770170039000,
    "updated": 1781470278000
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
    "summary": "In Tableau Cloud, searching for usernames that start with &quot;v-&quot; does not return results if the username is 8 characters or fewer. Usernames starting with &quot;v-&quot; and containing 9 or more characters are searchable as expected.NOTE: This issue also affects Tableau Server.",
    "created": 1755298823000,
    "updated": 1772665656000
  },
  {
    "id": "a02g70000064s81AAA",
    "name": "",
    "title": "Column headers for bin size may not update properly from parameter selection",
    "status": "Solution in Progress",
    "statusType": "open",
    "foundIn": "2025.1.3",
    "primaryVer": "2025.1.3",
    "allVersions": [
      "2025.1.3"
    ],
    "reports": 0,
    "workId": "W-23428625",
    "url": "https://help.salesforce.com/s/issue?id=a02g70000064s81AAA",
    "summary": "On Tableau Server 2025.1.3 and later, column headers for bin size that are controlled by parameters may not update as expected. The parameter selection of the bin size may not be reflected in all views for headers which are controlled by that parameter.For example, if a view shows data that is group",
    "created": 1784059523000,
    "updated": 1784134785000
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
    "summary": "Background map in Tableau Cloud dashboard unexpectedly changed from Japanese to English.The workbook locale is set to Japanese, so background maps display in Japanese in Tableau Desktop but it changes to in English when published to Tableau Cloud. This issue occurs only with server rendering.Tableau",
    "created": 1750650475000,
    "updated": 1753469281000
  },
  {
    "id": "a02Ka00000mmUg6IAE",
    "name": "",
    "title": "Field selection state persists when publishing a workbook from Web Authoring after clearing the selection.",
    "status": "Solution Scheduled",
    "statusType": "fixed",
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
    "summary": "In Tableau Cloud and Tableau Server, a published workbook may incorrectly retain a selected (highlighted) state on a field, even if that selection was cleared before saving and publishing via Web Authoring.This issue is triggered only when the following conditions are met:A Filter Action is configur",
    "created": 1774408133000,
    "updated": 1776134784000
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
    "summary": "When creating or editing a Union using the SharePoint Lists (JDBC) connector in Tableau Desktop, the error &quot;Unable to complete action \u2014 Error in parameters for command &#39;launch-union-dialog&#39;, bad value: connection-name (Error Code: 47BF7751)&quot; is displayed and the union dialog fails ",
    "created": 1777448622000,
    "updated": 1785430025000
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
    "reports": 5,
    "workId": "W-21306237",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mmP1uIAE",
    "summary": "Contents\u2019s lineage does not show correct status (showing 0 contents) and shows error &quot;Still creating the Metadata API Store&quot;. Results from the query might be incomplete at this time.&quot;The Metadata API file store does not complete successfully and shows the same error.",
    "created": 1774261983000,
    "updated": 1785429985000
  },
  {
    "id": "a02g7000005wDjbAAE",
    "name": "",
    "title": "Error occurs with Composable Data Sources when adding connections to encrypted extracts",
    "status": "Solution Scheduled",
    "statusType": "fixed",
    "foundIn": "2026.2.0",
    "primaryVer": "2026.2.0",
    "allVersions": [
      "2026.2.0"
    ],
    "reports": 1,
    "workId": "W-22625200",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000005wDjbAAE",
    "summary": "When creating a Composable Data Source that connects to an encrypted extract, the connection may fail with an error such as:[SQLSTATE:58030] error opening database &#39;federated_[ID]: There was an error during loading database: cannot unlock object store: wrong encryption key\u00a0Issue impacts Composab",
    "created": 1783624006000,
    "updated": 1783705781000
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
    "summary": "Since around the weekend of June 14, extract refreshes using OAuth tokens issued by the Azure Data Lake Storage Gen2 connector have started failing when accessing Storage Accounts in certain Azure regions, such as &quot;Japan East.&quot; In addition, new connection attempts are also unsuccessful.Som",
    "created": 1750645631000,
    "updated": 1757299798000
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
    "summary": "A Tableau Prep flow, after being published to Tableau Cloud, fails to read input text files (such as CSV and TXT). This issue arises even when the files are uploaded directly to Tableau Cloud during the publishing process by selecting &quot;Upload&quot; in the &quot;Connections&quot; section of the ",
    "created": 1750212512000,
    "updated": 1757343632000
  },
  {
    "id": "a02Ka00000mmDx5IAE",
    "name": "",
    "title": "Attempts an Incremental Extract Refresh with Minimum Date Range Can Fail with LogicAssert 0x1849846D if the Existing Extract Contains 0 Rows",
    "status": "Solution Scheduled",
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
    "updated": 1773767870000
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
    "summary": "Issue affects Tableau Cloud, Desktop and ServerWorkbook that opened in earlier versions of Tableau may fail to load with version 2025.2.x or higher, throwing the following error:&quot;Logical Query missing field[TEMP(Calculation_25252525252525255)(2048204825)(0)] from aggregateOp. This is an invalid",
    "created": 1755646043000,
    "updated": 1773076567000
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
    "summary": "In Tableau Cloud, users with the workbook/project owner or Site Administrator roles can add Extract Refresh schedules to workbooks. However, if a user\u2019s site role is later changed to Creator and they are no longer the owner of the workbook or project, they cannot delete or modify the schedule freque",
    "created": 1774524809000,
    "updated": 1785286437000
  },
  {
    "id": "a02Ka00000nqX1dIAE",
    "name": "",
    "title": "Viz Extensions using discrete month date part become non-responsive",
    "status": "Solution Scheduled",
    "statusType": "fixed",
    "foundIn": "2026.2.0",
    "primaryVer": "2026.2.0",
    "allVersions": [
      "2026.2.0"
    ],
    "reports": 0,
    "workId": "W-23089320",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000nqX1dIAE",
    "summary": "Beginning in 2026.2.0, viz extensions used in Tableau Desktop, Tableau Cloud, Tableau Server, and Tableau Public will silently error when used with a discrete month date part.\u00a0This results in the extension &quot;locking up&quot; and not respond to further encoding or not proceeding. This issue does ",
    "created": 1782262670000,
    "updated": 1782421077000
  },
  {
    "id": "a02Ka00000lHsDkIAK",
    "name": "",
    "title": "Dashboard migration issue on CMT: Duplicate parameters are appearing in workbook filters after migration.",
    "status": "Solution Scheduled",
    "statusType": "fixed",
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
    "summary": "Some Tableau workbooks return null values for the &quot;name&quot; and &quot;connection type&quot; fields in the CustomSQLTable when queried with GraphQL.",
    "created": 1757611449000,
    "updated": 1781108473000
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
    "reports": 37,
    "workId": "W-19327268",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mQzRtIAK",
    "summary": " &quot;LogicException&quot; error seen when attempting to load specific dashboards in a workbook on Tableau Server / Tableau Cloud. There may be some correlation with colors existing on the marks card. It also may not show on the first load of an affected dashboard on that day, but is usually seen o",
    "created": 1770850763000,
    "updated": 1784873199000
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
    "summary": "When running Flows in Tableau Cloud that connect to Salesforce data, the error below is intermittently received:An error occurred while communicating with the data source InsertData: unbound column: com.tableau.loom.runtime.SelectIntoExecutor.updateErrorMessage(SelectIntoExecutor.java:1035)Note that",
    "created": 1755110913000,
    "updated": 1758929995000
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
    "id": "a02Ka00000mH2UqIAK",
    "name": "",
    "title": "Tooltip Displays Incomplete Data After Saving a Custom View on a Line Chart",
    "status": "Solution Scheduled",
    "statusType": "fixed",
    "foundIn": "2025.1.5, 2026.1 & Tableau cloud",
    "primaryVer": "2025.1.5",
    "allVersions": [
      "2025.1.5",
      "2026.1"
    ],
    "reports": 1,
    "workId": "W-22782461",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mH2UqIAK",
    "summary": "When a custom view is saved after changing a line chart to daily granularity, the tooltip no longer displays the full measure and date information upon reloading that custom view. Under certain conditions, users may experience an incomplete tooltip on a line chart when loading a saved custom view. S",
    "created": 1781011691000,
    "updated": 1784700134000
  },
  {
    "id": "a02Ka00000mQoveIAC",
    "name": "",
    "title": "Subscription jobs occasionally fails with error code 0x56f74306",
    "status": "Solution Scheduled",
    "statusType": "fixed",
    "foundIn": "2025.3",
    "primaryVer": "2025.3",
    "allVersions": [
      "2025.3"
    ],
    "reports": 2,
    "workId": "W-21182905",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mQoveIAC",
    "summary": "The subscription job occasionally failed with the following error:SubscriptionErrorResult: ErrorCode: 150068; Error Category: CAUSED_BY_NON_SUBSCRIPTION_SERVICE; Error message: VIZ_GENERATION_FAILED. The query limit resource limit (2700 seconds) was exceeded.;Unable to generate the view; Original ex",
    "created": 1770338482000,
    "updated": 1778006348000
  },
  {
    "id": "a02Ka00000jg5MoIAI",
    "name": "",
    "title": "Dynamic SAML Group Permissions are not Working on Workbooks using Published Datasource",
    "status": "Working as Expected",
    "statusType": "closed",
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
    "reports": 2,
    "workId": "W-20175273",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000lnF1KIAU",
    "summary": "When attempting to update a Snowflake data source&#39;s authentication method to key pair authentication via REST API, testing connection succeeds but the extract refresh fails with the message &quot;Could not find the private key for Snowflake KeyPair Auth&quot;.This impacts both Tableau Cloud and ",
    "created": 1768935611000,
    "updated": 1783488783000
  },
  {
    "id": "a02Ka00000moDFfIAM",
    "name": "",
    "title": "When using a calculation that using aggregation of fields from multiple base tables, stacked/multiple marks are being displayed vs. a single mark",
    "status": "Solution Scheduled",
    "statusType": "fixed",
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
    "id": "a02g7000005exxlAAA",
    "name": "",
    "title": "rmtadmin status --verbose prints every console line twice (duplicate output)",
    "status": "Solution Scheduled",
    "statusType": "fixed",
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
    "summary": "Jobs related to workbook or flow creation, extract refreshes, or flow executions are encountering failures when attempting to connect to external data sources, including:Salesforce connectorGoogle DriveMarketing Cloud/Data CloudThe issues arise particularly during the processing of large datasets, r",
    "created": 1770859591000,
    "updated": 1783511586000
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
    "summary": "Embedding passwords in workbooks is not functioning as expected when data sources are published separately (not embedded within the workbook) from web.If a password is embedded in the workbook, but a user lacks &quot;Connect&quot; permission for the data source itself, they will encounter the error.",
    "created": 1754444912000,
    "updated": 1784671337000
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
    "summary": "\ufeff&quot;Showing partial results. Still loading lineage information. Try again later. &quot; warning appears at the top of the page and does not appear to go away over time.",
    "created": 1758021270000,
    "updated": 1773405941000
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
    "id": "a02g7000006NA85AAG",
    "name": "",
    "title": "Data Pane Focus Jump on CJK Fields with Numeric Suffixes",
    "status": "Solution in Progress",
    "statusType": "open",
    "foundIn": "2026.2",
    "primaryVer": "2026.2",
    "allVersions": [
      "2026.2"
    ],
    "reports": 0,
    "workId": "W-23189097",
    "url": "https://help.salesforce.com/s/issue?id=a02g7000006NA85AAG",
    "summary": "Tableau Cloud/Server 2026.2 causes the Data pane to jump focus when users click measures with CJK (Chinese/Japanese/Korean).Field names that share numeric suffixes with dimension names. This breaks the user&#39;s ability to interact with affected measures.For example in the following screenshot, aft",
    "created": 1784599547000,
    "updated": 1784773626000
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
    "summary": "Flows fail with &quot;Unable to Publish Data Source&quot;. The error message states: &quot;Unable to publish the data source. Verify that the project exists on your server and that you have permission to access it, or select a different project.&quot;",
    "created": 1765272006000,
    "updated": 1766165580000
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
    "summary": "In Tableau Cloud, flow references datasource using OAuth; failed to retrieve new OAuth Access Token causing flow run to fail. \u00a0The flow run was successful within the first hour after flow was freshly published, or the when referenced embedded OAuth data source or published OAuth data source was upda",
    "created": 1751246770000,
    "updated": 1753721181000
  },
  {
    "id": "a02Ka00000jfT10IAE",
    "name": "",
    "title": "The horizontal border at the bottom of the crosstab appears shorter when viewed on mobile devices than it was anticipated",
    "status": "Solution Scheduled",
    "statusType": "fixed",
    "foundIn": "2025.2",
    "primaryVer": "2025.2",
    "allVersions": [
      "2025.2"
    ],
    "reports": 0,
    "workId": "W-19593704",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000jfT10IAE",
    "summary": "The border lines in the crosstab are rendered accordingly in Tableau Deskop:Accessing the dashboard published to Tableau Cloud, the crosstab&#39;s bottom border line appears shorter than anticipated on mobile devices:<img src=\"https://known-issues-prd1.file.force.com/servlet/rtaImage?eid=a02Ka00000j",
    "created": 1757577777000,
    "updated": 1758749316000
  },
  {
    "id": "a02Ka00000fsNisIAE",
    "name": "",
    "title": "An error occurs when a user attempts to access a workbook published by another author using SAP HANA Oauth over Bridge",
    "status": "Solution in Progress",
    "statusType": "open",
    "foundIn": "2025.1",
    "primaryVer": "2025.1",
    "allVersions": [
      "2025.1"
    ],
    "reports": 1,
    "workId": "W-18769729",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000fsNisIAE",
    "summary": "When a dashboard is publsihed with embedded data source published live connection, it works only for owner/publisher. When another user tries to access the same workbook, having correct credentials and permissions to the datasource &amp; connection method, the following error occurs:&quot;Confirm th",
    "created": 1749805604000,
    "updated": 1750333959000
  },
  {
    "id": "a02Ka00000mQtXGIA0",
    "name": "",
    "title": "The initial URL is not being transmitted to the OIDC provider during the relay state when multiple identity pools and OIDC are utilized in mobile",
    "status": "Solution Scheduled",
    "statusType": "fixed",
    "foundIn": "2024.2.15, 2025.3.2",
    "primaryVer": "2024.2.15",
    "allVersions": [
      "2024.2.15",
      "2025.3.2"
    ],
    "reports": 0,
    "workId": "W-21155037",
    "url": "https://help.salesforce.com/s/issue?id=a02Ka00000mQtXGIA0",
    "summary": "When using multiple identity pools with Active Directory and OpenID (OIDC) as the secondary pool, the relay states aren\u2019t transmitted when accessing the dashboard from a mobile device (Android or iOS).As a result, the user is redirected to the default or home page instead of the dashboard link that ",
    "created": 1770654223000,
    "updated": 1770746428000
  }
];

const KI_CURRENT_VERSION = "2025.1.7";
const KI_TARGET_VERSIONS = ["2025.3.8", "2026.2.1"];
const ENV_NOTES = "Multi-node: 1 primary + 2 Gateway nodes (3 total). Single site (no multi-site issues). No flows/prep. Known issues filtered to 2025.1.7+ and open issues from 2025.1 series.";
