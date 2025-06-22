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