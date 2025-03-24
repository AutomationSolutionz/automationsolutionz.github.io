---
id: select-element-by-index
title: Select Element by Index
---

## Purpose
This action utilizes the Select class in Selenium WebDriver to choose an option from a dropdown by its index. The action selects an option based on its position within the dropdown list rather than its visible text, making it particularly useful for handling dynamic dropdowns.

---

## Scenarios

### Scenario 1

#### Title
Select an option from a dropdown using its index  

Sample test case: [TEST-8003 Select Element by Index](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8003/)

#### Scenario Overview
A user needs to select an option from a dropdown where the visible text is dynamic or unknown. This scenario demonstrates using the "Select Element by Index" action to choose an option based on its index.

#### Steps to Follow
1. Open a webpage with a dropdown menu.
2. Identify the dropdown element using attributes such as `id` or `class`.
3. Use the "Select Element by Index" action to specify the index of the desired option.
4. Verify that the correct option is selected.

#### Actions

| Parameter        | Type               | Value     |
|------------------|--------------------|-----------|
| id               | element parameter  | country   |
| select by index  | selenium action    | 1         |

#### Expected Result
- The dropdown selects the option at index 1 (the second option in the list).

#### Common Errors and Fixes
- **Error**: The dropdown element is not found.
  - **Fix**: Ensure the correct attributes (e.g., `id`, `class`) are specified, and verify that the dropdown is visible.

---

### Scenario 2

#### Title
Attempt to select an invalid index  

Sample test case: [TEST-8123 Select Element by Index](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8123/)

#### Scenario Overview
A user provides an invalid index (e.g., an index greater than the total number of options) to select in a dropdown. This scenario demonstrates how the action behaves in such situations.

#### Steps to Follow
1. Open a webpage with a dropdown menu.
2. Use the "Select Element by Index" action with an index that is out of range.
3. Verify that an appropriate error message is logged or raised.

#### Actions:

| Parameter        | Type               | Value    |
|------------------|--------------------|----------|
| id               | element parameter  | country  |
| select by index  | selenium action    | 5        |

#### Expected Result
- An error message is logged, indicating that the provided index is invalid.

#### Common Errors and Fixes
- **Error**: The index is out of range.
  - **Fix**: Ensure that the provided index is within the range of available options in the dropdown.

---

## Test Cases

### Test Case for Scenario 1

#### Objective
Ensure that selecting an option by index in a dropdown functions correctly.

#### Steps to Perform
1. Open a browser and navigate to a webpage containing a dropdown.
2. Use the action with inputs:
   - **Input parameters**:
     - Element parameter: `id = country`.
     - Selenium action: `select by index = 1`.
3. Verify that the second option in the dropdown has been selected.

#### Expected Outcome
- The dropdown selects the second option based on its index.

---

### Test Case for Scenario 2

#### Objective
Ensure that an appropriate error is logged when an invalid index is provided.

#### Steps to Perform
1. Open a browser and navigate to a webpage containing a dropdown.
2. Use the action with inputs:
   - **Input parameters**:
     - Element parameter: `id = country`
     - Selenium action: `select by index = 5`.
3. Verify that an error is logged, and the action does not select any option.

#### Expected Outcome
- The action logs an error indicating that the index is out of range.

---

## Additional Tips for this Action
- Use index-based selection when the visible text of options is dynamic or localized.
- Verify the total number of options in the dropdown before specifying the index.
- Use developer tools to verify the structure of the dropdown element.

---

### Error Handling for Select Element by Index

#### Common Problems and Their Fixes
1. **Problem**: The dropdown element is not found.  
   **Possible Cause**: Incorrect attributes are provided, or the dropdown is hidden.  
   **How to Fix**:  
   - Ensure that the element's attributes match the actual HTML structure.
   - Confirm that the dropdown is visible.

2. **Problem**: The index is out of range.  
   **Possible Cause**: The provided index exceeds the number of options in the dropdown.  
   **How to Fix**: Use a valid index within the range of the dropdown options.

3. **Problem**: The action fails to select the desired option.  
   **Possible Cause**: The index is incorrect, or the dropdown options have changed dynamically.  
   **How to Fix**: Revalidate the dropdown options and the specified index before executing the action.