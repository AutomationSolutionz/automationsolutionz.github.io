---
id: handle-alert
title: Handle Alert
---

## Purpose
This action handles browser alerts that block other web page actions until addressed. It can accept, reject, or interact with alerts by extracting their text or sending input. By default, the action waits up to 5 seconds for the alert to appear, but the wait time can be customized.

## Scenarios

### Scenario 1

#### Title:
Accept an alert dialog box

#### Scenario Overview:
Imagine a user needs to accept an alert box that provides a confirmation message. This scenario demonstrates how to use the action to accept an alert.

#### Steps to Follow:
1. Navigate to a webpage that triggers an alert box.
2. Use the 'Handle Browser Alert' action with the input: 'OK' or 'Accept'.
3. Verify that the alert is accepted and that the underlying webpage becomes accessible again.

#### Actions:
- Input parameters:
  - **Wait** (optional): The time to wait for the alert to appear (default is 5 seconds).
  - **Handle Alert**: The action to perform (e.g., 'OK', 'Accept').

#### Expected Result:
- The alert is successfully accepted.

#### Common Errors and Fixes:
- **Error**: The alert does not appear within the specified wait time.
  - **Fix**: Increase the value of the wait time parameter.

### Scenario 2

#### Title:
Dismiss an alert dialog box

#### Scenario Overview:
A user may want to decline an alert dialog box requesting confirmation. This scenario demonstrates dismissing the alert.

#### Steps to Follow:
1. Trigger an alert dialog box on the webpage.
2. Use the 'Handle Browser Alert' action with the input: 'Cancel' or 'Reject'.
3. Verify that the alert is dismissed and that the webpage reflects the canceled operation.

#### Actions:
- Input parameters:
  - **Wait** (optional): The time to wait for the alert to appear.  
  - **Handle Alert**: The action to perform (e.g., 'Cancel', 'Reject').

#### Expected Result:
- The alert is dismissed, and the webpage reflects the canceled action.

#### Common Errors and Fixes:
- **Error**: The alert is dismissed, but the webpage does not respond correctly.
  - **Fix**: Check if the webpage handles dismissed alerts correctly.

### Scenario 3

#### Title:
Extract text from an alert dialog box

#### Scenario Overview:
Users may need to capture the text displayed in an alert for logging or validation. This scenario demonstrates how to extract and save the alert text to a variable.

#### Steps to Follow:
1. Trigger an alert box with visible text.
2. Use the 'Handle Browser Alert' action with the input: get text = var_name.
3. Verify that the text is saved to the specified variable and the alert is accepted.

#### Actions:
- Input parameters:
  - **Wait** (optional): The time to wait for the alert to appear.
  - **Handle Alert**: The action to perform (e.g., get text = var_name).

#### Expected Result:
- The alert text is saved to the specified variable, and the alert is accepted.

#### Common Errors and Fixes:
- **Error**: Text extraction fails.
   - **Fix**: Ensure that the alert contains readable text.

### Scenario 4

#### Title
Provide input to an alert box

#### Scenario Overview:
Some alerts require user input before proceeding. This scenario demonstrates how to enter text into an alert.

#### Steps to Follow:
1. Trigger an alert box with a text input field.
2. Use the 'Handle Browser Alert' action with input: send text = some_text.
3. Verify that the text is sent and the alert is accepted.

#### Actions:
- Input parameters:
   - **Wait** (optional): The time to wait for the alert to appear.
   - **Handle Alert**: The action to perform (e.g., send text = some_text).

#### Expected Result:
- The text is sent to the alert, and it is accepted.

#### Common Errors and Fixes:
- **Error**: Text input fails.
   - **Fix**: Ensure that the alert supports text input.

### Test Case for Scenario 1

#### Objective:
Ensure that accepting an alert works correctly.
