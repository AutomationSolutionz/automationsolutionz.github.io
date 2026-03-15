---
id: link-team-to-a-project
title: Linking a Team to a Project
---

import MetaCard from '@site/src/components/MetaCard';

**Linking a Team to a Project** means assigning a specific team to work on a particular project so that the team members can access and manage the test cases and executions, scheduler, project management, test history and related tasks within that project in ZeuZ.

In simple terms, it connects the **team** with the **project**, allowing the assigned members to collaborate, create, execute, and manage testing activities for that project.

<MetaCard
  availableFrom="20250518"
  difficulty="🟢 Easy"
  lastUpdated="15 Mar, 2026"
  relatedTopics={["Create team", "Create project"]}
/>

### Why it matters / Use Cases:
- **Team Responsibility Assignment**: Assigns a specific team to manage testing activities for a particular project.
- **Controlled Project Access**: Ensures that only the linked team members can access and work on the project.
- **Organized Project Structure**: Keeps projects structured by associating the correct teams with the appropriate projects.

## Prerequisites
- Access to ZeuZ Server with permissions for **Admin → Team & Project → Project List**.
- The team that will be linked must already exist in the system.
- The team should have users assigned as members.
- The user must navigate to the **Projects** page to link the team with the specific project.

## Quick-Start
- Click on the **Manage Team** button available on the "Projects" page.

## Features
- First, navigate to the **Projects** page by clicking the "Project List" option from the menu bar.

![](/img/how-tos/how-to-link-team-to-a-project/list-project.png)

![](/img/how-tos/how-to-link-team-to-a-project/page-project.png)

- Click the **Manage Team** button for the required project.

![](/img/how-tos/how-to-link-team-to-a-project/manage-button.png)

- Go to the **Manage Team** page.
- To add a team, click the **(+) sign** next to the required team.
- The added team will be shown under the **Assigned Teams** section.

![](/img/how-tos/how-to-link-team-to-a-project/team-manage.png)

![](/img/how-tos/how-to-link-team-to-a-project/plus-team.png)

![](/img/how-tos/how-to-link-team-to-a-project/assign-team.png)

## FAQs / Troubleshooting
### FAQs

<details>
<summary>Can a team be linked to multiple projects?</summary>

Yes, a single team can be associated with multiple projects, depending on resource allocation and project requirements.

</details>

<details>
<summary>Do all team members get access to the project automatically?</summary>

When a team is linked to a project, all team members gain access according to their roles. However, for sections that require higher or restricted permissions, individual access may need to be adjusted seperately.

</details>

<details>
<summary>Can I remove a linked team from a project?</summary>

No, a team cannot be removed from a project once it has been linked.

</details>

### Troubleshooting
- **Team not showing in the project**: Ensure that the team is created and active, and that the user has the required permissions to link teams.
- **Unable to link a team**: Verify that the user has the required permissions.
- **Member cannot access the linked project**: Ensure that the member is active, has the required role permissions, and the team is correctly linked to the project.

## Changelog

- Always available.

## Related Topics

- [Create team](https://docs.zeuz.ai/docs/zeuz-server/admin/Teams/create-teams/)
- [Create project](https://docs.zeuz.ai/docs/zeuz-server/admin/Projects/create-projects/)

---