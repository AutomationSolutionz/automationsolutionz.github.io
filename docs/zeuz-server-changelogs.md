---
id: zeuz-server-changelogs
title: Zeuz Server Changelogs
sidebar_label: Changelogs
---

## Version 6.0.1

- Change label of "Do not upload log when test case passes" to "Upload
  log on FAIL only?" to better clarify the intent. This option
  instructs Zeuz Node to upload logs and screenshots as a zip file to
  the Run ID, which you can later download and inspect.
- All the settings in the **Testing > Run Tests** page are now saved.
- View variables in a tree like structure. JSON like data are
  automatically parsed into the tree structure for easier access.
- Device reordering in Debug test case/steps/actions fixed. Previously
  it was not maintaining the selected device order.
- **Add Actions** in test case edit page improved to display first 150
  characters of the description alongside the description name.
- **Add Actions** in test case edit page now shows *Common Actions*
  all the time even if the search term do not contain them. However,
  the searched term is prioritized before the common actions. So, if
  you search for *Open webpage* it should show *Open webpage* action
  at the top.
- In **Test Case edit > Steps**, if you hover over any loop action row, it'll
  highlight all the other actions that are part of that loop's body.
- Show sorted data in result table in debug page.
- Improved performance when a test run is deployed by rewriting how we
  handle logs. You'll only see the first 2500 logs. If any more log is
  generated, they'll be stored locally inside the Zeuz Node's
  `Zeuz_Node > AutomationLog > execution.log` file. However, all kinds
  of error logs will still be uploaded.
- Show how many Zeuz Nodes are available online in the navigation bar,
  indicated by the green circle.
- Deploy API is now stable. You can deploy *Test Sets* from the
  terminal/command line using the scripts found in `Zeuz Node > Apps >
  zeuz-cli`. Contains scripts for both `python` and `nodejs`. This is
  great for automating deployments from a **CI/CD** server.
- Add ability to delete all previous machines (Zeuz Node machines
  entries).
- Fix Folder and Feature create/edit/move bugs in **Test Case Search >
  Folder View** page.
- [Internal] Upgrade Django and Django REST Framework to the latest
  version (from 1.8.2 to 3.1).
- [Internal] Use HTTPS based fonts to remove MIXED CONTENT errors in
  browsers.
- [Internal] Other bug fixes and improvements under the hood.
