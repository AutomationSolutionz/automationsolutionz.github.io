---
id: create-tickets
title: Create a Ticket
---

import MetaCard from '@site/src/components/MetaCard';

**Creating a Ticket** refers to the process of formally adding a new work into the system so it can be tracked and managed. A **Ticket** is created by first selecting the ticket type from the dropdown menu, such as **Task**, **Bug**, **Requirement**, or **Document**. This selection defines the nature of the work being recorded. The user then provides the main details of the ticket in the central input area, which typically includes the title and description.

Additional settings, including `Assignee`, `Milestone`, `Version`, `Feature`, `Start and End Date`, `Priority`, `Privacy`, `Testing`, and `Label` are configured from the right-hand panel. Finally, clicking the **Create** button saves the ticket.

<MetaCard
  availableFrom="202512"
  difficulty="🟢 Medium"
  lastUpdated="26 Jan, 2026"
  relatedTopics={["User management", "Milestones", "Version", "Create folders and features", "Create test cases", "Label", "GitHub integration"]}
/>

### Why it matters / Use Cases: 
- **Centralized Work Tracking**: It records a task, bug, requirement, or document in a centralized system for tracking.
- **Clear Ownership and Accountability**: It ensures ownership by assigning the ticket to a specific user or team.
- **Priority Management**: It allows prioritization so that important items are addressed first.
- **Structured Planning and Alignment**: It helps align work with milestones, versions, and features to support better planning.

## Prerequisites
- Access to ZeuZ Server with permissions for **Project → Ticket → (Requirement, Task, Bug, Document)**
- Relevant ticket types, such as Task, Bug, Requirement, or Document, should be enabled.
- Milestones, versions, and features should be predefined for proper linkage.

## Quick-Start
1. First, click on any one of the ticket types, such as **Requirement**, **Task**, **Bug**, or **Document**, available under the "Ticket" category.
2. The dropdown menu facilitates the selection of a work item category, presenting four distinct options: **Requirement**, **Task**, **Bug**, and **Document**.

## Features
1. From the dropdown menu, select a ticket type, such as, **Task**, **Bug**, **Requirement**, and **Document**.

![](/img/how-tos/how-to-create-bugs/ticket-type.png)

2. Add a **Title** and a **Description** for the required task, bug, document, or requirement in the Description box.

![](/img/how-tos/how-to-create-bugs/title-description.png)

3. In the case of a **Requirement**, the Properties panel on the right-hand side displays the following key configuration details:  
   - **Assignee**: It indicates who is initially responsible for the requirement. By clicking on the **Triage** user field, a specific assignee can be selected. Additionally, if the requirement needs to remain under triage, the **Set as Triage** button can be used.
   - **Milestone**: By default, the milestone remains set to **Backlog**. By clicking the milestone field, another milestone can be selected from the dropdown menu. Additionally, a new milestone can be created by clicking the **Create Milestone** button.
   - **Feature**: By default, the feature remains set to **Default**. To change it, the user can click the 
  **Feature** button and select a specific feature from the dropdown menu. A feature can also be located by 
  using the search bar.
   - **Start and End Date**: The **Start Date** and **End Date** define the planned time period for a work item, such as a requirement. The **Start Date** indicates when work on the item is expected to begin, while the **End Date** indicates when the work is expected to be completed. By clicking the **Start and End Date** field, the deadline for the requirement can be set.
   :::note
   If no date is selected, the current date is automatically selected by default.

   :::
    - **Priority**: The priority level can be set to **P1, P2, P3, or P4** by clicking the priority dropdown menu.
    - **Testing**: It is used to define whether testing is required for a work item, such as a requirement. A dropdown menu labeled **Testing required** is displayed. When clicked, it presents two options:  
     - **Testing ignored**: Indicates that testing is not needed for this requirement.
     - **Testing required**: Indicates that the requirement must go through a testing process before it can be considered complete.
    - **Labels**: By clicking the **Labels** button, a label can be applied to the requirement. A label can also be applied by searching for it. By default, the requirement is marked as **No labels**. Additionally, a new label can be created by clicking the **Create Label** button.

![](/img/how-tos/how-to-create-bugs/requirement-title.png)

