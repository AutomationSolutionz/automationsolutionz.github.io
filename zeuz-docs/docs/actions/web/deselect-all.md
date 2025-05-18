---
id: deselect-all
title: Deselect All
---

## Purpose
This action is used to clear all selected entries in a dropdown list. It works only when the `SELECT` element supports multiple selections by having the attribute `multiple="multiple`. If the `SELECT` element does not support multiple selections, the action throws a `NotImplementedError`.

---

## Scenarios

### Scenario 1

#### Title:
Clear all selected entries in a multi-select dropdown  
Test case link: [TEST-8020 Deselect All in Multi-Select Dropdown](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8020/)

#### Scenario Overview:
A user wants to clear all selected entries in a dropdown that supports multiple selections. This scenario demonstrates how to use the "Deselect All" action to clear all selected options.

#### Steps to Follow:
1. Open a webpage that contains a multi-select dropdown.
2. Identify the dropdown using attributes such as `id` or `class`.
3. Use the "Deselect All" action with the dropdown element's properties.
4. Verify that all selected entries in the dropdown are cleared.

#### Actions:
- **Input parameters**:
  - **Element parameter**: Provide the dropdown's attribute (e.g., `id = multi-select-dropdown`).
  - **Selenium action**: `deselect all`.

#### Expected Result:
- All selected entries in the dropdown are successfully cleared.

#### Common Errors and Fixes:
- **Error**: The dropdown does not support multiple selections.
  - **Fix**: Ensure that the `SELECT` element has the `multiple="multiple"` attribute.

---

### Scenario 2

#### Title:
Attempt to clear selections in a single-select dropdown  
Test case link: [TEST-8020 Deselect All in Single-Select Dropdown](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8020/)

#### Scenario Overview:
A user attempts to clear all selected entries in a single-select dropdown. This scenario demonstrates the behavior when the dropdown does not support multiple selections.

#### Steps to Follow:
1. Open a webpage that contains a single-select dropdown.
2. Identify the dropdown using attributes such as `id` or `class`.
3. Use the "Deselect All" action with the dropdown element's properties.
4. Verify that an appropriate error is thrown.

#### Actions:
- **Input parameters**:
  - **Element parameter**: Provide the dropdown's attribute (e.g., `id = single-select-dropdown`).
  - **Selenium action**: `deselect all`.

#### Expected Result:
- The action throws a `NotImplementedError`, indicating that the dropdown does not support multiple selections.

#### Common Errors and Fixes:
- **Error**: The action fails with a `NotImplementedError`.
  - **Fix**: Use the action only on `SELECT` elements that have the `multiple="multiple"` attribute.

---

## Test Cases

### Test Case for Scenario 1

#### Objective:
Ensure that all selected entries in a multi-select dropdown are cleared successfully.

#### Steps to Perform:
1. Open a browser and navigate to a webpage containing a multi-select dropdown.
2. Use the action with inputs:
   - **Element parameter**: `id = multi-select-dropdown`.
   - **Selenium action**: `deselect all`
3. Verify that all selected entries in the dropdown are cleared.

#### Expected Outcome:
- The dropdown is successfully cleared of all selected entries.

---

### Test Case for Scenario 2

#### Objective:
Ensure that an appropriate error is thrown when attempting to use the action on a single-select dropdown.

#### Steps to Perform:
1. Open a browser and navigate to a webpage containing a single-select dropdown.
2. Use the action with inputs:
   - **Element parameter**: `id = single-select-dropdown`.
   - **Selenium action**: `deselect all`.
3. Verify that a `NotImplementedError` is thrown.

#### Expected Outcome:
- The action fails with a `NotImplementedError`, indicating that the dropdown does not support multiple selections.

---

## Additional Tips for this Action
- Ensure that the dropdown element supports multiple selections by checking for the `multiple="multiple"` attribute.
- Use unique identifiers such as `id` or `class` to locate the dropdown element accurately.
- Test the action across different browsers to confirm consistent behavior.

---

### Error Handling for Deselect All

#### Common Problems and Their Fixes:
1. **Problem**: The dropdown does not support multiple selections.  
   **Possible Cause**: The `SELECT` element does not include the `multiple="multiple"` attribute.  
   **How to Fix**: Use the action only on dropdowns that support multiple selections.

2. **Problem**: The element is not found.  
   **Possible Cause**: The attribute is incorrect, or the element is not visible.  
   **How to Fix**: Verify the element's properties and ensure that it is visible on the page.

3. **Problem**: The action fails unexpectedly.  
   **Possible Cause**: Browser compatibility issues or dynamic changes on the webpage may be causing the problem.  
   **How to Fix**: Test the action in different browsers and ensure that the dropdown's state remains stable.