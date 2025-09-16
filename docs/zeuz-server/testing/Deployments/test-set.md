---
id: test-set
title: Test Set
---

import MetaCard from '@site/src/components/MetaCard';

A Test Set is a collection of logically grouped test cases. Test sets can be executed and they provide easy and quick reporting capabilities. Think test sets for nightly runs with Scheduler, test sets for core features of your application, etc.

<MetaCard
  availableFrom="20250518"
  difficulty="🟢 Easy"
  lastUpdated="16 Sep, 2025"
  tags={["testing", "deployments", "set"]}
  relatedTopics={["automation", "reporting", "dashboard"]}
/>


### Why it matters / Use Cases:

*   **Reducing manual effort** in running repeated tests by grouping and automating related test cases for bulk execution.
*   **Ensuring consistent and timely test runs** (e.g., nightly, hourly, or on specific dates) by scheduling predefined sets of regression or smoke tests.
*   **Integrating test execution into CI/CD pipelines** to automatically trigger relevant test sets (like sanity or feature-specific tests) with every code commit, ensuring immediate feedback without manual intervention.
*   **Achieving comprehensive test coverage** by logically grouping tests by feature, priority, or risk to ensure all critical areas are validated together.
*   **Facilitating clear reporting and progress tracking** by providing a structured unit for measuring test results, pass/fail rates, and overall testing status for a specific release or sprint.

## Prerequisites

...

## Quick-Start

...

## Features

...

## Add or remove test cases

...

## Deploy test sets

...

## FAQs / Troubleshooting

...

## Changelog

- Adopted a new card view [[20250518](/blog/zeuz-platform-20250518/)]

## Related Features

- [Run test cases](#)
- [Run history](#)
- [CI/CD Presets](#)
- [Scheduler](#)

## OLD

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