---
id: reports
title: Reports
sidebar_position: 16
---

import MetaCard from '@site/src/components/MetaCard/';
import DocScreenshot from '@site/src/components/DocScreenshot';

## Overview

**Reports** turns recorded test results and suite information into saved views of quality, coverage, readiness, and execution activity. Start with a template or a blank report, choose the period and filters, arrange sections, and save or export the results.

<MetaCard
difficulty="🟡 Intermediate"
lastUpdated="24 Nov, 2026"
/>

This guide follows the QA site's **ZeuZ Studio** interface verified on 24 November 2026. Older desktop builds may offer fewer templates or section types. Select any screenshot to open its full-resolution image in a new tab.

## Why it matters / Use cases

- Prepare weekly quality reviews and release-readiness reports.
- Find coverage gaps, flaky tests, recurring failures, and slow tests.
- Review case ownership and execution activity.
- Save a consistent layout, share it within the workspace, or export a review artifact.

## Prerequisites

- Sign in and select the intended workspace.
- Have recorded results for the period you want to review. Reports does not execute tests.
- To edit an existing report or change its visibility, you must own it; other users can copy shared reports.
- Measurements and findings require tests that record that evidence. A readiness projection requires a milestone with an end date.

Use **Reports** for a configurable view across executions, [Dashboard](./Dashboard.md) for an overview, and [Run History](<./Run History.md>) for individual runs and their evidence. A saved report stores its layout and filters; its values refresh from matching data. Export when you need a file of the current results.

## Create a report with New report

Open **Reports** in the main sidebar, below **Run History**, and select **New report**. Use **Toggle sidebar** if navigation is collapsed; desktop layouts may also provide **Back to chat** to return to the main navigation.

<DocScreenshot src="/img/zeuz-test-studio/reports/start-report-page.png" alt="Start a report with the Reports sidebar, nine template cards, and Blank report" />

| Area | What it opens |
| --- | --- |
| **New report** | The starting-point chooser shown above. |
| **MY REPORTS** | A report you already saved. A lock indicates a private report. |
| **TEMPLATES** or a template card | A new draft with prepared, editable sections. |
| **Blank report** | An empty draft. Find this card at the bottom left, directly below **Failure analysis**; scroll down if needed. It is not in the sidebar's **TEMPLATES** list. |

The two **Release readiness** cards differ: the **flag** card reviews readiness by date; the **rocket** card uses the existing metrics-and-tables layout.

<details>
<summary>Compare templates and their initial periods</summary>

| Starting point | What it includes initially | Initial period |
| --- | --- | --- |
| **Quality story** | A generated headline, headline numbers, case status and kind, feature map and coverage, changes, feature pass-rate heatmap, speed changes, failure reasons, measurements, findings, and every test. | Last 30 days |
| **Release readiness — first card, flag icon** | Date-based readiness, case status, changes, feature coverage, most failing tests, tests not run, and every test. Its description begins **Where the release stands on each date**. | Last 90 days |
| **Team progress** | Per-person case ownership, case status, additions and activity, followed by runs grouped by who started them. | Last 30 days |
| **Weekly summary** | Headline numbers, results over time, most failing tests, common failure reasons, and recent runs. | Last 7 days |
| **Release readiness — second card, rocket icon** | The existing metrics-and-tables layout: pass and run-pass rates, failure and flakiness numbers, results by feature, latest test status, tests not run, and failing tests. Its description begins **Is it safe to ship?** | Last 30 days |
| **Flaky tests** | Flakiness numbers, a trend, and a list of tests with mixed passing and failing results. | Last 30 days |
| **Failure analysis** | Failure numbers, failures over time and by feature, failure reasons, and failing tests. | Last 30 days |
| **Team activity** | Run and test-result volume, total run time, activity by person and machine, and a comparison table. | Last 30 days |
| **Speed** | Average run and test times, total run time, a duration trend, and slowest tests. | Last 30 days |
| **Blank report** | An empty canvas where you add the sections you need. | Last 30 days |

</details>

### Create and save your first report

This example uses **Quality story**. Choose **Blank report** instead if you want to build every section yourself.

