---
id: loop
title: Loop
---

import Link from '@docusaurus/Link';

Loops are a type of flow control actions in Zeuz Node, just like <Link to="/docs/condition">Conditional Actions</Link>, that allows you to 
execute one or more actions multiple times.

We will see following loop scenarios-
1. Loop through a single list (with "*Loop*" action)
2. Loop through a single list (with "*Loop through a list*" action)
3. Loop through a 2 Dimensional list (with "*Loop*" action)
4. Call previous actions
5. Create List of actions

**1. Loop through a single list (with "*Loop*" action):** We will loop through every element of a 1 Dimensional list and print all the values.

**Pseudocode:**
```
Single_List = [1, "string", True, 2, 3]
LEN = len(Single_List)
i = 0
Loop "LEN" times:
    Print(index i of Single_List = Single_List[i])
    i = i + 1
```
**Actions Used:**
1. Save variable - number string list dictionary
2. Loop
3. Log Info
4. Math utility action

![](/img/zeuz-node/Loop/pic1.jpg)

**Explanation:**
- As Print statement (Action 5) and i = i + 1 statement (Action 6) are inside the Loop's parenthesis we have put 5,6 in the run action row
- i is a variable and Single_List is also a variable. To access the i th element of the Single_List we have used the ZEUZ syntax %|Single_List[i]|%

**2. Loop through a single list (with "*Loop through a list*" action):** We will now loop through a list with an easier approach

**Pseudocode:**
```
Single_List = [1, "string", True, 2, 3]
for element in Single_List:
    Print(element)
```
**Actions Used:**
1. Save variable - number string list dictionary
2. Loop through a list
3. Log Info

![](/img/zeuz-node/Loop/pic2.jpg)

**Explanation:**
- As Print statement (Action 3) is inside the Loop's parenthesis we have put 3 inside the Loop
- element is a variable and to print the value of element we have used ZEUZ syntax %|element|%

**3. Loop through a 2 Dimensional list (with "*Loop*" action):** We will now loop through every element of a 2 dimensional list

**Pseudocode:**
```
L = [[1,2],[3,4,4.5],[5,6]]
parent_len = len(L)
i = 0
Loop "parent_len" times:
    nested_len = len(L[i])
    j = 0
    Loop "nested_len" times:
        Print(index value of list is L[i][j])
        j = j + 1
    i = i + 1
```
**Actions Used:**
1. Save variable - number string list dictionary
2. Loop
3. Log Info
4. Math utility action

![](/img/zeuz-node/Loop/pic3.jpg)

**Explanation:**
- Check the **Parenthesis** and note that the nested loop is inside the parent loop. So we had to put **Action 5-10** inside the parent loop
- Print statement and j = j + 1 statements are inside the nested loop. So we had put **Action 8,9** inside the nested loop

**4. Call previous actions:** Suppose you have writen some actions and after certain actions you need those previously added actions again.
In this case instead of writing those actions again you can use Loop action to call the previous actions

**Pseudocode:**
```
Print(ACTION 1)
Print(ACTION 2)
Print(ACTION 3)
Print(ACTION 4)
Loop 1 times:
    Print(ACTION 1)
    Print(ACTION 2)
    Print(ACTION 4)
Print(ACTION 6)
```
**Actions Used:**
1. Log Info
2. Loop

![](/img/zeuz-node/Loop/pic4.jpg)

**5. Create List of Actions:** Suppose you have too many click actions. You don't need to add all the actions. Just provide a list with a
"Loop" and a "Click element" action.

**Pseudocode:**
```
go to "https://www.keynotesupport.com/internet/web-contact-form-example-checkboxes.shtml"
all_actions = [
    ["value", "desktop"],
    ["value", "notebook"],
    ["value", "netbook"],
    ["value", "server"],
    ["value", "other"],
]
for action in all_actions:
    Take attribute_name = %|action[0]|% data and attribute_value = %|action[1]|% and click it

```
**Actions Used:**
1. Go to Webpage
2. Save variable - number string list dictionary
3. Loop through a list
4. Click element

![](/img/zeuz-node/Loop/pic5.jpg)

**Explanation:**
- We are putting `%|action[0]|%` at the left and `%|action[1]|%` at the right so on 1st iteration it will click the web element
with value="desktop" and on 2nd iteration it will click value="notebook" and so on