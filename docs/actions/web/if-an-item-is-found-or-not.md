---
id: if-an-item-is-found-or-not
title: If an Item is Found or Not
---

## Purpose
The "If an Item is Found or Not" action is used to evaluate conditions before performing specific actions on a webpage. It ensures that appropriate actions are taken based on element availability, logs relevant information, and validates partial text. This improves automation reliability by preventing unneccesary actions or errors.

---

## Scenarios

### Scenario 1

#### Title:
Click an Element Only If It Exists  
Test case link: [TEST-11442 If the element is found or not](https://qa.automationsolutionz.com/Home/ManageTestCases/Edit/TEST-11442/#parentHorizontalTab2)

#### Scenario Overview:
A user navigates to a webpage where an element may or may not be present. The action checks for the element's presence before attempting to click it, ensuring smooth execution.

#### Steps to Follow:
1. Open the target webpage.
2. Use a stable locator to check if the target element exists.
3. Use the "If Else Condition Handling" action to determine the next step:
   - **If**: If the element with the given locator is found, execute the actions specified on the right (action numbers) or pass/fail the step.
   - **Else**: Otherwise, execute another set of actions or pass/fail the step.

#### Actions:

| Parameter      | Type                         | Value      |
|----------------|------------------------------|------------|
| id             | element parameter            | button1    |
| true           | selenium conditional action  | 2          |
| false          | selenium conditional action  | fail       |

| Parameter    | Type                | Value      |
|--------------|---------------------|------------|
| id           | element parameter   | button2    |
| click        | selenium action     | click      |

#### Expected Result:
- The element is clicked only if it is present and visible.
- Relevant log messages are generated to provide clear and meaningful information.

#### Common Errors and Fixes:
- **Error**: Clicking fails due to an absent element.
  - **Fix**: Ensure the condition check is performed before attempting to click.

---