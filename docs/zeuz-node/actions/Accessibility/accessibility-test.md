---
id: accessibility-test
title: Accessibility Test
---

This action tests the accessibility of a given webpage. The user needs to navigate to the webpage using the Selenium WebDriver and then run the action. It evaluates the accessibility of the currently rendered webpage in the Selenium WebDriver, following WCAG guidelines and industry best practices.

---

## Purpose
This action is typically used in scenarios to test the accessibility of a webpage. It is also used to find out the HTML elements that are missing accessibility parameters (e.g., finding out `<img>` elements that do not have alternative text).

---

### Table: Input Parameters for Accessibility Test
This action does not require any user input. The user simply needs to run the action.

|  Parameter           |  Type           |  Value               |
|----------------------|-----------------|----------------------|
|  accessibility test  |  common action  |  accessibility test  |

### Action Behavior
- **Navigate to the desired webpage** using the Selenium WebDriver.
- **Loads the page** and fetch all the HTML elements of the page.
- **Evaluates the accessibility** based on WCAG guidelines and industry best practices.

---

### Examples

|  Parameter            |  Type                |  Value                 |
|-----------------------|----------------------|------------------------|
|  wait time to appear  |  optional parameter  |  10                    |
|  go to webpage        |  selenium action     |  https://www.zeuz.ai/  |

|  Parameter            |  Type                |  Value                 |
|-----------------------|----------------------|------------------------|
|  accessibility test   |  common action       |  accessibility test    |

- It will now run the accessibility test on the webpage at the URL: https://www.zeuz.ai/.

---

### System and File Requirements
- **WebDriver**: Ensure that the webpage you want to test for accessibility is rendered in the Selenium WebDriver before running this action.

---

### Error Handling for Accessibility Test
- **Fails If**:
  - The webpage URL is invalid.
  - The webpage is not rendered in the Selenium WebDriver.
- Logs detailed error messages for troubleshooting.

---

## Test Case Scenario of "Accessibility Test"

### Title
Accessibility Test of a Webpage

Sample test case: [TEST-8238 Accessibility Test of a Webpage](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8238/)

### Scenario Overview
This test case is designed to test the accessibility of a webpage. The test involves evaluating the accessibility against predefined WCAG rules and industry best practices and generating the reports.

### Steps to Follow
1. Navigate to the page using a Selenium action (e.g., "Go to Webpage").
2. After that, run this action.
3. Validate the accessibility of the currently rendered webpage.

### Actions

#### 1. Navigate to the Webpage

|  Parameter            |  Type                |  Value                |
|-----------------------|----------------------|-----------------------|
|  wait time to appear  |  optional parameter  |  10                   |
|  go to webpage        |  selenium action     |  https://www.zeuz.ai  |

#### 2. Run the Action

|  Parameter           |  Type           |  Value               |
|----------------------|-----------------|----------------------|
|  accessibility test  |  common action  |  accessibility test  |

### Expected Result
The action will generate three reports in the **Accessibility Test Report** folder. All the reports will be stored in this folder, which is located at:  
`Zeuz_Python_Node\Framework\Accessibility Test Report`.  
If the folder does not already exist, it will be created automatically by the action. The following three reports will be generated:  
- **accessibility_report.html**: A visual summary of the accessibility test.
- **accessibility_report_summary.json**: A JSON report summarizing the results.
- **Accessibility_result.json**: A raw JSON output of the full accessibility results.

---

## Additional Tips
- If the page requires login or user interaction (e.g., opening a menu or modal), simulate those actions using Selenium before running the test to ensure that all interactive elements are properly evaluated for accessibility.

---

## Common Errors and Fixes
- **Error**: Could not dynamically locate the correct driver.
  - **Fix**: Ensure that the webpage is rendered in the Selenium WebDriver before running this action.
- **Error**: No report generated.
  - **Fix**: Run the action again without closing the Selenium WebDriver.
- **Error**: The library `axe-selenium-python` does not exist.
  - **Fix**: Ensure that the `axe-selenium-python` dependency is included in the `pyproject.toml` file.

---