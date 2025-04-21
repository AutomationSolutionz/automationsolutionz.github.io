---
id: how-to-create-test-sets
title: Test Set Page
---

## Description

### What is a Test Set?

A **Test Set** is a collection of test cases that are grouped together for execution purposes. Test sets are used to organize and execute tests in a logical.

### How Test Set works in automated test cases?

In automated testing, **Test Sets** are used to organize and execute tests in a logical order. **Test Sets** are created by grouping together related tests into a single unit. This allows testers to execute multiple tests at once and ensures that tests are executed in the correct order. Test sets can be created manually or automatically using automation tools.

### What is the importance of Test set?

**Test Sets** are important in software testing because they help to organize test cases and make it easier to manage them. **Test Sets** can be used to group test cases by feature, priority or any other criteria that is relevant to your testing process. This can help to ensure that all test cases are executed and that any issues are detected as soon as possible. Test sets can also be used to track the progress of testing and to identify areas that require additional testing.

### Roles of a Test Set

A **Test Set** serves important roles in software testing. It organizes related test cases, making them easier to manage and execute. It ensures that all relevant test cases are executed together, providing a structured approach to testing. 

The **Test Set** helps achieve test coverage goals and facilities regression testing by including relevant test cases. It aids in test planning, documentation, and reporting, providing valuable insights into test execution progress and results.

Overall, the **Test Set** enhances efficiency, ensures comprehensive testing, and supports effective test management and reporting.

## Steps

1. From the **Menu bar**, go to **Testing**, then select the **Set** option.

![](/img/how-tos/how-to-create-test-sets/set-option.png)

2. Navigate to the **Test Set** page, where you will find options such as "Filter by" and a "New Set" button. However, test sets can be filtered in two ways: 
   1. **Most TC**    
   2. **Set Name**.

  Additionally, at the top center of the test set, selecting either a version or milestone displays the number of passed, failed/blocked, and skipped test cases, as well as the difference in test cases between the two selected milestones or versions.

![](/img/how-tos/how-to-create-test-sets/test-set.png)

![](/img/how-tos/how-to-create-test-sets/difference-test.png)

3. In the **Test Set** page, card view of the test set is represented. The card view includes the following information:  
   1. The name of the test set.
   2. Shows the total number of test cases in the set, as well as the number of test cases that have been passed, failed, blocked, and submitted.
   3. The execution time of the test set.
   4. The preset of the test set is defined. However, if we click on the preset that has been connected to the test set then it will show the following run configuration information, such as:
      - **Node**
      - **Testers**
      - **Emails**
      - **Version**
      - **Milestone**
      - **Objective**
      - **Browser**
      - **Mobile**
      - **External service**.  

    The benefit here is that if the preset of a set is selected, it will display the test cases associated with that set.
   5. It also displays the plan, if there is one.
   6. The description is available; if there is a description, it will be displayed, otherwise, the field will remain blank.
   7. The scheduler will be displayed if it has been created for that test set.
   8. Below the card, there is a "Deploy" button used to deploy the test set.

![](/img/how-tos/how-to-create-test-sets/settings-button.png)

---

### Description of an expanded test set card
When the test set card is expanded, it displays the test cases belonging to that set. The test cases can be sorted in two ways:  
1. **Sort by Set order**
2. **Sort by Status**.

![](/img/how-tos/how-to-create-test-sets/set-description.png)

If the test cases are sorted by "Status", the order will be as follows: failed test cases will appear first, followed by blocked test cases, then passed test cases, and finally, any test cases that have not been run will be displayed at the end.
However, if a user hovers over any test case, it will display the "version", "milestone" and "run ID".

![](/img/how-tos/how-to-create-test-sets/set-version.png)

---

## How to create a Test Set

### Steps

1. On the **Test Set** page, there is a button named "New Set".
2. Click on the "New Set" button.

![](/img/how-tos/how-to-create-test-sets/new-set.png)

3. Click to enter the **Set Name** and also provide the **Set Description**.

4. Next, click on the "OK" button, and the test set will be created.

![](/img/how-tos/how-to-create-test-sets/set-ok.png)

---

## How to add test cases to a Test Set

### Steps

1. First, click on the **Test Set Name** of the specific test set card available on the **Set** page.

![](/img/how-tos/how-to-create-test-sets/card-set.png)

2. Go to the **Test Set (Add/Remove)** page and click on the **Add** tab.

3. Click the "checkbox" to select test cases for adding to the test set.

4. Next, click on the "Add Selected" button.
 
    > The function of the *ADD SELECTED* button is to include or add the currently selected test cases to the test execution or test plan, allowing for efficient selection and inclusion of desired tests.

![](/img/how-tos/how-to-create-test-sets/add-tab.png)

5. Click on the **View** tab to see whether the required **Test cases** are added or not.
    > Checking whether the required *Test Cases* are added or not is necessary to ensure that the appropriate test coverage is achieved and no essential scenarios are overlooked.

![](/img/how-tos/how-to-create-test-sets/view-tab.png)

6. To remove a test case, select the checkbox next to the desired test case, then click on the "Delete Selected" button. The selected test case will be deleted.

![](/img/how-tos/how-to-create-test-sets/remove-set.png)

---