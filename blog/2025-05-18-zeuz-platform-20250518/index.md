---
slug: zeuz-platform-20250518
title: ZeuZ Platform 20250518
authors: ['sazid']
tags: ['changelog']
---

# May 2025 (20250518)

*Release date: May 18, 2025*

---

Welcome to the May 2025 release of the ZeuZ platform! 🚀 We're thrilled to introduce several powerful updates that will enhance your testing experience. Key highlights include:

## Features

- ✨ Seamless ZeuZ Node connection
- 🔍 AI-Powered Mobile inspector
- 🔮 Variable viewer in Debug page
- 📊 AI-Powered Release report summary
- 🔄 Pre-requisite test case functionality
- 🔁 Rerun existing RunID capability
- 📈 Fail analysis reporting

<!-- truncate -->

## Bug Fixes

- Fixed report generation issues when GitHub integration is missing in Testing > Reports > Release Report
- Resolved step section slider visibility problems in Testing > Testcase > Create Testcase caused by table insertions in Description or Expected fields
- Corrected global attachments scope
- Fixed Build-to-Build comparison bugs in Testing > Reports > Execution

## Enhancements

- Improved assignee user search functionality in Testing > Reports > Fail Analysis
- Optimized page load time and performance in Testing > History
- Fixed incorrect team/project feature display in Project > Create/Edit > Task, Bug & Requirement pages
- Enhanced UI in Testing > Deployments > History & Set page
- Restricted Datastore access by team/project for better security
- Streamlined GitHub issue linking process
- Updated Run Queue feature and UI in Testing > Deployments > History
- Added Storybook Integration for UI Components
- Enhanced Donut Charts and fixed Total Value in Testing > Deployments > Set/History
- Implemented Automatic Default Filter for Fail Analysis Report
- Redesigned border color for clarity in Testing > Reports > Fail Analysis
- Updated Run History border color to reflect test case status in Testing > Test case edit pages

## Seamless ZeuZ Node Connection

Connect your ZeuZ Node effortlessly without the hassle of launching a terminal or copying and pasting commands. The process is now completely streamlined!

[View the accompanying ZeuZ Node release](https://github.com/AutomationSolutionz/Zeuz_Python_Node/releases/tag/v20.0.0)

<video controls loop>
  <source src="/blog/zeuz-platform-20250518/Connect ZeuZ Node.mp4" type="video/mp4" />
</video>

## AI-Powered Mobile Inspector

Inspect Android™ applications directly within ZeuZ Server without installing additional tools like Appium Inspector or Android uiautomatorviewer.

Say goodbye to hours of setup frustration! Simply connect your mobile device or launch an emulator, run ZeuZ Node, and connect to ZeuZ Server. Everything else is handled automatically. This also solves a persistent challenge:

> No more restarting the adb server after each inspection through Appium/uiautomatorviewer.

**Features:**

1. **Enhanced Screenshot and Element Tree Detection:** Improved accuracy in detecting and displaying UI elements
2. **Dedicated Attribute List Panel:** Right-side panel for comprehensive element attribute inspection
3. **Powerful Search Functionality:** Use **Ctrl+F** to search by CSS, XPath, or value
4. **Dual DOM Support:** Both ADB and Appium now provide DOM access, eliminating inspection barriers when the Appium server is active

![Mobile inspector](mobile-inspector.png)

## Variable Viewer in Debug Page

When debugging test cases, users often need to inspect current ZeuZ node variables to build further actions. Our new hierarchical tree view of variables provides a clean, intuitive interface for navigating complex data structures. Variables are displayed in three distinct formats:

1. **JSON Object Variables:** Standard JSON-compatible variables with reasonably sized values
2. **JSON Schema Variables:** Large JSON variables truncated for readability and presented as schemas
3. **Non-JSON Variables:** Non-JSON objects (e.g., Python modules, WebDriver instances, WebDriver elements) with up to 200 properties displayed
4. **Oversized Values:** Variables with excessively large values are omitted for performance optimization

![Debug variable viewer](debug-variables.png)

## AI-Powered Release Report Summary

Our intelligent report summary component analyzes release data and presents key insights through a modern UI. This feature enables stakeholders to quickly assess release impact, quality, and notable changes without wading through lengthy detailed reports.

![AI-Powered release report summary](ai-powered-release-report-summary.png)

## Pre-requisite Test Case

This powerful new feature allows one test case to specify another as its pre-requisite. When a test case is deployed, its pre-requisite test case executes first.

When multiple test cases share a common pre-requisite and are deployed together, the pre-requisite executes only once throughout the entire RunID (run session), improving efficiency.

The system intelligently prevents cyclic dependencies during both link time and deployment time.

**Background:**

- Testers typically need pre-test setup like data preparation or environment configuration. Previously, users relied on set re-ordering to ensure pre-setup tests ran first.
- Some test sets contain multiple test case groups with their own pre-requisites.
- Test cases with pre-requisites may appear in multiple sets.

These factors previously made it challenging to debug or run test cases with pre-requisite steps. Our solution streamlines this process completely.

**Pre-requisite search in test case details tab:**  
![pre-requisite search in test case details tab](pre-requisite-search-in-tc-detail.png)

**Pre-requisite, once selected:**  
![Pre-requisite, once selected](pre-requisite-once-selected.png)

**Rerun and pre-requisite selection from Testing > Run tests page:**  
![Rerun and pre-requisite selection from Testing > Run tests page](rerun-and-pre-requisite-in-run-test.png)

## Rerun an Existing RunID

Users can now re-run an existing RunID or selected test cases within a RunID, addressing common operational challenges:

1. When a test case fails due to a temporary issue, there's no need to rerun an entire test set of 1,000+ cases just to achieve a green RunID status.
2. If a node terminates prematurely before sending reports to the server (e.g., due to memory constraints), leaving test cases marked as "submitted" in the RunID, you can now easily rerun just those affected cases.

**Search RunIDs for rerun (Testing > Run tests > Advanced settings):**  
![Search runids for rerun](search-runids-for-rerun.png)

## Fail Analysis Report

When multiple test cases fail, identifying root causes and avoiding duplicate bug reports can be challenging. Our Fail Analysis Report solves this by analyzing failed test steps for common failure patterns and grouping them intelligently.

When one test case in a group is fixed, all related test cases should automatically resolve as long as the steps are global, dramatically improving efficiency.

### How It Works

Access the report through **Testing > Reports > Fail Analysis** and create a filter for your analysis.

![Fail analysis report: configure filter](fail-analysis-report-filter.gif)

- Click on Filter to select Milestone, Version, or GitHub parameters
- In this example, we compare Milestone 2.9 with 2.8
- The system generates a comprehensive Fail Test Case Report

![Description of card view](fail-analysis-card-view-description.png)

**Card View Elements:**

1. Test case title
2. Failed test case step
3. Failure reason
4. Assignee set
5. Assignee feature
6. Assignee milestone
7. Assignee version
8. Comment option (anyone can comment and reply)
9. Assignee priority
10. Assignee label
11. Assignee folder

![Fail analysis: card list view](fail-analysis-card-list.png)

You can also view reports categorized by failure type.

![Fail analysis: group by different category](fail-analysis-group-by.png)

- Track pass/fail statuses at the top of the report
- Group reports by:
  1. Failed test case
  2. Set
  3. Assignee
- Switch between the Fail tab and the GitHub tab to find linked test cases with GitHub issue filters
