---
id: Calling-method-on-variable
title: Calling method on variable
sidebar_position: 4
---

ZeuZ node allow you to use any kind of python built-in method on variable. Example: **%|var_name.capitalize()|%**,where `var_name` is the name of the variable . You can also use several methods at a time.
Example:**%|var_name.upper().strip().split(" ")|%**. 

Suppose a string value **Hello ZEUZ Client** is saved into a variable named **var**. We want to extract every word from the variable in lowercase & make a list of it.
We've to call the methods on the following way.
```python
%|var.lower().strip().split(" ")|%

#output
['hello', 'zeuz', 'client']
```
Another example is shown below . Here if a expected word is found in the string then it will be replaced by another given word. Node will search for the word. Here 'If condition' returns true. So node will perform the action 3 and replace the word in the variable .
The returned value of the variable will be **New World**.

![](/img/method_test.png)



**Python methods that can be used on string type variable**

| Method             | Parameter         | Description                                                                     |
|--------------------|-------------------|----------------------------------------------------------------------------|
| capitalize()      | no parameter      | Returns the copy of the string with its first character capitalized and the rest of the letters are in lowercased. |
| count()          | substring, start(optional), end(optional) | Searches (case-sensitive) the specified `substring` in the given string and returns an integer indicating occurrences of the substring                                                                      |
| endswith() | suffix, start(optional), end(optional)     | The endswith() function returns True if a string ends with the specified `suffix` (case-sensitive), otherwise returns False.                                                                    |
| find() | substr, start(optional), end(optional)     | The find() method returns the index of the first occurence of a substring in the given string (case-sensitive). If the substring is not found it returns -1. |
| isalnum() | no parameter     | The isalnum() method returns True if all characters in the string are alphanumeric (either alphabets or numbers). If not, it returns False.|
| isalpha() | no parameter     | The isalpha() method returns True if all characters in a string are alphabetic (both lowercase and uppercase) and returns False if at least one character is not an alphabet. The whitespace, numerics, and symbols are considered as non-alphabetical characters. | 
| istrip() | characters(optional)    |The lstrip() method returns a copy of the string by removing leading `characters` specified as an argument. By default, it removes leading whitespaces if no argument passed. | 
| partition() | sep    | The partition() method splits the string at the first occurrence of the specified string separator `sep` argument and returns a tuple containing three elements, the part before the separator, the separator itself, and the part after the separator. |
|replace()    | old,new,count(optional)        | The replace() method returns a copy of the string where all occurrences of a substring are replaced with another substring. The number of times substrings should be replaced by another substring can also be specified. |
| rfind()     |  substr,start(optional),end(optional)                  | The rfind() method returns the highest index of the specified substring (the last occurrence of the substring) in the given string. If the substring is not found, then it returns -1.            |
| split()            | separator,max split                  |  The split() method splits the string from the specified separator and returns a list object with string elements. The default separator is any whitespace character such as space, \t, \n, etc.           |
| strip()            |   characters                 |  The strip() method returns a copy of the string by removing both the leading and the trailing characters. By default, it removes leading whitespaces if no argument passed.           |
| upper()           | no parameter                   | The upper() method returns a string in the upper case. Symbols and numbers remain unaffected.           |

**Python methods that can be used on list type variable**

| Method             | Parameter         | Description                                                                     |
|--------------------|-------------------|----------------------------------------------------------------------------|
|list.append()| item |Adds a new `item` at the end of the list.|
|list.clear() | no parameter |Removes all the items from the list and make it empty.|
|list.copy()| no parameter	|Returns a shallow copy of a list.|
|list.count()| item	|Returns the number of times an element occurs in the list.|
|list.extend()| iterable(list/tuple/dict)	|Adds all the items of the specified iterable (list, tuple, set, dictionary, string) to the end of the list.|
|list.index()| element,start(optional),end(optional)	|Returns the index position of the first occurance of the specified item. Raises a ValueError if there is no item found.|
|list.insert()|index,value	|Inserts an item at a given position.|
|list.pop()|index(optional)	|Returns an item from the specified index position and also removes it from the list. If no index is specified, the list.pop() method removes and returns the last item in the list.|
|list.remove()|item	|Removes the first occurance of the specified item from the list. It the specified item not found then throws a ValueError.|
|list.reverse()|no parameter	|Reverses the index positions of the elements in the list. The first element will be at the last index, the second element will be at second last index and so on.|
|list.sort()|no parameter|Sorts the list items in ascending, descending, or in custom order.|

Many methods on the list variable return none type. Such as, append(),insert(),remove() etc . For these kind of methods which returns none type, we have to use 
execute python code action for that . In the given example , a list type variable is `a`. We want to append a element to the variable by calling the method .For that 
we've used `execute python code` action . After that we can get the updated list by calling the variable.

![](/img/method_test2.png)

The variable may be set or dictionary type as well. User can easily call the python built-in methods for set or dictionary to perform expected actions.

**Clipboard Copy Paste**

`%|clipboard_paste()|%`  
`%|clipboard_set("Value that I want to copy")|%`
 
**%|clipboard_paste()|%**: This part of the code represents a function or command to paste data from the clipboard. When executed, it would paste the content that is currently stored in the clipboard.  
**%|clipboard_set("Value that I want to copy")|%**: This part sets a specific text to the clipboard. When executed, it would replace the current clipboard content with the specified text.
