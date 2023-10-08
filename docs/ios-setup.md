---
id: ios-setup
title: How to setup iOS for Automation
---

## __Installing Prerequisites for iOS Testing__

* Homebrew
* Nodejs
* npm
* Xcode
* Appium Inspector GUI.

### 1. Open Terminal

Press **Command + Spacebar** and search for **Terminal**, then hit **Enter**.

![](/img/ios-setup/terminal-open.png)

![](/img/ios-setup/last-login.png)

### 2. Homebrew Installation

Open a browser and go to https://brew.sh  
Copy the command under **Install Homebrew**. The command will be like:

![](/img/ios-setup/hombrew-command.png)

Now open **Terminal** ( Shortcut method: press **Command + Spacebar** to open Spotlight search, type **Terminal**, and hit **return/Enter** ).  
Paste ( **Command + V** ) the copied Command into **Terminal** and hit **Enter**.  
Provide the user password in the **Terminal** if it asks.

After successful installation, there will be a command on the **Terminal**; just copy that command and paste it into the **Terminal**.  
The command will look like the one below but with a different **UserName**.

![](/img/ios-setup/command-user.png)

### 3. Carthage Installation

Enter the following command in the **Terminal**.

![](/img/ios-setup/carthage-install.png)

### 4. Nodejs, npm Installation

To install both **Nodejs** and **npm**, enter the following command in the **Terminal**.

![](/img/ios-setup/node-install.png)

After installation, to check if **Nodejs** is installed or not, enter the following command.

![](/img/ios-setup/node-version.png)

To check if **npm** is installed or not, enter the following command.

![](/img/ios-setup/npm-install.png)

### 5. Xcode Installation

You need to install **Xcode** from the App Store. Make sure to enter your **Apple ID** credentials correctly. Otherwise, there is a chance of your **Apple ID** getting disabled.  
After installation, execute the following command.

![](/img/ios-setup/xcode-version.png)

#### Install Xcode command-line tools

![](/img/ios-setup/xcode-install.png)

Verify the installation by running the following command.

![](/img/ios-setup/gcc-version.png)

https://stackoverflow.com/questions/9329243/how-to-install-xcode-command-line-tools,  
https://www.freecodecamp.org/news/install-xcode-command-line-tools/

### 6. Install Appium Inspector GUI for macOS

#### Install Appium using the terminal

##### Install Appium

![](/img/ios-setup/install-appium.png)

##### Install Appium-Doctor

![](/img/ios-setup/appium-doctor.png)

#### Alternatively, you can install Appium manually

Visit the Appium Desktop GitHub page at https://github.com/appium/appium-desktop/releases  
* In the **Latest Release** section, click on the **Assets** drop-down to expand the list of available files.  
* Look for the file with the name **Appium-mac-x.x.x.dmg** where **x.x.x** represents the version number. This is the file you need to download.  
* Click on the **Download** button next to the file name to start the download.

Once the download is complete, open the downloaded file and double-click on the **Appium** icon to launch the **Appium Desktop Inspector GUI**. Follow the on-screen instructions to complete the installation.  
* While opening the **GUI**, you may encounter the message: **Appium Inspector can't be opened because Apple cannot check it for malicious software**.  
* To mitigate this issue, navigate to **System preferences > Security & Privacy > General** and select **Open Anyway** for Appium Inspector.

### 7. Connecting Simulator with Appium Inspector

Create an empty project with **hello world** in it. Then build it on a specific device to open simulator.  
* Press **Command + spacebar** to type **Xcode**, then open **Xcode**.  
* Then follow the screenshots below.

Select **Create a new Xcode project**.

![](/img/ios-setup/xcode-project.png)

Click **Next**.

![](/img/ios-setup/next-button.png)

Click **Next**.

![](/img/ios-setup/test-project.png)

Click **Create**.

![](/img/ios-setup/create-project.png)

Click on the **Marked area**.

![](/img/ios-setup/my-mac.png)

![](/img/ios-setup/content-view.png)

Take a look at the emulator's **Name** and **Version**. It will be needed when creating capabilities for the **Appium** server.

![](/img/ios-setup/ios-setup.png)

#### Download WebDriverAgent from this link (The Source Code Zip File)

https://github.com/appium/WebDriverAgent/releases/tag/v4.9.0

![](/img/ios-setup/web-driver.png)

Extract the zip file and double-click on the **WebDriverAgent.xcodeproj** file.

![](/img/ios-setup/xcode-proj.png)

Select **WebDriverAgent** from the left menu as shown in the screenshot below.

![](/img/ios-setup/select-webdriver.png)

Click on the **Integration App** and select **WebDriverAgentRunner** as shown in the screenshot below.

![](/img/ios-setup/web-integration.png)

![](/img/ios-setup/integration-app.png)

Select **Product > Test**.

![](/img/ios-setup/product-test.png)

After that, **WebDriverAgentRunner** will be successfully installed on the simulator.

![](/img/ios-setup/install-simulator.png)

#### Running Appium Server

Go to **Terminal** and enter the command.

![](/img/ios-setup/allow-appium.png)

![](/img/ios-setup/appium-node.png)

Open **Appium Inspector** and follow the instructions in the screenshot below.

![](/img/ios-setup/appium-instruction.png)

Save the **Capability** and name it anything ( for example: **test** ).  
Click on the saved **Capability** and then click on **Start session**.  
After that, the simulator's screen should be displayed in the **Appium Inspector**.

![](/img/ios-setup/appium-screen.png)

### Appendix

Here is a brief overview of these tools/software and why we need to install them.

#### Homebrew

Homebrew is a package manager for macOS that enables you to easily install and manage various software packages and utilities on your system. It is commonly used by developers and other users to install and manage command-line tools, libraries, and other dependencies required for various software development projects.

#### Node.js

Node.js is an open source, cross-platform JavaScript runtime environment that allows you to run JavaScript on the server-side. It is commonly used to build scalable, networked applications, and is particularly popular for developing web applications and RESTful APIs.

#### npm

npm is the default package manager for Node.js and is used to install, manage, and share packages of code written in JavaScript. It comprises the largest eco-system of open-source libraries globally, with millions of packages available for use in Node.js projects.

#### Appium GUI Inspector

Appium GUI Inspector is a graphical user interface tool used to inspect the user interface (UI) elements of mobile applications. It enables developers and testers to easily view and interact with the UI elements of their mobile applications and to create and execute Appium test scripts.

#### Xcode

Xcode is an integrated development environment (IDE) for macOS that is used to develop software for Apple's platforms, including macOS, iOS, watchOS, and tvOS. It includes a suite of tools for developing, debugging, and testing software, comprising a code editor, a graphical user interface designer, a build system, and various debugging and profiling tools. It is particularly important for developing native iOS appications, as it includes the iOS SDK and enables you to build  and test your apps on a simulator or physical devices. 
