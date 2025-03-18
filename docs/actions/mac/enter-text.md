---
id: enter-text
title: Enter Text
---

## Purpose
This action is used to enter text into a specified text field. The text field is identified using attributes such as `title`, `label`, `value`, or `identifier`. Unlike the "Clear and Enter Text" action, this action does not delete any pre-existing text before entering new text.

---

## Scenarios

### Scenario 1

#### Title

Enter text into the search field

Sample test case: [TEST-8038 Enter text into the search field](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8038/)

#### Scenario Overview
A user needs to enter text into a search bar to perform a query. This scenario demonstrates how to use the "Enter Text" action to input a search term.

#### Steps to Follow
1. Open an application containing a search field.
2. Identify the search field using its `label` attribute.
3. Use the "Enter Text" action with the search field's properties.
4. Verify that the search term is entered into the field.

#### Actions

| Parameter   | Type               | Value      |
|-------------|--------------------|------------|
| label       | element parameter  | Search     |
| text        | appium action      | Event1     |

#### Expected Result
- The search field displays the text "Event1".

#### Common Errors and Fixes
- **Error**: The search field is not located.
  - **Fix**: Ensure the correct `label` attribute is provided and the field is interactable.

---

### Scenario 2

#### Title

Enter text into the "Create Event" field without clearing existing text

Sample test case: [TEST-8038 Enter text into the "Create Event" field](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8038/)

#### Scenario Overview
A user needs to enter an event name in a calendar. This scenario demonstrates how to use the "Enter Text" action to add text without removing pre-existing content.

#### Steps to Follow
1. Open a webpage containing an event name field.
2. Identify the event name field using its `label` attribute.
3. Use the "Enter Text" action with the event name field's properties.
4. Verify that the text is entered into the field.

#### Actions

| Parameter   | Type               | Value            |
|-------------|--------------------|------------------|
| label       | element parameter  | New Quick Event  |
| text        | appium action      | Event2           |

#### Expected Result
- The event name field contains `Event2`, while any pre-existing text remains unchanged.

#### Common Errors and Fixes
- **Error**: The text does not appear in the field.
  - **Fix**: Ensure the correct `label` attribute is provided and the field is not disabled.

---

## Test Cases

### Test Case for Scenario 1

#### Objective
Ensure that entering text into a search field works correctly.

#### Steps to Perform
1. Open an app and navigate to a page containing a search field.
2. Use the action with inputs:
   - **Element parameter**: `label = Search`
   - **Appium action**: `text = Event1`.
3. Verify that the search field contains `"Event1"`.

#### Expected Outcome
- The search field correctly displays the entered text.

---

### Test Case for Scenario 2

#### Objective
Ensure that entering text into an event name field works correctly without clearing existing content.

#### Steps to Perform
1. Open a browser and navigate to an application containing a username field.
2. Use the action with inputs:
   - **Element parameter**: `label = New Quick Event`
   - **Appium action**: `text = Event2`.
3. Verify that the event name field contains `"Event2"` without removing any pre-existing text.

#### Expected Outcome
- The event name field contains `"Event2"`, and any existing text remains unchanged.

---

## Additional Tips for this Action
- Use unique attributes such as `title`, `label`, `value` or `identifier` to reliably locate elements.
- If existing text needs to be replaced, use the "Clear and Enter Text" action instead.
- Test the action in multiple browsers to ensure compatibility.

---

### Error Handling for Enter Text

#### Common Problems and Their Fixes
1. **Problem**: The element is not found.  
   **Possible Cause**: The attribute (e.g., `title`, `label`, `value`, or `identifier`) is incorrect.  
   **How to Fix**: Verify that the attribute correctly matches the element in the DOM.

2. **Problem**: The text does not appear in the input field.  
   **Possible Cause**: The field is either disabled or blocked by another element.  
   **How to Fix**: Ensure the field is enabled and visible before entering text.

3. **Problem**: Existing text is not cleared before entering new text.  
   **Possible Cause**: The action does not delete previous content.  
   **How to Fix**: To clear the field before entering text, use the "Clear and Enter Text" action.

---