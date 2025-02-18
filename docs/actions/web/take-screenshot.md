---
id: take-screenshot
title: Take Screenshot
---

## Purpose
The "Take Screenshot" action captures a screenshot of the current webpage and stores the screenshot file's path in the variable `zeuz_screenshot`. The screenshot file can later be referenced using the variable `%|zeuz_screenshot|%` in subsequent actions, enabling easy access to the file for further use in the test case. This action is particularly useful for capturing visual evidence of the state of a web page during automated tests.

---

## Scenarios

### Scenario 1

#### Title:
Capture a Full Screenshot After Form Submission  
Test case link: [TEST-7979 Capture full screenshot after form submission](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-7979)

#### Scenario Overview:
A user fills out a form and submits it. To verify that the form submission was successful, a screenshot is captured immediately after the submission action. This ensures that the confirmation message or resulting page state is documented for future reference.

#### Steps to Follow:
1. Open the browser and navigate to the form page.
2. Fill in the required fields of the form.
3. Click the "Submit" button.
4. Use the "Take Screenshot" action.
5. Store the screenshot file in the variable `zeuz_screenshot`.
6. Verify that the confirmation message is displayed correctly in the screenshot.

#### Actions:

|Parameter               |Type                |Value     |
|------------------------|--------------------|----------|
|screenshot save path    |element parameter   |%\|zeuz_download_folder\|%\image.png                        |
|take screenshot web     |selenium action     |          |

- Take Screenshot.

#### Expected Result:
- The screenshot should capture the confirmation message displayed after the form submission.

#### Common Errors and Fixes:
- **Error**: The screenshot file is not stored properly.
  - **Fix**: Ensure that the action executes correctly and that the variable `%|zeuz_screenshot|%` is referenced properly in subsequent steps.

---

### Scenario 2

#### Title:
Capture a Screenshot of a Specific Location Using Coordinates  
Test case link: [TEST-8073 Capture a Screenshot of a Specific Location using Coordinates](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8073)

#### Scenario Overview:
A tester needs to capture only a specific portion of a webpage, rather than the entire viewport. Using coordinates, the screenshot action focuses on the desired section of the page.

#### Steps to Follow:
1. Open the browser and navigate to the target webpage.
2. Identify the coordinates (`x`, `y`, `width`, `height`) of the area to capture.
3. Use the "Take Screenshot" action with the defined coordinates.
4. Store the screenshot file in the variable `zeuz_screenshot`.
5. Verify that the captured screenshot contains only the specified portion of the page.

#### Actions:

|Parameter              |Type              |Value            |
|-----------------------|------------------|-----------------|
|screenshot save path   |element parameter |%\|zeuz_download_folder\|%\image.png          |                 |
|bbox                   |optional parameter|(0, 750, 500, 40)|
|take screenshot web    |selenium action   |                 |

- Take a screenshot (using specific coordinates).

#### Expected Result:
- The screenshot should include only the specified section of the webpage.

#### Common Errors and Fixes:
- **Error**: The screenshot captures the incorrect area.
  - **Fix**: Verify that the provided coordinates are correct and correspond to the intended section of the page.

- **Error**: The selected area is outside the visible viewport.
  - **Fix**: Ensure that the section is visible on the screen before capturing the screenshot.

---

## Additional Tips for this Action
- Always verify that the screenshot is captured at the right moment by placing the action immediately after the desired step.
- Use the variable `%|zeuz_screenshot|%` to reference the screenshot in reports or subsequent test steps.
- When capturing a specific section, double-check the coordinates before execution to avoid capturing incorrect screenshots.

---

### Error Handling for Take Screenshot

#### Common Problems and Their Fixes:
1. **Problem**: The screenshot file is not generated.  
   **Possible Cause**: The page may not have fully loaded before the screenshot was taken.  
   **How to Fix**: Add a short wait time before executing the action.

2. **Problem**: The screenshot captures an incorrect area when using coordinates.  
   **Possible Cause**: The provided coordinates are incorrect.  
   **How to Fix**: Double-check and adjust the `x`, `y`, `width` and `height` values before executing the action.

3. **Problem**: The screenshot does not capture the expected UI elements.  
   **Possible Cause**: The required element may not be visible on the screen.  
   **How to Fix**: Scroll to the element before capturing the screenshot.

---

### General Error Handling Tips
- Ensure that the webpage is fully loaded before capturing the screenshot.
- Confirm that all required elements are visible before capturing the screenshot.
- If using screenshots for validation, compare them with the expected reference images to ensure consistency.
- When using coordinates, test with different values to ensure accuracy.

---

## Action documentation of Take Screenshot

### Description
The "Take Screenshot" action captures a webpage screenshot, storing its path in `zeuz_screenshot`. It can be referenced later using `%|zeuz_screenshot|%` for futher use. This is useful for capturing visual evidence during automated tests.

By default, it takes a full-page screenshot. However, to capture a specific area, one can use **coordinates (x, y, width, height)**.

---

### Data:

| Parameter             | Type                | Value                             |
|-----------------------|---------------------|-----------------------------------|
| screenshot save path  | element parameter   |\*\* Fullpath of the image: C:\User\path\image.png or %\|zeuz_download_folder\|%\image.png \*\*|
| bbox                  | optional parameter  | \*\* Provide the bounding box parameters in the following format (x, y, width, height): (190, 140, 500, 685) \*\*|
| take screenshot web   | selenium action     |                                   |

---

### Action Type: Web