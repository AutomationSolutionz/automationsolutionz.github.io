---
id: element-detection
title: Element detection (Web + Mobile)
sidebar_label: Element detection
---

For selenium-appium actions, we have several supports for locating an element. Such as you can provide 
1. Parent parameter, child parameter 
2. Sibling parameter
3. Index
4. Element parameter vs Unique parameter
5. Allow hidden
6. Asterisk sign \* and
7. Android-IOS separator sign |\*|
8. Optional action
9. Bypass action

For example:

    <div id="parent">
        <div id="sibling1"></div>
        <div id="sibling2"></div>
    </div>

here, first element is parent of both sibling elements inside its parenthesis. sibling1 and sibling2 are child parameter for the parent

**1. Parent parameter:** To get an idea about child and parent parameter go to 
[demo parent webpage](https://demo.zeuz.ai/web/level/one/actions/web_level_one_action_click_by_parent)

![](/img/zeuz-node/Element_locator/pic1.jpg)

In this link, you will find two ***Button***s with same html properties. So to locate and click them uniquely we need to provide parent
parameter here as they have separate parents.

![](/img/zeuz-node/Element_locator/pic2.jpg)

**2. Sibling parameter:** To get an idea about sibling parameter go to 
[demo sibling webpage](https://demo.zeuz.ai/web/level/one/actions/web_level_one_action_click_by_sibling)

![](/img/zeuz-node/Element_locator/pic3.jpg)

In this link, you will find two ***Button1***s with same html properties. Their parents are different but have same properties.
So to locate and click them uniquely we need to provide sibling parameter here as we can see siblings have different identifiers.

![](/img/zeuz-node/Element_locator/pic4.jpg)

**3. Index:** In the above cases where different web elements have the same identifiers we can also use **index**. Suppose you want
to click the first ***Button*** then you need to provide index = 0.

![](/img/zeuz-node/Element_locator/pic5.jpg)

**4. Element parameter vs Unique parameter:** Element parameter finds all the elements with the given identifiers. More specifically, it 
takes all the identifiers provided in the dataset and make an Xpath and then find all the elements by Xpath. This is comperatively a slower 
process as it will find all the elements through out the page. When you are not sure that your dataset will identify only one element use 
***Element parameter***.

Whereas unique parameter will always return the first item with that identifier and will stop searching the whole page when it gets the 
first element. So its faster than Element parameter. When you are sure that your dataset will find only one element or you want to work 
with the first element you can provide ***Unique parameter***. You will get the element faster. No ***parent, sibling, child, index, allow 
hidden*** are applicable for Unique parameter.

For example, in this [demo login](https://demo.zeuz.ai/web/level/one/scenerios/login)

![](/img/zeuz-node/Element_locator/pic6.jpg)

We know, there is only one ***Sign in*** button in this webpage with id="signin_id". Similarly, There is only one ***User Name***
textbox and one ***Password*** textbox with unique id. So we dont need any parent/chiled/sibling/index here 
and simply use **Unique parameter** instead of **Element parameter**

![](/img/zeuz-node/Element_locator/pic7.jpg)

**5. Allow hidden:** By default we always block all hidden elements found and do not return it because hidden elements are generally not 
interectable. But if you have any exceptional scenario and want to interect with hidden elements you can say 
**[allow hidden, optional option, yes]** for that action. Suppose, there is a web element as bellow

    <div class="cover" style="display: none;">Find me out. I am not visible</div>

we want to capture the text value of the element "Find me out. I am not visible". We can do that by this way,

![](/img/zeuz-node/Element_locator/pic8.jpg)

**6. Asterisk(\*):** If you want to set any partial value you can add \* sign before the Attribute name in the dataset. Suppose, 
in the earlier example of ***Sign in*** button we can add \*text = "Sign" instead of id = "signin_id". In case a part of
text is dynamic so the identifier of that element is static part of the text and so you want to use partial text as identifier
or dont know whether there is spaces at end or starting you can search with the partial text.

![](/img/zeuz-node/Element_locator/pic9.jpg)

**7. Android-IOS separator |\*| :** We know Android and IOS has different method of locating an element but we can locate and perform
an action with the same testcase just need to add a separator sign |\*| and no need to write seperate testcases for Android and IOS.

For example, in an app we have a menu button and we want to click it. the locators for android and IOS for that button is
    
    Android: resource-id="toolbar_menu_button"
    IOS: label="common.burger"

We will write the dataset as below,

![](/img/zeuz-node/Element_locator/pic10.jpg)

**8. Optional Action:** Optional action is not only for selenium and appium actions but also for common, windows, rest api actions.
It is used when an action may fail but we want the step to be passed then we can convert that action to optional action. To do that
we can convert "selenium action" to "selenium optional action" at the middle cell of the last row. For example, we switched to a nested
iframe and it has a bug in an element. We will try click it but if it raises error we dont want the step to fail.

![](/img/zeuz-node/Element_locator/pic11.jpg)

**9. Bypass Action:** Bypass action is not only for selenium and appium actions but also for common, windows, rest api actions. Bypass
actions are used at the top of a step. This action is bypassed at first and the remaining actions are executed. If any error raises at
any point only then the bypass actions are executed and then the actions in which errors occured are executed again.

![](/img/zeuz-node/Element_locator/pic12.jpg)