4. In the case of a **Task**, the Properties panel on the right-hand side displays the following key configuration details:  
   - **Assignee**: It shows the initial responsibility for the task. The assignee can be selected from the user field, or the requirement can remain under triage by using the **Set as Triage** button.
   - **Milestone**: By default, the milestone is set to **Backlog**. It can be changed from the dropdown menu or a new milestone can be created using the **Create Milestone** button.
   - **Version**: By default, the task version is set to **Default**. A specific version can be selected from the dropdown menu by clicking the **Version** button, or a new version can be created using the **Create Version** button.
   - **Feature**: By default, the feature is set to **Default**. It can be changed from the dropdown menu or found using the search bar.
   - **Start and End Date**: The **Start and End Date** define the planned duration of a work item. The Start Date marks when work begins, and the End Date marks when it should be completed. It can be set by clicking the respective field.
   :::note
   If no date is selected, the current date is automatically selected by default.

   :::

   - **Priority**: The priority level can be set to **P1, P2, P3, or P4** by clicking the priority dropdown menu.
   - **Privacy**: A visibility selection dropdown named **Privacy**, with two options, Public and Private, is available. This setting controls who can view the selected item. When **Public** is selected, the item is visible to all authorized users, while **Private** restricts access to specific users only.
   - **Testing**: Testing defines whether a work item requires testing. It provides two options:  
     - **Testing Ignored**: It means testing is not needed for the required task.
     - **Testing Required**: It means that the task must be tested before completion.
   - **Labels**: Labels can be applied to a task using the **Labels** button or by searching for an existing label. By default, the task has **No labels**, and new labels can be created using the **Create Label** button.

![](/img/how-tos/how-to-create-bugs/task-information.png)

5. In the case of a **Bug**, the Properties panel on the right-hand side displays the following key configuration details:  
   - **Assignee**: It shows the initial responsibility for the bug. The assignee can be selected from the user field, or the requirement can remain under triage by using the **Set as Triage** button.
   - **Milestone**: By default, the milestone is set to **Backlog**. It can be changed from the dropdown menu or a new milestone can be created using the **Create Milestone** button.
   - **Found Version**: It refers to the specific software version or build in which an issue, such as a bug, was initially identified. Initially, it is set to **Default**. If it is necessary to create a new **Found Version**, click the **Create Version for Found Version** button.
   - **Fixed Version**: It refers to the specific software version in which a reported issue, such as a bug, has been resolved. Initially, it is set to **Default**. If it is necessary to create a new **Found Version**, click the **Create Version for Fixed Version** button.
   - **Feature**: By default, the feature is set to **Default**. It can be changed from the dropdown menu or found using the search bar.
   - **Start and End Date**: The **Start and End Date** define the planned duration of a work item. The Start Date marks when work begins, and the End Date marks when it should be completed. It can be set by clicking the respective field.
   :::note
   If no date is selected, the current date is automatically selected by default.

   :::

    - **Priority**: The priority level can be set to **P1, P2, P3, or P4** by clicking the priority dropdown menu.
    - **Testing**: Testing defines whether a work item requires testing. It provides two options:
      - **Testing Ignored**: It means testing is not needed for the required bug.
      - **Testing Required**: It means that the task must be tested before completion.
    - **Labels**: Labels can be applied to a task using the **Labels** button or by searching for an existing label. By default, the task has **No labels**, and new labels can be created using the **Create Label** button.

![](/img/how-tos/how-to-create-bugs/bug-details01.png)

6. In the case of a **Document**, the Properties panel on the right-hand side displays the following key configuration details:  
   - **Status**: It is used to indicate the current progress or state of an item, such as a Document. When the dropdown is selected, two status options are visible: **Review** and **Ready**.
     - **Review**: It indicates that the item is under evaluation or awaiting feedback.
     - **Ready**: It indicates that the item has completed preparation and is available for the next stage of work.
   - **Assignee**: It shows the initial responsibility for the bug. The assignee can be selected from the user field, or the requirement can remain under triage by using the **Set as Triage** button.
   - **Milestone**: By default, the milestone is set to **Backlog**. It can be changed from the dropdown menu or a new milestone can be created using the **Create Milestone** button.
   - **Folder**: It helps users store documents under a common category, making them easier to locate, manage, and maintain. By default, it remains set to the **Default** folder. By clicking the field, a folder can be selected, and folders can also be selected by searching through the search bar.
   - **Feature**: By default, the feature is set to **Default**. It can be changed from the dropdown menu or found using the search bar.
   - **Priority**: The priority level can be set to **P1, P2, P3, or P4** by clicking the priority dropdown menu.
   - **Labels**: Labels can be applied to a task using the **Labels** button or by searching for an existing label. By default, the task has **No labels**, and new labels can be created using the **Create Label** button.

