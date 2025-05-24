---
id: upload-a-file
title: Upload a File
---

## Purpose
This action automates file uploads using Selenium. It handles cases where the file upload button is located directly on the webpage, as well as scenarios requiring interaction with operating system-level file upload dialogs, utilizing the Microsoft System API and PyAutoGUI. 

---

## Scenarios

### Scenario 1

#### Title

Upload a file using the standard upload button

Sample test case: [TEST-7987 Upload a file using the standard upload button](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-7987/)

#### Scenario Overview
Imagine a user needs to upload a document to a web application using a visible upload button. This scenario demonstrates how to use the "Upload File" action to select and upload a file.

#### Steps to Follow
1. Navigate to a webpage that contains an upload button.
2. Use the "Upload a File" action to identify the upload button using an element parameter (e.g., `tag`).
3. Provide the absolute file path as input.
4. Verify that the file has been successfully uploaded.

#### Actions

|  Parameter   |  Type               |  Value                                             |
|--------------|---------------------|----------------------------------------------------|
|  clear       |  optional option    |  false                                             |
|  tag         |  element parameter  |  input                                             |
|  type        |  element parameter  |  file                                              |
|  text        |  selenium action    |  C:\Users\Msi\Downloads\contact_us_test_cases.csv  |

#### Expected Result
- The file has been successfully uploaded and is visible in the application's user interface (UI).

#### Common Errors and Fixes
- **Error**: The file path is invalid.
  - **Fix**: Provide the full absolute file path, not a relative one (e.g., `C:\Users\Msi\Downloads\contact_us_test_cases.csv`).

---

## Test Case

### Test Case for Scenario 1

#### Objective
Ensure that file upload via a standard upload button works correctly.

#### Steps to Perform
1. Open a web application that includes an upload form.
2. Use the action with inputs:
   - **Inputs**:
    - **Element parameters** (e.g., `tag: input`) and file path.
    - **Example**: `(tag, element parameter, input)`
    - **Example**: `(text, selenium action, %|log.rtf|%)`
3. Verify that the file appears in the application after upload.

#### Expected Outcome
- The file is successfully uploaded, and a confirmation message is displayed in the application.

---

## Additional Tips for this Action
- Use full file paths (e.g., `C:\Users\Msi\Downloads\contact_us_test_cases.csv`) for reliable uploads.
- Enable interaction with hidden elements by setting `allow_hidden` to `yes` for complex web pages.
- Try simpler methods, such as the "Enter Text" action, before using PyAutoGUI.

---

### Error handling for Upload a File

#### Common Problems and Their Fixes
1. **Problem**: File not found.  
   **Possible Cause**: The file path is incorrect or specified as a relative path.  
   **How to Fix**: Use an absolute file path and confirm that the file exists.

2. **Problem**: The upload button is hidden.  
   **Possible Cause**: The element is hidden or not visible.  
   **How to Fix**: Set `allow_hidden` to `yes` in the action parameters.

3. **Problem**: The OS-level dialog fails to respond to interactions.  
   **Possible Cause**: Incorrect file path or missing PyAutoGUI configuration.  
   **How to Fix**: Ensure that PyAutoGUI is correctly configured and the file path is valid.

---
