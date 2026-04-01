---
id: debug-test-cases
title: Debug Test Cases
---

import MetaCard from '@site/src/components/MetaCard';

**Debug Test Case** represents a dedicated action and steps for running a test case in debug mode. It allows the user to execute a test step by step in order to closely observe each action, input, and system response. This helps in identifying the exact point where a test fails or behaves incorrectly.

<MetaCard
  availableFrom="20250712"
  difficulty="🟢 Easy"
  lastUpdated="1 Apr, 2026"
  relatedTopics={["Create test case"]}
/>

### Why it matters / Use Cases:

- **Step-by-Step Execution**: It runs the test case step by step, or action by action, to closely observe its execution.
- **Avoid Test Case Restarts by Keeping the Application Running**: Keep the application in a running state so that work can continue without having to restart the test case from the beginning after each modification.
- **Improved Test Reliability**: Allows careful observation of test execution so that errors can be corrected 
before regular runs.
- **Efficient Troubleshooting**: Reduces the time spent investigating failures by running tests step by step.

## Prerequisites
- Access to ZeuZ Server with permissions for **Testing → Test Case → Create / Edit**.
- A test case must be properly defined before debugging.
- The application under test should be running and accessible.
- The necessary environment, test data, and configurations must be prepared.
- Any debug settings, such as breakpoints or step-by-step execution options, must be configured before starting the debug.

## Quick-Start
1. Open a test case.
2. Hit "Debug Test Case" button.
3. Select the steps or actions you would like to run/debug.
4. Select node, browsers and runtime parameters.
5. Hit "Debug" button.

## Features
### Click the "Debug Test Case" button
- Open a test case from the **Create Test Case** page.
- After selecting the required test case, click the **EDIT** button.
- Next, click the **Debug Test Case** button.

![](/img/how-tos/how-to-debug-test-cases/demo-test.png)

![](/img/how-tos/how-to-debug-test-cases/edit-button.png)

![](/img/how-tos/how-to-debug-test-cases/debug-test.png)

### Debug test case page
- Navigate to the **Debug Test Case** page.
- Fill in the following information:  
  - Select all steps
  - Node
  - Preset
  - Browser (Google Chrome, Firefox, Microsoft Edge Chromium, Safari, Chrome Headless, Firefox Headless, Edge Chromium Headless, Android Chrome, iOS Safari)
  - Mobile (Android, iOS, iOS Simulator)
  - Run Time Parameters (if required)
  - Variables (if required).

![](/img/how-tos/how-to-debug-test-cases/debug-steps.png)

### Selection type
- Two types of selection are available:  
  - **Select all steps**: It selects all steps of the test case for debugging.
  - **Select specific steps**: It selects the specific steps of the test case that needs to be debugged.
- Click **Select all steps** for the selection of all steps.
- To debug specific steps, click to select the required ones.
- However, **Actions** can be selected individually or all at once.

![](/img/how-tos/how-to-debug-test-cases/all-steps.png)

![](/img/how-tos/how-to-debug-test-cases/specific-steps.png)

![](/img/how-tos/how-to-debug-test-cases/selected-actions.png)

![](/img/how-tos/how-to-debug-test-cases/all-actions.png)

### Node connection
- To run a test case, a ZeuZ node must be up and running.
- It must be running in the background.
:::note
If it is launched for the first time, the ZeuZ Node ID may not appear as online. Instead, a message may be displayed indicating that the ZeuZ node is disconnected.

:::
- If the message appears in red color, click on the **Node** icon and from there click on the **Connect** button.

![](/img/how-tos/how-to-debug-test-cases/node-available.png)

![](/img/how-tos/how-to-debug-test-cases/node-connect.png)

- Once connected, a message will be displayed in the terminal.

![](/img/how-tos/how-to-debug-test-cases/windows-online.png)

### Debug test cases
- From the node selector dropdown, select a particular node ID .
- To debug test cases, click the **Debug** button available below.

![](/img/how-tos/how-to-debug-test-cases/node-dropdown.png)

![](/img/how-tos/how-to-debug-test-cases/debug-test-case.png)

## Additional features
### Error test case
- If any steps or actions are not defined, the test case cannot be executed and is considered incomplete.

![](/img/how-tos/how-to-debug-test-cases/terminal-error.png)

- To fix the error, go back to the test case, insert the missing action, move it to the correct position, and provide the required value.

### Runtime parameters
- This is the feature where we do not have to define variables inside the test cases but rather at runtime we can select the values of that variable.
- On the right panel, runtime parameters option is available, allowing custom parameters to be defined. These are similar to variables; however, variables are defined within test cases, whereas runtime parameters are selected during deployment or execution.

![](/img/how-tos/how-to-debug-test-cases/runtime-new.png)

- If there is already have a runtime parameter, we can select that and add new values to it. however, we can select a particular value or we can add new values to it and can also select a different value.

![](/img/how-tos/how-to-debug-test-cases/new-tag.png)

![](/img/how-tos/how-to-debug-test-cases/tag-two.png)

- When a different value is selected and the Debug button is clicked, that value is displayed. If another value is selected and Debug is clicked again, the updated value will be shown accordingly.

## Variables
- We can also navigate the variables that are generated at runtime.

![](/img/how-tos/how-to-debug-test-cases/variable-panel.png)

![](/img/how-tos/how-to-debug-test-cases/variable-paneltwo.png)

- ZeuZ includes a wide range of useful built-in variables that can be easily utilized within test cases. These variables can be referenced directly, and nested variables and complex structures can be accessed and navigated as needed.

![](/img/how-tos/how-to-debug-test-cases/nested-variable.png)

## FAQs / Troubleshooting

<details>
<summary>Why can't I see all steps when debugging?</summary>

Ensure that the test case is properly defined and all steps are added. Only defined steps appear for debugging.

</details>

<details>
<summary>Why does the debug stop unexpectedly?</summary>

Check that the required environment, data, and configurations are ready. Any missing dependency may interrupt execution.

</details>

<details>
<summary>Can I debug only specific steps of a test case?</summary>

Yes, select the specific steps before clicking the **Debug** button. This allows focused step-by-step observation.

</details>

<details>
<summary>How do I maintain application state during debugging?</summary>

Keep the application running to avoid restarting the test case after each modification.

</details>

<details>
<summary>Can I observe variable values during debugging?</summary>

Yes, use the step-by-step mode to inspect data and variable states at each step.

</details>

## Changelog

- New UI has been introduced [[20250712](/blog/zeuz-platform-20250712/)]

## Related Topics

- [Create test case](https://docs.zeuz.ai/docs/zeuz-server/testing/Test%20Case/create-test-cases/)

---