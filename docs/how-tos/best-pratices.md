---
id: best-practices
title: Best practices
---

## Test Cases

### Title

1. Use a descriptive title that explains the purpose of the test case.

2. The title should indicate what is being validated in the test case.

3. The title should be no more than 10 words.

4. If there is a repeating word in many test cases' titles, chances are - you
   can create a folder/feature and organize similar tests under that
   folder/feature.

### Steps

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

### Actions

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
