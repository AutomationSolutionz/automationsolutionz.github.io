---
id: validate-exact-text
title: Validate Exact Text
---

## Purpose
The "Validate Exact Text" action ensures that the full text of a specified element matches the provided text exactly. This action compares the entire content of the element with the expected text and passes only if there is an exact match. Partial matches or differences in spacing, capitalization, or special characters will result in a failure. It is particularly useful for verifying static content, headers, labels, or other elements where precise text validation is required.

---

## Scenarios

### Scenario 1

#### Title:
Validate the Successful Text  
Test case link: [TEST-11414 Validate exact text](https://qa.automationsolutionz.com/Home/ManageTestCases/Edit/TEST-11414/)

#### Scenario Overview:
Imagine a user is on the login page of a website. After entering their username and password, the user clicks the "Sign In" button. Upon clicking the "Sign In" button, a validation message appears. This scenario demonstrates how to use the "Validate Exact Text" action to ensure the success message matches the expected text exactly.

#### Steps to Follow:
1. Open the webpage.
2. Locate the success message using its ID or other attributes.
3. Use the "Validate Exact Text" action to compare the success message with the expected value.
4. Verify that the action passes if the text matches exactly.

#### Actions:

| Parameter            | Type                | Value          |
|--------------        |---------------------|----------------|
| id                   | element parameter   | text_showing   |
| validate full text   | selenium action    | Login Successful  |

#### Expected Result:
- The message displays the exact text **"Login Successful"**.
- The action passes if the text matches exactly.

#### Common Errors and Fixes:
- **Error**: The text does not match because of extra spaces or capitalization differences.
  - **Fix**: Ensure that the expected text matches the actual text exactly, including spaces and case sensitivity.
- **Error**: The success message is not found.
  - **Fix**: Check whether the element's ID or other attributes are correctly specified.
