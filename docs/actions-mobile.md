---
id: actions-mobile
title: Mobile actions
---

import Link from '@docusaurus/Link';

:::tip

- **Drivers**: Appium, Selenium (hybrid apps, iOS Safari)

:::

These actions are used to automate mobile applications and browsers.
Hybrid test case for hybrid applications, is a unique feature of ZeuZ
Node which allows you to write one test case that can automate both
Android and iOS apps without having to write two sets of test cases
for each platform. Almost all the actions have the abiity to act as a
hybrid action that can run on both Android and iOS.

### Browser Automation

<Link to="/docs/actions-web#ios-safari">Safari iOS</Link> automation is acheived through Selenium.

## Examples of Mobile actions

### 1. **Click an Element**
This action enables users to click on a specified item on the screen by providing relevant identification details such as resource ID, text, or class. Once the item is located, the action performs a click. It also allows for an offset to be set, determining the click position relative to the item's boundaries. This feature is particularly useful for precise interactions, especially when elements are partially obscured or require specific click locations.

### 2. **Enter Text**
This action locates a text box on a webpage by using its unique ID and inputs the specified text into it. It allows users to automate the process of entering data into text fields efficiently by identifying the element through its ID attribute and performing the desired typing action.

### 3. **If an Item is Found or Not**
This action allows for conditional execution of different actions based on whether a specified condition is met, functioning like an "if-else" structure in programming. It checks for the presence of an element on the page (using properties like resource-id, class, text, etc.), and if the element is found (true), it triggers the associated actions. If the element is not found (false), another set of actions can be executed. An optional wait parameter can be set to delay the check for a specified time, ensuring the element has time to appear before the condition is evaluated.

### 4. **Launch Android App**
This action is used to launch an Android app by specifying its package name. The package name is essential to identify the app and can be found using a package viewer app like "Package Name Viewer" or "APK Package Viewer" from the Google Play Store. Once the package name is obtained, it is entered into the "Value" field to start the app. It is crucial to use the "Teardown App" action at the end of each test run to ensure that all Appium drivers are properly cleaned up, preventing issues during subsequent test executions.

### 5. **Launch iOS app**
This action is used to launch an iOS app by providing its bundle identifier. The bundle identifier is a unique string used to identify an app on iOS devices, similar to a package name on Android. Once the bundle identifier is specified in the appropriate field, the app will be launched on the iOS device. To ensure proper cleanup after the test run, it is recommended to use the "Teardown App" action, which ensures that all necessary resources, like Appium drivers, are closed and cleaned up.

### 6. **Swipe**
This action performs a swipe gesture on either the entire application screen or a specified element.
Possible values of **direction** are:
1. Down
2. up
3. Left
4. Right.

### 7. **Teardown App**
This action is designed to close the currently running application and perform necessary cleanup to ensure the smooth execution of subsequent test cases. It works by properly shutting down the application, destroying the associated Appium driver, terminating the Appium server, and clearing all shared variables. This action is executed at the end of a test case. If this action is not called, it may result in errors during the next test run due to leftover processes or variables from the previous session. 

### 8. **Wait for item to appear**
This action is used to validate whether a specific element exists within a given time frame during test automation. The user specifies a maximum wait time (in seconds), and the system continuously checks for the element's presence. If the element is found within the allotted time, the test proceeds to the next action. If not, the test may fail or an error is triggered. This ensures that elements are available before proceeding, avoiding time-related issues in automation processes, such as in tools like ZeuZ.

### 9. **Wait for item to disappear**
This action is used in test automation to wait for a specific element to disappear within a set time frame. For example, when opening an application like Wikipedia, it might be necessary to wait for a loading screen or pop-up to disappear. If the target element vanishes within the specified time (e.g., 10 seconds), the test step passes. If it doesn't, the test may fail. This helps ensure that certain elements are no longer present before continuing with the test execution.

### 10. **Swipe to an element**
This action is used in test automation to locate elements that are not visible on the current screen, such as those further down a list or in a horizontally scroll view. ZeuZ will automatically scroll through the page, either vertically or horizontally, in increments until the target element is found. Once located, the test proceeds. This ensures that elements off-screen in scrollable areas can be accessed and interacted with during testing.

