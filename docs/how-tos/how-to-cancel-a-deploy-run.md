---
id: how-to-cancel-a-deploy-run
title: How to cancel a deploy run
---

## Description

### Why is it necessary to cancel a deploy run of test cases in software testing?

In software testing, there are scenarios where it becomes necessary to cancel the deploy run of test cases. This decision is typically driven by various factors that may affect the validity or reliability of testing processes.  

One common reason for cancelling a **Deploy Run** is the discovery of critical defects or issues that render the software unstable or unusable. If such defects are identified during initial testing stages or even during the deploy run itself, it may be more efficient and cost-effective to halt the process and address the problems before proceeding further.  

Another reason for canceling the **Deploy Run** could be the identification of major changes or updates in the software requirements or specifications. If the original testing plan is no longer aligned with the updated requirements, it is essential to reassess the test cases and their relevance, potentially leading to the cancellation of the current **Deploy Run**.  

Ultimately, cancelling the **Deploy Run** of test cases allows organizations to maintain the integrity, and reliability of their testing efforts, ensuring that only accurate and valid results are obtained, and minimizing the risks associated with deploying faulty or incomplete software.

## Steps

1. From the **Menu Bar**, go to the **Testing** then **History** option.

![](/img/how-tos/how-to-cancel-a-deploy-run/history-button.png)

2. Go to the **Results** page.

3. Click on the **Run ID** of the required test case.  
    > *Run ID* refers to a unique identifier assigned to a specific test run, allowing for easy tracking and reference of the executed tests and their associated results.

![](/img/how-tos/how-to-cancel-a-deploy-run/results-history.png)

4. Go to the **Execution Details** page.
5. Click on the **CANCEL RUN** button.  
    > *Execution Details* page provide comprehensive information about the test execution, including test case status, logs, and other relevant details for analysis and troubleshooting.  

    > The function of *CANCEL RUN* button is to halt the ongoing test execution process, stopping further execution of test cases, and preserving the current state for analysis or debugging purposes.

![](/img/how-tos/how-to-cancel-a-deploy-run/cancel-run.png)

6. Go to the **Results** page again and check the **Status** of the required test case whether it has been canceled or not.
   > The *Status* refers to the outcome or result of executing the test, indicating whether it passed, failed, or has any other relevant status such as blocked, cancelled, or in-progress.  
   > Checking the *Status* of the test case is necessary to determine whether the test case has passed, failed, cancelled, or encountered any issues, providing insights into the quality and stability of the software being tested.

![](/img/how-tos/how-to-cancel-a-deploy-run/cancel-status.png)



