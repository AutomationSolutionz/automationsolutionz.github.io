---
id: switch-browser-window-tab
title: Switch Browser Window/Tab
---

## Purpose
This action enables switching between browser tabs or windows using either their titles or index values. It facilitates efficient automation of navigation in multi-tab environments.

---

## Scenarios

### Scenario 1

#### Title
Switch to a browser tab using its title  

Sample test case: [TEST-8125 Switch to a Browser Tab Using its Title](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8125/)

#### Scenario Overview
Imagine a user navigating multiple tabs who needs to switch to a specific tab by its title. This scenario demonstrates how to use the action to identify and switch to the desired tab using its full or partial title.

#### Steps to Follow
1. Open multiple tabs in the browser.
2. Use the "Switch Browser Window or Tab" action with the tab title as input, such as `"DEMOQA"`.
3. Verify that the browser switches to the tab titled `"DEMOQA"`.

#### Actions

| Parameter          | Type               | Value              |
|--------------------|--------------------|--------------------|
| window title       | element parameter  | DEMOQA             |
| switch window/tab  | selenium action    | switch window/tab  |

#### Expected Result
- The browser switches to the tab that matches the provided title.
- For partial matches, the browser switches to tabs that contain the provided string.

#### Common Errors and Fixes
- **Error**: The tab does not switch to the desired window or tab.
  - **Fix**: Ensure that the tab title matches the input correctly. For partial matches, prepend `*` to the title.

---

### Scenario 2

#### Title
Switch to a browser tab using its index value  

Sample test case: [TEST-7986 Switch to a Browser Tab using its Index Value](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-7986/)

#### Scenario Overview
A user cannot identify tabs by their titles but knows the tab order. This scenario demonstrates how to switch to a tab based on its index.

#### Steps to Follow
1. Open multiple tabs in the browser.
2. Use the "Switch Browser Window or Tab" action with the tab index as input, such as `0`.
3. Verify that the browser switches to the tab at index `0`.

#### Actions

| Parameter          | Type               | Value              |
|--------------------|--------------------|--------------------|
| window index       | element parameter  | 0                  |
| switch window/tab  | selenium action    | switch window/tab  |

#### Expected Result
- The browser switches to the tab at the specified index.

#### Common Errors and Fixes
- **Error**: Invalid index provided.
  - **Fix**: Ensure that the index is within the range of open tabs. Use `-1` for the last opened tab.

---

## Test Cases

### Test Case for Scenario 1

#### Objective
Ensure that switching to a tab by its title functions correctly.

#### Steps to Perform
1. Open the tabs in the browser titled `"DEMOQA"`, and `"demoqa.com/sample"`.
2. Use the action with the input:
   - **Input parameters**:
     - Element parameter: `window title = DEMOQA`
     - Selenium action: `switch window/tab`.
3. Verify that the browser switches to the tab titled `"DEMOQA"`.

#### Expected Outcome
- The browser switches to the tab titled `"DEMOQA"`.

---

### Test Case for Scenario 2

#### Objective
Ensure that switching to a tab by its index functions correctly.

#### Steps to Perform
1. Open multiple tabs in the browser.
2. Use the action with the input:
   - **Input parameters**:
     - Element parameter: `window index = 0`
     - Selenium action: `switch window/tab`.
3. Verify that the browser switches to the first tab (index starting at `0`).

#### Expected Outcome
- The browser successfully switches to the tab corresponding to the specified index (e.g., `0`).

---

## Additional Tips for this Action
- Use partial matching (`*window title`) if the exact title is unavailable or inconsistent.
- When switching by index, note that indexing starts at `0`.
- Use index `-1` to switch to the most recently opened tab.

---

### Error Handling for Switch Window or Tab

#### Common Problems and Their Fixes
1. **Problem**: The title of the tab does not match the provided input.  
   **Possible Cause**: The title is incomplete, or partial matching is not being used.  
   **How to Fix**: Use `*` before the title for partial matching (e.g., `*title`).

2. **Problem**: The provided tab index is invalid.  
   **Possible Cause**: The provided index is out of the valid range.  
   **How to Fix**: Ensure that the index corresponds to an open tab.

3. **Problem**: Tab switching fails because of page loading issues.  
   **Possible Cause**: The target tab has not finished loading.  
   **How to Fix**: Ensure that all tabs are fully loaded before switching.
