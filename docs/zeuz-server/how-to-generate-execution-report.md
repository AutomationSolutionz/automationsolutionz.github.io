---
id: how-to-generate-execution-report
title: How to generate Execution report
---

## Description

### What is an Execution Report in software testing?

An **Execution Report** in software testing is a concise document that summarizes the testing process and outcomes. It includes details of test cases, their status (pass/fail), observed results, test environment information, metrics like coverage and execution time, recorded defects or issues, and overall recommendations. The report provides stakeholders with a clear understanding of testing progress, highlights the quality of the software, and assists in decision-making regarding the readiness for release.

### Importance of Execution Report in software testing

The **Execution Report** is highly important in software testing as it ensures stakeholders have a clear understanding of testing progress and outcomes, aiding in informed decision-making.

The report helps assess software quality by analyzing test results and identifying areas of concern. It serves as a central repository for tracking and managing defects, and also provides valuable insights for process improvement. 

Overall, **Execution Report** plays a crucial role in ensuring successful and high-quality software testing.

## Steps

1. From the **Menu bar**, go to the **Testing** then **Execution** option.

![](/img/how-tos/how-to-generate-execution-report/execution-option.png)

2. Go to the **Execution Report** page.
   > The purpose of *Execution Report* page is to provide a clear and detailed record of the test cases executed, their outcomes (passed/failed/blocked/submitted status), any identified defects, and the overall test coverage. This help stakeholders assess the quality of the software, track testing progress, and make informed decisions about about the product's readiness for release.

![](/img/how-tos/how-to-generate-execution-report/execution-report.png)

3. Click and select **Filter test cases**.
4. You can filter test cases by:
   * **Test case ID** 
   * **Test case folder** 
   * **Test case feature**
   * **Title**
   * **ModifiedBy**
   * **Step**
   * **Customtag**
   * **Requirement**
   * **Related_req**
   * **OnlyFeature**
   * **RunID**
   * **Related_ticket**
   * **Priority**
   * **Status**
   * **Label**
   * **Related_test**
   * **CreatedBy**
   * **OnlyFolder**
   * **Bug**
   * **Linked_step**
   * **Set**
   * **Task**.
