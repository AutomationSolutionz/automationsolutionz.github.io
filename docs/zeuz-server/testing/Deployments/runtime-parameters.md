---
id: runtime-parameters
title: Runtime Parameters
---

import MetaCard from '@site/src/components/MetaCard';

**Runtime Parameters** refer to the values or settings provided at the moment a test case is executed. They allow the tester to supply specific inputs during execution without changing the test case itself, making the run more flexible and adaptable to different scenarios.

<MetaCard
  availableFrom="20250518"
  difficulty="🟢 Medium"
  lastUpdated="20 Nov, 2025"
  relatedTopics={["Create test cases", "Run tests", "Debug the test cases"]}
/>

### Why it matters / Use Cases:
- **Test user**: Used to select the specific user account that will be applied during test execution.
- **Specific server or environment URL**: Used to run the test against a specific server or environment URL.
- **Client/Tenant selection**: Used to choose the client or tenant for which the test should run.
- **Specific environment, version, or configuration**: Used to specify a particular deployment version or configuration.

## Prerequisites
- Access to ZeuZ Server with permissions for **Testing → Deployments → Run Tests**.
- Test cases must exist and be designed to accept parameterized inputs.
- All runtime parameters should be declared and linked to the relevant test cases.
- Test cases and parameters should correspond to the software version or build under test.

## Quick-Start
1. Use the **Search parameters** icon to quickly find specific parameters.
2. Use the **New Runtime Parameter (+)** icon to add new runtime parameters.
3. Use the **More (three dots)** icon for additional actions or settings related to runtime parameters. The available options are:  
   - Copy to clipboard.
   - Paste from clipboard.
   - Multi Column.

## Features
### Create a new runtime parameter
- Click on the "New Runtime Parameter" button.
- A window named **New Runtime Parameter** will appear.
- The following information is as follows:  
  - **Variable Name Field**:  
    - This field is used to enter the name of the runtime parameter (e.g., *Runtime_Variable*).
    - The red warning **Variable name cannot be empty** indicates that the name must be provided before saving.
  - **Options Section**:  
    - Each option represents a value that the runtime parameter can take during execution.
    - The "Value" field is displayed and labeled as **Actual Value** (e.g., *First Option*).
    - If a value needs to be deleted, the **Delete** icon is available on the right side of the "Value" field.
    - The second field displays a red warning **Value cannot be duplicated**, indicating that each value must be unique.
    :::note
    Tag is optional. It is a unique identifier for parameter value (e.g., *tag1*).

    :::
  - **Add Option Button**:  
    - The "+ Add Option" button allows the user to add more values for the runtime parameter.
  - **Action Buttons**:  
    - **Cancel**: Closes the window without saving.
    - **Save**: After clicking the "Save" button, the entered inputs are saved.

    ![](/img/how-tos/how-to-add-runtime-parameters/new-runtime.png)

    ![](/img/how-tos/how-to-add-runtime-parameters/parameter-information.png)
   
    ![](/img/how-tos/how-to-add-runtime-parameters/incomplete-information.png)

### Copy to cilpboard
- First, click on the "More" button.
- Next, click on the **Copy to clipboard** option.
- A window titled **Select Parameters to Copy** will appear.
- The key components are given below:  
  - At the top, there is a **Search bar** that allows filtering the list of parameters by name.
  - On the right side, there are **Select All** and **Deselect All** buttons to quickly manage selections.
  - The main section shows a **scrollable list of parameters**, each with a checkbox.
  - In this example, **10 out of 19 parameters** are currently selected. 
  - The selected parameters include items such as *BILL_ADDRESS_INDEX*, *Client*, *DemoServer*, *Runtime_Variable*, and others.
  - At the bottom, there are two buttons:  
    - **Cancel**: Closes the window without copying.
    - **Copy Selected (10)**: Proceeds to copy the currently selected parameters.

    ![](/img/how-tos/how-to-add-runtime-parameters/copy-clipboard.png)

    ![](/img/how-tos/how-to-add-runtime-parameters/select-parameters.png)

