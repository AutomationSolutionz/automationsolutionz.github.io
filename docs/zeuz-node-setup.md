---
id: zeuz-node-setup
title: ZeuZ Node Setup
sidebar_label: Setup
---

import useBaseUrl from '@docusaurus/useBaseUrl';

This document walks you through the setup process of ZeuZ Node. We've
tried to make sure that as many of the steps of the setup process are
automated, so that you don't have to go and manually figure things
out. However, due to differences in how different machines are set up,
the automated process sometimes may not work out 100% correctly.
Specially, setting different `PATH` variables for moving components
required by ZeuZ Node.

## Video instructions

- [Windows Setup](https://youtu.be/LGmr6ZpoPGk)
- [Mac/OS X Setup](https://youtu.be/TCPmaUgS8hk)


## `Core setup`


At the start of core setup you have to setup python on your machine.
Please download and install the latest Python 3.x version available
from [python.org](https://www.python.org/downloads/). You can download
the last tested (by ZeuZ team) Python version from
[this link](https://www.python.org/ftp/python/3.11.4/python-3.11.4-amd64.exe).

:::info

ZeuZ Node requires Python 3 to run. 

:::

### Python Setup

When installing on Windows, please check that **Add Python 3.x to
PATH** checkbox is selected. Also make it sure that previous checkbox of **Install
launcher for all users** is not selected.

![](/img/python_setup-path.png)

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

### Core setup & node launch 

The core setup is for installing ZeuZ Node and some core automation
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

To start the setup, open the `ZeuZ_Python_Node` folder. Double click to run the 
`node_cli.py` file which will automatically launch the node & start core setup.
For Mac/Linux, launch the terminal
and navigate to the directory where the `node_cli.py` file is
present and then launch it. As an example, if you've downloaded the
`ZeuZ_Python_Node` folder in your `Downloads` folder and
extracted it there, start the setup by running the following
commands:

```bash
$ cd ~/Downloads/ZeuZ_Python_Node/
$ python node_cli.py
```

