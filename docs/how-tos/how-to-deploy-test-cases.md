---
id: how-to-deploy-test-cases
title: Deploy the Test Cases
---

## Description

### What is Deployment in test cases and why is it necessary?

Deployment of test cases in ZeuZ is the process of assigning selected one or more *Test Cases* or a *Test Set* to a specific environment or exexution where they will be run. This step ensures that the tests are executed under the desired conditions, allowing for effective, controlled, and scalable test execution.

Users also have the ability to configure reporting capabilities such as
who to send email reports to, which platforms
(Slack/Teams/Discord/Mattermost), etc.

:::tip

You can deploy hundreds or even thousands of test cases at a time!

:::

## Steps

1. First, go to the **Run Tests/Deploy** page.
   > The purpose of the *Run Tests/Deploy* page is to execute test cases and deploy the tested application for validation and release.

![](/img/how-tos/how-to-deploy-test-cases/run-deploy.png)

2. Click on the **Search Test Cases** and then the **Search** button to select a test case. Alternatively, test cases can also be searched using **Filter by Date** option.
   > The function of *Search Test Cases* and the *Search* button is to quickly find specific test cases based on specified criteria or keywords, facilitating test case management and execution. Also, *Filter by Date* function allows users to search for test cases based on specific date criteria.

![](/img/how-tos/how-to-deploy-test-cases/search-button.png)


3. Fill in the information in the **Basic** tab. If needed, also fill in the information in the **Advanced** tab if required. Select a **Preset** if required. 
   > The necessity of filling up the *Information* is to ensure clear and comprehensive documentation of the testing process, enabling accurate replication and effective communication among team members.

 #### Basic tab information
   - **Node**
   - **Testers**
   - **Emails**
   - **Version**
   - **Milestone**
   - **Objective**
   - **Browser (Google Chrome, Firefox, Microsoft Edge Chromium, Safari, Chrome Headless, Firefox Headless, Edge Chromium Headless, Android Chrome, iOS Safari)**
   - **Mobile (Android, iOS, iOS Simulator)**
   - **External Service**
   - **Runtime parameters**
   
![](/img/how-tos/how-to-deploy-test-cases/basic-run.png)

  #### Advanced tab information
   - **Resolution**
   - **Expected schedule**
   - **Step duration time**
   - **Screenshot**
   - **Rerun on fail**
   - **Upload log**
   - **Email preference**
   - **Loop**

![](/img/how-tos/how-to-deploy-test-cases/advanced-tab.png)

4. Multiple **Nodes**, **Emails**, **Testers** and **External service** can be selected.  
5. Besides, multiple of **Milestone**, **Run Objective**, **Version**, **Browser**, **Mobile** cannot be selected.  
   > Selecting multiple *Nodes* allows test execution across different    machines or environments, improving test coverage and performance.  
   Choosing multiple *Emails* ensures that test execution reports or alerts are sent to all relevant stakeholders.  
   Assigning multiple *Testers* helps in distributing responsibilities and tracking test ownership.  
   Selecting an *External Service* enables integration with third-party tools or systems required during test execution, such as APIs, databases, or CI/CD platforms.

   > Restricting multiple selections for *Milestone*, *Run Objective*, *Browser*, *Mobile*, and *Version* ensures that each test execution is clearly associated with a specific target or condition. This avoids ambiguity, maintains accurate tracking and reporting, and helps in analyzing test results in a precise and organized manner. It ensures that the test run is aligned with a single defined scope or configuration.

![](/img/how-tos/how-to-deploy-test-cases/multiple-information.png)

6. Next, click on the **Run** button, and the **Execution Details** page will appear.
   > The function of *Run* button is to initiate the execution of selected test cases, allowing for the validation and verification of the software's functionality.

![](/img/how-tos/how-to-deploy-test-cases/run-button.png)

![](/img/how-tos/how-to-deploy-test-cases/execution-page.png)

---