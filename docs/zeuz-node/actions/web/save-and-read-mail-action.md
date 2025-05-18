---
id: save-and-read-mail-action
title: Save and Read Mail Action
---

## Description

![](/img/actions/common/read-email/image-1.png)

![](/img/actions/common/read-email/image-2.png)

The two images provide information on enabling **IMAP/POP** access in Gmail and setting up app passwords, which are necessary for secure access to Gmail from external applications.

## Image 1: **Gmail Settings - Forwarding and POP/IMAP**

This image shows the **Forwarding and POP/IMAP** settings in Gmail:

 1. **Forwarding**: Users can add a forwarding address to automatically send incoming emails to another email address. This feature is configured by clicking "Add a forwarding address".

 2. **POP Download**:
 - **Status**: The POP status shows as enabled, meaning the user can download emails using the POP protocol.
 - **Options**:
   - **Enable POP for all mail**: Downloads all emails, including those already accessed.
   - **Enable POP for mail that arrives from now on**: Downloads only new emails received after enabling POP.
   - **Disable POP**: Turns off POP access.
 - **Message Handling**: Users can choose what Gmail should do with messages accessed via POP, such as keeping a copy in the Inbox or marking them as read.

 3. **IMAP Access**:
 - **Status**: IMAP is enabled, allowing access from other clients.
 - **Options**:
   - **Enable IMAP**: Enables IMAP access for syncing emails across multiple devices.
   - **Disable IMAP**: Turns off IMAP access.
- **Auto-Expunge Settings**: Controls whether deleted messages are immediately updated on the server or held until the client initiates the update.
- **Deleted Messages Handling**: Options include archiving, moving to Trash, or permanently deleting messages that are marked as deleted.

These settings are essential for configuring email clients and third-party apps to interact with Gmail through POP or IMAP protocols.

## Image 2: **App Passwords - Google Account**
This image shows the **App Passwords** section in a Google account, used when two-factor authentication (2FA) is enabled:

 1. **App Passwords List**: The user has created multiple app-specific passwords for different applications, such as, "bbtest", "test new", and "mail". Each entry shows when the app password was created and last used. These passwords allow access to Gmail without needing the primary account password, adding a layer of security.

 2. **Creating a New App Password**:
 - Users can enter a custom name for a new app-specific password in the "App name" field. After naming it and clicking "Create", a unique password is generated, which can then be used in email clients or third-party applications.

 3. **App Password Usage**: App passwords are useful when using third-party applications that require access to Gmail, especially when two-factor authentication is enabled, as they provide a way to grant access without compromising the main account credentials.

 However, the following images collectively guide users through enabling IMAP for Gmail access and generating app passwords for secure access by external applications, especially when 2FA is active.


## **Action Configuration of Save and Read Email Action - Technical Documentation**

 The **Save and Read Email Action** is used to connect to an email account via the IMAP protocol, retrieve specific emails based on various filters, and save essential email elements into a variable for further use. This document provides detailed instructions on configuring and using this action effectively.

 1. **Description**  
 This action allows users to read and save emails by specifying various criteria for filtering. It requires certain parameters, such as host, username, password, and sorting criteria. The action can return emails based on factors like date, read/unread status, flagged status, sender, and more. Users can access specific components of each email, such as the sender, receiver, subject, date, text body, and HTML content, by specifying them within a variable.

 2. **Required Configuration Parameters**  
 To properly execute this action, the following input parameters are mendatory:
  - **IMAP Host**: The hostname of the IMAP server. Example for Gmail: `imap.gmail.com`.
  - **IMAP Username**: The email address from which to retrieve emails.
  - **IMAP Password**: Password for the email account. If two-factor authentication (2FA) is enabled, an app-specific password is required.
  - **Inbox**: The specific mailbox to check for emails, typically set to `"INBOX"`.

 3. **Sorting Parameters**  
 This action allows for multiple sorting criteria to fetch specific emails. Below are the various options available for filtering emails:
  - **Subject**: Sort by email subject. Provide the subject keyword here.
  - **Text**: Sort by email body content. Specify a keyword or phrase within the email body.
  - **Sender Email**: Sort by the sender's email address.
  - **Receiver Email**: Sort by the receiver's email address.
  - **Flagged Email**: Set to `"true"` to fetch emails marked as flagged (favourites), or `"false"` for non-flagged emails.
  - **Checked Email (Seen/Unseen)**: Set to `"true"` to fetch emails that have been read, or `"false"` for unread emails.
  - **Exact Date**: Filter emails sent on a specific date. Use the format `YYYY-M-D` (e.g., `2021-6-12`).
  - **After Date**: Filter emails sent after a specific date. Use the format `YYYY-M-D`.
  - **Before Date**: Filter emails sent before a specific date. Use the format `YYYY-M-D`.

  :::note

  For date parameters, do not use "01" or "02" for month and day; instead, use "1" or "2"

  :::

 4. **Optional Parameters**
  - **Wait**: Specifies a wait time in seconds. This parameter allows the system to wait for at least one email to be received, ensuring that the action retrieves at least one email when executed.
  - **Attachment Directory**: Defines the directory path where attachments will be saved. By default, it is set to `%|zeuz_download_folder|%\email_attachments`, but users can specify a different folder if needed.

 5. **Data Extraction**
 The following email components are extracted and saved into a variable for later use:
  - **Sender**: The email address of the sender.
  - **Receiver**: The receipent's email address.
  - **Subject**: The email subject line.
  - **Date**: The date the email was sent.
  - **Text**: The plain text body of the email.
  - **htmlBody**: The HTML content of the email.

 6. **Accessing Saved Data**
 To access any of the extracted email components, users should reference the saved variable with the specific component name. For example, if the variable is named "save", the syntax would look like this:
  - **Subject**: `%|save["Subject"]|%`
  - **Sender**: `%|save["Sender"]|%`
  - **Text**: `%|save["Text"]|%`
  - **Date**: `%|save["Date"]|%`
  - **Receiver**: `%|save["Receiver"]|%`
  - **HTML Body**: `%|save["htmlBody"]|%`  
If a specific component contains multiple values (e.g., if multiple emails match the criteria), use indexing to access each element individually:
  - **First Subject**: `%|save["Subject"][1]|%`
  - **Second Subject**: `%|save["Subject"][2]|%`

 7. **Example Configuration**
 Below is an example configuration for the **Save and Read Email Action**.  

 **Input Parameters**:
  - **IMAP Host**: `imap.gmail.com`
  - **IMAP Username**: `user@example.com`
  - **IMAP Password**: `app-specific-password`
  - **Inbox**: `INBOX`
  - **Subject**: `Invoice`
  - **Sender Email**: `notifications@company.com`
  - **Checked Email**: `false` (to fetch only unread emails)
  - **Before Date**: `2023-10-1`
  - **After Date**: `2023-9-1`
  - **Attachment Directory**: `c:\Email_Attachments\`

**Output Variable**:
  - **Save Mail**: Variable name for saving email data, e.g., `Variable_1`.

**Access Saved Data**:
  - **Retrieve the Subject**: `%|Variable_1["Subject"]|%`
  - **Retrieve Sender's Email**: `%|Variable_1["Sender"]|%`
  - **Retrieve Email Body**: `%|Variable_1["Text"]|%`
  - **Retrieve Date**: `%|Variable_1["Date"]|%`

This setup would connect to Gmail, filter for unread emails from `notifications@company.com` with "Invoice" in the subject, sent within the specified date range. It would save relevant details, which can be accessed through the specified variable.