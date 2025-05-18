---
id: actions-windows
title: Windows actions
---

## Description
**Windows Actions** are predefined operations that automate tasks and interactions within the Windows operating system or its applications. These actions include clicking buttons, typing text, interacting with UI elements like dropdowns and checkboxes, validating elements, taking screenshots, and managing window states such as maximizing or closing. They are essential in test automation frameworks like ZeuZ for efficient and reliable testing of Windows-based applications.

## Examples of Windows actions

### 1. **Click Element**
This action is used to invoke, select, or toggle an element, with a fallback to performing a mouse click if the object lacks a supported pattern. Element detection is supported through two methods.

**Method 1** involves **Element/Parent/Sibling/Index** for detection. Open the **InspectX64.exe** application located in the **Zeuz_Python_Node/Apps/Windows** folder. Activate the **Mouse Cursor** and **Rectangle Shape** buttons, then hover over the desired element to capture its identifiers. This method is slower but effective for detailed detection.

**Method 2** uses an **element path** for faster detection. Open **element_path_detector.py** in the same folder hover over the target element, and press **Control** to generate the exact element path automatically. This method is quicker and more efficient for locating elements during automation.

This action supports 8 element parameters: **Windows**, **Name**, **Control**, **Class**, **AutomationID**, **Index**, **Path**, and **Image Text**. At least one or more parameters must be provided.

For **Image Text**, manual setup is required:
Installation step:
1. Write this command: pip install pytesseract
2. Go to the following link https://www.thewindowsclub.com/cant-format-usb-drive-in-windows-10 and download tesseract-ocr-w64-setup-v5.0.0-rc1.20211030.exe (64 bit) resp.

:::note
   
   If using multiple monitors, set the target monitor as the primary screen and restart the node.

:::

The **Offset** parameter allows interaction with an element at specific coordinates within a range of -100 to 100 for **x** and **y**. Examples:
- `(100, 0)` clicks the rightmost pixel.
- `(-100, 0)` clicks the leftmost pixel.
- `(0, -100)` clicks the topmost pixel.
- `(0,  100)` clicks the bottommost pixel.
- `(0, 100)` clicks the center of the element.

### 2. **Enter Text**

This action locates a text box using specified identifiers and inputs text into it. If ControlPatterns like "Text" or "ValuePatterns" are available, it uses the "Set Value" method for direct input. If not, it falls back to simulating mouse clicks and keystrokes.

ZeuZ supports two detection methods for identifying elements:
1. **Element/Parent/Sibling/Index Method:** Use **InspectX64.exe** (found in ZeuZ_Python_Node/Apps/Windows folder) to hover over the elements and extract identifiers. This method is slower.

2. **Element Path Method:** Use **element_path_detector.py** in the same folder to hover over the element and press **Ctrl** to generate an exact path. This method is faster.

The action supports seven element parameters: Windows, Name, Control, Class, AutomationId, Index, Path, and Image Text. For Image Text detection, install Tesseract OCR using the command `pip install pytesseract` and download the setup file. If using multiple monitors, set the secondary monitor as primary and restart the ZeuZ node. This ensures reliable text input automation.   

### 3. **Launch Application**
This action in ZeuZ automates launching applications via the Windows Start menu. It clicks the Windows icon, types the application's name and presses **Enter** to open it. If the application does not appear when searched manually, users can instead use the **Run or Execute Command** action to navigate to the application's folder with the `cd` command and launch it directly. This action is ideal for tasks involving startup or execution.

### 4. **Wait for element to appear**
This action in ZeuZ waits for an element to appear within a specified time limit. If the element is detected before the time expires, the action passes and moves to the next step. If not, it fails.

ZeuZ supports two detection Methods:
1. **Element/Parent/Sibling/Index Method:** Use **InspectX64** to hover over the element and capture its identifiers. This method is slower.

2. **Element Path Method**: Use **element_path_detector.py** to generate a precise path by hovering over the element and pressing **Ctrl**. This method is faster.

The action supports eight element parameters: Window, Name, Control, Class, AutomationId, Index, Path, and Image Text. For Image Text, install Teserract OCR using `pip install pytesseract` and download the required setup file. If using multiple monitors, set the secondary monitor as primary and restart the ZeuZ node.

### 5. **Wait for element to disappear**
This action in ZeuZ waits for an element to disappear within a specified time. If the element disappears before the time limit, the action passes and proceeds; otherwise, it fails.

ZeuZ supports two detection methods:
1. **Element/Parent/Sibling/Index Method:** Use **InspectX64.exe** to hover over the element and retrieve its identifiers (slower method).

