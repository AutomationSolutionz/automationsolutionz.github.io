---
id: how-to-create-schedule
title: How to create Schedule
---

## Description

### Importance of Scheduler in the context of test cases and presets

In the context of test cases and presets, a **Scheduler** plays a crucial role in streamlining and automating test execution. This automation ensures that test cases are executed at specific times or under particular conditions, reducing manual effort and the risk of human error. Additionally, scheduling enables testing teams to perform tests at optimal times. It also helps maintain a consistent and organized testing workflow, enhancing efficiency and allowing for the seamless integration of tests into the development pipeline.  
Overall, a **Scheduler** in the context of test case presets enhances testing efficiency, reliability, and integration within the software development lifecycle.

## Steps

1. From the **Menu bar**, go to the **Testing** then **Scheduler** option.

![](/img/how-tos/how-to-create-schedule/scheduler-option.png)

2. Go to the **Schedule List** page.
3. Click on the **Create New Schedular** button.
   > The *Create New Scheduler* button is used to set up and configure a new *Schedule* for running test cases at specified intervals or times in software testing.

![](/img/how-tos/how-to-create-schedule/new-scheduler.png)

4. Go to the **Create Schedule** page.
5. Fill up the following informations of **Schedule Details** tab.  
   * Scheduler Name  
   * Select Preset  
   * Select Schedule Type.  

   > **Scheduler Name**: The *Scheduler Name* is necessary to uniquely identify and manage different different schedules for running test cses.  
   > **Select Preset**: Selecting a *Preset* is necessary to specify the predefined configurations and parameters for running test cases.  
   > **Select Schedule Type**: Selecting the *Schedule Type* is necessary to define how often and when the test cases should be executed. 
      - **Weekly**: Running test cases *Weekly* in the scheduler ensures consistent and periodic validation of software quality overtime in software testing.  
      - **Every X Hours**: Running test cases *Every X Hours* in the scheduler allows for frequent and automated testing, ensuring that issues are quickly identified and addressed in software testing.  
      - **Every X Minutes**: Running test cases at re regular intervals, such as every *Every X Minutes*, help ensures continuous monitoring and early detection of issues in the software, contributing to its stability.  
      - **Once**: Running test cases just *Once* can be necessary for tasks like immediate ad-hoc testing or single-run checks in the software development process.

![](/img/how-tos/how-to-create-schedule/week-schedule.png)

:::note

- If the **Schedule Type** is set to **Weekly**, the test cases will run every week. 

![](/img/how-tos/how-to-create-schedule/weekly-schedule.png)

- If the **Schedule Type** is set to **Every X Hours**, the test cases will run every X hours and for this it is necessary to set the required hour.  

![](/img/how-tos/how-to-create-schedule/hour-schedule.png)

- If the **Schedule Type** is set to **Every X Minutes**, the test cases will run every X minutes and for this it is necessary to set the required minute.

![](/img/how-tos/how-to-create-schedule/minute-schedule.png)

- If the **Schedule Type** is set to **Once**, the test cases will run just once.

![](/img/how-tos/how-to-create-schedule/once-schedule.png)

:::

6. After filling up the required informations of the **Schedule Details** tab, it will show the required **Details**.

![](/img/how-tos/how-to-create-schedule/schedule-details.png)

7. Click on the **SAVE SCHEDULE** button.

![](/img/how-tos/how-to-create-schedule/schedule-save.png)
