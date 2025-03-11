---
id: switch-browser
title: Switch Browser
---

## Purpose
This action allows switching between multiple browser instances by using their unique `driver_id`. When multiple browsers are open during automated testing, each instance is identified by its own `driver_id`, and this action enables users to switch control between them, allowing interaction with the desired browser without terminating existing sessions. It is particularly useful for managing multiple browser sessions within the same test.

## Scenarios

### Scenario 1

#### Title:

Switch between two browser instances during a test

Sample test case: [TEST-7983 Switch between two browser instances during a test](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-7983)

#### Scenario Overview:
A user wants to interact with different browsers that are open simultaneously. This scenario demonstrates how to switch between two browser instances using their respective `driver_id`.

#### Steps to Follow:
1. Open multiple browser windows simultaneously.
2. Assign a `driver_id` to each open browser instance.
3. Use the "Switch browser" action to switch to the desired browser instance using its `driver_id`.
4. Verify that the actions are performed in the correct browser window.

#### Actions:

| Parameter   | Type     | Value      |
|-------------|----------|------------|
| driver_id   | input parameter  | default  |
| switch browser  | selenium action  | switch browser |

#### Expected Result:
- The browser context switches to the one specified by the provided `driver_id`. All subsequent actions will be executed within that browser window.

#### Common Errors and Fixes:
- **Error**: The specified `driver_id` does not exist.
  - **Fix**: Ensure that the correct `driver_id` is provided and that the corresponding browser window is active.

---