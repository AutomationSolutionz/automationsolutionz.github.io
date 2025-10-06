---
id: run-tests
title: Run Tests
---

import MetaCard from '@site/src/components/MetaCard';

In **ZeuZ**, running tests refers to executing automated or manual test cases on a selected machine, browser, or mobile device with defined testers, version, milestone, configurations, platforms, notifications, and runtime parameters to verify the application's expected behavior and record the results for analysis.

<MetaCard
  availableFrom="20250818"
  difficulty="🟢 Easy"
  lastUpdated="06 Oct, 2025"
  relatedTopics={["History", "Deploy the test cases", "CICD Run preset / Webhook", "Runtime parameters"]}
/>

### Why it matters / Use Cases:

* **Test Execution** - Running the selected test case to verify its functionality.
* **Manual and Automated Testing** - Selecting the execution machine to perform either manual or automated runs.
* **Team Collaboration** - Assigning testers and notifying other team members via email or messaging platforms (e.g., Teams, Discord, Slack etc.) to track execution progress.
* **Version and Milestone Tracking** - Associating the test run with a specific version and milestone for proper traceablity.
* **Preset and Configuration Management** - Choosing a preset to ensure consistent test environments and parameters.
* **Cross-Browser / Platform Testing** - Selecting browsers or platforms (e.g., Chrome, Firefox, Android, iOS) for multi-platform validation.
* **Runtime Parameterization** - Using runtime parameters to dynamically pass data during test execution for flexibility.

## Prerequisites
- Access to ZeuZ Server with permissions for **Testing → Deployments → Run tests**.
- One or more automated or manual test cases.
- A valid execution environment with ZeuZ Node connected.
- Email settings configured from **Admin → Project** to receive reports.
- At least one version and milestone defined.

## Quick-Start
1. Go to the **Run Tests** page.
2. Search for test cases using the search bar.
3. Run the selected test cases.

## Features

1. At the top left side, a **Preset Filter** button is available with two options:  
- **Update search filters**
- **Update configs**.  
Additionally, a **Select Preset** option, a **Create/Update Preset** button, and a **Run** button are available for the deployment of test cases.

![](/img/how-tos/run-tests/preset-filter.png)

2. Two tabs are available:  
- **Basic Tab** (which falls under the **Execution setup** panel)
- **Advanced Tab** (which is located in the **Advanced Execution** settings).

![](/img/how-tos/run-tests/basic-advanced.png)

### Explanation of Basic Tab

1. **Node**: It connects to a network and is responsible for executing test cases.  
   **Example**: Manual_Machine_ayesha.
2. **Testers**: Specifying the users responsible for monitoring or executing the test.  
   **Example**: Two users are assigned: Test (TE), Ayesha (AY).  
3. **Emails**: Specific emails are listed to receive notifications about the test execution.  
   **Example**: sazid@zeuz.ai, ayesha@automationsolutionz.com.  
4. **Version**: It refers to the software version or build version under which the test execution is being carried out.  
   **Example**: Version: 1:1.2.
5. **Milestone**: It represents the testing phase under which the test executions are being carried out.  
   **Example**: QA Milestone.
6. **Objective**: Indicates the purpose or goal of executing the test cases.  
   **Example**: Test preset.
7. **Browser**: Icons for **Chrome**, **Firefox**, **Microsoft Edge**, **Safari** etc. are displayed. Here, only **Chrome** is highlighted meaning the execution is set to run on **Chrome**.  
   **Example**: Google Chrome, Firefox, Microsoft Edge, safari.
8. **Mobile**: **Android** icon is active, while **iOS** and **iOS simulator** are inactive, indicating the test is configured for **Android** devices.  
   **Example**: Android, iOS, and iOS simulator.
9. **External Service**: Field to select integrations for execution. It can also be created by clicking the button on its right side.  
   **Example**: QA.
10. **Runtime parameters (optional)**: It is a value given during execution that controls how the test runs.  

![](/img/how-tos/run-tests/basic-tab.png)

### Explanation of Advanced Tab

#### 1. Options for Execution Behaviour

- **Step Duration Timeout**: Enables a time limit for each step in the test case if selected.
- **Take Screenshot**: Captures a screenshot during execution for record-keeping or debugging.
- **Rerun on Fail**: Automatically re-runs the test case if it fails.
- **Notify External Services Only on Fail**: Send notifications to connected external services only if the test fails.
- **Email Only on Fail**: Sends an email notification only if the test fails.
- **Run Pre-Requisites**: Ensures that any required pre-steps or setups are executed before the main test starts.
- **Upload Logs Only on Fail**: Uploads execution logs only if the test case fails.

#### 2. Additional Configuration Fields

- **Resolution**: It refers to the size of the browser's viewport (the visible area of a web page inside the browser window). It is measured in pixels.  
  **Example**: Currently set to `0 x 0`, indicating no custom resolution is defined.
- **Expected schedule**: It refers to the planned or pre-determined timeline for when a **task**, **event**, or **execution** is supposed to start and finish.  
  **Example**: Here, the execution is scheduled to run on **2023-05-03** where the start date and end date are the same.
- **Loop**: It refers to running the same test case or a set of test steps repeatedly for a defined number of times or until a specific condition is met.  
  **Example**: Here, the loop is set to `1`, meaning the test case will run only once in this execution.
- **Rerun an existing deployment**: Search field to select and rerun a previous deployment by Objective or Run ID.

![](/img/how-tos/run-tests/advanced-section.png)

## FAQs / Troubleshooting
### FAQs

<details>
<summary>Why can't I see certain test cases in the list?</summary>

Your user account likely lacks permission to view the specific folders or features where those test cases are located.

</details>

<details>
<summary>How do I find and filter specific test cases?</summary>

Use the "Search Test Cases..." field at the top to search by Test case ID, title, or feature.

</details>

<details>
<summary>What should I do before running a test?</summary>

Ensure you have selected the correct node, testers, emails, groups, browser, mobile, version, milestone, and test preset from the respective dropdown menus.

</details>

<details>
<summary>Why can't I execute the "Run" command?</summary>

Verify that all required fields are populated: Node, Testers, Emails, Browser, Mobile, Version, Milestone, and Test Preset must be selected.

</details>

### Troubleshooting

- **Test Case Not Executing** - Ensure that the selected test cases are active and properly linked to a valid plan or preset.
- **No Test Environment Detected** - Verify that the machine, browser, or device is correctly configured and connected before running the test.
- **Missing Permissions** - Check that the user has the necessary permissions.
- **Incorrect Version or Milestone**: Confirm that the selected version and milestone match the current setup.
- **Failed connection to ZeuZ Server** - Ensure that the ZeuZ server is reachable and there are no network issues.
- **Test Results Not Updating** - Refresh the page or re-sync the results to confirm that execution data is reflected properly in ZeuZ.

## Changelog

- Advanced Tab refinements
- Responsive Sidebar Layouts
- Ensures test cases link to active plans/presets
- Sending external service reports only on fails
- Improved Version Name Validation    
[[20250818](/blog/zeuz-platform-20250818/)]

## Related Topics

- [History](https://docs.zeuz.ai/docs/zeuz-server/testing/Deployments/history-page/)
- [Deploy the test cases](https://docs.zeuz.ai/docs/zeuz-server/testing/Deployments/deploy-test-cases/)
- [CICD Run preset / Webhook](https://docs.zeuz.ai/docs/zeuz-server/testing/Deployments/ci-cd-run-preset-webhook/)
- [Runtime parameters](https://docs.zeuz.ai/docs/zeuz-server/testing/Deployments/runtime-parameters/)

---