---
title: Validate Full Text
---

## Purpose
This action is used to validate the exact full text of a UI element in a macOS application using Appium. It verifies that the visible text of the specified element exactly matches the expected value. This is useful for confirming messages, titles, labels, or placeholder text.

## Scenarios

### Scenario 1

#### Title
Validate the full text after creating a new event

Sample test case: [TEST-8207 Validate the full text after creating a new event](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8207/)

#### Scenario Overview
A user creates a new event in the Calendar application. After pressing enter, the event is created.

#### Steps to Follow
1. Launch the Calendar application.
2. Click on the "Add Event" button in the Calendar application.
3. Generate random data using the function `%|random_data('nlu', 10)|%` and save it into the variable `%|EVENT_NAME|%`.
4. Enter the text stored in `%|EVENT_NAME|%` into the "New Quick Event" field.
5. Press the "return" key to confirm the entry.
6. Validate that the full text of the event name matches `%|EVENT_NAME|%`.

#### Actions

|  Parameter      |  Type               |  Value             |
|-----------------|---------------------|--------------------|
|  value          |  element parameter  |  %\|EVENT_NAME\|%  |
|  validate full  |  appium action      |  %\|EVENT_NAME\|%  |

#### Expected Result
- The full text of the event name will match the given variable `%|EVENT_NAME|%`.

---

### Scenario 2 

#### Title
Validate the full label text in the context menu after performing a right-click

Sample test case: [TEST-8212 Validate the full label text in the context menu after performing a right-click](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8212/)

#### Scenario Overview
A user performs a right-click on the search field in the Calendar application, and a context menu appears. This scenario demonstrates validating that the menu contains the exact label **Spelling and Grammar** as a full-text match.

#### Steps to Follow
1. Launch the Calendar application.
2. Perform a right-click action on the search bar labeled "Search" in the Calendar application.
3. Validate the full text using the variable `%|SPELLING|%` to ensure that the exact **Spelling and Grammar** option is displayed in the context menu.

#### Actions

|  Parameter     |  Type               |  Value           |
|----------------|---------------------|------------------|
|  title         |  element parameter  |  %\|SPELLING\|%  |
|  validate full |  appium action      |  %\|SPELLING\|%  |

#### Expected Result
- The action confirms that "Spelling and Grammar" which is saved in a variable called `%|SPELLING|%` is part of the context menu option's label.

---

## Test Cases

### Test Case for Scenario 1

#### Objective
Ensure that creating an event displays the exact event name as expected.

#### Steps to Perform
1. Launch the Calendar application.
2. Generate random data and save it into the variable.
3. For validating the exact full text saved into a variable, use the following inputs:
   - **Input parameters**:
     - **Element parameter**: `value = %|EVENT_NAME|%`
     - **Appium action**: `validate full = %|EVENT_NAME|%`.

#### Expected Outcome
- The event name matches the given variable `%|EVENT_NAME|%`.

### Test Case for Scenario 2

#### Objective
Ensure that the context menu displays the exact full text after performing a right click.

#### Steps to Perform
1. Launch the Calendar application.
2. Right click the "Search" bar in Calendar application.
3. For validating the full text in the context menu after performing a right click, use the following inputs:
   - **Input parameters**:
     - **Element parameter**: `title = %|SPELLING|%`
     - **Appium action**: `validate full = %|SPELLING|%`.

#### Expected Outcome
- The context menu displays the option "Spelling and Grammar", which is saved into a variable after performing a right click.

---

## Additional Tips for this Action
- Always trim whitespace and verify case sensitivity when matching full text.
- Avoid using elements that contain dynamic timestamps or unpredictable text.

---

### Error Handling for Full Text Validation

#### Common Problems and Their Fixes
1. **Problem**: The text does not match.  
   **Possible Cause**: There is a minor difference in case, spacing, or punctuation.  
   **How to Fix**: Verify the actual text using Appium Inspector or screenshots.

2. **Problem**: The element is not found.  
   **Possible Cause**: The element may not have loaded, or an incorrect property may have been used.  
   **How to Fix**: Add a wait step or verify the element using multiple properties.

3. **Problem**: Validation passes on wrong element.  
   **Possible Cause**: Multiple elements match the same property.  
   **How to Fix**: Add additional parameters or context (such as parent or sibling elements) to improve targeting.

---