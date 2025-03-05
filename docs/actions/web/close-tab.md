---
id: close-tab
title: Close Tab
---

## Purpose
This action allows users to close one or multiple browser tabs. It provides flexibility by enabling tabs to be closed either by their titles or indices. This can be particularly useful in scenarios where unnecessary tabs need to be removed to streamline browser activity.

---

## Scenarios

### Scenario 1

#### Title:
Close a single browser tab by its index  
Test case link: [TEST-8012 Close Tab by Index](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8012/)

#### Scenario Overview:
A user has multiple tabs open in a browser and needs to close a specific tab identified by its index. This scenario demonstrates how to use the "Close Tab" action to perform this operation.

#### Steps to Follow:
1. Open multiple tabs in the browser.
2. Identify the index of the tab that needs to be closed.
3. Use the "Close Tab" action with the specified tab index.
4. Verify that the specified tab has been closed.

#### Actions:
- **Input parameters**:
  - **Tabs**: `[1]` represents the index of the tab to be closed.
  - **Selenium action**: `close tab`.

#### Expected Result:
- The browser tab at index 1 is successfully closed.

#### Common Errors and Fixes:
- **Error**: The tab at the specified index is not closed.
  - **Fix**: Ensure that the index provided matches the browser's tab order.

---

### Scenario 2

#### Title:
Close multiple browser tabs by their titles  
Test case link: [TEST-8012 Close Multiple Tabs by Titles](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8012/)

#### Scenario Overview:
A user needs to close multiple tabs based on their titles. This scenario demonstrates how to use the "Close Tab" action to close tabs by specifying their titles.

#### Steps to Follow:
1. Open multiple tabs in the browser.
2. Identify the titles of the tabs that need to be closed.
3. Use the "Close Tab" action with the specified tab titles.
4. Verify that the specified tabs have been closed.

#### Actions:
- **Input parameters**:
  - **Tabs**: `['ZeuZ', 'Google]` (the titles of the tabs to be closed).
  - **Selenium action**: `close tab`.

#### Expected Result:
- The browser tabs with the titles "ZeuZ" and "Google" are successfully closed.

#### Common Errors and Fixes:
- **Error**: The tabs with the specified titles are not closed.
  - **Fix**: Ensure that the titles provided match the tabs exactly.

---

## Test Cases

### Test Case for Scenario 1

#### Objective:
Ensure that a specific browser tab is closed by its index.

#### Steps to Perform:
1. Open a browser and create three new tabs.
2. Use the action with inputs:
   - **Tabs**: `[1]`.
   - **Selenium action**: `close tab`.
3. Verify that the second tab has been closed.

#### Expected Outcome:
- The tab at index 1 is successfully closed, and the browser automatically switches to another open tab.

---

### Test Case for Scenario 2

#### Objective:
Ensure that multiple tabs are closed by their titles.

#### Steps to Perform:
1. Open a browser and create three tabs with the titles "ZeuZ", "Google" and "Apollo".
2. Use the action with inputs:
   - **Tabs**: `['ZeuZ', 'Google']`.
   - **Selenium action**: `close tab`.
3. Verify that the tabs with the titles "ZeuZ" and "Google" have been closed.

#### Expected Outcome:
- The tabs with the specified titles are successfully closed, and the browser remains open with the other tabs.

---

## Additional Tips for this Action
- Use unique tab titles or indices to ensure that only the intended tabs are closed.
- For dynamic tabs, confirm the title or index just before performing the action.
- Test this action across different browsers to ensure compatibility.

---

### Error Handling for Close Tab

#### Common Problems and Their Fixes
1. **Problem**: The tabs are not closed as expected.  
   **Possible Cause**: The provided titles or indices are incorrect.  
   **How to Fix**: Verify the titles or indices of the tabs before executing the action.

2. **Problem**: The browser does not switch to the next tab after closing.  
   **Possible Cause**: All remaining tabs were either minimized or located in a different window.  
   **How to Fix**: Ensure that the browser has at least one open tab remaining after closing the specified tabs.

3. **Problem**: The action fails with an error.  
   **Possible Cause**: The tabs are already closed, or the browser session has ended.  
   **How to Fix**: Verify the browser state and reopen the tabs if necessary.