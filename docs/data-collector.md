---
id: data-collector
title: Data Collector
---

Data collector is a very powerful feature that allows you to collect
data from complex and nested structured data. This feature reduces the
number of actions that you have to write in order to access and save
nested data to only a single action, whereas, this would otherwise
take around 10-20 actions in general.

Let's go through a simple example to understand how this works. Given
the following data (a random json data):

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
        "error": {
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
pattern = "_all_, _all_, occurrence, _all_, line"

# Output
[10, 20, 50, 64, 70, 500, 640, 700, 100, 200, 341, 4, 74]
```

The first thing you notice is that the pattern is a string with some
comma-separated items. And it contains some mysterious `_all_` in it.

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
pattern_1 = "_all_, _all_, type"
# Output of pattern 1
['Runtime Error', 'Compiler Error', 'Compiler Error', 'Runtime Error', 'Computer crashed']

pattern_2 = "_all_, *error, type"
# Output of pattern 2
['Compiler Error', 'Runtime Error', 'Computer crashed']

pattern_3 = "_all_, error*, occurrence, _all_, line"
# Output of pattern_3
[10, 20, 50, 64, 70, 341, 4, 74]
```

Notice that you can specify partial names for dictionary keys using
`*` before or after a name. In the case of **pattern 2**, we wanted
all errors ending with the word "error". So the pattern is `*error`.
In case of **pattern 3** we wanted all errors ending with the word
"error", so the pattern is `error*`.
