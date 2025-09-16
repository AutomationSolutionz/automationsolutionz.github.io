---
id: history-page
title: History 
---

## Description

### Understanding the History Page

The **History Page** in ZeuZ provides an intuitive interface for viewing the status and results of **test cases/sets** using visual tools like **Donut Charts** and **Cards**. This page lets users grasp their tests' outcomes quickly, facilitating informed decision-making and efficient communication among team members.

### Importance of the History Page in Software Testing

The **History Page** help testers and stakeholders stay updated on the status of test cases, identify issues promptly, and collaborate effectively. The visual representation of test results through Donut Charts and detailed information via Cards enhances the overall testing process by making it easier to track progress and address any problems.

## Steps

### 1. From the **Menu bar**, go to **Testing** and then select the **History** option.

![](/img/how-tos/how-to-use-history-page/testing-history.png)

### 2. Donut Charts
Go to the **History** page, where **Donut Charts** and the **Searched by** option are displayed.

The **Donut Charts** on the History Page visually represent the status of test cases using different colors to indicate various outcomes such as, **Pass**, **Fail**, **Block**, **Skip**, **Submit** and **In Progress**.

![](/img/how-tos/how-to-use-history-page/donut-chart.png)

#### Color Representation:

- **Pass**: Green
- **Fail**: Hot Pink
- **Block**: Yellow
- **Skip**: Blue
- **Submit**: Gray
- **In Progress**: Purple


#### Interaction:

- **Hover**: Hovering over the total chart below the navbar shows a version/milestone comparison popup.

### 2. Run Queue

It displays the number of test cases that are in-queued, in-progress and also the permitted nodes, represented by a circular icon. In this case, the total **Permitted nodes** is 5, **In progress** is 1 and **Queued** is 15.

![](/img/how-tos/how-to-use-history-page/run-queue.png)

#### Color Representation

- **Purple**: It displays the test cases that in-progress.
- **Gray**: It displays the test cases that are in the queue.

By clicking the **Open search bar** button, the test case history can be searched, as well as filtered by "Start date" and "End date".

![](/img/how-tos/how-to-use-history-page/search-history.png)

If there is no need to search the test case history using the search bar, click the **Close Search Bar** button.

![](/img/how-tos/how-to-use-history-page/close-search.png)

### 3. Cards

The **Cards** on the History Page provide detailed information about test cases, categorized by their latest **run ID**.

![](/img/how-tos/how-to-use-history-page/chart.png)

#### Card Color Representation:

- **Yellow**: Contains blocked test cases.
- **Green**: Successfully deployed or passed test cases.
- **Blue**: Skipped test cases.
- **Hot Pink**: Deployment failed or cancelled.
- **Grey**: Submitted test cases.
- **Navy Blue**: A navy blue border appears when a deployed test set has blocked or failed test cases.  


#### Interaction:

- **Click**: Clicking on the card will expand or collapse it.

![](/img/how-tos/how-to-use-history-page/click-card.png)

### 4. Expanded Card

When a card is expanded, the following additional details and actions are displayed.
- **Test Case Name**
- **Number of test cases (Passed, Failed, Blocked, Skipped, Submitted) through Donut Chart**
- **Machine**
- **Milestone**
- **Version**
- **Tester**
- **Run ID**
- **Duration**
- **Deployment time**
- **Details**
- **Runtime Parameters**
- **Information Index**
- **Test Cases**

However, there is additional information under the "Details" option, such as:
- **Mobile**
- **Start date**
- **IP**

![](/img/how-tos/how-to-use-history-page/click-chart.png)

At the bottom of the card, there are two additional options:
- **Browser (Google Chrome, Microsoft Edge Chromium etc.)**
- **Automation/Manual**

![](/img/how-tos/how-to-use-history-page/two-options.png)

#### Interaction:

- **Scroll**: The **Test Case (TC)** section is scrollable.
- **Click**: Clicking on the charts will show the corresponding test cases in the **TC**'s section.


#### Test Case ID Representation:

- **Passed Test Case ID**: Green
- **Blocked Test Case ID**: Yellow
- **Failed Test Case ID**: Hot Pink
- **Skipped Test Case ID**: Blue
- **Submitted Test Case ID**: Grey

#### Additional Actions:

- **Click on Test Case ID**: Clicking on the specific test case ID in the **TC**'s section will show the following information:
  - **Version**
  - **Milestone**
  - **Run ID**

![](/img/how-tos/how-to-use-history-page/card-version.png)

- **Click on Test Case Title**: Clicking on a test case title in the **TC**'s section will show its execution log.

### 6. Others

- Clicking the purple button displays the following buttons:
  - Go to delete log and run history page.
  - Close view.
  - Donut charts
  - Select how many cards you want to see.
  - Select how you want to see the page (Card/Table).

![](/img/how-tos/how-to-use-history-page/purple-button.png)

![](/img/how-tos/how-to-use-history-page/purple-info.png)

#### We can also switch the page from **Card** view to **Table** view.

![](/img/how-tos/how-to-use-history-page/table-view.png)

---


