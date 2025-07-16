---
title: Version Control Support
---

## Chrome for Testing: Version Control Support in ZeuZ
ZeuZ now supports fine-grained browser version control through its new **Chrome for Testing (CfT)** feature. This enhancement allows automated test execution across any desired version of the Google Chrome Browser, including pre-release builds such as **Dev**, **Beta**, and **Canary**.

This feature is particularly useful for:
- Verifying cross-version compatibility of the web application.
- Identifying browser-specific regressions or bugs.
- Ensuring the product is future-ready by testing against unreleased features.
- Saving time with automated, hands-free setup of browser environments.

### Key Capabilities
- **Targeted Chrome Version Execution**  
  Run the test suite on a user-specified version of Chrome, including older stable versions or unreleased builds.

- **Automated Version Handling**  
  ZeuZ checks whether the specified Chrome version is already available. If not, it automatically downloads, installs, and configures both Chrome and the corresponding ChromeDriver version.

- **Smart Cleanup**  
  To optimize disk space, Chrome versions that have not been used for 90 consecutive days are automatically removed, along with their associated drivers.

- **Automatic Update to the Latest Version**  
  The system monitors the latest stable Chrome release. Every seven days, it checks for updates and automatically installs the latest version, if available.

### Usage Instructions
To configure a test case to run on a specific version of Chrome using the ZeuZ platform:
1. In the **Go to link** action of the test case, add an additional row in the following format:

|  Parameter        |  Type                |  Value                                 |
|-------------------|----------------------|----------------------------------------|
|  chrome: version  |  optional parameter  |  %\|chrome_version\|% or 125.0.6382.0  |

2. You may specify either of the following:  
   - A **runtime parameter**, such as `%|chrome_version|%`, which allows dynamic control of the version during execution.
   - A **hardcoded Chrome version string**, such as `125.0.6382.0`.
   - A reliable list of versions can be found here:
      - [`known-good-versions.json`](https://googlechromelabs.github.io/chrome-for-testing/known-good-versions.json)
      - [`last-known-good-versions.json`](https://googlechromelabs.github.io/chrome-for-testing/last-known-good-versions.json)

3. ZeuZ will resolve the specified version, ensure the appropriate binaries are available, and execute the test case accordingly.

### Benefits for QA Teams
- **Consistent and Reproducible Testing**  
  Eliminate uncertainity by reliably reproducing bugs on a consistent browser version.
- **Enhanced Test Coverage**  
  Validate the application against multiple Chrome builds without requiring manual step.
- **Operational Efficiency**  
  Reduce test environment setup time through automating version management.

:::note
For advanced test automation with browser-specific validation, the Chrome for Testing feature offers exceptional control and convenience, seamlessly integrated into the ZeuZ ecosystem.

> Support is not available for Chrome versions below **115.0.5763.0**.

:::

---

## Test Case Example Scenario of "Version Control Support" Action

### Title
Version Control Support

Sample test case: [TEST-8232 Version Control Support](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8232/)

### Scenario Overview
This test case is structured to help you understand how ZeuZ supports the version control system. In this specific test case you will learn how we can specify any version of Chrome and run our tests on that particular version.

### Steps to Follow
1. Navigate to the specified URL, before that you should specify the chrome version with an extra row.
2. Enter the stored username and password into their respective fields on the login page.
3. Click on the **Sign In** button: The button identified by the ID `signin_id` is clicked to submit the login form.
4. Click on the **Close** button in the modal: The `Close` button within the modal dialogue, identified by its visible text **Close**, is clicked to dismiss the modal.

### Actions

|  Parameter                    |  Type                |  Value          |
|-------------------------------|----------------------|-----------------|
|  wait time to appear element  |  optional parameter  |  10             |
|  chrome:version               |  optional parameter  |  138.0.7204.92  |
|  go to link                   |  selenium action     |  https://demo.zeuz.ai/web/level/one/scenerios/login2  |

> Here, the Chrome version is hardcoded, and ZeuZ will try to find this version in your computer, if not available then it will download and install with a corresponding driver as well. We recommend using either a variable or runtime parameter, just shown above.

### Expected Result
- The expected result is that the login functionality works correctly on the specified version of Chrome.

### Common Errors and Fixes
- **Error**: Specified Chrome version is not supported.
  - **Fix**: Ensure that the Chrome version you specified is not less than **115.0.5763.0**.

---

## Additional Tips for "Version Control Support" Action
- For a test case, use runtime parameters to specify Chrome versions, allowing easy switching between versions without modifying the test case and enabling testing across multiple versions.

---
