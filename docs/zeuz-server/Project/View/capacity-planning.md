---
id: capacity-planning
title: Capacity Planning
---

import MetaCard from '@site/src/components/MetaCard';

 **Capacity Planning** is a small, organized team of members within a project that works on specific tasks or areas, and its purpose in project management is to efficiently group resources, track capacity and workload, improve accountability, and support structured planning and execution in platforms like ZeuZ.

<MetaCard
  availableFrom="202603"
  difficulty="🟢 Easy"
  lastUpdated="05 May, 2026"
  relatedTopics={["Milestones", "Project management"]}
/>

## Prerequisites
- Access to ZeuZ Server with permissions for **Project → View → Capacity Planning**.

## Quick-Start
- From the "Project" option, click on **Capacity Planning**, and it will redirect to the **Capacity Planning** page.

## Features
### Create a new Capacity Planning
- Click the **+ New Capacity Group** button to create a new Capacity Planning.
- When creating a new **Capacity Planning**, a name can be assigned to it, for example, **ZeuZ R&D Team**.

![](/img/POD-management/new-pod.png)

- There are certain validations in place for milestones. For example, overlapping milestones cannot be added together. If **Onboarding** overlaps with **m28**, only one of them can be selected. In that case, either **Onboarding** or **m28** must be chosen.

![](/img/POD-management/onboarding-pod.png)

- After selecting milestones, members can be added to the POD based on who will be part of the team. For example, **Muhib** can be added as a member. His development time may be set to **6 hours**, and this value can be adjusted as needed. The remaining **2 hours** may be allocated for meetings or other tasks.
- The POD configuration mainly defines how many hours each user will work, how many working days are available, and when the work will start. For example, it can show that a member will work **8 hours** per day including development and other tasks, work **5 days** a week, or work fewer days due to leave or sickness. It also allows defining whether the member will start work from **Monday**, **Tuesday**, or another selected day.

![](/img/POD-management/one-member.png)

- In this system, multiple users can be added, and for each user, individual fields can be defined or configured as required. After providing all the necessary information, the pod can be created.
- A validation rule is also applied where a user already belonging to a pod team cannot be added to another pod. In other words, for a given project and team ID, a user can be a member of only one pod. For example, if five pods are created, a user (e.g., Muntasib Muhib Chowdhury) can belong to only one of those pods within the same project and team context.

![](/img/POD-management/another-pod.png)

- Milestones can be selected and assigned to any pod. However, the validation rule for milestones ensures that overlapping milestones are not allowed.
- Once all the required information is properly filled and validated, the **Capacity Planning** creation process is completed successfully by clicking the **Create Capacity Group** button.

![](/img/POD-management/pod-creation.png)

### Additional features
#### Edit a Capacity Planning
- If we need to edit an existing **Capacity Planning**, then click the Edit button of that existing **POD**.
- After editing the required details, click the **Update Capacity Group** button.

![](/img/POD-management/pod-edit.png)

![](/img/POD-management/pod-update.png)

#### Details of a Capacity Planning
-  To view the complete information of a **Capacity Planning**, click the **View** button to display its details.
- After clicking the **View** button, the complete details of the selected **Capacity Planning** will be displayed.

![](/img/POD-management/view-pod.png)

![](/img/POD-management/detailed-pod.png)

#### Delete a Capacity Planning
- If a **Capacity Planning** needs to be deleted, click the **Delete** button.

![](/img/POD-management/delete-pod.png)

#### Search a Capacity Planning
- To search for a **Capacity Planning**, click the **Search** bar at the top and enter the **POD** name.
- After searching for a **Capacity Planning** by name, the matching **Capacity Planning** will appear.

![](/img/POD-management/search-pod.png)

## Changelog

-  Introduced Capacity Planning Management System for cross-functional team organization. [[202603](/blog/zeuz-platform-202603/)]

## Related Topics

- [Milestones](https://docs.zeuz.ai/docs/zeuz-server/Project/Others/milestones/)
- [Project management]

---
