---
id: use-accounts-log
title: Account Logs
---

import MetaCard from '@site/src/components/MetaCard';

**Account Logs** in the context of test cases and project management refer to the system-generated records 
that track user activities, such as creating, editing, or updating projects, teams, and test cases within 
**ZeuZ**.

<MetaCard
  availableFrom="20250518"
  difficulty="🟢 Easy"
  lastUpdated="12 Mar, 2026"
  relatedTopics={["User Management"]}
/>

### Why it matters / Use Cases:
- **User Activity Tracking**: Helps monitor user login activities in the system.
- **Security Monitoring**: Tracks IP address, device, and browser to detect unauthorized access.
- **Troubleshooting Login Issues**: Allows administrators to check whether a login attempt was successful or 
unsuccessful.
- **Audit and Accountability**: Maintains a record of user access for auditing purposes.
- **Access History Review**: Shows when and from where users accessed ZeuZ.

## Prerequisites
- Access to ZeuZ Server with permissions for **Admin → Users → Account Logs**.

## Features
- Navigate to the **Accounts Log** page by clicking the `Account Logs` option available under the "Admin" section in the menu bar.

![](/img/how-tos/how-to-use-accounts-log/account-logs.png)

![](/img/how-tos/how-to-use-accounts-log/log-page.png)

- After navigating to the **Accounts Log** page, the following information will be displayed:  
  - **Search Functionality**: Allows users to search logs using the username, IP address, or result.
  - **Clear Search Option**: Provides a **Clear** button to reset the search filter and view all logs again.
  - **Username Tracking**: Displays the username of the person who accessed the system (e.g., *Tahmid Shafique*).
  - **Time Recording**: Shows the exact date and time of each login activity (e.g., *03/11/2026, 02:43:36*).
  - **Login Result Status**: Indicates whether the login attempt was successful or not (e.g., *login success*).
  - **IP Address Identification**: Records the IP address from which the user accessed ZeuZ (e.g., *103.187.94.221*).
  - **Device and Browser Information**: Displays the operating system and browser used during login (e.g., *Windows / Chrome 145.0.0.0*).

![](/img/how-tos/how-to-use-accounts-log/search-log.png)

![](/img/how-tos/how-to-use-accounts-log/log-info.png)

## FAQs / Troubleshooting

<details>
<summary>Why are no logs appearing on the Account Logs page?</summary>

Ensure that the users have logged in to the system. Account logs are generated only when login activities occur.

</details>

<details>
<summary>Why is a specific user's log not visible?</summary>

Use the **Search bar** to search by username, IP address, or login result to locate the required log entry.

</details>

<details>
<summary>Why is the search result not showing expected logs?</summary>

Check that the correct **username**, **IP address**, or **result keyword** is entered in the search field.

</details>

<details>
<summary>How can the filtered results be cleared?</summary>

Click the **Clear** button next to the search bar to remove the search filter and display all logs again.

</details>

<details>
<summary>Why is the IP address different for the same user?</summary>

The IP address may change if the user logs in from a **different network**, **device**, or **location**.

</details>

<details>
<summary>Why is the device and browser information different?</summary>

The device and browser information may appear different because the user may access ZeuZ from different devices, operating systems, or web browsers at different times.

</details>

## Changelog

- New UI has been introduced [[20250518](/blog/zeuz-platform-20250518/)]

## Related Topics

- [User management](https://docs.zeuz.ai/docs/zeuz-server/admin/Users/create-users/)

---