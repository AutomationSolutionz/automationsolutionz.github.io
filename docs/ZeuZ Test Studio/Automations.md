---
id: automations
title: Automations
---

import MetaCard from '@site/src/components/MetaCard/';

The **Automations** section in Test Studio allows users to schedule and trigger test runs automatically using schedules or webhooks. Users can configure recurring test runs, trigger test sets from CI pipelines, and select a test set or specific test cases to execute.

<MetaCard
availableFrom="202605"
difficulty="🟢 Easy"
lastUpdated="25 Oct, 2026"
/>

### Why it maters / Use Cases:
- **Schedule Recurring Test Runs**: Automate regression testing by scheduling test runs hourly or nightly without manually opening the Runs page.
- **Integrate with CI/CD Pipelines**: Trigger test runs from CI pipelines using webhooks, allowing tests to run automatically as part of the development workflow.
- **Reduce Manual Effort**: Eliminate the need to start test runs manually, saving time and improving testing efficiency.
- **Reuse Test Set Targeting**: Select an existing test set or specific test cases to execute, making it easier to manage and organize automated test runs.
- **Maintain Consistent Testing**: Run the same test sets or selected test cases regularly to identify potential issues and verify application functionality.
- **Support Continuous Regression Testing**: Automatically execute tests at scheduled intervals to detect regressions and help maintain application quality.

## Prerequisites
- **Available Test Sets or Test Cases**: Ensure that the required test set or individual test cases are available for automation.
- **Test Configuration**: Verify that the selected test sets or test cases are properly configured and ready for execution.
- **Schedule Configuration**: Determine the required schedule, such as hourly or nightly execution, if the automation will run on a recurring basis.
- **Webhook Configuration**: For CI/CD integration, ensure that the webhook can be configured and the required pipeline is available to trigger the automation.

## Features
- Users can click **Automations** in the left-side panel to navigate to the "Automations" page.

![](/img/zeuz-test-studio/automations-page.png)

- After navigating to the "Automations" page, users can access the following options.

### Top Section of the Automations Page
- The **Automations** page provides features for scheduling and triggering test runs automatically.
  - **New Automation**: Allows users to create a new automation for running selected test sets or test cases.
  - **Schedule Regression Sets**: Enables users to schedule test runs hourly or nightly without manually opening the Runs page.
  - **Trigger from CI with a Webhook**: Allows users to trigger a test set from a CI pipeline using a webhook and a per-automation secret.
  - **All Runs**: Provides a link to view test runs.
  - **Search**: Allows users to search for automations.

![](/img/zeuz-test-studio/top-automation.png)

### Two Tabs of the Automations Page
- The Automations page has two main tabs: **Mine** and **Team**.
- The **Mine** tab displays only the automations created by the current user.

![](/img/zeuz-test-studio/mine-tab.png)

- The **Team** tab displays the automations created by all team members.

![](/img/zeuz-test-studio/team-tab.png)

- The Automations page displays a list of automations, including each automation’s Name, Author, Created time, and Status. Each automation row includes a three-dot menu called Action for Test Automation, which provides the following actions:   
  - **Open**: Opens the selected automation to view or manage its configuration.
  - **Active**: It indicates that the automation is enabled and can be used or executed, depending on the system's behavior.
  - **Inactivate**: It means disabling the automation so that it cannot be used or executed.
  - **Delete**: Deletes the selected automation.

![](/img/zeuz-test-studio/automation-options.png)

![](/img/zeuz-test-studio/active-status.png)

### Create a New Automation
- To create a new automation, click the **New Automation** option on the Automations page.
- After clicking the **New Automation** option, the user is redirected to a new automation page where the automation is titled as **Untitled** by default, along with other related options.

![](/img/zeuz-test-studio/new-automation.png)

![](/img/zeuz-test-studio/untitled-automation.png)

### Configure a New Automation
- It provides several settings that allow users to configure how and where an automation runs.
 1. **Assigned runner**: The **Assigned runner** specifies the machine on which the automation will run. Users can select the machine they want to use for executing the automation.

![](/img/zeuz-test-studio/run-assign.png)

  2. **When it runs**: The **When it runs** section allows users to configure the triggers that determine when an automation starts automatically.
     - **Webhook**: Runs the automation whenever an external service sends a request to the configured webhook URL. The **Never received** label indicates that no webhook request has been received yet. Users can click **Send test delivery** to test the webhook.
     - **Schedule**: Allows users to configure the automation to run at a specific time or interval.
     - **Add trigger**: Allows users to add another trigger to the automation. The available scheduling options are:  
       - **Every X minutes**: Runs the automation at the specified minute interval.
       - **Hourly**: Runs the automation every hour.
       - **Daily**: Runs the automation daily.
       - **Weekly**: Runs the automation weekly.
       - **Custom (cron)**: Allows users to define a custom schedule using cron expressions.

![](/img/zeuz-test-studio/when-run.png)

  3. **What it does**: The **What it does** section allows users to define the actions the automation should perform. Users can configure the automation in three ways:  
     - **Agent instruction**: Provides instructions to the agent describing the tasks it should perform.
     - **Test set**: Allows users to configure the automation to work with a test set.
     - **Test cases**: Allows users to configure the automation to work with specific test cases.

![](/img/zeuz-test-studio/tell-agent.png)
 
  4. **Model selection**: Users can select the AI model that will execute the automation. The available models depend on the subscription associated with the selected machine.

![](/img/zeuz-test-studio/model-collection.png)

  5. **Thinking level**: The **Thinking level** setting is optional and allows users to control the level of reasoning used by the selected model. The available options are **Default**, **Off**, **Low**, **Minimal**, **Medium**, **High**, and **Extra High**.

