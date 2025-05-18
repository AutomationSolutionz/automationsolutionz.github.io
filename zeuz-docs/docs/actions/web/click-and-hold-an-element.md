---
id: click-and-hold-an-element
title: Click and Hold an Element
---

## Purpose
This action is used to perform a click-and-hold operation on a specified web element. It is commonly used for tasks such as drag-and-drop, extended selection, or triggering specific actions tied to click-and-hold gestures.

---

## Scenarios

### Scenario 1

#### Title:
Click and hold a button  
Test case link: [TEST-8022 Click and Hold](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8022/)

#### Scenario Overview:
A user wants to perform a click-and-hold operation on a button to trigger a specific action. This scenario demonstrates how to use the "Click and Hold an Element" action on an element identified by its `id` attribute.

#### Steps to Follow:
1. Open a webpage that contains the button.
2. Identify the button using its `id` attribute.
3. Use the "Click and Hold an Element" action with the `id` of the button.
4. Verify that the "click-and-hold" operation activates the desired action.

#### Actions:
- **Input parameters**:
  - **Element parameter**: Provide the element's attribute (e.g., `id = button-click-hold`).
  - **Selenium action**: `click and hold`.

#### Expected Result:
- The "click-and-hold" operation is performed on the specified button, which triggers the desired action.

#### Common Errors and Fixes:
- **Error**: The action does not produce the desired result.
  - **Fix**: Ensure that the correct attribute (e.g., `id`) is provided and that the button is interactable.

---

### Scenario 2

#### Title:
Click and hold an element to perform a drag operation  
Test case link: [TEST-8022 Click and Hold](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8022/)

#### Scenario Overview:
A user needs to drag an element from one position to another using a "click-and-hold" action. This scenario demonstrates how to perform a click-and-hold operation followed by a drag-and-drop action.

#### Steps to Follow:
1. Open a webpage that contains a **draggable element**.
2. Identify the draggable element using attributes such as `id` or `class`.
3. Use the **Click and Hold an Element** action to hold the draggable element.
4. Drag the element to its new location.
5. Verify that the drag operation has been successfully completed.

#### Actions:
- **Input parameters**:
  - **Element parameter**: Provide the element's attribute (e.g., `id = draggable item`).
  - **Selenium action**: `click and hold`.
  - **Move action**: Drag the element to the new coordinates.

#### Expected Result:
- The "click-and-hold" action is performed, successfully dragging the element to the new location.

#### Common Errors and Fixes:
- **Error**: The element is not dragged to the correct location.
  - **Fix**: Ensure that the target coordinates are correct and within the allowed drag area.
- **Error**: The "click-and-hold" action fails to work on the element.
  - **Fix**: Check that the element is draggable and is not obstructed by another element.

---

## Test Cases

### Test Case for Scenario 1

#### Objective:
Ensure the "click-and-hold" operation is performed on a button identified by its `id` attribute.

#### Steps to Perform:
1. Open a browser and navigate to a webpage containing a button.
2. Use the action with inputs:
   - **Element parameter**: `id = button-click-hold`.
   - **Selenium action**: `click and hold`.
3. Verify that the "click-and-hold" operation triggers the desired action correctly.

#### Expected Outcome:
- The "click-and-hold" operation triggers the action associated with the button.

---

### Test Case for Scenario 2

#### Objective:
Ensure that the "click-and-hold" action successfully initiates a drag operation.

#### Steps to Perform:
1. Open a browser and navigate to a webpage containing a **draggable element**.
2. Use the action with inputs:
   - **Element parameter**: `id = draggable-item`.
   - **Selenium action**: `click and hold`.
   - **Move action**: Drag the element to the new coordinates.
3. Verify that the element moves to the correct location after releasing the hold.

#### Expected Outcome:
- The element is successfully dragged to the new location using the "click-and-hold" action.

---

## Additional Tips for this Action
- Use a unique parent or sibling element to refine the search scope and accurately identify duplicate elements.
- Enable the "allow hidden" option to interact with hidden elements.
- Test the action across multiple browsers to ensure compatibility.

---

### Error Handling for Click and Hold an Element

#### Common Problems and Their Fixes
1. **Problem**: The element is not found.  
   **Possible Cause**: The attribute is incorrect, or the element is outside the viewport.  
   **How to Fix**: Ensure the attribute matches the element, and scroll to bring the element into view.

2. **Problem**: The action fails to hold the element.  
   **Possible Cause**: The element is not interactable or is blocked by another element.  
   **How to Fix**: Use the **allow hidden** or **use js** option to force interaction.

3. **Problem**: The element fails to be dragged successfully.  
   **Possible Cause**: The drag operation is not fully completed.  
   **How to Fix**: 
   - Ensure that the element supports "drag-and-drop".
   - Adjust the target coordinates for the drag operation.
   - Verify that the browser supports the drag function correctly.