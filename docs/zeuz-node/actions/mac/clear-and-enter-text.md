---
id: clear-and-enter-text
title: Clear and Enter Text
---

## Purpose
This action is used to clear any existing text from an input field and enter new text. It is particularly useful in scenarios where the field must be reset before entering updated or new input. The element can be identified using attributes such as `title`, `label`, `value` or `identifier`.

---

## Scenarios

### Scenario 1

#### Title
Clear and enter text into the search field

Sample test case: [TEST-8034 Clear and enter text into the search field](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8034/)

#### Scenario Overview
A user needs to clear the existing text from a search field and input a new search query. This scenario demonstrates how to use the "Clear and Enter Text" action to perform this operation effectively.

#### Steps to Follow
1. Open an application that contains a search field.
2. Identify the search field using attributes such as `title`, `label` or `identifier`.
3. Use the "Clear and Enter Text" action to remove existing content from the field and enter the new text.
4. Verify that the field contains the newly entered text.

#### Actions

|  Parameter             |  Type               |  Value                             |
|------------------------|---------------------|------------------------------------|
|  label                 |  element parameter  |  Search                            |
|  clear and enter text  |  appium action      |  Event %\|random_data('nluc', 5)\|%  |

#### Expected Result
- The existing text in the search field is cleared, and the new text is entered successfully.

#### Common Errors and Fixes
- **Error**: The search field is not available.
  - **Fix**: Ensure that the correct attribute (e.g., `label`) is provided and that the field is visible.

---

### Scenario 2

#### Title
Clear and enter text in a form field with an edit event

Sample test case: [TEST-8150 Clear and enter text in a form field with an edit event](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8150/)

#### Scenario Overview
A user needs to clear the existing content of a form field, located through a partial match of its attribute, and input new text.

#### Steps to Follow
1. Open an application that contains an "Add Event" field.
2. Use the "Clear and Enter Text" action to clear the field and enter the new text.
3. Verify that the field contains the newly entered text.

#### Actions

|  Parameter             |  Type               |  Value      |
|------------------------|---------------------|-------------|
|  value                 |  element parameter  |  Event2     |
|  clear and enter text  |  appium action      |  Event4     |

#### Expected Result
- The existing text in the form field is cleared, and the new text is entered.

#### Common Errors and Fixes
- **Error**: The form field cannot be found.
  - **Fix**: Ensure that the partial attribute matches the element in the DOM.

---

## Test Cases

### Test Case for Scenario 1

#### Objective
Ensure the existing text in the search field is cleared and that new text is entered correctly.

#### Steps to Perform
1. Open a browser and navigate to a webpage that contains a search field.
2. Use the action with inputs:
   - **Input parameters**:
     - **Element parameter**: Provide the element's attribute (e.g., `title = Search`)
     - **Appium action**: `clear and enter text`
     - **Text**: The new text to be entered (e.g., `"Event1"` or a variable like `Event %|random_data('nluc', 5)|%`).
3. Verify that the new text is searched successfully.

#### Expected Outcome
- The search field is cleared, and the new text has been entered successfully.

---

### Test Case for Scenario 2

#### Objective
Enter text into the 'Create Event' field after clearing any existing text.

#### Steps to Perform
1. Open a browser and navigate to a webpage that contains a form field.
2. Use the action with inputs:
   - **Input parameters**:
     - **Element parameter**: Provide a partial match for the attribute value (e.g., `value = Event2`).
     - **Appium action**: `clear and enter text`
     - **Text**: The new text to be entered (e.g., `"Event4"` or a variable like `%|event|%`).
3. Verify that the field contains the text `"Event4"`.

#### Expected Outcome
- The form field is cleared, and the new text has been entered successfully.

---

## Additional Tips for this Action
- Use unique attributes such as `title` or `id` to locate elements reliably.
- When using partial matches, ensure that the attribute value is specific enough to avoid selecting the wrong element.
- Test the action on different browsers and devices to ensure compatibility.

---

### Error Handling for Clear and Enter Text

#### Common Problems and Their Fixes
1. **Problem**: The element is not found.  
   **Possible Cause**: Either an incorrect attribute is provided, or the element is visible.  
   **How to Fix**: Verify that the attribute matches the element in the DOM.

2. **Problem**: The text is not entered after clearing the field.  
   **Possible Cause**: The field is either disabled or not interactable.  
   **How to Fix**: Ensure that the field is enabled and interactable before performing the action.

3. **Problem**: The partial match selects the incorrect element.  
   **Possible Cause**: The partial attribute value matches multiple elements.  
   **How to Fix**: Use more specific attributes to accurately identify the correct element.

---