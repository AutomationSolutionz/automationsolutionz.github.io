---
id: navigate-forward
title: Navigate - Forward
---

## Purpose
This action simulates the browser's **forward** button, enabling navigation to the next page in the browser's history. It is equivalent to pressing the **forward** button on the browser to move to the page visited after the current one.

---

## Scenarios

### Scenario 1

#### Title:
Navigate forward to the next page  
Test case link: [TEST-8001 Navigate Forward](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8001/)

#### Scenario Overview:
A user navigates back to a previous page and wants to return to the next page in the browser history. This scenario demonstrates how to use the 'Navigate - Forward' action to perform this operation.

#### Steps to Follow:
1. Open a webpage and navigate to a second page by clicking a link or button.
2. Use the **Navigate - Back** action to go to the previous page.
3. Use the **Navigate - Forward** action to return to the second page.

#### Actions:
- **Input parameters**:
  - Field: `navigate`
  - Selenium action: `forward`

#### Expected Result:
- The browser navigates to the next page in its history.

#### Common Errors and Fixes:
- **Error**: The browser fails to navigate forward.
  - **Fix**: Ensure that the browser has a valid history to navigate forward to.

---

### Scenario 2

#### Title:
Attempt to navigate forward when there is no forward history  
Test case link: [TEST-8001 Navigate Forward](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8001/)

#### Scenario Overview:
A user is on the last page of a browser session and attempts to perform the 'Navigate - Forward' action. This scenario demonstrates how the action behaves when there is no next page in the browser's history.

#### Steps to Follow:
1. Open a browser and navigate to a webpage.
2. Attempt to perform the 'Navigate - Forward' action.
3. Verify that the browser remains on the same page and does not throw an error.

#### Actions:
- **Input parameters**:
  - Field: `navigate`
  - Selenium action: `forward`

#### Expected Result:
- The browser remains on the current page, and no errors are thrown.

#### Common Errors and Fixes:
- **Error**: The action fails to navigate forward.
  - **Fix**: Ensure that the browser history includes a forward page.

---

## Test Cases

### Test Case for Scenario 1

#### Objective:
Ensure that navigating forward to the next page functions correctly.

#### Steps to Perform:
1. Open a browser and go to **Page A**.
2. Click a link to go to **Page B**.
3. Use the 'Navigate - Back' action to return to **Page A**.
4. Use the action with inputs:
   - Field: `navigate`
   - Selenium action: `forward`
5. Verify that the browser returns to **Page B**.

#### Expected Outcome:
- The browser successfully navigates forward to **Page B**.

---

### Test Case for Scenario 2

#### Objective:
Ensure that attempting to navigate forward without a forward history does not cause errors.

#### Steps to Perform:
1. Open a browser and go to **Page A**.
2. Use the action with inputs:
   - Field: `navigate`
   - Selenium action: `forward`
3. Verify that the browser remains on **Page A**.

#### Expected Outcome:
- The browser remains on the current page without errors.

---

## Additional Tips for this Action
- Use this action only when a forward page is available in the browser's history.
- Combine this with navigation actions like **Back** and **Refresh** for comprehensive browser navigation control.

---

### Error Handling for Navigate - Forward

#### Common Problems and Their Fixes
1. **Problem**: The browser fails to navigate.  
   **Possible Cause**: No forward page exists in the browser's history.  
   **How to Fix**: Ensure that the browser session has navigated from at least one additional page.

2. **Problem**: The action fails because of incorrect input.  
   **Possible Cause**: The value specified for the action is invalid.  
   **How to Fix**: Ensure that the value for the **Selenium action** field is set to `forward`.

3. **Problem**: The browser history is disabled.  
   **Possible Cause**: Incognito mode or browser settings prevent history tracking.  
   **How to Fix**: Use a regular browser session with history tracking enabled.