5. Click and select **Filter run results**.
6. You can  filter run results by: 
   * **Priority** 
   * **Milestone** 
   * **Version** 
   * **Branch** 
   * **Assigned** 
   * **Subversion**
   * **Run type**
   * **Run objective**.

   > *Filter test cases* means selectively choosing specific test cases based on certain criteria or attributes on a particular subset of tests.  
   > *Filtering test cases* are necessary to optimize testing efforts, focus on specific aspects of the software, and efficiently allocate resources to ensure comprehensive and targeted test coverage.  

   > Filtering test cases by the following options are necessary to categorize, organize, and prioritize tests for better management, traceability, and efficient execution.  
   > **Test case ID**: *Test case ID* is a unique identifier assigned to each individual test case for tracking and reference purposes.  
   > **Test case folder**: *Test case folder* is a container or directory that organizes and groups related test cases for better management and navigation.  
   > **Test case feature**: *Test case feature* refers to the specific functionality or aspect of the software being tested, which is the focus of a particular test case.  
   > **Title**: The *Title* refers to a concise description or identifier that uniquely represents the purpose or objective of the test.  
   > **ModifiedBy**: *ModifiedBy* refers to the individual or entity who made the last modification or update to the test case.  
   > **Step**: *Step* refers to an individual action or instruction that outlines the sequence of operations to be performed during the execution of a test case.  
   > **Customtag**: *Customtag* refers to a user defined label or metadata attribute attached to a test case to facilitate categorization, organization, or additional information beyond standard fields.  
   > **Requirement**: refers to a specific function, feature, or behavior that the software must fulfill, serving as the basis for designing and executing corresponding test cases.  
   > **Related_req**: *Related_req (Related Requirement)* refers to the associated or linked requirement or set of requirements that the test case aims to validate or varify.  
   > **OnlyFeature**: *OnlyFeature* may refer to a specific test case designed to verify or validate a single functionality or feature of the software in isolation.  
   > **RunID**: *RunID* refers to a unique identifier or label assigned to a test execution instance to track and manage the results and status of the specific test run.  
   > **Related_ticket**: *Related_ticket* typically refers to a reference or link to a bug report, issue, or ticket in a bug tracking or issue management system associated with the test case.  
   > **Priority**: *Priority* refers to the level of importance assigned to a test case, indicating the order in which it should be executed based on its impact on the software's functionality or criticality.  
   > **Status**: *Status* refers to the current state or condition of a test case, indicating whether it has been executed, passed, failed, or pending.  
   > **Label**: *Label* refers to a descriptive tag or keyword assigned to a test case to aid in its categorization, organization, or filtering during test management.  
   > **Related_test**: *Related_test* refers to a reference or link to another test case that is related or connected in some way, such as covering similar functionality or dependent on each other for testing purposes.  
   > **CreatedBy**: *CreatedBy* refers to the individual or entity who originally authored or created the test case.  
   > **OnlyFolder**: *OnlyFolder* may refer to a specific test case that acts as a placeholder or container for organizing other test cases within a test management system, without containing any executable test step itself.  
   > **Bug**: *Bug* refers to a defect or issue discovered during the testing process that deviates from expected behavior and requires resolution by the development team.  
   > **Linked_step**: *Linked_step* refers to a connection or association between test cases and specific test steps, indicating that the test cases share or reference the same set of instructions or actions.  
   > **Set**: *Set* refers to a group or collection of related test cases that are organized together based on a common theme, feature, or test scenario.  
   > **Task**: *Task* refers to a specific action or assignment within a test case that outlines a discrete activity to be performed during the testing process.

   > *Filter run results* means selectively viewing and analyzing test case execution outcomes based on specific criteria, such as test status, execution date, or associted features, to gain insights and identify patterns.  
   > *Filtering run results* are necessary to focus on relevant data, identify trends, and pinpoint critical issues, enabling testers and stakeholders to make informed decisions and prioritize actions for improving software quality.  

   > *Filtering run results* by *Priority*, *Milestone*, *Version*, *Branch*, *Assigned*, *Subversion* etc are necessary to precisely track, analyze, and manage test execution data, enabling efficient bug resolution, progress monitoring, and effective collaboration among team members.

   > **Priority**: *Priority* refers to the level of importance assigned to a test case, indicating the order in which it should be executed based on its impact on the software's functionality or criticality.  
   > **Milestone**: *Milestone*  refers to a significant point or event in the testing process, typically representing a key achievement or progress towards the completion of testing activities for a specific phase or release.  
   > **Version**: *Version* refers to a specific release or iteration of a software product.  
   > **Branch**: *Branch* refers to a seperate copy of the source code that diverges from the main development line, allowing for the isolation and independent testing of new features or bug fixes.  
   > **Assigned**: *Assigned* typically refers to a test case or issue that has been allocated to a specific tester or developer for resolution.  
   > **Subversion**: *Subversion* typically refers to the process of managing and tracking changes to source code or files.  
   > **Run type**: *Run type* refers to the specific configuration or environment in which a test case or test suite is executed, such as, manual, automated, or continuous integration.  
   > **Run objective**: *Run objective* refers to the specific goal or purpose of executing a particular test case or test suite, such as validating a new feature, identifying defects, or measuring performance.

![](/img/how-tos/how-to-generate-execution-report/generate-report.png)

7. Multiple of **Test cases** and **Run results** can also be selected.
8. If test cases are selected then the **Progress Report** of those test cases will be shown.
   > Selecting multiple *Test cases* and *Run results* are necessary for generating execution report to compare expected outcomes with actual results and assess the overall test coverage and quality of the software.  

   > A *Progress Report* refers to a summary or detailed status update on the testing activities, including the number of test cases executed, passed, failed, and remaining, indicating the overall testing progress.

![](/img/how-tos/how-to-generate-execution-report/progress-report.png)

9. The **Progress report** show the following results:
   * Passed
   * Failed
   * Blocked
   * Submitted
   * In-Progress
   * Skipped
   * Not Run.
10. The detail of the selected **Test Cases** or **Test Sets** will appear on the **Test Case Details** tab.

11. The **Test Case Details** tab show a table which contain the following informations in the column:
    * TC-ID
    * TC-Title
    * Status
    * Comments
    * Feature
    * Folder
    * P (Priority)
    * Type (Automated or Manual)
    * Related Item.

![](/img/how-tos/how-to-generate-execution-report/progress-details.png)