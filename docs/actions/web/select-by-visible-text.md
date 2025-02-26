---
id: select-by-visible-text
title: Select by Visible Text
---

## Purpose
The "Select by Visible Text" action allows you to select or deselect an option from a dropdown menu by matching the visible text displayed to the user. It works with the HTML `<select>` tag and utilizes Selenium WebDriver's `Select` class to identify the desired option. Instead of relying on the option's index or value, this action matches the displayed text, making it ideal for scenarios where visible text is the primary selection criterion. This ensures accurate and user-friendly interaction with dropdown menus.

---

## Scenarios

### Scenario 1

#### Title:
Select an Option from a Dropdown Using Visible Text  
Test case link: [TEST-11443 Dropdown selection](https://qa.automationsolutionz.com/Home/ManageTestCases/Edit/TEST-11443/#parentHorizontalTab2)

#### Scenario Overview:
Imagine a user is filling out a form to book a flight and needs to select their country from a dropdown menu. This scenario demonstrates how to use the "Select by Visible Text" action to select the country based on the visible text displayed in the dropdown.

#### Steps to Follow:
1. Open the webpage that contains the flight booking form.
2. Locate the dropdown menu for the "Country" field using its ID or other attributes.
3. Use the "Select by Visible Text" action to select the desired country, such as **"Bangladesh"**.
4. Verify that the selected country is displayed in the dropdown.

#### Actions:

| Parameter                | Type                | Value     |
|--------------------------|---------------------|-----------|
| id                       | element parameter   | country   |
| select by visible text   | selenium action     | Bangladesh|

#### Expected Result:
- The dropdown menu displays the selected country, **"Bangladesh"**.
- The form processes the corresponding value for the selected option.

#### Common Errors and Fixes:
- **Error**: The dropdown does not display the selected option.
  - **Fix**: Ensure that the visible text exactly matches the text of the dropdown option.
- **Error**: The element is not interactable.
  - **Fix**: Check whether the dropdown menu is enabled and visible on the page.