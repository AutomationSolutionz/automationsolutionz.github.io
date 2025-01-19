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
Test case link: [TEST-7988 Handle Alert](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-7988/)

#### Scenario Overview:
Imagine a user needs to accept an alert box that provides a confirmation message. This scenario demonstrates how to use the action to accept an alert.

#### Steps to Follow:
1. Navigate to a webpage that triggers an alert box.
2. Use the 'Handle Browser Alert' action with the input: `OK` or `Accept`.
3. Verify that the alert is accepted and that the underlying webpage becomes accessible again.

#### Actions:
- Input parameters:
  - `wait` (optional): The time to wait for the alert to appear (default is 5 seconds).
  - `handle alert`: The action to perform (e.g., `OK`, `Accept`).

#### Expected Result:
- The alert is successfully accepted.

#### Common Errors and Fixes:
- **Error**: The alert does not appear within the specified wait time.
  - **Fix**: Increase the value of the wait time parameter.

---

### Scenario 2

#### Title:
Dismiss an alert dialog box  
Test case link: [TEST-7988 Handle Alert](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-7988/)

#### Scenario Overview:
A user may want to decline an alert dialog box requesting confirmation. This scenario demonstrates dismissing the alert.

#### Steps to Follow:
1. Trigger an alert dialog box on the webpage.
2. Use the 'Handle Browser Alert' action with the input: `Cancel` or `Reject`.
3. Verify that the alert is dismissed and that the webpage reflects the canceled operation.

#### Actions:
- Input parameters:
  - `wait` (optional): The time to wait for the alert to appear.  
  - `handle Alert`: The action to perform (e.g., `Cancel`, `Reject`).

#### Expected Result:
- The alert is dismissed, and the webpage reflects the canceled action.

#### Common Errors and Fixes:
- **Error**: The alert is dismissed, but the webpage does not respond correctly.
  - **Fix**: Check if the webpage handles dismissed alerts correctly.

---

### Scenario 3

#### Title:
Extract text from an alert dialog box  
Test case link: [TEST-7988 Handle Alert](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-7988/)

#### Scenario Overview:
Users may need to capture the text displayed in an alert for logging or validation. This scenario demonstrates how to extract and save the alert text to a variable.

#### Steps to Follow:
1. Trigger an alert box with visible text.
2. Use the 'Handle Browser Alert' action with the input: `get text = var_name`.
3. Verify that the text is saved to the specified variable and the alert is accepted.

#### Actions:
- Input parameters:
  - `wait` (optional): The time to wait for the alert to appear.
  - `handle alert`: The action to perform (e.g., `get text = var_name`).

#### Expected Result:
- The alert text is saved to the specified variable, and the alert is accepted.

#### Common Errors and Fixes:
- **Error**: Text extraction fails.
   - **Fix**: Ensure that the alert contains readable text.

---

### Scenario 4

#### Title
Provide input to an alert box  
Test case link: [TEST-7988 Handle Alert](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-7988/)

#### Scenario Overview:
Some alerts require user input before proceeding. This scenario demonstrates how to enter text into an alert.

#### Steps to Follow:
1. Trigger an alert box with a text input field.
2. Use the 'Handle Browser Alert' action with input: `send text = some_text`.
3. Verify that the text is sent and the alert is accepted.

#### Actions:
- Input parameters:
   - `wait` (optional): The time to wait for the alert to appear.
   - `handle alert`: The action to perform (e.g., `send text = some_text`).

#### Expected Result:
- The text is sent to the alert, and it is accepted.

#### Common Errors and Fixes:
- **Error**: Text input fails.
   - **Fix**: Ensure that the alert supports text input.

---

### Test Case for Scenario 1

#### Objective:
Ensure that accepting an alert works correctly.

#### Steps to Perform:
1. Open a webpage that triggers an alert.
2. Use the action with inputs:
   - `wait = 5`.
   - `handle alert = OK`.
3. Verify that the alert is accepted.

#### Expected Outcome:
- The alert is successfully accepted.

---

### Test case for Scenario 2

#### Objective:
Ensure that the alert is rejected correctly.

#### Steps to Perform:
1. Open a webpage that triggers an alert.
2. Use the action with inputs:
   - `wait = 8`.
   - `handle alert = Cancel`.
3. Verify that the alert has been dismissed.

#### Expected Outcome:
- The alert is successfully dismissed, and the webpage reflects the canceled operation.

---

### Test case for Scenario 3

#### Objective:
Ensure that extracting text from an alert box functions correctly.

#### Steps to Perform:
1. Open a webpage that triggers an alert with visible text.
2. Use the action with inputs:
   - `wait = 5`.
   - `handle alert = get text = alert_text`.
3. Verify that the text displayed in the alert is successfully captured in the variable `alert_text`.
4. Confirm that the alert is accepted after the text is extracted.

#### Expected Outcome:
- The alert is successfully saved to the variable `alert_text`.
- The alert is dismissed after the text is extracted.

---

### Test case for Scenario 4

#### Objective:
Ensure that sending input to an alert box works correctly.

#### Steps to Perform:
1. Open a webpage that triggers an alert requiring user input.
2. Use the action with inputs:
   - `wait = 5`.
   - `handle alert = send text = user_input`.
3. Verify that the text `user_input` is successfully sent to the alert.
4. Confirm that the alert is accepted after input is provided.

#### Expected Outcome:
- The text `user_input` is entered into the input field of the alert.
- The alert is dismissed after accepting the input.

---

## Additional tips for this Action
- Use the `wait` parameter to handle slow-loading alerts.
- Use `get text` to capture alert messages for logging or validation.
- Verify the alert behavior across different browsers, as implementations may vary.

---

### Error Handling for Handling Browser Alerts

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
