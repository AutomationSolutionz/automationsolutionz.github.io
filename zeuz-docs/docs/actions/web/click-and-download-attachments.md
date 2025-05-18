---
id: click-and-download-attachments
title: Click and Download Attachments
---

## Purpose
The "Click and Download Attachments" action enables users to interact with attachment elements on a webpage, allowing them to download files to a specified directory or attach files to reports. This action facilitates automated file management by ensuring that downloads and attachments are handled efficiently without manual intervention.

---

## Scenarios

### Scenario 1

#### Title:
Download an Attachment from a Webpage  
Test case link: [TEST-11420 Click and download attachment](https://qa.automationsolutionz.com/Home/ManageTestCases/Edit/TEST-11420/)

#### Scenario Overview:
A user needs to download a document from a webpage, such as a PDF invoice or a report. This scenario verifies that the attachment is correctly located and successfully downloaded to the predefined directory.

#### Steps to Follow:
1. Navigate to the webpage containing the attachment.
2. Locate the attachment element using a stable identifier, such as its ID, class, text, or XPath.
3. Click on the attachment to initiate the download.
4. Verify that the file is downloaded and saved in the predefined directory.

#### Actions:

|Parameter        |Type             |Value          |
|-----------------|-----------------|---------------|
|wait for download          |optional parameter|10  |
|filepath | optional parameter | %\|zeuz_download_folder\|%
|text  |element parameter | Download |
|click and download | selenium action | click and download

#### Expected Result:
- The attachment is successfully downloaded to the specified directory.
- The downloaded file matches the expected format (e.g., PDF, DOCX).

#### Common Errors and Fixes:
- **Error**: The attachment element is not found.
  - **Fix**: Ensure that the locator is correct and the page has fully loaded before clicking.
- **Error**: The file fails to download.
  - **Fix**: Check the browser settings to allow automatic downloads.

---