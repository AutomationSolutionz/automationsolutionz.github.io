---
title: Save Text
---

## Purpose
This action is used to **extract visible text** from a UI element and **save it** for later use, such as validating a created item like an event, note, or message. The saved variable can be referenced using `%|YourVariableName|%`.

---

### Scenario

#### Title
Create an event → Save its element text using the element parameter → Validate the created event using the saved variable

Sample test case: [TEST-8218 Save and validate the event name](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8218/)

---

#### Scenario Overview
A user creates a **new event** in the macOS Calendar application. Once the event is created, the **event title** (e.g., `"Event %|random_data('nlu', 10)|%"`) appears on the screen.  
This scenario uses the **Save Text** action to capture the event title, stores it in a variable, and later applies **Validate Full Text** to confirm that the event has been created successfully.

#### Steps to Follow
1. Launch the macOS Calendar application.
2. Click the "+" or "New Event" button to initiate the creation of a new event.
3. Enter an event name, such as `"Event %|random_data('nlu', 10)|%"`.
4. Press "Enter" to save the event.
5. Use the **Save Text** action to extract the of the newly created event.
6. Use the **Validate Full Text** action to verify that the event name exactly matches the saved variable.

#### Actions

|  Parameter      |  Type               |  Value             |
|-----------------|---------------------|--------------------|
|  value          |  element parameter  |  %\|EVENT_NAME\|%  |
|  save text      |  appium action      |  EVENT_VAR         |

#### Expected Result
- The event has been created and labeled correctly.
- The label of the created event has been successfully saved to the variable.
- The label is then validated against the saved variable to confirm its correctness.

---

### Test Case

#### Objective
Ensure that the newly created event is correctly saved and successfully validated.

#### Steps to Perform
1. Launch the Calendar application.
2. Create a new event titled `"Event %|random_data('nlu', 10)|%"`.
3. Use the action with the following inputs:
   **Input parameters**:
    - **Element parameter**: `value = Event %|random_data('nlu', 10)|%`
    - **Appium action**: `save text`.
4. Verify that the value is saved and the event is created.

#### Expected Outcome
- The event label `"Event %|random_data('nlu', 10)|%"` is saved into `EVENT_VAR`, and validation confirms that the displayed label exactly matches the saved value.

---

## Additional Tips for this Action
- Ensure that the target element is fully visible before extracting its text.
- Use dynamic variables such as `%|SavedName|%` to reuse extracted text across multiple actions.
- Combine with other actions, such as "Enter Text" or "Click", to create a complete workflow.

---

### Error Handling for Save Text

#### Common Problems and Their Fixes
1. **Problem**: The text is not saved.  
   **Possible Cause**: Element not found or not visible.  
   **How to Fix**: Ensure the element is visible and contains static text.

2. **Problem**: The variable is empty at the time of validation.  
   **Possible Cause**: There is a typo in the variable name or the value was not saved correctly.  
   **How to Fix**: Double-check the spelling and ensure the element matches before saving.

3. **Problem**: Validation fails even though the element is correct.  
   **Possible Cause**: The issue may be due to a UI delay or a mismatch in the variable value.  
   **How to Fix**: Add a wait step or use "Validate Partial Text" if the content is dynamic.

---