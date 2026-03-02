---
id: fail-analysis
title: Fail Analysis
---

import MetaCard from '@site/src/components/MetaCard';

**Fail Analysis** is the process of examining failed tasks or test cases to find the root cause, classify issues, and take corrective actions to prevent future failures.

<MetaCard
  availableFrom="202602"
  difficulty="🟢 Medium"
  lastUpdated="02 Mar, 2025"
  relatedTopics={["Run test cases", "Run history", "Run ID Details"]}
/>


### Why it matters / Use Cases:

- Analyzing failed test cases to fix defects.
- Tracking recurring failures to spot patterns.
- Assisting in reporting and compliance by documenting failure reasons.

## Prerequisites
- Access to ZeuZ Server with permissions for **Testing → Reports → Fail Analysis**.
- Test executions completed with failed cases available for review.
- Detailed test logs or reports generated from executions.
- Associated versions, or milestones linked to the test runs.

## Quick-Start
1. Open the **Fail Analysis** page, and check the graph to compare failures across versions or milestones at the top.
2. Review the failed test case cards and also add comments into it.
3. Assign tickets to the team members (Use control + click and the plus symbol).
4. Group the test cases in three ways: 1) Group by Fail, 2) Group by Set, 3) Group by Assignee.

## Features
### Search bar
- A search bar is available at the top of the page.
- It allows users to search for specific test cases directly.

![](/img/fail-analysis/search-fail.png)

### Grouping
- The top bar shows how the data on the page is currently grouped.
- The current grouping is set to **Group by Assignee**.
- Users can change the grouping to **Group by Set** or **Group by Fail**.
- The selected grouping preference is saved automatically.
- After refreshing the page, the grouping remains unchanged.

![](/img/fail-analysis/assignee-group.png)

### Tabs
- The dropdown is currently expanded, displaying available options.
- **Fail** tab is selected and highlighted, indicating the current choice.
- Additional tabs, **GitHub** and **Jira**, are available for selection, allowing the user to link or report the failure to an external system.

![](/img/fail-analysis/fail-tab.png)

### Filter
- First, click the **Filter** option.

![](/img/fail-analysis/filter-issue.png)

- After clicking the "Filters" button, a "Customize your Filters" window appears with multiple tabs, including **Milestone**, **Version**, **GitHub Issue**, and **Jira Issue**.

![](/img/fail-analysis/filter-tab.png)

- To select a Milestone, click the `Milestone` tab and fill in the required information and then click **Apply Filters**:  
  - **Current Milestone**: It is the milestone whose data is currently shown and used to calculate all report metrics.
  - **Compare Milestone**: It refers to another milestone selected for comparison against the current milestone.

![](/img/fail-analysis/milestone-filter.png)

- To select a Version, click the `Version` tab and fill in the required information and then click **Apply Filters**:  
  - **Current Version**: It refers to the software version whose test case and automation data is currently displayed in the report. All metrics are calculated based on this selected version.
  - **Compare Version**: It is an additional software version selected to compare its metrics with the current version.
:::note
If we want to select a version, we can choose the production version by default, or select the development version by clicking the "Show Dev" checkbox.

:::


![](/img/fail-analysis/version-filter.png)

- To select a GitHub Issue, click the `GitHub Issue` tab and fill in the required information and then click **Apply Filters**:  
  - **Repository**: It allows users to select the GitHub repository from which issues will be considered.
  - **Issue Status**: It enables filtering issues by status, such as open, closed, or both.
  - **Milestones**: It allows selection of specific GitHub milestones to narrow down issues.
  - **Labels**: It supports filtering issues by one or more labels, which are displayed as removable tags.
  - **Authors**: This field filters issues created by selected users.
  - **Assignees**: This field filters issues assigned to specific users.

![](/img/fail-analysis/github-info.png)

- To select a Jira Issue, click the `Jira Issue` tab and fill in the required information and then click **Apply Filters**:  
  - **Project**: It allows users to select a specific Jira project.
  - **Issue Status**: It enables filtering by Jira status, such as the current workflow state of issues.
  - **Issue Type**: It allows selection of specific Jira issue types.
  - **Priority**: This field filters issues based on their assigned Jira priority.
  - **Labels**: This field allows filtering issues using Jira labels.
  
![](/img/fail-analysis/jira-info.png)

:::note
At the top-right side of the page, to the right of the Filter button, there is another button that navigates to the History page when clicked.

![](/img/fail-analysis/history-fail.png)

:::

### Comparison graph across milestones or versions
At the top of the page, a **Comparison graph** is displayed. When there is no data, the graph appears empty, but once data is available, it can compare results across two versions or milestones.  
The graph shows how many test cases failed in the previous release versus the current release, and how many are passing in each. This provides a quick view of the stability of the current release compared to the previous one. Based on this analysis, teams can make informed decisions, for example: if the current release is less stable, the release may be delayed to fix bugs and rerun test cases to ensure stability.

