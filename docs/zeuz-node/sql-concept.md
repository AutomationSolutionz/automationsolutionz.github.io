---
id: sql-concept
title: SQL Concepts
---

## Database

A **Database** is a place where we can store, manipulate, and retrieve data.  
* **Store**   
* **Manipulate**    
* **Retrieve**    

It is an organized collection of structured information, or data typically stored electronically in a computer system.

![](/img/concepts/sql-concept/database-pic.png)

Basically, we can put data into it and then we can retrieve, we can handle data, we can manipulate (modify), we can delete, we can update, all of the operations are provided by the actual database.

### Examples of Database:

* **Facebook** is a place where we can connect with different people all around the world. With **Facebook**, they actually store a lot of informations about us. And the data that they store about us is in a database.  
We know our names, our friends, everything is stored in a database. When we consume content or visit someone else's page and view it, we see all the comments and so on. Therefore, all the data comes from a database. 

* The same applies to **eBay**. When we view a product, we can see its details right there: the title, the quantity sold, and the price. Additionally, we find the description and even the reviews on the same page.

However, all of this information comes from a database; they have to store this data. Then, anyone visiting this page can see this information.  
To summarize, a database is simply a place where we can store, manipulate, and retrieve data.

## PostgreSQL and Structured Query Language (SQL):

### PostgreSQL

**PostgreSQL** is an open-source relational database management system (RDBMS) that uses the SQL (Structured Query Language) for defining and manipulating data. It is known for its extensibility and compliance with SQL standards.  
**PostgreSQL** supports a wide range of data types, provides advanced features like indexing, transactions, and foreign keys, and is suitable for handling complex queries and large amounts of data. As an open-source database, *PostgreSQL* is widely used for various applications, including web development, data warehousing, and geographic information systems.

### Structured Query Language (SQL)

The **Structured Query Language (SQL)** allows us to work with databases and interact with it. *SQL* is the programming language which allows us to have commands like *SELECT*, *FROM* etc.

```sql
SELECT first_name FROM person
```

**SELECT**- Allows us to specify which columns to fetch.  
**FROM**- Allows us to specify from which tables to fetch data.

Here, **first_name** is the *Column name* and **person** is the *Table name*.

In contrast, **Structured Query Language (SQL)** is very powerful. It has been around for quite some time since 1974. And it has been widely used all over the internet.  And **SELECT** is the most common statement which is used and it allows us to retrieve information from a table.

Example of syntaxes that are used for **SELECT** statement:  
* **SELECT** *column_name* **FROM** *table_name*;  
* **SELECT** *c1* **FROM** *table_1*;  
* **SELECT** *title*, *description* **FROM** *film*;  
* **SELECT** *first_name*, *last_name* **FROM** customer;

If the **last_name** is written before the **first_name** then the column **last_name** will appear before the column **first_name**.

## How Data is stored?

* Data is stored in tables.  
* These tables are formed by two things:  
  * Columns  
  * Rows. 

### Example

A table called **PERSON** is given which contains the following columns:

![](/img/concepts/sql-concept/person-file.png)

These are the attributes of the table called **PERSON** as columns.  
That is, a person may have,
* **ID**,
* **First name**,
* **Last name**,
* **Gender**,
* **Age**.

And then the actual rows is the actual data inside of that table.

![](/img/concepts/sql-concept/first_name.png)

Here we can see that we have some rows and some columns. In this table we have **Elina** and **Johnson** which are under the **first_name** column and the **last_name** column, **gender** is female and **age** is 25, then we could have another row **Daniel Claire** and so on and so forth.

## Relational Database

**Relational Database** is a type of database that organizes data into tables, where each table consists of rows and columns. The relationship between tables is established through keys, allowing the efficient retrieval and management of data. The relational database management system **(RDBMS)** enforces the rules of normalization, ensuring data integrity and minimizing redundancy.  
**SQL** is commonly used to interact with relational databases, enabling users to query, insert, update, and delete data. The relational model provides a structured and organized approach to store and manage data, facilitating the development of robust and scalable applications. SQL allows us to manage data in a relational database. Relational database is simply a relation between one or more tables.