### 11. **Install an App**
This action is used in mobile automation to install an app on a device. It works by taking the package name of the app from the "Value" field and attempting to install it on the mobile device. This ensures that the required app is installed before proceeding with further testing steps, automating the installation process.

### 12. **Save Text**
This action is used in test automation to locate a text box by its ID and enter text into it. It is typically used for tasks like entering search terms or form data. The action identifies the text field, inputs the desired text, and can handle multiple element parameters, making it efficient for interacting with various text fields during automated testing.

### 13. **Uninstall an App**
This action is used in mobile test automation to uninstall an app from a device. It works by retrieving the app's package name from the "Value" field and then attempting to remove the app from the mobile device. This is useful for automating the uninstallation process during testing, ensuring a clean environment or testing the app's installation and removal workflows.

### 14. **Validate full text (default)**
This action is used in test automation to validate the complete text within a specified element. It works by comparing the provided text string with the full text in the target element. If the text matches exactly, the validation passes; otherwise, it may fail. This ensures precise text verification during testing.

### 15. **Validate partial text (default)**
This action is used in test automation to verify whether a data field or text view contains the expected data, allowing for partial matches. It works by retrieving the text from the element using its unique identifier and comparing it to the provided text string. If there is a partial match, the validation passes. However, it is crucial that the "element properties" are unique; otherwise, accurate validation cannot occur.

### 16. **Clear and Enter text**
This action is used in test automation to clear existing text in a specified element and enter new text. For example, if a user wants to search for a new item but the previous search item is still displayed, this action first clears the old text from the search field. It then allows the user to input the desired search term, ensuring the field is ready for fresh input and preventing errors from leftover text.

### 17. **Take a Random String**
This action is used in test automation to generate a random string, which is useful for various testing scenarios. Its primary purpose is to create a unique or unpredictable string for tasks such as populating form fields, generating user identifiers, or testing input validation. When executed, it produces a random string of characters, which can include letters, numbers, or special characters, depending on the specified parameters. This random string helps testers simulate user input and verify how the application handles dynamic data, ensuring robustness in handling varied inputs.

### 18. **Unlock android app**
This action is designed for unlocking password-protected applications, often governed by Mobile Device Management (MDM) policies. It utilizes an Appium Conditional Action to search for a partial string on the screen using a wildcard (e.g., \*text) for case-insensitive matching. If the specified string is located, the action invokes the unlock command via Android Debug Bridge (ADB), simulating the entry of the password and an "Enter" keystroke. If the string is not found, the system assumes the app is already unlocked. While Appium or UI Automator may not read UI elements on secure screens due to screen capture restrictions, they can still interact with them, and unlocking occurs through keystrokes without any programmatic feedback.

### 19. **Unlock android device**
This action is used to unlock Android devices that require a PIN or password, though it does not work with pattern locks. It automates the unlocking process by waking the device, navigating to the lock screen, and using Android Debug Bridge (ADB) to input the password or PIN, followed by an "Enter" keystroke. If the device is already unlocked, it bypasses this step and continues with the test. This ensures the device is accessible for testing without manual input.

### 20. **Context**
This action allows context switching for hybrid apps, facilitating interaction with both web and native components. It is especially useful for hybrid apps on iOS and Android where swtching to WebView or Native Contexts may be needed. By setting the context to "native", the action switches to "NATIVE_APP", and by setting it to "web", it switches to the first available WebView. Specific context names can also be used if known. Notably, click, tap, and enter text actions will attempt to switch to WebView automatically if they encounter issues, so manual switching is generally unnecessary for these actions.

### 21. **Launch by package and activity name**
This action is used in test automation to directly launch a mobile application by specifying its package and activity names. It works by referencing the unique package name to identify the app and the activity name to define the specific screen or function to open. This allows testers to start the app at a specific entry point, making the testing process more efficient by bypassing unnecessary screens or steps.

### 22. **Bypass action**
The **bypass action** in test automation allows a test to handle unexpected elements, such as pop-ups, by skipping certain actions if they fail. To activate it, "bypass" is included in the action's name. If a test step fails, the bypass action attempts to resolve the issue-like closing a pop-up-before retrying original action. If the bypass action succeeds, testing continues smoothly; if it fails, the step fails. This feature can be set at the start of a test case and will run whenever a failure occurs, making it deal for managing unpredictable elements in the app flow.

