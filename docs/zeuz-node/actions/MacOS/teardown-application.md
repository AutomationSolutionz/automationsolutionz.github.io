---
title: Teardown Application
---

## Purpose
This action is responsible for properly closing an application that is currently running on the screen. It ensures a clean and complete termination of the testing session by performing the following steps:
- **Destroying the Appium driver**
- **Stopping the Appium server**
- **Clearing all shared variables**.

---

### Scenario

### Scenario 1

#### Title
Teardown the application after test execution

Sample test case: [TEST-8058 Teardown the application after test execution](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8058/)

#### Scenario Overview
A user executes an automated test case on macOS application. Once the test completes, the application must be properly closed to free system resources and prevent conflicts in future test runs.

#### Steps to Follow
1. Execute a test case on a macOS application.
2. Ensure that the application remains running.
3. Call the "Teardown Application" action at the end of the test case execution.
4. Verify that the application has been closed properly and that all Appium sessions and variables have been cleared.

#### Actions

|  Parameter      |  Type          |  Value       |
|-----------------|----------------|--------------|
|  teardown       |  appium action |  teardown    |

#### Expected Result
- The application closes properly, and the Appium server stops running.
- All shared variables are cleared, preventing conflicts in future test runs.

#### Common Errors and Fixes
- **Error**: The application remains running after the teardown execution.
  - **Fix**: Ensure that the teardown action is executed at the end of the test case.

- **Error**: The Appium server remains active after teardown.
  - **Fix**: Confirm that Appium was started within the session and is not running as a seperate process.

- **Error**: Shared variables are not cleared after teardown.
  - **Fix**: Verify that the teardown process was executed without any interruptions.

---

## Test Case

### Test Case for Scenario 1

#### Objective
Ensure that the "Teardown Application" action properly closes the application at the end of the test.

#### Steps to Perform
1. Open a macOS application using Appium.
2. Run a test case on the application.
3. At the end of the test, execute the following Appium action: `teardown`.
4. Verify that the application is properly closed and the Appium session is terminated.

#### Expected Outcome
- The application is terminated, and the Appium server stops running.
- All shared variables are cleared.

---

## Additional Tips for this Action
- Always call the "Terminated Application" action at the end of a test case to prevent future errors.
- If a test case fails unexpectedly, execute the teardown action within an exception handling block.
- Verify that all Appium processes are fully terminated using system monitoring tools.

---

### Error Handling for Teardown Application

#### Common Problems and Their Fixes
1. **Problem**: The application does not close after teardown execution.  
   **Possible Cause**: The Appium session is still active.  
   **How to Fix**: Ensure that teardown is called properly at the end of the test case.

2. **Problem**: The Appium server is still running after teardown.  
   **Possible Cause**: An external Appium session is active.  
   **How to Fix**: Verify that no external Appium instances are running in the background.

3. **Problem**: Shared variables are not cleared.  
   **Possible Cause**: Teardown was interrupted.  
   **How to Fix**: Ensure that the teardown command executes without errors.

---