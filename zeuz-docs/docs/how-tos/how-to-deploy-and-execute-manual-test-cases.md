---
id: how-to-deploy-and-execute-manual-test-cases
title: How to Deploy and Execute manual test cases
---

## Description

### What is a manual test case?

A manual test case is a test case that is executed manually by a tester without using any automated tools.  
The purpose of manual testing is to identify the bugs, issues and defects in the software application.  
Manual test cases are used to check the functionality of a system. Test cases can include checking the results of entering valid and invalid user IDs and password.  
Another example of a manual test is creating a to-do list and checking that all fields are filled in correctly and the newly created listis displayed correctly.

### What is deploying in manual test cases and why is it necessary?

Deploying manual test cases means running test cases manually on the application without using any automation tools.  
Manual testing is the process of manually testing software for defects. It requires a tester to play the role of an end user and use most of all features of the application to ensure correct behaviour.  
Manual testing is necessary because it helps find defects that are not easily found through automation.  

### What is the importance of deploying manual test case?

Deploying a manual test case is an important aspect of software testing. Here are some reasons why it is important:  

* **Verification of Functionality**: Manual test cases help verify that the software or system being tested is functioning as intended. By following predefine test steps, testers can validate whether the expected behaviour is consistent with the actual behaviour of the software. This ensures that the software meets the functional requirements and performs its intended tasks correctly.

* **Error Identification**: Manual test cases are designed to identify errors, bugs, or defects in the software. Testers execute various test scenarios, inputs, and interactions to uncover any issues that may exist. By thoroughly examining the software through manual testing, testers can detect the problems that automated tests might miss. This helps improve the overall quality and reliability of the software.  

* **User Perspective**: Manual testing allows testers to simulate real-world interactions with the software. By putting themseleves in the shoes of the end users, testers can assess the user experience, usability, and inituitiveness of the software. This helps identify any design flaws, inconsistencies, or issues that may impact user satisfaction. Manual testing helps ensure that the software meets the expectations and needs of its intended users.  

* **Ad hoc Testing**: Manual test cases enable testers to perform ad hoc testing, which involves exploring the software in an unplanned and unscripted manner. This allows testers to think creatively and investigate the software for potential issues that were not anticipated during the test case design phase. Ad hoc testing can help uncover unexpected bugs, usability problems, or edge cases that automated tests may not cover.  

* **Early Testing**: Manual test cases can be developed and executed during the early stages of the software development lifecycle. They can help validate requirements, clarify ambiguities, and identify defects at an early stage. This enables the development team to address issues promptly, reducing the cost and effort of fixing them later in the development process.  

* **Test Coverage Gaps**: While automated tests are different for repetitive and large-scale testing, they may not cover certain aspects of the software adequately. Manual test cases can be used to fill in the gaps and cover scenarios that are difficult to automate or require human judgement. This ensure a more comprehensive test coverage and reduces the risk of critical issues slipping through the automated tests.  

In summary, deploying manual test cases is important for varifying functionality, identifying errors, evaluating the user perspective, conducting ad hoc testing, performing early testing, and achieving comprehensive test coverage. Manual testing complements automated testing approaches, helping to improve software quality and provide a better user experience.

## Steps

1. From the **Menu bar**, go to the **Testing** then **Run Tests** option.

![](/img/how-tos/how-to-deploy-and-execute-manual-test-cases/run-tests.png)

2. Go to the **Run Tests/Deploy** page.

   Two tabs will appear:
     * Deployment
     * Environment.

![](/img/how-tos/how-to-deploy-and-execute-manual-test-cases/run-deploy.png)

3. Go to the **Deployment** tab.
   
   **Deployment** tab shows the **Search bar** where test cases need to be searched.  
   **Test Cases** are searched through following fields:
   * Label
   * OnlyFeature
   * Feature
   * ModifiedBy
   * Step
   * Title
   * Folder
   * Set
   * Test Case
   * Related_req
   * Status
   * Priority
   * Related_test
   * Requirement
   * Runid
   * Related_ticket
   * Linked_step
   * OnlyFolder
   * Bug
   * Automatability
   * CreatedBy.  

4. Click and search **Test cases**.  
   **Search Criteria** will show the selected **Test Case**.  
   **Estimated Time** will appear below the **Search Criteria**.  
   
   > **Estimated Time**: *Estimated time* refers to the projected duration or duration range assigned for completing a testing task or set of tasks.  
   Showing *Estimated Time* is necessary to manage project schedules, allocate resources effectively, and provide stakeholders with a timeline for completion and delivery.

![](/img/how-tos/how-to-deploy-and-execute-manual-test-cases/search-test-case.png)

