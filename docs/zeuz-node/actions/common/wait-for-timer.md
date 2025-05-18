---
id: wait-for-timer
title: Wait for Timer
---

## Purpose
This action defines the total time within which a test case or step must complete its execution. If the automation does not finish within the specified time, the test case will fail. This action is crucial for ensuring that tests run efficiently and within acceptable time limits, particularly in performance-sensitive scenarios.

---

## Scenarios

### Scenario 1

#### Title:
Set a timer for a single test case  
Test case link: [TEST-7989 Set timer for a single test case](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-7989)

#### Scenario Overview:
A test case must complete within a defined time limit. This scenario demonstrates how to use the "Wait for Timer" action to enforce the time constraint.

#### Steps to Follow:
1. Start the timer first using the action called "Start Timer".
2. Navigate to the website and complete the login process.
3. Assign the timer to the test case using the "Wait for Timer" action.

#### Actions:

| Parameter        | Type             | Value      |
|------------------|------------------|------------|
| wait for timer   | common action    | 20         |

- Use the "Wait for Timer" action to monitor the execution duration of the test case.

#### Expected Result:
- The test case completes within the allotted time. If it does not, the test fails with a timeout error.

#### Common Errors and Fixes:
- **Error**: The test case exceeds the specified time limit.
  - **Fix**: Optimize the test steps to reduce the execution time.

---

### Scenario 2

#### Title:
Complete the loop within the given time  
Test case link: [TEST-8074 Complete the loop within the given time](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8074)

#### Scenario Overview:
Suppose we have a table with rows, and we need to delete each row using a `for` loop. To ensure the loop completes within the given time, we will set a timer using the "Wait for Timer" action.

#### Steps to Follow:
1. Open the browser and navigate to the target webpage.
2. Start the timer first by using the "Start Timer" action.
3. Delete all rows using a `for` loop.
4. Assign the timer to the step using the "Wait for Timer" action.

#### Actions:

|  Parameter       |  Type           |  Value     |
|------------------|-----------------|------------|
|  wait for timer  |  common action  |  10        |

- Use the "Wait for Timer" action to monitor the execution duration of the `for` loop.

#### Expected Result:
- The loop completes within the allotted time. If it does not, the process fails with a timeout error.

#### Common Errors and Fixes:
- **Error**: The loop takes longer than the specified time limit.
  - **Fix**: Increase the "Wait for Timer" value, if necessary, to accommodate a realistic execution time.
- **Error**: The "Wait for Timer" action does not trigger as expected.
  - **Fix**: Ensure that the "Start Timer" action is executed before entering the loop. Verify the correct order of execution: `Start Timer → Execute For Loop → Wait for Timer`.

---

## Additional Tips for this Action:
- Always set a realistic timer based on the expected performance of the system under test.
- Ensure that the time limits are appropriate for the complexity of the actions being tested to avoid false failures.

---

### Error Handling for Wait for Timer

#### Common Problems and Their Fixes:
1. **Problem**: The test case fails because the "Wait for Timer" action times out too early.  
   **Possible Cause**: The timer was set too low for the expected action to complete.  
   **How to Fix**: Increase the timer value based on the expected time for the action to complete.

2. **Problem**: The test case passes even though the action takes longer than expected.  
   **Possible Cause**: The timer was set too high, allowing the test case to pass even when performance is poor.  
   **How to Fix**: Adjust the timer to a more reasonable value to detect performance issues early.

---

### General Error Handling Tips
- Always verify that the timer starts before executing the loop.
- Ensure that the loop dynamically updates row selection after each deletion.
- If facing performance issues, check the browser console logs for errors or slow network reponses.