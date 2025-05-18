---
id: change-attribute-value
title: Change Attribute Value
---

## Purpose
This action modifies the value of any HTML attribute (except for the `class` attribute). It locates the element on the webpage using a specified identifier, identifies the target attribute, and updates its value with the provided input.

---

## Scenarios

### Scenario 1

#### Title:
Change the value of an input field's `placeholder` atrribute  
Test case link: [TEST-8007 Change Attribute Value](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8007/)

#### Scenario Overview:
A user needs to modify the placeholder text of an input field. This scenario demonstrates how to use the "Change Attribute Value" action to update the `placeholder` attribute of the input field.

#### Steps to Follow:
1. Open a webpage that contains an input field with a `placeholder` attribute.
2. Identify the input field using attributes such as `id` or `class`.
3. Use the "Change Attribute Value" action to update the value of the `placeholder` attribute.
4. Verify that the `placeholder` text has been updated on the webpage.

#### Actions:
- **Input parameters**:
  - **Element parameter**: Provide the element's attribute (e.g., `id = login_field`).
  - **Input parameter**: Provide the target attribute's name (e.g., `placeholder`) and the new value.
  - **Selenium action**: `change atrribute value`.

#### Expected Result:
- The `placeholder` text of the input field has been updated to the new value.

#### Common Errors and Fixes:
- **Error**: The input field is not located.
  - **Fix**: Ensure the correct attributes (e.g., `id`, `type`) are provided and the field is visible.

---

### Scenario 2

#### Title:
Change the value of a button's `title` attribute  
Test case link: [TEST-8007 Change Attribute Value](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8007/)

#### Scenario Overview:
A user needs to update the tooltip text of a button by modifying its `title` attribute. This scenario demonstrates how to use the "Change Attribute Value" action to update the button's tooltip.

#### Steps to Follow:
1. Open a webpage that contains a button with a `title` attribute.
2. Identify the button using attributes such as `id` or `class`.
3. Use the "Change Attribute Value" action to update the `title` attribute.
4. Verify that the button's tooltip text has been updated on the webpage.

#### Actions:
- **Input parameters**:
  - **Element parameter**: Provide the element's attribute (e.g., `class = btn-primary`).
  - **Input parameter**: Provide the target attribute's name (e.g., `title`) and the new value.
  - **Selenium action**: `change attribute value`.

#### Expected Result:
- The button's tooltip text has been updated to the new value.

#### Common Errors and Fixes:
- **Error**: The button is not located.
  - **Fix**: Ensure the correct attributes (e.g., `class`, `id`) are provided and the button is visible.

---

## Test Cases

### Test Case for Scenario 1

#### Objective:
Ensure that modifying the `placeholder` attribute of an input field works correctly.

#### Steps to Perform:
1. Open a browser and navigate to a webpage containing an input field.
2. Use the action with inputs:
   - **Element parameter**: `id = login_field`.
   - **Input parameter**: `placeholder = Enter Username`.
   - **Selenium action**: `change attribute value`.
3. Verify that the `placeholder` text has been updated to `"Enter Username"`.

#### Expected Outcome:
- The input field's `placeholder` text has been updated.

---

### Test Case for Scenario 2

#### Objective:
Ensure that modifying the `title` attribute of a button works correctly.

#### Steps to Perform:
1. Open a browser and navigate to a webpage containing a button.
2. Use the action with inputs:
   - **Element parameter**: `class = btn-primary`.
   - **Input parameter**: `title = Submit Form`.
   - **Selenium action**: `change attribute value`.
3. Verify that the button's tooltip has been updated to `"Submit Form"`.

#### Expected Outcome:
- The button's tooltip has been updated.

---

## Additional Tips for this Action
- Ensure that the target attribute exists in the HTML element before attempting to modify it.
- Use unique identifiers (e.g., `id`, `class`) to reliably locate elements on the webpage.
- Test the actions on different browsers to ensure consistent behavior.

---

### Error handling for Change Attribute Value

#### Common Problems and Their Fixes
1. **Problem**: The element is not found.  
   **Possible Cause**: The identifier (e.g., `id`, `class`) is incorrect.  
   **How to Fix**: Verify that the identifier matches the element in the DOM.

2. **Problem**: The attribute does not update.  
   **Possible Cause**: The attribute is protected, or the element is not interactive.  
   **How to Fix**: Ensure that the attribute can be modified dynamically and that the element is not disabled.

3. **Problem**: JavaScript execution fails.  
   **Possible Cause**: There is a syntax error in the JavaScript code or the browser does not support the feature.  
   **How to Fix**: Verify the JavaScript syntax and test it in supported browsers.