5. Fill up the information of the **Deployment** tab like:
   * Assign testers,
   * Send report to,
   * Milestone,
   * Run objective,
   * Version,
   * Platform (Browser, Mobile).  
   > **Assign testers**: *Assign testers* refers to the process of allocating individuals or teams to evaluate and assess the functionality, quality, and performance of a software or product.   
    Selecting and assigning testers are necessary to ensure the right expertise and skills are allocated to perform comprehensive and reliable testing, improving the quality of the software product.  
    > **Send report to**: *Send report to* refers to the action of forwarding a documented summary of test results, findings, and recommendations to relevant stakeholders or designated recipients for review and action.  
    Selecting the appropriate recipents for the test report is necessary to ensure that the relevant stakeholders receive the information they need to make informed decisions and take appropriate actions based on the test results.  
    > **Milestone**: A *Milestone* represents a significant point or achievement in the testing process, marking the completion of a specific set of tasks or indicating progress towards project goals.  
    The purpose of selecting *Milestones* is to track and measure progress, identify key achievements, and ensure that testing aligns with project goals and timelines.  
    > **Run Objective**: The *Run Objective* refers to the specific goal or purpose of executing a test case or test suite, often aimed at uncovering defects, validating functionality, or assessing system performance.  
    By selecting a *Run Objective* in software testing, it provides a clear focus and direction for testers, guiding their efforts towards specific testing goals and helping them prioritize their activities effectively.  
    > **Version**: A *Version* refers to a specific release or iteration of a software product, typically identified by a unique number or identifier, which may contain bug fixes, feature enhancements, or other modifications.  
    Selecting a *Version* is necessary to ensure that the test cases are executed on the specific software release or iteration being tested, maintaining consistency and accuracy in the testing process.
    > **Platform**: A *Platform* refers to the combination of hardware, operating system, and software dependencies on which the softwrae application is deployed and tested.  
    Selecting *Platform* is necessary to validate the software's compatibility, functionality, and performance across different hardware, operating system, and software configurations.

6. Multiple of **Assign testers** and **Send report to** can also be selected.    
    > Multiple of *Assign testers* and *Send report to* options are selected to distribute testing responsibilities among a diverse team and ensure effective communication and collaboration among various stakeholders for comprehensive testing and informed decision-making.  

![](/img/how-tos/how-to-deploy-and-execute-manual-test-cases/deploy-info.png)

7. To remove any **Assign testers** and **Send report to**, click on the **Cross sign(X)**.  

![](/img/how-tos/how-to-deploy-and-execute-manual-test-cases/cross-sign.png)

8. Click on the **Run** button.  
   > *Run* button initiates the execution of test cases or test suites, triggering the software to perform the specified actions and produce results for analysis and verification.

![](/img/how-tos/how-to-deploy-and-execute-manual-test-cases/run-button.png)

9. Select the **Manual machine**.  
   > A *Manual Machine* refers to a physical device or computer system that is operated and controlled manually by a human tester to perform testing activities and evaluate software functionality.  
   The function of *Manual Machine* is to simulate user interactions, perform manual tests, and assess software behaviour, aiding in the identification of defects and validation of system functionality.
10. Click on the **Deploy** button.  
    > *Deploy* button initiate the process of deploying the tested software or application to a specific environment or production environment for wider use or release.

![](/img/how-tos/how-to-deploy-and-execute-manual-test-cases/manual-deploy.png)

11. Go to the **Results** page and click on the **Run ID** of the deployed test case.  
    > The *Results* page shows the pass or fail status, along with details of executed steps, expected results, actual results, defects, and additional observations.  
    > *Run ID* refers to a unique identifier or label assigned to a specific test run or test execution, enabling traceability and identification of a particular test instance.

![](/img/how-tos/how-to-deploy-and-execute-manual-test-cases/run-id.png)

12. Go to the **Execution Details** page and click on the **Execute** button.  
    > *Execution Details* page provides comprehensive information about the execution of a specific test case, including test steps, results, logs, screenshots, and any associated artifacts.  
    > The function of *Execute* button is to initiate the execution of a specific test case or a selected set of test cases, allowing the tester to observe the results and validate the behaviour of the software.

![](/img/how-tos/how-to-deploy-and-execute-manual-test-cases/execute-button.png)

13. Write the **Comments** for every steps (if it is required).
14. Click to change the **Status**.
15. Click on the **Submit** button.  
    > The function of *Comments* is to provide additional information, insights, or clarifications related to the test case execution or any specific observations made during the testing process.  
    > The function of *Status* is to indicate the outcome or progress of a test case, whether it is passed, failed, in progress, or requires attention.  
    > The function of *Submit* button is to finalize and send the completed test case or test results for further analysis, review, or documentation.
    
![](/img/how-tos/how-to-deploy-and-execute-manual-test-cases/submit-button.png)

16. Click on the **Results** and check whether the test case has been deployed or not.  
    > The *Results* show whether the software functions correctly and meets the expected requirements , helping to identify any potential defects or issues.

![](/img/how-tos/how-to-deploy-and-execute-manual-test-cases/results-button.png)