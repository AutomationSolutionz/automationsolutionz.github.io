---
id: actions-web
title: Web actions
---

:::tip

- **Drivers**: Selenium

:::

These actions are used to automate web browsers and interaction with web pages/apps.


## Examples of Web Actions

### 1. **Click an Element**
This action is used to **click an element** by identifying it through properties like ID or class, with the option for partial matches using a symbol (e.g., `id` for flexible identification). Additionally, an optional parameter, `use js`, can be set to `true` to execute the click using JavaScript, which is essential for environments like **iOS Safari** where native clicks may not work. This action ensures reliable element interaction in automated testing across different browsers and devices. Tags include: click, element properties, tap, and mouse click.

[Video - Click an Element](https://drive.google.com/file/d/1JKklbQNFMSejvg5BPj4mEgcXlr4nLrVm/view?usp=sharing)

### 2. **Enter text**
This action is used to **write text** to a specific element, such as an input field on a webpage or application. The user must provide an **identifier** for the input field, which can include attributes like **ID**, **class**, **type**, **title**, or **value**. The automation tool then searches the page for the provided identifier and writes the specified text into the input field.

[Video - Enter text](https://drive.google.com/file/d/13B51CW2dlDcEgSqbwFpX1jSU7PtmEKhi/view?usp=drive_link)

### 3. **Go to Webpage**
This action is used to **launch a specified web browser** and navigate to a given **URL** by taking the provided URL, setting the necessary browser capabilities, and loading the webpage. The browser's capabilities, such as version or platform, are configured before navigating. Additionally, a **wait time** is included for searching elements on the webpage, with a default timeout of 10 seconds, which applies throughout the entire test case to ensure the automation can handle elements that may take time to appear.

[Video - Go to Webpage](https://drive.google.com/file/d/1tEjX-3RhEE0zPm7J-IAeZGek-oqXSZMO/view?usp=sharing)

[🔗 USAGE GUIDE](/docs/actions/web/go-to-link) 

### 4. **If an Item is Found or Not**
This action allows for conditional execution of tasks based on whether an element is found on a webpage or application, similar to an "if-else" statement in programming. By providing an identifier (e.g., **resource-id**, **class**, or **text**), the tool checks for the element's presence and returns a **boolean value** (true/false). If the element is found (**true**), specified actions will run, and if not (**false**), different actions can be executed. You can set conditions for both outcomes or just one. Additionally, an optional **wait parameter** can be used to delay execution until the element appears.

[Video - If an Item is Found or Not](https://drive.google.com/file/d/11tI9FGCe_qsfHVDSm6_PfoUpM3g_D3_l/view?usp=sharing)

### 5. **Validate Partial Text**
This action is used to **verify** whether a text field or text view contains the **expected data**, allowing for partial matches. It works by collecting text from an element using its **ID** or other attributes and comparing it with the provided string. If the collected text partially matches the expected text, the action passes. The element identifier doesn't need to be unique; if there are multiple elements with the same identifier, an **index** can be used to specify which one to check. A partial match is considered a successful validation.

[Video - Validate Partial Text](https://drive.google.com/file/d/14mDqYocygKDFlAtOPDLmSaI14Eoxx8HJ/view?usp=sharing)

### 6. **Wait for an element to appear**
This action waits for a specified **element** to appear on a webpage within a given time limit. If the element appears within the set time, the action **passes** and the test proceeds. If it doesn't appear, the action **fails**. This is particularly useful for handling pages that need time to load, ensuring the test continues only when the desired element is visible within the specified duration.

[Video - Wait for an element to appear](https://drive.google.com/file/d/1Zc4uiTTYoS1RZifveyJOX7bY3IgaRQuZ/view?usp=sharing)

### 7. **Wait for an element to disappear**
This action waits for a specified **element to disappear** within a given time frame. If the element disappears within the set time, the action **passes**, and if it remains visible beyond that time, the action **fails**. This is useful in situations where a page needs time to load, ensuring that tests proceed only when the element has been removed within the specified duration.

### 8. **Check or uncheck single element**
This action is used to **check or uncheck** a specified checkbox element. If the checkbox is already in the desired state (checked or unchecked), the action will **skip** making any changes. For example, if the task is to check a checkbox that is already checked, it will remain checked, and no action will be taken. This ensures the checkbox only changes its state when necessary, avoiding redundant actions.

### 9. **Click and Download Attachments**
This action allows clicking on an **attachment element** to either **download the file** to a specified directory or **attach files** to a report. It identifies the attachment, initiates the download, and stores the file in a predefined directory. Additionally, it can automate the process of attaching files directly to reports, making it useful for efficient file management in automated workflows or reporting.

### 10. **Save Attribute Value**
This action is used to **save the value of an attribute** from a specified element on a webpage or application. It is typically used to extract a particular attribute's value, such as **ID**, **class**, or **text**, for future comparisons or validations. To use this application, **element parameters** are needed to identify and locate the element. Once located, the desired attribute is specified, and its value is saved for later use.
It is important to note that the attribute being saved should **not** be the same attribute used to locate the element, as this can lead to incorrect or unexpected results.

[Video - Save Attribute Value](https://drive.google.com/file/d/1KkkhWgeuq2_2OAGslS7nM8lkVD5foZBc/view?usp=sharing)

### 11. **Save attribute values in list**
This action is used to **collect data** from a table or webpage and store it as a **list**. It can capture multiple items and organize them into **lists of lists** for scenarios involving multiple rows or sets of data. By scanning the specified elements, the action retrieves the data and structures it accordingly, making it easy to manage and access for further automation or analysis.

[Video - Save attribute values in list](https://drive.google.com/file/d/15pyMCDVK-bPyTLl2s_szhbD3lcn-M0O2/view?usp=sharing)

### 12. **Scroll to an Element**
This action is used to **scroll to a specific element** by controlling the scroll bar, ensuring it is visible. It can use methods like **JS**, **WebDriver**, or **Action Chain**, with **JS** as the default. The **align to top** option positions the element at the top or bottom of the screen, with the default set to **yes** (align to top). Additionally, you can set an **extra scroll** as a percentage of the screen height or width to ensure full visibility, or disable it by setting the value to **0**. This is useful for handling large or dynamically loaded pages.

[Video - Scroll to an Element](https://drive.google.com/file/d/1DycCu3OXP6UEEeNkiofsuSCi-dBaRmjt/view?usp=sharing)

### 13. **Scroll element to top**
This action is used when scrolling to an element fails, particularly in scenarios involving iFrames or complex structures where the standard "Scroll to Element" action doesn't work. By utilizing Selenium’s `element location_once_scrolled_into_view`feature, it ensures the element is scrolled into view. It supports advanced functionalities like iFrame switching, handling multiple element parameters, and managing parent-child structures. The **Scroll element to top** command ensures the element is fully visible at the top of the viewport for seamless interaction.

[Video - Scroll element to top](https://drive.google.com/file/d/1DycCu3OXP6UEEeNkiofsuSCi-dBaRmjt/view?usp=sharing)

### 14. **Select by Visible Text**
This action uses Selenium WebDriver's **Select** class to **select or deselect options** in a dropdown by matching the **visible text**. It interacts with the HTML `<select>` tag and searches for options based on the displayed text, rather than using the option's index or value. The action selects or deselects the option that matches the provided text, making it useful for handling dropdown menus where the visible text is the key selection criteria.

[Video - Select by Visible Text](https://drive.google.com/file/d/10_FbToktvIRHLiS9pb930j3KJnTrZZ_E/view?usp=sharing)

### 15. **Validate Exact Text**
This action is used to **validate the full text** of a specified element by comparing the provided text with the element's entire content. The validation passes only if the text matches **exactly**; partial matches are not accepted.

[Video - Validate Exact Text](https://drive.google.com/file/d/14mDqYocygKDFlAtOPDLmSaI14Eoxx8HJ/view?usp=sharing)

### 16. **Keystroke Keys by Element Properties**
This action simulates **keystrokes** like **ENTER** or **TAB** on a specific element using Selenium. First, the element is located using properties such as **ID**, **class**, or **type**, and then the designated keystroke is performed. The **element parameter** identifies the element, while the **keystroke keys** specify the action (e.g., ENTER, TAB). This is useful for automating tasks like form submissions or navigating between fields.

### 17. **Keystroke keys**
This action simulates pressing **keyboard keys** using Selenium for key events. You provide the desired key, such as **Enter**, **Shift**, **Tab**, **Ctrl**, or **Alt**, and Selenium will directly press that key. This is useful for automating key-based tasks like form submissions, field navigation, or executing shortcuts.

### 18. **Locate Element By Siblings**
This action is used to **locate an element** by referencing its **siblings** and **parent** when unique identification is difficult. You provide the target element's parameters (like **tag**, **id**, or **class**), a unique sibling under the same parent, and the common parent they share. Once the element is located, various actions like **click**, **enter text**, **keystrokes**, or **scroll** can be performed. This method is effective for handling duplicate elements by leveraging their relationship to other elements in the hierarchy.

### 19. **Scroll in a direction**
This action scrolls **750 pixels** in a specified direction by default, but you can adjust the pixel value as needed. By default, it scrolls the main HTML page, but if there are multiple scrollable areas, you can specify which element to scroll using the **element parameter**. This action is useful for managing scroll behavior either on the entire page or within a specific element.

### 20. **Select Visible Text With Siblings**
The **Select Visible Text With Siblings** action selects a dropdown option by matching its **visible text** and using a **sibling element** as a reference. It locates the sibling under the same parent as the dropdown option, making it easier to identify and select the correct option when direct identification is challenging.

[🔗 USAGE GUIDE](/docs/actions/web/select-visible-text-with-siblings)

### 21. **Switch browser window/tab**
This action allows switching between browser tabs using either the **tab title** or **tab index**. For the tab title, the full name can be provided, or partial matching can be done by adding an asterisk (*) before the title. If the title is unavailable, the **tab index** can be used, where the first tab is indexed as 0. To switch to the most recently opened tab, -1 can be used as the index. This action helps in efficiently navigating between different tabs in a browser.

[Video - Switch browser window/tab](https://drive.google.com/file/d/15TQlSsjvRrYEL0UUlczrkTAb-p8Ld81I/view?usp=sharing)

[🔗 USAGE GUIDE](/docs/actions/web/switch-browser-window-tab)

### 22. **Upload a file**
This action automates file uploads in cases where the upload window is outside of Selenium's control. It uses **Microsoft System API** and **PyAutoGUI** to handle the file upload access. This allows automating interactions with operating system-level file upload windows, which Selenium cannot directly manage, by simulating mouse and keyboard actions to select and upload files. This is useful for automating file uploads in complex web applications where Selenium alone is insufficient.

[Video - File upload](https://drive.google.com/file/d/1s1ueblNnpp7Wv-gukMxBybEv0RLKzsVZ/view?usp=sharing)

[🔗 USAGE GUIDE](/docs/actions/web/upload-a-file)

### 23. **Handle Alert**
This action is used to **accept** or **decline alert boxes** that display notifications, ask for permissions, or give warnings. Alerts differ from regular windows because ther are **blocking**, meaning no other actions can be performed on the webpage until the alert is addressed. The action waits for the alert to appear for up to **5 seconds** by default, but the wait time can be customized with an optional parameter.

[Video - Handle Alert](https://drive.google.com/file/d/1tqmBuziA81IW6GZjHccOAmQ5G6TxMucn/view?usp=drive_link)

[🔗 USAGE GUIDE](/docs/actions/web/handle-alert)

### 24. **Keystroke chars**
This action allows typing specific keyboard characters into an input field or textarea using its **identifier** (such as id, class, type, title, or value). After providing the identifier and the desired characters, the action simulates typing those characters directly into the field, replicating keyboard input. This is useful for automating text input in web forms or fields.

[🔗 USAGE GUIDE](/docs/actions/web/keystroke-chars)

### 25. **Navigate - Back**
This action simulates the browser's "back" button. It navigates to the previous page in the browser's history, effectively replicating the action pressing the "back" button to return to the last visited page.

[🔗 USAGE GUIDE](/docs/actions/web/navigate-back)

### 26. **Navigate - Forward**
This action simulates the browser's "forward" button. It navigates to the next page in the browser's history, replicating the action of pressing the "forward" button to move to the page visited after the current one.

[🔗 USAGE GUIDE](/docs/actions/web/navigate-forward)

### 27. **Navigate - Refresh**
This action simulates the browser's "refresh" button. It reloads the current page, effectively performing the same function as pressing the "refresh" button in the browser, which is useful for updating or reloading page content.

[🔗 USAGE GUIDE](/docs/actions/web/navigate-refresh)

### 28. **Select Element by Index**
This action uses the **Select** class in Selenium WebDriver to select an option in a dropdown by its index. The action selects an option from a dropdown by specifying the **index** number instead of the option's visible text. The index is an integer value, starting from **0**, which represents the position of the option in the dropdown list. This method is similar to selecting by visible text but relies on the index to choose the desired option. The **Select** class provides methods to help with selecting or deselecting options in HTML dropdowns.

[Video - Select Element by Index](https://drive.google.com/file/d/10_FbToktvIRHLiS9pb930j3KJnTrZZ_E/view?usp=sharing)

[🔗 USAGE GUIDE](/docs/actions/web/select-element-by-index)

### 29. **Select Element by Value**
This action uses the **Select** class in Selenium WebDriver to select an option in a dropdown based on the "value" attribute of the option tag. Similar to selecting an option by visible text or index, this method selects the option by its **value** attribute. The action accepts the **value** as a string and selects the dropdown option whose **value** attribute matches the specified parameter. The **Select** class handles this by interacting with the HTML **SELECT** tag and using the value to choose the correct option.

[Video - Select Element by Value](https://drive.google.com/file/d/10_FbToktvIRHLiS9pb930j3KJnTrZZ_E/view?usp=sharing)

[🔗 USAGE GUIDE](/docs/actions/web/select-element-by-value)

### 30. **Start Timer**
This action sets a timer to control when a test case will start. The value in the **value field** determines the timing in seconds.  
A negative value (e.g., `-5`) triggers the action 5 seconds earlier, while a positive value (e.g., `5`) delays execution by 5 seconds. This allows precise control over test case timing in relation to other actions or events.

[🔗 USAGE GUIDE](/docs/actions/web/start-timer)

### 31. **Click and Hold an Element**
This action is used to click and hold on an element by identifying it through properties like id, class, type, or title. Once the element is located using these attributes, the action performs a click-and-hold operation, useful for tasks such as moving or extended selection actions.

[🔗 USAGE GUIDE](/docs/actions/web/click-and-hold-an-element)

### 32. **Change Attribute Value**
This action is used to modify the value of any HTML attribute, except the class attribute. To change an attribute's value, first, provide the identifier (such as id, type, title, or value) to locate the element. Then, the attribute value to be modified and the new value to replace it with should be specified. The action will search the page using the provided idetifier, locate the element, and update the specified attribute with the new value.

[🔗 USAGE GUIDE](/docs/actions/web/change-attribute-value)

### 33. **Check or uncheck all elements**
This action is designed to check all checkboxes under a specified parent element. Users need to provide the parent element, such as a form, using the "element parameter". The checkboxes themselves are located using the "target parameter", which identifies them based on common attributes like name, class, or type. Once the form is identified, the action will check all the checkboxes that match the given attributes under that form.

[🔗 USAGE GUIDE](/docs/actions/web/check-or-uncheck-all-elements)

### 34. **Check or uncheck multiple elements**
This action requires users to specify a parent element, such as a form, that contains multiple checkboxes. If users want to check some boxes and uncheck others, they need to locate the form using the "element parameter" and identify the checkboxes individually by their unique attributes using the "target parameter". Once the form is located, the action will check or uncheck each checkbox based on the provided attributes, ensuring the correct boxes are selected or deselected.

[🔗 USAGE GUIDE](/docs/actions/web/check-or-uncheck-multiple-elements)

### 35. **Close tab**
This action allows for closing one or multiple browser tabs. To close a single tab, users can provide either the tab title or tab index. For closing multiple tabs, users can add additional rows with either the titles or indices of the tabs they wish to close. The specified tabs will then be closed based on the provided details.

[🔗 USAGE GUIDE](/docs/actions/web/close-tab)

### 36. **Context click (Right Mouse Click)**
This action performs a context click (right-click) on an element using its properties. For example, if an element has attributes such as id, class, type, or title, these can be used to locate the element. Once the element is identified, the action will trigger a right-click on it, opening the context menu or performing the default action associated with a right-click.

[Video - Context click (Right Mouse Click)](https://drive.google.com/file/d/1JKklbQNFMSejvg5BPj4mEgcXlr4nLrVm/view?usp=sharing)

[🔗 USAGE GUIDE](/docs/actions/web/context-click-right-mouse-click)

### 37. **Deselect All**
This action is used to clear all selected entries in a dropdown list, but it only works when the `SELECT` element allows multiple selections. If the `SELECT` element does not support multiple selections, meaning it lacks the `multiple="multiple"` the action will throw a `NotImplementedError`. This ensures that the action is only applicable for dropdowns designed to handle multiple selections at once.

[🔗 USAGE GUIDE](/docs/actions/web/deselect-all)

### 38. **Deselect Element by Index**
This action uses the `Select` class in Selenium WebDriver to deselect an option in a dropdown list by its index. The `Select` class is designed to work with HTML `<SELECT>` elements and provides methods for selecting and deselecting options. In this case, the action targets an option at a specific index, passed as an integer. The index starts at 0, meaning the first option has an index of 0. The method deselects the option at the given index, provided the dropdown supports multiple selections.

[🔗 USAGE GUIDE](/docs/actions/web/deselect-element-by-index)

### 39. **Deselect Element by Value**
This action uses the `Select` class in Selenium WebDriver to deselect an option in a dropdown based on the "value" attribute. The `Select` class interacts with HTML `<SELECT>` elements, and in this case, it deselects the option whose "value" matches the provided parameter. This only works if the dropdown supports multiple selections, and the option is identified by the exact "value" string.

### 40. **Deselect Element by Visible Text**
This action allows selecting or deselecting an option in a dropdown based on its visible text using the `Select` class in Selenium WebDriver. The visible text is particularly useful when other identification properties like ID or class are not available. By providing the text displayed on the dropdown option, the action identifies the correct option and selects or deselects it. This method matches the exact text, ensuring accuracy in interacting with the dropdown options.

### 41. **Double click an Element**
This action enables a double-click on a web element using its specific properties, such as ID, class, type, or title. It locates the element based on these attributes and performs a double-click action on it.

[Video - Double click an Element](https://drive.google.com/file/d/1JKklbQNFMSejvg5BPj4mEgcXlr4nLrVm/view?usp=sharing)

### 42. **Drag and Drop**
This action facilitates dragging a source element and dropping it onto a destination element. By identifying both the source and destination elements using their properties (such as ID, class, or other attributes), it performs a drag-and-drop operation between the two elements, automatings tasks that require such interactions on a webpage.

[Video - Drag and Drop](https://drive.google.com/file/d/11YfBRtlP3xBOVH4a9s_68Pz7eGurWopr/view?usp=sharing)

### 43. **Enter text by delay (Typewriter action)**
This action allows text to be entered with a delay between each letter. It first locates the input field using the specified element parameter (such as ID, class, or other attributes). The user can define the delay between typing each letter, with the default delay set to 0.03 seconds. This is useful for simulating human-like behavior in automation tasks.

### 44. **Execute JavaScript**
This action allows the execution of custom JavaScript code within the browser. It can be used to perform operations that are not natively supported by the automation tool, such as manipulating elements, triggering browser events, or retrieving specific data from the page.

[Video - Execute JavaScript](https://drive.google.com/file/d/1mlSqC8PNUm7wQ38LbMKloUIxcRta8tz0/view?usp=sharing)

### 45. **Extract table data**
This action extracts data from an HTML table element, which contains tags like `<table>`, `<tbody>`, `<tr>`, and `<td>`. The data is captured in a structured format as a list of lists, where each inner list represents a row of the table. This helps in organizing and processing table data programmatically.

[Video - Extract table data](https://drive.google.com/file/d/1M-dq1Uh1x3GA-sTYND671rhf5-uriCxC/view?usp=sharing)

### 46. **Get Current URL**
This action captures and saves the current URL displayed in the browser's address bar. By inspecting the address bar, it retrieves the full URL of the webpage the browser is currently viewing. This can be useful for logging, navigating back to the same page later, or verifying the correctness of the navigation flow in automated tests.

### 47. **Get location by co-ordinates**
This action retrieves the location of a specified element on a webpage and saves it in a variable for later use. To execute this, the element is first identified using its properties, such as ID, class, or type. Once the element is located its coordinates (x and y values) are captured and assigned to a variable in the format "variable_name=x,y". This allows for convenient access to the element's location throughout the script, enabling further operations that depend on its position.

### 48. **Hover over an element**
This action is used to hover the mouse cursor over a specified element on a webpage. It allows interaction with elements that reveal additional content or options when hovered over. The target element is located using its element parameters, such as ID, class, or type. Once identified, the action moves the mouse cursor over the element without clicking, enabling any hover-related effects or actions, such as displaying hidden menus or tooltips.

[Video - Hover over an element](https://drive.google.com/file/d/17XdmVtLoluEhlRtLpmb2MZ7kG9-nTM8i/view?usp=sharing)

### 49. **Keystroke Keys by Unique Parameter**
This action is used to press specific keystrokes based on user requirements. It works by identifying an element using "unique element properties". These properties must always be unique because this action uses a "unique parameter" instead of a general "element parameter". If the element's properties are not unique, the keystroke action cannot be executed correctly. Once the element is identified, the specified keystrokes are performed on it as required by the user.

### 50. **Move to click Element and Click**
This action is used to move the mouse cursor to a specific element and then perform a click on that element. First, the element is located using its properties such as ID, class, or type. Once the element is identified, the mouse cursor moves to it, and a click is executed. This action is helpful when interacting with elements that require the cursor to hover or focus before clicking.

### 51. **Move to middle of the element**
This action is used to move the mouse cursor to the middle of a specific element on the page. The element is first located using its properties, such as ID, class, or type. Once the element is identified, the action ensures the mouse moves directly to the center of the element, typically for precision in interaction or for triggering specific behaviors that occur when the cursor is positioned at the center.

### 52. **Open Electron App**
This action is designed to open desktop applications built using Electron. After launching the app through this action, users can interact with the app's window using regular Selenium actions. This allows for automations of tasks within Electron-based applications, similar to how Selenium interacts with web browsers.

### 53. **Open Empty Web Browser**
This action is used to launch a specified web browser with an empty URL. When executed, the action opens the chosen web browser without loading any specific webpage, leaving the URL field blank. This can be useful for initializing browser sessions for further actions.

### 54. **Open a New Tab**
This action opens a new tab within the same browser session, allowing users to load a new webpage or link without disrupting the current tabs. It helps maintain the same browser session, ensuring continuity while working with multiple tabs.

[Video - Open a New Tab](https://drive.google.com/file/d/15TQlSsjvRrYEL0UUlczrkTAb-p8Ld81I/view?usp=sharing)

### 55. **Save and Get Element**
This action allows users to store an element in a variable while writing text to it, making it easier to reference and reuse letter. For instance, when text such as "Dhaka" is entered into an element identified by "id=searchInput", the element can be saved as a variable like "element_1". This stored element can then be used later to input another text, such as "London", without requiring to locate the element again. This improves efficiency in repetitive interactions with the same element.

### 56. **Save text**
This action is used to store the text of a specific element in a variable, allowing it to be reused later. First, the element is located using its properties (like id, class, type, etc.). Once the element is found, its text content is saved in a variable, which can be referenced in subsequent actions as needed. This is helpful for capturing dynamic content or values during a test.

### 57. **Save web elements in list**
This action is used to gather multiple web elements from a table or webpage and store them in a list. Using element properties, it identifies and collects the elements, such as rows from a table or other elements sharing common attributes. Once stored in the list, these elements can be accessed later to perform various web actions, such as clicking, typing, or verifying content. This allows for efficient handling of multiple elements in a test case.

### 58. **Switch Browser**
This action allows switching between multiple browser instances by using their unique `driver_id`. When multiple browsers are open during automated testing, each has its own `driver_id`. This action lets users switch control between browsers, enabling interaction with the desired browser without closing the others. It is useful for managing multiple browser sessions in the same test.

[Video - Switch Browser](https://drive.google.com/file/d/1Md-0KlL2DOl3ppn_RNGYnY3byI5YK9W1/view?usp=sharing)

### 59. **Switch iframe**
This action is used to switch between iframes on a webpage. An iframe is an HTML element that allows embedding one webpage within another. For example, a third-party chatbox embedded into a website is often implemented using an iframe. To perform automation tasks within an iframe, it is necessary to switch the WebDriver's context to that iframe. This action allows switching to the desired iframe, enabling interaction with the elements inside it during automated testing.

[Video - Switch iframe](https://drive.google.com/file/d/1tGo-hKNrBjzrq1FrvsZgNVtlCZOk0Dg5/view?usp=sharing)

[🔗 USAGE GUIDE](/docs/actions/web/switch-iframe)

### 60. **Take Screenshot**
This action captures a screenshot of the current webpage and stores the screenshot file's name in the variable "zeuz_screenshot". The screenshot file can later be referenced using the variable `%|zeuz_screenshot|%` in subsequent actions, allowing easy access to the file name for further use in the test case. This action is useful for taking visual evidence of the state of a web page during automated tests.

### 61. **Takedown Web Browser**
This action is designed to close the browser and clean up the environment to ensure the next test case runs without issues. It terminates the running browser, destroys the Selenium driver, stops the Selenium server, and clears all Shared variables. This action is essential at the end of a test case to prevent errors in subsequent runs caused by residual data or open sessions. Failing to perform this cleanup can lead to conflicts in the next execution.

### 62. **Validate Table Row Size**
The "Validate Table Row Size" action is used to verify the number of rows in a specified table. It checks if the actual number of rows matches the expected value provided. The table is located using its element properties, and once found, this action counts the rows and compares them to the given row size for validation purposes.

### 63. **Validate Table by ignoring Row**
The "Validate Table by ignoring Row" action is used to validate the content of a table while ignoring specific rows. This action allows users to compare the table data, excluding certain rows based on conditions or criteria, such as row numbers or specific values in the row. It helps ensure that the table's data is correct without considering the ignored rows for validation.

### 64. **Validate Table by ignoring column**
The "Ignore Columns" feature in table validation allows users to compare a table while excluding specific columns from the validation. The ignored columns are not considered, and the remaining columns must match exactly between the table read from the webpage and the dataset. This is useful when certain columns contain dynamic or irrelevant data that should not affect the comparison.

### 65. **Validate a CSS Table**
Setting the "validate table" step value to CSS enables the user to validate a table styled with CSS. This option allows for the validation of specific aspects of a CSS-styled table, ensuring that the table structure and data conform to the defined criteria within the test case.

### 66. **Validate table by insensitive match**
The "validate table by insensitive match" action compares the content of a table without considering case sensitivity. This means the table values will be matched regardless of whether the text is in uppercase or lowercase, ensuring more flexible and accomodating validation.

### 67. **Validate table by sensitive match (default)**
The "Validate table by sensitive match" action compares the content of a table with case sensitivity. This means that the text in the table must exactly match the specified values, including uppercase and lowercase letters, ensuring accurate and precise validation.

### 68. **Validate table column size**
The "Validate table column size" action checks if the number of columns in a table matches the expected size. It compares the actual number of columns in the table element to the specified value, ensuring that the table structure aligns with the required configuration.

### 69. **Validate table for exact match**
When the "exact" parameter is set to true (the default setting), the table data retrieved from the web element must match the data set exactly, including all rows and columns. However, if "exact" is set to false, ZeuZ will only verify the table data specified in the data set, while ignoring any extra rows or columns that may exist in the table. This allows for a more flexible comparison by focusing on the relevant data only.

### 70. **Wait for Timer**
This action sets a time limit for the automation of a test case or individual step within a test case. If the automation process does not complete within the specified time frame, the test case will be marked as failed. This feature is crucial for managing test execution efficiency, ensuring that tests do not run indefinitely and that any potential issues are identified promptly.

### 71. **Capture network log**
This action manages the capture of network logs by starting and stopping the logging process based on specified input parameters. It records all network activity while active and includes robust error handling for troubleshooting purpose. When the logging stops, it saves the captured logs for future reference, allowing users to analyze network interactions and diagnose issues effectively. This comprehensive approach ensures that network activity can be monitored and reviewed as needed.

### 72. **Validate URL**
This action is designed to compare the current URL of a webpage with an expected URL, allowing for both partial and exact matches. The functionality operates based on the input provided to the 'validate URL' function. If the input begins with an asterisk \* - for example, * wikipedia - the action will pass if the current URL contains the string "wikipedia" anywhere within it. Conversely, if the input does not start with an asterisk, the action will require an exact match between the current URL and the specified URL to pass successfully. 

### 73. **Scroll through element**
This action enables scrolling through a specific element on a webpage that contains multiple scrollbars. It begins by identifying and focusing on the desired scrollbar, after which it executes a downward scroll. This functionality is particularly useful for navigating content within complex web layouts, ensuring that users can efficiently access all relevant information across different scrollable areas.

[Video - Scroll through element](https://drive.google.com/file/d/1DycCu3OXP6UEEeNkiofsuSCi-dBaRmjt/view?usp=sharing)

### 74. **Scroll up**
This action scrolls a webpage one step upward using Selenium to bring an element into view. The `scroll` function is executed as a **Selenium action**, with `up` specifying the scroll direction. For instance, if an element is out of view above the visible area, this action moves the page upward to reveal it. In Selenium, this can be achieved using the `ActionChains` class to simulate the "Arrow Up" key or adjust the page's scroll position.

[Video - Scroll up](https://drive.google.com/file/d/1DycCu3OXP6UEEeNkiofsuSCi-dBaRmjt/view?usp=sharing)

### 75. **Scroll down**
This action scrolls a webpage one step downward using Selenium to bring an element into view. The `scroll` function executes **Selenium action**, with `down` specifying the direction. For instance, if an element is below the visible area of the page, this action moves the page downward to reveal it. Using Selenium's `ActionChains`, the "Arrow Down" key or similar methods can simulate the scrolling action, making it ideal for navigating long pages or accessing hidden elements efficiently.

[Video - Scroll down](https://drive.google.com/file/d/1DycCu3OXP6UEEeNkiofsuSCi-dBaRmjt/view?usp=sharing)



