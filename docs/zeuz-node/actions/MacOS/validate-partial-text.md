---
title: Validate Partial Text
---

## Purpose
This action is used to partially match and validate the text content of a UI element using its `identifier`, `label`, `title` or `value`. It is useful for validating UI changes such as field values, messages, or status updates that may not be static.

---

## Scenarios

### Scenario 1

#### Title
Validate the context menu text after performing a right click

Sample test case:[TEST-8205 Validate the context menu text after performing a right click](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8205/)

#### Scenario Overview
A user performs a right click on the search field in the Calendar app, and a context menu appears. This scenario demonstrates validating that the menu contains the word **Grammar** without requiring the exact full text.

#### Steps to Follow
1. Launch the macOS Calendar application.
2. Perform a right click on a calendar cell using an element attribute, such as `label = Search`.
3. Use the "Validate Partial Text" action to confirm that the **Grammar** appears in the context menu.

:::note
- Save the variable **Spelling and Grammar** into a variable named `SPELLING`.
- Save the partial text **Grammar** into a variable named `TEXT`.

:::

#### Actions

|  Parameter         |  Type               |  Value           |
|--------------------|---------------------|------------------|
|  title             |  element parameter  |  %\|SPELLING\|%  |
|  validate partial  |  appium action      |  %\|TEXT\|%      |

#### Expected Result
- The action confirms that **Grammar** is included in the label of a context menu option.

---

### Scenario 2

#### Title
Validate the partial text after creating a new event

Sample test case: [ TEST-8206 Validate the partial text after creating a new event](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8206/)

#### Scenario Overview
A user creates a new event in the Calendar app. After pressing Enter, the event is created, and its name is partially validated using the "Validate Partial Text" action.

#### Steps to Follow
1. Launch the macOS Calendar application.
2. Create a new event and name it `Event %|random_data('nlu', 10)|%`.
3. Press **return** to create the event.
4. Use the "Validate Partial Text" action to verify that the event label contains `Event %|random_data('nlu', 10)|%`.

#### Actions

|  Parameter         |  Type               |  Value             |
|--------------------|---------------------|--------------------|
|  value             |  element parameter  |  %\|EVENT_NAME\|%  |
|  validate partial  |  appium action      |  %\|TEXT\|%        |

:::note
- Save the partial text **Event** into a variable named `TEXT`.
- Save the event name, that is, **Event %|random_data('nlu', 10)|%** into a variable called `EVENT_NAME`.

:::

#### Expected Result
- The label for the new event partially matches the name **Event**.

---

## Test Cases

### Test Case for Scenario 1

#### Objective
Ensure that the context menu includes **Spelling and Grammar** option after performing a right click.

#### Steps to Perform
1. Launch the macOS Calendar application.
2. Perform a right click on the element with `label = Search`.
3. Validate the text partially using the following inputs:  
   **Input parameters**:  
   - **Element parameter**: `title = %|SPELLING|%`
   - **Appium action**: `validate partial = %|TEXT|%`.

#### Expected Outcome
- The label includes the word **Grammar**.

---

### Test Case for Scenario 2

#### Objective
Ensure that creating an event displays a label that partially matches the word **Event**.

#### Steps to Perform
1. Launch the macOS Calendar application.
2. Create a new event titled `Event %|random_data('nlu', 10)|%`.
3. Validate the label partially using the following inputs:  
   **Input parameters**:
   - **Element parameter**: `value = %|EVENT_NAME|%`
   - **Appium action**: `validate partial = %|TEXT|%`.

#### Expected Outcome
- The label partially displays the text **Event**.

---

## Additional Tips for this Action
- Use partial matching when the text is dynamic, such as timestamps or truncated titles.
- Use wildcards to enable flexible validation across different environments or localized content.

---

### Error Handling for Partial Text Validation

#### Common Problems and Their Fixes
1. **Problem**: The text does not match.  
   **Possible Cause**: The expected string is incorrect or incomplete.  
   **How to Fix**: Use partial keywords and verify case sensitivity.

2. **Problem**: The element was not found.  
   **Possible Cause**: Incorrect identifier or the element has not yet loaded.  
   **How to Fix**: Add a wait or verify the UI state before performing validation.

3. **Problem**: The action passes but does not verify the full value.  
   **Possible Cause**: Use of wildcards or overly generic matches.  
   **How to Fix**: Use a stricter partial match or assert the full text if required.

---