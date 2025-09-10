---
id: run-tests
title: Run Tests
---

## Description
In **ZeuZ**, running tests refers to executing automated or manual test cases on a selected machine, browser, or mobile device with defined testers, version, milestone, configurations, platforms, notifications, and runtime parameters to verify the application's expected behavior and record the results for analysis.

## Steps

1. From the menu bar, go to the **Testing** option and select the **Run Tests** feature located under **Deployments**.

![](/img/how-tos/run-tests/run-testing.png)

2. Go to the **Run Tests** page.
3. To search for test cases, use the **Search** bar at the top left, and select the desired test cases. Alternatively, test cases can be searched using the **Filter by Date** option, and the selected test cases will be displayed on the page.
4. It also shows the **Execution Time** of the test case, which indicates the elapsed time for the current test case, and the **Execution Status** of the test case (**Pass**, **Fail**, **Blocked**).

![](/img/how-tos/run-tests/run-search.png)

5. At the top right side, a **Preset Filter** button is available with two options:  
- **Update search filters**
- **Update configs**.  
Additionally, a **Select Preset** option, a **Create/Update Preset** button, and a **Run** button are available for the deployment of test cases.

![](/img/how-tos/run-tests/preset-filter.png)

6. Two tabs are available:  
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

:::note
To learn how to create Runtime parameters, click on the link below:

https://docs.zeuz.ai/docs/zeuz-server/testing/how-to-add-runtime-parameters/

:::

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

---