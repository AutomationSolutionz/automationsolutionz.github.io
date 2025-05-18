---
id: extract-table-data
title: Extract Table Data
---

## Purpose
This action extracts data from an HTML table element, which includes tags such as `<table>`, `<tbody>`, `<tr>`, and `<td>`. The data is captured in a structured format as a list of lists, where each inner list represents a row in the table. This approach facilitates the organized and programmatic processing of table data.

---

## Scenarios

### Scenario 1

#### Title:
Extract all data from the table  
Test case link: [TEST-7993 Extract all data from the table](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-7993/)

#### Scenario Overview:
A user needs to extract all data from a table on a webpage. This scenario demonstrates how to capture the entire table's content in a structured format as a list of lists, where each inner list represents a row of the table.

#### Steps to Follow:
1. Open a webpage that contains a table.
2. Identify the `<table>` element on the webpage.
3. Use the "Extract Table Data" action to capture the entire table.
4. Verify that the table's data is correctly stored as a list of lists.

#### Actions:

| Parameter           | Type                | Value         |
|---------------------|---------------------|---------------|
| tag                 | element parameter   | tbody         |
| column              | optional parameter  | 5:10          |
| row                 | optional parameter  | 5:10          |
| extract table data  | selenium action     | variable_name |

- However, column and row attributes can also be used as optional parameters if necessary.

#### Expected Result:
-The entire table's data is extracted and stored in a structured format as a list of lists, where each inner list represents a row from the table.

#### Common Errors and Fixes:
- **Error**: The table data is not captured.
  - **Fix**: Ensure that the correct table element (e.g., tag, class, or id) is specified and that the table is not hidden.

---

### Scenario 2

#### Title:
Extract specific columns from the table  
Test case link:[TEST-8041 Extract specific columns from the table]

#### Scenario Overview:
A user wants to extract only certain columns from a table. This scenario demonstrates how to extract specific columns by specifying their indices.

#### Steps to Follow:
1. Open a webpage that contains a table.
2. Identify the `<table>` element on the webpage.
3. Use the "Extract Table Data" action to specify the columns (e.g., columns 0 to 5).
4. Verify that the specified columns are correctly extracted from the table and stored in the desired format.

#### Actions:

| Parameter           | Type               | Value         |
|---------------------|--------------------|---------------|
| tag                 | element parameter  | tbody         |
| column              | optional parameter | 0:5           |
| extract table data  | selenium action    | variable_name |

#### Expected Result:
- Only the data from columns 0 to 5 is extracted, with each row containing data from the selected columns.

#### Common Errors and Fixes:
- **Error**: The specified columns are not extracted.
  - **Fix**: Double-check the column indices and ensure that the data exists within the specified range.

---

## Test Cases

### Test Case for Scenario 1

#### Objective:
Ensure that all data from the table is extracted correctly.

#### Steps to Perform:
1. Open a webpage that contains a table.
2. Use the action with inputs:
   - Element parameter: `tag = tbody`
   - Selenium action: `extract table data`
3. Verify that the entire table data is stored as a list of lists.

#### Expected Outcome:
- The entire table's data should be extracted and stored correctly as a list of lists, where each inner list represents a row from the table.

---

### Test Case for Scenario 2

#### Objective:
Ensure that the specific columns from the table are extracted correctly.

#### Steps to Perform:
1. Open a webpage that contains a table.
2. Use the action with inputs:
   - Element parameter: `tag = tbody`
   - Optional parameter: `column = 0:5`
   - Selenium action: `extract table data`
3. Verify that the specified columns are correctly extracted from the table and stored in the desired format.

#### Expected Outcome:
- Only the data from the specified columns is extracted, with each row containing data from those columns.

---

### Data Format

#### Action:

To extract table data, the following data format is used:

| Step Name          | Step Type  | Step Actions                                                                                                                                                         |
|--------------------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Go To Webpage      | automated  | [ [ ( 'go to link' , 'selenium action' , 'https://example.com/table' ) ] ]                                                                                      |
| Extract Table Data | automated  | [ [ ( 'tag' , 'element parameter' , 'table' ) , ( 'extract table data' , 'selenium action' , 'my_table_data' ) ] ]                                              |
| Tear Down Selenium | automated  | [ [ ( 'tear down browser' , 'selenium action' , 'teardown' ) ] ]                                                                                                 |
