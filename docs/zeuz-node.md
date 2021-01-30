---
id: zeuz-node
title: Zeuz Node
sidebar_label: Introduction
---

Zeuz Node is an open source automated software testing platform. It can be used
as a standalone test runner or as a library of hundreds of ready-made automated
actions that handles many corner cases so that you don't have to fiddle around
for hours to figure out the solution to difficult to debug problems. Its written
in `python` and runs on Windows, Mac and Linux. Zeuz Node has the ability to
automate a variety of tests on a range of platforms. The open source nature of
Zeuz Node and its open ended data interchange model means that you can easily
extend it to fit almost any kind of scenario.

## Actions

Actions are the basic building blocks of Zeuz Node. You will use actions to
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

TBD.

## Drivers

TBD.
