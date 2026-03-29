---
id: cancel-a-deploy-run
title: Cancel Run 
---

import MetaCard from '@site/src/components/MetaCard';

**Cancelling a deploy run** refers to stopping an ongoing deployment process before it is completed.

<MetaCard
  availableFrom="20250518"
  difficulty="🟢 Easy"
  lastUpdated="25 Mar, 2026"
  relatedTopics={["History", "Run tests", "Run ID details", "Runtime parameters"]}
/>

### Why it matters / Use Cases:
- **Prevent Errors from Spreading**: Stops the deployment if a configuration or code issue is detected.
- **Avoid Failed Test Executions**: Cancels runs when automated tests are failing to prevent invalid results.
- **Correct Misconfigurations**: Allows updating incorrect settings before redeploying.
- **Save Time and Resources**: Stops unnecessary deployments, reducing server load and resource usage.

## Prerequisites
- Access to ZeuZ Server with permissions for **Testing → Deployments → History**.

## Features
- Navigate to the **Results** page by clicking the "History" option from the menu bar.

![](/img/how-tos/how-to-cancel-a-deploy-run/history-button.png)

![](/img/how-tos/how-to-cancel-a-deploy-run/history-result.png)

- Click the required **Run ID** on the page.

![](/img/how-tos/how-to-cancel-a-deploy-run/set-title.png)

- After clicking the required **Run ID**, it will redirect to the "Run ID details" page.

![](/img/how-tos/how-to-cancel-a-deploy-run/execution-history.png)

- Click the **Cancel** button available at the top right of the "Run ID details" page.

![](/img/how-tos/how-to-cancel-a-deploy-run/cancel-run.png)

- The Run ID will be cancelled after clicking the **Cancel** button.

## FAQs / Troubleshooting

<details>
<summary>Can a cancelled run be resumed?</summary>

No, once a run is canceled, it cannot be resumed.

</details>

<details>
<summary>What happens when you click the **Cancel** button on a Run ID?</summary>

The Run ID will be cancelled after clicking the **Cancel** button.

</details>

<details>
<summary>How to confirm that a run is canceled?</summary>

Check the run status on the Results page; it should be updated as “Canceled” or similar.

</details>

## Changelog

- New UI has been introduced [[20250518](/blog/zeuz-platform-20250518/)]

## Related Topics

- [History](https://docs.zeuz.ai/docs/zeuz-server/testing/Deployments/history-page/)
- [Run tests](https://docs.zeuz.ai/docs/zeuz-server/testing/Deployments/run-tests/)
- [Run ID details](https://docs.zeuz.ai/docs/zeuz-server/testing/Deployments/run-id-details-page/)
- [Runtime parameters](https://docs.zeuz.ai/docs/zeuz-server/testing/Deployments/runtime-parameters/)

---