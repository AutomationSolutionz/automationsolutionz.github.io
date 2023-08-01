---
id: how-to-setup-test-scheduler
title: How to setup Test Scheduler
---

## Description

### What is a Test Schedular in software testing?  

A **Test Schedular** is a tool used in software testing to schedule and run tests at predetermined times and frequency. It helps manage large and complex tests by automating the process of scheduling and checking complex processes from one streamlined, intuitive interface.

### Why is it necessary to setup Test Schedular in software testing?

Setting up a **Test Schedular** in software testing is necessary for automation, efficiency, comprehensive test coverage, regression testing, reporting and analysis, CI/CD integration, and global testing. It automates test execution, saving time and improving productivity.  

Scheduled tests ensure that all relevant test cases are consistently executed, increasing the chances of detecting defects and regressions.  

**Test Schedular** reports provide insights into software stability and performance. Integration with CI/CD pipelines ensure thorough testing before release. Additionally, scheduling tests based on time zone enables global coverage.  

Overall, a **Test Schedular** enhances the testing process by optimizing resources, providing valuable data, and ensuring high-quality software.


## Steps

1. From the **Menu bar**, go to the **Testing** then **Run Tests** option.

![](/img/how-tos/how-to-setup-test-scheduler/run-tests.png)

2. Go to the **Run Tests/Deploy** page.
   > The *Run Tests/Deploy* page refers to a dedicated interface or platform where test cases are executed or deployed for the purpose of evaluating software functionality and performance.

![](/img/how-tos/how-to-setup-test-scheduler/run-deploy.png)

3. Click on the **More** option.
   > The *More* option typically refers to additional or extended functionalities, options, or settings that are not immediately visible but can be accessed to access advanced features or information.

   > Following More options are:
     * **Run Parameter**
     * **External Services**
     * **Schedule**
     * **Objectives**.

![](/img/how-tos/how-to-setup-test-scheduler/run-more.png)

4. Click on the **Schedule** option.
   > The function of the *Schedule* option is to plan and allocate time effectively for executing testing activities within the project timeline.

![](/img/how-tos/how-to-setup-test-scheduler/schedule-option.png)

5. Go to the **Schedule Run** page.
   > The *Schedule Run* page refers to a user interface where testers can set specific time and date for the automated or manual execution of test cases and test suites.

   > *Schedule Run* page has two type of tabs:
     * **Scheduled Runs**
     * **Environments**.

![](/img/how-tos/how-to-setup-test-scheduler/schedule-run.png)

6. Click on the **Create Schedule Run** button.
   > The function of *Create Schedule Run* button is to initiate the process of setting up a scheduled test run, allowing testers to specify the execution time and parameters for automated or manual tests.

![](/img/how-tos/how-to-setup-test-scheduler/create-schedule.png)

7. Enter the **Schedule Run Title** of the **Schedule Runs** tab.
8. Click and select one **Set** (**Only one set can be selected**).
9. Select the **Version**.
   > Entering the title of *Schedule Run* is necessary for organizing and tracking planned test runs efficiently.

   > In the *Test Scheduler* of software testing, only one *Set* can be selected to ensure a clear and focused execution plan for better test management and tracking.

   > Selecting the *Version* allows for targeted testing against specific software versions, ensuring version-specific validation and tracking of test results.

![](/img/how-tos/how-to-setup-test-scheduler/schedule-set.png)


10. Select the **Platform** (**Browser**, **Mobile**).

![](/img/how-tos/how-to-setup-test-scheduler/schedule-platform.png)

11. Fill up the informations of **Schedule Runs** tab like:
    * Assigned testers,
    * Send Emails,
    * Run Objective,
    * Milestone,
    * Partial/exact node name,
    * Run Frequency.

12. Multiple of **Assigned Testers** can be selected.
13. Multiple of **Testers** can be selected to whom **Emails** will be sent.
    > Selecting multiple of *Assigned Testers* ensures effective distribution of testing responsibilities, optimizing test coverage, and facilitating collaborative testing efforts.

    > Selection of multiple *Testers* to whom *Emails* will be sent ensures that all relevant team members are informed of the test schedule, updates, and results, promoting effective communication and collaboration.

![](/img/how-tos/how-to-setup-test-scheduler/schedule-info.png)

14. If the time is set in **Minutes** or in **Hours** then the test set will run after every specified minutes or hours.

![](/img/how-tos/how-to-setup-test-scheduler/minute-frquency.png)

15. If the **Day** (Sun, Mon, Tue, Wed, Thur, Fri, Sat) is set and the time is specified for that day then the test set will run at the the time which will be specified for that day.

![](/img/how-tos/how-to-setup-test-scheduler/day-frequency.png)

16. Click on the **Save Schedule** button.
    > The *Save Schedule* button is used to save the configured test schedule with all the selected settings and options for future reference and execution.

![](/img/how-tos/how-to-setup-test-scheduler/save-schedule.png)
