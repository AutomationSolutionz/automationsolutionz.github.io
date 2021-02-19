---
id: zeuz-node-setup
title: Zeuz Node Setup
sidebar_label: Setup
---

import useBaseUrl from '@docusaurus/useBaseUrl';

This document walks you through the setup process of Zeuz Node. We've
tried to make sure that as many of the steps of the setup process are
automated, so that you don't have to go and manually figure things
out. However, due to differences in how different machines are set up,
the automated process sometimes may not work out 100% correctly.
Specially, setting different `PATH` variables for moving components
required by Zeuz Node.

:::info

Zeuz Node requires Python 3 to run. 

:::

## Video instructions

- [Windows Setup](https://youtu.be/LGmr6ZpoPGk)
- [Mac/OS X Setup](https://youtu.be/TCPmaUgS8hk)


## Python setup

Please download and install the latest Python 3.x version available
from [python.org](https://www.python.org/downloads/). If you're on
Windows, make sure to download the **32-bit version** and not the
~~64-bit version~~.

### Windows

When installing on Windows, please check that **Add Python 3.x to
PATH** checkbox is selected.

![](/img/windows-python-path.png)

### Linux

Run the following commands to install python3 and pip3.

```bash
$ sudo apt-get install python3 python3-pip --yes
```

To make python3 the default python version, run:

```bash
$ sudo update-alternatives --install /usr/bin/python python /usr/bin/python3 10
```

:::tip

Linux setup is officially supported for Ubuntu only. Due to the huge
variety of package managers, file system hierarchies and unknown
dependencies available on each platform, it is difficult to support
all of them. However, it has been tested to run on many other linux
distributions (Arch Linux, Debian, Linux Mint, Fedora, etc.) if the
required packages are installed.

:::

### Mac OS X

For OS X, download python 3.x from
[python.org](https://www.python.org/downloads/) and install.

### Verify python setup

After the installation is complete, open Powershell/CMD from Start
menu (on Windows), Terminal (on Mac and Linux), then run the following
command to verify that the installation is successful.

```batch
$ python --version
$ pip --version
```

These should print Python 3.x as output where x is the version that
you downloaded. Also, if you're on Windows make sure that its the
32-bit version.

## Core setup

The core setup is for installing Zeuz Node and some core automation
components. The core setup is the same for all platforms and is less
likely to fail. The following is a non-exhaustive list of components
that are installed:

:::info

- Web/Browser automation
- Cross-platform GUI automation
- REST/API automation
- Database automation
- Excel automation
- [Windows only] Windows automation
- Misc. other automation components
    - Common actions (variables, loops, conditions, etc.)
    - Files/Folder actions
    - Screenshot utilities
    - etc.

:::

To start the setup, run the `ZeuZ_Node_Installer.py` file. Double
click to open the file on Windows. For Mac/Linux, launch the terminal
and navigate to the directory where the Zeuz Node installer file is
present and then launch it. As an example, if you've downloaded the
`Zeuz_Python_Node_Setup.zip` file in your `Downloads` folder and
extracted it there, start the installer by running the following
commands:

```bash
$ cd ~/Downloads/Zeuz_Python_Node_Setup/
$ python Zeuz_Node_Installer.py
```

![](/img/zeuz-node-installer.png)

:::caution

If you're installing Zeuz Node for the first time, make sure that only
**Core Setup** and **Install Zeuz Node** checkboxes are checked.
Uncheck all the other check boxes, you'll be able to install the other
features after the Core setup has been completed successfully.

:::

Provide your root password and click on `Install`.

## Android setup

Android automation is supported on all three of the platforms -
Windows, Mac and Linux.

### Pre-requisites

1. Download [Android
   Studio](https://developer.android.com/studio#downloads)
2. Install Android Studio
3. Launch Android Studio which will prompt you to download Android SDK
   and an Android emulator image. Download them.
4. Setup the `ANDROID_HOME` environment variable according to your
   Android SDK install directory. If you're confused, try going
   through
   [this](https://www.androidcentral.com/installing-android-sdk-windows-mac-and-linux-tutorial)
   article.

### Automation setup

Once the Core setup and Android SDK setup have completed, uncheck all
the checkboxes, and only select **Android setup** and then click on
`Install`.

## iOS setup

iOS automation is only available on Mac OS X.

### Pre-requisites

You'll need to install Xcode from the App Store. Next, a simulator is
needed for testing the applications, which you can install/access via
Xcode.

### Automation setup

Once done with the pre-requisites, uncheck all the checkboxes and
select **iOS Setup** only. Then click on `Install`.

## Virtual Environment Setup (Advanced)

You can also install use Zeuz Node by setting up a Python virtual enviornment.
Doing so requires manually installing the python modules required for Zeuz Node
to run.

### Linux

```sh
$ cd /path/to/Zeuz_Python_Node
$ python3 -m venv .venv
$ source .venv/bin/activate
$ pip install -r requirements-linux.txt
```

### Mac

```sh
$ cd /path/to/Zeuz_Python_Node
$ python3 -m venv .venv
$ source .venv/bin/activate
$ pip install -r requirements-mac.txt
```

### Windows

```batch
> cd /path/to/Zeuz_Python_Node
> python3 -m venv .venv
> .venv/Scripts/activate
> pip install -r requirements-win.txt
```
