---
title: Right Click Action
---

## Purpose
This action is used to perform a right-click on an element by using its properties. The element to be clicked must be specified. Properties that can be used to locate the element include `title`, `label`, `value` and `identifier`. Once the element is identified, the action executes a right-click on it.

---

## Scenarios

### Scenario 1 

#### Title
Perform a right-click on a date in the Calendar application

Sample test case: [TEST-8043 Perform a right-click on a date in the Calendar application](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8043/)

#### Scenario Overview
A user needs to open a context menu by right-clicking on a date. This scenario demonstrates how to use the Right Click action to perform a right-click on an element identified by its `title`, `label`, `value` or `identifier`.

#### Steps to Follow
1. Open the Calendar application that contains a date.
2. Identify the button using element properties such as `title`, `label`, `value` or `identifier`.
3. Use the "Right Click" action with the identified property.
4. Verify that the context menu appears.

#### Actions

|  Parameter    |  Type               |  Value           |
|---------------|---------------------|------------------|
|  title        |  element parameter  |  Tuesday, May 27 |
|  right click  |  appium action      |  right click     |

#### Expected Result
- The "Right Click" action triggers the context menu for the specified date.

#### Common Errors and Fixes
- **Error**: The context menu does not appear.
  - **Fix**: Ensure that the correct attribute (e.g., `title` or `label`) is provided and that the date is interactable.

---

## Test Cases

### Test Case for Scenario 1

#### Objective
Ensure that the "Right Click" action is performed on a date identified by its `title` attribute.

#### Steps to Perform
1. Open the Calendar application and navigate to a date.
2. Use the action with the following inputs:
   - **Input parameters**:
     - **Element parameter**: Provide the element's attribute (e.g., `title = Tuesday, May 27`).
     - **Appium action**: `right click`.
3. Verify that the context menu appears.

#### Expected Outcome
- The context menu is successfully displayed for the selected date.

---

## Additional Tips for this Action
- Use a unique parent or sibling element to narrow down the search scope when identifying duplicate elements.
- Enable the allow hidden option to interact with hidden elements.
- Test the action in multiple browsers to ensure compatibility.

---

### Error Handling for Right Click

#### Common Problems and Their Fixes
1. **Problem**: The element is not found.  
   **Possible Cause**: The attribute is incorrect, or the element is outside the viewport.  
   **How to Fix**:
   - Ensure the attribute matches the element.
   - Scroll to bring the element into view.

2. **Problem**: The "Right Click" action fails.  
   **Possible Cause**: The element is not interactable or is blocked by another element.  
   **How to Fix**: Use the allow hidden or use JS option to force interaction.

3. **Problem**: The context menu does not appear.  
   **Possible Cause**: The "Right Click" action is not properly associated with the element.  
   **How to Fix**: Verify that the element supports context menu interactions.

---