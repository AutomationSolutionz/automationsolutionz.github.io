---
id: context-click-right-mouse-click
title: Context Click (Right Mouse Click)
---

## Purpose
This action performs a context click (right click) on a specified web element using its properties. It is useful for opening context menus or triggering specific actions associated with a right-click.

---

## Scenarios

### Scenario 1

#### Title
Perform a right-click on the button

Sample test case: [TEST-8013 Perform Right-Click on the Button](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8013/)

#### Scenario Overview
A user needs to open a context menu by right-clicking on a button. This scenario demonstrates the use of the "right-click" action to trigger a specific response or behavior, such as displaying a message box.

#### Steps to Follow
1. Open a webpage that contains a button.
2. Identify the button using its attribute.
3. Perform the "right click" action on the text of the button.
4. Verify that the right-click action has been successfully performed on the button.

#### Actions

| Parameter    | Type               | Value          |
|--------------|--------------------|----------------|
| text         | element parameter  | Right Click Me |
| right click  | selenium action    | right click    |

#### Expected Result
- The right-click action successfully clicks the button and displays a text message.

#### Common Errors and Fixes
- **Error**: The message is not displayed.
  - **Fix**: Ensure that the correct attribute (e.g., `id` or `text`) is provided and that the button is interactable.

- **Error**: The "right-click" action does not trigger the message.
  - **Fix**: Ensure the row is interactable and that right-click functionality is supported.

## Test Cases

### Test Case for Scenario 1

#### Objective
Ensure that the "right-click" action is performed on the button identified by its text attribute.

#### Steps to Perform
1. Open a browser and navigate to a webpage containing a button.
2. Use the action with following inputs:
   - **Input parameters**:
     - **Element parameter**: Provide the element's attribute (e.g., `text = Right Click Me`).
     - **Selenium action**: `right click`
3. Verify that the message appears.

#### Expected Outcome
- The message is displayed when the button is clicked.

---

## Additional Tips for this Action
- Use a unique **parent or sibling** element to narrow the search scope when identifying duplicate elements.
- Enable the **Allow Hidden** option to interact with hidden elements.
- Test the action across multiple browsers to ensure compatibility.

---

### Error Handling for Context Click (Right Mouse Click)

#### Common Problems and Their Fixes
1. **Problem**: The element is not found.  
   **Possible Cause**: The attribute is incorrect, or the element is outside the viewport.  
   **How to Fix**: 
   - Ensure the attribute matches the element.
   - Scroll to bring the element into view.

2. **Problem**: The "right-click" action fails.  
   **Possible Cause**: The element is not interactable or is being blocked by another element.  
   **How to Fix**: Use the **allow hidden** or **use JS** option to force interaction.

3. **Problem**: The message does not appear.  
   **Possible Cause**: The "right-click" action is not associated with the element.  
   **How to Fix**: Verify that the element supports message interactions.

---