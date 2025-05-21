---
id: actions-mac
title: Mac Actions
---

## Description

**Mac Actions** are automation tasks designed for macOS systems to streamline operations such as launching applications, managing files, executing Terminal commands, and interacting with UI elements like buttons or text fields. These actions enhance productivity and enable efficient workflows by automating tasks specific to the macOS environment. Tools like ZeuZ utilize Mac Actions for testing and automation, leveraging the platform's unique capabilities.

## Examples of Mac Actions

### 1. **Clear and Enter Text**
This action clears any existing text in an input field and enters new text. It is particularly useful when updating fields where previously entered text needs to be replaced. The field is identified using attributes such as **title**, **label**, **value**, or **identifier**. It ensures accurate text input by replacing previous entries, making it ideal for tasks like form filling or data updates. Tools like ZeuZ support this action to streamline automation and testing workflows effectively.

### 2. **Click an Element**
This action clicks on a specified item on the screen by identifying it using attributes such as **title**, **label**, **value**, or **identifier**. Once the item is located, the action simulates a click, allowing interaction with clickable elements like buttons or links. It is commonly used in automation to trigger actions or validate UI behavior, streamlining testing and workflows.

[🔗 USAGE GUIDE](actions/mac/enter-text)

### 3. **Double Click**
This action performs a double-click on a specified element by identifying it through its properties, such as **title**, **label**, **value**, or **identifier**. The user provides the details of the target element, and once located, the action simulates a double-click.

This is useful for automation tasks requiring actions like opening files, expanding folders, or triggering UI elements that respond to double-click interactions. Tools like ZeuZ support this action to enable precise and efficient automation of such tasks.

### 4. **Enter Text**
This action locates a text field in an application using attributes such as **title**, **label**, **value**, or **identifier** and enters the specified text. It does not delete any existing text in the field; the new text is appended or inserted based on the field's behavior.

[🔗 USAGE GUIDE](actions/mac/enter-text)

For scenarios where the field needs to be cleared before entering text, the "Clear and Enter Text" action should be used. This action is ideal for tasks where adding new information without modifying existing content is required. Tools like ZeuZ support this action for precise and efficient text input during automation workflows.

### 5. **If an Item is found or not**
This action allows conditional execution of tasks based on the presence of a specified element, similar to an "if-else" condition in programming. The element is located using attributes such as **title**, **label**, **value**, or **identifier**. If the element is found, the actions defined for the "true" condition are executed; if not, "false" condition actions are triggered.

An optional **wait** parameter can be set to specify the time to wait for the element to appear. This action is useful for dynamic scenarios where task execution depends on the availability of specific UI elements. Tools like ZeuZ support this feature for flexible and responsive automation workflows.

### 6. **Launch Application**
This action launches a specific application on macOS using its **bundle ID**, a unique identifier within Apple's ecosystem. For example, to open the Calculator app, the bundle ID **"com.apple.calculator"** must be specified. The bundle ID of an application can be found using a Terminal command, such as  
`osascript -e 'id of app "App Name"'`, or by accessing the app's **info.plist** file. To locate this file, navigate to the **Applications** folder in Finder, right-click on the app, and select  **Show Package Contents**. Then open the **Contents** folder, locate the **info.plist** file, and view it in Xcode or TextEdit to find the **CFBundleIdentifier** key. This action is crucial for automation tasks requiring precise application control, and tools like ZeuZ make it efficient to define and execute these actions.

### 7. **Right Click**
This action performs a right-click on a specified element by identifying it using its properties, such as **title**, **label**, **value** or **identifier**. The user provides the details of the target element, and once it is located, the action simulates a right-click.

This is commonly used in automation tasks that require context menu interactions or other actions triggered by right-clicking on elements. Tools like ZeuZ enable precise execution of this action to streamline workflows and testing processes.

### 8. **Save Attribute Value**
This action saves the value of a specific attribute from an element, often for use in comparisons or subsequent tasks. To perform this, the element must be located using properties like **title**, **label**, **value**, or **identifier**. Once identified, the desired attribute can be extracted and stored.

It is important not to use the same attribute intended for saving as the one used for locating the element. This ensures accuracy and prevents conflicts. This action is particularly useful in scenarios where dynamic data needs to be captured and analyzed later, and tools like ZeuZ make it efficient to implement.

### 9. **Teardown Application**
This action is used to properly close an application that was running on the screen, ensuring a clean shutdown at the end of a test case. It terminates the Appium driver, stops the Appium server, and clears all shared variables associated with the session. Calling this action at the end of a test case is crucial to avoid errors in subsequent test runs, as failing to do so may leave processes or variables in an inconsistent state, leading to potential issues in future tests. Tools like ZeuZ help automate this process for efficient test management.

### 10. **Wait for element to appear**
This action is used to validate or assert whether a specified element exists. To perform this, the details of the element must be provided using properties like **title**, **label**, **value**, or **identifier** for accurate identification. Additionally, a maximum waiting time (in seconds) is specified. If the element is found within this time frame, the action proceeds to the next step; otherwise, it will fail the test case. This ensures the presence of critical elements and helps maintain the reliability of automated tests.

### 11. **Wait for element to disappear**
This action validates whether a specified element disappears within a given time frame. The element is identified using properties such as **title**, **label**, **value**, or **identifier**. A maximum waiting time (in seconds) is specified, during which the action monitors for the element's disappearance. If the element is still present after the specified time, the test case fails; otherwise, the action proceeds to the next step. This is useful for ensuring that dynamic elements or temporary UI components behave as expected during automated testing.
