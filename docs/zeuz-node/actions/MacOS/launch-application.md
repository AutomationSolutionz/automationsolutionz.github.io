---
title: Launch Application
---

## Purpose
This action launches a specific application on **macOS** using its **bundle ID**. A **bundle ID** (or **bundle indentifier**) uniquely identifies an application within Apple's ecosystem. Providing the correct **bundle ID** enables automated testing or application launching.

For example, to open the **Calculator app**, specify its **bundle ID** as: `com.apple.calculator`.

---

## Scenarios

### Scenario 1

#### Title
Launch the Calculator application on macOS

Sample test case:[TEST-8042 Launch the Calculator application on macOS](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8042/)

#### Scenario Overview
A user needs to launch the Calculator app using its **bundle ID**. This scenario demnstrates how to use the "Launch Application" action to start the app.

#### Steps to Follow
1. Identify the **bundle ID** of the application that needs to be launched.
2. Use the "Launch Application" action with the **bundle ID** of the Calculator app: (`com.apple.calculator`).

#### Actions

|  Parameter            |  Type               |  Value                 |
|-----------------------|---------------------|------------------------|
|  macos app bundle id  |  element parameter  |  com.apple.calculator  |
|  launch               |  appium action      |  launch                |

#### Expected Result
- The Calculator app launches successfully.

#### Common Errors and Fixes
- **Error**: The application does not open.
  - **Fix**: Ensure that the **bundle ID** is correct and that the application is installed.

---

### Scenario 2

#### Title
Launch the Calendar application on macOS

Sample test case: [TEST-8188 Launch the Calendar application on macOS](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8188/)

#### Scenario Overview
A user needs to launch the Calendar app using its **bundle ID**. This scenario demonstrates how to use the "Launch Application" action to start the app.

#### Steps to Follow
1. Identify the **bundle ID** of the application that is to be launched.
2. Use the "Launch Application" action with the **bundle ID** of the Calendar app: (`com.apple.iCal`).

#### Actions

|  Parameter            |  Type               |  Value           |
|-----------------------|---------------------|------------------|
|  macos app bundle id  |  element parameter  |  com.apple.iCal  |
|  launch               |  appium action      |  launch          |

#### Expected Result
- The Calendar app launches successfully.

#### Common Errors and Fixes
- **Error**: The application does not open.
  - **Fix**: Ensure that the **bundle ID** is correct and that the application is installed.

---

## Test Cases

### Test Case for Scenario 1

#### Objective
Ensure that the Calculator application launches successfully.

#### Steps to Perform
1. Open a macOS machine.
2. Use the action with inputs:
   - **Input parameters**:
     - **Bundle ID**: `com.apple.calculator`
     - **Appium action**: `launch`

#### Expected Outcome
- The Calculator app launches successfully.

---

### Test Case for Scenario 2

#### Objective
Ensure that the Calendar application launches successfully.

#### Steps to Perform
1. Open a macOS machine.
2. Use the action with inputs:
   - **Input parameters**:
     - **Bundle ID**: `com.apple.iCal`
     - **Appium action**: `launch`

#### Expected Outcome
- The Calendar app launches successfully.

### Error Handling for Launch Application

#### Common Problems and Their Fixes
1. **Problem**: The application does not launch.  
   **Possible Cause**: The **bundle ID** is incorrect, or the application is not installed.  
   **How to Fix**:
   - Verify the **bundle ID** using the following command:
     ```
     osascript -e 'id of app "App Name"'
     ```
   - Ensure that the application is installed on macOS.

2. **Problem**: The application launches but crashes immediately.  
   **Possible Cause**: Compatibility issues or system restrictions may be the cause.  
   **How to Fix**: 
   - Check the macOS security settings by navigating to System Preferences → Security & Privacy.
   - Try launching the application manually to verify that it runs without errors.

3. **Problem**: The action fails due to an execution error.  
   **Possible Cause**: Appium is not configured properly.  
   **How to Fix**:
   - Ensure that Appium is installed and running on macOS.
   - Check the Appium logs for any specific error messages. 

---