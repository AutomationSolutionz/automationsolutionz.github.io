---
id: version
title: Version
---

In software testing, a **Version** refers to a specific iteration or release of
a software product. Versions are used to track the evolution of the software
over time, documenting changes, improvements, bug fixes, and new features. Each
version typically has a unique identifier, such as a version number (e.g., 1.0,
2.1.3), which helps distinguish it from other releases.

### Key Aspects of a Version in Software Testing:

1. **Version Number:**
   - A numerical or alphanumeric label assigned to a particular release of the
     software (e.g., 1.0, 2.0, 2.1.4).
  
2. **Release Notes:**
   - A summary of the changes, including new features, enhancements, and bug
     fixes introduced in that version.

3. **Known Issues:**
   - Documentation of any known bugs or limitations that exist in that version.

4. **Test Cases:**
   - The set of test cases that were executed to validate that version, ensuring
     the software functions as expected.

### Importance of Versioning in Software Testing:

- **Traceability:** Helps in tracking which changes or features were introduced
  in specific versions, making it easier to identify when issues were
  introduced.
  
- **Test Management:** Facilitates organized and systematic testing by ensuring
  that each version is tested according to its unique set of changes.

- **Deployment:** Ensures that teams are aware of which version is currently
  deployed in production and what changes it includes.

- **Regression Testing:** Assists in identifying which previous functionalities
  need to be retested when new versions are released.

With ZeuZ, you can track all four key aspeects mentioned above easily with the
Version system.

### What does the Version Page of ZeuZ show?

The **Version** page in **ZeuZ** serves as a crucial tool for users to track the progress and status of various aspects of a software product across different versions. This page provides a visual overview of each version, allowing users to monitor key elements such as:

- **Tasks**: The page allows users to see the tasks associated with each version, helping them understand what work has been completed or is still in progress for that particular release.

- **Bugs**: Users can track the bugs identified in each version. This helps in understanding the stability and quality of the software, as well as in prioritizing bug fixes for future releases.

- **Run IDs**: Each version lists the specific Run IDs, which correspond to the individual test executions. This allows users to drill down into the details of each test run, including when it was executed and what the outcomes were.

- **Version Details**: The cards provide a snapshot of when each version was created (e.g., "2 months ago") and can include other relevant metadata such as the branch or staging environment used.

This **Version** page is particularly useful for project managers, QA engineers, and developers who need to stay informed about the status of different versions of the software, ensuring that all aspects of testing, task management, and bug tracking are organized and easily accessible. It enhances visibility into the development and testing process, facilitating better decision-making and more efficient project management.

## Steps

1. From the **Project** menu, go to the **Version** option.

![](/img/how-tos/how-to-use-version-page/version-option.png)

2. Go to the **Version** page.

![](/img/how-tos/how-to-use-version-page/version-page.png)

### Version Card Representation

- Shows the **Version** name.
- Also shows the time when the version is created.
- **Circle**:
  - **Blue** colored circle of version card: *Run ID*
  - **Black** colored circle of version card: *Test cases*
  - **Pink** colored circle of version card: *Tasks*
  - **Red** colored circle of version card: *Bugs*.
- After clicking on the **Version Card**, it shows the **Tasks**, **Bugs** and **Run IDs**.
- Besides, it also shows **Select option**, **Dev Status** and the **Profile image** of the user who creates the **Version**.

![](/img/how-tos/how-to-use-version-page/version-represent.png)

3. Click on the **Select** button of the version card to select any version card.

![](/img/how-tos/how-to-use-version-page/select-version.png)

4. After selecting any specific version card, its background outline will be **Red** since it will show zero number of **Tasks**, **Bugs**, **Test cases** and **Run IDs**.

![](/img/how-tos/how-to-use-version-page/red-outline.png)

5. Click on the **Delete** button for deleting any version card which contains no **Tasks**, **Bugs**, **Test Cases** and **Run IDs**.

![](/img/how-tos/how-to-use-version-page/delete-version.png)

:::note

Only those version cards can be deleted which will contain zero number of **Test cases**, **Tasks**, **Bugs** and **Run IDs**.

:::

6. Click on the **Add New Version** button to create a new version.

7. Next click on the **ADD** button to create.

![](/img/how-tos/how-to-use-version-page/add-version.png)

8. If **Dev Version** is selected then the version card will show the **Dev Status** symbol on the lower right side.

![](/img/how-tos/how-to-use-version-page/dev-version.png)

![](/img/how-tos/how-to-use-version-page/dev-status.png)

9. Click on the **Add Filter** button for adding a filter.

![](/img/how-tos/how-to-use-version-page/filter-version.png)

10. When a **Filter** is applied, it will show items based on that filter.

![](/img/how-tos/how-to-use-version-page/filter-base.png)

11. Click on the **Search** button to search for a specific version. However, versions can also be searched by date range by clicking on the **Filter Date Range** button.

![](/img/how-tos/how-to-use-version-page/version-range.png)