2. **Element Path Method:** Use **element_path_detector.py** to generate a precise element path by hovering over the element and pressing **Ctrl** (faster method).

The action supports eight parameters for identifying elements: Window, Name, Control, Class, AutomationId, Index, Path, and Image Text. To enable Image Text detection, install Tesseract OCR with `pip install pytesseract` and download the setup file. For multiple monitors, set the secondary monitor as primary and restart the ZeuZ node.

### 6. **Check Uncheck an Element**
This action in ZeuZ automates interactions with Windows UI elements by using their **Supported Patterns**, such as **Invoke** for buttons or **Expand** for drop-downs. If no patterns are available, it defaults to **Mouse Click**, which performs a direct click but lacks feedback and requires an active screen. Users should inspect elements using tools like **InspectX64.exe** to verify patterns and choose the appropriate method. Configuration requires a **Window Name**, at least one element property (e.g., Name or Automation ID), a **Method** (e.g., Invoke, Expand, Mouse Click), and an **Action** (e.g., Click, Set Value). Proper pattern usage ensures reliable automation, with Mouse Click as a fallback.

### 7. **Check service status**
This action retrieves the current status of a specified service and stores it as a dictionary in a designated variable. The dictionary contains key details about the service, such as whether it is running, stopped, or in another state. Users must provide the name of the service and a variable name where the dictionary will be saved. This allows subsequent actions to access and utilize the service status as needed during automation workflows.

### 8. **Close Application**
This action is used to close a specified application by executing a command in the command prompt. It effectively terminates the app's processes, ensuring it is no longer running. Users need to specify the application name or process for the command. This action is tagged with keywords like "shut down", "close", "terminate", "quit", "close app" and "close application", making it easy to identify for scenarios where closing an application is required.

### 9. **Double click**
This action performs a double-click on a specified element. If the element supports the **Invoke** pattern, the action invokes it twice; it performs two **Mouse Clicks**.

Element detection can be done using two methods:
1. **Element/Parent/Sibling/Index:** Use **InspectX64.exe** to hover over the element and retrieve its identifiers (slower method).
2. **Element Path:** Use **element_path_detector.py** to generate the exact path for faster detection.

The action supports eight parameters: **Window**, **Name**, **Control**, **Class**, **AutomationId**, **Index**, **Path**, and **Image Text**. For **Image Text**, install pytesseract and proper configuration are required, as described.

:::note

   For using image text if you are using two monitors for one pc and want to run automation on the second monitor and make sure you make the second monitor as your primary screen and restart your node.

:::

An **offset** can also be specified to interact with specific points of an element (range: -100 to 100 for x and y). For example, add a row (offset| optional parameter| 100, 0) to click on the right most pixel of the element. Similarly,
- (offset| optional parameter| -100, 0) will click on left most
- (offset| optional parameter| 0, -100) will click on top most
- (offset| optional parameter| 0, 100) will click on bottom most
- (offset| optional parameter| 0, 0) will click on the center of the element. However, tags for this action include "double-click".

### 10. **Drag and drop apps**
This action performs a drag-and-drop operation by identifying a source element and moving it to a destination based on provided parameters.

Element detection can be done using two methods:
1. The first method, **Element/Parent/Sibling/Index**, involves using **InspectX64.exe** from the ZeuZ_Python_Node/Apps/Windows folder. Activate the Mouse Cursor and Rectangle buttons, hover over the element, and retrieve its identifiers. This method is comparatively slower.

2. The second method, "element path", allows specifying the exact path to the element for faster detection. Use **element_path_detector.py** from the ZeuZ_Python_Node/Apps/Windows folder, hover over the element, and press Control to generate the path.

The action supports eight parameters: **Window**, **Name**, **LocalizedControlType**, **ClassName**, **AutomationId**, **Index**, **Path**, and **Image Text**.

Element parameters can replace the source name, and multiple parameters can be used simultaneously. For using an image as a parameter, take a screenshot of a static part of the item (e.g., a label or icon) that remains unchanged, even if other parts (like dynamic text) update, is required. The screenshot can be attached to the test case, and the action step provides details on invoking the attachment.

To use **Image Text**, install pytesseract and configure it as described. For dual monitors, ensure the second monitor is set as primary.

Tags include "drag and drop", "scroll", "swipe", "seek", "progression bar" and "navigation bar".

### 11. **Expand Collapse**
This action checks the state of an element that can be expanded or collapsed and performs the necessary expand or collapse operation.

**Element Detection:**
1. **Element/Parent/Sibling/Index:** Use **InspectX64.exe** in the ZeuZ_Python_Node/Apps/Windows folder. Activate the Mouse Cursor and Rectangle buttons, then hover over the element to retrieve its identifiers.