1. Confirm the workspace, then select **New report → Quality story**.
2. Click the name at the top and enter **Quality review — documentation example**.
3. Keep **Last 30 days**, or choose the required period. For this example, select **Filter → Branch**, check **main**, and close the popover. Confirm **Branch: main**; **Branch: Any** does not restrict the data.
4. Wait for the results to refresh. The branch in the app's top bar does not replace the report's filter.

<DocScreenshot src="/img/zeuz-test-studio/reports/first-report-draft.png" alt="Named Quality story draft with unsaved status, Last 30 days, Branch main, and Save" />

5. Review the sections. Click a title or pencil icon to edit it, then select **Done** to close the editor.
6. To add content, select **Add section** on an empty canvas or below existing sections. Choose an option from the menu below; **Story visuals** opens a submenu. Configure the added section and select **Done**.

<DocScreenshot src="/img/zeuz-test-studio/reports/add-section.png" alt="Add section menu with standard sections and the Story visuals submenu" />

<details>
<summary>See the Blank report canvas and section editor</summary>

**Blank report** starts with **This report is empty** and **Add section**.

<DocScreenshot src="/img/zeuz-test-studio/reports/blank-report.png" alt="Blank report canvas showing Add section and Save" />

For **Headline numbers**, choose metrics, width, and whether to compare with the previous period.

<DocScreenshot src="/img/zeuz-test-studio/reports/first-report-editor.png" alt="Headline numbers editor showing metric choices, width, comparison, and Done" />

</details>

7. Select **Save** in the report toolbar and wait for **Saved · last changed …**. New reports are private by default, shown as **Only me**.
8. Reopen the report under **MY REPORTS** and confirm its name, period, and filters. Use this saved entry to continue editing; the template shortcut starts another draft.

<DocScreenshot src="/img/zeuz-test-studio/reports/first-report-saved.png" alt="Saved report header showing Only me, Last 30 days, Branch main, and inactive Save" />

<DocScreenshot src="/img/zeuz-test-studio/reports/first-report-sidebar.png" alt="New private report selected under MY REPORTS" />

**Done** closes an editor. **Save** keeps the report definition. **Export** creates a file of the current view. Save again after later edits; an inactive **Save** can mean there are no unsaved changes.

## Configure sections and filters

| Section option | Purpose and main settings |
| --- | --- |
| **Headline numbers** | Select up to eight metrics and optionally compare with the previous period. |
| **Trend over time** | Choose **Show**, time under **Over**, an interval, and chart style; use **Split** where supported. |
| **Compare groups** | Starts with horizontal test-outcome bars by feature. Change the metric, grouping, style, and group limit. |
| **Share of a whole** | Starts with a donut of runs by outcome. Change the metric and grouping for a different breakdown. |
| **List of tests or runs** | Choose failing, flaky, or slow tests, recent runs, or failure reasons, plus a row limit. |
| **Comparison table** | Starts with runs, pass rate, and failed results by branch. Choose a grouping, up to eight metric columns, and a row limit. |
| **Note** | Enter your own context or conclusions. Notes do not query results or have data filters. |
| **Story visuals** | Add the richer views described in the next section. |

All sections have a title and width of one to four columns. Drag the title handle to reorder sections or the right edge to resize them. A section's **…** menu also provides editing, movement, duplication, and removal. Removing a section does not delete execution results.

Choose the report period at the top; **Custom dates…** sets an explicit range. **Different filters for this section** replaces the report's period and filters for that data section, rather than adding restrictions on top. Label overrides clearly.

<details>
<summary>Filter categories and screenshot</summary>

<DocScreenshot src="/img/zeuz-test-studio/reports/filter-menu.png" alt="Report Filter menu listing Branch, Set, Version, Milestone, Environment, Started by, Machine, Feature, Run result, and Test name" />

| Filter | Use it to focus on |
| --- | --- |
| **Branch** | Executions recorded for the selected Git branch or branches. |
| **Set** | A particular group of tests executed as a set. |
| **Version / Milestone** | Runs associated with the chosen release information. |
| **Environment** | Results associated with a recorded environment. |
| **Started by** | The person who initiated the run. |
| **Machine** | The execution machine. |
| **Feature** | Results associated with the selected feature. |
| **Run result** | Executions with the selected run-level outcome. |
| **Test name** | Tests matching the name condition. |

