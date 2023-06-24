---
id: how-to-create-a-test-case
title: How to create a Test Case
---

## Description

### What is a Test Case?

A **Test Case** is a set of instructions that describe the steps to be taken to verify that a particular software feature or function works as expected. It includes test data, preconditions, expected results and postconditions.

**Test cases** are beneficial in exhaustive testing-a software testing approach that involves testing every possible data combination.

### What are the features of a Test Case?

The feature of a test case includes the following:  

1. Test Case ID  
2. Test Case Description  
3. Test Steps  
4. Test Data  
5. Expected Result

### What is the purpose of a Test Case?

The purpose of a **Test Case** is to determine if different features within a system are performing as expected and to confirm that the system satisfies all related standards, guidelines, and customer requirements.

**Test cases** help to check if a particular module/software is meeting the specified requirement or not. They determine if a particular module/ software work with a given set of conditions and help to narrow down the software needs and required updates.

### Why steps are needed in test cases?

**Test cases** are the set of steps that need to be done in order to test a specific function of the software. They are developed for various scenarios so that testers can determine whether the software is working the way it should and producing the expected results.

The steps are an essential part of the test case because without them, you can't understand the test cases. When you hand over the tests, it will be easier for the other person to execute those test cases.

If an issue occurs in the future and your PM asks what steps did you perform, the steps will be proof that you tested the features.

### Why actions are added to test cases in converting to the automated test cases?

Actions are added to test cases in converting to the automated test case because automation requires more detailed instructions than manual testing.

Automated tests require specific actions to be taken on the application under test, such as clicking buttons, entering text into fields, and selecting options from drop-down lists. These actions are added to the automated test case so that the automation tool can execute them.

### What does priority mean?

Priority is an attribute that help users define the order in which they want the test cases to be executed. When you have multiple test cases and want them to run in a particular order, you can use the priority attribute to set test priority.  

### Why browser is needed to run a test case?

A browser is needed to run a test case because it is the platform on which the application is tested. The browser is used to interact with the application and test its functionality.  

### Functions that are needed to edit a Test Case: 

|  Functions  |  Description  |
|------------------------|------------|
| Deploy Test Case       | Refers to the process of running a test case.  |
| Debug Test  Case       | Allows the user to debug a test case (run only specific steps or specific actions).  |
| Copy Test   Case       |  Copies a test case into the same project and team. |
| Create Steps           |  Allows the user to create steps independently of test cases. |
| Step's Action Format   | It is the basic format that is used for preparing a test case.  |
| Auto Calculate Average Step Time  |  It is the automated calculation system for getting the average step duration from previous run histories. |  

### The tabs needed for edit a Test Case:  

| Tab  | Description  |
|------|--------------|
|  Details |  Details of a test case. |
| Steps    | Steps that are related to the test case.  |
| Related Items  | Ticket ID, Test Case ID, and Requirment IDs are given here and also can be updated.  |
|  Discussion | A particular test case can be discussed through comments, example - discussions around the design of a test case.  |
| Run History  | Deployment history of a particular test case.  |
| Attachments  | Attachments to be used inside the test case.  |
| Tasks  | Link one or more related Tasks to a particular test case.  |
| Bugs  | Link one or more related Bugs to a particular test case.  |
| Documents  | Link one or more related Documents to a particular test case.  |
| Test Cases  | Link one or more related Test Cases or create a new test case. |
| Versions  | Compare and save the current Version to a test case. Allows restoration of earlier versions.  |
| History  | Stores the run status history of a particular test case.  |
| Follow  | Allows adding / customizing followers (other users) so that they get notified of the changes for the followed items. |
| Review  | Mainly Review about the test cases that have been prepared.  |  

### Details Tab of the Test Case:

   1. **Status**: It is the required item of the test case.  
    And it indicates whether the test case is ready to deploy.  

    > Possible Values: In-progress, Complete.  

   2. **Automatability**: Automatability tab is required for the test case and indicates whether the test case is fully or partially automated or not.  

    > Possible Values: Automatability, Easy to Automate, Hard to Automate, Not Automatable, Performance, Undefined.  

   3. **Folder**: It is similar to folders in windows/mac/linux, allows users to organize their test cases in hierarchial format and it is the required item for the test case.  

     > Possible Values: Any ZeuZ folder and to create a new folder, need to click on "+" sign for it.  

   4. **Feature**: A Feature is provided to allow organization of test cases according to the features of the application under test (e.g. Profile module, Dashboard module, etc). It is the required item for the test case.  

    > Possible Values: Any ZeuZ feature and click on "+" sign to create a new Feature.  

   5. **Priority**: It is the required item for the test case and indicates the priority of the test cases.  

    > Possible Values: P1-Highest priority, P2-Medium priority, P3-Lower medium priority, P4-Lowest priority.  

   6. **Labels**: It is an optional item for the test case and used to attach custom labels to the test cases.  

    > Possible Values: Any custom label of ZeuZ and click on "+" sign to create a new label.  

   7. **Sets**: It is an optional item for the test case and used to attach test sets to the test cases.  

    > Possible Values: Any test set of ZeuZ and click on "+ NEW SET" sign to create a new set.  

