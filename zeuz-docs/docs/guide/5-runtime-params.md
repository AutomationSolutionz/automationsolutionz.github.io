---
id: 5-runtime-params
title: 5. Runtime Parameters
---

import Link from '@docusaurus/Link';

Your organization have two different servers - a QA server that runs locally and
a Production server that runs on the publicly available internet. You may
develop all your test cases with the local server address. But then your
organization decided that the test cases need to be run on the production too to
make sure that the production server is working as expected. Now, do you want to
go and modify all the test cases to update the server address to the Production
server? Of course not, and Zeuz has a feature perfectly suited for this type of
circumstances.

If you have a value that you want to control/change every time you deploy your
test cases, you can use **Runtime parameters** in Zeuz for this. Runtime
parameters are nothing but variables with a fixed set of values which you can
control during deployment.

1. To create a runtime parameter, go to *Testing > Run Tests* page in Zeuz server.
    Click on the **MORE** button and then click on the **RUN PARAMETER** button.

    ![](/img/guide/5-runtime-params/1.png)

2. Next, click on the **CREATE RUNTIME PARAMETER** button and provide a name that
    you would like.

    ![](/img/guide/5-runtime-params/2.png)

3. Click on the the **+** symbol and click **OK** to confirm.

    ![](/img/guide/5-runtime-params/3.png)

4. Click on the newly created runtime parameter and then click on **Add Name**.
   This will allow you to give a name to a value. Note that, a runtime parameter
   can have multiple values. The name that you set here is just a human friendly
   name so that you can remember later on, what this particular value means. If
   you do not yet understand what this means, please proceed to the next steps.
   By the time you reach the end, you should understand.

    ![](/img/guide/5-runtime-params/4.png)

    ![](/img/guide/5-runtime-params/5.png)

5. Next, click on the newly created name and click on the **Add Sub Field**
   button. Put the actual value here and press **OK**.

    ![](/img/guide/5-runtime-params/6.png)

6. Now, go to the *Testing > Run Test* page again and you should see your newly
   created runtime parameter show up.

    ![](/img/guide/5-runtime-params/7.png)

7. Then you can use the runtime parameter like a normal variable as described <Link to="/docs/variables-and-indexed-access">
   here</Link>.

    ![](/img/guide/5-runtime-params/8.png)


:::info

You can put a valid JSON string as the value for runtime parameters and they'll
be automatically converted to the appropriate data type. You can access the
values using the variable syntax afterwards.

:::
