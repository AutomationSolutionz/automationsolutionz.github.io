---
id: fail-analysis
title: Fail Analysis
---

import MetaCard from '@site/src/components/MetaCard';

**Fail Analysis** is the process of examining failed tasks or test cases to find the root cause, classify issues, and take corrective actions to prevent future failures.

<MetaCard
  availableFrom="20250518"
  difficulty="🟢 Medium"
  lastUpdated="18 Sep, 2025"
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

### Comparison graph across milestones or versions
At the top of the page, a **Comparison graph** is displayed. When there is no data, the graph appears empty, but once data is available, it can compare results across two versions or milestones.  
The graph shows how many test cases failed in the previous release versus the current release, and how many are passing in each. This provides a quick view of the stability of the current release compared to the previous one. Based on this analysis, teams can make informed decisions, for example: if the current release is less stable, the release may be delayed to fix bugs and rerun test cases to ensure stability.

![](/img/fail-analysis/milestone-comparison.jpg)

### Card View in Fail Analysis
In the **Card View**, failed test cases are displayed with clear details. For example, if nine test cases fail, each card shows the exact step of failure at the top left corner. These failures often share a common or root cause.  
By opening a card, users can add comments, see the folder and feature it belongs to, and check the status message (e.g., *"Previously passed and Now failed"*), which highlights test cases that worked in the previous build but are failing in the current release.  
For investigation, managers can **Control + Click** on tickets and use the plus (+) symbol to assign them to specific team members. After reloading, the assigned user's name and profile picture appears on the card below. This helps track ownership, ensures clarity on who is working on what, and prevents duplicate efforts on the same failures or test cases.

![](/img/fail-analysis/card-analysis.jpg)

### Grouping Test Cases in Fail Analysis
Fail Analysis allows users to **group test cases** for better visibility and management. Test cases can be grouped by **failure**, helping identify root causes, or by **test set**, showing all defined sets in the system.  
Grouping by **assignee** highlights unassigned test cases and shows which tickets are assigned to specific team members. For example, in a 
team of five, each member can have different assigned tickets. At a glance, managers can see who is working on what, and by expanding a
ticket, they can view comments and updates made in the system. This makes tracking progress and collaboration more efficient.

![](/img/fail-analysis/cards-group.png)

### GitHub Integration and Filtering in Fail Analysis
Fail Analysis also supports **GitHub Integration**. Although it is not currently enabled for this project, once activated, GitHub issues will be visible within ZeuZ. Users can apply **filters** to customize the view, such as selecting whether to see **open issues**, **closed issues**, or **both**, and filtering by **milestones** or **labels** from GitHub.  
Additionally, for **versions** and **milestones**, users can compare and contrast data directly within Fail Analysis and apply filters to focus on specific criteria. This integration helps streamline issue tracking and improves visibility across test results and development workflows.

![](/img/fail-analysis/github-filter.png)

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

- New UI introduced [[20250518](/blog/zeuz-platform-20250518)]

## Related Topics

- [Run test cases](https://docs.zeuz.ai/docs/zeuz-server/testing/Deployments/run-tests/)
- [Run history](https://docs.zeuz.ai/docs/zeuz-server/testing/Deployments/history-page/)
- [Run ID details](https://docs.zeuz.ai/docs/zeuz-server/testing/Deployments/run-id-details-page/)

---
