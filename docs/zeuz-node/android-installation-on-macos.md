---
title: Android Installation on macOS
sidebar_position: 7
---

This guide provides step-by-step instructions for setting up an Android testing environment on macOS. It includes installing **Android Studio**, **Java 8 (JDK 1.8)**, and configuring essential environment variables such as `JAVA_HOME` and `ANDROID_HOME` to support Android development and testing using tools like **Appium** and **ZeuZ**.

---

## Pre-requisites
- macOS (Catalina or a later version is recommended).
- Homebrew must be installed (`brew`).
- Terminal access with basic command-line knowledge is required.

---

### Install Android Studio
1. Visit the official **Android Studio** website:  
👉 [https://developer.android.com/studio](https://developer.android.com/studio)
2. Download and install the **macOS** version of **Android Studio**.
3. Follow the setup wizard to install the **Android SDK**, **SDK Tools**, and **Platform Tools**.

---

### Install Java 8 (JDK 1.8) on the macOS system
**Java 8** can be installed either from Oracle or through Homebrew.

#### Option A: Install Oracle JDK
- Go to the appropriate location:  
  👉 [https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html)
- Download the macOS installer and complete the installation process.

#### Option B: Install through Homebrew

```bash
brew install openjdk@8
```

---

### Set the `JAVA_HOME` environment variable
1. Open the terminal and run:

```bash
nano ~/.zshrc
```
2. Add the following line (modify the version or folder name as necessary):

```bash
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_xxx.jdk/Contents/Home
```

:::note
To find the installed JDK path, navigate to `/Library/Java/JavaVirtualMachines/`, locate the appropriate folder, and then go to `Contents/Home`.

:::

3. Save and close the editor:  
   Press `Ctrl + X`, then press `Y`, and finally press `Enter`.

---

### Set the `ANDROID_HOME` variable and update the `PATH` environment variable accordingly
In the same `~/.zshrc` file, include the following lines:  

```bash
# Android SDK Setup
export ANDROID_HOME=~/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/platform-tools
```

---

### Apply the changes by running the following command
Run the following command to reload the shell configuration:

```bash
source ~/.zshrc
```

---

### Verify the setup
To confirm that the environment variables are set correctly:  

```bash
echo $JAVA_HOME
echo $ANDROID_HOME
```

Valid paths for both the Java installation and Android SDK should be visible.

---

### Setup complete. Environment is ready
macOS is now configured to run Android tests using ZeuZ or other automation frameworks such as Appium.

### Troubleshooting Tip

> **If the setup does not function as expected:**  
Uninstall any previous installations of Appium, Android Studio, or SDKs. Remove all associated files and repeat the setup from scratch to avoid potential conflicts.

---
