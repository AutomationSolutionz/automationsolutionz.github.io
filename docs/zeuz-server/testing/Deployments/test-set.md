---
id: test-set
title: Test Set
---

import MetaCard from '@site/src/components/MetaCard';

A Test Set is a collection of logically grouped test cases. Test sets can be executed and they provide easy and quick reporting capabilities. Think test sets for nightly runs with Scheduler, test sets for core features of your application, etc.

<MetaCard
  availableFrom="20250518"
  difficulty="🟢 Easy"
  lastUpdated="18 Sep, 2025"
  relatedTopics={["Run test cases", "Run history", "CI/CD Presets", "Scheduler"]}
/>


### Why it matters / Use Cases:

*   **Reducing manual effort** in running repeated tests by grouping and automating related test cases for bulk execution.
*   **Ensuring consistent and timely test runs** (e.g., nightly, hourly, or on specific dates) by scheduling predefined sets of regression or smoke tests.
*   **Integrating test execution into CI/CD pipelines** to automatically trigger relevant test sets (like sanity or feature-specific tests) with every code commit, ensuring immediate feedback without manual intervention.
*   **Achieving comprehensive test coverage** by logically grouping tests by feature, priority, or risk to ensure all critical areas are validated together.
*   **Facilitating clear reporting and progress tracking** by providing a structured unit for measuring test results, pass/fail rates, and overall testing status for a specific release or sprint.

## Prerequisites
- Access to ZeuZ Server with permissions for **Testing → Deployments → Sets**.
- For creating a **Test Set**, one or more test cases must be available.

## Quick-Start
1. On the **Test Set** page, click on the button named "New Set".
2. Enter the "Name" and "Description" of the test set and click "OK" to create.
3. Navigate to the **Add** tab, select some test cases and click "Add selected" to add some test cases to the set.

## Features
1. Navigate to the **Test Set** page, where you will find options such as "Filter by" and a "New Set" button. However, test sets can be filtered in two ways: 

   1. **Most TC**    
   2. **Set Name**.

  At the top center of the test set, selecting a version or milestone shows the count of passed, failed/blocked, and skipped test cases, along with the difference between the two selections.

  ![](/img/how-tos/how-to-create-test-sets/test-set.png)

  ![](/img/how-tos/how-to-create-test-sets/difference-test.png)

2. In the **Test Set** page, card view of the test set is represented. The card view includes the following information:  
   1. The name of the test set.
   2. Shows the total number of test cases in the set, as well as the number of test cases that have been passed, failed, blocked, and submitted.
   3. The execution time of the test set.
   4. The preset of the test set is defined. However, if we click on the preset that has been connected to the test set then it will show the following run configuration information, such as:

    |                    |  Properties    |                       |
    |--------------------|----------------|-----------------------|
    |  1. Node           |  2. Testers    |  3. Emails            |
    |  4. Version        |  5. Milestone  |  6. Objective         |
    |  7. Browser        |  8. Mobile     |  9. External service  |

    The benefit here is that if the preset of a set is selected, it will display the test cases associated with that set.  
   5. It also displays the plan, if there is one.  
   6. The description is available; if there is a description, it will be displayed, otherwise, the field will remain blank.  
   7. The scheduler will be displayed if it has been created for that test set.  
   8. Below the card, there is a "Deploy" button used to deploy the test set.  

   ![](/img/how-tos/how-to-create-test-sets/settings-button.png)

When the test set card is expanded, it displays the test cases belonging to that set. The test cases can be sorted in two ways:  
1. **Sort by Set order**
2. **Sort by Status**.

![](/img/how-tos/how-to-create-test-sets/set-des.png)

When sorted by "Status", failed test cases appear first, followed by blocked, passed, and not-run cases. Hovering over any test case shows its version, milestone, and run ID.

![](/img/how-tos/how-to-create-test-sets/set-version.png)


## Add or remove test cases
1. First, click on the **Test Set Name** of the specific test set card available on the **Set** page.

![](/img/how-tos/how-to-create-test-sets/card-set.png)

2. Go to the **Test Set (Add/Remove)** page and click on the **Add** tab.
3. Click the "checkbox" to select test cases for adding to the test set.
4. Next, click on the "Add Selected" button.
 
![](/img/how-tos/how-to-create-test-sets/add-tab.png)

5. Click on the **View** tab to see whether the required **Test cases** are added or not.

![](/img/how-tos/how-to-create-test-sets/view-tab.png)

6. To remove a test case, select the checkbox next to the desired test case, then click on the "Delete Selected" button. The selected test case will be deleted.

![](/img/how-tos/how-to-create-test-sets/remove-set.png)


## Deploy test sets
1. Click on the **Deploy** button of the required **Test Set**.

![](/img/how-tos/how-to-deploy-test-sets/set-deploy.png)

2. Go to the **Run Tests/Deploy** page.
3. Click on the **Run** button.

See [related topics](#related-topics) to learn more about running your tests.

## FAQs / Troubleshooting

<details>
<summary>How to run test sets on schedule at specific intervals?</summary> 

1. Create a "Run preset" from Testing → Deployment → Run Test with this set as the search filter.
2. Go to Testing → Configure → Schedule to create a schedule with the new preset.

</details>

<details>
<summary>How to run test sets from CI/CD pipelines?</summary> 

1. Create a "Run preset" from Testing → Deployment → Run Test with this set as the search filter.
2. Go to Testing → Configure → CI/Run preset and copy the cURL command or webhook url.
3. Put the cURL command in your CI/CD pipeline.

</details>

## Changelog

- Adopted a new card view [[20250518](/blog/zeuz-platform-20250518/)]

## Related Topics

- [Run test cases](https://docs.zeuz.ai/docs/zeuz-server/testing/Deployments/run-tests/)
- [Run history](https://docs.zeuz.ai/docs/zeuz-server/testing/Deployments/how-to-use-history-page/)
- [CI/CD Presets](https://docs.zeuz.ai/docs/zeuz-server/testing/Deployments/how-to-create-webhook-for-cicd/)
- [Scheduler](https://docs.zeuz.ai/docs/zeuz-server/testing/Deployments/how-to-create-schedule/)

---
