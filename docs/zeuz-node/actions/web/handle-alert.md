---
id: handle-alert
title: Handle Alert
---

## Purpose
This action handles browser alerts that block other web page actions until addressed. It can accept, reject, or interact with alerts by extracting their text or sending input. By default, the action waits up to 5 seconds for the alert to appear, but the wait time can be customized.

## Scenarios

### Scenario 1

#### Title
Accept an alert dialog box  
Sample test case: [TEST-7988 Handle Alert](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-7988/)

#### Scenario Overview
Imagine a user needs to accept an alert box that provides a confirmation message. This scenario demonstrates how to use the action to accept an alert.

#### Steps to Follow
1. Navigate to a webpage that triggers an alert box.
2. Use the "Handle Browser Alert" action with the input: `OK` or `Accept`.
3. Verify that the alert is accepted and that the underlying webpage becomes accessible again.

#### Actions

| Parameter    | Type                | Value        |
|--------------|---------------------|--------------|
| wait         | optional parameter  | 5.0          |
| handle alert | selenium action     | Ok           |

#### Expected Result
- The alert is successfully accepted.

#### Common Errors and Fixes
- **Error**: The alert does not appear within the specified wait time.
  - **Fix**: Increase the value of the wait time parameter.

---

### Scenario 2

#### Title
Reject the alert box   
Sample test case: [TEST-8118 Handle Alert](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8118/)

#### Scenario Overview
A user may want to decline an alert dialog box requesting confirmation. This scenario demonstrates rejecting the alert.

#### Steps to Follow
1. Trigger an alert dialog box on the webpage.
2. Use the "Handle Browser Alert" action with the input: `Cancel` or `Reject`.
3. Verify that the alert is dismissed and that the webpage reflects the canceled operation.

#### Actions

| Parameter    | Type                | Value     |
|--------------|---------------------|-----------|
| wait         | optional parameter  | 8         |
| handle alert | selenium action     | Cancel    |

#### Expected Result
- The alert is dismissed, and the webpage reflects the canceled action.

#### Common Errors and Fixes
- **Error**: The alert is dismissed, but the webpage does not respond correctly.
  - **Fix**: Check if the webpage handles dismissed alerts correctly.

---

## Test Cases

### Test Case for Scenario 1

#### Objective
Ensure that accepting an alert works correctly.

#### Steps to Perform
1. Open a webpage that triggers an alert.
2. Use the action with inputs:
   - **Input parameters**:
     - `wait` (optional parameter): Time to wait for the alert to appear (default is 5 seconds).
     - `handle alert` (selenium action): Action to perform (e.g., `Ok`, `Accept`).
3. Verify that the alert is accepted.

#### Expected Outcome
- The alert is successfully accepted.

---

### Test case for Scenario 2

#### Objective
Ensure that rejecting an alert works correctly.

#### Steps to Perform
1. Open a webpage that triggers an alert.
2. Use the action with inputs:
   - **Input parameters**:
     - `wait` (optional parameter): Time to wait for the alert to appear.
     - `handle alert` (selenium action): Action to perform (e.g., `Cancel`, `Reject`).
3. Verify that the alert has been dismissed.

#### Expected Outcome
- The alert is successfully dismissed, and the webpage reflects the canceled operation.

---

## Additional tips for this Action
- Use the `wait` parameter to handle slow-loading alerts.
- Use `get text` to capture alert messages for logging or validation.
- Verify the alert behavior across different browsers, as implementations may vary.

---

### Error Handling for Handle Browser Alert

#### Common Problems and Their Fixes
1. **Problem**: Alert does not appear.  
   **Possible Cause**: The alert is not triggered correctly or appears after the specified wait time.  
   **How to Fix**: Verify the alert trigger and extend the wait time if necessary.  
   

2. **Problem**: Alert action fails.  
   **Possible Cause**: Incorrect input parameter.  
   **How to Fix**: Ensure that valid inputs, such as `ok`, `cancel` or `get text`, are provided.  


3. **Problem**: Alert text extraction fails.  
   **Possible Cause**: The alert has no text, or the variable name is missing.  
   **How to Fix**: Verify that the alert contains text and specify a valid variable name.
