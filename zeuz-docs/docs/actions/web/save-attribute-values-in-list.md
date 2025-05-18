---
id: save-attribute-values-in-list
title: Save Attribute Values in List
---

## Purpose
The "Save Attribute Values in List" action is designed to extract data from a table or webpage and store it as a structured list. This action can capture multiple items and organize them into nested lists, accomodating scenarios with multiple rows or sets of data. By scanning the specified elements, the action retrieves the data and formats it systematically, enabling efficient management and seamless access for further automation or analysis.

---

## Scenarios

### Scenario 1

#### Title:
Extract Product Names and Prices from an E-commerce table  
Test case link: [TEST-8545 Save attribute value in list](https://qa.automationsolutionz.com/Home/ManageTestCases/Edit/TEST-8545/)

#### Scenario Overview:
An e-commerce webpage displays a list of products with their names and prices in a tabular format. The user needs to extract this information and store it in a structured list format for later validation or processing.

#### Steps to Follow:
1. Open the e-commerce webpage that contains the product table.
2. Locate the product names and prices using stable locators.
3. Use the "Save Attribute Values in List" action to extract the values.
4. Store the extracted data in a list of lists format: `[[Product1, Price1], [Product2, Price2],......]`.

#### Actions:

|Parameter        |Type             |Value          |
|-----------------|-----------------|---------------|
|id           |element parameter|portfolio  |
|click   |selenium action  |click  |
|attributes| target parameter|class="productItemName",return="text"|
|attributes|target parameter|class="price medium salePrice ",return="text"|
|paired|optional parameter|yes|
|save attribute values in list|selenium action|attribute_values_in_list|

#### Expected Result:
- The product names and prices have been successfully extracted.
- The values are stored in an organized list format for further use.

#### Common Errors and Fixes:
- **Error**: The data is incomplete or missing.
  - **Fix**: Ensure that the correct locators are used and that the elements are fully loaded before extraction.
- **Error**: The structure of the extracted list is incorrect.
  - **Fix**: Verify that the elements are grouped correctly during the extraction process.

---