---
id: upload-a-file
title: Upload a File
---

## Purpose
This action automates file uploads using Selenium. It handles cases where the file upload button is located directly on the webpage, as well as scenarios requiring interaction with operating system-level file upload dialogs, utilizing the Microsoft System API and PyAutoGUI. 

---

## Scenarios

### Scenario 1

#### Title:
Upload a file using the standard upload button  
Test case link: [TEST-7987 Upload a File](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-7987/#parentHorizontalTab2)

#### Scenario Overview:
Imagine a user needs to upload a document to a web application using a visible upload button. This scenario demonstrates how to use the "Upload File" action to select and upload a file.

#### Steps to Follow:
1. Navigate to a webpage that contains an upload button.
2. Use the "Upload a File" action to identify the upload button using an element parameter (e.g., `ID` or `class`).
3. Provide the absolute file path as input.
4. Verify that the file has been successfully uploaded.

#### Actions:
- **Input**:
  - Specify the element parameters (e.g., `ID: fileUpload`) and the file path.
  - Example: `(id, element parameter, fileUpload)`.
  - Example: `(upload file, selenium action, %|log.rtf|%)`.

#### Expected Result:
- The file uploads successfully and is visible in the application's user interface (UI).

#### Common Errors and Fixes:
- **Error**: The file path is invalid.
  - **Fix**: Provide the full absolute file path, not a relative one (e.g., `C:\Users\Documents\demo.csv`).

---

### Scenario 2

#### Title:
Upload a file through the operating system's file dialog  
Test case link: [TEST-7987 Upload a File](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-7987/#parentHorizontalTab2)

#### Scenario Overview:
Some web applications use custom upload dialogs that Selenium cannot directly interact with. This scenario demonstrates automating such dialogs using tools like PyAutoGUI.

#### Steps to Follow:
1. Navigate to the webpage with an upload button that opens an OS-level file dialog.
2. Use the "Upload a File" action in combination with PyAutoGUI to interact with the OS-level file dialog.
3. Provide the absolute file path for the file to be uploaded.
4. Confirm that the file is successfully uploaded.

#### Actions:
- **Input**:
  - Provide the absolute file path along with optional parameters such as `allow_hidden` and `use_js`.
  - Example: `(filepath, path, C:\Users\John\Documents\file.csv)`.

#### Expected Result:
- The file upload is completed through simulated interaction with the file dialog.

#### Common Errors and Fixes:
- **Error**: Hidden elements prevent interaction.
  - **Fix**: Use `allow_hidden` as an optional parameter and set it to `yes`.

---

## Test Cases

### Test Case for Scenario 1

#### Objective:
Ensure that file upload via a standard upload button works correctly.

#### Steps to Perform:
1. Open a web application that includes an upload form.
2. Use the action with inputs:
   - `ID: fileUpload`.
   - File path: `C:\Users\Documents\example.csv`.
3. Verify that the file appears in the application after upload.

#### Expected Outcome:
- The file is successfully uploaded, and a confirmation message is displayed in the application.

---

### Test Case for Scenario 2

#### Objective:
Ensure that file upload via an OS-level file dialog works correctly.

#### Steps to Perform:
1. Click the upload button to open the file upload dialog.
2. Use the action to provide the file path: `~\Documents\file.csv`.
3. Verify that the file upload completes successfully.

#### Expected Outcome:
- The file is uploaded, and the application reflects the upload status.

---

## Additional Tips for this Action
- Use full file paths (e.g., `C:\Users\John\Documents\file.csv`) for reliable uploads.
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
