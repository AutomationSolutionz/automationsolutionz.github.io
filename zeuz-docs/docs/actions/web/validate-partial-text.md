---
id: validate-partial-text
title: Validate Partial Text
---

## Purpose
The "Validate Partial Text" action verifies whether a text field or text view contains the expected data, even if the match is partial. It retrieves text from a specified element using its ID or other attributes and compares it with the provided string. If the retrieved text partially matches the expected text, the validation is successful. For non-unique element identifiers, an index can be used to specify the exact element to check, making this action particularly useful for validating dynamic or repetitive content.

---

## Scenarios

### Scenario 1

#### Title:
Validate Partial Text in a Confirmation Message  
Test case link: [TEST-11417 Validate partial text](https://qa.automationsolutionz.com/Home/ManageTestCases/Edit/TEST-11417/)

#### Scenario Overview:
Imagine a user has successfully logged into a website and sees a confirmation message, "Login Successful". This scenario demonstrates how to use the "Validate Partial Text" action to verify that the confirmation message contains the partial text "Successful".

#### Steps to Follow:
1. Navigate to the login page.
2. Submit the form using valid data.
3. Wait for the confirmation message to appear.
4. Use the "Validate Partial Text" action to check if the message contains the text "Successful".

#### Actions:

| Parameter              | Type                | Value       |
|------------------------|---------------------|-------------|
| *text                  | element parameter   | Successful  |
| validate partial text  | selenium action     | verified    |

- Here, the asterisk sign is used to indicate that the text will be matched partially.

#### Expected Result:
- The action successfully validates the presence of the partial text within the confirmation message.
- No errors occur during the validation process.

#### Common Errors and Fixes:
- **Error**: The confirmation message is not displayed.
  - **Fix**: Ensure the login is successful and wait for the message to load.
- **Error**: The partial text does not match.
  - **Fix**: Double-check the expected text for accuracy and ensure the correct element is being targeted.

---