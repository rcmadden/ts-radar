// Security advisories — NVD, including Salesforce vendor references.
const SECURITY_ISSUES = [
  {
    "id": "CVE-2014-1204",
    "name": "CVE-2014-1204",
    "source": "NVD",
    "title": "CVE-2014-1204 \u2014 SQL injection vulnerability in Tableau Server 8.0.x before 8.0.7 and 8.1.x before 8.1.2 allows remote authenticated users to execute arbitrary SQL commands via unspecified vectors.  NOTE: this can be exploited by unauthenticated remote attackers if the guest user is enabled.",
    "summary": "SQL injection vulnerability in Tableau Server 8.0.x before 8.0.7 and 8.1.x before 8.1.2 allows remote authenticated users to execute arbitrary SQL commands via unspecified vectors.  NOTE: this can be exploited by unauthenticated remote attackers if the guest user is enabled.",
    "status": "Published security advisory",
    "statusType": "open",
    "allVersions": [
      "8.0",
      "8.0.1",
      "8.0.2",
      "8.0.3",
      "8.0.4",
      "8.0.5",
      "8.0.6",
      "8.1",
      "8.1.1"
    ],
    "foundIn": "8.0; 8.0.1; 8.0.2; 8.0.3; 8.0.4; 8.0.5; 8.0.6; 8.1; 8.1.1",
    "affectedRanges": [
      {
        "version": "8.0"
      },
      {
        "version": "8.0.1"
      },
      {
        "version": "8.0.2"
      },
      {
        "version": "8.0.3"
      },
      {
        "version": "8.0.4"
      },
      {
        "version": "8.0.5"
      },
      {
        "version": "8.0.6"
      },
      {
        "version": "8.1"
      },
      {
        "version": "8.1.1"
      }
    ],
    "fixedVersions": [],
    "reports": 0,
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2014-1204",
    "references": [
      "http://osvdb.org/102568",
      "http://secunia.com/advisories/56620",
      "http://www.exploit-db.com/exploits/31578",
      "http://www.securityfocus.com/bid/65171",
      "http://www.securitytracker.com/id/1029706",
      "http://www.tableausoftware.com/support/releases/8.0.7",
      "http://www.tableausoftware.com/support/releases/812",
      "https://exchange.xforce.ibmcloud.com/vulnerabilities/90730",
      "https://www.trustwave.com/spiderlabs/advisories/TWSL2014-003.txt",
      "http://osvdb.org/102568",
      "http://secunia.com/advisories/56620",
      "http://www.exploit-db.com/exploits/31578",
      "http://www.securityfocus.com/bid/65171",
      "http://www.securitytracker.com/id/1029706",
      "http://www.tableausoftware.com/support/releases/8.0.7",
      "http://www.tableausoftware.com/support/releases/812",
      "https://exchange.xforce.ibmcloud.com/vulnerabilities/90730",
      "https://www.trustwave.com/spiderlabs/advisories/TWSL2014-003.txt"
    ],
    "created": 1391180856467,
    "updated": 1781654671580
  },
  {
    "id": "CVE-2017-5178",
    "name": "CVE-2017-5178",
    "source": "NVD",
    "title": "CVE-2017-5178 \u2014 An issue was discovered in Schneider Electric Tableau Server/Desktop Versions 7.0 to 10.1.3 in Wonderware Intelligence Versions 2014R3 and prior. These versions contain a system account that is installed by default. The default system account is difficult to configure with non-default credentials after installation, and changing the default credentials in the embedded Tableau Server is not documented. If Tableau Server is used with Windows integrated security (Active Directory), the software is not vulnerable. However, when Tableau Server is used with local authentication mode, the software is vulnerable. The default system account could be used to gain unauthorized access.",
    "summary": "An issue was discovered in Schneider Electric Tableau Server/Desktop Versions 7.0 to 10.1.3 in Wonderware Intelligence Versions 2014R3 and prior. These versions contain a system account that is installed by default. The default system account is difficult to configure with non-default credentials after installation, and changing the default credentials in the embedded Tableau Server is not documented. If Tableau Server is used with Windows integrated security (Active Directory), the software is not vulnerable. However, when Tableau Server is used with local authentication mode, the software is vulnerable. The default system account could be used to gain unauthorized access.",
    "status": "Published security advisory",
    "statusType": "open",
    "allVersions": [
      "7.0",
      "10.1.3"
    ],
    "foundIn": "7.0; 10.1.3",
    "affectedRanges": [
      {
        "version": "7.0"
      },
      {
        "version": "10.1.3"
      }
    ],
    "fixedVersions": [],
    "reports": 0,
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2017-5178",
    "references": [
      "http://software.schneider-electric.com/pdf/security-bulletin/lfsec00000119/",
      "http://www.securityfocus.com/bid/96721",
      "https://ics-cert.us-cert.gov/advisories/ICSA-17-066-01",
      "http://software.schneider-electric.com/pdf/security-bulletin/lfsec00000119/",
      "http://www.securityfocus.com/bid/96721",
      "https://ics-cert.us-cert.gov/advisories/ICSA-17-066-01"
    ],
    "created": 1488963540160,
    "updated": 1781659206253
  },
  {
    "id": "CVE-2019-15637",
    "name": "CVE-2019-15637",
    "source": "NVD",
    "title": "CVE-2019-15637 \u2014 Numerous Tableau products are vulnerable to XXE via a malicious workbook, extension, or data source, leading to information disclosure or a DoS. This affects Tableau Server, Tableau Desktop, Tableau Reader, and Tableau Public Desktop.",
    "summary": "Numerous Tableau products are vulnerable to XXE via a malicious workbook, extension, or data source, leading to information disclosure or a DoS. This affects Tableau Server, Tableau Desktop, Tableau Reader, and Tableau Public Desktop.",
    "status": "Published security advisory",
    "statusType": "open",
    "allVersions": [
      "10.5",
      "2018.1",
      "2018.2",
      "2018.3",
      "2019.1",
      "2019.2",
      "10.2",
      "10.3",
      "10.4"
    ],
    "foundIn": "10.5 through 10.5.18; 2018.1 through 2018.1.15; 2018.2 through 2018.12; 2018.3 through 2018.3.9; 2019.1 through 2019.1.6; 2019.2 through 2019.2.2; 10.2 through 10.2.23; 10.3 through 10.3.23; 10.4 through 10.4.19; 10.5 through 10.5.18; 2018.1 through 2018.1.15; 2018.2 through 2018.12; 2018.3 through 2018.3.9; 2019.1 through 2019.1.6; 2019.2 through 2019.2.2",
    "affectedRanges": [
      {
        "startIncluding": "10.5",
        "endIncluding": "10.5.18"
      },
      {
        "startIncluding": "2018.1",
        "endIncluding": "2018.1.15"
      },
      {
        "startIncluding": "2018.2",
        "endIncluding": "2018.12"
      },
      {
        "startIncluding": "2018.3",
        "endIncluding": "2018.3.9"
      },
      {
        "startIncluding": "2019.1",
        "endIncluding": "2019.1.6"
      },
      {
        "startIncluding": "2019.2",
        "endIncluding": "2019.2.2"
      },
      {
        "startIncluding": "10.2",
        "endIncluding": "10.2.23"
      },
      {
        "startIncluding": "10.3",
        "endIncluding": "10.3.23"
      },
      {
        "startIncluding": "10.4",
        "endIncluding": "10.4.19"
      },
      {
        "startIncluding": "10.5",
        "endIncluding": "10.5.18"
      },
      {
        "startIncluding": "2018.1",
        "endIncluding": "2018.1.15"
      },
      {
        "startIncluding": "2018.2",
        "endIncluding": "2018.12"
      },
      {
        "startIncluding": "2018.3",
        "endIncluding": "2018.3.9"
      },
      {
        "startIncluding": "2019.1",
        "endIncluding": "2019.1.6"
      },
      {
        "startIncluding": "2019.2",
        "endIncluding": "2019.2.2"
      }
    ],
    "fixedVersions": [],
    "reports": 0,
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2019-15637",
    "references": [
      "https://community.tableau.com/community/security-bulletins/blog/2019/08/22/important-adv-2019-030-xxe-vulnerability-in-tableau-products",
      "https://github.com/minecrater/exploits/blob/master/TableauXXE.py",
      "https://packetstormsecurity.com/files/154232/Tableau-XML-Injection.html",
      "https://community.tableau.com/community/security-bulletins/blog/2019/08/22/important-adv-2019-030-xxe-vulnerability-in-tableau-products",
      "https://github.com/minecrater/exploits/blob/master/TableauXXE.py",
      "https://packetstormsecurity.com/files/154232/Tableau-XML-Injection.html"
    ],
    "created": 1566839712710,
    "updated": 1781662847260
  },
  {
    "id": "CVE-2019-19719",
    "name": "CVE-2019-19719",
    "source": "NVD",
    "title": "CVE-2019-19719 \u2014 Tableau Server 10.3 through 2019.4 on Windows and Linux allows XSS via the embeddedAuthRedirect page.",
    "summary": "Tableau Server 10.3 through 2019.4 on Windows and Linux allows XSS via the embeddedAuthRedirect page.",
    "status": "Published security advisory",
    "statusType": "open",
    "allVersions": [
      "10.3"
    ],
    "foundIn": "10.3 through 2019.4",
    "affectedRanges": [
      {
        "startIncluding": "10.3",
        "endIncluding": "2019.4"
      }
    ],
    "fixedVersions": [],
    "reports": 0,
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2019-19719",
    "references": [
      "https://community.tableau.com/community/security-bulletins/blog/2019/11/19/important-adv-2019-047-open-redirect-on-embeddedauthredirect-page",
      "https://community.tableau.com/community/security-bulletins/blog/2019/11/19/important-adv-2019-047-open-redirect-on-embeddedauthredirect-page"
    ],
    "created": 1576037710573,
    "updated": 1781663228177
  },
  {
    "id": "CVE-2020-6938",
    "name": "CVE-2020-6938",
    "source": "NVD",
    "title": "CVE-2020-6938 \u2014 A sensitive information disclosure vulnerability in Tableau Server 10.5, 2018.x, 2019.x, 2020.x released before June 26, 2020, could allow access to sensitive information in log files.",
    "summary": "A sensitive information disclosure vulnerability in Tableau Server 10.5, 2018.x, 2019.x, 2020.x released before June 26, 2020, could allow access to sensitive information in log files.",
    "status": "Published security advisory",
    "statusType": "open",
    "allVersions": [
      "2018.1",
      "10.5"
    ],
    "foundIn": "2018.1 through 2020.2; 10.5",
    "affectedRanges": [
      {
        "startIncluding": "2018.1",
        "endIncluding": "2020.2"
      },
      {
        "version": "10.5"
      }
    ],
    "fixedVersions": [],
    "reports": 0,
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2020-6938",
    "references": [
      "https://help.salesforce.com/apex/HTViewSolution?urlname=Sensitive-information-disclosure-vulnerability-affecting-Tableau-Server-in-certain-use-cases&language=en_US",
      "https://help.salesforce.com/articleView?id=000354158&type=1&mode=1",
      "https://help.salesforce.com/apex/HTViewSolution?urlname=Sensitive-information-disclosure-vulnerability-affecting-Tableau-Server-in-certain-use-cases&language=en_US",
      "https://help.salesforce.com/articleView?id=000354158&type=1&mode=1"
    ],
    "created": 1594224911260,
    "updated": 1781666640073
  },
  {
    "id": "CVE-2020-6939",
    "name": "CVE-2020-6939",
    "source": "NVD",
    "title": "CVE-2020-6939 \u2014 Tableau Server installations configured with Site-Specific SAML that allows the APIs to be used by unauthenticated users. If exploited, this could allow a malicious user to configure Site-Specific SAML settings and could lead to account takeover for users of that site. Tableau Server versions affected on both Windows and Linux are: 2018.2 through 2018.2.27, 2018.3 through 2018.3.24, 2019.1 through 2019.1.22, 2019.2 through 2019.2.18, 2019.3 through 2019.3.14, 2019.4 through 2019.4.13, 2020.1 through 2020.1.10, 2020.2 through 2020.2.7, and 2020.3 through 2020.3.2.",
    "summary": "Tableau Server installations configured with Site-Specific SAML that allows the APIs to be used by unauthenticated users. If exploited, this could allow a malicious user to configure Site-Specific SAML settings and could lead to account takeover for users of that site. Tableau Server versions affected on both Windows and Linux are: 2018.2 through 2018.2.27, 2018.3 through 2018.3.24, 2019.1 through 2019.1.22, 2019.2 through 2019.2.18, 2019.3 through 2019.3.14, 2019.4 through 2019.4.13, 2020.1 through 2020.1.10, 2020.2 through 2020.2.7, and 2020.3 through 2020.3.2.",
    "status": "Published security advisory",
    "statusType": "open",
    "allVersions": [
      "2018.2",
      "2018.3",
      "2019.1",
      "2019.2",
      "2019.3",
      "2019.4",
      "2020.1",
      "2020.2",
      "2020.3"
    ],
    "foundIn": "2018.2 through 2018.2.27; 2018.3 through 2018.3.24; 2019.1 through 2019.1.22; 2019.2 through 2019.2.18; 2019.3 through 2019.3.14; 2019.4 through 2019.4.13; 2020.1 through 2020.1.10; 2020.2 through 2020.2.7; 2020.3 through 2020.3.2",
    "affectedRanges": [
      {
        "startIncluding": "2018.2",
        "endIncluding": "2018.2.27"
      },
      {
        "startIncluding": "2018.3",
        "endIncluding": "2018.3.24"
      },
      {
        "startIncluding": "2019.1",
        "endIncluding": "2019.1.22"
      },
      {
        "startIncluding": "2019.2",
        "endIncluding": "2019.2.18"
      },
      {
        "startIncluding": "2019.3",
        "endIncluding": "2019.3.14"
      },
      {
        "startIncluding": "2019.4",
        "endIncluding": "2019.4.13"
      },
      {
        "startIncluding": "2020.1",
        "endIncluding": "2020.1.10"
      },
      {
        "startIncluding": "2020.2",
        "endIncluding": "2020.2.7"
      },
      {
        "startIncluding": "2020.3",
        "endIncluding": "2020.3.2"
      }
    ],
    "fixedVersions": [],
    "reports": 0,
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2020-6939",
    "references": [
      "https://help.salesforce.com/articleView?id=000355686&type=1&mode=1",
      "https://help.salesforce.com/articleView?id=000355686&type=1&mode=1"
    ],
    "created": 1606151712720,
    "updated": 1781666640173
  },
  {
    "id": "CVE-2021-1629",
    "name": "CVE-2021-1629",
    "source": "NVD",
    "title": "CVE-2021-1629 \u2014 Tableau Server fails to validate certain URLs that are embedded in emails sent to Tableau Server users.",
    "summary": "Tableau Server fails to validate certain URLs that are embedded in emails sent to Tableau Server users.",
    "status": "Published security advisory",
    "statusType": "open",
    "allVersions": [
      "2019.4",
      "2020.1",
      "2020.2",
      "2020.3",
      "2020.4"
    ],
    "foundIn": "2019.4 to before 2019.4.18; 2020.1 to before 2020.1.15; 2020.2 to before 2020.2.12; 2020.3 to before 2020.3.7; 2020.4 to before 2020.4.3; 2019.4 to before 2019.4.18; 2020.1 to before 2020.1.15; 2020.2 to before 2020.2.12; 2020.3 to before 2020.3.7; 2020.4 to before 2020.4.3",
    "affectedRanges": [
      {
        "startIncluding": "2019.4",
        "endExcluding": "2019.4.18"
      },
      {
        "startIncluding": "2020.1",
        "endExcluding": "2020.1.15"
      },
      {
        "startIncluding": "2020.2",
        "endExcluding": "2020.2.12"
      },
      {
        "startIncluding": "2020.3",
        "endExcluding": "2020.3.7"
      },
      {
        "startIncluding": "2020.4",
        "endExcluding": "2020.4.3"
      },
      {
        "startIncluding": "2019.4",
        "endExcluding": "2019.4.18"
      },
      {
        "startIncluding": "2020.1",
        "endExcluding": "2020.1.15"
      },
      {
        "startIncluding": "2020.2",
        "endExcluding": "2020.2.12"
      },
      {
        "startIncluding": "2020.3",
        "endExcluding": "2020.3.7"
      },
      {
        "startIncluding": "2020.4",
        "endExcluding": "2020.4.3"
      }
    ],
    "fixedVersions": [
      "2019.4.18",
      "2020.1.15",
      "2020.2.12",
      "2020.3.7",
      "2020.4.3"
    ],
    "reports": 0,
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2021-1629",
    "references": [
      "http://packetstormsecurity.com/files/162138/Tableau-Server-Open-Redirection.html",
      "http://seclists.org/fulldisclosure/2021/Apr/22",
      "https://help.salesforce.com/articleView?id=000357424&type=1&mode=1",
      "http://packetstormsecurity.com/files/162138/Tableau-Server-Open-Redirection.html",
      "http://seclists.org/fulldisclosure/2021/Apr/22",
      "https://help.salesforce.com/articleView?id=000357424&type=1&mode=1"
    ],
    "created": 1616778912780,
    "updated": 1781667132330
  },
  {
    "id": "CVE-2022-22127",
    "name": "CVE-2022-22127",
    "source": "NVD",
    "title": "CVE-2022-22127 \u2014 Tableau is aware of a broken access control vulnerability present in Tableau Server affecting Tableau Server customers using Local Identity Store for managing users. The vulnerability allows a malicious site administrator to change passwords for users in different sites hosted on the same Tableau Server, resulting in the potential for unauthorized access to data.Tableau Server versions affected are:2020.4.16, 2021.1.13, 2021.2.10, 2021.3.9, 2021.4.4 and earlierNote: All future releases of Tableau Server will address this security issue. Versions that are no longer supported are not tested and may be vulnerable.",
    "summary": "Tableau is aware of a broken access control vulnerability present in Tableau Server affecting Tableau Server customers using Local Identity Store for managing users. The vulnerability allows a malicious site administrator to change passwords for users in different sites hosted on the same Tableau Server, resulting in the potential for unauthorized access to data.Tableau Server versions affected are:2020.4.16, 2021.1.13, 2021.2.10, 2021.3.9, 2021.4.4 and earlierNote: All future releases of Tableau Server will address this security issue. Versions that are no longer supported are not tested and may be vulnerable.",
    "status": "Published security advisory",
    "statusType": "open",
    "allVersions": [
      "2020.4",
      "2021.1",
      "2021.2",
      "2021.3",
      "2021.4"
    ],
    "foundIn": "2020.4 through 2020.4.16; 2021.1 through 2021.1.13; 2021.2 through 2021.2.10; 2021.3 through 2021.3.9; 2021.4 through 2021.4.4",
    "affectedRanges": [
      {
        "startIncluding": "2020.4",
        "endIncluding": "2020.4.16"
      },
      {
        "startIncluding": "2021.1",
        "endIncluding": "2021.1.13"
      },
      {
        "startIncluding": "2021.2",
        "endIncluding": "2021.2.10"
      },
      {
        "startIncluding": "2021.3",
        "endIncluding": "2021.3.9"
      },
      {
        "startIncluding": "2021.4",
        "endIncluding": "2021.4.4"
      }
    ],
    "fixedVersions": [],
    "reports": 0,
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2022-22127",
    "references": [
      "https://help.salesforce.com/s/articleView?id=000365493&type=1",
      "https://help.salesforce.com/s/articleView?id=000365493&type=1"
    ],
    "created": 1653488108637,
    "updated": 1781670468773
  },
  {
    "id": "CVE-2022-22128",
    "name": "CVE-2022-22128",
    "source": "NVD",
    "title": "CVE-2022-22128 \u2014 Tableau discovered a path traversal vulnerability affecting Tableau Server Administration Agent\u2019s internal file transfer service that could allow remote code execution.Tableau only supports product versions for 24 months after release. Older versions have reached their End of Life and are no longer supported. They are also not assessed for potential security issues and do not receive security updates.",
    "summary": "Tableau discovered a path traversal vulnerability affecting Tableau Server Administration Agent\u2019s internal file transfer service that could allow remote code execution.Tableau only supports product versions for 24 months after release. Older versions have reached their End of Life and are no longer supported. They are also not assessed for potential security issues and do not receive security updates.",
    "status": "Published security advisory",
    "statusType": "open",
    "allVersions": [
      "2020.4",
      "2021.1",
      "2021.2",
      "2021.3",
      "2021.4",
      "2022.1"
    ],
    "foundIn": "2020.4 through 2020.4.20; 2021.1 through 2021.1.17; 2021.2 through 2021.2.15; 2021.3 through 2021.3.14; 2021.4 through 2021.4.9; 2022.1 through 2022.1.4",
    "affectedRanges": [
      {
        "startIncluding": "2020.4",
        "endIncluding": "2020.4.20"
      },
      {
        "startIncluding": "2021.1",
        "endIncluding": "2021.1.17"
      },
      {
        "startIncluding": "2021.2",
        "endIncluding": "2021.2.15"
      },
      {
        "startIncluding": "2021.3",
        "endIncluding": "2021.3.14"
      },
      {
        "startIncluding": "2021.4",
        "endIncluding": "2021.4.9"
      },
      {
        "startIncluding": "2022.1",
        "endIncluding": "2022.1.4"
      }
    ],
    "fixedVersions": [],
    "reports": 0,
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2022-22128",
    "references": [
      "https://help.salesforce.com/s/articleView?id=000367027&type=1",
      "https://kb.tableau.com/articles/Issue/issue-affecting-tableau-server-administration-agent",
      "https://help.salesforce.com/s/articleView?id=000367027&type=1"
    ],
    "created": 1666023320643,
    "updated": 1781670468873
  },
  {
    "id": "CVE-2025-26494",
    "name": "CVE-2025-26494",
    "source": "NVD",
    "title": "CVE-2025-26494 \u2014 Server-Side Request Forgery (SSRF) vulnerability in Salesforce Tableau Server allows Authentication Bypass",
    "summary": "Server-Side Request Forgery (SSRF) vulnerability in Salesforce Tableau Server allows Authentication Bypass.This issue affects Tableau Server: from 2023.3 through 2023.3.5.",
    "status": "Published security advisory",
    "statusType": "open",
    "allVersions": [
      "2023.3"
    ],
    "foundIn": "2023.3 through 2023.3.5",
    "affectedRanges": [
      {
        "startIncluding": "2023.3",
        "endIncluding": "2023.3.5"
      }
    ],
    "fixedVersions": [],
    "reports": 0,
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2025-26494",
    "references": [
      "https://help.salesforce.com/s/articleView?id=001534936&type=1"
    ],
    "created": 1739297747060,
    "updated": 1781686914730
  },
  {
    "id": "CVE-2025-26495",
    "name": "CVE-2025-26495",
    "source": "NVD",
    "title": "CVE-2025-26495 \u2014 Cleartext Storage of Sensitive Information vulnerability in Salesforce Tableau Server can record the Personal Access Token (PAT) into logging repositories",
    "summary": "Cleartext Storage of Sensitive Information vulnerability in Salesforce Tableau Server can record the Personal Access Token (PAT) into logging repositories.This issue affects Tableau Server: before 2022.1.3, before 2021.4.8, before 2021.3.13, before 2021.2.14, before 2021.1.16, before 2020.4.19.",
    "status": "Published security advisory",
    "statusType": "open",
    "allVersions": [
      "2020.4",
      "2021.1",
      "2021.2",
      "2021.3",
      "2021.4",
      "2022.1"
    ],
    "foundIn": "2020.4 to before 2020.4.19; 2021.1 to before 2021.1.16; 2021.2 to before 2021.2.14; 2021.3 to before 2021.3.13; 2021.4 to before 2021.4.8; 2022.1 to before 2022.1.3",
    "affectedRanges": [
      {
        "startIncluding": "2020.4",
        "endExcluding": "2020.4.19"
      },
      {
        "startIncluding": "2021.1",
        "endExcluding": "2021.1.16"
      },
      {
        "startIncluding": "2021.2",
        "endExcluding": "2021.2.14"
      },
      {
        "startIncluding": "2021.3",
        "endExcluding": "2021.3.13"
      },
      {
        "startIncluding": "2021.4",
        "endExcluding": "2021.4.8"
      },
      {
        "startIncluding": "2022.1",
        "endExcluding": "2022.1.3"
      }
    ],
    "fixedVersions": [
      "2020.4.19",
      "2021.1.16",
      "2021.2.14",
      "2021.3.13",
      "2021.4.8",
      "2022.1.3"
    ],
    "reports": 0,
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2025-26495",
    "references": [
      "https://help.salesforce.com/s/articleView?id=000390611&type=1"
    ],
    "created": 1739297747237,
    "updated": 1781686914873
  },
  {
    "id": "CVE-2025-52446",
    "name": "CVE-2025-52446",
    "source": "NVD",
    "title": "CVE-2025-52446 \u2014 Authorization Bypass Through User-Controlled Key vulnerability in Salesforce Tableau Server on Windows, Linux (tab-doc api modules) allows Interface Manipulation (data access to the production database cluster)",
    "summary": "Authorization Bypass Through User-Controlled Key vulnerability in Salesforce Tableau Server on Windows, Linux (tab-doc api modules) allows Interface Manipulation (data access to the production database cluster).This issue affects Tableau Server: before 2025.1.3, before 2024.2.12, before 2023.3.19.",
    "status": "Published security advisory",
    "statusType": "open",
    "allVersions": [
      "2024.2",
      "2025.1"
    ],
    "foundIn": "Earlier releases to before 2023.3.19; 2024.2 to before 2024.2.12; 2025.1 to before 2025.1.3",
    "affectedRanges": [
      {
        "endExcluding": "2023.3.19"
      },
      {
        "startIncluding": "2024.2",
        "endExcluding": "2024.2.12"
      },
      {
        "startIncluding": "2025.1",
        "endExcluding": "2025.1.3"
      }
    ],
    "fixedVersions": [
      "2023.3.19",
      "2024.2.12",
      "2025.1.3"
    ],
    "reports": 0,
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2025-52446",
    "references": [
      "https://help.salesforce.com/s/articleView?id=005105043&type=1"
    ],
    "created": 1753470940253,
    "updated": 1781688990160
  },
  {
    "id": "CVE-2025-52447",
    "name": "CVE-2025-52447",
    "source": "NVD",
    "title": "CVE-2025-52447 \u2014 Authorization Bypass Through User-Controlled Key vulnerability in Salesforce Tableau Server on Windows, Linux (set-initial-sql tabdoc command modules) allows Interface Manipulation (data access to the production database cluster)",
    "summary": "Authorization Bypass Through User-Controlled Key vulnerability in Salesforce Tableau Server on Windows, Linux (set-initial-sql tabdoc command modules) allows Interface Manipulation (data access to the production database cluster). This issue affects Tableau Server: before 2025.1.3, before 2024.2.12, before 2023.3.19.",
    "status": "Published security advisory",
    "statusType": "open",
    "allVersions": [
      "2024.2",
      "2025.1"
    ],
    "foundIn": "Earlier releases to before 2023.3.19; 2024.2 to before 2024.2.12; 2025.1 to before 2025.1.3",
    "affectedRanges": [
      {
        "endExcluding": "2023.3.19"
      },
      {
        "startIncluding": "2024.2",
        "endExcluding": "2024.2.12"
      },
      {
        "startIncluding": "2025.1",
        "endExcluding": "2025.1.3"
      }
    ],
    "fixedVersions": [
      "2023.3.19",
      "2024.2.12",
      "2025.1.3"
    ],
    "reports": 0,
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2025-52447",
    "references": [
      "https://help.salesforce.com/s/articleView?id=005105043&type=1"
    ],
    "created": 1753470940443,
    "updated": 1781688990327
  },
  {
    "id": "CVE-2025-52448",
    "name": "CVE-2025-52448",
    "source": "NVD",
    "title": "CVE-2025-52448 \u2014 Authorization Bypass Through User-Controlled Key vulnerability in Salesforce Tableau Server on Windows, Linux (validate-initial-sql api modules) allows Interface Manipulation (data access to the production database cluster)",
    "summary": "Authorization Bypass Through User-Controlled Key vulnerability in Salesforce Tableau Server on Windows, Linux (validate-initial-sql api modules) allows Interface Manipulation (data access to the production database cluster). This issue affects Tableau Server: before 2025.1.3, before 2024.2.12, before 2023.3.19.",
    "status": "Published security advisory",
    "statusType": "open",
    "allVersions": [
      "2024.2",
      "2025.1"
    ],
    "foundIn": "Earlier releases to before 2023.3.19; 2024.2 to before 2024.2.12; 2025.1 to before 2025.1.3",
    "affectedRanges": [
      {
        "endExcluding": "2023.3.19"
      },
      {
        "startIncluding": "2024.2",
        "endExcluding": "2024.2.12"
      },
      {
        "startIncluding": "2025.1",
        "endExcluding": "2025.1.3"
      }
    ],
    "fixedVersions": [
      "2023.3.19",
      "2024.2.12",
      "2025.1.3"
    ],
    "reports": 0,
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2025-52448",
    "references": [
      "https://help.salesforce.com/s/articleView?id=005105043&type=1"
    ],
    "created": 1753470940570,
    "updated": 1781688990597
  },
  {
    "id": "CVE-2025-52449",
    "name": "CVE-2025-52449",
    "source": "NVD",
    "title": "CVE-2025-52449 \u2014 Unrestricted Upload of File with Dangerous Type vulnerability in Salesforce Tableau Server on Windows, Linux (Extensible Protocol Service modules) allows Alternative Execution Due to Deceptive Filenames (RCE)",
    "summary": "Unrestricted Upload of File with Dangerous Type vulnerability in Salesforce Tableau Server on Windows, Linux (Extensible Protocol Service modules) allows Alternative Execution Due to Deceptive Filenames (RCE). This issue affects Tableau Server: before 2025.1.3, before 2024.2.12, before 2023.3.19.",
    "status": "Published security advisory",
    "statusType": "open",
    "allVersions": [
      "2024.2",
      "2025.1"
    ],
    "foundIn": "Earlier releases to before 2023.3.19; 2024.2 to before 2024.2.12; 2025.1 to before 2025.1.3",
    "affectedRanges": [
      {
        "endExcluding": "2023.3.19"
      },
      {
        "startIncluding": "2024.2",
        "endExcluding": "2024.2.12"
      },
      {
        "startIncluding": "2025.1",
        "endExcluding": "2025.1.3"
      }
    ],
    "fixedVersions": [
      "2023.3.19",
      "2024.2.12",
      "2025.1.3"
    ],
    "reports": 0,
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2025-52449",
    "references": [
      "https://help.salesforce.com/s/articleView?id=005105043&type=1"
    ],
    "created": 1753470940743,
    "updated": 1781688990747
  },
  {
    "id": "CVE-2025-52452",
    "name": "CVE-2025-52452",
    "source": "NVD",
    "title": "CVE-2025-52452 \u2014 Improper Limitation of a Pathname to a Restricted Directory ('Path Traversal') vulnerability in Salesforce Tableau Server on Windows, Linux (tabdoc api - duplicate-data-source modules) allows Absolute Path Traversal",
    "summary": "Improper Limitation of a Pathname to a Restricted Directory ('Path Traversal') vulnerability in Salesforce Tableau Server on Windows, Linux (tabdoc api - duplicate-data-source modules) allows Absolute Path Traversal. This issue affects Tableau Server: before 2025.1.3, before 2024.2.12, before 2023.3.19.",
    "status": "Published security advisory",
    "statusType": "open",
    "allVersions": [
      "2024.2",
      "2025.1"
    ],
    "foundIn": "Earlier releases to before 2023.3.19; 2024.2 to before 2024.2.12; 2025.1 to before 2025.1.3",
    "affectedRanges": [
      {
        "endExcluding": "2023.3.19"
      },
      {
        "startIncluding": "2024.2",
        "endExcluding": "2024.2.12"
      },
      {
        "startIncluding": "2025.1",
        "endExcluding": "2025.1.3"
      }
    ],
    "fixedVersions": [
      "2023.3.19",
      "2024.2.12",
      "2025.1.3"
    ],
    "reports": 0,
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2025-52452",
    "references": [
      "https://help.salesforce.com/s/articleView?id=005105043&type=1"
    ],
    "created": 1753470940870,
    "updated": 1781688991200
  },
  {
    "id": "CVE-2025-52453",
    "name": "CVE-2025-52453",
    "source": "NVD",
    "title": "CVE-2025-52453 \u2014 Server-Side Request Forgery (SSRF) vulnerability in Salesforce Tableau Server on Windows, Linux (Flow Data Source modules) allows Resource Location Spoofing",
    "summary": "Server-Side Request Forgery (SSRF) vulnerability in Salesforce Tableau Server on Windows, Linux (Flow Data Source modules) allows Resource Location Spoofing. This issue affects Tableau Server: before 2025.1.3, before 2024.2.12, before 2023.3.19.",
    "status": "Published security advisory",
    "statusType": "open",
    "allVersions": [
      "2024.2",
      "2025.1"
    ],
    "foundIn": "Earlier releases to before 2023.3.19; 2024.2 to before 2024.2.12; 2025.1 to before 2025.1.3",
    "affectedRanges": [
      {
        "endExcluding": "2023.3.19"
      },
      {
        "startIncluding": "2024.2",
        "endExcluding": "2024.2.12"
      },
      {
        "startIncluding": "2025.1",
        "endExcluding": "2025.1.3"
      }
    ],
    "fixedVersions": [
      "2023.3.19",
      "2024.2.12",
      "2025.1.3"
    ],
    "reports": 0,
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2025-52453",
    "references": [
      "https://help.salesforce.com/s/articleView?id=005105043&type=1"
    ],
    "created": 1753470941000,
    "updated": 1781688991353
  },
  {
    "id": "CVE-2025-52454",
    "name": "CVE-2025-52454",
    "source": "NVD",
    "title": "CVE-2025-52454 \u2014 Server-Side Request Forgery (SSRF) vulnerability in Salesforce Tableau Server on Windows, Linux (Amazon S3 Connector modules) allows Resource Location Spoofing",
    "summary": "Server-Side Request Forgery (SSRF) vulnerability in Salesforce Tableau Server on Windows, Linux (Amazon S3 Connector modules) allows Resource Location Spoofing. This issue affects Tableau Server: before 2025.1.3, before 2024.2.12, before 2023.3.19.",
    "status": "Published security advisory",
    "statusType": "open",
    "allVersions": [
      "2024.2",
      "2025.1"
    ],
    "foundIn": "Earlier releases to before 2023.3.19; 2024.2 to before 2024.2.12; 2025.1 to before 2025.1.3",
    "affectedRanges": [
      {
        "endExcluding": "2023.3.19"
      },
      {
        "startIncluding": "2024.2",
        "endExcluding": "2024.2.12"
      },
      {
        "startIncluding": "2025.1",
        "endExcluding": "2025.1.3"
      }
    ],
    "fixedVersions": [
      "2023.3.19",
      "2024.2.12",
      "2025.1.3"
    ],
    "reports": 0,
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2025-52454",
    "references": [
      "https://help.salesforce.com/s/articleView?id=005105043&type=1"
    ],
    "created": 1753470941133,
    "updated": 1781688991507
  },
  {
    "id": "CVE-2025-52455",
    "name": "CVE-2025-52455",
    "source": "NVD",
    "title": "CVE-2025-52455 \u2014 Server-Side Request Forgery (SSRF) vulnerability in Salesforce Tableau Server on Windows, Linux (EPS Server modules) allows Resource Location Spoofing",
    "summary": "Server-Side Request Forgery (SSRF) vulnerability in Salesforce Tableau Server on Windows, Linux (EPS Server modules) allows Resource Location Spoofing. This issue affects Tableau Server: before 2025.1.3, before 2024.2.12, before 2023.3.19.",
    "status": "Published security advisory",
    "statusType": "open",
    "allVersions": [
      "2024.2",
      "2025.1"
    ],
    "foundIn": "Earlier releases to before 2023.3.19; 2024.2 to before 2024.2.12; 2025.1 to before 2025.1.3",
    "affectedRanges": [
      {
        "endExcluding": "2023.3.19"
      },
      {
        "startIncluding": "2024.2",
        "endExcluding": "2024.2.12"
      },
      {
        "startIncluding": "2025.1",
        "endExcluding": "2025.1.3"
      }
    ],
    "fixedVersions": [
      "2023.3.19",
      "2024.2.12",
      "2025.1.3"
    ],
    "reports": 0,
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2025-52455",
    "references": [
      "https://help.salesforce.com/s/articleView?id=005105043&type=1"
    ],
    "created": 1753470941263,
    "updated": 1781688991657
  },
  {
    "id": "CVE-2025-26496",
    "name": "CVE-2025-26496",
    "source": "NVD",
    "title": "CVE-2025-26496 \u2014 Access of Resource Using Incompatible Type ('Type Confusion') vulnerability in Salesforce Tableau Server, Tableau Desktop on Windows, Linux (File Upload modules) allows Local Code Inclusion",
    "summary": "Access of Resource Using Incompatible Type ('Type Confusion') vulnerability in Salesforce Tableau Server, Tableau Desktop on Windows, Linux (File Upload modules) allows Local Code Inclusion.This issue affects Tableau Server, Tableau Desktop: before 2025.1.3, before 2024.2.12, before 2023.3.19.",
    "status": "Published security advisory",
    "statusType": "open",
    "allVersions": [
      "2024.2",
      "2025.1"
    ],
    "foundIn": "Earlier releases to before 2023.3.19; 2024.2 to before 2024.2.12; 2025.1 to before 2025.1.3",
    "affectedRanges": [
      {
        "endExcluding": "2023.3.19"
      },
      {
        "startIncluding": "2024.2",
        "endExcluding": "2024.2.12"
      },
      {
        "startIncluding": "2025.1",
        "endExcluding": "2025.1.3"
      }
    ],
    "fixedVersions": [
      "2023.3.19",
      "2024.2.12",
      "2025.1.3"
    ],
    "reports": 0,
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2025-26496",
    "references": [
      "https://help.salesforce.com/s/articleView?id=005132575&type=1",
      "https://www.cve.org/CVERecord?id=CVE-2022-1364"
    ],
    "created": 1755897331103,
    "updated": 1781686915013
  },
  {
    "id": "CVE-2025-26497",
    "name": "CVE-2025-26497",
    "source": "NVD",
    "title": "CVE-2025-26497 \u2014 Unrestricted Upload of File with Dangerous Type vulnerability in Salesforce Tableau Server on Windows, Linux (Flow Editor modules) allows Absolute Path Traversal",
    "summary": "Unrestricted Upload of File with Dangerous Type vulnerability in Salesforce Tableau Server on Windows, Linux (Flow Editor modules) allows Absolute Path Traversal.This issue affects Tableau Server: before 2025.1.3, before 2024.2.12, before 2023.3.19.",
    "status": "Published security advisory",
    "statusType": "open",
    "allVersions": [
      "2024.2",
      "2025.1"
    ],
    "foundIn": "Earlier releases to before 2023.3.19; 2024.2 to before 2024.2.12; 2025.1 to before 2025.1.3",
    "affectedRanges": [
      {
        "endExcluding": "2023.3.19"
      },
      {
        "startIncluding": "2024.2",
        "endExcluding": "2024.2.12"
      },
      {
        "startIncluding": "2025.1",
        "endExcluding": "2025.1.3"
      }
    ],
    "fixedVersions": [
      "2023.3.19",
      "2024.2.12",
      "2025.1.3"
    ],
    "reports": 0,
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2025-26497",
    "references": [
      "https://help.salesforce.com/s/articleView?id=005132575&type=1"
    ],
    "created": 1755897331330,
    "updated": 1781686915153
  },
  {
    "id": "CVE-2025-26498",
    "name": "CVE-2025-26498",
    "source": "NVD",
    "title": "CVE-2025-26498 \u2014 Unrestricted Upload of File with Dangerous Type vulnerability in Salesforce Tableau Server on Windows, Linux (establish-connection-no-undo modules) allows Absolute Path Traversal",
    "summary": "Unrestricted Upload of File with Dangerous Type vulnerability in Salesforce Tableau Server on Windows, Linux (establish-connection-no-undo modules) allows Absolute Path Traversal.This issue affects Tableau Server: before 2025.1.3, before 2024.2.12, before 2023.3.19.",
    "status": "Published security advisory",
    "statusType": "open",
    "allVersions": [
      "2024.2",
      "2025.1"
    ],
    "foundIn": "Earlier releases to before 2023.3.19; 2024.2 to before 2024.2.12; 2025.1 to before 2025.1.3",
    "affectedRanges": [
      {
        "endExcluding": "2023.3.19"
      },
      {
        "startIncluding": "2024.2",
        "endExcluding": "2024.2.12"
      },
      {
        "startIncluding": "2025.1",
        "endExcluding": "2025.1.3"
      }
    ],
    "fixedVersions": [
      "2023.3.19",
      "2024.2.12",
      "2025.1.3"
    ],
    "reports": 0,
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2025-26498",
    "references": [
      "https://help.salesforce.com/s/articleView?id=005132575&type=1"
    ],
    "created": 1755897331480,
    "updated": 1781686915293
  },
  {
    "id": "CVE-2025-52450",
    "name": "CVE-2025-52450",
    "source": "NVD",
    "title": "CVE-2025-52450 \u2014 Improper Limitation of a Pathname to a Restricted Directory ('Path Traversal') vulnerability in Salesforce Tableau Server on Windows, Linux (abdoc api - create-data-source-from-file-upload modules) allows Absolute Path Traversal",
    "summary": "Improper Limitation of a Pathname to a Restricted Directory ('Path Traversal') vulnerability in Salesforce Tableau Server on Windows, Linux (abdoc api - create-data-source-from-file-upload modules) allows Absolute Path Traversal.This issue affects Tableau Server: before 2025.1.3, before 2024.2.12, before 2023.3.19.",
    "status": "Published security advisory",
    "statusType": "open",
    "allVersions": [
      "2024.2",
      "2025.1"
    ],
    "foundIn": "Earlier releases to before 2023.3.19; 2024.2 to before 2024.2.12; 2025.1 to before 2025.1.3",
    "affectedRanges": [
      {
        "endExcluding": "2023.3.19"
      },
      {
        "startIncluding": "2024.2",
        "endExcluding": "2024.2.12"
      },
      {
        "startIncluding": "2025.1",
        "endExcluding": "2025.1.3"
      }
    ],
    "fixedVersions": [
      "2023.3.19",
      "2024.2.12",
      "2025.1.3"
    ],
    "reports": 0,
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2025-52450",
    "references": [
      "https://help.salesforce.com/s/articleView?id=005132575&type=1"
    ],
    "created": 1755897332117,
    "updated": 1781688990900
  },
  {
    "id": "CVE-2025-52451",
    "name": "CVE-2025-52451",
    "source": "NVD",
    "title": "CVE-2025-52451 \u2014 Improper Input Validation vulnerability in Salesforce Tableau Server on Windows, Linux (tabdoc api - create-data-source-from-file-upload modules) allows Absolute Path Traversal",
    "summary": "Improper Input Validation vulnerability in Salesforce Tableau Server on Windows, Linux (tabdoc api - create-data-source-from-file-upload modules) allows Absolute Path Traversal.This issue affects Tableau Server: before 2025.1.3, before 2024.2.12, before 2023.3.19.",
    "status": "Published security advisory",
    "statusType": "open",
    "allVersions": [
      "2024.2",
      "2025.1"
    ],
    "foundIn": "Earlier releases to before 2023.3.19; 2024.2 to before 2024.2.12; 2025.1 to before 2025.1.3",
    "affectedRanges": [
      {
        "endExcluding": "2023.3.19"
      },
      {
        "startIncluding": "2024.2",
        "endExcluding": "2024.2.12"
      },
      {
        "startIncluding": "2025.1",
        "endExcluding": "2025.1.3"
      }
    ],
    "fixedVersions": [
      "2023.3.19",
      "2024.2.12",
      "2025.1.3"
    ],
    "reports": 0,
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2025-52451",
    "references": [
      "https://help.salesforce.com/s/articleView?id=005132575&type=1"
    ],
    "created": 1755897332273,
    "updated": 1781688991050
  },
  {
    "id": "CVE-2026-111943",
    "name": "CVE-2026-111943",
    "source": "Tableau security notification + NVD",
    "title": "CVE-2026-111943 \u2014 Compromised intermediate certificates in Tableau Server",
    "summary": "Tableau's security notification reports compromised intermediate certificates from a third-party certificate authority. Update operating system certificates on every Server node first, then install the latest October 2026 release for your Server series. If upgrading is not possible, or the release is earlier than 2025.1, request Tableau Technical Support's remediation script. On Linux, disable the affected certificates in /etc/ca-certificates.conf and update the system trust store using IT or OS vendor guidance.",
    "status": "Vendor security notification; remediation required",
    "statusType": "open",
    "allVersions": [
      "2025.1",
      "2025.3",
      "2026.2"
    ],
    "foundIn": "Server releases before the October 2026 updates",
    "fixedVersions": [
      "2025.1.21",
      "2025.3.11",
      "2026.2.4",
      "2026.3"
    ],
    "reports": 0,
    "url": "https://nvd.nist.gov/vuln/detail/CVE-2026-111943",
    "references": [
      "https://www.tableau.com/support/releases/server/2025.1.21",
      "https://www.tableau.com/support/releases/server/2025.3.11",
      "https://www.tableau.com/support/releases/server/2026.2.4",
      "https://www.tableau.com/support/releases/server/2026.3",
      "https://go.dev/cl/851047",
      "https://go.dev/issue/82345",
      "https://groups.google.com/g/golang-announce/c/66pojueaQek",
      "https://pkg.go.dev/vuln/GO-2026-6809",
      "http://www.openwall.com/lists/oss-security/2026/10/20/29"
    ],
    "created": 1792545440797,
    "updated": 1792685899040,
    "affectedRanges": [
      {
        "endExcluding": "2025.1"
      },
      {
        "startIncluding": "2025.1",
        "endExcluding": "2025.1.21"
      },
      {
        "startIncluding": "2025.3",
        "endExcluding": "2025.3.11"
      },
      {
        "startIncluding": "2026.2",
        "endExcluding": "2026.2.4"
      }
    ],
    "requiredAction": "OS certificate updates are required on every node even after the Server update. The dashboard tracks Server build coverage; it does not verify OS trust stores or whether the support script was applied.",
    "fixLabel": "Server patched",
    "evidence": {
      "source": "Tableau security notification supplied by the portal administrator",
      "verifiedOn": "2026-10-26",
      "mapping": "The notification recommends the latest October 2026 release for each series. The listed Server releases were verified as published October 23, 2026.",
      "upstreamProduct": "Go standard library crypto/x509; NVD does not enumerate Tableau Server builds"
    }
  }
];
const SECURITY_GENERATED = "2026-10-26T20:31:13Z";
