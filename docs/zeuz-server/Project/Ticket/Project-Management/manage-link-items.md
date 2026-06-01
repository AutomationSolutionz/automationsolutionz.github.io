---
id: manage-link-items
title: Manage Linked Items
---

import MetaCard from '@site/src/components/MetaCard';

**Linked Items** refer to the ability to connect the current ticket with other related work items, such as Details, Requirements, Bugs, Test Cases, Attachment, Discussion or Remove follower.

Linking items helps maintain traceability by showing how different pieces of work are related. It improves visibility by allowing users to quickly understand dependencies, impacts, and relationships between tickets.

<MetaCard
  availableFrom="202512"
  difficulty="🟢 Easy"
  lastUpdated="26 Jan, 2026"
  relatedTopics={["Create test cases", "Create a ticket", "GitHub integration"]}
/>

### Why it matters / Use Cases:
- **Maintaining Traceability**
- **Improved Context and Visibility**
- **Cross-Platform Collaboration**
- **Dependency Management**
- **Efficient Reporting and Tracking**

## Prerequisites
- Access to ZeuZ Server with permissions for **Project → Ticket → (Requirement, Task, Bug, Document)**.
- The primary ticket must be created and saved before any linked items can be added, as linking is not possible until the ticket exists.
- If items are linked from ZeuZ, GitHub, or Jira, the corresponding integration must be properly configured and active.
- There must be existing tasks, bugs, documents, requirements, or test cases available to establish a link.

## Quick-Start
1. Select the **Link New** button to initiate the linking process.
2. Select the appropriate source for linking, such as ZeuZ, GitHub, or Jira.

## Features
- The **Linked Items** section allows users to associate external items or references with the current work item. Here's a detailed explanation:
  - **Search Bar**: There is a search bar labeled “Search linked item” which allows users to quickly find already linked items.
  - **Calendar Icon**: Likely used to link a date-specific item or schedule-related reference.
  - **Plus (+) Icon**: Opens a menu for creating or linking new items, such as, Task, Bug, Document, Requirement, or Test Case.
  - **Link New Icon**: Used to add a direct link or reference to an external item.
    - **ZeuZ**: Allows linking another ZeuZ work item.
    - **GitHub**: Allows linking a GitHub issue or repository.
    - **Jira**: Allows linking a Jira ticket.

![](/img/manage-link-items/linked-items.png)

![](/img/manage-link-items/items-linked.png)

:::note
- If a user hovers over a linked test case or task, the related information is displayed. When the item is clicked, a slider panel opens.

![](/img/manage-link-items/linked-details.png)

![](/img/manage-link-items/task-slider.png)

- If users make any updates, the changes are saved automatically.

:::

## FAQs / Troubleshooting

<details>
<summary>Why is the “Link New” option disabled or unavailable?</summary>

This occurs when the ticket has not been created or saved yet. Linked items can only be added after the ticket exists.

</details>

<details>
<summary>Why are GitHub or Jira options not selectable?</summary>

This usually indicates that the GitHub or Jira integration is not properly configured or is currently inactive.

</details>

<details>
<summary>Can the same item be linked multiple times?</summary>

No, the same item cannot be linked multiple times.

</details>

<details>
<summary>What should be done if a linked item cannot be found?</summary>

Ensure that the item exists, the correct source is selected, and the user has permission to view it.

</details>

<details>
<summary>How can a linked item be removed?</summary>

Linked items can be managed or removed using the available manage or remove option within the Linked Items section.

</details>

## Changelog

- New UI has been introduced [[202512](/blog/zeuz-platform-202512/)]

## Related Topics

- [Create test cases](https://docs.zeuz.ai/docs/zeuz-server/testing/Test%20Case/create-test-cases/)
- [Create a ticket](https://docs.zeuz.ai/docs/zeuz-server/Project/Project-Management/create-tickets/)
- [GitHub integration](https://docs.zeuz.ai/docs/zeuz-server/admin/Integration/github-integration/)

---