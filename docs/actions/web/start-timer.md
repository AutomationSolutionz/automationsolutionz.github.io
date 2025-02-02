---
id: start-timer
title: Start Timer
---

## Purpose
This action sets a timer to control when a test case will start. The value in the "value" field determines the timing in seconds. A negative value (e.g., -5) triggers the action 5 seconds earlier, while a positive value (e.g, 5) delays execution by 5 seconds. This allows precise control over test case timing in relation to other actions or events.

---

## Scenarios

### Scenario 1

#### Title:
Delay the execution of a test case by 5 seconds  
Test case link: [TEST-8014 Start Timer](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8014/#parentHorizontalTab2)

#### Scenario Overview:
A user needs to delay the execution of a test case to ensure that other prerequisite actions are completed. This scenario demonstrates how to use the "Start Timer" action with a positive value to introduce a delay before execution.

#### Steps to Follow:
1. Prepare the test case with prerequisite actions.
2. Use the "Start Timer" action with a positive value (e.g., 5 seconds).
3. Verify that the test case starts 5 seconds later than the specified trigger.

#### Actions:
- **Input parameters**:
  - **Common action**: start timer.
  - **Value**: 5.

#### Expected Result:
- The test case begins 5 seconds later than the trigger point.

#### Common Errors and Fixes:
- **Error**: The timer does not function as expected.
  - **Fix**: Ensure the value field is correctly formatted and contains an integer.

---

### Scenario 2

#### Title:
Trigger the test case 5 seconds earlier  
Test case link: [TEST-8014 Start Timer](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8014/#parentHorizontalTab2)

#### Scenario Overview:
A user wants to ensure a test case starts 5 seconds before its regular schedule to synchronize with other events. This scenario demonstrates how to use the "Start Timer" action with a negative value.

#### Steps to Follow:
1. Prepare the test case with prerequisite actions.
2. Use the "Start Timer" action with a negative value (e.g., -5).
3. Verify that the test case starts 5 seconds earlier than the specified trigger.

#### Actions:
- **Input parameters**:
  - **Common action**: start timer.
  - **Value**: -5.

#### Expected Result:
- The test case begins 5 seconds earlier than the trigger point.

#### Common Errors and Fixes:
- **Error**: The timer fails to execute the action.
  - **Fix**: Ensure the value field is properly formatted as an integer and allows negative values.

---

## Test Cases

### Test Case for Scenario 1

#### Objective:
Ensure the test case starts 5 seconds later when the timer is set.

#### Steps to Perform:
1. Open the test case and set a delay timer.
2. Use the action with inputs:
   - **Common action**: start timer.
   - **Value**: 5.
3. Verify that the test case starts 5 seconds later.

#### Expected Outcome:
- The test case executes after a 5-second delay.

---

### Test Case for Scenario 2

#### Objective:
Ensure the test case starts 5 seconds earlier when the timer is set.

#### Steps to Perform:
1. Open the test case and configure an early trigger timer.
2. Use the action with inputs:
   - **Common action**: start timer.
   - **Value**: -5.
3. Verify that the test case starts 5 seconds earlier.

#### Expected Outcome:
- The test case executes 5 seconds before the expected time.

---

## Additional Tips for this Action
- Ensure that the timer value is formatted as an integer to avoid errors.
- Test the timer action in various scenarios to validate its behavior.
- Use the timer action to synchronize test cases with external events.

---

### Error Handling for Start Timer

#### Common Problems and Their Fixes
1. **Problem**: The timer fails to execute correctly.  
   **Possible Cause**: The timer value is incorrectly formatted.  
   **How to Fix**: Ensure the value is a valid integer (e.g., -5 or 5).

2. **Problem**: The timer action causes unexpected delays.  
   **Possible Cause**: Misconfigured timer value.  
   **How to Fix**: Verify that the timer value is correctly configured to meet the test case requirements.

3. **Problem**: The timer fails and throws an exception.  
   **Possible Cause**: The issue may be caused by a compatibility problem or incorrect implementation. 
   **How to Fix**: Debug the action implementation and verify environment compatibility. 
   