### Steps Tab of the Test Case:  

   1. **Add Button**: This is mainly used for adding a new row during making a test case and for addition of a new row, click on the "+" sign.  

   2. **Steps**: Here, we need to set actions for the test cases step by step and actions can be chosen just by clicking on the "ADD" button and deployment of the test case is also possible here and through click on "SAVE" button, actions will be saved. However, several options are available in "Step" like:  

      1. Continue on fail
      2. Debug of this step
      3. Step info
      4. Expand/Collapse all actions
      5. Copy actions
      6. Paste actions
      7. Step attachments
      8. Step versions
      9. Run on fail
      10. Show difference.  


:::note
    
However, two more parameters are available, one is **GLOBAL** and the other one is **LOCAL**. If the actions are being saved in **GLOBAL** mode then those actions can be used for later test cases as they remain saved but if the actions are being saved in **LOCAL** mode then those actions will be saved only once and cannot be used for other test cases.  

:::

 3. **Description**: It briefly describe the actions that are being performed in each and every step of the test cases.  

 4. **Expected**: The expected output that we will get from the actions mentioned in each step is mainly represented by this.  

 5. **Verification Point(VP)**: It is the central feature of automated testing. According to the requirement, if the test case is verified then select the point **Yes** and if it is not verified then select **No**.  

 6. **Duration**: It actually refers to the time of the steps that takes to carry out all the actions that need to be performed.  

 7. **Remove**: If any of the rows is not needed then it can be removed just by clicking on the red marked cross sign "**X**".  
 

## Steps


1. From the **Menu bar**, go to the **Testing** then **Create/Edit** option.

![](/img/how-tos/how-to-create-a-test-case/create-test-case.png)

2. Go to the **Create Test Case** page.
3. **Enter the title** of the test case.

![](/img/how-tos/how-to-create-a-test-case/create-page.png)

4. Fill up the information of **Details** tab like:
* Status,
* Automatability,
* Folder,
* Feature,
* Priority,
* Labels.
5. Multiple of **Labels** can also be selected.

![](/img/how-tos/how-to-create-a-test-case/details-tab.png)

6. Click on the **Submit New Test Case** button.

![](/img/how-tos/how-to-create-a-test-case/submit-test-case.png)

7. Go to the **View/Edit Test Case** page.
8. Click on the **Steps** tab.

![](/img/how-tos/how-to-create-a-test-case/steps-tab.png)

9. To rename the title, click on the right button of the **Test Case Title**.

![](/img/how-tos/how-to-create-a-test-case/rename-button.png)

10. To add a **Step** below, first click on the **Plus sign(+)** of a step then click the **Below** option.

![](/img/how-tos/how-to-create-a-test-case/below-step.png)

11. To add a **Step** above, first click on the **Plus sign(+)** of a step then click the **Above** option.

![](/img/how-tos/how-to-create-a-test-case/above-step.png)

12. To remove any step, click on the **Cross sign(X)** of that step.

![](/img/how-tos/how-to-create-a-test-case/remove-step.png)


13. To change **Verification Point(VP)**, click on the **Yes/No** button under the **VP** column.

![](/img/how-tos/how-to-create-a-test-case/vp-point.png)

14. Click on the required **Step**.

![](/img/how-tos/how-to-create-a-test-case/view-action.png)


15. To add **Actions**, click on the **+ADD** button and then select the required **Actions**.
16. Multiple number of **Actions** can be added.

![](/img/how-tos/how-to-create-a-test-case/add-action.png)

17. Click to write the **Action** name.
18. To convert the **Step** from **Global > Local** or **Local > Global**, click on the **GLOBAL** button.
19. To rename the **Step**, click on the right button of the required **Step**.

![](/img/how-tos/how-to-create-a-test-case/action-name.png)

20. Click on the **SAVE** button.

![](/img/how-tos/how-to-create-a-test-case/save-action.png)