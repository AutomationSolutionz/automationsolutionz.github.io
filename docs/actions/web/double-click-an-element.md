---
id: double-click-an-element
title: Double click an Element
---

## Purpose
This action is used to double-click on a web element by identifying it using specific properties such as ID, class, type, or title. It locates the element based on these attributes and performs a double-click action.

---

## Scenarios

### Scenario 1

#### Title:
Perform a double-click on the button  
Test case link: [TEST-7998 Perform a double-click on the button](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-7998/#parentHorizontalTab2)

#### Scenario Overview:
A user needs to perform a double-click on a button or element on a webpage. This scenario demonstrates how to use the double-click action with specific element properties.

#### Steps to Follow:
1. Open a webpage containing a button or element.
2. Identify the element using its attributes (e.g., `id`, `class`, `name`).
3. Perform the double-click action on the identified element.
4. Verify that the action is executed successfully (e.g., new content is displayed or the element is activated).

#### Actions:

| Parameter     | Type                | Value         |
|---------------|---------------------|---------------|
| tag           | element parameter   | button        |
| id            | element parameter   | signin        |
| double click  | selenium action     | double click  |

#### Expected Result:
- A double-click is successfully performed on the identified element.

#### Common Errors and Fixes:
- **Error**: The double-click action does not work as expected.
  - **Fix**: Ensure that the correct element property (e.g., ID, class, or name) is used to identify the element and that the element is interactable.

---

### Scenario 2

#### Title:
Perform a double-click on the link  
Test case link: [TEST-8061 Perform a double-click on the link](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8061/#parentHorizontalTab2)

#### Scenario Overview:
A user wants to double-click a link with a specific `attribute` property. This scenario demonstrates how to use the double-click action based on the `attribute`.

#### Steps to Follow:
1. Open a webpage containing a link with a specific `attribute` value.
2. Use the double-click action with the `attribute` value to identify the link.
3. Verify that the link is double-clicked and that the expected behavior occurs, such as the link opening in a new tab.

#### Actions:

| Parameter      | Type                | Value       |
|----------------|---------------------|-------------|
| tag            | element parameter   | div         |
| class          | element parameter   | card-header |
| double click   | selenium action     | double click|

#### Expected Result:
- The link is double-clicked, and the expected action is successfully triggered.

#### Common Errors and Fixes:
- **Error**: The link is not double-clicked.
  - **Fix**: Verify that the correct attribute value is used and that the element is visible and clickable.

## Test Cases

### Test Case for Scenario 1 

#### Objective:
Ensure that double-clicking the button works correctly.

#### Steps to Perform:
1. Open the webpage that contains the button.
2. Use the action with inputs:
   - Element parameter: `id = signin`
   - Selenium action: `double click`
3. Verify that the button is double-clicked and that the expected result occurs, such as new content being shown.

#### Expected Outcome:
- The button is successfully double-clicked, and any associated action, such as opening a menu or triggering a function, occurs.

---

### Test Case for Scenario 2

#### Objective:
Ensure that double-clicking the link using the correct attribute value works as expected.

#### Steps to Perform:
1. Open a webpage containing a link with a specific `attribute` value.
2. Use the action with inputs:
   - Element parameter: `class = card-header`
   - Selenium action: `double click`
3. Verify that the link is double-clicked and that the expected behavior occurs, such as the link opening in a new tab.

#### Expected Outcome:
- The link is double-clicked, successfully triggering the expected action.

---

### Data Format

#### Action:
To double-click an element, the following data format is used:

| Step Name                  | Step Type  | Step Actions                                                                                                        |
|----------------------------|------------|---------------------------------------------------------------------------------------------------------------------|
| Go To Webpage              | automated  | [ [ ( 'go to link' , 'selenium action' , 'https://demo.zeuz.ai/web/level/one/scenerios/login' ) ] ]                                               |
| Double-Click by element    | automated  | [ [ ( 'id' , 'element parameter' , 'dblClick' ) , ( 'double click' , 'selenium action' , 'double click' ) ] ]     |
| Tear Down Selenium         | automated  | [ [ ( 'tear down browser' , 'selenium action' , 'teardown' ) ] ]                                                   |





