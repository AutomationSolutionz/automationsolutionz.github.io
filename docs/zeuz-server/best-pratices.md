---
id: best-practices
title: Best Practices
sidebar_position: 1
---

## Introduction to ZeuZ

While manual testing remains crucial in the software life cycle, **Test Automation** is gaining prominence due to the industry's shift to agile development. The challenges of delivering complex software continuously are exacerbated by evolving business requirements, shorter deployment cycles, and budget constraints. With 50% of software development efforts spent on bug fixing, test automation becomes essential for improving release cycles and minimizing risks. However, achieving a successful return on investment requires navigating hidden pitfalls. This document outlines best practices for QA organization and how **ZeuZ** can assist in reaching these goals.

**ZeuZ** offers an integrated approach to test planning, estimation, reporting, and various QA best practices, streamlining your focus on actual work. As a comprehensive cloud-based software testing framework, **ZeuZ** covers software requirements, defect tracking, task management, and test planning.  
At **Automation Solutionz**, we believe in empowering testers, providing a platform that encourages imagination and creativity without dictating thought processes. For those seeking efficiency, **ZeuZ** is designed for a quick start in automation tasks, ensuring proper processes are in place for the success of your automation projects.

## Test Cases

### Test Case Creation

Designing **Test Cases** is one of the most crucial parts of test automation. Instead of updating the test cases, users can utilize the server or build name in this option. In **ZeuZ**, this feature is available under the `Testing > Run Tests` menu.

### Test Case Title

1. Use a descriptive title that explains the purpose of the test case.

2. The title should indicate what is being validated in the test case.

3. The title should be no more than 10 words.

4. If there is a repeating word in many test cases' titles, chances are - you
   can create a folder/feature and organize similar tests under that
   folder/feature.

### Test Steps

1. When creating a new step, always start with a global step. NEVER start with a
   local step.

2. Try to ensure whatever step you're creating is as modular as possible so that
   it can be reused from other test cases.

3. If your step depends on some test case specific data/variables, create a
   local step at the top named "Local data" and put your test case specific data
   in there and read that data from your global steps.

4. Ensure that the duration for every step is approximately correct (it's better
   to overestimate than underestimate in this case). While deploying, turn on
   "Step Timeout" - this will ensure that your tests always terminate if it
   overshoots the specified duration.

### Step Actions

1. Put a descriptive name to almost every action. Your goal is to ensure that
   someone non-technical can look at the actions and understand the flow of a
   step.

2. For any repeatable usage of action - try to use a loop.

3. If you need to fill out a form containing multiple input fields and every
   input field contains similar attribute specifications (ex: `<input
   id="first_name">`, `<input id="last_name">`, etc.) - you can put the
   ids/attributes in a list and their values in another list (or use a
   dictionary) and loop over the list to fill out the form.

### Data

1. Never hard code data in your test cases.

2. Data can be read from multiple sources
    1. Attachments
    2. Runtime parameters
    3. External data sources - APIs/Databases/etc.

3. Attach your data to the tests in one of the three ways
    1. Test case - if the data is local to a specific test case, attach the data
    to the test case.
    2. Steps - if the data is accessed via a specific step and the step is
    utilized across many test cases, attach the data to the step.
    3. Global - if the data is accessed from many tests, upload to the global
   attachment and use the dedicated global attachment actions.

4. Data store
    1. If the data is tabular or you already have an excel/csv file, utilize the
    data store built into ZeuZ.  There are dedicated actions for working with
    data store.


## Test Management
1. Folder
   1. Create a "Regression" folder at the top.
   2. Put different platform names and organize test cases accordingly. Example structure:
        - Regression
            - Mobile
                - iOS
                - Android
            - Web
            - Desktop
            - API

2. Feature
    - Identify different modules/sub-modules of your applications and create features or sub-features based on them.
    - If there is a test case that can belong to multiple features, bring that test case under a common parent feature and put it in a "Common" folder.

3. Test Set
    - Create a "Regression" set. Use the folder defined in the previous section to filter and select easily.
    - Create a "Nightly" run set containing only the critical test cases. This set should be as small as possible.

4. Milestone
    - Milestone is synonymous to "Sprint" or any other checkpointing concept.
    - Create a milestone for every checkpoint in your team.
    - Milestones are a mandatory step for creating rich and detailed reports.

5. Version
    - Versions are available to track versions of the application under test.
    - With the version information, it's possible to get rich reports.
    - Step performance is automatically tracked for both versions and milestones.

6. Batch Update

     Batch Update involves simultaneously modifying multiple test cases or related elements, offering efficiency and consistency in test management. This approach is beneficial for tasks like adjusting test data, modifying test steps, or updating execution parameters across a group of test cases. By applying changes collectively, batch updates save time, reduce the risk of errors, and maintain synchronization within the testing process. This feature is available under the `Testing > Batch Update` menu.


## Deployment & Setup

1. Email
    - Setup the email configuration from day 1.
    - We can provide our own credentials.
    - Or you can utilize your own SMTP email server credentials for this.

2. Messaging platforms
    - Discord/Slack/Teams/etc.
    - Configure a dedicated channel in your messaging platform of choice and get its webhook.
    - Use the webhook to set up the integration with ZeuZ.

3. Scheduler
    - Set up a nightly run scheduler from day 1.
    - Purpose is to ensure that the team starts getting feedback and positive outcome of the tests from the get go.

4. CI/CD
    - Create presets with proper assignees, testers and email recipients.
    - Copy the webhook for the presets and paste it in your CI/CD pipeline file.

## Reporting

1. Reporting involves documenting and communicating the outcomes and progress of testing activities. It is crucial for quality assurance, providing stakeholders with clear insights into the status of a process.  

2. Reports include execution results, pass/fail statuses, identified issues, and coverage metrics. This information aids decision-making on the readiness of a product or process.

3. Reporting highlights areas needing attention and contributes to assessing overall quality.

### Type of Reports

1. Test Execution Report

   * It provides a comprehensive summary of the outcomes of executed test cases, including pass/fail status and  details of any encountered issues.

2. Matrix Report 

   * It is a visual representation of test execution results, often illustrating the correlation between test cases and various testing criteria such as platforms, configurations, or test types.

3. Performance Report 

   * It provide insights into the efficiency and responsiveness of a system by presenting metrics such as response times, throughput, and resource utilization gathered during performance testing to assess and optimize the software's overall performance.

4. Automatability Report 

   * It evaluates and communicates the feasibility and suitability of automating specific test cases or scenarios, considering factors such as stability, repeatability, and return on investment for test automation.  

5. Step Report 

   * It provides a detailed account of individual test steps, documenting the execution sequence, outcomes, and any deviations from expected behavior during the testing process.

## Access Control

   * ZeuZ has policy based access control system. You should define policies for
     each role in your teams - testers, devs, managers, etc.

   * You can manage policies from `Admin > Group Policy` menu in
     ZeuZ.

   * Once defined, set policies for users from `Admin > Users > List`.

