---
id: team-project
title: Team and Project Management
---

import MetaCard from '@site/src/components/MetaCard';

The **Team and Project Management** page provides super admins with a centralized location to review projects, create new projects, manage project ownership, connect teams to projects, configure team email settings, and maintain project-level settings.

<MetaCard
  availableFrom="To be added later"
  difficulty="🟢 Easy"
  lastUpdated="13 May, 2026"
  relatedTopics={["Email Setup"]}
/>

### Why it matters / Use Cases:
- Super admins can view project and team totals without opening separate pages.
- Project owners can be added or changed directly from the project list.
- Teams can be linked to the appropriate project so that users work within the correct project space.
- Team email settings can be reviewed before reports or notifications are sent.
- Project settings, such as test case versioning behavior, can be updated from the same workspace.
- The current project and team are highlighted, helping to prevent accidental changes to the wrong item.

## Prerequisites
- Access to ZeuZ Server with permissions for **Admin → Team & Projects → Manage Team & Project**.
- Users must already exist before they can be assigned as project owners or team members.
- A project must exist before you can link teams, configure project settings, or set up team email for that project.
- Teams must be linked to a project before they appear in that project's email setup list.

## Features
### Summary Cards
- The top of the page displays three summary totals:  
  - **Projects**: The number of projects available to manage.
  - **Teams**: The number of teams available to manage.
  - **Current Project Teams**: The number of teams linked to the currently selected project in ZeuZ.

![](/img/team-project/upper-team.png)

### Projects and Teams Tabs
- The workspace is divided into two tabs:  
  - **Projects**: This tab is used to create projects, review project details, edit projects, manage linked teams, configure email settings, and update project settings.
  - **Teams**: This tab is used to create teams, edit teams, assign teams to projects, add members, and store a public key.
- When you switch tabs, the page remembers the selected view in the URL so it can be opened again directly.

![](/img/team-project/team-tabs.png)

### Projects List
- The Projects tab displays a table showing the project ID, project name, owners, teams, start date, due date, created date, created by and actions.
- You can:  
  - Search by project name.
  - Sort columns such as project ID, project name, and team count.
  - Open a project by selecting its project ID.
  - Identify the currently selected project by the Current tag.
  - Use row actions to edit the project, manage teams, open email setup, or manage project settings.

![](/img/team-project/team-search.png)

![](/img/team-project/edit-project.png)

### Create a New Project
- Select **+ New Project** to create a project. The form requires the following details:  
  - **Project Name**: Only letters, numbers, spaces, and hyphens are allowed.
  - **Project Owners**: Search for one or more users and select the individuals who should own the project.
- The project cannot be submitted until a valid name and at least one owner have been selected.

![](/img/team-project/project-new.png)

![](/img/team-project/project-create.png)

### Edit Project
- The **Edit action** opens a project form with two sections.
- The **Details** section includes:  
  - **Project Name**.
  - **Start Date**.
  - **End Date**.
  - **Owners**.
  - **Description**.
- The **Related Items** section includes:  
  - **Server**.
  - **Hyperlink**.
  - **Username**.
  - **Password**.
  - **Application**: GitHub, JIRA, Rally, or None.
- Use this section to keep project details and linked tool information up to date.

![](/img/team-project/edit-button.png)

![](/img/team-project/details-section.png)

![](/img/team-project/related-items.png)

### Manage Project Teams