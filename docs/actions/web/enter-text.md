---
id: enter-text
title: Enter Text
---

## Purpose
The "Enter Text" action allows users to type text into a specific field on a webpage or application, such as a login box, search bar, or form field. To perform this action, you must provide an identifier for the input field, such as its `ID`, `class`, `type`, `title`, or `value`. The automation tool then locates the input field using the specified identifier and writes the provided text into it.

---

## Scenarios

### Scenario 1

#### Title:
Write Text to a Username Field Using its `ID`  
Test case link: [TEST-11415 Write text to an input field using ID](https://qa.automationsolutionz.com/Home/ManageTestCases/Edit/TEST-11415/#parentHorizontalTab2)

#### Scenario Overview:
Imagine a user is on the login page of a website and needs to enter their username into the "Username" input field to proceed. This scenario demonstrates how to use the "Enter Text" action to populate the username field by identifying it using its `ID` property (e.g., `username-input`).

#### Steps to Follow:
1. Navigate to the login page of the website.
2. Ensure that the "Username" input field is visible and accessible.
3. Use the "Enter Text" action to enter the username into the input field by specifying its `ID` (e.g., `username-input`).
4. Verify that the username is correctly entered in the field.

#### Actions:

| Parameter     | Type                 | Value            |
|---------------|----------------------|------------------|
| id            | element parameter    | username_id      |
| text          | selenium action      | %\|user_name\|%  |

#### Expected Result:
- The username is successfully entered into the "Username" input field.
- No errors occur during the process.

#### Common Errors and Fixes:
- **Error**: The input field is not found.
  - **Fix**: Verify that the provided ID matches the actual ID of the input field.
- **Error**: The text is not entered into the field.
  - **Fix**: Ensure that the input field is enabled and not read-only.

---

### Scenario 2

#### Title:
Write Text to a Search Bar Using its `placeholder`  
Test case link: [TEST-11419 Write text to an input field using placeholder](https://qa.automationsolutionz.com/Home/ManageTestCases/Edit/TEST-11419/#parentHorizontalTab2)

#### Scenario Overview:
Imagine a user is on the login page of a website and needs to enter their username into the "Username" input field to proceed. This scenario demonstrates how to use the "Enter Text" action to populate the username field by identifying it using its `placeholder` property.

#### Steps to Follow:
1. Navigate to the login page of the website.
2. Ensure that the "Username" input field is visible and accessible.
3. Use the "Enter Text" action to write the username into the input field by specifying its `placeholder`.
4. Verify that the username is correctly entered in the field.

#### Actions:

| Parameter       | Type                | Value            |
|-----------------|---------------------|------------------|
| *placeholder    | element parameter   | User Name        |
| text            | selenium action     | %\|user_name\|%  |