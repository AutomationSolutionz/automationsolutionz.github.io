---
id: select-element-by-value
title: Select Element by Value
---

## Purpose
This action utilizes the `Select` class in Selenium WebDriver to choose an option in a dropdown based on the `value` attribute of the `<option>` tag. It offers an alternative to selecting by visible text or index by enabling selection using the option's `value` attribute.

---

## Scenarios

### Scenario 1

#### Title:
Select an option from a dropdown using its value attribute  
Test case link: [TEST-8004 Select Element by Value](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8004/)

#### Scenario Overview:
A user may need to select an option in a dropdown by its `value` attribute instead of its visible text or index. This scenario demonstrates how to use the "Select Element by Value" action to accomplish this task.

#### Steps to Follow:
1. Open a webpage that contains a dropdown menu.
2. Identify the dropdown element using attributes such as `id` or `class`.
3. Use the "Select Element by Value" action with the `value` attribute of the desired option.
4. Verify that the desired option has been selected.

#### Actions:
- **Input parameters**:
  - Element parameter: Provide the element's attribute (e.g., `id = countriesSingle`).
  - Selenium action: `select by value = china`.

#### Expected Result:
- The dropdown selects the option with the value attribute set to "china".

#### Common Errors and Fixes:
- **Error**: The dropdown element is not found.
  - **Fix**: Ensure that the correct attributes (e.g., `id`, `class`) are provided and that the dropdown is visible.

---

### Scenario 2

#### Title:
Attempt to select an option with an invalid value  
Test case link: [TEST-8004 Select Element by Value](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8004/)

#### Scenario Overview:
A user provides an invalid value to select in a dropdown. This scenario demonstrates how the action behaves in such cases.

#### Steps to Follow:
1. Open a webpage containing a dropdown menu.
2. Use the "Select Element by Value" action with a value that does not exist in the dropdown options.
3. Verify that an appropriate error is logged or raised when the action is performed.

#### Actions:
- **Input parameters**:
  - Element parameter: Provide the element's attribute (e.g., `id = countriesSingle`).
  - Selenium action: `select by value = invalid_value`.

#### Expected Result:
- An error is logged, indicating that the provided value is invalid.

#### Common Errors and Fixes:
- **Error**: The value is not found among the dropdown options.
  - **Fix**: Verify that the provided value exists as an attribute in the dropdown's options.

---

## Test Cases

### Test Case for Scenario 1

#### Objective:
Ensure that selecting an option by its value in a dropdown functions correctly.

#### Steps to Perform:
1. Open a browser and navigate to a webpage that contains a dropdown.
2. Use the action with inputs:
   - Element parameter: `id = countriesSingle`.
   - Selenium action: `select by value = china`.
3. Verify that the dropdown selects the option with the value `"china"`.

#### Expected Outcome:
- The dropdown selects the option corresponding to the provided value.

---
### Test Case for Scenario 2

#### Objective:
Ensure that an appropriate error is logged when an invalid value is provided.

#### Steps to Perform:
1. Open a browser and navigate to a webpage that contains a dropdown.
2. Use the action with inputs:
   - Element parameter: `id = countriesSingle`.
   - Selenium action: `select by value = invalid_value`.
3. Verify that an error is logged and that the action does not select any option.

#### Expected Outcome:
- The action logs an error indicating that the provided value is invalid.

---

## Additional Tips for this Action
- Use value-based selection when the visible text or index of options is dynamic or irrelevant.
- Verify the available values in the dropdown options before performing this action.
- Use developer tools to inspect the structure and attributes of the dropdown element accurately.

---

### Error Handling for Select Element by Value

#### Common Problems and Their Fixes
1. **Problem**: The dropdown element is not found.  
   **Possible Cause**: Incorrect attributes are provided, or the dropdown is hidden.  
   **How to Fix**:  
   - Ensure that the element's attributes align with the actual HTML structure.
   - Confirm that the dropdown is visible.

2. **Problem**: The specified value is not found in the dropdown options.  
   **Possible Cause**: The provided value does not exist among the dropdown's options.  
   **How to Fix**: Use a valid value from the dropdown's available options. 

3. **Problem**: The action does not select the intended option.    
   **Possible Cause**: Incorrect value or dynamic changes in the dropdown options.  
   **How to Fix**: Revalidate the dropdown options and their values before performing the action.