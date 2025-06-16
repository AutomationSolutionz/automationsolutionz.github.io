---
title: Install ZeuZ Node on macOS
sidebar_position: 6
---

This method provides step-by-step instructions for installing the **ZeuZ Node** on a macOS system by downloading the official **macOS application release** directly from the **ZeuZ GitHub repository**.

---

## Pre-requisites
- macOS version 10.14 or later is required.
- Administrator (Admin) rights are required for installation.
- Python is required.
- Access to the **ZeuZ** platform (for verifying node status).

---

### Step 1: Navigate from the ZeuZ Dashboard
1. Log in to the **ZeuZ Dashboard**.
2. Locate the **ZeuZ Node** section.

![](/img/zeuz-node/install-macos/H.png)

3. Click on **More platforms and architectures**.

→ This will redirect the user to the official GitHub **ZeuZ_Python_Node** [Releases](https://github.com/AutomationSolutionz/Zeuz_Python_Node/releases) page.

---

### Step 2: Download the ZeuZ Node macOS application
Scroll down to the **Assets** section and download the file:  
`ZeuZ_Node_macos_app.zip`.

![](/img/zeuz-node/install-macos/C.png)

---

### Step 3: Unzip the file and open the application
1. Unzip the downloaded file.
2. Locate the **ZeuZ Node** application icon.

![](/img/zeuz-node/install-macos/D.png)

3. Double-click to open the app.

⚠️ If a security warning appears, follow the on-screen instructions to proceed:
- Go to `System Settings > Privacy & Security`.
- Click **Allow** to grant permission for the application to run.

---

### Step 4: Terminal Launch and Automatic Installation
- Once the app is opened, it automatically launches a Terminal window.
- The app internally runs `node_cli.py` and completes the setup process.

![](/img/zeuz-node/install-macos/E.png)

---

### Step 5: Connect through the ZeuZ Hub
1. Go to the **ZeuZ Hub** section within the ZeuZ Dashboard.
2. Under **Available Nodes**, locate the macOS node associated with your system.

![](/img/zeuz-node/install-macos/F.png)

3. Click **Connect** to activate the node and bring it online.
4. Click **Kill** to disconnect the node from the ZeuZ Hub.

![](/img/zeuz-node/install-macos/G.png)

---

### Confirmation Output
The user should observe an output similar to the following:

![](/img/zeuz-node/install-macos/E.png)

```text
Authenticated ✔
ZeuZ Server: https://zeuz.zeuz.ai
Username: your_name
Email: test@automationsolutionz.com
Team ID: 205
Project ID: PROJ-264
your_node_name is online
```

Once connected, the status will be displayed as "**Online**".

The ZeuZ Node has been successfully set up on macOS using the GitHub `.app.zip` release.

---