![](/img/zeuz-test-studio/thinking-level.png)

  6. **Automation status**: Users can change the automation status from **Inactive** to **Active** to enable it. An active automation is enabled for use or execution, depending on its configuration.

![](/img/zeuz-test-studio/test-active.png)

  7. **Automation title**: By default, a new automation is titled **Untitled**. Users can replace this default title with a meaningful name to identify the automation easily.  
  Each automation must have a unique title. If a user attempts to create an automation with a title that already exists, the test studio displays the following notification:   
  “**An automation with this name already exists**”  
  In this case, the user must rename the automation before saving it.

![](/img/zeuz-test-studio/untitled-title.png)

![](/img/zeuz-test-studio/auto-notification.png)

  8. **Save the Automation**: After configuring the required settings, users can click **Save** to save the automation.

![](/img/zeuz-test-studio/save-automation.png)

### Configure and Trigger Automation Through GitHub
- This allows users to configure the automation in GitHub and trigger it directly from there.
- Follow these steps to configure a webhook in GitHub and trigger an automation when a new issue is created.
1. Configure the Webhook in GitHub
  - Open the desired GitHub repository.
  - Navigate to **Settings**, then select **Webhooks**.

![](/img/zeuz-test-studio/desired-repository.png)

![](/img/zeuz-test-studio/settings-testing.png)

![](/img/zeuz-test-studio/webhook-option.png)

   - Click **Add webhook** and confirm access if prompted.

![](/img/zeuz-test-studio/add-webhook.png)

![](/img/zeuz-test-studio/confirm-access.png)

   - Return to the Test Studio and click **Copy Webhook URL** to copy the webhook URL. Paste this URL into the **Payload URL** field in GitHub.

![](/img/zeuz-test-studio/copy-webhook.png)

![](/img/zeuz-test-studio/payload-url.png)

    - Set the **Content type** to `application/json`.

![](/img/zeuz-test-studio/content-json.png)

    - In Test Studio, click **Copy signing secret** and copy the secret. Paste it into the **Secret** field in GitHub.

![](/img/zeuz-test-studio/signing-secret.png)

![](/img/zeuz-test-studio/secret-code.png)

    - Under **Which events would you like to trigger this webhook**, select **Let me select individual** events.
    - Select **Issues** so that the webhook is triggered by issue-related events.

![](/img/zeuz-test-studio/let-me.png)

![](/img/zeuz-test-studio/issues-select.png)

    - Click **Add webhook** to save the configuration.

![](/img/zeuz-test-studio/webhook-issue.png)

2. Trigger the Automation by Creating a GitHub Issue
- Navigate to the **Issues** section of the GitHub repository.
- Click **New issue** and provide the required details.
- Click **Create** to create the issue.

![](/img/zeuz-test-studio/create-issue.png)

![](/img/zeuz-test-studio/issue-new.png)

![](/img/zeuz-test-studio/issue-details.png)

- Once the issue is created, GitHub sends a webhook event to the Test Studio, triggering the configured automation.

3. Check the Automation Run History
- Navigate to the **Run History** section in Test Studio to monitor the automation's execution status.
- If the webhook-triggered run displays a **Queued** status, it means the run is waiting to execute. This may happen when another automation run is already in progress. In this case, the queued run starts after the currently running automation finishes, as only one run can execute at a time.

![](/img/zeuz-test-studio/history-automation.png)

![](/img/zeuz-test-studio/queued-status.png)

4. Understand the Run History Columns
- The **Run History** section displays five columns that provide information about each automation run:  
  - **Trigger type**: Indicates what triggered the automation. For example, `Scheduled.minutes` indicates that the automation was triggered by a scheduler configured to run at minute-based intervals. Other trigger types may include hourly, weekly, webhook, and manual triggers.
  - **Triggered**: Displays the date and time when the automation was triggered.
  - **Status**: Displays the current execution status, such as **Queued**, **Running**, **Skipped**, or other available statuses.
  - **Details**: Provides information about the agent's recent activities and the automation's execution process.
  - **Report**: Displays the execution report after the automation finishes.

![](/img/zeuz-test-studio/report-column.png)

5. Run an Automation Manually
- Users can also execute an automation immediately by clicking the **Run Now** button.
- This feature is useful for verifying whether the agent follows the configured instructions and produces the expected output.
- When an automation is started using **Run Now**, its trigger type appears as **Manual**, indicating that the automation was triggered manually rather than by a webhook or scheduler.

![](/img/zeuz-test-studio/run-manual.png)

- At the top of the **Run History** tab, the activity filter is open and displays three options:  
  - **Hide skipped**: **Hide skipped** hides runs with a **Skipped** status from the Run History list.
  - **All activity**: It shows all runs, including skipped runs.
  - **Skipped only**: It shows only skipped runs.

![](/img/zeuz-test-studio/skipped-status.png)

## FAQs / Troubleshooting

<details>
<summary>Why does a scheduled automation run at an unexpected time?</summary>

Review the schedule’s time, interval, and timezone. For a custom cron schedule, verify that the expression matches the intended timing.

</details>

<details>
<summary>Why is my automation run showing a Queued status?</summary>

The run is waiting to execute. Check whether another run is already using the assigned runner, then review Run History for progress.

</details>

<details>
<summary>Why is a webhook not triggering the automation?</summary>

Verify the webhook URL, signing secret, and event configuration in the external service. Check its delivery details and use Send test delivery to test the setup.

</details>

<details>
<summary>What does Hide skipped mean in Run History?</summary>

It hides entries with a Skipped status from the list. It does not delete those entries or change the automation’s behavior.

</details>

<details>
<summary>Where can I investigate a failed automation run?</summary>

Open Run History, locate the run, and review its Status, Details, and available Report to identify the cause.

</details>