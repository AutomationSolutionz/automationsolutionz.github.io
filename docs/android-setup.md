---
id: android-setup
title: ZeuZ Android Setup
---

## Step 1:

If your computer's username contains a space, the **Android setup** will not work.

| Username | Valid? |
|-------------|-------------------|
| Asus Laptop | No |
| Asus_Laptop | Yes |

### Example

If the username of the current Windows profile is **Asus Laptop**, you need to change that to, let's say, **Asus_Laptop** in your profile and **C:\Users\Asus_Laptop** directory, and also update it in the environment variables. If you cannot do it, simply create another user and start working with that account.

## Step 2:

If you have **Java** installed on your machine, which is a version other than **1.8**, it is better to uninstall that **Java** and then reinstall **Java 1.8** from the provided link below:

https://github.com/adoptium/temurin8-binaries/releases/download/jdk8u322-b06/OpenJDK8U-jdk_x64_windows_hotspot_8u322b06.msi

## Step 3:

Download and install **Node.js**.

https://nodejs.org/dist/v16.15.0/node-v16.15.0-x64.msi

While installing **Node.js**, it will ask whether to install additional tools and libraries
(Chocolatey and Visual C++ runtime)- **make sure to skip those**.  
Installing Chocolatey automatically installs another version of Python, which will conflict with the existing Python setup.

## Step 4:

Download and install **Android Studio** from the link below:

https://developer.android.com/studio

You must run **Android Studio** once. It will download additional tools for Appium to work.  
Quit this installer and close all other programs.  
Wait for all **Android Studio** components to finish downloading and installing. It will take some time.

## Step 5:

Set some **Environment Variables**.

![](/img/android-setup/environment-variable.png)

- Click the Windows button, type **environment variables**, and then open it.  
- Now, you need to set some **Environment Variables**.  
- While setting environment variables, you will notice two panes:  
  - **User Variables** (only for the current user)  
  - **System Variables** (for all users).  
You need to set the variables for all users.

`JAVA_HOME = C:\Program Files\Eclipse Adoptium\jdk-8.0.322.6-hotspot`   
(It's usually like this when you install **Java** from the link above).  

`ANDROID_HOME = C:\Users\YOUR_PC_USERNAME_HERE\AppData\Local\Android\Sdk`  
(Substitute **YOUR_PC_USERNAME_HERE** with the appropriate user's folder).  
Inside the path, you need to edit and add three paths. 

`%ANDROID_HOME%\tools`  
`%ANDROID_HOME%\tools\bin`  
`%ANDROID_HOME%\platform-tools`

![](/img/android-setup/java-data.png)

## Step 6:

To inspect elements, run **uiautomatorviewer.bat** from the path:  
`%ANDROID_HOME%\tools\bin`.  
It is better to create a desktop shortcut for this.

![](/img/android-setup/automator-viewer.png)

You can use the directory marked in *blue*, then create a shortcut for the *red-marked* **uiautomatorviewer.bat** and keep it on the desktop for future use.  
**AppData** is hidden by default, so make hidden files visible to access it this way.

Sometimes, when launching **uiautomatorviewer.bat**, it may crash.  
The solution is to run **adb kill-server** from the command prompt and then re-run **uiautomatorviewer.bat**.

## Step 7:

Install **Appium** and **Appium-Doctor** (optional) using the **Node Package Manager (npm)** by executing the following commands:  
`npm install -g appium`  
`npm install -g appium-doctor`.

![](/img/android-setup/save-appium.png)

## Step 8:

**HAXM** Installer:  
Sometimes, you may need to activate **HAXM** from,  
`Android_Setup > Tools > SDK Manager > Android SDK > SDK Tools > Intel x86 Emulator Accelerator (HAXM Installer)`.

And install **HAXM** from,
`C:\AndroidSDK\extras\intel\Hardware_Accelerated_Execution_Manager\intelhaxm-android`.  
Sometimes, you may need to activate **Intel Virtualization Technology** from the **BIOS**.

![](/img/android-setup/intel-haxm.png)

## Step 9:

Sometimes, in newer versions of **Android Studio**, there is no *tools* folder in the **SDK** folder. Here's how to enable it.

- Launch **Android Studio**  
- Launch **SDK Manager**  
- Go to **SDK tools** tab, and uncheck the **Hide Obsolete Packages**  
- Find and check / tick **Android SDK Tools(obsolete)**  
- Click **Apply**.

![](/img/android-setup/sdk-android.png)

## Step 10:

Make sure to use the updated version of **ZeuZ** node from this link.

https://github.com/AutomationSolutionz/Zeuz_Python_Node/releases/tag/17.0.0  
If it's already downloaded, you don't need to download it again.
