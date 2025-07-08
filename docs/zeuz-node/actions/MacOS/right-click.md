---
title: Right Click Action
---

## Purpose
This action is used to perform a right-click on an element by using its properties. The element to be clicked must be specified. Properties that can be used to locate the element include `title`, `label`, `value` and `identifier`. Once the element is identified, the action executes a right-click on it.

---

## Scenario

#### Title
Right-click on the Search field

Sample test case: [TEST-8043 Right-click on the Search field](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8043/)

#### Scenario Overview
A user opens the macOS Calendar application and right-clicks on the "Search" field. This action should open a context menu. The goal is to verify that the context menu appears and includes the option called "Spelling and Grammar".

#### Steps to Follow
1. Open the Calendar application on a Mac.
2. Locate the "Search" field using its element attributes such as `title`, `label`, `identifier`, or `value`.
3. Perform a right-click on the "Search" field.
4. Confirm that the context menu appears.
5. Use the "Validate Full Text" action to verify whether "Spelling and Grammar" option is present.

#### Action

|  Parameter    |  Type               |  Value           |
|---------------|---------------------|------------------|
|  label        |  element parameter  |  Search          |
|  right click  |  appium action      |  right click     |

#### Expected Result
- Successfully right-clicked on the "Search" field.
- The context menu opens upon right-clicking the "Search" field.

#### Common Errors and Fixes
- **Error**: The context menu does not appear.
  - **Fix**: Ensure that the "Search" field is visible on the screen and can be interacted with.
- **Error**: The menu item "Spelling and Grammar" is not present.
  - **Fix**: Confirm that a **partial or full match** validator was used with the correct element scope.

---

## Test Case

### Test Case for the given Scenario 

#### Objective
Ensure that right-clicking on the "Search" field opens a context menu.

#### Steps to Perform
1. Open the Calendar application.
2. Use the action with the following inputs:
   - **Input parameters**:
     - **Element parameter**: `label = Search`
     - **Appium action**: `right click`.
3. Verify that the context menu appears as expected.

#### Expected Outcome
- The context menu appears when the user performs a right-click.

---

## Additional Tips for this Action
- Use a unique parent or sibling element to enhance accuracy.
- Enable the allow hidden option if elements are dynamically displayed.
- Add a wait step if the context menu takes a moment to render.

---

### Error Handling for Right Click

#### Common Problems and Their Fixes
1. **Problem**: The element is not found.  
   **Possible Cause**: The attribute is incorrect, or the element is outside the viewport.  
   **How to Fix**: Double-check the attribute (e.g., `title = Search`) and ensure the element is visible.

2. **Problem**: The "Right Click" action fails.  
   **Possible Cause**: The element is not interactable or is blocked by another element.  
   **How to Fix**: Use the `use js` option if the element is overlapped or blocked by other elements.

3. **Problem**: The context menu does not contain the expected item.  
   **Possible Cause**: The context menu item is dynamically loaded and has not yet rendered when the menu is checked.  
   **How to Fix**: Use "Validate Full Text" action to verify that menu entries exactly match the expected labels.

---