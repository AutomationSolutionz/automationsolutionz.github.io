---
id: zeuz-node
title: ZeuZ Node
sidebar_label: Introduction
sidebar_position: 1
---

ZeuZ Node is an open source automated software testing platform. It can be used
as a standalone test runner or as a library of hundreds of ready-made automated
actions that handles many corner cases so that you don't have to fiddle around
for hours to figure out the solution to difficult to debug problems. Its written
in `python` and runs on Windows, Mac and Linux. ZeuZ Node has the ability to
automate a variety of tests on a range of platforms. The open source nature of
ZeuZ Node and its open ended data interchange model means that you can easily
extend it to fit almost any kind of scenario.

## Actions

Actions are the basic building blocks of ZeuZ Node. You will use actions to
create automated tests. You can think of each action as a single block. Multiple
actions can be combined to create powerful automations that work across
different platforms - Web (Chrome/Firefox/Edge/Safari/...), Mobile
(iOS/Android), Database (Postgres/MariaDB/MySQL/...), etc. There is no
restriction on the platform that you're running your actions on. For example,
you can combine actions from Web, Mobile, Database, REST API to create powerful
test cases. Example scenario:

1. Web: Log in to the dashboard that's only available on Desktops to perform a
   certain action.
2. Database: Verify that the action that you just performed is reflected in the
   db.
3. Mobile: Log in to mobile to see the latest update of the action that you just
   performed.
4. REST API: Call the REST API to make sure that your public API is also working
   properly.

<img src="/img/zeuz-node/building-blocks.jpg" height="400px" />

## Architecture

All the test case data lives in the ZeuZ Server. You use the ZeuZ Server to
construct the test cases and then they are sent to ZeuZ Node as a JSON file
representing all the test cases and the attachment files (if any). Note that,
the server is not required to run ZeuZ Node or the test cases, it is only an
interface for constructing the test case data. Once ZeuZ Node has the JSON data
ready for it to be consumed, it simply takes it and starts executing the test
cases one by one. ZeuZ Node (`node_cli.py`) has a built in `-r` or `--local-run`
flag, which if provided, will run the test cases from `ZeuZ Node > Projects >
Local_run.json` file without communicating with the server. A report is then
generated inside the **AutomationLog** folder. Every test case session has a
unique identifier called **Run ID**, there's a folder with the same name inside
**AutomationLog** folder which contains the screenshots, logs and any other
relevant resulting data (while/after running tests).

## Drivers

Drivers are the entry point to ZeuZ Node (similar to `main()` function in many
languages). ZeuZ Node has a `MainDriver` by default that handles communication
with the ZeuZ Server and run the test cases based on the data received. A driver
is responsible for handling which action to execute based on the data. You can
also write a custom driver that has custom actions or perform other tasks aside
from just executing the actions. See [Custom Driver](custom-driver) for more
information.
