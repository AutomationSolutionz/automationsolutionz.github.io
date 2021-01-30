---
id: variables-and-indexed-access
title: Variables and Indexed Access
---

With Zeuz Node, you can store complex variables of any common type - integers,
floats, strings, lists and dictionaries. You can even nest lists and
dictionaries inside each other as much as you like and then later access them
very easily with the indexed syntax that is very similar to Python or most other
language's array access syntax using `[ ]`.

Any value that is stored in Zeuz Node that is either a valid JSON or Python data
type will be automatically converted to ints, floats, strings, dictionaries,
lists, etc. even if the value is in string (text) format. This means that you
don't have to worry about converting them back and forth when using the values.
For example, if the following string is saved using the **Save variable - number
string list dictionary** action, you can access the values in the following way:

1. Store values using save variable.

| FIELD              | SUB               | VALUE                                                                      |
|--------------------|-------------------|----------------------------------------------------------------------------|
| data               | element parameter | {"hello": "world", "num": 10, "flt": 1.5, "b": true, "my_list": [1, 2, 3]} |
| operation          | element parameter | save                                                                       |
| save into variable | common action     | my_var                                                                     |

2. Access the values in any other action. We're simply going to print to the
   console, so we'll use the **Log Info** action.

| FIELD | SUBFIELD | VALUE |
|-|-|-|
| log 1 | utility action | Variable values:<br/><br/>Whole variable: %\|my_var\|%<br/>Access "hello": %\|my_var["hello"]\|%<br/>Access "num": %\|my_var["num"]\|%<br/><br/>Access nested list: %\|my_var["my_list"]\|%<br/>Access first element of nested list: %\|my_var["my_list"][0]\|%<br/>Access second element of nested list: %\|my_var["my_list"][0]\|%<br/>Access last element of nested list: %\|my_var["my_list"][-1]\|% |

There are a few important points to take note of:
1. Variables are accessed using `%|variable_name|%` syntax.
2. Dictionaries/maps can be accessed using `%|variable_name["key_name"]|%` syntax.
3. List items can be accessed using `%|variable_name[0]|%`,
   `%|variable_name[1]|%`, etc. Indexing of items start at `[0]`.
4. Last item of a list can be accessed using `[-1]` like so: `%|variable_name[-1]|%`.
5. Data can be nested as much as needed and Zeuz Node will be able to handle it easily.

There is one very powerful feature of variable access in Zeuz Node that's not
covered in this section. It is immensely helpful when you're working with nested
structures of data (specially in case of REST API and database actions). See the
next section [Data Collector](data-collector) to learn more about it.
