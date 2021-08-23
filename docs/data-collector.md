---
id: data-collector
title: Data Collector
---

Data collector is a very powerful feature that allows you to collect
data from complex and nested structured data. This feature reduces the
number of actions that you have to write in order to access and save
nested data to only a single action, whereas, this would otherwise
take around 10-20 actions in general.

Let's go through a simple example to understand how this works. We're
assuming that the following data is saved in the variable `%|data|%`:

```json
[
    {
        "error1": {
            "type": "Runtime Error",
            "occurrence": [
                {"line": 10, "message": "fail"},
                {"line": 20, "message": "block"},
            ],
        },
        "error2": {
            "type": "Compiler Error",
            "occurrence": [
                {"line": 50, "message": "fail"},
                {"line": 64, "message": "xyz"},
                {"line": 70, "message": "pqr"},
            ],
        },
        "1error": {
            "type": "Runtime Error",
            "occurrence": [
                {"line": 100, "message": "fail"},
                {"line": 200, "message": "block"},
            ],
        },
        "2error": {
            "type": "Compiler Error",
            "occurrence": [
                {"line": 500, "message": "fail"},
                {"line": 640, "message": "xyz"},
                {"line": 700, "message": "pqr"},
            ],
        },
    },
    {
        "bug": {
            "type": "Brain malfunctioned",
            "occurrence": [
                {"line": 150, "message": "abort!"},
                {"line": 23, "message": "shutdown"},
            ],
        },
        "error": {
            "type": "Computer crashed",
            "occurrence": [
                {"line": 341, "message": "blocked"},
                {"line": 4, "message": "blocked"},
                {"line": 74, "message": "math error"},
            ],
        },
    }
]
```

Let's say we only want to collect line numbers. You have to specify
the following pattern and it'll give you all the line numbers in a
list.

Pattern:

```python
# Pattern
%|data{_all_, _all_, occurrence, _all_, line}|%

# Output
[10, 20, 50, 64, 70, 100, 200, 500, 640, 700, 150, 23, 341, 4, 74]
```

There are a few things to note here:

1. Patterns are specified when accessing a variable.
2. Patterns are defined inside curly braces after the variable name.
   No spaces allowed. Multiple sets of curly braces `{patter
   1}{pattern 2}...` can be specified without any spaces (see example
   at the end).
3. Items in the pattern are comma-separated.
4. `_all_` as described in the next paragraphs, signals to Zeuz Node
   to loop through all the values in the list/dictionary.

What's `_all_`? By putting the `_all_` property you're essentially
asking the collector to loop through any items (be it a list or a
dictionary). The first `_all_` loops through the first level of items
(two dictionaries in this case) inside the root list. The second
`_all_` loops through the **values** of the dictionaries (ignoring the
dictionary keys). Next, we're asking for the `occurrence` items which
are present inside each of the dictionaries at the third level. Notice
that, `occurrence` itself is yet another list. So, we loop through
`_all_` the items inside it. And lastly, we collect `line`. Done!

Let's see a few more patterns and their outputs:

```python
%|data{_all_, _all_, type}|%
# Output of pattern 1
['Runtime Error', 'Compiler Error', 'Runtime Error', 'Compiler Error', 'Brain malfunctioned', 'Computer crashed']

%|data{_all_, *error, type}|%
# Output of pattern 2
['Runtime Error', 'Compiler Error', 'Computer crashed']

%|data{_all_, error*, occurrence, _all_, line}|%
# Output of pattern_3
[10, 20, 50, 64, 70, 341, 4, 74]

%|data{1, bug, occurrence, 1, message}|%
# Output of pattern 4
'shutdown'
```

Notice that you can specify partial names for dictionary keys using
`*` before or after a name. In the case of **pattern 2**, we wanted
all errors ending with the word "error". So the pattern is `*error`.
In case of **pattern 3** we wanted all errors starting with the word
"error", so the pattern is `error*`.You can access to specific data using the index value in data-collector like **pattern 4**.



You can also zip together multiple collected items using the syntax
`%|data{pattern_1}{pattern_2}|%`. For example:

```python
%|data{_all_, _all_, occurrence, _all_, line}{all_, _all_, occurrence, _all_, message}|%

# Output
[
    (10, "fail"),
    (20, "block"),
    (50, "fail"),
    (64, "xyz"),
    (70, "pqr"),
    (100, "fail"),
    (200, "block"),
    (500, "fail"),
    (640, "xyz"),
    (700, "pqr"),
    (150, "abort!"),
    (23, "shutdown"),
    (341, "blocked"),
    (4, "blocked"),
    (74, "math error")
]
```

**Key collector**

Key collector collects all the values of  specific key from the data .Sometimes data can be
so nested or complex that you have to access into so many elements to get the value of your specific key.
Key collector tool can handle this quite easily.You have to just pass the key name into round bracket along 
with data name.
```python
 #pattern 1
 %|data(line)|%
 # Output
 {'line': [10, 20, 50, 64, 70, 100, 200, 500, 640, 700]}
 
 #pattern 2
 %|data(line, message)|%
 # Output
 {'line': [10, 20, 50, 64, 70, 100, 200, 500, 640, 700], 'message': ['fail', 'block', 'fail', 'xyz', 'pqr', 'fail', 'block', 'fail', 'xyz', 'pqr']}
 
 #pattern3
 %|data(line)(message, type)|% 
 # Output
 [{'line': [10, 20, 50, 64, 70, 100, 200, 500, 640, 700]}, {'message': ['fail', 'block', 'fail', 'xyz', 'pqr', 'fail', 'block', 'fail', 'xyz', 'pqr'], 'type': ['Runtime Error', 'Compiler Error', 'Runtime Error', 'Compiler Error']}]
```

Key collector will extract all the value of the given key from all over the data. You can also
use multiple keys in key collector like **pattern 2** & **pattern 3** above.