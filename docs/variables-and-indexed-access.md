---
id: variables-and-indexed-access
title: Variables and indexed access
---

With ZeuZ Node, you can store complex variables of any common type - integers,
floats, strings, lists and dictionaries. You can even nest lists and
dictionaries inside each other as much as you like and then later access them
very easily with the indexed syntax that is very similar to Python or most other
language's array access syntax using `[ ]`.

Any value that is stored in ZeuZ Node that is either a valid JSON or Python data
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
| log 1 | utility action | Variable values:<br/><br/>Whole variable: %\|my_var\|%<br/>Access "hello": %\|my_var["hello"]\|%<br/>Access "num": %\|my_var["num"]\|%<br/><br/>Access nested list: %\|my_var["my_list"]\|%<br/>Access first element of nested list: %\|my_var["my_list"][0]\|%<br/>Access second element of nested list: %\|my_var["my_list"][1]\|%<br/>Access last element of nested list: %\|my_var["my_list"][-1]\|% |

There are a few important points to take note of:
1. Variables are accessed using `%|variable_name|%` syntax.
2. Dictionaries/maps can be accessed using `%|variable_name["key_name"]|%` syntax.
3. List items can be accessed using `%|variable_name[0]|%`,
   `%|variable_name[1]|%`, etc. Indexing of items start at `[0]`.
4. Last item of a list can be accessed using `[-1]` like so: `%|variable_name[-1]|%`.
5. Data can be nested as much as needed and Zeuz Node will be able to handle it easily.

You can index using range syntax like so:

```
%|my_list|%      = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
%|my_list[0]|%   = 0
%|my_list[-2]|%  = 9
%|my_list[2:5]|% = [2, 3, 4]
%|my_list[:3]|%  = [0, 1, 2]
%|my_list[:-1]|% = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
%|my_list[3:]|%  = [3, 4, 5, 6, 7, 8, 9, 10]
%|my_list[1:]|%  = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

You can also use variable as index. Suppose you put value into variable as num1 = 2 & num2 = 5.
You can use this variable as index to access into data as below.
```
%|my_list[num1]|%   = 2
%|my_list[num1:num2]|% = [2, 3, 4]
%|my_list[num2:]|%  = [5, 6, 7, 8, 9, 10]
```


**Nested data access using indexing**

Take a look at the JSON data below. It comes from an apartment building and has some data 
about its address and the apartments inside it. Apartment number 1 and 2 have two residents.
```json
{
    "ApartmentBuilding":{
        "Address":{
            "HouseNumber": 5,
            "Street": "DataStreet",
            "ZipCode": 5100
        },
        "Apartments":[
            {
                "Number": 1,
                "Price": 500,
                "Residents": [
                    {
                        "Name": "Bob",
                        "Age": 43
                    },
                    {
                        "Name": "Alice",
                        "Age": 42
                    }
                ]
            },
            {
                "Number": 2,
                "Price": 750,
                "Residents": [
                    {
                        "Name": "Jane",
                        "Age": 43
                    },
                    {
                        "Name": "William",
                        "Age": 42
                    }
                ]
            },
            {
                "Number": 3,
                "Price": 1000,
                "Residents": []
            }
        ]      
    }
}
```
The above data is saved in a variable called `%|data|%`.Suppose  you want to get the name of the first person in the first apartment. You would write the following:

```python
%|data["ApartmentBuilding"]["Apartments"][0]["Residents"][0]["Name"]|%

#Output
Bob
```

you can see that the first key is `ApartmentBuilding`. By writing the name of the key in square brackets 
beside the variable name we get the corresponding value which is another dictionary. This dictionary has two key value pairs:
`Address` & `Appartments` . we wanted to access the first resident in the first apartment, so you put `Apartments` in square brackets
to get the corresponding value, which is a list.We follow this with index 0 in square brackets to access the first element of the list.
 Next comes `Residents`, followed by another index 0 to access the first person,and finally `Name` to get the name of that person.

Now suppose you don't want to access into specific data instead you want to extract residents name of all apartments.
you have to use nested loop to access into all the elements of all of the dictionaries. ZeuZ
has a unique feature to perform this in a simple way.

There is one very powerful feature of variable access in ZeuZ Node that's not
covered in this section. It is immensely helpful when you're working with nested
structures of data (specially in case of REST API and database actions). See the
next section [Data Collector](data-collector) to learn more about it.
