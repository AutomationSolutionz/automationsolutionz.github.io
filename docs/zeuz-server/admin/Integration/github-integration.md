---
id: github-integration
title: GitHub Integration
---

Initially, when accessing the **Dashboard**, two sections can be seen:  
- **GitHub Stats**
- **GitHub Activity**.  
However, these sections are not accessible by default. Access must be granted, and only **ZeuZ Admin** have the authority to issue this access.

![](/img/how-tos/github-integration/github-stats.png)

### For GitHub Settings and token generation, click on the link provided below:
https://github.com/settings/tokens

### Steps for generating a Token in GitHub

1. After entering the **Developer Settings**, click on **Personal Access Tokens**, select **Fine-grained tokens**, and then click on **Generate new token** located at the top right of the page. However, if there are no existing tokens, this button will appear in the middle of the page.

![](/img/how-tos/github-integration/generate-token.png)

2. Enter a **Token Name** and **Description**, set an **Expiration Date** (according to preference), and choose the **Repository Aceess** (public repositories, all repositories and only select repositories).

![](/img/how-tos/github-integration/github-info.png)

3. Configure other settings as needed and generate the token.

![](/img/how-tos/github-integration/only-repository.png)

![](/img/how-tos/github-integration/other-info.png)

4. Copy the generated token.

![](/img/how-tos/github-integration/generated-token.png)

### Steps of adding the Token to ZeuZ

1. Navigate to the **Admin** section, go to **Integration**, and under **Integration**, select **GitHub**.

![](/img/how-tos/github-integration/github-integration.png)

2. Go to the ZeuZ **GitHub Integration** page, enter the **GitHub Username**, and paste the **Personal Access Token**.
3. Click on **Authenticate**.

![](/img/how-tos/github-integration/authenticate-github.png)

4. Once authenticated, ZeuZ will display the list of repositories available for integration. Select the repositories that should appear in the **Dashboard** and click **Save Integration**.

![](/img/how-tos/github-integration/save-integration.png)

### Using GitHub Stats and GitHub Activity in the Dashboard

1. The **Dashboard** will display **GitHub Stats** and **GitHub Activity** for the selected repositories.

![](/img/how-tos/github-integration/github-activity.png)

2. By default, the first selected repository is displayed.
3. Multiple repositories can be displayed depending on the selection during integration.
4. A **Start Date** and **End Date** can be applied to filter the displayed data.
5. The displayed information includes the count of **Closed Bugs**, **Tasks**, and **Requirements** within the selected date range, followed by the count **Created Bugs**, **Tasks**, and **Requirements** for the same date range.
6. The number of **Open**, **Merged**, and **Closed** pull requests will be displayed under the **Pull Request** section.

![](/img/how-tos/github-integration/default-repository.png)

7. On the other hand, the table can be filtered by **Pull Requests** or **Issues** within the selected date range:
- Issues can be **Open** or **Closed**.
- Pull Requests can be **Open**, **Merged**, or **Closed**.

8. Users can click on any **Pull Request** or **Issue** to navigate to it in **GitHub**. Pagination is available to view additional data if more entries are available.

![](/img/how-tos/github-integration/github-merge.png)

---