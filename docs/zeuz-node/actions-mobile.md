---
id: actions-mobile
title: Mobile Actions
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

<Link to="actions-web#ios-safari">Safari iOS</Link> automation is acheived through Selenium.

## Examples of Mobile actions

### 1. **Click an Element**
This action enables users to click on a specified item on the screen by providing relevant identification details such as resource ID, text, or class. Once the item is located, the action performs a click. It also allows for an offset to be set, determining the click position relative to the item's boundaries. This feature is particularly useful for precise interactions, especially when elements are partially obscured or require specific click locations.

### 2. **Enter Text**
This action locates a text box on a webpage by using its unique ID and inputs the specified text into it. It allows users to automate the process of entering data into text fields efficiently by identifying the element through its ID attribute and performing the desired typing action.

### 3. **If an Item is Found or Not**
This action allows for conditional execution of different actions based on whether a specified condition is met, functioning like an "if-else" structure in programming. It checks for the presence of an element on the page (using properties like resource-id, class, text, etc.), and if the element is found (true), it triggers the associated actions. If the element is not found (false), another set of actions can be executed. An optional wait parameter can be set to delay the check for a specified time, ensuring the element has time to appear before the condition is evaluated.

### 4. **Launch Android App**
This action is used to launch an Android app by specifying its package name. The package name is essential to identify the app and can be found using a package viewer app like "Package Name Viewer" or "APK Package Viewer" from the Google Play Store. Once the package name is obtained, it is entered into the "Value" field to start the app. It is crucial to use the "Teardown App" action at the end of each test run to ensure that all Appium drivers are properly cleaned up, preventing issues during subsequent test executions.

