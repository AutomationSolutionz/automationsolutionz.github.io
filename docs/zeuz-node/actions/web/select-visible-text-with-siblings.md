---
id: select-visible-text-with-siblings
title: Select Visible Text with Siblings
---

## Purpose
This action selects a dropdown option by matching its visible text while using a sibling element as a reference. It is particularly useful in cases where direct identification of the dropdown is challenging, leveraging sibling elements under the same parent for accurate identification.

---

## Scenarios

### Scenario 1

#### Title:
Select a dropdown option by its visible text  
Test case link: [TEST-8023 Select Dropdown Option by Visible Text](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8023/)

#### Scenario Overview:
A user needs to select an option from a dropdown using its visible text. This scenario demonstrates how to identify the dropdown option and perform the selection based on the visible text.

#### Steps to Follow:
1. Locate the dropdown element using the element's attributes (e.g., ID or class).
2. Provide the visible text of the desired option as the input.
3. Execute the "Select Visible Text with Siblings" action.

#### Actions:
- **Input parameters**:
  - **Element parameter**: Provide the element attribute of the dropdown (e.g., `id = dropdown_id`).
  - **Visible text**: The exact text visible in the dropdown option.

#### Expected Result:
- The dropdown option matching the visible text is successfully selected.

#### Common Errors and Fixes:
- **Error**: Unable to locate the dropdown element.
  - **Fix**: Verify that the correct attributes (e.g., ID, class, text) are provided for the element parameter.

---

### Scenario 2

#### Title:
Select a dropdown option using a sibling element  
Test case link: [TEST-8023 Select Dropdown Option Using Sibling](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8023/)

#### Scenario Overview:
In complex web applications, directly identifying dropdowns may not be feasible. This scenario uses a sibling element under the same parent to locate and select the correct dropdown option.

#### Steps to Follow:
1. Identify the parent element and its sibling attributes.
2. Provide the sibling attributes as input to locate the dropdown.
3. Execute the "Select Visible Text with Siblings" action by providing the visible text.

#### Actions:
- **Input parameters**:
  - **Parent parameter**: Provide the parent element attributes (e.g., `id = parent_id`).
  - **Sibling parameter**: Provide the sibling element attributes (e.g., `class = sibling_class`).
  - **Visible text**: The visible text of the dropdown option to be selected.

#### Expected Result:
- The dropdown is located using its sibling, and the option matching the visible text is successfully selected.

#### Common Errors and Fixes:
- **Error**: The sibling element is not found.
  - **Fix**: Ensure that the sibling attributes match the structure of the DOM.

---

## Test Cases

### Test Case for Scenario 1

#### Objective:
Ensure that dropdown selection using visible text works correctly.

#### Steps to Perform:
1. Navigate to the webpage containing the dropdown.
2. Use the action with inputs:
   - **Element parameter**: `id = dropdown_id`.
   - **Visible text**: `"Option 1"`.
3. Verify that the option `"Option 1"` is selected.

#### Expected Outcome:
- The dropdown selects the option labeled `"Option 1"`.

---

### Test Case for Scenario 2

#### Objective:
Ensure that dropdown selection using a sibling element works correctly.

#### Steps to Perform:
1. Navigate to the webpage containing a dropdown nested under a parent element.
2. Use the action with inputs:
   - **Parent parameter**: `id = parent_id`.
   - **Sibling parameter**: `class = sibling_class`.
   - **Visible text**: `"Option 2"`.
3. Verify that the option `"Option 2"` is selected.

#### Expected Outcome:
- The dropdown selects the option labeled `"Option 2"`.

## Additional Tips for this Action
- Use sibling attributes when direct identification of the dropdown is challenging.
- Ensure that the visible text matches exactly, as dropdown options are case-sensitive.
- Test the parent-sibling relationship using developer tools to confirm the DOM structure.

---

### Error Handling for Select Visible Text With Siblings

#### Common Problems and Their Fixes
1. **Problem**: The dropdown element is not found.  
   **Possible Cause**: The attributes provided are incorrect.  
   **How to Fix**: Verify the attributes (e.g., ID, class, text) for accuracy.

2. **Problem**: The incorrect dropdown option is selected.  
   **Possible Cause**: The provided text does not match any dropdown options.  
   **How to Fix**: Check that the visible text is correct and matches the case-sensitive dropdown options.

3. **Problem**: The sibling element is not correctly located.  
   **Possible Cause**: The DOM structure is different than expected.  
   **How to Fix**: Use developer tools to confirm the parent-sibling relationship.