</details>

## Add Story visuals

**Story visuals** are ready-made sections that help readers understand coverage, readiness, changes, and individual test results. A template supplies a complete starting layout; a Story visual adds one section to the report you are editing.

### Add a visual to your report

1. Open a report draft or a saved report you can edit.
2. Select **Add section → Story visuals**. On a blank report, **Add section** is in the empty canvas; on a populated report, it is below the sections.
3. Select a visual, such as **Coverage by feature**. Its section appears on the canvas and **Edit section** opens. Set its title and width, then review any additional controls offered for that visual.
4. Select **Done**, review the result, and select **Save** in the report toolbar.

The visual normally uses the report's period and filters. **Different filters for this section** replaces that scope for this section only. The options below are grouped by purpose for this guide; the submenu lists the individual visual names.

### Summarize quality and coverage

Use these views to answer: **What is passing, which areas are covered, and where are the gaps?**

| Visual | What it shows and how to use it |
| --- | --- |
| **Headline** | A summary sentence generated from the data, a pass-rate ring, latest passing and failing case counts, flakiness, and a trend. Use it at the top of a review. Its result pass rate and latest-case counts measure different things. |
| **How the cases run** | Suite cases grouped by latest result in the period: passing, failing, or not run. It also distinguishes **With API checks** from **Screens only**. Use it to see both execution gaps and case kinds. |
| **Coverage by feature** | A card per feature with case count, percentage that ran, pass rate, and failing/flaky indicators. Compare **ran** with **pass**: a high pass rate can still leave many cases unexecuted. Select **Show all … features** when offered. |
| **Where the cases are** | A feature map: block size represents case count and color represents pass rate. Select a block to list its cases. Follow the legend; a large block means more cases, not more failures. |
| **Pass rate by feature over time** | A heatmap of pass rate across time buckets. Read a row across to follow a feature; blank cells mean no result, not 0%. **All** is the aggregate for the scope. The editor offers **One row per** and **Rows**. |
| **Suite growth** | A timeline of suite case counts and passing cases. Use it to check whether passing coverage is keeping pace with the growing suite; adding cases does not mean they ran. |

<details>
<summary>See the quality summary, coverage views, and heatmap</summary>

The **Headline** below reports an **82.9%** test-result pass rate and **16** cases passing on their latest result in the period. These have different denominators.

<DocScreenshot src="/img/zeuz-test-studio/reports/quality-story.png" alt="Quality story showing the generated headline, latest case counts, pass-rate trend, and metrics" />

The next image compares case status, the feature map, and feature coverage. **Not run in this period** does not necessarily mean a case has never run at an earlier date.

<DocScreenshot src="/img/zeuz-test-studio/reports/coverage-visuals.png" alt="Case-status distribution, feature map, and feature cards showing execution coverage and pass rate" />

Use the heatmap to see when a feature's results changed. Read the percentages together with the selected period and available results.

<DocScreenshot src="/img/zeuz-test-studio/reports/feature-heatmap.png" alt="Feature pass-rate heatmap with weekly percentages, empty cells, and an All column" />

<DocScreenshot src="/img/zeuz-test-studio/reports/story-visual-editor.png" alt="Heatmap editor showing title, width, grouping, row controls, and section filters" />

</details>

### Review readiness, ownership, and changes

Use these views to answer: **How has the suite progressed, whose cases need attention, and what changed?**

| Visual | What it shows and how to use it |
| --- | --- |
| **Release readiness** | Case status at successive dates, including passing, failing, never run, and percentage passing. Select a date button to inspect that point. A milestone with an end date enables a projection where sufficient data is available. Solid lines show measured values; dashed lines show estimates. |
| **Team progress** | Per-person owned cases, latest status, additions, run activity, and last-active date. The ring shows the share of owned cases passing on their latest result. Ownership uses the recorded creator, or the most frequent runner when no creator is recorded; it differs from who started a run. |
| **What changed** | Cases that **Started failing**, were **Fixed**, are **Still failing**, or are **New, failing / New, passing** in the comparison. Select a category to list its cases, then use **Open run** to inspect evidence. |

