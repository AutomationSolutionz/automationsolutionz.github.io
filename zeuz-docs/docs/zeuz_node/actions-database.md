---
id: actions-database
title: Database actions
---

import Link from '@docusaurus/Link';

:::tip

- **Drivers**: pyodbc(ODBC)

:::

These actions help you automate database systems easily and combine them with other categories of actions like <Link to="/docs/actions-rest-api">REST/API</Link> to validate data. You can compare and test between different database systems across multiple remote locations. 

## Examples of Database actions

### 1. Connect to DB
Defining a connection to a database is a preparatory step in systems like **Lorust** that sets up the necessary configuration for subsequent database operations. This action does not establish an immediate connection to the database but instead stores essential connection details, such as the database type, host, port, username, password, and database name. These details are referenced later to simplify and streamline database interactions, avoiding the need to redefine the connection repeatedly. The actual connection to the database occurs only when a specific operation, such as querying or updating data, is performed, reducing unnecessary overhead during initialization. By seperating the configuration step from the connection itself, this approach ensures efficient resource usage and supports flexibility in managing database interactions.

### 2. Delete from db
Performing an arbitrary delete query involves executing a custom SQL `DELETE` operation to remove records from a database based on specific criteria and storing the result, typically the number of rows affected, in a variable. This stored result can be used for validation, logging, or subsequent operations. For example, a query like `DELETE FROM users WHERE status = 'inactive'` might delete 10 rows, with the result captured in a variable for further use. This approach is useful for dynamic scenarios where deletion criteria are determined at runtime.

### 3. Insert into db
Performing an insert query to store values in a table and capturing its result in a variable involves executing an SQL `INSERT` operation to add new records to a database table and storing the outcome, such as the number of rows inserted or an auto-generated identifier. The user specifies an `INSERT` query, like `INSERT INTO users (name, email) VALUES ('John Doe', 'john@example.com'), which is executed against the database to add the specified values. The result of this operation is stored in a variable for further use, such as confirming the success of the insertion, referencing the inserted record, or triggering additional actions. This approach ensures the insertion process is efficient and its outcome is readily available for validation or subsequent logic.

### 4. Run Insert Update or Delete Query
The **insert, update, and delete query action** "non-query" operations on a database, such as `INSERT`, `UPDATE`, and `DELETE`, which modify the database state without returning rows of data. Instead, they provide a result indicating the number of rows affected, which can be stored in a variable for validation or further processing. For example, an `INSERT` query might return `1` to confirm one row was added, an `UPDATE` query might return `3` if three rows were modified, and a `DELETE` query might return `0` if no rows matched the condition. This return value is particularly useful for verifying the success of the operation, such as ensuring data was properly inserted, updated, or deleted. For instance, a `DELETE` query that returns `1` or more confirms successful removal of records. In a framework like **Lorust**, this type of query enables efficient validation of database changes without retrieving additional data.

### 5. Run Select Query
Performing an arbitrary `SELECT` query retrieves data from a database based on specified conditions and stores the result in a variable for further use. The query defines the table, columns, and filters, such as `SELECT * FROM users WHERE status = 'active'` Upon execution, the application fetches the matching data, which can include multiple rows or specific results, and stores it in a variable for processing, validation, or display. This approach is essential for dynamically accessing and utilizing database records in real-time operations.

### 6. Select from db
Performing an arbitrary `SELECT` query and storing its result in a variable involves executing a user-defined SQL `SELECT` statement to retrieve data from a database and capturing the returned data for subsequent use. This action allows the application to fetch specific records or data subsets based on the provided query conditions.

The query typically specifies the table, columns, and any filtering criteria, such as `SELECT name, email FROM users WHERE status = 'active'`. Upon execution, the database returns the requested data, which is then stored in a variable. This variable holds the result, whether it is a single row, multiple rows, or aggregated values, and makes it accessible for further operations like data validation, display, or additional computations. This method is especially useful in dynamic scenarios where the query conditions or returned data depend on runtime requirements.

### 7. Update into db
Performing an arbitrary `UPDATE` query and storing its result in a variable involves executing a user-defined SQL `UPDATE` statement to modify records in a database and capturing the outcome for validation or further use. This action updates specific fields in a table based on the conditions provided in the query.

The `UPDATE` query defines the target table, the fields to be updated, and any conditions to limit the scope, such as `UPDATE users SET status = 'inactive' WHERE last_login < '2023-01-01'`. Upon execution, the database processes the query and returns the number of rows affected, which is stored in a variable. This result can be used to confirm the success of the operation, log changes, or trigger additional logic. For example, if the query affects 5 rows, the variable stores this value, enabling validation that the intended updates occurred. This approach ensures precise and efficient modifications to database records.

### 8. Connect to Mongodb
Connecting to MongoDB establishes a connection between an application and a MongoDB server, allowing the application to perform various database operations such as reading, writing, updating, and deleting data. This connection is initiated using a connection string, which includes details like the server address, database name, and optional authentication credentials, for example, `mongodb://username:password@localhost:27017//database_name`. A MongoDB client or driver is used to initialize the connection, which then establishes communication with the database server. Once connected, the application obtains a session or client instance that facilitates operations on collections, enabling efficient and secure management of the database. This connection is a fundamental step for applications that need to interact with MongoDB for dynamic data processing.

