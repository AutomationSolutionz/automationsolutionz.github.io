---
id: test cases
title: Test Cases
---

import MetaCard from '@site/src/components/MetaCard/';

A **Test Case** in Test Studio is a set of steps used to verify a specific functionality of an application. It allows users to **run**, **edit**, and **review** tests and their results in one place.

<MetaCard
availableFrom="202605"
difficulty="🟢 Easy"
lastUpdated="29 Sep, 2026"
/>

### Why it matters / Use Cases:
- **Functionality Verification**: Verify that specific application features work as expected.
- **Test Execution**: Run individual test cases to validate application behavior.
- **Test Review**: Inspect test steps, source code, variables, and execution results.
- **Test Organization**: Organize test cases by features and folders for easier management.
- **Repository-Based Testing**: Execute test cases against the tracked code from a selected branch.
- **Test Maintenance**: Edit and update test cases when application functionality or requirements change.

## Prerequisites
- **Test Repository**: A test repository should be connected to the workspace to access and manage test cases.
- **Test Cases**: At least one test case should be available in the repository.
- **Required Test Data**: Any variables or resources required by the test case should be configured.
- **Branch**: A valid repository branch should be available for running the test cases.

## Features
- To access Test Cases, click **Test Cases** option from the left-side panel.
- After clicking **Test Cases** option from the left-side panel, the "Test Cases" page will appear.

![](/img/zeuz-test-studio/test-left.png)

### Top section of the Test Cases page
- The top section of the **Test Cases** page provides an overview of the main activities available for managing and executing test cases.
  - **Select cases and sets**: Allows users to find and select the test cases or suites they want to run.
  - **Run from your repository**: Allows users to select a branch and execute tests against the tracked code.
  - **Inspect every case**: Allows users to review test steps, source code, variables, and execution results.
  - **Search**: The search field allows users to search for branches, sets, features, and test cases.
  - **Items per page**: The dropdown allows users to select the number of items displayed on the page.
  - **Open repository**: The repository icon on the right allows users to open the connected test repository.

![](/img/zeuz-test-studio/test-top.png)

### Test Case List
- The test case list displays the available test cases along with their associated features and folders.
  - **ID**: It is a unique value assigned to a test case to distinguish it from other test cases and identify it within Test Studio.
  - **Name**: Displays the name of each test case.
  - **Feature**: Shows the feature associated with the test case.
  - **Folder**: Displays the repository folder where the test case is located.
  - **Actions**: Provides actions for individual test cases. The View test code option allows users to view the code of the selected test case.
  - **Selection**: The checkbox beside each test case allows users to select a test case for further actions.

![](/img/zeuz-test-studio/test-list.png)

### Functionality of Test Cases feature
- The **Test Cases** section displays the available test cases.
- Users must also specify a **run title**, **label**, and **split**, as these fields are required before the selected test cases can be run.
- For example, a test case may belong to the **Login** feature and contain all the steps required to verify the login functionality. Users can also specify a **run title**. In this example, the label is set to **win**, and the number of splits is set to **1**.
- After that, click the **Run selected** button to run the selected test case.

![](/img/zeuz-test-studio/run-login.png)

- After the selected test case finishes running, the user is directed to its **execution report**. It displays the following options:  
  - **Report Name**: It displays the name or title assigned to a report to identify it easily.
  - **Overall Status**: It indicates the combined status of all tests or test cases included in a test run.
  - **Set**: It indicates the temporary test set used for the specific execution.
  - **Label**: It indicates the assigned execution label.
  - **Splits**: It means dividing the test cases or execution work into smaller groups for separate execution.
  - **Branch**: It indicates the source-control branch associated with the test run.
  - **Result**: It indicates the outcome of a test execution.
  - **Total Duration**: It indicates the total amount of time taken to execute a test case or test run.
  - **Number of Tests**: It indicates the total number of test cases included in a test run.
  - **Version**: It is a saved state of a test case at a particular point in its development.
  - **Milestone**: It is a defined testing goal or stage used to track the progress of testing activities.
- The left sidebar lists previous reports and includes a search field.
- The main report area also provides a test-case search box, an arrow for expanding the test case to inspect its steps, and a **Pin report** button.

![](/img/zeuz-test-studio/test-execution.png)

### Test Summary
- After running a specific test case, click on the test case to view its test summary.
- The **Test Summary** page provides an overview of the selected test case, including:  
  - **Test Case Name**: The title of the test case is displayed at the top.
  - **What this test does**: It is a section that describes the main actions or steps performed by a test case.
  - **Data Sources**: Displays the variables used by the test case, such as username, password, and URL.
  - **Last Run**: Shows the result of the most recent execution.
  - **View run details**: It allows users to view detailed information about a specific test execution.
  - **Test Case Details**: Displays information such as the test case ID, feature, test set, type, branch, number of steps, and last updated time.
  - **Recent Runs**: Displays a visual summary of the test case's recent executions.
- There are three options available at the top of the page, such as:  
  - **Readable**: Displays the test case in a human-readable format, making it easier to understand the test steps and other test information.  

:::note
  The **Readable** option displays all the information and options available under **Test Summary**.
![](/img/zeuz-test-studio/readable-test.png)

:::
  - **Code**: Displays the underlying code of the test case for users who need to review or work with its implementation.  

 ![](/img/zeuz-test-studio/code-test.png)

  - **Run test**: Starts the execution of the selected test case.

  ![](/img/zeuz-test-studio/run-button.png)

### Edit a Test Case
- To edit a test case, first click the **Code** button. Then, click the **Edit test code** button.
- After clicking the **Edit test code** button at the top-right, users are directed to the **Test Case Workspace**, where they can view and edit the files associated with the selected test case.
- At the top-right corner, there is a **Save changes** button. After editing the code and making the required changes, click the **Save changes** button to save the updates.

![](/img/zeuz-test-studio/edit-code.png)

![](/img/zeuz-test-studio/testing-description.png)

![](/img/zeuz-test-studio/login-save.png)

### Explorer Panel
- The **Explorer** is the file-navigation panel in the Test Case Workspace. It lets users browse files using two different scopes:  
  - **This test case**: It displays only the files and code related to the selected test case.
  - **Full repository**: It shows the entire connected test repository, including other test cases, shared files, folders, and resources.

![](/img/zeuz-test-studio/explorer-menu.png)

![](/img/zeuz-test-studio/this-test.png)

![](/img/zeuz-test-studio/full-repository.png)

## FAQs / Troubleshooting

<details>
<summary>Can I view the test case without editing it?</summary>

Yes. Click the Readable option to view the test case in a human-readable format.

</details>

<details>
<summary>How can I edit a test case?</summary>

Click Code, and then click Edit Test Code to open the Test Case Workspace, where the associated files can be viewed and edited.

</details>

<details>
<summary>How can I view the result of a test case?</summary>

After execution, open the test case to view its Test Summary, which displays the execution result and other test details.

</details>

<details>
<summary>Why can't I run a test case?</summary>

Ensure that the required test repository is connected, the appropriate branch is selected, and the required test data or configuration is available.

</details>

<details>
<summary>Why does a test case fail during execution?</summary>

Review the test steps, test data, configuration, and execution details to identify the cause of the failure.

</details>

<details>
<summary>Why are my changes to a test case not visible?</summary>

Ensure that the changes were saved successfully and that the correct branch or version of the test case is being viewed.

</details>

## Changelog

- A dedicated workspace for creating, refining, comparing, and versioning AI-generated UI mockups [[202605](/blog/zeuz-platform-202605/)]

---