Read **Not passing** in readiness as failing **plus** never-run cases. In **Team progress**, check the failing/quiet breakdown under **Need attention**. In **What changed**, read the result date: an earlier failure can remain without a new result in this period. The **New** labels alone do not establish when the test definition was created.

<details>
<summary>See readiness, team ownership, and change examples</summary>

This readiness example shows **17 of 35** cases passing (**48.6%**). Its **18 not passing** comprise **4 failing** and **14 never run**. Suite growth can lower the percentage even when more cases pass. A projection is an estimate, not a release approval.

<DocScreenshot src="/img/zeuz-test-studio/reports/release-readiness.png" alt="Readiness by date with latest case status, comparison table, and progress bars" />

Team cards separate owned-case status from execution activity. Read the ownership ring and the run count/percentage separately.

<DocScreenshot src="/img/zeuz-test-studio/reports/team-progress.png" alt="Team progress showing owned cases, passing rings, status breakdowns, additions, and activity" />

Change categories describe recorded status comparisons; they do not establish that a particular code change caused a failure.

<DocScreenshot src="/img/zeuz-test-studio/reports/case-status-and-changes.png" alt="Case-status overview beside selectable change categories and Open run links" />

</details>

### Investigate performance and individual tests

Use these views to answer: **What became slower, what evidence was recorded, and which execution should I inspect?**

| Visual | What it shows and how to use it |
| --- | --- |
| **Speed changes** | Each test's average duration now versus the preceding period, with slower/faster/steady groups. Read **Before**, **Now**, and the percentage together; compare equivalent execution conditions before attributing a change to the application. |
| **Measurements** | Values tests explicitly recorded through **ctx.measure**, compared with their limits. The summary identifies measured values, those outside limits, and those slower than usual. Ordinary run durations do not automatically populate this view. |
| **Findings** | Problems recorded through **ctx.finding**, with open severity counts from **Critical** to **Info**, plus set-aside and unconfirmed totals. These are findings, not failed-test counts; adding this view does not perform a security check. |
| **Every test** | A searchable case list with **Failing**, **Flaky**, **Not run**, and **Passing** controls. Expand a case for its recorded problem, metadata, latest run, result count, pass rate, average time, and recent history. |

For example, to investigate one failing case:

1. Add **Story visuals → Every test**.
2. Select **Failing**, or search by name, ID, or feature. Use **Show … more** if additional cases are available.
3. Expand the case with its chevron and read **What needs fixing** alongside the last-run date and result history. Recent markers are ordered oldest first.
4. Select **Open latest run** to inspect that execution in **Run History**.

<DocScreenshot src="/img/zeuz-test-studio/reports/every-test-expanded.png" alt="Every test with a case expanded to show its recorded problem, metadata, results, average time, and Open latest run" />

A flaky case can have a passing latest result but still appear under **Flaky** rather than **Passing**. Empty measurements or findings mean no matching evidence is recorded; they do not prove that checks passed.

<details>
<summary>See the Measurements and Findings empty states</summary>

These sections explain which evidence the tests need to record before values can appear.

<DocScreenshot src="/img/zeuz-test-studio/reports/measurements-and-findings.png" alt="Measurements and Findings showing empty-state guidance and severity counts" />

</details>

## Read metrics and investigate results

Keep these measures separate before comparing sections:

| Measure | What it counts |
| --- | --- |
| **Runs** | Execution runs, each of which can contain several tests. |
| **Test results** | Recorded results; a repeatedly executed test can contribute more than once. |
| **Test pass rate** | Passing test results relative to the eligible result total. |
| **Run pass rate** | Passing runs relative to the eligible run total. |
| **Latest case status / readiness** | Cases on their latest result against a suite case count that can include unexecuted cases. |
| **Flaky tests** | Tests with both passing and failing results in the selected scope. |

Check each section's period, overrides, and row/group limits. An empty heatmap cell means no result, and **Not run** does not mean passed. The **Every test** list classifies flaky cases separately, so its **Passing** count can differ from the headline's latest-passing count.

<details>
<summary>Table columns: Most failing tests, Common failure reasons, and Recent runs</summary>

