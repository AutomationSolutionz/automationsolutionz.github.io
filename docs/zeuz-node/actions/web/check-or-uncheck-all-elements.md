---
id: check-or-uncheck-all-elements
title: Check or Uncheck All Elements
---

## Purpose
This action automates the process of checking or unchecking all checkboxes under a specified parent element on a webpage. It enables users to locate checkboxes using shared attributes and perform bulk operations efficiently.

---

## Scenarios

### Scenario 1

#### Title:
Check all the checkboxes in a form  
Test case link: [TEST-8008 Check All Checkboxes](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8008/)

#### Scenario Overview:
A user needs to select all checkboxes in a form before submission. This scenario demonstrates using the "Check or Uncheck All Elements" action to check all checkboxes within a specified form element.

#### Steps to Follow:
1. Open a webpage that contains a form with multiple checkboxes.
2. Identify the form using attributes such as `id` or `class`.
3. Use the "Check or Uncheck All Elements" action with the target attributes of the checkboxes (e.g., `type = checkbox`).
4. Verify that all checkboxes within the form are checked.

#### Actions:
- **Input parameters**:
  - **Element parameter**: Provide the parent element's attributes (e.g., `id = my-form`).
  - **Target parameter**: Provide the target attributes (e.g., `type = checkbox`).
  - **Selenium action**: `check all`.

#### Expected Result:
- All checkboxes under the specified parent element are successfully checked.

#### Common Errors and Fixes:
- **Error**: The parent element is not located.
  - **Fix**: Ensure that the correct attributes (e.g., `id`, `class`) are provided for the parent element.

---

### Scenario 2

#### Title:
Uncheck all the checkboxes in a form  
Test case link: [TEST-8008 Uncheck All Checkboxes](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8008/)

#### Scenario Overview:
A user needs to deselect all checkboxes in a form. This scenario demonstrates using the "Check or Uncheck All Elements" action to uncheck all checkboxes within a specified form element.

#### Steps to Follow:
1. Open a webpage that contains a form with multiple checkboxes.
2. Identify the form using attributes such as `id` or `class`.
3. Use the "Check or Uncheck All Elements" action with the target attributes of the checkboxes (e.g., `type = checkbox`).
4. Verify that all checkboxes within the form are unchecked.

#### Actions:
- **Input parameters**:
  - **Element parameter**: Provide the parent element's attributes (e.g., `id = my-form`).
  - **Target parameter**: Provide the target attributes (e.g., `type = checkbox`).
  - **Selenium action**: `uncheck all`.

#### Expected Result:
- All checkboxes under the specified parent element are successfully unchecked.

#### Common Errors and Fixes:
- **Error**: The target checkboxes are not located.
  - **Fix**: Verify that the target attributes match the properties of the checkboxes.

---

## Test Cases

### Test Case for Scenario 1

#### Objective:
Ensure that all checkboxes in the form are successfully checked.

#### Steps to Perform:
1. Open a browser and navigate to a webpage containing a form with checkboxes.
2. Use the action with inputs:
   - **Element parameter**: `id = my-form`.
   - **Target parameter**: `type = checkbox`.
   - **Selenium action**: `check all`.
3. Verify that all checkboxes within the form are checked.

#### Expected Outcome:
- All checkboxes under the specified form are successfully checked.

---

### Test Case for Scenario 2

#### Objective:
Ensure that all checkboxes in the form are successfully unchecked.

#### Steps to Perform:
1. Open a browser and navigate to a webpage containing a form with checkboxes.
2. Use the action with inputs:
   - **Element parameter**: `id = my-form`.
   - **Target parameter**: `type = checkbox`.
   - **Selenium action**: `uncheck all`.
3. Verify that all checkboxes within the form are unchecked.

#### Expected Outcome:
- All checkboxes under the specified form are successfully unchecked.

---

## Additional Tips for this Action
- Use the `allow hidden` option to interact with hidden checkboxes, if necessary.
- Use the `use js` option to handle elements blocked by overlays or intercepting scripts.
- Test the action across multiple browsers to ensure consistent behavior.

---

### Error Handling for Check or Uncheck All Elements

#### Common Problems and Their Fixes
1. **Problem**: The parent element is not found.  
   **Possible Cause**: The identifier (e.g., `id`, `class`) is incorrect.  
   **How to Fix**: Verify that the identifier matches the parent element in the DOM.

2. **Problem**: The target checkboxes are not located.  
   **Possible Cause**: The attributes provided do not match the checkboxes.  
   **How to Fix**: Inspect the attributes of the checkboxes and adjust the target parameters as needed.

3. **Problem**: Some checkboxes remain unchecked.  
   **Possible Cause**: Overlapping elements or JavaScript intercepting clicks may prevent the checkboxes from being checked.  
   **How to Fix**: Use the `use js` option to force interaction through JavaScript.