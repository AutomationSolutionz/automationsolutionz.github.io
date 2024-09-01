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

![](/img/how-tos/how-to-use-history-page/hover-donut-chart.png)

### 2. Cards

The **Cards** on the History Page provide detailed information about test cases, categorized by their status.

![](/img/how-tos/how-to-use-history-page/chart.png)

#### Color Representation:

- **Yellow**: Contains failed or blocked test cases.
- **Green**: Successfully deployed.
- **Blue**: Test case skipped.
- **Hot Pink**: Deployment failed or cancelled.  


#### Interaction:

- **Click**: Clicking on the card will expand or collapse it.

![](/img/how-tos/how-to-use-history-page/click-card.png)

### 3. Expanded Card

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

### 4. Others

- Hovering over the circles beside the search icon will show the **Run Queue** information popup.

 ![](/img/how-tos/how-to-use-history-page/donut-chart.png)

- Clicking on the specific test case of the test set shows **Mileston**, **Run ID** and **Version** of that test case.

 ![](/img/how-tos/how-to-use-history-page/version-chart.png)
