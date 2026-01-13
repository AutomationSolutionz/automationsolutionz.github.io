---
id: create-worklog
title: Worklog
---

import MetaCard from '@site/src/components/MetaCard';

The **Worklog Summary** provides an overview of worklog entries, enabling users to filter and search by user, 
milestone, and date range. Quick filters such as `YESTERDAY`, `TODAY`, `TOMORROW`, `7 DAYS`, `+1 YEAR`, and 
`CUSTOM` simplify selection, while the `SEARCH` button applies filters and the `Everything` button displays 
all entries. The interface distinguishes between time spent and planned/estimated time, presenting data both numerically and visually through a pie chart for clear insights.

<MetaCard
  availableFrom="20250518"
  difficulty="🟢 Easy"
  lastUpdated="08 Jan, 2026"
  relatedTopics={["Time shift"]}
/>

### Why it matters / Use Cases: 
- **Effort Comparison and Workload Analysis**: It compares spent time and estimated time side by side, helping teams identify overloading or underutilization of effort.
- **Visual Effort Distribution by Work Type**: Visual pie charts break down time by work type (such as documentation and meetings), making effort distribution easy to understand at a glance.
- **Overload Detection and Capacity Management**: The overload indicator highlights when planned work exceeds available capacity, supporting early corrective action.
- **Targeted Performance Review Using Filters**: Filters by user, milestone, and date range help managers review performance for a specific period or individual.

## Prerequisites
- Access to ZeuZ Server with permissions for **Project → Reports → Worklog**.
- Work items must exist (such as tasks, test cases, bugs, or runs) to log time against actual work.
- Estimated or planned hours must be set, enabling meaningful comparison with spent time.
- Worklog entries must be logged consistently by users to generate meaningful summaries and visual reports.

## Quick-Start
1. Select a user from the *Select User* dropdown to view individual worklog entries.
2. Use quick date options such as `YESTERDAY`, `TODAY`, `TOMORROW`, or `7 DAYS` to instantly filter worklogs by time.
3. Click `SEARCH` to apply the selected filters and view results.

## Features
### Create a worklog entry for the selected user
- Navigate to the **Worklog Summary** page.
- Click to select a **User**.
- Quickly filter worklog data using predefined date options such as **Yesterday**, **Today**, **Tomorrow**, **7 Days**, **+1 Year**, or a **Customer** range.
- The worklog can also be accessed by selecting a **Milestone** and a **Date range**.
- If the **Everything** option is selected, it displays the complete range of activities such as **Tasks**, 
**Bugs**, **Documents**, **Test Cases**, and **Run History** for the selected user within the chosen time 
period.
- If **Date Filtered** is selected, it allows users to focus on **Tasks**, **Bugs**, **Documents**, **Test Cases**, or **Run History** that occured within the selected date range.
- Click **Search** to apply the selected filters and view the results.

![](/img/how-tos/how-to-create-a-worklog/worklog-selecteduser.png)

![](/img/how-tos/how-to-create-a-worklog/filtered-options.png)

### Visual pie charts
- The interface displays visual pie charts to represent data clearly.
- The **left pie chart** represents **spent time**, broken down by work types such as development, meetings, 
documentation, research, and testing, along with total hours spent.
- The **right pie chart** represents **estimated time**, showing planned effort distribution across selected work types and total estimated hours.
- At the center, the **overload indicator** shows that the selected user is overloaded by a certain number of hours, meaning the actual time spent on work exceeds the planned or estimated capacity for the selected period.

![](/img/how-tos/how-to-create-a-worklog/spent-estimated.png)

## FAQs / Troubleshooting

<details>
<summary>Why is no data displayed in the Worklog Summary?</summary>

This usually occurs when no user, milestone, or date range is selected, or when no worklogs have been logged for the chosen period.

</details>

<details>
<summary>Why does spent time show zero hours?</summary>

Spent time appears as zero when the selected user has not logged any work entries for the selected date range.

</details>

<details>
<summary>Why does estimated time not appear or look incorrect?</summary>

Estimated time is shown only when planned or estimated hours are defined for tasks or work items.

</details>

<details>
<summary>What happens when the estimated work exceeds a user’s availability for a specific time period?</summary>

When the estimated work is more than a user’s availability for a specific time period, the system indicates an overload.

</details>

<details>
<summary>Why are pie charts not visible?</summary>

Pie charts are displayed only when worklog data exists. If no worklogs are available, the charts may not appear.

</details>

## Changelog

- New UI has been introduced [[20250518](/blog/zeuz-platform-20250518/)]

## Related Topics

- [Time shift](https://docs.zeuz.ai/docs/zeuz-server/Project/Others/how-to-setup-work-schedule/)

:::note

Since worklogs can be created for tasks, bugs, documents, test cases, and run history, the following links explain how to create tasks, bugs, documents, and test cases, and how to use the Run History page.

**Tasks**: https://docs.zeuz.ai/docs/zeuz-server/Project/Ticket/create-tasks/

**Bugs**: https://docs.zeuz.ai/docs/zeuz-server/Project/Ticket/create-bugs/

**Documents**: https://docs.zeuz.ai/docs/zeuz-server/Project/Ticket/create-documents/

**Test Cases**: https://docs.zeuz.ai/docs/zeuz-server/testing/Test%20Case/create-test-cases/

**Run History**: https://docs.zeuz.ai/docs/zeuz-server/testing/Deployments/history-page/

:::
---