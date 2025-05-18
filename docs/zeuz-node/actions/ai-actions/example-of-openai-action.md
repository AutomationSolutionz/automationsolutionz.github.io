---
id: example-of-openai-action
title: Examples of OpenAI action
---

This action enables the extraction of text or strings from images. By default, the output is returned in **JSON** format. It is possible to customize the prompt and specify the desired output format. Additionally, if needed, the exact text can be extracted as plain text.

### How will the action be performed?

**Data:**

<table>
 <tr>
  <th>Parameter</th>
  <th>Type</th>
  <th>Value</th>
</tr>
<tr>
  <td>image</td>
  <td>input parameter</td>
  <td>
  ***Path to the image file.
  Examples: "E:\user\files\Sample.jpg" or %|Sample.jpg|%
  </td>
</tr>

<tr>
  <td>prompt</td>
  <td>optional parameter</td>
  <td>***Enter your prompt***</td>
</tr>

<tr>
 <td>output format</td>
 <td>optional parameter</td>
 Enter your output format. It can be json, list, csv, html.
Examples:

“exact text” or
```
{
    "key": "value",
    "key": "value",
    "items": [
        {
            "key": "value",
            "key": "value"
        }
    ]
}
```
</tr>

<tr>
 <td>extract image to data</td>
 <td>utility action</td>
 <td>***The variable name that will store the extracted strings. By default the output will be a JSON format.***</td>
</tr>
</table>

### Default Format Scenario

If no prompt or output format is specified, the data will be returned in **JSON** format.

**Data:**

<table>
 <tr>
  <th>Parameter</th>
  <th>Type</th>
  <th>Value</th>
</tr>

<tr>
  <td>image</td>
  <td>input parameter</td>
  <td>"E:\user\files\Sample.jpg"</td>
</tr>

<tr>
  <td>extract image to data</td>
  <td>utility action</td>
  <td>my_text</td>
</tr>
</table>

Output will be in this **JSON** structure:

```json
{
    "extracted_text": {
        "full_text": "Full text extracted from the document.",
        "fields": {
            "document_title": "Document title or header, if available.",
            "document_body": "Document body, if available.",
            "company_details": {
                "name": "Company name, if present.",
                "address": "Company address, if present.",
                "contact": {
                    "phone": "Company phone number, if present.",
                    "email": "Company email, if present.",
                    "website": "Company website, if present."
                }
            },
            "customer_details": {
                "name": "Customer name, if present.",
                "address": "Customer address, if present.",
                "contact": {
                    "phone": "Customer phone number, if present.",
                    "email": "Customer email, if present.",
                    "website": "Customer website, if present."
                }
            },
            "identifiers": {
                "id_number": "Unique identifier such as license, account, or ID number.",
                "invoice_number": "Invoice number, if applicable.",
                "tax_id": "Tax or VAT ID, if applicable."
            },
            "dates": {
                "issue_date": "Document issue date, if applicable.",
                "expiry_date": "Document expiry date, if applicable."
            },
            "financial_data": {
                "total_amount": "Total monetary amount, if present.",
                "written_amount": "Total written monetary amount, if present.",
                "currency": "Currency of the total amount."
            },
            "custom_fields": {
                "field_1": "Custom field for any additional information.",
                "field_2": "Another custom field."
            }
        },
        "table_data": [
            {
                "row_id": 1,
                "cells": [
                    "Column 1 data",
                    "Column 2 data",
                    "Column 3 data"
                ]
            },
            {
                "row_id": 2,
                "cells": [
                    "Row 2 Column 1 data",
                    "Row 2 Column 2 data",
                    "Row 2 Column 3 data"
                ]
            }
        ]
    }
}
```

### Example:

**Input:**

![](/img/example-of-openai-action/written-img.png)

**Output:**

