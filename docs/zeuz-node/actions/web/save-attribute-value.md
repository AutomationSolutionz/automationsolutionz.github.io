---
id: save-attribute-value
title: Save Attribute Value
---

## Purpose
The "Save Attribute Value" action is used to extract and save the value of a specific attribute from a designated element on a webpage or application. This is particularly useful for validating UI elements, debugging, and performing dynamic comparisons in test automation.

This action requires "element parameters" to locate the target element and specify the attribute whose value needs to be saved. The extracted value can then be used in future validations or test steps.

## Scenarios

### Scenario 1

#### Title:
Save the "Price" Value of a Product for Future Validation  
Test case link: [TEST-8545 Save attribute value](https://qa.automationsolutionz.com/Home/ManageTestCases/Edit/TEST-8545/)

#### Scenario Overview:
On an e-commerce website, product prices are displayed dynamically. To validate the price of a specific product later in the test flow, the user needs to extract and store its value. This scenario demonstrates how to use the "Save Attribute Value" action to capture and store the price.

#### Steps to Follow:
1. Open the e-commerce website that contains the product listings.
2. Identify the product for which the price needs to be saved.
3. Locate the price element using a stable attribute, such as a class, data attribute, or XPath.
4. Use the "Save Attribute Value" action to extract the price text.
5. Store the extracted price value for future use.

#### Actions:

| Parameter        | Type                 | Value           |
|------------------|----------------------|-----------------|
| class            | element parameter    | card-body       |
| index            | element parameter    | 0               |
| class            | save parameter       | value           |
| save attribute   | selenium action      | save attribute  |

#### Expected Result:
- The price value of the product has been successfully retrieved.
- The stored value can be used for subsequent validations, such as verifying price consistency across pages.

#### Common Errors and Fixes:
- **Error**: The price element cannot be located.
  - **Fix**: Ensure that the locator strategy is accurate and uniquely identifies the price element.
- **Error**: The extracted price value is either empty or incorrect.
  - **Fix**: Verify that the selected attribute contains the correct price and is not loaded dynamically after the initial page render. Use wait mechanisms if necessary.