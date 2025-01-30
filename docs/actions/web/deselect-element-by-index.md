---
id: deselect-element-by-index
title: Deselect Element by Index
---

## Purpose
This action uses the `Select` class in Selenium WebDriver to deselect an option in a dropdown list by its index. It is designed to work with HTML `<SELECT>` elements that allow multiple selections (`multiple="multiple"`).

---

## Scenarios

### Scenario 1

#### Title:
Deselect a specific option in a multi-select dropdown by its index  
Test case link: [TEST-8021 Deselect Element by Index](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8021/#parentHorizontalTab2)

#### Scenario Overview:
A user needs to deselect a specific option in a dropdown based on its index. This scenario demonstrates how to use the "Deselect Element by Index" action to remove the selection from the desired option.

#### Steps to Follow:
1. Open a webpage that contains a multi-select dropdown.
2. Identify the dropdown element using attributes such as `id` or `class`.
3. Use the "Deselect Element by Index" action with the specified index of the option to be deselected.
4. Verify that the option at the specified index is successfully deselected.

#### Actions:
- **Input parameters**:
  - **Element parameter**: Provide the dropdown's attribute (e.g., `id = multi-select-dropdown`).
  - **Selenium action**: `deselect by index = 2`.

#### Expected Result:
- The dropdown deselects the option at index 2.

#### Common Errors and Fixes:
- **Error**: The dropdown does not allow multiple selections.
  - **Fix**: Ensure the `<SELECT>` element has the `multiple="multiple"` attribute.

---

### Scenario 2

#### Title:
Attempt to deselect an option in a single-select dropdown  
Test case link: [TEST-8021 Deselect Single-Select Dropdown](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8021/#parentHorizontalTab2)

#### Scenario Overview:
A user attempts to deselect an option in a dropdown that does not support multiple selections. This scenario demonstrates the behavior when the dropdown does not support multiple selections.

#### Steps to Follow:
1. Open a webpage that contains a single-select dropdown.
2. Identify the dropdown using attributes such as `id` or `class`.
3. Use the "Deselect Element by Index" action with the index of the option to deselect.
4. Verify that an appropriate error message is displayed.

#### Actions:
- **Input parameters**:
  - **Element parameter**: Provide the dropdown's attribute (e.g., `id = single-select-dropdown`).
  - **Selenium action**: `deselect by index = 1`.

#### Expected Result:
- The action throws a `NotImplementedError`, indicating that the dropdown does not support multiple selections.

#### Common Errors and Fixes:
- **Error**: The action fails with a `NotImplementedError`.
  - **Fix**: Use the action only on `<SELECT>` elements with the `multiple="multiple"` attribute.

---

## Test Cases

### Test Case for Scenario 1

#### Objective:
Ensure that an option in a multi-select dropdown is successfully deselected by its index.

#### Steps to Perform:
1. Open a browser and navigate to a webpage containing a multi-select dropdown.
2. Use the action with inputs:
   - **Element parameter**: `id = multi-select-dropdown`.
   - **Selenium action**: `deselect by index = 3`.
3. Verify that the option at index 3 has been deselected.

#### Expected Outcome:
- The option at index 3 has been deselected in the dropdown.

---

### Test Case for Scenario 2

#### Objective:
Ensure that an appropriate error is thrown when attempting to use the action on a single-select dropdown.

#### Steps to Perform:
1. Open a browser and navigate to a webpage containing a single-select dropdown.
2. Use the action with inputs:
   - **Element parameter**: `id = single-select-dropdown`.
   - **Selenium action**: `deselect by index = 1`.
3. Verify that a `NotImplementedError` is thrown.

#### Expected Outcome:
- The action fails with a `NotImplementedError`, indicating that the dropdown does not support multiple selections.

---

## Additional Tips for this Action
- Ensure that the dropdown element supports multiple selections by checking for the `multiple="multiple"` attribute.
- Use unique identifiers, such as `id` or `class`, to accurately locate the dropdown element.
- Test the action across different browsers to ensure consistent behavior.

---

### Error Handling for Deselect Element by Index

#### Common Problems and Their Fixes
1. **Problem**: The dropdown does not support multiple selections.  
   **Possible Cause**: The `<SELECT>` element does not include the `multiple="multiple"` attribute.  
   **How to Fix**: Use the action only on dropdowns that support multiple selections.

2. **Problem**: The element is not found.  
   **Possible Cause**: The attribute is incorrect, or the element is not visible.  
   **How to Fix**: Verify the element's properties and ensure it is visible on the page.

3. **Problem**: The action fails unexpectedly.  
   **Possible Cause**: The issue may be caused by browser compatibility problems or dynamic changes in the webpage.  
   **How to Fix**: Test the action in different browsers and ensure that the dropdown's state is stable.