2. **Element Path:** Use **element_path_detector.py** in the same folder to automatically generate the path by hovering over the element and pressing control. This method is faster.

**Supported Parameters:** Provide at least one of the following: **Window**, **Name**, **Control**, **Class**, **AutomationId**, **Index**, **Path**, or **Image Text**.

**Note on Image Text:** Manually install the app by running `pip install pytesseract`. Download and install Tesseract OCR from the provided link. For multiple monitors, ensure the second monitor is set as primary and restart the node.

**Tags:** expand, collapse, click, invoke.

### 12. **Go to desktop**
This action minimizes all currently open windows on the desktop, providing a clear desktop view. It is particularly useful for accessing desktop shortcuts or files directly without manually minimizing individual windows.

### 13. **Hover over an element**
This action hovers over a specified element.

**Element Detection:** Two methods are supported:
1. **Element/Parent/Sibling/Index:** Use **InspectX64.exe** from the ZeuZ_Python_Node/Apps/Windows folder. Enable the Mouse Cursor and Rectangle Shape buttons, hover over the element, and retrieve its identifiers. This method is slower.

2. **Element Path:** Use **element_path_detector.py** from the same folder. Hover over the element, press control, and obtain its exact path. This method is faster.

**Supported Parameters:** Provide one or more from the following:
- **Window**
- **Name**
- **Control**
- **Class**
- **AutomationId**
- **Index**
- **Path**
- **Image Text**.

**Image Text Setup:** Install `pytesseract` via `pip install pytesseract`. Download and install Tesseract-OCR as per provided instructions.

:::note

   For dual monitors, set the secondary monitor as primary and restart the node to enable automation on the secondary screen.

:::

### 14. **If an item is Found or Not**
This action is designed to execute specific actions based on whether a condition is true or false, resembling the "if-else" logic used in programming. It evaluates a condition and returns a boolean value (true/false).

**How It Works:**
- This action checks if a specified element (identified using parameters like window, name, class, path, etc) exists on the page.
- If the element is found (returns true), the actions defined for the "True" condition are executed.
- If the element is not found (returns false), the actions defined for the "False" condition are executed.
- At least one condition ("True" or "False") must have associated actions, though both can be specified.
- An optional wait parameter can be set to wait for the element to appear. If it appears within the wait time, the actions for the "True" condition will execute.

This action ensures dynamic control over workflows based on real-time conditions.

### 15. **Keystroke chars**
This action is designed to input specific keyboard characters into an input field or text area. To use it, simply specify the characters in the value field of the action. By default, the action uses the **pyautogui** module to send keyboard inputs. However, if the system is more compatible with **autoit** instead, the method can be switched by setting the "method" value to **autoit**.

It is important to note that this action does not identify or locate a specific element; it directly sends keyboard events to the active GUI. For scenarios where targeting a specific text box or field is required, the "Enter Text" action should be used.

Additionally, **pyautogui** and **autoit** are seperate Python modules that perform similar functions of sending keyboard and mouse events. Some software applications respond better to **pyautogui**, while others work more effectively with **autoit**, providing flexibility based on system compatibility.

### 16. **Keystroke multiple Keys**
This action is used to press certain keyboard keys or to press a key on the keyboard. Keystroke keys are actions that executed by **pyautogui** or **autoit** to perform various key events.

**How It Works**
- If you need to press any keystroke keys, first you have to provide your desired key (like Enter, Shift, Tab, Ctrl, Alt etc). Then it directly press that specific key from the keyboard.
- If you want to press multiple keys at a time you have to provide the keys seperated by `+` symbol. Example: CTRL+SHIFT+A, CTRL+TAB etc.
- If you want to use CONTROL and PLUS sign as a keystroke type "ctrl+plus".
- It can also press single key or multiple keys by given number of times. Example: SPACE,3 (The action will press 3 times) another example: SHIFT+A, 4. Moreover this action will be performed by **pyautogui** by default. If your system works fine with **autoit** instead of **pyautogui** you can simply use the first row of method and set the value of it into **autoit**.

:::note

   **pyautogui** and **autoit** both are python modules seperate from each other used to send keyboard and mouse events. On some software, **pyautogui** works well and on some other softwares **autoit** works well. However, both the methods are available.

:::

### 17. **Keystroke single key**
This action is used to press a single key on the keyboard. It allows specifying a desired key (e.g., Enter, Shift, Tab, Ctrl, Alt etc.) to be executed as a single keystroke. The action is performed using either **pyautogui** or **autoit**, depending on the system's compatibility. For example, pressing the "Enter" key would simulate the physical keypress event, making it useful for automation tasks like form submissions or navigation.

