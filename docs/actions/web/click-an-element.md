---
id: click-an-element
title: Click an Element
---

## Purpose
The "Click an Element" action allows interaction with elements on a webpage, such as buttons or links. The element can be located using its ID, class, or visible text to perform the click action.

---

## Scenarios

### Scenario 1

#### Title:
Click an Element Using a Full ID Match  
Test case link: [TEST-11414 Click an element using ID match](https://qa.automationsolutionz.com/Home/ManageTestCases/Edit/TEST-11414/#parentHorizontalTab2 )

#### Scenario Overview:
Imagine a user is on the login page of a website. After entering their username and password, the user wants to log in by clicking the "Sign in" button. This scenario demonstrates how to use the "Click an Element" action to interact with the button identified by its full ID property.

#### Steps to Follow:
1. Navigate to the login page of the website.
2. Enter valid credentials in the **Username** and **Password** fields.
3. Ensure that the **Login** button is visible and accessible on the page.
4. Use the "Click an Element" action with the full ID property of the target element.
5. Verify that the user is successfully logged in and redirected to the homepage or dashboard.

#### Actions:

| Parameter     | Type              | Value      |
|---------------|-------------------|------------|
| id            | element parameter | signin_id  |
| click         | selenium action   | click      |

#### Expected Result:
- The **Login** button is clicked without errors.
- The user is successfully logged in.

#### Common Errors and Fixes:
- **Error**: The button is not clickable.
  - **Fix**: Ensure that the ID provided in the action matches the actual ID of the button on the webpage.
- **Error**: The login fails.
  - **Fix**: Verify that the username and password entered are correct, and ensure that the **Login** button is not disabled.

---

### Scenario 2

#### Title:
Click an Element Using Text Match  
Test case link: [TEST-11372 Click an element using text match](https://qa.automationsolutionz.com/Home/ManageTestCases/Edit/TEST-11372/#parentHorizontalTab2)

#### Scenario Overview:
Imagine a webpage featuring several buttons labeled with different texts, such as "Sign in", "Cancel", or "Submit". To proceed to the next step in a checkout process, a user needs to click the "Sign in" button. This scenario demonstrates how to use the "Click an Element" action to identify and click the target button using its visible text.

#### Steps to Follow:
1. Locate the button with the visible text **"Sign in"** on the webpage.
2. Use the "Click an Element" action to match the button using its **text property**.
3. Verify that the button is clicked and the expected action occurs.

#### Actions:

| Parameter      | Type               | Value       |
|----------------|--------------------|-------------|
| text           | element parameter  | Sign in     |
| click          | selenium action    | click       |

#### Expected Result:
- The **"Sign in"** button is clicked successfully.
- The user is navigated to the payment details page in the checkout process without any errors.

#### Common Errors and Fixes:
- **Error**: The button with the specified text is not found.
  - **Fix**: Ensure that the button text matches exactly, including case sensitivity.
- **Error**: The page does not navigate after clicking.