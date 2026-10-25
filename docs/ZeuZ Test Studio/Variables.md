---
id: variables
title: Variables
---

import MetaCard from '@site/src/components/MetaCard/';

**Variables** are reusable named values that provide test cases with the data they need during execution. They allow users to reuse test data, maintain consistency, protect sensitive values, and simplify test maintenance.

<MetaCard
availableFrom="202605"
difficulty="🟢 Easy"
lastUpdated="11 Oct, 2026"
/>

### Why it matters / Use Cases:
- **Reuse test data**: Use the same values, such as usernames, passwords, and URLs, across multiple test cases.
- **Maintain consistency**: Keep commonly used test values consistent across test cases.
- **Protect sensitive data**: Mark secrets as sensitive and keep their values private.
- **Simplify test maintenance**: Update a variable in one place instead of changing the same value in multiple test cases.
- **Manage workspace-specific values**: Maintain variables based on the workspace being used.

## Prerequisites
- **Required permissions**: Permission to create or manage variables in the workspace.
- **Test configuration**: The test case should be configured to use the required variables.
- **Sensitive data identification**: For sensitive data, users should identify which variables need to be marked as sensitive.

## Features
### Top Section of the Variables Page
- **Reuse stable test values**: Allows users to reuse the same values across multiple test cases and maintain consistency.
- **Protect sensitive data**: Allows users to mark sensitive variables, such as passwords, to keep their values private.
- **Switch workspace context**: Allows users to manage variables for the workspace they are currently working in.
- **Variables**: Displays named values that tests resolve during execution.
- **Search variables by name**: Allows users to search for a specific variable.
- **New variable**: Allows users to create a new variable.

### Create a New variable
- First, click the **Variables** option from the left-side panel to navigate to the **Variables** page.
- After navigating to the **Variables** page, click the **New variable** option.

![](/img/zeuz-test-studio/new-variable.png)

- After clicking **New variable**, the "New variable" window will appear.
- First, enter a **Variable name**.
- Then, under **Value** Options, enter the value for the variable.
- Additionally, if users want to add or delete values, they can use the **Add value** option to add a new value and the **Remove value** button to remove a value when it is no longer required.
- If the value is long or difficult to understand, users can assign a **readable name** to it using the **Label** option. By clicking the label icon, users can provide a label for the value, making it easier to identify the value in the UI.

![](/img/zeuz-test-studio/variable-window.png)

:::note
The value entered is automatically displayed as the **Selected value**. If additional values are added, they are also displayed under **Selected value**. Users can click **Selected value** and choose the required value when needed.

![](/img/zeuz-test-studio/selected-value.png)

:::

- If the value is long or difficult to understand, users can assign a **readable name** to it using the **Label**
 option. By clicking the label icon, users can provide a label for the value, making it easier to identify the value in the UI.

![](/img/zeuz-test-studio/test-label.png)

- If the variable contains sensitive information and needs to be encrypted, select **is sensitive**. After marking the variable as sensitive, additional access-control options become available:  
  - **Allowed users**: Select one or more users who are allowed to use the variable.
  - **Allowed nodes**: Select the permitted daemons/nodes from the available list.
  - **Allowed tests**: Enter test case IDs separated by commas. Only the test cases with the specified IDs can use the variable.

![](/img/zeuz-test-studio/sensitive-value.png)

:::note
- If a specific value is marked as **is sensitive**, then hovering over its label displays the **Hidden – reveal to see this value option**.

![](/img/zeuz-test-studio/is-sensitive.png)

![](/img/zeuz-test-studio/hidden-reveal.png)

- If a specific value is not marked as **is sensitive**, then the value entered for that variable is displayed normally.

![](/img/zeuz-test-studio/not-marked.png)

![](/img/zeuz-test-studio/normal-value.png)

:::

### Additional Variable Options
- **Variable name**: It is the unique name given to a variable so that it can be easily identified.
- **Value/Label**: It indicates the selected value or label associated with the variable.
- **Reveal value**: It means displaying the actual value of a variable that is currently hidden.
- **Hide value**: It means hiding the actual value of a variable so that it is not directly visible.
- **Edit icon**: It allows users to edit the variable.
- **Delete icon**: It allows users to delete the variable.

:::note
If a variable is used in any test cases, its usage will be displayed to the right of the variable name. If a variable is not used in any test cases, its usage will not be displayed.

:::

![](/img/zeuz-test-studio/variables-list.png)

## FAQs / Troubleshooting

<details>
<summary>Can a variable contain multiple values?</summary>

Yes. Users can add multiple values under Value Options and select the required value.

</details>

<details>
<summary>How can users protect sensitive variable values?</summary>

Users can mark a variable as sensitive using the Is sensitive option. They can also configure Allowed Users, Allowed Nodes, and Allowed Tests to restrict which users, nodes, and test cases can access it.

</details>

<details>
<summary>Why is the variable usage count not displayed?</summary>

The variable may not be used in any test cases. If it is expected to be used, verify that the test cases reference the variable correctly.

</details>

<details>
<summary>What should users do if a variable contains an incorrect value?</summary>

Edit the variable and update its value. Then verify that the affected test cases use the correct value before running them again.

</details>

<details>
<summary>What should users check if a test fails while using a variable?</summary>

Verify the variable's name, selected value, access restrictions, and usage in the test case. Review the test execution details to determine whether the failure is related to the variable or another part of the test.

</details>

---