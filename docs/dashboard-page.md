---
id: dashboard-page
title: Dashboard Page
sidebar_position: 2
---

import Highlight from '@site/src/components/Highlight';

The Dashboard page is the main overview screen of a software platform that displays key information, metrics, and summaries in a single place. It gives users a quick understanding of the current status of their projects, tests, or system health.

![](/img/dashboard-page/dashboard-page.jpg)

---

## Explanation of the Dashboard Page

### ZeuZ Node Area
**1. ZeuZ Node Description Box**
     - **Text**: *"ZeuZ Node is the automation engine working behind the scenes to power your test executions".*
     - This means the ZeuZ Node is responsible for executing automated tests locally or on remote systems.

**2. Download Button**
     - Labelled "Download ZeuZ Node", this button allows users to download the node installer or package.

**3. Navigation Tiles**
     - **Node**: Node setup and usage.
     - **Server**: Server configuration and monitoring.
     - **Changelog**: Shows version updates and improvements.
     - **Docs**: Opens the full documentation for user guidance.

![](/img/dashboard-page/dashboard-node.png)

---

### Build Health
Build Health refers to the overall quality and stability of a software build, as determined by the results of automated or manual test cases executed during the build process. It is basically a chart showing the pass and fail status of the current build.

There are two tabs at the top:  

**1. Milestone**: This suggests that the build health can be viewed in the context of specific milestones (e.g., stages or goals in a project).  
**2. Version**: This suggests that the build health can also be viewed in the context of specific versions (e.g., releases or iterations of the software).

Build Health displays two key metrics, such as:  

**1. Pass**: Indicates the percentage of tests or checks that passed successfully.  
**2. Fail**: Indicates the percentage of tests or checks that failed.

However, when hovering over the **Pass** or **Fail** indicators, the system displays the corresponding percentage and count of test cases, providing a quick overview of build health.

:::note
If the "Build Health" section shows **Pass** and **Fail** metrics with **NaN%**, then it indicates that the system lacks the necessary data to compute these percentages. This could be due to missing test results, a malfunctioning testing framework, or incomplete build processes. It also indicates that no test cases have been executed or recorded. To resolve this, ensure that tests are running and that the results are being captured and processed correctly.
:::

### Example

|  Build Health with Pass and Fail metrics  |
|-------------------------------------------|
| ![](/img/dashboard-page/build-count.png)  |

---

### Automatability
Automatability refers to how easily and effectively a test can be automated using automation tools or frameworks. In this context, the chart shown is a **Donut chart**, which is commonly used to represent proportions or distributions. The chart is divided into segments, each representing a different category of automatability.

#### Automatability Categories

|  Category          |  Color     |
|--------------------|------------|
|  Automated         |  <Highlight color="rgb(37, 211, 102)">Green</Highlight>     |
|  Easily Automated  |  <Highlight color="rgb(51, 204, 204)">Cyan</Highlight>      |
|  Hard to Automate  |  <Highlight color="rgb(255, 152, 0)">Orange</Highlight>    |
|  Not Automatable   |  <Highlight color="rgb(254, 41, 147)">Hot Pink</Highlight>  |
|  Performance       |  <Highlight color="rgb(127, 40, 255)">Purple</Highlight>    |
|  Undefined         |  <Highlight color="rgb(158, 158, 158)">Gray</Highlight>      |

Under our server, test cases are categorized based on their level of automatability. This shows how many test cases are automated, easy to automate, hard to automate, not automatable, performance-related, or undefined. When hovering over each segment of a chart, it shows how many test cases belong to that category, along with their percentage. For example, there are **3,294 automated test cases (95.06%)** and **133 test cases that are easy to automate (3.84%)**. Similar data is displayed for the remaining categories as well.

![](/img/dashboard-page/easily-automatable.png)

---

### Build Comparison
Build Comparison refers to the process of comparing the test results of two or more software builds to identify changes in quality, functionality, or performance overtime.

This chart displays a comparison of the last five builds. It shows how many test cases were submitted and passed in previous versions or milestones, and how many have passed in recent builds, etc. The purpose is to provide a clear comparison.

### Example

Users can observe that in an earlier build, **1616 test cases passed**
while **61 test cases failed**. And in the most recent build, **1806 test cases passed** and
**61 test cases failed**.

|  Previous Build                          |  Recent Build                         |
|------------------------------------------|---------------------------------------|
| ![](/img/dashboard-page/previous-build.png)  | ![](/img/dashboard-page/recent-build.png)  |

This helps determine whether the quality is improving or degrading overtime.  
At the top, there are toggle options for **Milestone** and **Version**. When **Milestone** is selected, the build comparison is shown based on milestones. When **Version** is selected, the build comparison is shown based on version.

![](/img/dashboard-page/build-comparison.png)

---

### PBC (Priority Based Comparison)
Priority Based Comparison refers to the process of comparing test results based on the priority levels assigned to test cases.

Priority Based Comparison (PBC) allows users to analyze test results based on different priority levels, such as **P1**, **P2**, **P3** and **P4**. When you hover over the chart, you can see the name of the current build or milestone being analyzed.

### Example
In the current build, if there are **286 test cases that passed** and **7 test cases that failed**, this comparison becomes especially important because **P1** test cases are considered critical. By organizing results by priority, users can quickly identify issues in high-priority areas.

![](/img/dashboard-page/pbc-data.png)

The chart also shows how many test cases are **passing**, **failing**, **blocked**, **skipped**, or **submitted** within each priority level. Additionally, hovering over the **Current** label reveals the name of the most recent build, and this comparison can be used across milestones or versions to track how test cases are performing based on their assigned priorities.

![](/img/dashboard-page/pbc-chart.png)

---

### Test Case Create Velocity
Test Case Create Velocity refers to the rate at which test cases are being created over a defined period of time. It mainly shows the number of test cases created each day over the past 30 days. It helps to understand the number of test cases on specific dates, providing a date-wise breakdown of test case creation activity.

![](/img/dashboard-page/test-velocity.png)

---

### Scheduler Health
Scheduler Health refers to the current status of the schedulers in an automation system.

On the left side of the Scheduler Health section, the name of each scheduler is displayed. It shows whether the test cases scheduled in the last 10 runs were executed successfully or not.

If a scheduler shows a **hot pink** sign, it means that the test did not run.  
If a scheduler shows a **green** sign, it means the test was successfully executed.

![](/img/dashboard-page/scheduler-health.png)

---

### Orphaned Test Cases
Orphaned Test Cases are test cases that are no longer linked to any active or valid test set. They exist in the system but are not part of any current testing activity or structure.

![](/img/dashboard-page/orphaned-test-cases.png)

---

### Storage
Storage mainly shows how much server space is used and how much is still available. For example, **40.59 GB (84%)** is used, and **7.79 GB (16%)** of space is available.

|  Used Storage                              |  Available Storage                              |
|--------------------------------------------|-------------------------------------------------|
| ![](/img/dashboard-page/data-storage.png)  | ![](/img/dashboard-page/available-storage.png)  |

---


