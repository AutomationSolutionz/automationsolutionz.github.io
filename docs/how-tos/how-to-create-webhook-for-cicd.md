---
id: how-to-create-webhook-for-cicd
title: How to create Webhook for CI/CD
---

## Description  

### What is Webhook in the context of CI/CD?

In the context of **CI/CD (Continuous Integration/Continuous Delivery)**, a **Webhook** is a mechanism that allows different systems or services to communicate and trigger actions based on events or updates.  

Specifically, a **Webhook** is a user-defined HTTP callback or endpoint that receives notifications or data payloads from a remote server when a particular event occurs. These events can vary depending on the **CI/CD** platform or tool being used but typically include actions such as code commits, pull requests, builds, test results or deployment completions.  

When a **Webhook** is set up, the **CI/CD** platform will send an HTTP POST request to the specified URL whenever the associated event occurs. The payload of the request usually contains relevant information about the event, such as the commit details, branch information, or build status.  

**Webhooks** are commonly used in **CI/CD** workflows to automate processes and enable integrations with other tools and services. For example, when a code commit occurs in a version control system (e.g. Git), a **Webhook** can be configured to trigger an automatic build and deployment processes in a **CI/CD** tool (e.g. **Jenkins**, **Travis CI**, or **Gitlab CI/CD**). This helps steamline the development and release pipeline by automatically initiating subsequent stages based on specific events.  

By leveraging webhooks, **CI/CD** pipelines can be designed to respond to changes in real-time, ensuring rapid feedback, faster deployments, and increased overall efficiency.  

### What is the necessity of Webhook in the context of CI/CD?

**Webhooks** are essential in **CI/CD** workflows for real-time notifications, automation, integration, collaboration, and establishing a continuous feedback loop. They enable immediate notifications, automate actions based on events, integrate various tools and services, foster collaboration among teams, and facilitate a continuous flow of information and feedback.

**Webhook** enhance the efficiency and reliability of **CI/CD** pipelines, leading to faster and streamlined software development and delivery.

## Steps

1. From the **Menu bar**, go to the **Testing** then **Run/CI Presets** option.

![](/img/how-tos/how-to-create-webhook-for-cicd/run-ci.png)

2. Go to the **Preset** page.
3. Click on the **Create New Preset +** button.

![](/img/how-tos/how-to-create-webhook-for-cicd/preset-pg.png)

4. Go to the **Deploy Presets** page.
5. Enter the **Preset Name**.

![](/img/how-tos/how-to-create-webhook-for-cicd/preset-name.png)

6. Click to **Search Set** of the **Preset Deployment** tab.
7. Multiple of **Sets** can be added.
8. Click on the **Search** button.

![](/img/how-tos/how-to-create-webhook-for-cicd/search-set.png)

9. Fill up the **Information** of the **Preset Deployment** tab like:
 * Assigned testers, 
 * Send report to, 
 * Milestone, 
 * Run Objective, 
 * Version 
 * Platform (Browser, Mobile).

![](/img/how-tos/how-to-create-webhook-for-cicd/preset-information.png)

10. Multiple of **Assigned testers** and **Send report to** can be selected.
11. To remove any **Assigned testers** or **Send report to**, click on the **Cross sign (X)** button.

![](/img/how-tos/how-to-create-webhook-for-cicd/remove-report.png)

12. Click on the **Save** button.

![](/img/how-tos/how-to-create-webhook-for-cicd/save-preset.png)