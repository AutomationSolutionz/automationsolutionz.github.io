---
id: check-or-uncheck-multiple-elements
title: Check or Uncheck Multiple Elements
---

## Purpose
This action is designed to selectively check or uncheck multiple checkboxes under a specified parent element on a webpage. By using unique attributes to identify each checkbox, users can control which boxes to check or uncheck individually.

---

## Scenarios

### Scenario 1

#### Title:
Check and uncheck specific checkboxes within a form  
Test case link: [TEST-8009 Check and Uncheck Specific Checkboxes](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8009/)

#### Scenario Overview:
A user needs to select some checkboxes while deselecting others in a form. This scenario demonstrates how to use the "Check or Uncheck Multiple Elements" action to perform this operation based on the unique attributes of the checkboxes.

#### Steps to Follow:
1. Open a webpage that contains a form with multiple checkboxes.
2. Identify the form using attributes such as `id` or `class`.
3. Use the "Check or Uncheck Multiple Elements" action with the target attributes of each checkbox, specifying whether to check or uncheck each one.
4. Verify that the specified checkboxes are checked or unchecked accordingly.

#### Actions:
- **Input parameters**:
  - **Element parameter**: Provide the parent element's attributes (e.g., `id = my-form`).
  - **Target parameter**: Specify each checkbox's attributes and corresponding action (e.g., `(id, checkbox-1, check)`, `(id, checkbox-2, uncheck)`).
  - **Selenium action**: `multiple check uncheck`.

#### Expected Result:
- The specified checkboxes under the parent element are checked or unchecked according to the provided actions.

#### Common Errors and Fixes:
- **Error**: Some checkboxes are not located.
  - **Fix**: Ensure that the target attributes match the actual attributes of the checkboxes.

---

### Scenario 2

#### Title:
Check specific checkboxes while skipping those that are already checked  
Test case link: [TEST-8009 Check Only Unchecked Boxes](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8009/)

#### Scenario Overview:
A user wants to ensure specific checkboxes are checked, while leaving those that are already checked in their current state. This scenario demonstrates how the action behaves when some checkboxes are already in the desired state.

#### Steps to Follow:
1. Open a webpage that contains a form with multiple checkboxes.
2. Identify the form and target checkboxes using their attributes.
3. Use the "Check or Uncheck Multiple Elements" action with the target attributes, specifying which checkboxes should be checked.
4. Verify that only the unchecked boxes are checked, while the already checked ones remain unchanged.

#### Actions:
- **Input parameters**:
  - **Element parameter**: Provide the parent element's attributes (e.g., `id = my-form`).
  - **Target parameter**: Specify each checkbox's attributes and corresponding action (e.g., `(id, checkbox-1, check)`, `(id, checkbox-2, check)`).
  - **Selenium action**: `multiple check uncheck`.

#### Expected Result:
- Only the unchecked checkboxes are checked, while the already checked ones are skipped.

#### Common Errors and Fixes:
- **Error**: Some checkboxes are missed during the operation.
  - **Fix**: Ensure that all desired checkboxes are included in the target parameter.

---

## Test Cases

### Test Case for Scenario 1

#### Objective:
Ensure that specific checkboxes are checked or unchecked based on the target parameter.

#### Steps to Perform:
1. Open a browser and navigate to a webpage containing a form with checkboxes.
2. Use the action with inputs:
   - **Element parameter**: `id = my-form`.
   - **Target parameter**: `(id, checkbox-1, check)`, `(id, checkbox-2, uncheck)`.
   - **Selenium action**: `multiple check uncheck`.
3. Verify that the specified checkboxes are checked or unchecked accordingly.

#### Expected Outcome:
- The specified checkboxes are updated according to the action.

---

### Test Case for Scenario 2

#### Objective:
Ensure that already checked boxes are skipped and only unchecked boxes are updated.

#### Steps to Perform:
1. Open a browser and navigate to a webpage containing a form with checkboxes.
2. Use the action with inputs:
   - **Element parameter**: `id = my-form`.
   - **Target parameter**: `(id, checkbox-1, check)`, `(id, checkbox-2, check)`.
   - **Selenium action**: `multiple check uncheck`.
3. Verify that only the unchecked boxes are checked, while the already checked boxes remain unchanged.

#### Expected Outcome:
- Only the unchecked boxes are checked, while the already checked ones remain unchanged.

---

## Additional Tips for this Action
- Use unique attributes to reliably locate the checkboxes.
- Test the action in different browsers to ensure consistent behavior.
- Use the `use js` option for handling elements blocked by overlays or scripts.

---

### Error Handling for Check or Uncheck Multiple Elements

#### Common Problems and Their Fixes
1. **Problem**: The parent element is not found.  
   **Possible Cause**: The identifier (e.g., `id`, `class`) is incorrect.  
   **How to Fix**: Verify that the identifier matches the parent element in the DOM.

2. **Problem**: Some checkboxes are not located.  
   **Possible Cause**: The target attributes provided do not match the actual checkboxes.  
   **How to Fix**: Inspect the attributes of the checkboxes and adjust the target parameter accordingly.

3. **Problem**: The action unexpectedly skips some checkboxes.  
   **Possible Cause**: The checkboxes are already in the desired state.  
   **How to Fix**: Verify the initial state of all checkboxes before performing the action.