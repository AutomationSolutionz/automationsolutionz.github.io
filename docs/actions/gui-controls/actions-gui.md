---
id: actions-gui
title: Graphical UI Control Actions
---

## Description
Graphical User Interface (GUI) control actions are user interactions with apllication elements like buttons, menus, and text fields to perform tasks. These actions include clicking, hovering, typing, selecting, scrolling, and dragging, providing an intuitive way to navigate and operate software efficiently. They enhance usability by simplifying complex tasks into visual commands. In testing and automation, tools like Selenium or ZeuZ simulate these actions to ensure the application functions correctly and responds to user input.

## Examples of Graphical UI Actions

### 1. **Playback Recorded Events**
Uploading `.zvt` files allows users to replay recorded interactions or scenarios within a software or testing tool. These files capture user actions like clicks, typing, and navigation, which the tool simulates in the same sequence during playback. By uploading the `.zvt` file, the tool executes the recorded actions, mimicking the original interactions and validating the application's response. This functionality is commonly used in test automation to ensure consistent execution of previously recorded tests, in bug reproduction to replicate issues as reported, and in training to demonstrate workflows. It streamlines repetitive tasks, enhances accuracy, and saves time, particularly in software testing and quality assurance processes.

### 2. **Check for Element**
This action checks whether a specific element is visible on the screen and stores the result in a variable named **"check"** by default, or a custom name provided by the user. If the element is visible, the variable contains **True**; otherwise, it contains **False**. The result can be used in conditional operations, such as `if-else` statements, to guide workflow decisions. This action is particularly useful in automated testing and workflows to verify element visibility and dynamically respond to its presence.

### 3. **Click Element**
This action performs a single click on an uploaded image specified in the attachment section, using the image as a visual reference. Users can define the click position, such as the center or custom coordinates. It is useful for automating interactions with graphical elements, like buttons or icons, especially in scenarios where traditional element locators are unavailable. This allows precise and image-based interaction in workflows or automation tasks.

### 4. **Click Element with OCR**
This action uses Optical Charger Recognition (OCR) to find and click on specified text within an interface. Users define the text to search for and can choose a matching method-**Match** for high accuracy, **Partial Match** for moderate similarity, or **Loose Match** for greater flexibility with OCR imperfections. For instance, if the text specified is **"E-Transfer Total"** and OCR detects **"Transfer Tol"**, the method influences the matching score, with **Loose Match** accepting weaker similarities. This action is ideal for automating text-based interactions, offering flexibility in environments where text recognition may vary.

### 5. **Click on Coordinates**
This action executes a left-click at a specific location on the screen based on the provided **X, Y coordinates**, allowing precise interaction with the interface. Users input the desired coordinates, such as `271, 1051`, and the tool clicks at the specified point. It is particularly useful for interacting with elements that cannot be identified programmatically, such as fixed-position items or non-started GUIs. This action is ideal for automating tasks in graphic-based interfaces or simulating user clicks with precision in testing or workflow automation scenarios.

### 6. **Close Browser**
The action to close a running program terminates an active application or process on the system, either gracefully or forcibly. Users specify the program by its name, window title, or process ID, and the action attempts to safely close it, allowing any ongoing tasks to complete. If the program does not respond, it can be forcibly terminated. This action is useful for managing workflows, freeing up system resources, or automating tasks that require starting and stopping applications.

### 7. **Double Click Element**
This action performs a double-click on a specified image uploaded in the attachment section, using the image as a visual reference to locate the target on the screen. Users can customize the click position, such as the center or specific coordinates. It is ideal for automating tasks involving graphical elements like icons or files, especially in non-standard interfaces or dynamic environments where precise image-based interactions are required.

