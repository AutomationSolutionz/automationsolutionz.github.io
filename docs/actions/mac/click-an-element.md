---
id: click-an-element
title: Click an Element
---

## Purpose
This action is used to simulate a click event on a specified element on the screen. The element can be located using its attributes such as `id`, `name`, `XPath`, or `CSS selector`. This action is essential for interacting with buttons, links, and other clickable elements in applications.

---

## Scenarios

### Scenario 1

#### Title

Click a + icon using its label

Sample test case: [TEST-8036 Click a + icon using its label](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8036/)

#### Scenario Overview
A user needs to click the **"Add new event"** icon identified by its **label text** to perform a specific action. This scenario demonstrates how to use the "Click an Element" action to interact with the icon.

#### Steps to Follow:
1. Open an app containing an **add icon (+)**.
2. Identify the button using its `label` attribute.
3. Use the "Click an Element" action to click the button.
4. Verify that clicking the button executes the intended action.

#### Actions

| Parameter   | Type    | Value    |
|-------------|---------|----------|
| label       | element parameter  | Add Event |
| type        | optional parameter | button    |
| click       | appium action     | clickn     |

#### Expected Result
- The button is clicked, triggering the associated action.

#### Common Errors and Fixes
- **Error**: The + icon is not located.
  - **Fix**: Ensure the correct `label` attribute is provided and matches the element in the DOM.

---

### Scenario 2

#### Title

Click a button using its label

Sample test case: [TEST-8036 Click a button using its label](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8036/)

#### Scenario Overview
A user needs to click a button identified by its `label` attribute to perform a specific action. This scenario demonstrates how to use the "Click an Element" action to interact with the buttton.

#### Steps to Follow
1. Open a webpage that contains a button.
2. Identify the button using its `label` attribute.
3. Use the "Click an Element" action to click the button.
4. Verify that clicking the button triggers the desired action.

#### Actions

| Parameter    | Type      | Value     |
|--------------|-----------|-----------|
| label        | element parameter  | Week  |
| click        | appium action   | click   |

#### Expected Result
- The button is clicked, and the associated action is triggered.

#### Common Errors and Fixes
- **Error**: The button is not located.
  - **Fix**: Ensure the correct `label` attribute is provided and matches the element in the DOM.

---

## Test Cases

### Test Case for Scenario 1

#### Objective
Ensure that clicking a button identified by its attributes works correctly.

#### Steps to Perform
1. Open a browser and navigate to a webpage containing a button.
2. Use the action with inputs:
   - **Element parameter**: `label = Add Event`
   - **Optional parameter**: `type = button`
   - **Appium action**: `click`.
3. Verify that the button triggers the expected action.

#### Expected Outcome
- The button is clicked, and the associated action is performed successfully.

---

### Test Case for Scenario 2

#### Objective
Ensure that clicking a button identified by its label works correctly.

#### Steps to Perform
1. Open a browser and navigate to a webpage containing a button.
2. Use the action with inputs:
   - **Element parameter**: `label = Week`
   - **Appium action**: `click`.
3. Verify that clicking the button executes the intended action.

#### Expected Outcome
- The button is clicked, triggering the intended action.
- The link is clicked, triggering a redirect to the expected page.

---

## Additional Tips for this Action
- Use unique attributes such as `title`, `label`, or `identifier` to locate elements reliably.
- When using partial matches, ensure the attribute value is specific enough to avoid selecting the wrong element.
- Test the action on different browsers and devices to ensure compatibility.

---

### Error Handling for Click an Element

#### Common Problems and Their Fixes
1. **Problem**: The element is not found.  
   **Possible Cause**: The attribute is incorrect, or the element is not visible.  
   **How to Fix**: Verify that the attribute matches the element in the DOM.

2. **Problem**: The click action does not trigger the desired response.  
   **Possible Cause**: The element is either disabled or covered by another element.  
   **How to Fix**: Ensure the element is enabled and visible before performing the action.

3. **Problem**: The partial match selects the wrong element.  
   **Possible Cause**: The partial attribute matches multiple elements.  
   **How to Fix**: Use more specific attributes to identify the correct element.