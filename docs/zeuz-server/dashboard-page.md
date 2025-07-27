---
id: dashboard-page
title: Dashboard Page
sidebar_position: 1
---

import Highlight from '@site/src/components/Highlight';

The Dashboard page is the main overview screen of a software platform that displays key information, metrics, and summaries in a single place. It gives users a quick understanding of the current status of their projects, tests, or system health.

![](/img/dashboard-page/Dashboard.png)

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

## License and Node Information
The node section has been added to display the license information. It also shows the list of currently connected nodes. This section will become scrollable if there are more than four connected nodes.

Here is a summary of the details:

### General Information
-  **Nodes: 1000**  
   Indicates that the environment is licensed to support upto ***1000 execution nodes**.
- **Users: 1000**  
  Allows upto **1000 users** to access the system.
- **Type: Production**  
  Specifies that this instance is intended for **production use**, not for testing or development purposes.
- **Validity: January 1, 2026**  
  The license remains **valid until January 1, 2026**.

### Connected Nodes
- The system currently shows **two connected nodes**, meaning two machines are actively communicating with the ZeuZ platform.

The connected nodes are:

1. **nayeem_windows**: (remote windows node for test execution).
2. **shakib.a_remote_linux**: (remote linux node for test execution).

![](/img/dashboard-page/license-node.png)

---

### Build Health
Build Health refers to the overall quality and stability of a software build, as determined by the results of automated or manual test cases executed during the build process. It is basically a chart showing the pass and fail status of the current build.

There are two tabs at the top:  

**1. Milestone**: This suggests that the build health can be viewed in the context of specific milestones (e.g., stages or goals in a project).  
**2. Version**: This suggests that the build health can also be viewed in the context of specific versions (e.g., releases or iterations of the software).

Build Health displays two key metrics, such as:  

**1. Pass**: Indicates the percentage of tests or checks that passed successfully.  
**2. Fail**: Indicates the percentage of tests or checks that failed.

However, in the **Build Health** section, without requiring any hover action, it will now show percentage values beside the metrics, for example, test results: **94.3% Passed (33)** and **5.7% Failed (2)**. These insights will be visible directly, without the need to hover. Additionally, the selected **Milestone** or **Version** will be displayed below the build health summary. 

:::note
In the **Build Health** section, if no data is available, it will display as zero.
:::

### Example

|  Build Health with Pass and Fail metrics  |  Build Health with No Data                |
|-------------------------------------------|-------------------------------------------|
| ![](/img/dashboard-page/build-count.png)  |  ![](/img/dashboard-page/build-zero.png)  |

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

Under our server, test cases are categorized based on their level of automatability. In the **Automatability** section, users can now view the total number of test cases and see what percentage of them are "Automated", "Easily Automatable", or "Hard to Automate", etc., without the need to hover.
For example, there are:
- **4886 automated test cases (84.5%)**, 
- **866 test cases that are easily automatable (15.0%)**, 
- **14 test cases that are hard to automate (0.2%)**, 
- **6 test cases that are not automatable (0.1%)**, 
- **7 test cases that are under performance (0.1%)**,  
- **2 undefined test cases (0.0%)**.

![](/img/dashboard-page/easily-automatable.png)

---

### Build Comparison
Build Comparison refers to the process of comparing the test results of two or more software builds to identify changes in quality, functionality, or performance overtime.

This chart displays a comparison of the last five builds. It shows how many test cases were not run or passed in previous versions or milestones, and how many have passed in recent builds, etc. The purpose is to provide a clear comparison.

In the **Build Comparison** section, the blocks have now been merged as follows:
- The **Fail** block now combines both "Fail" and "Block" status.
- The **Not Run** block now combines both "Skip" and "Submit" status.

However, this helps determine whether the quality is improving or degrading overtime.  
At the top, there are toggle options for **Milestone** and **Version**. When **Milestone** is selected, the build comparison is shown based on milestones. When **Version** is selected, the build comparison is shown based on version.

![](/img/dashboard-page/build-comparison.png)

Here, the **June** milestone is the current build, while the others are previous builds.

---

### PBC (Priority Based Comparison)
Priority Based Comparison refers to the process of comparing test results based on the priority levels assigned to test cases. It allows users to analyze test results based on different priority levels, such as **P1**, **P2**, **P3** and **P4**.

In case of **PBC (Priority Based Comparison)**, when the **Current**, **Previous**, **Milestone** or **Version** is selected, the selected **Current / Previous Milestone** or **Current / Previous Version** will be displayed below the PBC section. Additionally, as before, the **Fail** status includes both failed and blocked test cases, and the **Not Run** status includes both "Skipped" and "Submitted" test cases.

### Example
The following image displays a tooltip or data breakdown for a test priority category labeled **P1**. It shows the execution status of test cases under this priority:
- **Pass: 30**  
  A total of thirty test cases have passed.
- **Fail: 2**  
  Two test cases have failed.
- **Not Run: 3**  
  Three test cases have not been executed.

![](/img/dashboard-page/pbc-data.png)

The chart also displays the number of test cases that are passing, failing, and not running within each priority level. Additionally, hovering over the **Current** label reveals the name of the most recent build, and this comparison can be used across milestones or versions to track how test cases are performing based on their assigned priorities.

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


