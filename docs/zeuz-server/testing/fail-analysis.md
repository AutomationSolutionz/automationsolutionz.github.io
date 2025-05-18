---
id: fail-analysis
title: Analyze the Failed test cases
---

## Overview
In our automation testing software, testers create automated test cases for various clients. Over time, we noticed that identifying **failed** and **blocked** test cases, especially during regression testing, became a challenging and time-consuming task for both testers and managers.

To address this issue, we introduced a **Regression Report** section in our platform. This feature simplifies the process of comparing test results between two different milestones or versions, enabling quicker and more efficient analysis.

---

## How it works

### 1. Navigate to the Report Section

- Testers or managers can access the report by navigating to the **Report** section in the Navbar:  
**Testing > Reports > Fail Analysis**.

  ![](/img/how-tos/fail-analysis/fail-analysis.png)

  In the **Fail Analysis** section, users need to create a filter for the report.

  ![](/img/how-tos/fail-analysis/fail-test-cases.gif)

- Here, when you click on **Filter**, you will see options such as **Milestone**, **Version** or **GitHub** to refine the report.
- In this example, **Milestone 2.9** is used and compared with **Milestone 2.8**.
- After that, it will display the **Fail Test Case Report**.

 ![](/img/how-tos/fail-analysis/card-view.png)

- Describe this card view.

  | No. | Field                 | Description                         |
  |-----|-----------------------|-------------------------------------|
  | 1.  | Test Case Title       | The title of the test case.         |
  | 2.  | Failed Test Case Step | The step where the test case failed.|
  | 3.  | Failure Reason        | The reason for the failure.         |
  | 4.  | Assignee Set          | The person or group assigned to the task. |
  | 5.  | Assignee Feature      | The feature associated with the assignee. |
  | 6.  | Assignee Milestone    | The milestone linked to the assignee. |
  | 7.  | Assignee Version      | The version associated with the assignee. |
  | 8.  | Comment Feature       | Anyone can comment and reply here. |
  | 9.  | Assignee Priority     | The priority level assigned to the task. |
  | 10. | Assignee Label        | The label/tag assigned to the task. |
  | 11. | Assignee Folder       | The folder associated with the assignee. |

- Reports can also be generated categorized by failed test cases and failure.

  ![](/img/how-tos/fail-analysis/fail-type.png)

- At the top, the fail and pass statuses can also be viewed.
- Also you can group by report.
1. Group by **Fail Test Case**.
2. Group by **Set**.
3. Group by **Assignee**.
- Also, there are two tabs: **Fail** is the current tab, and **GitHub** is the other, you will find a link to the test case with the GitHub issue filter.

 ![](/img/how-tos/fail-analysis/pass-fail.png)