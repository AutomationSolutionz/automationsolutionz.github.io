---
id: create-global-attachments
title: Attachments
---

import MetaCard from '@site/src/components/MetaCard';

**Attachments** in **ZeuZ** centralize test artifacts and data (logs, screenshots, input files) as first-class test resources making test runs reproducible and failures faster to diagnose and they travel with the test JSON to ZeuZ Node and are stored with run reports, improving traceability and import/export integrity.  
The **Attachment** feature allows users to upload and manage files that can be accessed and reused if you upload **Globally** across multiple test cases and test steps within a project. This eliminates the need to repeatedly upload the same files for each individual test, promoting efficiency and consistency.

<MetaCard
  availableFrom="20250518"
  difficulty="🟢 Easy"
  lastUpdated="09 Sep, 2025"
  relatedTopics={["Exporting and Importing Test Cases", "Creating Documents"]}
/>

<br />

![](/img/how-tos/create-global-attachments/image-01.png)

## Attachment Types
1. **Global Level** - Attachments that apply across the entire project.
2. **Test Case Level** - Attachments specific to a particular test case.
3. **Step Level** - Attachments tied to individual test steps.

## Importance of the Global Attachment Feature
1. **Re-usability**: Files such as test data, configuration files, or reference documents can be reused in multiple test cases without duplication.
2. **Centralized Management**: All important files are stored in a central location, making it easier to update and maintain them.
3. **Consistency Across Tests**: Using the same attachment across several tests ensures uniformity and reduces errors caused by outdated or mismatched files.
4. **Improved Collaboration**: Testers and teams can share and access the same set of global files, enhancing team coordination and reducing miscommunication.
5. **Time-Saving**: Eliminates repititive uploads, especially in large-scale testing projects with shared resources.

## Why it matters / Use Cases:
- **Centralized and Reusable Test Data**: The Global Level Attachment allows a single data file (e.g., `.csv`, `.json`, `.xml`) to be shared across multiple test cases. This eliminates file duplication, ensures consistent and updated test data, promotes reusability and saves time.
- **Standardization of Project-Wide Configurations**: Global attachments store shared configuration files (e.g., `environment_settings.json`, `.properties`) to maintain consistency across all tests. Updating the file once applies changes everywhere, ensuring uniform setups and easier maintenance.
- **Cross-Platform UI Framework Automation**: Extends automation to complex desktop applications using image-based recognition or specialized libraries, beyond standard web or OS-native elements.
- Include test data such as input files, datasets, or configuration details.
- The file is required to read data that is needed for executing the test case.

## Pre-requisites
- Access to ZeuZ Server with permissions for **Testing → Test Case → Attachments**.
- The **Attachment** feature does not require any setup. However, before using any attachment, it must be uploaded first.

## Quick-Start
1. Click or drag files to upload.
2. Multiple files can be uploaded.
3. Search for files, uploaders, or sources using the search bar.

## Features

![](/img/how-tos/create-global-attachments/image-02.png)

- After visiting the page, you will see an upload section where you can **drag and drop** files or **select** them manually to upload attachments globally. After selecting the files, you must confirm the upload.
- After confirming, the files start uploading, and you can view the upload progress in real time.

![](/img/how-tos/create-global-attachments/image-03.png)

- After a successful upload, you can view the complete list of attachments across your team or project. Some attachments are at the **Global** level, some at the **Test Case** level, and others at the **Step** level. You can differentiate them by the tags **Global**, **Test Case**, and **Step**. Additionally, the source of **Test Case** and **Step** attachments is also visible.

![](/img/how-tos/create-global-attachments/image-04.png)

- The attachment list can be filtered by **File Name**, **Source**, **Uploaded By**, and **Type** **(e.g., Global, Test Case, Step)**.

![](/img/how-tos/create-global-attachments/image-05.png)

- Attachments can be **deleted** or **downloaded** individually by hovering over a row or by selecting multiple items.
> When deleting or downloading multiple attachments, you must confirm the action first to prevent unwanted deletion or download.

![](/img/how-tos/create-global-attachments/image-06.png)

![](/img/how-tos/create-global-attachments/image-07.png)

## FAQs / Troubleshooting
### FAQs

<details>
<summary>How many attachments I can delete or download at a time?</summary>

You can select upto 10 attachments at a time for deletion or download.

</details>

<details>
<summary>What is the maximum file size I can work with?</summary>

It depends on your requirements; files can be up to a few gigabytes in size.

</details>

<details>
<summary>Can I upload and work with different file types?</summary>

Yes, you can work with almost any type of file.

</details>

### Troubleshooting
- **Upload Failure** – Large file size, unstable network, or unsupported browser can prevent successful uploads.
- **Download Errors** – Network interruptions or browser restrictions can block downloads.
- **Delete Failure** – Trying to delete more than the allowed limit or skipping confirmation may cause errors.

## Changelog

- Attachment Page Redesign and Bug-fixes [[20250909](/blog/zeuz-platform-20250909/)]

## Related Topics

- [Exporting and Importing Test Cases](https://docs.zeuz.ai/docs/zeuz-server/testing/Test%20Case/export-and-import-test-cases/)
- [Creating Documents](https://docs.zeuz.ai/docs/zeuz-server/Project/Create-Edit/create-documents/)

---
