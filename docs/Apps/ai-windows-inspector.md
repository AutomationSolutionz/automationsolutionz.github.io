---
id: ai-windows-inspector
title: AI Windows Inspector
---

The **AI Windows Inspector** is used for inspecting elements and adding object locators for Windows desktop applications. The process is similar to mobile inspection.

The general process for using the Windows Inspector is described as follows:

## ZeuZ Windows Inspector
1. Run your ZeuZ Node by double-clicking the **ZeuZ Node exe**.
2. Connect the Node to the ZeuZ Server by clicking the **Connect** button if it is not connected.
3. At first we have to download the inspector, to do this we have to navigate to the **Installer/Install services** page (from menu click on the "Node" icon and you must see: **Install services in Connected ZeuZ Nodes →**).

![](/img/windows-inspector/install-services.png)

4. Install the **Windows Inspector** from the "Windows" section of the ZeuZ Node.
   - First, click the **Check Status** button to verify the status of the Windows Inspector.
   - Then, click the **Install** button to install the Windows Inspector.

![](/img/windows-inspector/windows-install.png)

5. This will install the Inspector to the **ZeuZ Node** folder. Launching ZeuZ node, creates the **ZeuZ Node** folder beside the exe.
6. Inside the **ZeuZ Node** folder, navigate to the `Apps` folder, and then to the `Windows` folder.
7. Double-click the **inspector.exe** file to launch the Inspector.

You can find or launch the inspector from `ZeuZ Node > Apps > Windows > inspector.exe` - where ZeuZ Node refers to the folder where your ZeuZ Node resides. This is found beside the `ZeuZ_Node.exe` file that you have used to run the node.

:::note
It will take 2–3 minutes to download the Windows Inspector.

:::

## Microsoft-provided and Others
1. Launch the ZeuZ node, which creates the **ZeuZ Node** folder beside the exe file.
2. Inside the **ZeuZ Node** folder, navigate to the `Apps` folder, and then open the `Windows` folder.
3. You can launch one of the provided inspectors, such as `UISpy.exe`, which is from Microsoft. These inspectors can also be downloaded directly from Microsoft.
4. But to utilize automatic "Add by AI" feature in ZeuZ, you have to use our inspector.

## Working Procedure
1. Once the **ZeuZ Windows Inspector** launches, press any key to continue. The system will then prompt the user to hover over the element to be interacted with.
2. Hover over the required element, such as a dropdown button, and press the **Control** key on the keyboard.
3. The Inspector records the element and sends it to the ZeuZ server.
4. Open a test case, open the Action Library, select the **Windows** category, and choose the required action, such as **Click an Element**.
5. Click **Add by AI** to see different options and possibilities for the object locator.

## Object Locators and Attributes
- The system uses a custom-built path locator mechanism, similar to XPath but more readable, allowing users to easily understand how it navigates the hierarchy.
- When inspecting an element, the attributes used to locate the object on the screen may be displayed.
- An asterisk (*) on an attribute name indicates that the AI engine is suggesting a partial match for that attribute's value. This is useful when the full attribute value might change, such as a username in a window title that varies across different machines or users. Partial matching allows the system to look for the attribute and match its value only partially. This feature is available on mobile, web, and other UI-based automation platforms.
- Partial matching is also very useful for ignoring random strings in attributes like class names, which are likely to change during subsequent runs of the automation on different platforms.

## Alternative Methods for Desktop Automation
We have alternative methods for automation, especially for applications like exceptional Java-based ones that may not provide object locator capabilities:  
- **Graphical UI Control**: This set of actions is used in scenarios where proper object locators are not available, such as in Java applications.
- **How It Works**: These actions work by capturing screenshots of the elements you want to interact with, such as a **New Mail** button.
- **Implementation**: In the automation action, such as **Click Element**, paste the screen capture (image) as an attachment using **Ctrl+V**. This image is then used as a variable in the test case.

---