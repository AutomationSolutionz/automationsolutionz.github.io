---
title: Copy Image into Browser
---

This action copies an image from an attachment file path or a variable into the browser's clipboard for pasting using **Ctrl+V** (Windows/Linux) or **Cmd+V** (macOS) via keystroke simulation. Only **PNG** and **SVG** formats are supported in Chromium-based browsers.

---

## Purpose
This action is typically used in test automation scenarios where an image needs to be inserted into a rich-text editor, form field or chat box inside a web browser that supports direct image pasting.

### Table: Input Parameters for Copy Image into Browser Action

|  Parameter       |  Type              |  Value                                                                |
|------------------|--------------------|-----------------------------------------------------------------------|
|  image file      |  input parameter   |  attachment image name (e.g.,  `%\|image.png\|%`)                     |
|  image variable  |  input parameter   |  Name of a variable storing the image path (e.g., `%\|image_var\|%`)  |

---

### Action Behavior
- **Reads the image** from the specified path or variable.
- **Encodes the image** in Base64 format and writes it to the clipboard using JavaScript or the Chrome DevTools Protocol (CDP).
- **Paste the image manually** after execution using **Ctrl+V** (Windows/Linux) or **Cmd+V** (macOS).

---

### Examples

#### Example 1: Direct File Name from Attachment

|  Parameter                |  Type             |  Value                    |
|---------------------------|-------------------|---------------------------|
|  image file               |  input parameter  |  %\|image.png\|%          |
|  copy image into browser  |  selenium action  |  copy image into browser  |

#### Example 2: Variable-Based Path

|  Parameter                |  Type             |  Value                    |
|---------------------------|-------------------|---------------------------|
|  image variable           |  input parameter  |  %\|image_var\|%          |
|  copy image into browser  |  selenium action  |  copy image into browser  |

---

### System and File Requirements
1. **Valid Path**: The image must exist at the specified file path or attachment location.
2. **Supported Formats**:
   - `.png` → MIME type: `image/png`
   - `.svg` → MIME type: `image/svg+xml`
3. **Browser Context**: Must be executed in a Chromium-based browser (e.g., Google Chrome, Microsoft Edge).

---

### Error Handling
- Fails If:
  - The image path does not exist.
  - Unsupported file format (not PNG or SVG).
  - The clipboard write operation fails.
- Logs detailed error messages for troubleshooting.

---

## Test Case Scenario of "Copy Image into Web" Action

### Title
Copy and Paste Image into Web

Sample test case: [TEST-8225 Copy and Paste Image into Web](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8225/)

### Scenario Overview
This test case is designed to verify the functionality of copying and pasting an image into a web application. The test involves navigating to a specific website, copying an image from an attachment, and pasting it into the web application. The test is executed on different operating systems (Windows, Linux, and Mac) to ensure compatibility and functionality across platforms.

### Steps to Follow
1. Go to the website.
2. Copy the image from the attachment.
3. Paste the copied image on Windows and Linux systems.
4. Paste the copied image on Mac.
5. Validate that the paste action was successful.

### Actions

#### Copy the image from the attachment

    **1. Copy the saved variable from the attachment**

    |  Parameter                |  Type             |  Value                    |
    |---------------------------|-------------------|---------------------------|
    |  image variable           |  input parameter  |  `%\| png_img \|%`        |
    |  copy image into browser  |  selenium action  |  copy image into browser  |

    **2. Copy the file name of the direct attachment image**

    |  Parameter                |  Type             |  Value                    |
    |---------------------------|-------------------|---------------------------|
    |  image variable           |  input parameter  |  `%\| zeuz-logo.png \|%`  |
    |  copy image into browser  |  selenium action  |  copy image into browser  |

    **3. Paste the copied image on Windows and Linux systems**

    |  Parameter        |  Type             |  Value         |
    |-------------------|-------------------|----------------|
    |  keystroke keys   |  selenium action  |  Ctrl+V        |

    **4. Paste the copied image on Mac**

    |  Parameter        |  Type             |  Value         |
    |-------------------|-------------------|----------------|
    |  keystroke keys   |  selenium action  |  Cmd+V         |

### Expected Result
- The image should be successfully copied or pasted into the target web element, with visible confirmation such as display or upload preview.

### Common Errors and Fixes
- **Error**: The image was not copied to the clipboard.
  - **Fix**: Ensure the image is **png** or **svg** and your image is present to the attachment.
- **Error**: The paste action does not work.
  - **Fix**: Make sure the target field supports image pasting and is focused before the action.
- **Error**: There is no visual confirmation after the paste action.
  - **Fix**: Add a short **Wait** or use **Validate** to confirm the image appears after the paste.
- **Error**: The incorrect image was pasted.
  - **Fix**: Re-copy the correct image just before pasting to ensure accuracy.
- **Error**: Action fails on macOS or Linux.
  - **Fix**: Use platform-specific shortcuts or automation steps compatible with the operating system.

---

## Additional Tips for this Action
- Confirm that the browser or operating system allows clipboard operations for both copy and paste actions.
- Add a step to focus or click on the target input field before performing the paste action to ensure the image is inserted correctly.
- Insert a short **Wait** step after the paste action to allow the web page to render or upload the pasted image.
- Use a **Validate Image** or **Validate Element** action to confirm that the image appears as expected after pasting.
- If automation is run on macOS, Windows, or Linux, use OS-specific commands or key combinations for clipboard operations.
- Always copy the image immediately before pasting to avoid outdated clipboard data.
- Verify that the target web element supports image pasting or accepts image file drops.

---

## Error Handling for Copy or Paste Image into Web Action
- **Verify Clipboard Access**
  - Ensure that clipboard permissions are enabled in the browser and OS, or copy/paste may silently fail.
- **Add Fallback Validations**
  - Add a validation step after paste to confirm success; log and fail the test if it does not pass.
- **Use Try-catch or Conditional steps**
  - Surround the paste action with conditional logic or a retry mechanism to reattempt or proceed with a fallback if it fails.
- **Log Failure Details**
  - If copy or paste fails, log the clipboard state, target element, and timestamp for debugging.
- **Ensure Element Readiness**
  - Add a wait or focus step before pasting to ensure that the target element is ready.
- **Handle OS and Browser differences**
  - Use OS-specific handling, and if unsupported, skip or log the issue gracefully.

---