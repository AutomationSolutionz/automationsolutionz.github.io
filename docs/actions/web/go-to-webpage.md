---
id: go-to-webpage
title: Go to Webpage
---

## Purpose
The "Go to Webpage" action enables users to open a specified browser and navigate to a given URL. This action accepts the URL, configures the browser's capabilities (such as version or platform), and loads the webpage. Additionally, it includes a default wait time of 10 seconds to allow elements on the page to load, ensuring smooth automation throughout the test case.

---

## Scenarios

### Scenario 1

#### Title:
Navigate to a Homepage Using a URL  
Test case link: [TEST-11416 Navigate to a homepage using a URL](https://qa.automationsolutionz.com/Home/ManageTestCases/Edit/TEST-11416/#parentHorizontalTab2)

#### Scenario Overview:
Imagine a user who wants to visit the homepage of an e-commerce website to start shopping. This scenario demonstrates how to use the "Go to Webpage" action to launch a browser, navigate to a specific URL, and load the website's homepage.

#### Steps to Follow:
1. Use the "Go to Link" action with the homepage URL.
2. Wait for the homepage to load completely.
3. Verify that the homepage is displayed correctly.

#### Actions:

|Parameter        |Type             |Value          |
|-----------------|-----------------|---------------|
|wait time to appear element        |optional parameter|10 |
|go to link |selenium action  | https://demo.zeuz.ai/web/level/one/scenerios/login |

#### Expected Result:
- The browser opens and navigates to the specified URL without errors.
- The homepage loads successfully, and elements such as the website logo and main menu are visible.

#### Common Errors and Fixes:
- **Error**: The webpage fails to load.
  - **Fix**: Ensure that the URL is correct and the browser has a stable internet connection.
- **Error**: The elements on the page are not loading.
  - **Fix**: Verify that the browser capabilities are correctly set, and increase the timeout if needed.