---
sidebar_position: 1
id: team-project
title: Manage Team & Project
---

import MetaCard from '@site/src/components/MetaCard';

The **Team and Project Management** page provides super admins with a centralized location to review projects, create new projects, manage project ownership, connect teams to projects, configure team email settings, and maintain project-level settings.

<MetaCard
  availableFrom="To be added later"
  difficulty="🟢 Easy"
  lastUpdated="13 May, 2026"
  relatedTopics={["Email Setup", "Dashboard", "Team", "User"]}
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
- The **Manage Teams** action displays assigned teams and available teams side by side.
- You can:  
  - Review the teams already assigned to the project.
  - Search for available teams by team name.
  - Link an available team to the project.
  - Unlink an assigned team from the project.
- Use this when a team starts or stops working on a project.

![](/img/team-project/manage-teams.png)

![](/img/team-project/assign-action.png)

### Email Setup
- The Email Setup action allows configuration of SMTP email for a team within the selected project.
- First, select the **Team**, then update the email fields:  
  - **From Address**.
  - **Host/SMTP Address**.
  - **Port**.
  - **Username**.
  - **Password**.
  - **TTLS**.
- You can test the email setup before saving it. If the selected project has no linked teams, the page indicates that no teams are available.

![](/img/team-project/email-button.png)

![](/img/team-project/detailed-email.png)

### Project Settings
- The **Project Settings** action controls test case versioning behavior for that project.
- The settings include:  
  - **Version Control**: Turn version control ON or OFF.
  - **Number of versions allowed for a test case**: Set how many saved versions are kept.
  - **Only enabled test cases**: Choose whether only enabled test cases should be considered.

![](/img/team-project/project-button.png)

![](/img/team-project/project-settings.png)

### Teams List
- The Teams tab displays the team name, team ID, linked project, member count, public key status, and edit action.
- You can:  
  - Search by team name.
  - Sort teams by name or member count.
  - Identify the current team with the Current tag.
  - Identify teams linked to the current project using the Current Project tag.
  - Check whether a public key is set.

![](/img/team-project/teams-list.png)

### Create or Edit Team
- Select New Team to create a team, or use the Edit action to update an existing team.
- The Team form includes:  
  - **Team Name**: Only letters, numbers, spaces, and hyphens are allowed.
  - **Project**: Optional when creating a team and locked when editing an existing team.
  - **Public Key**: Paste the team's public key if your process uses one.
  - **Members**: Search for users and select at least one member.
- The form cannot be submitted until a valid team name and at least one member are selected.

![](/img/team-project/edit-team.png)

![](/img/team-project/team-form.png)

### Switch Old UI
- The Switch Old Menu opens the older project and team management pages. It should only be used when a required workflow is not yet available in the new interface.

## FAQs / Troubleshooting
### FAQs

<details>
<summary>What can I manage from this page?</summary>

You can manage projects, project owners, teams, team members, project-team links, project email setup, and project settings.

</details>

<details>
<summary>Why do I see a Current tag?</summary>

The Current tag shows the project or team currently selected in your ZeuZ session.

</details>

<details>
<summary>Can one team be linked to a project later?</summary>

Yes. Open the project action for Manage Teams, then link the team from the Available Teams list.

</details>

<details>
<summary>Can I create a team without assigning it to a project?</summary>

Yes. The project field is optional when creating a team. You can link the team to a project later.

</details>

### Troubleshooting
- **Project or team data is not loading**: Refresh the page and confirm that access to the management area is still available.
- **Owner or member search shows no results**: Check the spelling, then confirm that the user already exists in ZeuZ.
- **Project creation fails**: Confirm that the name uses only letters, numbers, spaces, and hyphens, and that at least one owner is selected.
- **Team creation fails**: Confirm that the name is valid and that at least one member is selected.
- **A team is missing from Email Setup**: Link the team to the project first.
- **Email test fails**: Confirm the SMTP host, port, credentials, from address, and TTLS settings.

## Changelog

- To be added later.

## Related Topics

- [Email setup](https://docs.zeuz.ai/docs/zeuz-server/admin/Team%20&%20Projects/setup-email-notification/)
- [Dashboard](https://docs.zeuz.ai/docs/zeuz-server/Project/Manage/project-dashboard/)
- [Team](https://docs.zeuz.ai/docs/zeuz-server/Project/Manage/project-teams/)
- [User](https://docs.zeuz.ai/docs/zeuz-server/Project/Manage/project-users/)

---