### Example

**Two type of tables like PERSON and CAR are given below:**

![](/img/concepts/sql-concept/person-car.png)

**Example of the Relational Database is given below by combining these two tables.**

![](/img/concepts/sql-concept/person-carid.png)

This is how data might be structured inside of a **Relational Database**. In this table those who have cars, the **car IDs** have been simply mentioned under their **car_ID** column. However, **Elina** and **Jack** do not have a car so their **car_ID** column is blank. This is what a relationship is made of.

## Graphical User Interface (GUI) Clients vs Terminal / CMD Clients

### Connecting to DB:

* **Open Postgres**
* **Preferences**
* **Check for Updates**
* **Quit**.

Our computer is serving as a computer server, that is, a database server. And basically anyone can connect to it and view the contents, modify content and perform all the operations supported by the database.  
* Now the very first way that we can connect to the database is by using a **GUI** client. And this is an application where it eases the way that we connect to the database. It makes easy in terms of performing, insert into the database, delete, view the data and have all these fancy UI elements that allows us to see databases in a much easier way.  
* The second way is by using the terminal or command line which is    the preferred choice.  
* The third way is by using an application. For example, we write a server side application where we connect our database and then we can perform data and return that data to our clients so that the client can make the data look nice on a screen or a mobile application.

## Create Table with Postgres (with constraints)

![](/img/concepts/sql-concept/postgres-table.png)

### Result

![](/img/concepts/sql-concept/result-table.png)

## Aggregate Functions

**SQL** provides a variety of *Aggregate Functions*. The main idea behind an *Aggregate Function* is to take multiple inputs and return a single output.

### Most Common Aggregate Functions 

* **AVG()** - Returns the average value.  
* **COUNT()** - Returns number of values / returns number of rows.  
* **MAX()** - Returns maximum value.  
* **MIN()** - Returns minimum value.  
* **SUM()** - Returns the sum of all values.

:::note

* **AVG()** returns a floating point value in many decimal places (e.g. 2.342418).  
* We can use **ROUND()** to specify precision after the decimal.  
* **COUNT()** simply returns the number of rows, which means by convention we just use **COUNT(*)**. 

:::

### Example

* **SELECT** **MIN** (replacement_cost) **FROM** film;

![](/img/concepts/sql-concept/min_cost.png)

> Minimum *replacement_cost* of the table has been shown.

* **SELECT** **MAX** (replacement_cost) **FROM** film;

![](/img/concepts/sql-concept/max-cost.png)

> Maximum *replacement_cost* of the table has been shown.

* **SELECT** **MAX** (replacement_cost), **MIN** (replacement_cost) **FROM** film;

![](/img/concepts/sql-concept/max-min.png)

> Here both the maximum and minimum *replacement_cost* of the table has been shown.

* **SELECT** **AVG** (replacement_cost) **FROM** film;

![](/img/concepts/sql-concept/avg-cost.png)

> Average *replacement_cost* of the table has been shown.

* **SELECT** round (**avg** (replacement_cost), 3) **FROM** film;

![](/img/concepts/sql-concept/round-cost.png)

> Here average *replacement_cost* has been shown where the value after the decimal is limited to 3.

* **SELECT** **SUM** (replacement_cost) **FROM** film;

![](/img/concepts/sql-concept/sum-cost.png)

The Sum of the *replacement_cost* of the table has been shown.

## Create a Table using UI:

* Click on the server:
     **>SERVER**  
* Then **PostgreSQL 14** will appear.  
* Click on the **>PostgreSQL 14**.  
* Under the **>PostgreSQL 14**, **Databases** option appears.

* Right click on the **Databases** option.    
* Then click on the **Create > Database** option.  
* **Create-Database**  page appears.

![](/img/concepts/sql-concept/create-database.png)

![](/img/concepts/sql-concept/database-option.png)

* Fill up the option **Database** to **The Database**.