![](/img/how-tos/how-to-create-bugs/document-title.png)

7. At the top-right corner, the **Create** button is used to save the requirement, while **Switch to old UI** allows returning to the previous interface.

![](/img/how-tos/how-to-create-bugs/create-old.png)

8. Under the clock circle icon, the **Estimated time**, **Latest estimation**, **Time spent**, and **Estimated time left** are shown. The timings of other related items are also shown.

![](/img/how-tos/how-to-create-bugs/task-estimation.png)

9. The "Add Spent/Needed" Time window appears when the **Clock circle** icon is clicked. It is used to record the time spent on a work item and to estimate any additional time required. 

   - The **Log type** dropdown allows the user to select the nature of the work, such as documentation. The **New time spent (in minutes)** field is used to log the actual time already spent, while the **Additional time required (in minutes)** field is used to estimate remaining effort. Quick time options are provided for faster entry.
   - The **Note** field is used to add a brief explanation or comment about the logged time. The dialog also includes **New record**, **History**, and **Breakdown** tabs for managing and reviewing worklog entries. The **Save** button records the information, and **Cancel** closes the dialog without saving.

  - Here is an example, the note can include details such as how many hours were spent on research if **Research** is selected on Log type, who added the entry, when it was added, and whether the work type was research or something else. If one hour was spent on research, adding this information in the note clearly indicates that one hour of research time was logged. However, in work management, both the research time and the total time spent are displayed separately for better tracking.
  - Different icons are provided for different log types.
  - The latest estimation, time spent, and estimated time left are displayed using different icons to clearly distinguish each value.

  :::note
  - A **Clock circle** refers to a circular visual indicator that represents time or progress in a clock-like format. It displays the following information:  
    - **Tabs (New record, History, Breakdown)**:
    The New record tab is selected, which is used to add a fresh time entry. The other tabs are meant for viewing past logs and detailed summaries.

    - **Log type**:
    This dropdown is used to specify the nature of the work performed. In this example, the log type is set to Testing, indicating that the recorded time is related to testing activities.

    - **New time spent (in min)**:
    This field captures the actual time already spent on the task. Quick selection options such as 15 minutes, 30 minutes, 1 hour, and more are provided for convenience.

    - **Additional time required (in min)**:
    This field is used to estimate extra time that will be needed to complete the remaining work. Similar quick selection options are available.

    - **Note**:
    This text area allows the user to add a brief explanation or context for the time entry. In this case, it mentions the reason for testing.

    - **Action buttons**:
    The Save button confirms and records the entry, while the Cancel button closes the dialog without saving.
  - Different icons are provided for different log types.
  - The latest estimation, time spent, and estimated time left are displayed using different icons to clearly distinguish each value.

  :::

![](/img/how-tos/how-to-create-bugs/add-needed.png)

10. A discussion message is displayed at the bottom of the page.
  :::note
  Here, the sent message can be edited, replied to, shared, or deleted.

  :::

![](/img/how-tos/how-to-create-bugs/discussion-message.png)

11. If any changes are made to a requirement, the system displays a system message indicating which user made the change and what was updated. This system message supports changes to the title, assignee, milestone, version, feature, status, priority, start and end dates, testing, and labels. However, system messages are not generated for changes to followers, links, descriptions, or attachments.

![](/img/how-tos/how-to-create-bugs/system-message.png)

12. The progress chart (**Testing**, **Development**, **Total**) is displayed in a circular format.

![](/img/how-tos/how-to-create-bugs/circular-progress.png)

13. Attachments can be uploaded by clicking the **Upload** button.

![](/img/how-tos/how-to-create-bugs/attachment-upload.png)

13. The ticket page displays when the item was originally created, when it was last modified, and the user who created the item. It also shows the **Switch to Old UI** button, the **Create** button during ticket creation, and the **Copy** button, which appears after the ticket is created.

![](/img/how-tos/how-to-create-bugs/created-modified.png)

![](/img/how-tos/how-to-create-bugs/create-ticket.png)

![](/img/how-tos/how-to-create-bugs/copy-ticket.png)

