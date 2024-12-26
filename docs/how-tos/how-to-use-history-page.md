---
id: how-to-use-history-page
title: How to use the History page
---

## Description

### Understanding the History Page

The **History Page** in ZeuZ provides an intuitive interface for viewing the status and results of **test cases/sets** using visual tools like **Donut Charts** and **Cards**. This page lets users grasp their tests' outcomes quickly, facilitating informed decision-making and efficient communication among team members.

### Importance of the History Page in Software Testing

The **History Page** help testers and stakeholders stay updated on the status of test cases, identify issues promptly, and collaborate effectively. The visual representation of test results through Donut Charts and detailed information via Cards enhances the overall testing process by making it easier to track progress and address any problems.

## Steps

### 1. Donut Charts ###

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

- **Hover**: Hovering over the total chart below the navbar shows a version comparison popup.

### 2. Run Queue

It displays the number of test cases that are in-queued, in-progress and also the permitted nodes, represented by a circular icon. In this case, the total permitted nodes are 5.

![](/img/how-tos/how-to-use-history-page/run-queue.png)

#### Color Representation

- **Purple**: It displays the test cases that in-progress.
- **Gray**: It displays the test cases that are in the queue.

### 3. Version Comparison

1. From the menu bar, go to **Testing** menu and click on the **Set** menu.

![](/img/how-tos/how-to-use-history-page/version-testing.png)

2. Click on the **Settings** button.

![](/img/how-tos/how-to-use-history-page/set-settings.png)

3. Go to **Set Filter Settings** and fill up the following information:

- Build From (Where we can select either **Milestone** or **Version**).
- Compare With.
- Github Repository.
- Lastly, click on the **Save Filter** button.

![](/img/how-tos/how-to-use-history-page/set-filter.png)

After creating a **Version Comparison**, the selected **Milestone** or **Version** will display test case results of a set under the chosen milestone or version. However, to view the test case results of a set from a different **Milestone** or **Version**, the desired milestone or version must be selected again from the **Set** page.

![](/img/how-tos/how-to-use-history-page/version-result.png)

:::note

   For a new user, if the history page displays a blank **Version Comparison**, the user must create either a milestone or a version before proceeding with the version comparison. Then the version comparison will show on the **History** page.

:::

### 4. Cards

The **Cards** on the History Page provide detailed information about test cases, categorized by their status.

![](/img/how-tos/how-to-use-history-page/chart.png)

#### Card Color Representation:

- **Yellow**: Contains failed or blocked test cases.
- **Green**: Successfully deployed.
- **Blue**: Test case skipped.
- **Hot Pink**: Deployment failed or cancelled.
- **Grey**: Shows the submitted test cases.
- **Navy Blue**: A navy blue border appears when a deployed test set has blocked or failed test cases.  


#### Interaction:

- **Click**: Clicking on the card will expand or collapse it.

![](/img/how-tos/how-to-use-history-page/click-card.png)

### 5. Expanded Card

When a card is expanded, additional details and actions become available.

![](/img/how-tos/how-to-use-history-page/click-chart.png)

#### Interaction:

- **Scroll**: The **Runtime Parameters** and **TC**'s section is scrollable.
- **Click**: Clicking on the charts will show the corresponding test cases in the **TC**'s section.


#### Test Case ID Representation:

- **Passed Test Case ID**: Green
- **Blocked Test Case ID**: Yellow
- **Failed Test Case ID**: Hot Pink

#### Additional Actions:

- **Click on Test Case ID**: Clicking on a test case ID in the **TC**'s section will show its run history popup.
- **Click on Test Case Title**: Clicking on a test case title in the **TC**'s section will show its execution log.

### 6. Others

- Clicking the purple button displays the following buttons:
  - Go delete log and run history page.
  - Close view.
  - Select how many cards you want to see.
  - Select how you want to see the page (Card/Table).

![](/img/how-tos/how-to-use-history-page/purple-button.png)

![](/img/how-tos/how-to-use-history-page/purple-info.png)

#### We can also switch the page from **Card** view to **Table** view.

![](/img/how-tos/how-to-use-history-page/table-view.png)

- Clicking on the specific test case of the test set shows **Milestones**, **Run ID** and **Version** of that test case.

 ![](/img/how-tos/how-to-use-history-page/version-chart.png)


