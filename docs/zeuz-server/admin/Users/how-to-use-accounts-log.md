---
id: how-to-use-accounts-log
title: How to use Accounts Log
---

The **Account Logs** provides a detailed tracking mechanism for user login activities. Each row in the log records important information such as:
1. **ID**: An unique identifier for each log entry.
2. **Username**: The account name of the user who attempted to log in.
3. **Time**: The exact timestamp of when the login attempt occured.
4. **Result**: The outcome of the login attempt (e.g., "login_successful").
5. **IP Address**: The IP address from which the login attempt was made.
6. **Metadata**: Additional information about the user's device and browser, such as the operating system (e.g., Windows 11 or MacOS) and the browser version (e.g., Safari or Chrome).

This **Account Logs** page is a crucial feature for enterprise clients, offering the following benefits:

### 1. **Enhanced Security and Monitoring**:
- **Login Tracking**: It tracks every login attempt, both successful and unsuccessful, providing a clear audit trail of who accessed or attempted to access the system and from where.
- **IP Address Logging**: By recording the IP address, enterprises can identify potentially suspicious access attempts from unknown locations, thus enhancing security by flagging unauthorized users.

### 2. **Detailed User Metadata**:
- The metadata provides detailed information on the user's environment, such as the browser and operating system used. This helps in identifying potential technical issues or security tasks (e.g., if an outdated or untrusted browser is used).

### 3. **Failed Login Attempts and Account Lockout**:
- To further enhance security, the system automatically locks an account if a user enters incorrect credentials more than five times. This prevents brute force attacks or unauthorized access.
- Once locked, the account requires **admin intervention** to be reactivated, ensuring that only legimate users can regain access.

### 4. **Audit Trail for Compliance**:
- The log provides a detailed record of user login activities, which is essential for regulatory compliance, internal audits, or investigations. It allows admins to verify who accessed the system and when, ensuring accaountability.

### 5. **Troubleshooting and User Support**:
- In cases of login issues, the logs can help IT teams troubleshoot by reviewing the metadata and identifying whether the issue stems from a specific browser or device configuration.

In conclusion, this **Account Logs** page is a vital tool for enterprise clients looking to ensure robust security, maintain compliance, and improve visibility into user login activities across their platform. It also acts as a safeguard by locking out users after multiple failed attempts, requiring admin intervention to prevent potential security breaches.

## Steps

1. From the **Menu Bar**, go to the **Admin** and then **Account Logs** option.

![](/img/how-tos/how-to-use-accounts-log/account-logs.png)

2. Go to the **Account Logs** page.

![](/img/how-tos/how-to-use-accounts-log/log-page.png)

3. The **Number of Logs** appears on the **Accounts Log** page.
   > The **Number of Logs** refers to the total count of recorded events displayed on the log page. Each log entry represents an action, such as user login attempts or system changes. On an **Accounts Log** page, this count reflects account related activities like logins and logouts, helping users or admins monitor system usage and track behaviour for auditing purposes.

![](/img/how-tos/how-to-use-accounts-log/log-number.png)

4. If we want to search for any user, there is a search bar where we can search for a specific user by username.

![](/img/how-tos/how-to-use-accounts-log/search-log.png)

5. Here each row in the log records important information, such as:
- **ID**
- **Username**
- **Time**
- **Result**
- **IP Address**
- **Metadata**.

![](/img/how-tos/how-to-use-accounts-log/log-info.png)