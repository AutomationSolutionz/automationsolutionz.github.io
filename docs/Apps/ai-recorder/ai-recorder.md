---
id: ai-recorder
title: AI Test Recorder
---

## Description

### What is AI Test Recorder and why is it necessary?

**AI Test Recorder** is a tool that observes user activities within an application and uses AI to translate these actions into detailed, automated test cases. This helps in ensuring that tests replicate real user behaviors and scenarios accurately.

It automates the creation of accurate and comprehensive test cases by recording actual user interactions, thereby saving time, reducing human error, and ensuring consistent test coverage across multiple scenarios. This leads to more efficient testing processes and higher quality software products.

### What is the function of AI Test Recorder?

The function of an AI Test recorder is to automatically capture user interactions with a software application and generate test cases from these interactions, thereby steamlining the test creation process and ensuring comprehensive coverage.

### What is the purpose of AI Test Recorder?

The purpose of an AI Test Recorder is to automate the creation of test cases by recording user interactions with an application and then generating actionable test scripts from these recordings, enhancing test accuracy and efficiency.

## Steps

1. Select a **Test Case**.

![](/img/ai-recorder/select-test-case.png)

2. Go to the **Steps** tab and select a **Step**.

![](/img/ai-recorder/steps-tab.png)

3. Click on the **DEBUG** button to debug the step.

![](/img/ai-recorder/debug-step.png)

4. Click on the **Extensions** button of the automated test case.
   > **Extensions** button provide quick access to the features or settings of a specific extension installed in the browser. This allows users to interact with the extension directly from the browser toolbar for convenience and efficiency.

5. Select and click on the **ZeuZ Test Recorder**.

![](/img/ai-recorder/extension-recorder.png)

6. To record all the actions of the required step, click on the **Record** button.

![](/img/ai-recorder/record-button.png)

7. After recording all the actions of the step, click on the **Stop** button.
   > Once you hit the **Record** button, you can then go ahead and it will take your interactions and convert them into actions.

![](/img/ai-recorder/stop-button.png)

8. To save the recorded actions of the step, click on the **Save** button.

![](/img/ai-recorder/save-record.png)

## Flowchart of AI Test Recorder

![](/img/ai-recorder/flowchart-recorder.png)

:::note

   * We can record any ZeuZ step in any testcase in ZeuZ.

   * The recorded actions will only be saved in ZeuZ server, so you need to have an account in ZeuZ and create test case before you can record. No other forms of export available for the recorded actions.

   * The supported web actions are **Click**, **Enter text**, **Go to link**, **Validate text**, **Validate text by AI**, **Wait for element to appear**, and **Wait for element to disappear**.

   * The recorder is integrated with the **AI-xpath-engine**, eliminating the need for manual identifier selection. The **AI-xpath-engine** analyzes the entire **DOM**, considering hundreds of elements with thousands of combinations, a task often beyond the human capability, to determine the best combination of parent, sibling, and partial matching.

   * Other tools market self-healing by initially suggesting poor xpaths and attempting to correct them in subsequent runs. Our **AI-engine**, however, does not require self-healing because it suggests reliable xpaths right from the start, eliminating the need for corrections.