Use the table's column headings to understand whether it counts runs, individual results, distinct tests, or failure occurrences. A row limit can hide additional entries: **Showing 15 of 32** means the visible table is not the complete list.

The following example shows three table sections from a report. Each uses the report's period and filters unless **Different filters for this section** is enabled. The values shown are example results, not fixed values for these sections.

<DocScreenshot src="/img/zeuz-test-studio/reports/failure-tables-and-recent-runs.png" alt="Report tables showing Most failing tests with failure counts and rates, Common failure reasons with occurrence and test counts, and Recent runs with outcomes and execution details" />

### Most failing tests

This table identifies tests with recorded failures in the selected scope. Use it to prioritize which tests to investigate; a failing test may indicate an application defect, a test problem, or an execution-environment issue.

| Column | Meaning |
| --- | --- |
| **Test** | The test's name, with its identifier underneath, such as **#2279**. Long names may be shortened to fit the column. |
| **Failures** | The number of failed results recorded for that test in the selected scope. Repeated failures of the same test contribute to this count. |
| **Failure rate** | The percentage of that test's results that failed in the selected scope. Read this together with the count to understand how much evidence supports the rate. |
| **Last failed** | The date and time of the latest recorded failure for that test in the selected scope. This is not necessarily its latest execution; a later execution may have passed. |

In the image, **Blue top quantity persists and remov…** has **1** failure and a **100%** failure rate. **Sign in with valid SauceDemo creden…** also has **1** failure, but its rate is **16.7%**. The equal failure counts do not mean the tests failed equally often relative to their recorded results. A single failure at 100% also does not establish a persistent problem outside the selected scope.

### Common failure reasons

This table groups recorded failure messages so you can spot recurring error patterns across tests. The reason text is evidence reported by an execution; it is not a confirmed explanation of the underlying cause.

| Column | Meaning |
| --- | --- |
| **Reason** | The recorded failure message or error description. Long messages may wrap or be shortened. |
| **Times** | The number of recorded occurrences grouped under that reason in the selected scope. |
| **Tests** | The number of distinct tests affected by that reason in the selected scope. Multiple occurrences can belong to the same test. |

For example, **Locator.check: Timeout 30000ms exceeded.** indicates that the reported check did not finish within its 30-second timeout. It does not explain whether the element was missing, the application was slow, or another condition prevented the check. **BrowserType.launch: Executable doesn't exist…** indicates that the browser launch could not find the expected executable. Inspect the corresponding run's logs and environment before deciding on a fix.

Every visible reason in this image has **Times = 1** and **Tests = 1**: each shown reason occurred once and affected one test in this view. Scroll within the table if more rows are available, and check its configured row limit.

### Recent runs

This table lists individual executions with their outcomes and execution context. Use it to find the run behind a summary and open the detailed evidence.

| Column | Meaning |
| --- | --- |
| **Run** | The execution's name. Select its link to open that execution in **Run History**. |
| **Result** | The run-level outcome, such as **Passed**, **Failed**, or **Stopped**. This describes the execution as a whole. |
| **Passed** | The number of tests reported as passed in that run. |
| **Failed** | The number of tests reported as failed in that run. |
| **Not run** | The number of tests reported as not executed in that run. These tests have no passing result from that execution. |
| **Duration** | The run's reported execution duration. |
| **Branch** | The branch associated with that execution. |
| **Started** | The date and time the execution started. |
| **Started by** | The person who initiated the execution. |

In the image, **Try a successful login** passed with **1** passed test, **0** failed tests, and **0** not run. The stopped **Re-run failed: Login with valid credentials and math prompt** shows **0** passed, **0** failed, **1** not run, and **0ms** duration. Zero failures in that row does not mean the test passed; the run was stopped and the test is reported as not run.

Select the relevant run-name link, review its test cases and steps in **Run History**, and inspect the available screenshots and logs. Return to Reports to continue the broader review. Editing or removing a report table changes its presentation, not the underlying execution results.

For a detailed explanation of the evidence viewer, see [Run History](<./Run History.md>). A report summary does not by itself establish the cause of a failure.

</details>

Select a run link to open **Run History**, then inspect its cases, steps, screenshots, and logs. Summary messages and flakiness are investigation signals, not confirmed root causes.