### 18. **List all service names**
This action retrieves and saves the names of all services as a list in a specified variable. It allows verification of whether a particular service exists within the retrieved list.

### 19. **Open Electron App**
This action is designed to open desktop applications built on the Electron framework. Once the application is launched, further interactions can be performed using Selenium actions to communicate with the opened app window.

**Tags:** Electron, Open Electron, Launch, Desktop.

### 20. **Right Click**
This action performs a right mouse click on a specified element.

**Element Detection Methods:**
1. **Element/Parent/Sibling/Index:** Use **InspectX64.exe** from the ZeuZ_Python_Node/Apps/Windows folder to obtain element identifiers. This method is slower.

2. **Element Path:** Use **element_path_detector.py** from the same folder to generate a faster, precise path by hovering over the element and pressing Control.

Supported element parameters include: **Window**, **Name**, **Control**, **Class**, **AutomationId**, **Index**, **Path**, and **Image Text**. For Image Text, install `pytesseract` via `pip install pytesseract` and configure the app as described.

:::note

   To use image text with two monitors on a single PC for automation on the second monitor, set the second monitor as the primary screen and restart the node.

:::

**Offset Option:** Elements can be interacted with using an offset, where the x and y range is -100 to 100. For instance:
- **(offset|optional parameter|100, 0):** Clicks the rightmost pixel of the element.
- **(offset|optional parameter|-100, 0):** Clicks the leftmost pixel.
- **(offset|optional parameter|0, -100):** Clicks the topmost pixel.
- **(offset|optional parameter|0, 100):** Clicks the bottomost pixel.
- **(offset|optional parameter|0, 0):** Clicks the center of the element.

**Tag:** Right click.

### 21. **Save attribute**
This action saves an element's text into a shared variable for later use. The field to save (e.g., value, automationid, class, name, control) must be specified.

**Element Detection Methods:**
1. **Element/Parent/Sibling/Index:** Use **InspectX64.exe** from the ZeuZ_Python_Node/Apps/Windows folder. Hover over the element after activating the Mouse Cursor and Rectangle buttons to get its identifiers. This method is slower.

2. **Element Path:** Use **element_path_detector.py** from the same folder to automatically generate the element path by hovering over the element and pressing Control. This method is faster.

Supported element parameters include: **Window**, **Name**, **Control**, **Class**, **AutomationId**, **Index**, **Path** or **Image Text**.

:::note

   For Image Text, install `pytesseract` using `pip install pytesseract`and download Tesseract OCR. If using two monitors, set the second monitor as the primary screen and restart the node.

:::

### 22. **Save attribute values in list**
This action is designed to collect data from a table or a page, storing it as a list. It can also collect multiple rows of data and organize them into lists of lists for structured representation.

**How it Works:**
- **Element Parameter:** The parent element parameter specifies the container holding all the items to be collected. This could be an ID, an element parameter, or a table identifier.
- **Target Parameter:** Defines the common attribute(s) of the elements from which data is to be collected. Multiple target attributes can be specified. The extracted data is then stored in the specified target parameter.

This action is useful for retrieving structured data, such as tables or grouped information, for further processing or validation.

### 23. **Start service**
This action is designed to start a specified service on the system. To execute, the user provides the name or identifier of the service that needs to be initiated. Once executed, the action ensures that the service is up and running, making it particularly useful for enabling services required by specific applications or processes.

### 24. **Stop service**
This action is used to stop a specified service on the system. By providing the name or identifier of the service, the action ensures that the service is stopped. This is particularly useful for terminating unnecessary or resource-intensive services during specific operations or processes.

### 25. **Validate Text**
This action is used to validate whether the text of a specified element matches an expected value. By selecting the element using the provided parameters, the action retrieves the text from the 'Value' field of the element and compares it with the given expected text. If the text match, the validation is successful. This action is useful for verifying the content of specific elements during testing.

### 26. **Scroll to Element**
The **Scroll to Element** action is used to bring a specific element into view by scrolling to its location on the screen. The element is identified using the provided parameters, such as name, class, or path. Once the element is detected, the action ensures it is visible within the current viewport, allowing for further interactions or validations. This action is particularly useful when working with elements that are not initially visible due to scrolling constraints.

### 27. **Swipe**
The **Swipe Inside Element** action is used to perform a swipe gesture within a specified element. Users can define the direction of the swipe as **up**, **down**, **left**, or **right** based on the desired interaction. For example, setting the direction parameter to **down** will scroll the content downward inside the element. The default swipe direction is **down** if no specific direction is provided. This action is commonly used for navigating through scrollable content within a particular element on the screen.
