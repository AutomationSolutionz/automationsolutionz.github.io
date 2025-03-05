---
id: context-click-right-mouse-click
title: Context Click (Right Mouse Click)
---

## Purpose
This action performs a context click (right click) on a specified web element using its properties. It is useful for opening context menus or triggering specific actions associated with a right-click.

---

## Scenarios

### Scenario 1

#### Title:
Perform a right-click on the button  
Test case link: [TEST-8013 Perform Right-Click on the Button](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8013/)

#### Scenario Overview:
A user needs to open a context menu by right-clicking on a button. This scenario demonstrates how to use the "Right Click" action to perform a right-click on an element identified by its `id` attribute.

#### Steps to Follow:
1. Open a webpage that contains a button.
2. Identify the button using its `id` attribute.
3. Use the "Right Click" action with the `id` of the button.
4. Verify that the context menu is displayed after performing the right-click.

#### Actions:
- **Input parameters**:
  - **Element parameter**: Provide the element's attribute (e.g., `id = settings-button`).
  - **Selenium action**: `context click`.

#### Expected Result:
- The right-click action successfully triggers the context menu for the specified button.

#### Common Errors and Fixes:
- **Error**: The context menu fails to appear after the right-click.
  - **Fix**: Ensure that the correct attribute (e.g., `id`) is provided and that the button is interactable.

---

### Scenario 2

#### Title:
Perform a right-click action on the specified table row  
Test case link: [TEST-8013 Perform Right Click on Table Row](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8013/)

#### Scenario Overview:
A user needs to right-click on a table row to reveal additional options, such as "Edit" or "Delete". This scenario demonstrates how to use the "Right Click" action to trigger the context menu on a specific table row.

#### Steps to Follow:
1. Open a webpage that contains a table with multiple rows.
2. Identify the table row using attributes like `id` or `class`.
3. Perform the "Right Click" action on the specified table row.
4. Ensure that the context menu is displayed with the correct options.

#### Actions:
- **Input parameters**:
  - **Element parameter**: Provide the element's attribute (e.g., `id = row-3`).
  - **Selenium action**: `context click`.

#### Expected Result:
- The context menu is successfully displayed for the table row with ID `row-3`.

#### Common Errors and Fixes:
- **Error**: The right-click fails to trigger the context menu.
  - **Fix**: Verify that the row is interactable and supports the right-click functionality.
- **Error**: The wrong row is right-clicked.
  - **Fix**: Confirm that the correct row `ID` or `class` is provided.
- **Error**: The context menu is displayed, but the expected options are not present.
  - **Fix**: Verify that the menu options are properly loaded before performing the action.
- **Error**: The right-click action is ignored or triggers an unintended function.
  - **Fix**: Check if **JavaScript** event listeners are preventing the right-click behavior, and disable conflicting scripts if necessary.

---

## Test Cases

### Test Case for Scenario 1

#### Objective:
Ensure that the right-click action is performed on a button identified by its `id` attribute.

#### Steps to Perform:
1. Open a browser and navigate to a webpage containing a button.
2. Use the action with the following inputs:
   - **Element parameter**: `id = settings-button`.
   - **Selenium action**: `context click`.
3. Ensure that the context menu is displayed after the right-click action.

#### Expected Outcome:
- The context menu is displayed for the button.

---

### Test Case for Scenario 2
#### Objective:lementfy that the right-click action correctly opens the context menu for the specified table row.

#### Steps to Perform:
1. Open a browser and go to a webpage that includes a table.
2. Use the action with the following inputs:
   - **Element parameter**: `id = row-3`.
   - **Selenium action**: `context click`.
3. Verify that the context menu for the table row with ID `row-3` appears.

#### Expected Outcome:
- The context menu is displayed for the selected row, displaying options such as "Edit" or "Delete".

---

## Additional Tips for this Action
- Use a **unique parent or sibling element** to narrow down the search scope when identifying duplicate elements.
- Enable the **allow hidden** option to allow interaction with **hidden elements**.
- Test the action across multiple browsers to ensure compatibility.

---

### Error Handling for Context Click (Right Mouse Click)

#### Common Problems and Their Fixes
1. **Problem**: The element is not found.  
   **Possible Cause**: The attribute is incorrect, or the element is outside the viewport.  
   **How to Fix**:  
   - Ensure that the attribute matches the element.
   - Scroll the page to bring the element into the viewport.

2. **Problem**: The right-click action fails.  
   **Possible Cause**: The element is not interactable or is blocked by another element.  
   **How to Fix**: Use the **allow hidden** or **use js** option to enable forced interaction with the element.

3. **Problem**: The context menu does not appear.  
   **Possible Cause**: The element does not have the right-click action properly configured.  
   **How to Fix**: Verify that the element supports context menu interactions.