```json
{
    "extracted_text":{
        "full_text": "Loren Ipsum is simply dummy text 
         of the printing and typesetting industry. Loren
         Ipsum has\nbeen the industry's standard dummy
         text ever since the 1500s, when an unknown
         printer took a \n\nPURA PURA 08/15/2024\n",
        "fields":{
            "title": "Loren Ipsum is simply dummy text
             of the printing and typesetting industry.",
            "dates":{
                "issue_date": "08/15/2024"
            },
            "custom_fields":{
                "field_1": "PURA PURA"
            }
        }
    }
    
}
```

### Another example related to Invoice/Bill:

**Input:**

![](/img/example-of-openai-action/invoice-bill.jpg)

**Output:**

```json
{
    "extracted_text":{
        "full_text": "Invoice/Bill\nMOB:
        9643340071\nMINT RELOCATION PACKERS
        and MOVERS\nL-39, Kirti Nagar,
        Block-L, Kirti Nagar, New Delhi-110015\nWebsite:
        www.mintrelocationpackers.in\nEmail:
        relocationcompanyindia@gmail.com\n
        GST NO: 07EKYPK0645H1ZP\nBill No.: 4524
        Date: 24/05/24\nM/s.: Suraj Singh\nKirti Nagar,
        New Delhi To Kolkata (WB)
        \nPARTICULARS\nTransport Charge: 32,000\nPacking Charge:7,000\nLoading: 4,000\nUnloading: 
        4,000\nOther Charge: \nST Charge: \nInsurance: 
        \nGreen tax: \nGST: \nRupees in Words: Forty Seven Thousand Only\nTotal: 47,000\nCertified that the
        particular given above are true and correct\nTerms
        & Conditions:\n1) Expense & GST will be given by 
        the party if party cancels the order.\n2) Full
        payment before departure of vehicle.\n3) All
        disputes are subject to Pune jurisdiction only.",
           "fields":{
             "document_title": "Invoice/Bill",
             "company_details":{
                "name": "Mint Relocation Packers and Movers",
                "address": "L-39, Kirti Nagar, Block-L, Kirti Nagar, New Delhi-110015",
                "contact":{
                    "phone": "9643340071",
                    "email": "relocationcompanyindia@gmail.com",
                    "website": "www.mintrelocationpackers.in"
                }
             },
             "customer_details":{
                "name": "Suraj Singh",
                "address": "Kirti Nagar, New Delhi To Kolkata (WB)",
                "contact":{
                    "phone": null,
                    "email": null,
                    "website": null
                }
             },
             "identifiers":{
                "id_number": null,
                "invoice_number": "4524",
                "tax_id": "07EKYPK0645H1ZP"
             },
             "dates":{
                "issue_date": "2024-05-24",
                "expiry_date": null
             },
             "financial_data":{
                "total_amount": "47,000",
                "written_amount": "Forty Seven Thousand Only",
                "currency": "INR"
             },
             "custom_fields":{
                "field_1": null,
                "field_2": null
             }
           },
           "table_data":[
            {
                "row_id": 1,
                "cells": ["Transport Charge", "", "32,000"]
            },
            {
                "row_id": 2,
                "cells":["Packing Charge", "", "7,000"]
            },
            {
                "row_id": 3,
                "cells":["Loading", "", "4,000"]
            },
            {
                "row_id": 4,
                "cells":["Unloading", "", "4,000"]
            }
           ]
    }
}
```

### For Extracting Exact Text Scenario

To extract exact text from an image, specify "exact text" in the output format, and it will be returned as plain text. Additionally, the output will be saved into the specified variable, which can later be used as a Python variable.

**The prompt we use**

"Extract the text from the given image as accurately as possible, including all words, punctuation, and formatting. Ensure that no text is omitted or altered during the extraction process. Return the data in plain text."

**Data:**

<table>
 <th>Parameter</th>
 <th>Type</th>
 <th>Value</th>
  <tr>
   <td>image</td>
   <td>input parameter</td>
   <td>"E:\user\files\Sample.jpg"</td>
 </tr>

 <tr>
  <td>output format</td>
  <td>optional parameter</td>
  <td>exact text</td>
</tr>

<tr>
 <td>extract image to data</td>
 <td>utility action</td>
 <td>my_text</td>
</tr>
</table>

### Example 1:

