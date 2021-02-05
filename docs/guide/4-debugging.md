---
id: 4-debugging
title: 4. Debugging
---

When you're creating test cases, you will naturally want to only test some
specific actions or steps in your test case. You don't want to run the whole
test case over and over just to check your incremntal changes. You also don't
want to pollute the Run History by unnecessarily running your full test case all
the time as this will mess up reporting. What you need in this case is
"Debugging"!

Debugging in Zeuz is the process of selecting only some specific steps or
actions to execute. This allows you to incrementally change and experiment with
different actions or values to see if it works for your test case.

There are two types of debugging in Zeuz.

1. Debug **Steps**:

   If you want to run some specific steps only, then you need to click on the
   Debug icon that's available in the Test Case edit page at the *top right
   corner*.

   ![](/img/guide/4-debugging/1-step-debug.png)

   This will open the step debug page, where you can select the specific steps
   that you want to debug.

   ![](/img/guide/4-debugging/2-step-debug-page.png)

2. Debug **Actions**:

   If you want to run some specific actions only, then you will need to debug
   actions. To debug actions, click on the step where your actions are present
   and click on the Debug icon at the top of the action edit slider.

   ![](/img/guide/4-debugging/3-action-debug.png)

   The action debug page is similar to the step debug page and works the same
   way. You can select the specific actions that you want to execute and click
   on deploy.
