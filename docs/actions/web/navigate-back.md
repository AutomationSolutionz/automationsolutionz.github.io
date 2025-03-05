---
id: navigate-back
title: Navigate - Back
---

## Purpose
This action simulates the browser's **back** button, enabling navigation to the previous page in the browser history. It functions the same as pressing the browser's **back** button to return to the last visited page.

---

## Scenarios

### Scenario 1

#### Title:
Navigate back to the previous page  
Test case link: [TEST-8000 Navigate Back](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8000/)

#### Scenario Overview:
A user navigates through multiple pages on a website and needs to return to the previous page. This scenario demonstrates how to use the 'Navigate - Back' action to perform this operation.

#### Steps to Follow:
1. Open a webpage and navigate to a second page by clicking a link or button.
2. Use the 'Navigate - Back' action to simulate pressing the browser's back button.
3. Verify that the browser successfully navigates to the previous page.

#### Actions:
- **Input parameters**:
  - Field: `navigate`
  - Selenium action: `back`

#### Expected Result:
- The browser navigates to the most recently visited page.

#### Common Errors and Fixes:
- **Error**: The browser fails to navigate back.
  - **Fix**: Ensure that the browser has a valid history to navigate back to.

---

### Scenario 2

#### Title:
Attempt to navigate back on the first page  
Test case link: [TEST-8000 Navigate Back](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8000/)

#### Scenario Overview:
A user is on the first page of a browser session and attempts to perform the 'Navigate - Back' action. This scenario demonstrates how the action behaves when no previous page exists in the browser's history.

#### Steps to Follow:
1. Open a browser and navigate to the homepage of a website.
2. Use the 'Navigate - Back' action.
3. Verify that the browser remains on the same page and does not throw an error.

#### Actions:
- **Input parameters**:
  - Field: `navigate`
  - Selenium action: `back`

#### Expected Result:
- The browser remains on the current page, and no errors are thrown.

#### Common Errors and Fixes:
- **Error**: The action fails and does not navigate back.
  - **Fix**: Ensure that the browser is not in incognito mode, which disables history tracking.

---

## Test Cases

### Test Case for Scenario 1

#### Objective:
Ensure that navigating back to the previous page functions correctly.

#### Steps to Perform:
1. Open a browser and navigate to **Page A**.
2. Click a link to navigate to **Page B**.
3. Use the action with inputs:
   - Field: `navigate`
   - Selenium action: `back`
4. Verify that the browser navigates back to **Page A**.

#### Expected Outcome:
- The browser successfully returns to **Page A**.

---

### Test Case for Scenario 2

#### Objective:
Ensure that attempting to navigate back on the first page does not cause errors.

#### Steps to Perform:
1. Open a browser and go to **Page A**.
2. Use the action with inputs:
   - Field: `navigate`
   - Selenium action: `back`
3. Verify that the browser remains on **Page A**.

#### Expected Outcome:
- The browser remains on the current page without errors.

---

## Additional Tips for this Action
- Use this action only when a previous page is available in the browser's history.
- Combine this action with navigation actions such as **Forward** and **Refresh** for complete browser navigation control.

---

### Error Handling for Navigate - Back

#### Common Problems and Their Fixes
1. **Problem**: The browser fails to navigate back.  
   **Possible Cause**: No previous page exists in the browser's history.  
   **How to Fix**: Ensure that the browser session has navigated to at least one additional page.

2. **Problem**: The action fails due to incorrect input.  
   **Possible Cause**: The value provided in the action is invalid.  
   **How to Fix**: Ensure that the value for the **Selenium action** field is set to `back`.

3. **Problem**: Browser history is disabled.  
   **Possible Cause**: Incognito mode or browser settings prevent history tracking.  
   **How to Fix**: Use a regular browser session with history enabled. 
   