### Paste from clipboard
- If you want to copy from one team/project to another one, then click copy to clipboard and then in destination project/team clip paste from clipboard. If there are any conflicting tag and value then there will be a modal showing the conflict. You can change tag name to resolve conflict or you can keep same name to replace value with new value.
- If a conflict exists, then after clicking the **Paste from clipboard** button, a table called "Merge Conflicts Detected" will appear.
- The following information appears in the "Merge Conflicts Detected table" as shown below:  
  - At the top, a warning indicates that the same tag already exists with different values.
  - A message states that the incoming tag can be renamed to avoid overwriting existing information.
  - A label shows **1 conflict found**, meaning one parameter has a conflicting tag.
  - A table is displayed with the following columns:  
    - **Parameter**: Shows the name of the conflicting parameter.
    - **Existing Tag**: The tag already present in the system.
    - **Existing Value**: The value currently saved for that tag.
    - **New Value**: The value coming from the clipboard.
    - **Rename Tag To**: A field where the user may enter a new tag name to resolve the conflict.
  - In this example, the tag is being renamed to **fasfa_new** to avoid overwriting the existing data.
  - At the bottom, two buttons appear:  
    - **Cancel**: Closes the window without applying changes.
    - **Apply Changes**: Saves the updated tag name and resolves the conflict.
  - If there is no conflict, the runtime parameter will be saved successfully.
  - If there is something in your clipboard that is not in JSON format, a notification message saying **Invalid JSON format** will appear.

    ![](/img/how-tos/how-to-add-runtime-parameters/merge-conflicts.png)

    ![](/img/how-tos/how-to-add-runtime-parameters/successful-parameter.png)

    ![](/img/how-tos/how-to-add-runtime-parameters/invalid-json.png)

### Multi column
- In the context of runtime parameters, the **Multi Column** feature allows a parameter to hold multiple values organized in separate columns. This is useful when a test requires structured input with more than one attribute per entry.

       ![](/img/how-tos/how-to-add-runtime-parameters/multi-column.png)

### Edit / Delete parameter
- If it is necessary to edit a parameter, click the **Edit parameter** icon located on the right side of each runtime parameter.
- A window to edit a specific variable will appear.
- The key components available are as follows:  
  - **Variable Name**: Displays the name of the runtime parameter being edited (`DemoServer`).
  - **Options Section**:  
    - **Value Fields**: Each row allows entering a value for the parameter. The first value is set as `https://demo.zeuz.ai`. A second empty field is labeled "Actual Value" for additional input.
    - **Tag Icon**: Optional; serves as a unique identifier for each parameter value.
    - **Delete Icon**: Removes the corresponding value row.
    - **Add Option Button**: Allows adding additional value entries for the parameter.
  - **Action Buttons**:  
    - **Cancel**: Closes the window without saving changes.
    - **Save**: Saves the edited parameter and its values.
    - **Delete**: Deletes the entire runtime parameter (`DemoServer`) from the system.

    ![](/img/how-tos/how-to-add-runtime-parameters/edit-parameter.png)
    
    ![](/img/how-tos/how-to-add-runtime-parameters/updated-parameter.png)

## FAQs / Troubleshooting

<details>
<summary>What are runtime parameters?</summary>

Runtime parameters are user-defined inputs that allow a test case to run with dynamic values without modifying the test steps.

</details>

<details>
<summary>Why are runtime parameters important?</summary>

They ensure flexibility by allowing the same test to execute across different environments, users, or data sets.

</details>

<details>
<summary>Why is a parameter not appearing during test execution?</summary>

This usually occurs when the parameter has not been linked to the test, or a required value is missing.

</details>

<details>
<summary>Why does a merge conflict occur while copying parameters?</summary>

Conflicts appear when a parameter with the same name already exists, and the system requires the user to choose which value to keep.

</details>

<details>
<summary>Why is the test failing due to parameter values?</summary>

Failures typically happen when incorrect or outdated values are entered, or when values are not aligned with the selected environment.

</details>

## Changelog

- New UI has been introduced [[20250518](/blog/zeuz-platform-20250518/)]

## Related Topics

- [Create test cases](https://docs.zeuz.ai/docs/zeuz-server/testing/Test%20Case/create-test-cases/)
- [Run tests](https://docs.zeuz.ai/docs/zeuz-server/testing/Deployments/run-tests/)
- [Debug the test cases](https://docs.zeuz.ai/docs/zeuz-server/testing/Test%20Case/debug-test-cases/)

---