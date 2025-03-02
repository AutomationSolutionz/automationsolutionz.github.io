---
id: check-or-uncheck-single-element
title: Check or Uncheck Single Element
---

## Purpose
The "Check or Uncheck Single Element" action is used to interact with a checkbox element on a webpage. It ensures that the checkbox is set to the desired state (checked or unchecked). If the checkbox is already in the correct state, no action is taken, avoiding unnecessary changes. This action is particularly useful for form submissions or configurations where checkbox states must align with the specified requirements.

---

## Scenarios

### Scenario 1

#### Title:
Check the Checkbox if it is not already checked  
Test case link: [TEST-11441 Checkbox action](https://qa.automationsolutionz.com/Home/ManageTestCases/Edit/TEST-11441/#parentHorizontalTab2)

#### Scenario Overview:
Imagine a user is filling out a form to subscribe to a newsletter. The form includes a checkbox labeled **"I agree to the terms and conditions"**. This scenario demonstrates how to use the "Check or Uncheck Single Element" action to ensure the checkbox is checked is checked if it is not already selected.

#### Steps to Follow:
1. Navigate to the subscription form webpage.
2. Identify the checkbox for **"I agree to the terms and conditions"** using its ID, name, or other attributes.
3. Use the "Check or Uncheck Single Element" action to check the checkbox.
4. Verify that the checkbox is checked.

#### Actions:

| Parameter      | Type                 | Value      |
|----------------|----------------------|------------|
| text           | element parameter    | Home       |
| check uncheck  | selenium action      | check      |

#### Expected Result:
- The checkbox is checked if it was not already selected.
- The form can now proceed to submission without errors.

#### Common Errors and Fixes:
- **Error**: The checkbox cannot be found.
  - **Fix**: Ensure the correct identifier is provided for the checkbox.
- **Error**: The checkbox fails to update its state.
  - **Fix**: Verify that the checkbox is not disabled or blocked by other elements.

---