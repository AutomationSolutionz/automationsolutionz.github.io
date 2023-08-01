---
id: how-to-create-a-branch
title: How to create a Branch
---

## Description

### What is the meaning of Branch in software testing?

In software testing, a **Branch** refers to a specific path or alternative flow within the software's source code. Branches occur when the code contains conditional statements (such as, if-else or switch-case) that lead to different outcomes or actions based on certain conditions. Each **Branch** represents a different set of instructions or behaviour that the software can follow depending on the conditions met during runtime.

Testing different **Branches** is crucial to ensure that the software functions correctly and handles various scenarios accurately. Test cases are designed to cover each branch, validating the expected behaviour and identifying any potential issues or defects. 

**Branch** coverage is a metric used to measure the percentage of branches exercised by the executed tests.

### Why Branch is necessary in software testing?

**Branches** are necessary in software testing for comprehensive coverage, accurate decision-making, error detection, risk mitigation, compliance adherence, and code quality improvement.

Testing different branches ensures that the software handles various scenarios correctly and identifies potential issues or defects. By exercising each branch , testers can validate the software's logic, detect errors, and reduce the risk of bugs in production.

**Branch** testing also helps meet regulatory requirements and improves code quality by identifying areas that may require refactoring or simplification. Overall, testing branches is essential for ensuring reliable and high-quality software.

### What is the meaning of Version in software testing?

In software testing, a **Version** refers to a specific release or iteration of the software. It represents a distinct state of the software at a particular point in time, marked by changes, enhancements, or bug fixes. Each **Version** has a unique identifier and is tested to ensure its functionality, performance, and stability.

**Versions** help to track the software's evolution, enable efficient bug tracking, and assist in managing software releases. They provide reference points for communication, allowing stakeholders to identify and discuss specific versions.

Overall, **Versions** in software testing help manage and track the different iterations of the software throughout its development cycle.

### What is the relation between Branch and Version in software testing?

**Versions** and **Branches** have a relationship in software testing. **Versions** represent specific releases or iterations of the software, indicating distinct states marked by changes and improvements.

On the other hand, **Branches** represent different paths or alternative flows within the source code, leading to various outcomes based on conditions. Different branches may be associated with different versions as developers work on specific features or bug fixes. Once a **Branch** is tested and merged into the main codebase, it contributes to a new **Version** of the software. Managing this relationship ensures a structured development process and maintains software quality across different version.

## Steps

1. From the **Menu bar**, go to the **Project** then **Version** option.

![](/img/how-tos/how-to-create-a-branch/version-branch.png)

2. Go to the **Bundle Version** page.  
   > The *Bundle Version* refers to a unique identifier assigned to a software package that helps in tracking and managing different versions of the software.  

   > The *Bundle Version* page serves as a reference to track and manage the version history, changes, and updates of a software bundle or package.  

   > Two type of *Branches* are available on the *Bundle Version* page:  
     * **Assigned Branch**
     * **Global Branch**.  

   > * **Assigned Branch**: An *Assigned Branch* refers to a specific set of code changes or enhancements made to a software application that is isolated from the main development branch for testing purposes.  
   > * **Global Branch**: A *Global Branch* refers to the main or central branch in version control where the development codebase is managed and merged with other branches.

![](/img/how-tos/how-to-create-a-branch/bundle-version.png)

3. Click on the **CREATE BRANCH** button.  
   > *CREATE BRANCH* button allows for the creation of a new branch from an existing branch, enabling parallel development and isolation of code changes for testing or experimentation.

![](/img/how-tos/how-to-create-a-branch/create-branch.png)

4. Enter the **Branch Name**.  
   > Entering a *Branch Name* is necessary to provide a unique and descriptive identifier for the branch, facilitating organization, collaboration, and tracking of code changes during development and testing processes.

5. Next click on the **OK** button.

![](/img/how-tos/how-to-create-a-branch/branch-name.png)

6. Created **Branch** will be shown under **Global Branch**.  
   > The *Global Branch* show all the branches that have been created.

![](/img/how-tos/how-to-create-a-branch/test-branch.png)

7. To link the created **Branch**, click on the **Plus sign (+)** at the right side of it.  
   > Linking the created *Branch* to the *Assigned Branch* ensures that the specific code changes or enhancements being tested are associated with the designated branch, facilitating traceability and accurate tracking of testing efforts.

![](/img/how-tos/how-to-create-a-branch/link-branch.png)

8. Click on the **OK** button to link the required **Branch**.

![](/img/how-tos/how-to-create-a-branch/link-ok.png)

9. Required **Branch** will be linked under the **Assigned Branch**.  
   > All the linked *Branches* are displayed in the *Assigned Branch*, providing a consolidated view of the *Branches* associated with specific code changes or enhancements being tested.

![](/img/how-tos/how-to-create-a-branch/assigned-branch.png)

10. To unlink the required **Branch**, click on the **Minus sign(-)** at the right side of it.  
> Unlinking a *Branch* from the *Assigned Branch* is necessary to disassociate specific code changes or enhancements from the designated *Branch*, allowing for reassignment or independent testing of the code in a different context.

![](/img/how-tos/how-to-create-a-branch/unlink-branch.png)

11. Click on the **OK** button.

![](/img/how-tos/how-to-create-a-branch/unlink-ok.png)

12. The required unlinked **Branch** will be again seen under the **Global Branch**

![](/img/how-tos/how-to-create-a-branch/test-branch.png)