![](/img/fail-analysis/milestone-comparison.jpg)

### Card View in Fail Analysis
- Users can search test cases by name, feature, and other available attributes.
- When a search is applied, only the matching results are shown within the existing top-level groups.
- Each group header displays the group name and the number of failed cards in that group.
- A select icon is available on the right side of each group header, allowing users to select all cards within that group at once.
- Users can also manually select cards within a group.
- To select multiple specific cards, users can click the first card, then use **Ctrl + Click** to select individual additional cards.
- To select a range of cards, users can click the first card and then use **Alt + Click** on another card to select all cards between them.
- On the bottom-left of each card, a runtime icon indicates the test type, such as automated, manual, performance, or hybrid when multiple types are involved.
- If a GitHub issue is linked, the GitHub icon appears darker to indicate an active link.
- When a card is not expanded, it displays the first failure comment along with the set and feature information.
- When the card is expanded, all test case steps are shown and color-coded by status: passed steps appear in green, failed steps in red, and skipped steps in gray.
- Users can click on a comment to open the work slider, which displays details such as set, feature, and GitHub information.
- Hovering over the GitHub link provides an option to unlink the issue, which can be done with a single click.
- If no GitHub issue is linked, users can link one by clicking **Link Issue**, selecting a repository, searching for an issue, and confirming the link.
- When a card is selected, a sidebar opens showing detailed information, including linked GitHub details.
- The sidebar displays test case information followed by runtime parameters.
- Execution history is also visible in the sidebar. If there are more than four history entries, the section becomes scrollable.
- Users can navigate directly to the run details page by clicking the Run ID icon.
- Below the run details, existing comments are displayed, and new comments can be added.
- During linking or selection of a test case, a small assignment window appears.
- Users can assign a user from this window, and the assigned user’s profile is shown in the UI.
- The assigned user can be removed easily by clicking the **Unassign** button.

![](/img/fail-analysis/link-issue.png)

![](/img/fail-analysis/card-expand.png)

### Snapview
- Users can first filter logs by log type. For example, selecting **Error** displays only error-related logs.
- Pagination controls are available at the bottom, allowing users to navigate between pages, including moving to the first or last available page.
- Display settings allow users to choose which fields are visible, such as showing or hiding time, date, or module columns.
- These display preferences are saved in the database, so the same settings remain applied after refreshing the page.
- On the left side, test steps are listed with options to **Expand All** or **Collapse All**.
- Users can debug a test case by navigating back to the run view and expanding all steps.
- If screenshots are available, they are displayed clearly and can be previewed in a larger view when needed.
- Screenshot display size can be adjusted by selecting **Small**, **Medium**, or **Large** view options.
- The width of the steps panel can be increased by dragging to focus more on the left side.
- The module section can also be resized by dragging, and layout preferences are saved automatically.
- At the top, users can navigate directly to the Run ID or the test case and view the test case title.
- A search option allows filtering steps by step name.
- Users can hide actions that do not have screenshots by enabling the **Hide actions without screenshots** option.
- The status and execution time of test case steps can also be updated if needed.

![](/img/fail-analysis/snapview-page.png)

## FAQs / Troubleshooting

### FAQs

<details>
<summary>What is Fail Analysis and why is it important?</summary>

Fail Analysis shows at which steps a test case is failing and explains the main reason for the failure. It is important because it helps identify the root cause of failures.

</details>

<details>
<summary>How can I view failed test cases and their details?</summary>

Failed test cases are shown in cards with failure step, folder, feature, and status.

</details>

<details>
<summary>Can I assign failed test cases to team members for investigation?</summary>

Yes, managers can assign tickets using Control + Click and the plus (+) symbol.

</details>

<details>
<summary>How do I compare failures across versions or milestones?</summary>

Use the comparison graph to see failures across selected versions or milestones.

</details>

<details>
<summary>Can Fail Analysis integrate with tools like GitHub for issue tracking?</summary>

Yes, GitHub issues can be viewed and filtered by status, milestones, or labels once integrated.

</details>

### Troubleshooting

- Failed test cases not showing → Check permissions, project selection, and data availability.
- Unable to assign test cases → Ensure proper access and follow the correct assignment steps.
- Comparison graphs not displaying → Verify that data exists for the selected versions or milestones.
- Comments or updates not visible → Refresh the page or check if the user has commenting permissions.

## Changelog

- Fail Analysis Page Redesign: Modern UI with multi-card selection, full step visibility, runtime parameters, saved preferences, and quick unassignment [[202602](/blog/zeuz-platform-202602)]

## Related Topics

- [Run test cases](https://docs.zeuz.ai/docs/zeuz-server/testing/Deployments/run-tests/)
- [Run history](https://docs.zeuz.ai/docs/zeuz-server/testing/Deployments/history-page/)
- [Run ID details](https://docs.zeuz.ai/docs/zeuz-server/testing/Deployments/run-id-details-page/)

---