14. In the **Followers** section, two groups are displayed:  
    - **You**: Indicates that the current user is following items such as details, tasks, bugs, test cases, attachments, and discussions, and will receive updates related to any changes or activities. An option to remove the follower is also available.
    - **Others**: Allows additional users to be added as followers by clicking the **+ Others** button. An option to remove another follower is also available.

  :::note
  Followers can be removed from the list. If a user removes themselves from the followers section, the **+You** option is automatically displayed. By clicking **+You** option, the user is added again as a follower. By clicking **+Others**, additional users can be added as followers.

  :::

![](/img/how-tos/how-to-create-bugs/you-other.png)

![](/img/how-tos/how-to-create-bugs/remove-follower.png)

15. The **Linked Items** section allows users to associate external items or references with the current work item. Here's a detailed explanation:  
  - **Search Bar**: There is a search bar labeled “Search linked item” which allows users to quickly find already linked items.  
  - **Calendar Icon**: Likely used to link a date-specific item or schedule-related reference.
  - **Plus (+) Icon**: Opens a menu for creating or linking new items, such as, **Task**, **Bug**, **Document**, **Requirement**, or **Test Case**.
  - **Link New Icon**: Used to add a direct link or reference to an external item.
    - **ZeuZ**: Allows linking another ZeuZ work item.
    - **GitHub**: Allows linking a GitHub issue or repository.
    - **Jira**: Allows linking a Jira ticket.

![](/img/how-tos/how-to-create-bugs/linked-items.png)

![](/img/how-tos/how-to-create-bugs/items-linked.png)

:::note
- If a user hovers over a linked test case or task, the related information is displayed. When the item is clicked, a slider panel opens.

![](/img/how-tos/how-to-create-bugs/linked-details.png)

![](/img/how-tos/how-to-create-bugs/task-slider.png)

- If users make any updates, the changes are saved automatically.

:::

## FAQs / Troubleshooting
### FAQs

<details>
<summary>What does the ticket type dropdown represent?</summary>

The dropdown allows the user to select the type of ticket to be created, such as **Task, Bug, Requirement, or Document**. Each type serves a different purpose in work tracking.

</details>

<details>
<summary>What do the progress circles represent?</summary>

The progress section displays **Testing, Development**, and **Total** progress as percentages. These values help users quickly understand the current completion state of the ticket.

</details>

<details>
<summary>What does the time tracking section show?</summary>

It displays the original estimate, latest estimate, time spent, and remaining estimated time. Different icons are used to distinguish each value for clarity.

</details>

<details>
<summary>What is the purpose of linked items?</summary>

Linked items are used to create relationships between related work items.

They help maintain traceability, improve visibility, and allow users to understand how requirements, tasks, bugs, and test cases are connected.

</details>

<details>
<summary>Who receives updates for this ticket?</summary>

All users listed under the **Followers** section receive updates when changes occur to the ticket.

</details>

### Troubleshooting
- **Progress shows 100% but testing is not completed**: This can happen when development work is marked complete but testing has not yet been executed. The testing status should be updated accordingly.
- **Time spent or estimate values look incorrect**: This usually occurs if time was logged incorrectly. Users should update time entries using the clock circle icon to ensure accurate tracking.
- **Milestone remains set to Backlog**: If no milestone is selected during ticket creation, the system keeps the milestone as Backlog by default. The milestone can be updated manually later.
- **Version shows as “No version”**: This indicates that no fixed or found version was assigned during creation. A version must be created and selected if version tracking is required.
- **Switch to Old UI button does not respond**: This may occur due to temporary browser or cache issues. Refreshing the page or clearing the browser cache generally resolves the problem.

## Changelog

- New UI has been introduced [[202512](/blog/zeuz-platform-202512/)]

## Related Topics

- [User management](https://docs.zeuz.ai/docs/zeuz-server/admin/Users/create-users/)
- [Milestones](https://docs.zeuz.ai/docs/zeuz-server/Project/Others/milestones/)
- [Version](https://docs.zeuz.ai/docs/zeuz-server/Project/Others/version/)
- [Create folders and features](https://docs.zeuz.ai/docs/zeuz-server/testing/Test%20Case/create-folders-and-features/)
- [Create test cases](https://docs.zeuz.ai/docs/zeuz-server/testing/Test%20Case/create-test-cases/)
- [Label](https://docs.zeuz.ai/docs/zeuz-server/Project/Others/create-and-manage-labels/)
- [GitHub integration](https://docs.zeuz.ai/docs/zeuz-server/admin/Integration/github-integration/)

---





