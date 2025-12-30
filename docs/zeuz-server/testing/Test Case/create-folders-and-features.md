---
id: create-folders-and-features
title: Create Folders and Features
---

import MetaCard from '@site/src/components/MetaCard';

The **Folders** panel is used for organizing test cases. It displays a list of top-level folders, each representing a logical grouping of related test cases. The **plus (+)** icon next to a folder indicates it can be expanded to view or add sub folders, supporting a hierarchial organization of test cases.  
At the top of the panel, the **Create top level Folder** option is available. This option is used to add a new main folder, enabling users to define a new category for organizing test cases within the project.

The **Feature** panel represents a top-level functionality or module of a project that groups related test cases, helping to organize and manage testing for specific areas of the application. The **plus (+)** icon next to a feature allows users to expand it to view or add sub features.  
The **Create top level Feature** button lets users add a new main feature to organize test cases under a new functionality.

<MetaCard
  availableFrom="20250712"
  difficulty="🟢 Easy"
  lastUpdated="23 Dec, 2025"
  relatedTopics={["Create test cases", "Move test cases to folder and feature", "Debug test cases"]}
/>

### Why it matters / Use Cases:
- **Organize Test Cases**: Folders and features group related test cases for easier navigation and management.
- **Hierarchial Structure**: Folders support subfolders, allowing clear and logical structuring of test cases.
- **Focused Testing**: Features group test cases by specific functionality or module, ensuring targeted test coverage.
- **Maintenance and Bulk Operations**: Folders simplify updates, moves, and exports of multiple test cases at once.
- **Tracking and Reporting**: Features enable easier tracking of test results and reporting per functionality.

## Prerequisites
- Access to ZeuZ Server with permissions for **Testing → Test Case → Search**.
- Plan a logical hierarchy for folders and define features representing specific functionalities.
- Use clear and consistent names for folders and features to reflect their purpose.
- Identify test cases that will be linked to features or organized within folders for better management.

## Quick-Start
1. To create a folder, click the **Create top level Folder** button available under the **Folders** option.
2. Similarly, to create a feature, click the **Create top level feature** button available under the **Features** option.

## Features
### Create top level folder
- Click the **Create top level Folder** button to create a new folder.
- Click to enter the **Name of the new folder** (e.g., *Test new folder*).
- Click on the **OK** button.

![](/img/how-tos/how-to-create-folders-and-features/top-levelfolder.png)

![](/img/how-tos/how-to-create-folders-and-features/new-folder.png)

### Create top level feature
- Click the **Create top level Feature** button to create a new feature.
- Click to enter the **Name of the new feature** (e.g., *Test new feature*).
- Click on the **OK** button.

![](/img/how-tos/how-to-create-folders-and-features/top-levelfeature.png)

![](/img/how-tos/how-to-create-folders-and-features/new-feature.png)

### Create sub folder
- Right-click the specific folder for which a sub folder needs to be created.
- Then, click the **Create Folder** option.
- Next, enter the name of the **Sub Folder** (e.g., *Test sub folder*).
- Click on the **OK** button.

![](/img/how-tos/how-to-create-folders-and-features/sub-folder.png)

![](/img/how-tos/how-to-create-folders-and-features/sub-foldername.png)

### Create sub feature
- Right-click the specific feature for which a sub feature needs to be created.
- Then, click the **New Feature** option.
- Next, enter the name of the **Sub Feature** (e.g., *Test sub feature*).
- Click on the **OK** button.

![](/img/how-tos/how-to-create-folders-and-features/sub-feature.png)

![](/img/how-tos/how-to-create-folders-and-features/sub-featurename.png)

### Rename folder
- Right-click the specific folder that needs to be renamed.
- Then, click the **Rename Folder** option.
- Next, enter the **New name of the folder** (e.g., *New folder name*).
- Click on the **OK** button.

![](/img/how-tos/how-to-create-folders-and-features/rename-folder.png)

![](/img/how-tos/how-to-create-folders-and-features/new-namefolder.png)

### Rename feature
- Right-click the specific feature that needs to be renamed.
- Then, click the **Rename** option.
- Next, enter the **New Name** of the feature (e.g., *New feature name*).
- Click on the **OK** button.

![](/img/how-tos/how-to-create-folders-and-features/rename-feature.png)

![](/img/how-tos/how-to-create-folders-and-features/new-namefeature.png)

### Delete folder
- Right-click the specific folder that needs to be deleted.
- Then, click the **Delete Folder** option.
- Next, click the **OK** button to delete the specific folder.
:::note
If any test cases are linked to the specific folder, it cannot be deleted, and a notification message will appear stating, **“Document or test cases are linked with this folder"**.

:::

![](/img/how-tos/how-to-create-folders-and-features/delete-folder.png)

![](/img/how-tos/how-to-create-folders-and-features/delete-ok-folder.png)

### Delete feature
- Right-click the specific feature that needs to be deleted.
- Then, click the **Delete** option.
- Next, click the **OK** button to delete the specific feature.
:::note
If a feature linked to a specific test case is removed, the **Feature** column for that test case will display **null**.

:::

![](/img/how-tos/how-to-create-folders-and-features/delete-feature.png)

![](/img/how-tos/how-to-create-folders-and-features/delete-ok-feature.png)

## FAQs / Troubleshooting

<details>
<summary>Can folders or features be created without a name?</summary>

No. A valid and unique name must be provided to create a folder or feature successfully.

</details>

<details>
<summary>Why can a folder not be deleted?</summary>

A folder cannot be deleted if test cases or documents are linked to it. A notification message is displayed in such cases.

</details>

<details>
<summary>What happens if a feature linked to test cases is removed?</summary>

The Feature field for the associated test cases will display **null**.

</details>

<details>
<summary>How to avoid confusion while creating folders and features?</summary>

Use clear naming conventions and plan the folder and feature structure in advance.

</details>

## Changelog

- New UI has been introduced [[20250712](/blog/zeuz-platform-20250712/)]

## Related Topics

- [Create test cases](https://docs.zeuz.ai/docs/zeuz-server/testing/Test%20Case/create-test-cases/)
- [Move test cases to folder and feature](https://docs.zeuz.ai/docs/zeuz-server/testing/Test%20Case/move-test-cases-to-folder-and-feature/)
- [Debug test cases](https://docs.zeuz.ai/docs/zeuz-server/testing/Test%20Case/debug-test-cases/)

---