### 23. **Clear and Enter Text ADB**
This action serves as a backup when Appium cannot interact with certain elements, allowing the test to proceed without relying on Appium's direct controls. It uses an Android Debug Bridge (ADB) shell command to send keystroke events directly to the device, moving to the end of a text box and deleting up to 50 characters. This action runs blindly , without providing error feedback, so it should only be used when standard Appium functions fail. For deletions beyond 50 characters, further support may be needed.

### 24. **Close (by default)**
This action is used to close the currently active foreground application on a mobile device. Its primary purpose is to terminate an app in use, allowing the user to switch to another application seamlessly. For instance, if a user has the "Wikipedia" app open and wants to access the "Google" app, this action can be employed to close "Wikipedia" first. This ensures a smooth transition to the new application without interruptions or conflicts from the previously active app, enhancing the overall user experience during testing or application switching.

### 25. **Compare all text found in all elements on the screen**
This action compares the text found in all visible elements on the screen with a specified reference text. Its primary purpose is to verify the accuracy and presence of specific text content within an application's user interface, ensuring that displayed information matches expected values. Upon execution, the action retrieves text from all UI components, such as buttons, labels, and input fields, and checks each against the provided reference.

### 26. **Conditional Action based on locating by unique parameter**
This action is used to control the flow of execution in test automation based on specific conditions, returning a boolean value to indicate the presence of a desired element. Its primary purpose is to determine whether a unique element exists on the page, allowing subsequent actions to execute conditionally. For example, if an action should only occur if a specific element is present, the user provides a unique identifier, such as an ID, class, or title. The action searches the page for this identifier and returns true if the element is found, resulting in a "Pass", or false if it is not found, leading to a "Fail".

### 27. **Double Tap an Element**
This action performs a double tap on a specified element in the application interface, typically to trigger behaviors linked to a double-tap gesture, such as zooming or opening items. When executed, it simulates two quick taps on the element, mimicking a user's double-tap.

### 28. **Enter text by delay**
This action is used to add a brief delay between each character as text is entered, helping mimic more natural typing or accommodate input speed limitations. For instance, setting a delay of 0.03 seconds (or 30 milliseconds) between characters will slow down the text input slightly, allowing the application to process each character individually.

### 29. **Entering text by unique parameter**
This action allows text to be entered into a specific element using its unique identifier, ensuring precise targeting for text input. It works by locating the element based on a distinct property, such as an ID, and then entering the specified text. For example, if a user wants to search for an item, this action inputs the search term into the designated text field. Since it relies on a unique identifier, the action will only work if the element's property is distinct, which is essential for accuracy in automated testing.

### 30. **Get IMEI or MEID**
This action retrieves the device's unique identifier - either the IMEI (International Mobile Equipment Identity) or MEID (Mobile Equipment Identifier), depending on which is primary and saves it to a specified variable. This enables the identifier to be used in further testing steps or referenced later in the process, which can be useful for device-specific operations, tracking or logging.

### 31. **Get device model name**
This action retrieves the model name or number of the device and saves it in a specified variable. This allows the device model information to be accessed later in the testing process, enabling device-specific operations, logging, or validation based on the model type.

### 32. **Get device serial no.**
This action retrieves the device's unique serial number and saves it to a specified variable. Storing the serial number enables device-specific tracking, logging, and validation throughout the testing process, ensuring that each device is correctly identified and differentiated.

### 33. **Get device storage**
This action retrieves the total internal storage capacity of a device and saves this information in a specified variable. By storing the storage size, the testing process can use it for device-specific validation, such as checking available storage before installing applications or logging device specifications for reporting purposes.

### 34. **Get device version**
This action retrieves the version number of the device's operating system (OS) and stores it. This information is useful for testing purposes, as it allows for ensuring compatibility with specific OS versions or performing tests that are version-dependent, helping to verify the app's performance across different device versions.

### 35. **Get package version**
This action retrieves the package version number of the installed application on the device and stores it. The package number version is useful for validating whether the correct version of the app is installed, ensuring compatibility, and verifying that updates or specific versions are being tested.