### 8. **Double Click Element with OCR**
This action allows users to locate specified text on the screen using OCR and perform a double-click on it. The user specifies the text to be targeted, and the tool searches for it on the interface. If the exact text is not found, optional parameters like matching methods can be used to refine the search. The **Match** method ensures high accuracy by requiring strong similarity, while **Partial Match** allows moderate similarity, and **Loose Match** permits weaker similarities for more flexibility. For instance, if the specified text is **"E-Transfer Total"** and OCR detects **Transfer Tol**, the method selected influences the matching score, with **Loose Match** producing the highest tolerance. This action is particularly useful for automating interactions with text-based elements in dynamic environments, providing both precision and adaptability to handle variations or OCR imperfections. 

### 9. **Drag an element to a specific coordinates**
The drag action involves moving an element from a defined position on a source image (e.g., center, top-left, or custom point) to a target location specified by X, Y coordinates. It simulates user interaction by clicking and holding at the source position, dragging the element, and releasing it at the destination. This action is commonly used in test automation to verify drag-and-drop functionalities in web or graphical interfaces, ensuring the UI responds correctly to user inputs. Tools like Selenium or ZeuZ support such interactions for robust testing.

[Video - Drag an element to a specific coordinates](https://drive.google.com/file/d/11YfBRtlP3xBOVH4a9s_68Pz7eGurWopr/view?usp=sharing)

### 10. **Drag element by images**
The drag action allows moving an element from a defined position on a **source image** to a specific position on a **destination image**, simulating a user interaction. The starting point on the source image can be set, such as the **center**, **top-left**, or any custom coordinate within the image.

[Video - Drag element by images](https://drive.google.com/file/d/11YfBRtlP3xBOVH4a9s_68Pz7eGurWopr/view?usp=sharing)

The process involves clicking and holding the element at the specified position on the source image, dragging it across the interface, and releasing it at the target location on the destination image. This action is typically used to validate drag-and-drop functionalities where an element must move from one visual context to another, ensuring accurate UI responses.

Automation tools like ZeuZ often include this feature to test such interactions efficiently.

### 11. **Enter Text**
This action is used to input text into a specified location, simulating user interaction with a text field or input area. The location is typically defined by coordinates, a specific element selector, or an input box identifier on the interface. The process involves focusing on the target field, entering the desired text, and optionally performing additional steps like pressing "Enter" or moving to the next field.

This action is commonly used in test automation to validate text entry functionality in forms, search bars, or other input areas, ensuring that the application processes the input accurately. Tools like ZeuZ support this action for seamless and precise text entry during testing.

### 12. **Execute hotkey**
This action simulates executing a hotkey sequence, which is a combination of keys pressed simultaneously to perform specific tasks. The hotkey sequence is defined using keys seperated by the plus (`+`) symbol, such as **Ctrl + S**, **Alt + Tab**, or **Ctrl + Shift + S**, and supports various valid key combinations detailed in the **hotkey_arguments** documentation. Additionally, the action allows repetition of the same hotkey sequence by specifying the number of times it should be executed using the **count** parameter. For example, setting `count = 3` repeats the hotkey action three times. This functionality is commonly used in automation testing to validate the behavior of keyboard shortcuts, ensuring that specific key combinations trigger the intended actions, such as saving a file, switching between applications, or invoking advanced commands. Tools like ZeuZ incorporate this feature to streamline and verify keyboard-based interactions efficiently.

### 13. **Finding element from dropdown list**
This action automates scrolling within a listbox to locate a desired element, such as an image, by repeatedly scrolling and checking for its presence. The **maximum tries** parameter limits the number of scroll attempts, ensuring the action stops after a specified number (e.g., 10) if the element is not found. If located, the scrolling stops immediately. This functionality is useful for navigating dynamic content or long lists in automation, with tools like ZeuZ enabling efficient testing of scrollable interfaces.

### 14. **Get Bounding Box**
This action retrieves the bounding box parameters of an image displayed on the screen, such as the **X** and **Y** **coordinates**, **width**, and **height**. The image to be located must be uploaded in the attachment section. The action identifies the image's position and dimensions and stores these parameters in a variable.

You can specify a custom variable name to store the parameters; by default, the variable is named **cords**. The variable is structured as a list, where you can access individual parameters by their index:
 - **cords[0]:** X coordinate
 - **cords[1]:** Y coordinate
 - **cords[2]:** Width
 - **cords[3]:** Height

This action is particularly useful in automation for validating or interacting with specific UI elements based on their location and size. Tools like ZeuZ support this feature to enable precise identification and interaction with visual elements during testing.

### 15. **Get Text using OCR with Coordinates**
This action lets one crop a specific portion of a screenshot and extract the text from that area by defining the **top**, **left**, **bottom**, and **right** coordinates to create a bounding box around the desired text. For example, to extract the date of creation of maps, the coordinates that enclose the text would need to be specified. A variable name must also be provided to store the extracted text, which will be returned as a variable. This action is useful for automating the extraction of specific information from screenshots during testing, and tools like ZeuZ can facilitate this process efficiently.

### 16. **Get Text using OCR with Image**
This action enables the extraction of text based on its positional relationship to a provided image. The image must be attached in the attachment section, and the direction of the text relative to the image-**left**, **right**, **top**, or **bottom**-needs to be specified. An optional **text gap** parameter, given as an integer, can further refine the extraction by indicating the proximity of the text to the image.

A variable name must also be provided to store the extracted text, which will be returned as output. This action is useful in scenarios where text extraction needs to be contextualized by its placement relative to an image, allowing for precise data retrieval during automation or testing processes. Tools like ZeuZ can efficiently implement this action for accurate text extraction tasks.

### 17. **Get Text using OCR with Text**
This action extracts text based on its position relative to a specified text string, which is located using Optical Character Recognition (OCR). Parameters such as **method** and **threshold** can be used to fine-tune the search for the reference text. After locating it, the action extracts the desired text in a specified direction-**left**, **right**, **top**, or **bottom**. An optional **text gap** parameter allows further precision by defining the distance of the desired text from the reference. A variable name must be provided to store the extracted text, making this action ideal for automation scenarios requiring context-sensitive text retrieval. Tools like ZeuZ efficiently handle such OCR-based tasks.

### 18. **Hover over an element**
This action simulates hovering the mouse over a specified element on the screen, represented by an image. The position on the image where the hover occurs can be defined, such as the **center**, **top-left**, or any custom point within the image. For example, selecting the **center** will move the mouse pointer to the middle of the image and perform the hover action.

This action is commonly used to trigger hover-based UI behaviors, such as displaying tooltips, dropdown menus, or highlighting elements, during testing or automation. Tools like ZeuZ support this functionality to validate hover interactions and ensure the UI responds as expected.

### 19. **Keystroke Chars**
This action simulates typing sequential characters or strings into an input field or text area. The user specifies the text to be typed, and the action types each character in sequence. Additionally, a delay interval can be set between typing each character to mimic natural typing speed, with the default delay set to 0 (no delay).

This action is commonly used in automation for scenarios requiring text input, such as form filling or search functionality, ensuring accurate and realistic simulation of user interactions. Tools like ZeuZ support this feature for precise and customizable input automation.

### 20. **Move mouse cursor**
This action moves the mouse cursor to a specified coordinate on the screen, either relative to its current position or as an absolute position, based on the **relative** parameter. Setting **relative = true** moves the cursor relative to its current location, while **relative = false** moves it to an absolute screen coordinate.

An optional **duration** parameter, specified in seconds (as a float), can simulate natural cursor movement by creating a delay as the cursor transitions from one position to another. This action is useful in automation for replicating human-like cursor movements and interactions with specific screen elements. Tags like "Mouse" and "Cursor" categorize this functionality for easy reference in tools like ZeuZ.

### 21. **Right Click Element**
This action simulates a right-click on a specified image provided in the attachment section. The click can be performed at a defined position on the image, such as the **center**, **top-left**, or a custom coordinate within the image. For example, selecting **center** will perform the right-click at the middle of the image.

This functionality is commonly used in automation testing to interact with context menus or trigger actions associated with a right-click on specific UI elements. Tools like ZeuZ support this action for precise and effective interaction with image-based elements.

### 22. **Right Click Element with OCR**
This action uses Optical Character Recognition (OCR) to locate specified text on the screen and perform a right-click on it. The user specifies the text to be clicked and can adjust optional parameters such as **method** and **threshold** to refine the search process.
- **Method:** Determines how closely the identified text must match the specified text. Options include:
    - **Match:** Requires strong similarity for a high score.
    - **Partial Match:** Allows moderate similarity, producing scores in between.
    - **Loose Match:** Accepts weaker similarity, resulting in higher scores for less exact matches. For example, if the specified text is "E-Transfer Total" and OCR identifies "Transfer Tol", the **Match** method may give a score of 86, while **Loose Match** could score 92.
- **Threshold:** Sets a minimum score for text matching to qualify for a click. For strict conditions, a thrshold of **90** ensures only text with a matching score of 90 or higher is clicked. For exact matches, a threshold of **100** is used.

This action is useful for automation tasks requiring interaction with text elements detected dynamically through OCR, allowing customization based on accuracy and flexibility needs. Tools like ZeuZ enable precise implementation of such text-based interactions.

### 23. **Take Partial Screenshot**
This action captures a screenshot of a specific region of the currently active screen rather than the entire screen. To perform this, the user must provide:
1. **Full Path:** The file path and name where the screenshot will be saved.
2. **Bounding Box Parameters:** Four integers defining the region to capture:
   - **X Coordinate:** The horizontal position of the top-left corner.
   - **Y Coordinate:** The vertical position of the top-left corner.
   - **Width:** The width of the region to capture.
   - **Height:** The height of the region to capture.

This action is useful for isolating and saving a specific portion of the screen, such as a dialog box, menu, or area of interest, during automation or testing processes. Tools like ZeuZ make this process efficient by supporting precise region-based screenshot functionality.

### 24. **Wait for an element to appear**
This action searches for a specified image attached in the test session and waits for it to appear on the screen. The image must be uploaded in the attachment section, and the filename (e.g., **file_name.png**) should be mentioned explicitly.

An optional **wait** parameter can be set to specify the maximum time (in seconds) to wait for the image to appear. By default, the action waits for **10 seconds**. If the image appears within the defined time, the action proceeds; otherwise, it times out.

This functionality is commonly used in automation testing to verify the presence of specific visual elements, ensuring the application displays the required UI components within a set timeframe. Tools like ZeuZ provide this feature to facilitate efficient image-based validation.

### 25. **Wait for an element to disappear**
This action monitors the screen to detect when a specified image, provided in the attachment section, disappears. The image must be uploaded, and its filename (e.g., **file_name.png**) should be specified.

An optional **wait** parameter allows the user to set the maximum time (in seconds) to wait for the image's disappearance. By default, the action waits for **10 seconds**. If the image disappears within the specified time, the action proceeds; otherwise, it times out.

This functionality is particularly useful in automation testing to confirm that certain visual elements, such as loading screens, notifications, or temporary UI elements, are removed as expected. Tools like ZeuZ enable this feature to ensure dynamic elements behave correctly during tests.

### 26. **Launch program by given program name**
This action is used to launch a specified program or application on the system. The user needs to provide the path to the program's executable file, ensuring the correct application is targeted. Optionally, additional parameters or arguments can be included if the program supports command-line inputs.

This action is particularly useful in automation scenarios where specific applications need to be opened as part of the testing or workflow process. Tools like ZeuZ facilitate this by enabling seamless integration and execution of programs during test sessions.

[Video - Launch program by given program name](https://drive.google.com/file/d/1saADpTTKdwkEac49KtY93KHqkqowkeGm/view?usp=sharing)