[Video - Launch Android App](https://drive.google.com/file/d/1vOupy4FeUCPOu6Z7lQTViYthV0y8gS68/view?usp=sharing)

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

### 36. **Get phone name**
This action retrieves the phone name of the device, which is typically the name assigned to it by the user or manufacturer, and stores it in a specified variable. This information can be useful for identifying the device during testing, logging, or tracking the test results across diffrent devices to ensure that tests are accurately associated with the correct device.

### 37. **Go to webpage**
This action is used to instruct the browser on the device to navigate to a specified URL. It should be used after the browser has been launched. By providing the desired URL, this action directs the browser to open the webpage, enabling the test to interact with or verify the content on that page.

### 38. **Handle Alert**
This action is used to handle on-screen alerts that provide information, ask for permission, or issue warnings. Alerts are blocking, meaning they prevent interaction with the underlying webpage until addressed. This action allows the user to accept or decline the alert, depending on its type, ensuring the test can proceed by handling these interruptions.

### 39. **Hide Keyboard**
This action hides the on-screen keyboard on iOS and Android devices, useful when the keyboard blocks access to screen elements. Activating this action closes the keyboard, enabling uninterrupted interaction with previously hidden elements and facilitating smoother test execution.

### 40. **ID**
To standardize test cases across iOS and Android in the framework, this action enables minimal pre-processing of data before calling the "Get Element" function. This approach allows a single test to adapt to platform-specific requirements without needing separate cases.

For iOS we adjust the data by matching commonly used attributes, such as "Name" on iOS instead of "Text" on Android, and "Accessibility ID" on iOS instead of "Resource-ID" on Android. For Android's "Resource-ID", the package name must be appended, and this can be dynamically retrieved from the device. This setup simplifies cross-platform testing, ensuring smoother execution by making minor adjustments based on the device platform. 

### 41. **Install Android apk**
To install an Android app from an APK file, first enable installation from unknown sources in **Settings** under **Security** or **Apps & Notifications**. Locate the APK file, usually in the **Downloads** folder or another specified location, and tap to start installation. Review and accept any required permissions, then tap **Install**. Once completed, the app will appear in the app drawer, ready for use. Note that APKs from unverified sources may pose security risks.

### 42. **Keypress**
Sending a physical or virtual key press event simulates pressing a key on a device, either by physically pressing it or programmatically through code. This action is common in software testing and automation, as it allows for simulating user interactions, such as pressing "Enter" or navigating to the home screen, without manual input. It's particularly useful for testing an application's response to various commands and ensuring the user interface reacts as expected.

### 43. **Launch Safari on iOS**
To inspect a web app on iOS device using Safari, first open Safari on the device and connect it to a Mac. Enable **Web Inspector** on the iOS device in **Settings > Safari > Advanced**. Then, on the Mac, open Safari, go to the **Develop** menu, and find the connected iOS device. Select the relevant browser tab to open Safari's Web Inspector, allowing you to inspect and debug the web app directly on the iOS device. This method is necessary because Appium Inspector doesn't support Safari inspection on iOS.

### 44. **Launch by app activity**
To launch an application and obtain an Appium driver instance on Android (v4.4+) or iOS, the Appium driver initializes control of the app, enabling automated interactions. When locating elements, providing the package name (or bundle ID on iOS) helps Appium's Sequential Actions feature identify elements accurately, even if only part of the name is provided. This approach allows Appium to find and interact with elements more precisely, simulating user actions effectively and supporting automation across both Android and iOS.

### 45. **Launch by application name**
This action allows launching an app on a mobile device when the package name is unavailable, by using the app's visible name (e.g., "Calculator") from the home screen. The action attempts to match the provided name with the app's package name and launches it if a match is found. However, this method can fail if the app's package name doesn't contain the name provided (e.g., "Calculator" doesn't match "com.xyz.abc"). While useful in some cases, it is less reliable than directly using the package name for launching the app.

### 46. **Launch without resetting**
This action allows starting an application on a mobile device without resetting it to its default state. When launching the app, it preserves previously saved data, such as customized settings, preferences, or user progress. This ensures that the user's personalized configurations remain intact and the app behaves as it did during the last use, rather than returning to its default settings.

### 47. **Long Press an Element**
This action simulates pressing and holding an element on the screen for a specified duration. It is commonly used in testing scenarios to replicate user interactions like long taps, which are often required for actions such as opening context menus, activating drag-and-drop features, or triggering additional options in an app. The action can be configured to hold the press for a set time before releasing, allowing for precise testing of how the app responds to long press gestures.

### 48. **Maximize an Application**
This action is used to open any application on a mobile device without creating an Appium driver instance. Unlike the "launch" action, this action simply starts the app without establishing control, meaning that automated commands cannot be sent to the app until "launch" is called to create the Appium instance. This makes it useful for quickly switching between applications, such as when testing interactions across different apps. The **PACKAGE_NAME** parameter can be specified as either the full Android package name or a part of it, which the action will use to locate and open the desired app.

### 49. **Minimize an Application**
This action minimizes the currently active application by simulating a press of the Home button, returning the user to the device's home screen. It effectively pushes the app to the background without closing it, allowing it to run in the background. This action is useful in test scenarios where an application needs to be minimized temporarily to verify background processing, notifications, or interactions with other apps before returning to the original app.

### 50. **Move to middle of the element**
This action centers the view on a specified element by moving the screen focus to its middle point. It ensures that the element is fully visible and positioned centrally within the display area, which can be helpful for interacting with elements that may be partially out of view. This action is particularly useful for making elements accessible during testing, especially when verifying functionality or layout alignment that requires a clear view of the entire element.

### 51. **Optional Action**
This feature allows any action to be made "optional" by simply adding the word "optional" before the action name (e.g., converting "appium action" to "appium optional action"). When an action is marked as optional, it does not halt the test execution upon failure. Instead, if the action fails, it returns a **SKIP** status and proceeds to the next action in the sequence. This is particularly useful for situations where certain events or conditions may or may not occur, allowing the test to continue smoothly without interruptions. It helps in handling unpredictable scenarios while maintaining the test flow.

### 52. **Package Installed**
This action saves the package name of a specified app into a shared variable, allowing other parts of the test script to access it. When the user provides an app name (e.g., "chrome"), the action retrieves the app's package name and stores it in a shared variable with a specified label (e.g., "chrome_package_name"). This feature is helpful for reusing app package names across different test steps, especially when switching between apps or verifying app-specific actions. By using shared variables, the test script can dynamically reference the app's package name whenever needed.

### 53. **Pan**
The pan action moves the mobile screen in a specified direction (left, right, up, or down) by simulating a swipe gesture. The direction of the pan is set using the **Direction** parameter, while the **Scale** and **Count** parameters determine the extent and frequency of the movement. The **Scale** parameter controls how far the screen pans with each swipe, and **Count** specifies the number of times the pan action repeats. This action is useful for navigating across screens or scrolling through content in a controlled manner during mobile testing.

### 54. **PickerWheel**
This action enables the selection of an item from a **PickerWheel** object on a mobile device. A **PickerWheel** is a user interface element commonly found in iOS, used for selecting options from a rotating wheel, such as dates, times, or other selectable lists. By using this action, the test can automate the process of choosing an option from the PickerWheel, allowing it to interact with dropdown-like elements in iOS applications. This is useful for testing scenarios that involve selecting specific values from predefined lists.

### 55. **Reads a device's IMEI or MEID**
This action retrieves the device's unique identifier, either the **IMEI** (International Mobile Equipment Identity) or **MEID** (Mobile Equipment Identifier), depending on which is the primary identifier for that device. The identifier is then stored in a specified variable, allowing other parts of the test script to access and use it as needed. This action is helpful for tracking or verifying specific devices during testing, particularly in scenarios where device identification is necessary, such as device-specific configuration or validation tasks.

### 56. **Reboot device**
This action reboots a connected and authorized device. If a special **SERIAL_NO** is provided, only the device with that serial number will be rebooted. Alternatively, if an asterisk (*) is used, all connected devices will be rebooted simultaneously. Since this action operates independently of Appium, it can be executed at any point during testing, making it useful for resetting device states or troubleshooting issues without relying on Appium's setup or connection.

### 57. **Reset application**
This action clears the cache of the application currently launched by Appium. Clearing the cache removes any temporary data stored by the app, which can help ensure a fresh start in subsequent test steps or prevent potential issues caused by cached data. It's important to perform this action before calling the **close** action, as clearing the cache after closing the app would not be effective.

### 58. **Save Attribute Value**
This action is used to extract and store the value of a specific attribute from a web element, which can then be used for comparison or validation later in the test. After locating the element using a stable selector, the desired attribute (e.g., `value`, `href`, `src`) is extracted and saved. It's important not to use the same attribute for both locating the element and saving its value to avoid errors, as dynamic values could interfere. This action is useful for tracking changes in attributes or validating dynamic content during test execution.

### 59. **Save Variable If Element Exists**
This action checks if a specified web element exists. If the element is found, a specified value is saved into a variable. If the element cannot be located, the value "false" is stored in the variable. This action helps manage conditional logic by allowing subsequent steps to adapt based on the element's presence or absence.

### 60. **Save attribute values by scrolling**
This action is used to collect multiple elements from a scrollable parent element, ensuring that all relevant elements are captured as the page scrolls. The parent element should be scrollable, allowing the action to scroll through it and save values accordingly. It is important to ensure that the scrolling is performed accurately, with no elements skipped during the scrolling process. This is typically achieved by adjusting the scroll parameters, which control the scrolling behavior (such as the scroll speed or distance between scrolls) to ensure all elements within the parent are properly captured.

### 61. **Save text by unique parameter**
This action retrieves and stores the text value of a web element identified by a **unique property**, such as an `id` or a uniquely defined XPath. The text is assigned to a variable (e.g., `storage_variable`), allowing it to be reused later in the test. Using a **unique parameter** ensures the element is precisely identified, avoiding ambiguity. For example, if an element with `id="welcome-message"` contains the text "Welcome, User!", the action will locate the element, retrieve the text, and store it in the specified variable. The stored value can then be accessed using the syntax `%|save text|%`. It is crucial that the element's property is unique, as non-unique properties may cause the action to fail. This action is particularly useful for dynamic content and test validation scenarios.

### 62. **Swipe by uiautomator**
This action is designed to locate an element that is not immediately visible on the screen due to its position within a scrollable view. If the element is located further down in a vertical list or within a horizontal scroll view, ZeuZ will perform scrolling actions, moving page by page, until the element is found. This ensures that even elements outside the initial viewport can be located and interacted with during the test. It is particularly useful for interfaces with large datasets or layouts requiring scrolling to reveal hidden content.

### 63. **Switch device when using multiple devices**
In ZeuZ, **Device Serial Number** identifies devices connected to a machine, enabling seamless switching during automation. When multiple devices are attached, their serial numbers are listed under the **Device List** for your Machine ID. To switch between devices, input the desired serial number in the test case action. This ensures automation commands target the specified device, supporting parallel testing and efficient execution across different hardware.

### 64. **Take Screenshot**
In ZeuZ, the **Take Screenshot** action captures the active screen on a device and saves it to a directory, with the default path stored in the **ss_path** variable (accessible as `%|ss_path|%`). Users can specify a custom variable name for the path or a `filename` for the screenshot (e.g., `image1.jpg`), enabling the full path to be constructed as `"%|ss_path|%/image1.jpg"`. If no filename is provided, a default name using the format `%Y-%m-%dT%H-%M-%S-%f` is assigned (e.g., `2024-11-18T15-30-45-123456`). This action is ideal for capturing screens and referencing images during test automation.

### 65. **Tap an Element with offset**
This action in ZeuZ allows users to interact with a specific element on a device by defining its properties. This action is particularly useful for scenarios where multiple element parameters are required to identify a unique element.

For example, in a search scenario, the user inputs a search item into a designated field (identified by its properties). Once the results are displayed, the action locates the desired item based on its properties and taps it to open or view the item. This action ensures precise interaction with elements, even in dynamic or multi-element environments, making it effective for automation tasks like navigation or selection.

### 66. **Text or Name**
In ZeuZ, platform-specific element identification allows using a single test case for both iOS and Android, even when pages and buttons are identical. This is achieved by dynamically processing data before calling the **Get Element** function. For iOS, properties like **Name** or **Accessibility ID** are used, while for Android, **Text** or **Resource ID** is preferred. Android's **Resource ID** also requires appending the package name, which can be retrieved dynamically from the device. This approach eliminates redundancy and simplifies cross-platform automation.

### 67. **Validate full text selected by unique parameter**
The **Validate Full Text** action in ZeuZ compares a given text string with the full text of a specified element and validates it only if the texts match exactly. It relies on **unique properties** of the element, using a **unique parameter** for precise identification. If the element's properties are not unique, the validation cannot be performed reliably, making this action essential for accurate text verification in automated testing.

### 68. **Validate partial text selected by unique parameter**
The **Validate Partial Text** action in ZeuZ verifies if a specifed text string is contained within the full text of a given element. Validation succeeds with a partial match but requires the **element properties** to be unique, identified using a **unique parameter**. If the properties are not unique, the action cannot be reliably validate the text, ensuring precise and effective partial text verification in automated tests.

### 69. **Wakes a device, and puts it to the last viewed screen**
The **Wake Device** action in ZeuZ activates a device from its idle or sleep state, restoring it to its previous active state. This ensures the device is ready for subsequent test steps without requiring manual intervention, maintaining the continuity of automation workflows.

### 70. **Get location (co-ordinates)**
The **Get location (co-ordinates)** action in ZeuZ retrieves the current geographical location of a device in the form of latitude and longitude coordinates. This action is particularly useful for tests requiring location-based validation or context, such as verifying location permissions, GPS functionality, or geo-fencing scenarios. The retrieved coordinates can be stored in variables for further processing or comparison within the test workflow.