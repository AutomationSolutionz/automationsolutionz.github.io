---
id: add-new-actions
title: Add new actions
---

import useBaseUrl from '@docusaurus/useBaseUrl';

If any of the hundreds of different actions currently available still does not
suit your needs, that's okay. You can easily extend ZeuZ Node by adding new
actions to it or even better, contribute to our repository so that everyone has
access to them! Follow this guide to learn how you can create a new action very
easily.

Our built in actions are called sequential actions.

1. **Decide the type of action**

   You first need to decide which category your new action will belong to. For
   example, if you're trying to write an action for web automation, it should go
   into the Web/Selenium category. Find the "action_declarations"
   directory/folder inside "ZeuZ Node > Framework > Sequential_Actions".

    ![](/img/action-declarations.png)

    Each of the files listed above are a mapping of the following type of actions:
    - Mobile actions (Android/iOS) > appium.py
    - Web actions > selenium.py
    - Common (common to all categories) actions > common.py
    - REST API actions > rest.py
    - Desktop (Win/Linux/Mac) actions > desktop.py
    - Windows only actions > windows.py
    - Database actions > database.py

   In this guide, we'll write a simple common action that will just output the
   message "Hello, {your name here}" in the console. So, open the "common.py"
   file and you'll see something like this:

    ![](/img/common-actions.png)

    This is a list of all the available common actions. In each of these rows,
    `name` defines the name of the action, `function` defines which function to
    call in the code when this particular action is added. You can also see a
    `screenshot` key, this defines the type of screenshot that this action should
    perform (take a screenshot of the desktop, mobile, the browser ui or none at
    all). This is where we'll declare our action. We'll come back to this file
    later. 

2. **Write the action**

   Time to write the actual code for the action! Common actions live in the
   "ZeuZ node > Framework > Built_In_Automation > Sequential_Actions >
   common_functions.py" file. All actions have the same code skeleton. Add the
   following code to add our new `hello_name` action.

   ```python
    # The @logger decorator logs the entry and exit of the action as well
    # as its run time.
    @logger
    def hello_name(data_set):
        # Every action is passed a `data_set` which is a 2d list of the action
        # data that is input by the user.

        # All actions define this at the top so that it can be passed to the
        # logger function to print which function/module produced a particular
        # log item.
        sModuleInfo = inspect.currentframe().f_code.co_name + " : " + MODULE_NAME

        try:
            name = None

            for left, mid, right in data_set:
                left = left.lower()
                if "name" in left:
                    name = right.strip()

            if name is None:
                CommonUtil.ExecLog(
                    sModuleInfo,
                    "name row is not provided",
                    3,
                )
                return "failed"

            # Log to the console. This log will also be sent to the server
            # automatically when the test run is completed.
            CommonUtil.ExecLog(
                sModuleInfo,
                "Hello, %s" % name,
                1,
            )

            # If you noticed the 1 and 3, these are log levels.
            # 1 - Passed
            # 2 - Warning
            # 3 - Error
            # There are a few others, you can check the `ExecLog` function
            # to see more of them.

            return "passed" # Action executed successfully.
        except:
            # Either of the following can be returned to indicate failure.
            # In the case of the lattter, it'll also print the exception
            # message to the console which is sometimes beneficial to see
            # for the tester.

            # return "failed"
            return CommonUtil.Exception_Handler(sys.exc_info())
   ```

3. **Declare the action**

   Next, you'll have to declare the action in "common.py" file mentioned in step
   #1. Add the following at the very end of the `declarations` tuple:

    ```python
    { "name": "hello name", "function": "hello_name", "screenshot": "none" },
    ```

   This will make our action available to execute when we add them from the
   server.

4. **Execute action**

   Now that you have written the action, it's time to run it and see how it
   works. Create a new test case and go to the steps tab. From there, add any
   action. Modify (add/remove) rows to make the action look like the following:

   ![](/img/action-run.png)

   Save the step and run your test case to see if its producing the output you
   expected.