## Share, export, and manage reports

<details>
<summary>Visibility: Only me or Shared</summary>

For a saved report you own, open the visibility button beside **Export**.

<DocScreenshot src="/img/zeuz-test-studio/reports/visibility.png" alt="Visibility menu explaining Only me and Shared, with Only me currently selected" />

| Visibility | Who can use it |
| --- | --- |
| **Only me** | The report is private to its owner. |
| **Shared** | Everyone in the workspace can open and copy the report. Only its owner can change it. |

Choose **Shared** only when you intend to make the report available to the workspace. Visibility changes are applied directly; they are separate from saving unsaved layout or filter edits. Sharing a report does not make it public on the internet.

</details>

<details>
<summary>Export PDF or CSV</summary>

Wait for the results to finish loading, then open **Export**.

<DocScreenshot src="/img/zeuz-test-studio/reports/export.png" alt="Report toolbar with Export open, showing Download PDF and Download CSV" />

- **Download PDF:** Exports a printable report of the current sections and results. Follow the desktop save dialog or browser print/save flow presented by your environment.
- **Download CSV:** Downloads the report's section data in a spreadsheet-friendly text format. CSV preserves data rather than the visual chart layout.

Exports use the current report view, which can include unsaved edits. Save separately if you also want to preserve that report definition in Test Studio. Review filters and section row/group limits before treating an export as a complete dataset.

</details>

<details>
<summary>Duplicate, start page, delete, or copy another user’s report</summary>

Open **…** beside **Save** on a saved report:

| Action | What it does |
| --- | --- |
| **Duplicate** | Creates a separate private copy of the report definition. |
| **Use as start page** | Sets this saved report as the page Test Studio opens on. The menu offers a corresponding option to stop using it as the start page when it is already selected. |
| **Delete** | Deletes the saved report after confirmation. It is available to the owner. It does not delete the recorded executions the report summarizes. |

If the report belongs to someone else, use **Save a copy** to create your own version.

</details>

## Guidance for AI agents

- Resolve the workspace, report, period, filters, and section overrides before summarizing.
- State the scope and metric denominators; check row limits and distinguish measured results from projections.
- Follow run evidence before claiming a cause. Empty measurements or findings do not prove checks passed.
- A read-only review does not authorize edits, sharing, deletion, or start-page changes. For approved creation, verify the saved name, definition, and visibility.

Example: “Open the saved Weekly summary read-only. State its scope, summarize pass rate and failures, and identify runs worth investigating.”

## FAQs / Troubleshooting

<details>
<summary>Where is Blank report, and why is no new report saved yet?</summary>

**Reports → New report → Start a report**. Select the bottom-left **Blank report** card below **Failure analysis**, scrolling if necessary. Add sections and select **Save**. Opening a draft or selecting **Done** does not create a saved entry.

</details>

<details>
<summary>Why is the report empty or dimmed?</summary>

Wait for refreshed results. If it stays empty, check the workspace, period, filters, and section overrides. A blank draft also needs sections. Measurements and findings require matching evidence recorded by tests.

</details>

<details>
<summary>Why do totals differ, or why is a readiness projection missing?</summary>

Compare equivalent measures and scope, including section overrides and display limits. Case-based readiness and result pass rate use different denominators. A milestone projection requires a milestone with an end date and suitable history; it remains an estimate.

</details>

<details>
<summary>Why is Save disabled, or why did my edits disappear?</summary>

Save can be inactive when there are no changes or while saving. After edits, select **Save** and confirm the saved status. Reopen the entry under **MY REPORTS**, not the original template. For another owner’s report, use **Save a copy**.

</details>

<details>
<summary>Why can I not find or share a report?</summary>

Check the workspace and ownership. Private reports are visible to their owner; shared reports can be opened and copied by workspace users. Only the owner can edit the report or its visibility.

</details>

<details>
<summary>Will a saved report always show the same values?</summary>

No. It saves the definition, and matching data refreshes. Relative periods advance and new results can change totals. Use custom dates and export when you need a review artifact. If export stalls, wait for data to load, check connectivity, and complete the offered save/print flow.

</details>