**Input:**

![](/img/example-of-openai-action/invoice.jpg)

**Output:**

![](/img/example-of-openai-action/extract-image.png)

### Example 2:

**Input:**

![](/img/example-of-openai-action/written-img.png)

**Output:**

![](/img/example-of-openai-action/text-img.png)

### User's Custom Prompt and Output Format Scenario

In this action, users can define their prompt, output format or both. The output will be generated according to the user's instructions.

:::note

Output format can be JSON, LIST, HTML, CSV.

:::

**1**. If the user specifies only the prompt, the output will be generated based on the given prompt.

**Data:**

<table>
 <th>Parameter</th>
 <th>Type</th>
 <th>Value</th>
  <tr>
    <td>image</td>
    <td>input parameter</td>
    <td>"E:\users\files\Invoice.jpg"</td>
  </tr>

  <tr>
    <td>prompt</td>
    <td>Optional parameter</td>
    <td>Return only Total price</td>
  </tr>

  <tr>
    <td>extract image to data</td>
    <td>utility action</td>
    <td>my_text</td>
  </tr>
</table>

### Example 1:

**Input:**

![](/img/example-of-openai-action/invoice-img.png)

**Output:**

my_text = "$154.06"

**Data:**

<table>
 <th>Parameter</th>
 <th>Type</th>
 <th>Value</th>
  <tr>
   <td>image</td>
   <td>input parameter</td>
   <td>"E:\user\files\card.jpg"</td>
  </tr>

  <tr>
   <td>prompt</td>
   <td>Optional parameter</td>
   <td>Return only id and name in html format.</td>
  </tr>

  <tr>
   <td>extract image to data</td>
   <td>utility action</td>
   <td>my_text</td>
  </tr>
</table>

### Example 2:

**Input:**

![](/img/example-of-openai-action/driver-license.jpg)

**Output:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
content="width=device-width, initial-scale=1.0">
    <title>Driver License Info</title>
</head>
<body>
    <p>ID: 123456789-005</p>
    <p>Name: Name Surname</p>
