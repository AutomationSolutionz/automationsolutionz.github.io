---
id: open-a-new-tab
title: Open a New Tab
---

## Purpose
The "Open a New Tab" action opens a new browser tab within the same window. This action is useful when you want to open a new webpage without navigating away from or closing the current one.

## Scenarios

### Scenario 1

#### Title

Open a new tab in the same browser window

Sample test case: [TEST-7973 Open a new tab in the same browser window](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-7973/)

#### Scenario Overview
Imagine a user is browsing a website and wants to open another page without leaving the current page. This scenario demonstrates how the "Open a New Tab" action can be used to achieve that.

#### Steps to Follow
1. Open the browser and navigate to [https://www.google.co.uk/](https://www.google.co.uk/).
2. Use the "Open a New Tab" action to open a new tab in the browser.
3. Verify that a new tab has been opened in the same browser window.

#### Actions

- **Open a new tab**

| Parameter   | Type      | Value     |
|-------------|-----------|-----------|
| open new tab  | selenium action  | newtab  |

#### Expected Result:
- A new tab should open successfully in the same browser window.

#### Common Errors and Fixes:
- **Error**: The new tab fails to open.
  - **Fix**: Ensure the browser allows pop-ups and new tabs to open.

---

## Test Cases

### Test Case for Scenario 1

#### Objective
Ensure the browser successfully opens a new tab upon executing the action.

#### Steps to Perform
1. Open the browser.
2. Use the "Open a New Tab" action to create a new tab in the browser.
3. Verify that a new tab has appeared in the browser.

#### Expected Outcome
- A new tab should open in the same browser window.

## Additional Tips for this Action
- Ensure the browser settings allow new tabs to open automatically.
- If the new tab does not open, try using a keyboard shortcut (`Crtl + T` on Windows/Linux or `Cmd + T` on macOS) as a workaround.

---

### Error Handling for Open a New Tab

#### Common Problems and Their Fixes
1. **Problem**: The new tab fails to open.  
   **Possible Cause**: Browser settings may block pop-ups or prevent new tabs from opening.
   **How to Fix**: 
   - Check and enable pop-ups or new tabs in the browser settings.
   - Try using a different browser to see if the issue persists.

2. **Problem**: The new tab opens but does not remain in focus.  
   **Possible Cause**: Some browsers may open a new tab in the background.
   **How to Fix**: After opening a new tab, use the "Switch to Tab" action to bring it into focus.

### General Error Handling Tips
- Always ensure the browser is up to date to avoid potential compatibility issues.
- If using Selenium, ensure the browser driver is compatible with the browser version.
- Test the action across different browsers to ensure consistent behavior.