### 9. Delete many into Mongodb
Performing an arbitrary delete action based on a query and storing its result in a variable involves executing a user-defined `DELETE` operation in a database to remove records that meet specific conditions and capturing the result for validation or further use.

The `DELETE` query specifies the target table and the conditions for identifying records to be removed, such as `DELETE FROM orders WHERE status = 'canceled'`. Once executed, the database removes the matching records and returns the number of rows affected. This result is then stored in a variable, allowing the application to verify the operation's success or use the value in subsequent processes. For example, if the query affects 3 rows, the variable holds the value `3`, confirming that the intended records were deleted. This action is particularly useful for scenarios requiring dynamic deletions and validation of the changes.

### 10. Delete one into Mongodb
The **delete one** action in MongoDB is used to remove a single document from a collection that matches a specified query. This operation ensures that only the first matching document is deleted, even if multiple documents satisfy the query conditions. The user provides a query, such as `{ "status": "inactive" }`, to identify the target document. Upon execution of the `deleteOne` method, MongoDB searches the collection for the first document matching the criteria and deletes it if found. If no matching document exists, no action is taken. The operation returns a result object that includes the number of documents deleted, typically `1` if successful. This result can be used for validation or logging. For example, a `deleteOne` query on a `users` collection with a status filter deletes the first inactive user and confirms the action by reporting the affected document count. This approach ensures controlled and efficient deletion of specific records.

### 11. Find from Mongodb
Performing a finding action and storing its result in a variable involves executing a query to retrieve documents from a database that match specified conditions and saving the result for further use. This action is essential for retrieving data dynamically based on application needs.

The query specifies the criteria for selecting records, such as `{ "status": "active" }`, and can also include options to limit the fields returned or sort the results. The database processes the query and returns all matching documents, which are stored in a variable. This variable acts as a container for the retrieved data and can hold a single record, multiple records, or an empty result set if no matches are found. The stored data can then be used for display, analysis, or additional operations. For instance, querying a `users` collection for active users might return a list of documents that is saved in a variable for rendering in an application or processing business logic. This action ensures efficient access to relevant data in real-time scenarios.

### 12. Find one from Mongodb
The `findOne` operation in MongoDB retrieves the first document from a collection that matches a specified query filter. It is efficient because it stops searching after after finding the first match, making it ideal when only one document is needed. The method accepts a query filter to define the search criteria and an optional projection to include or exclude specific fields in the result. For example, `db.users.findOne({ name: "John" })` fetches the first document where the `name` is `"John"`. Common use cases include fetching user profiles, retrieving configuration settings, or verifying the existence of a document.

### 13. Insert many into Mongodb
The `insertMany` operation in MongoDB allows multiple documents to be inserted into a collection in a single operation, making it efficient for batch processing. It accepts an array of documents to be inserted, and if any document lacks the `_id` field, MongoDB automatically assigns a unique identifier. By default, the insertion is ordered, meaning MongoDB stops at the first error encountered, but this behavior can be changed by setting the `ordered` option to `false`, allowing the process to continue despite errors. For instance, to add multiple users, `db.users.insertMany([{ name: "Alice", age: 25}, { name: "Bob", age: 30}])`can be used. This method is particularly useful for bulk loading data, adding multiple records efficiently, or initializing a database with predefined data. The `insertMany` operation reduces overhead and ensures all valid documents are inserted in one batch.

### 14. Insert one into Mongodb
The `insertOne` operation in MongoDB is used to insert a single document into a collection, making it ideal for adding one record at a time. If the document does not include the `_id` field, MongoDB automatically assigns a unique identifier. The method returns a result object containing the inserted document's `_id` for reference. For example, using `db.users.insertOne({ name: "John", age: 30})` adds a document to the `users` collection and generates an `_id` if not provided. This operation is commonly used for tasks like adding a new user profile, inserting product details, or creating entries during development and testing. The `insertOne` method ensures reliable insertion with minimal complexity.

### 15. Update many into Mongodb
The `updateMany` operation in MongoDB modifies multiple documents within a collection that match a specified filter, making it ideal for bulk updates. It requires a filter to identify target documents and an update parameter using operators like `$set`, `$inc`, or `$unset` to define the changes. For instance, `db.users.updateMany({ age: { $gt: 25} }, { $set: { status: "active"} })` updates all users whose age is greater than 25, setting their `status` field to `active`. This operation returns details about the number of matched and modified documents and supports options like `upsert` to insert a document if no matches are found. The `updateMany` method is an efficient way to apply changes to multiple documents in a single execution, making it valuable for tasks like bulk data updates or standardizing records.

### 16. Update one into Mongodb
The `updateOne` operation in MongoDB modifies a single document in a collection that matches a specified filter, making it ideal for precise updates. It updates only the first matching document, even if multiple documents meet the criteria. The operation requires a filter to identify the target document and an update parameter using operators like `$set`, `$inc`, or `$unset` to define the changes. For example, `db.users.updateOne({ age: { $gt: 25 } }, { $set: { status: "active" } })` updates the `status` field to `"active"` for the first user with an `age` greater than 25. It also returns information about whether a document was matched and modified and supports options like `upsert` to insert a document if no match is found. The `updateOne` method is efficient for targeted updates, making it suitable for tasks like updating specific user profiles or modifying single configuration settings.