</body>
</html>
```

**2**. If the user specifies only the output format, the default prompt will be used, and the output format will follow the user-defined format. Output format can be **JSON**, **LIST**, **HTML**, **CSV**.

**Default Prompt:** The system is a highly accurate text extraction tool designed to process images and extract textual content. Its primary goal is to extract the text exactly as it appears in the image, including symbols, numbers, and special characters, without interpreting or altering its meaning. The output ensures the original order is preserved and includes all text without modifications or exclusions. When metadata such as dates, amounts, or specific fields is clearly identifiable, the extracted data is structured into nested JSON objects.

**Data Table:**

**Row 1:**

**Parameter:** image  
**Type:** input parameter  
**Value:** "E:\user\files\Invoice.jpg"

**Row 2:**

**Parameter:** output format  
**Type:** Optional parameter  
**Value:**  
```json
{
    "extracted_text":{
        "fields":{
            "document_title": "value",
            "company_details":{
                "name": "value",
                "address": "value"
            },
            "customer_details":{
                "name": "value",
                "address": "value"
            },
            "invoice_info":{
                "invoice_number": "value",
                "po_number": "value",
                "issue_date": "value",
                "due_date": "value"
            },
        },
        "items":[
            {
                "QTY": "value",
                "DESCRIPTION": "value",
                "UNIT PRICE": "value",
                "AMOUNT": "value",
            },
            {
                "QTY": "value",
                "DESCRIPTION": "value",
                "UNIT PRICE": "value",
                "AMOUNT": "value",
            },
        ],
        "Total info":{
            "Sub total": "value",
            "tax": "value",
            "Total": "value",
        },
    }
}
```

**Row 3:**

**Parameter:** extract image to data  
**Type:** utility action  
**Value:** my_text

### Example 1:

**Input:**

![](/img/example-of-openai-action/invoice-img.png)

**Output:**

```json
{
    "extracted_text":{
        "fields":{
            "document_title": "INVOICE",
            "company_details":{
                "name": "East Repair Inc.",
                "address": "1912 Harvest Lane\nNew York, NY 12210"
            },
            "customer_details":{
                "name": "John Smith",
                "address": "2 Court Square\nNew York, NY 12210"
            },
            "invoice_info":{
                "invoice_number": "US-001",
                "po_number": "2312/2019",
                "issue_date": "11/02/2019",
                "due_date": "26/02/2019"
            }
        },
        "items":[
            {
                "QTY": "1",
                "DESCRIPTION": "Front and rear brake cables",
                "UNIT PRICE": "100.00",
                "AMOUNT": "100.00"
            },
            {
                "QTY": "2",
                "DESCRIPTION": "New set of pedal arms",
                "UNIT PRICE": "15.00",
                "AMOUNT": "30.00"
            },
            {
                "QTY": "3",
                "DESCRIPTION": "Labor 3hrs",
                "UNIT PRICE": "5.00",
                "AMOUNT": "15.00"
            }
        ],
        "Total info":{
            "Sub total": "145.00",
            "tax": "9.06",
            "Total": "$154.06"
        }
    }
}
```

**Data:**

<table>
 <th>Parameter</th>
 <th>Type</th>
 <th>Value</th>
 <tr>
  <td>image</td>
  <td>input parameter</td>
  <td>"E:\user\files\card.jpg"</td>
 </tr>

 <tr>
  <td>output format</td>
  <td>Optional parameter</td>
  <td>[id, name, iss date, exp date]</td>
 </tr>

 <tr>
  <td>extract image to data</td>
  <td>utility action</td>
  <td>my_text</td>
 </tr>
</table>

### Example 2:

**Input:**

![](/img/example-of-openai-action/driver-license.jpg)

**Output:**

my_text = ["123456789-005", "NAME
SURNAME", "12.03.2012", "12.08.2020"]

**3.** If the user specifies both the prompt and the output format, the output will be generated based on the given prompt and format.

**Data Table:**

**Row 1:**

**Parameter:** image  
**Type:** input parameter  
**Value:** "E:\user\files\card.jpg"

**Row 2:**

**Parameter:** prompt  
**Type:** Optional parameter  
**Value:** Extract text from the image.

**Row 3:**

**Parameter:** output format  
**Type:** Optional parameter  
**Value:**
```html
<h2>Title</h2>
<table>
    <thead>
        <tr>
            <th>#</th>
            <th>ID</th>
            <th>Name</th>
            <th>Issue date</th>
            <th>Exp date</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>value</td>
            <td>value</td>
            <td>value</td>
            <td>value</td>
            <td>value</td>
        </tr>
    </tbody>
</table>
```

**Row 4:**

**Parameter:** extract image to data  
**Type:** utility action  
**Value:** my_text

### Example 1:

**Input:**

![](/img/example-of-openai-action/driver-license.jpg)

**Output:**

```html
my_text = <h2>Driver License</h2>
<table>
    <thead>
        <tr>
            <th>#</th>
            <th>ID</th>
            <th>Name</th>
            <th>Issue date</th>
            <th>Exp date</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>123456789-005</td>
            <td>Name Surname</td>
            <td>12.03.2012</td>
            <td>12.08.2020</td>
        </tr>
    </tbody>
</table>
```

**Data:**

<table>
 <th>Parameter</th>
 <th>Type</th>
 <th>Value</th>

  <tr>
   <td>image</td>
   <td>input parameter</td>
   <td>"E:\user\files\invoice.jpg"</td>
  </tr>

  <tr>
   <td>prompt</td>
   <td>Optional parameter</td>
   <td>Return only total information.</td>
  </tr>

  <tr>
   <td>output format</td>
   <td>Optional parameter</td>
   <td>["text1", "text2"]</td>
  </tr>

  <tr>
   <td>extract image to data</td>
   <td>utility action</td>
   <td>my_text</td>
  </tr>
</table>

### Example 2:

**Input:**

![](/img/example-of-openai-action/invoice.jpg)

**Output:**

```
my_text = = [

    "11,85",

    "1,12
]
```
