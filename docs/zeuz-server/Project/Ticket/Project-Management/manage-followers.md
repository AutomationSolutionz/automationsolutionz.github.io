---
id: manage-followers
title: Manage Followers
---

import MetaCard from '@site/src/components/MetaCard';

**Followers** are users added to a ticket to receive updates and notifications about its progress or any changes when the ticket is created. They can also be added after the ticket is created, and there is an option to remove a follower if needed.

<MetaCard
  availableFrom="202512"
  difficulty="🟢 Easy"
  lastUpdated="28 Jan, 2026"
  relatedTopics={["Create test cases", "Create a ticket", "Attachments"]}
/>

### Why it matters / Use Cases:
- **Notification of Updates**: Followers receive alerts when the ticket status changes, new comments are added, or attachments are uploaded.
- **Accountability** By following a ticket, users can track who is responsible for tasks or actions related to the ticket.
- **Optional Management**: Followers can be added or removed after ticket creation to adjust who receives updates as work evolves.

## Prerequisites
- Access to ZeuZ Server with permissions for **Project → Ticket → (Requirement, Task, Bug, Document)**.
- The user must have access to create or edit a ticket in order to add followers.

## Quick-Start
1. By clicking **+ Others** option, additional users can be added as followers.

## Features
- In the **Followers** section, two groups are displayed:  
  - **You**: Indicates that the current user is following items such as details, tasks, bugs, test cases, attachments, and discussions, and will receive updates related to any changes or activities. An option to remove the follower is also available.
  - **Others**: Allows additional users to be added as followers by clicking the **+ Others** button. An option to remove another follower is also available.

  :::note
  Followers can be removed from the list. If a user removes themselves from the Followers section, the **+ You** option is automatically displayed. By clicking the **+ You** option, the user is added again as a follower.

  :::

![](/img/manage-followers/you-other.png)

![](/img/manage-followers/remove-follower.png)

## FAQs / Troubleshooting

<details>
<summary>Can a follower edit the ticket?</summary>

No, followers only receive updates and notifications about the ticket’s progress or any changes when the ticket is created; they cannot edit the ticket.

</details>

<details>
<summary>Why does the Followers list not update immediately?</summary>

The list may refresh after the ticket is saved or reloaded. Unsaved changes can prevent updates from appearing.

</details>

<details>
<summary>Is the ticket creator automatically added as a follower?</summary>

No, the ticket creator is not automatically added as a follower.

</details>

<details>
<summary>What happens if a follower is deleted from the system?</summary>

The user is automatically removed from the Followers list and will no longer receive notifications.

</details>

<details>
<summary>Can multiple followers be added at once?</summary>

Multiple users can be added one by one using the **+ Others** option during or after ticket creation.

</details>

## Changelog

- New UI has been intrduced [[202512](/blog/zeuz-platform-202512/)]

## Related Topics

- [Create test cases](https://docs.zeuz.ai/docs/zeuz-server/testing/Test%20Case/create-test-cases/)
- [Create a ticket](https://docs.zeuz.ai/docs/zeuz-server/Project/Project-Management/create-tickets/)
- [Attachments](https://docs.zeuz.ai/docs/zeuz-server/testing/Test%20Case/create-global-attachments/)

---