---
id: actions-performance
title: Performance Actions
---

:::tip

- **Drivers**: requests(python)

:::

This category of actions are used to test the performance of an API endpoint.

## Examples of Performance actions

### 1. **Lorust performance test**
This action is used to configure parameters for load testing, enabling users to define the behavior and execution of load tests. It allows specifying critical settings such as the spawn rate (how quickly virtual users are generated), timeout (maximum duration to wait for actions), and the list of actions to perform during the test. By customizing these parameters, users can simulate different workloads on a system to evaluate its performance under various conditions. This action provides flexibility to create realistic load scenarios, making it a valuable tool for stress-testing applications and identifying potential performance bottlenecks.

### 2. **Lorust HTTP Request - GET**
The **Lorust HTTP Request - GET** action is used to perform an HTTP GET request to a specified URL. It sends a request to retrieve data or resources from the server and returns the response, which can include data, status codes, or headers. This action is commonly used for testing API endpoints, validating server responses, or fetching information. It is a straightforward method to verify the availability and functionality of a web resource.

### 3. **Lorust HTTP Request - POST with json**
The **Lorust HTTP Request - POST with JSON** action is used to send an HTTP POST request to a specified URL, including a JSON payload in the body of the request. This action is typically used for creating or updating resources on a server, as it sends structured data in JSON format to the server for processing. The response, which may include data, status codes, or headers, can be used to validate the operation's success. This action is particularly useful for testing APIs that require data input, such as submitting forms, creating records, or updating configurations.

### 4. **Lorust HTTP Request - POST with plain text**
The **Lorust HTTP Request - POST with Plain Text** action sends an HTTP POST request with a plain text payload to a specified URL. It is used when APIs or services require raw text input instead of structured formats like JSON. The request includes headers, such as `Content-Type: text/plain`, and the plain text message in the body. This action is suitable for submitting logs, plain messages, or unformatted data. The server's response, including status codes and returned data, can be captured and processed for validation.

### 5. **Lorust HTTP Request - POST GraphQL query**
The **Lorust HTTP Request - POST GraphQL query** action enables sending structured GraphQL queries or mutations to a specified API endpoint via an HTTP POST request. This action is useful for interacting with GraphQL APIs, allowing clients to request specific data or perform updates efficiently. It involves defining the GraphQL, endpoint URL, setting headers such as `Content - Type: application/json` and authentication tokens if required, and constructing a JSON payload containing the query or mutation string along with optional variables. The server's response, which may include the requested data or mutation results, can be captured and processed for validation or further use. This action is particularly beneficial for retrieving specific fields, fetching nested data, or executing precise updates in a GraphQL-based system.

### 6. **Load Test**
This action is designed to test the performance and load-handling capability of a web server by simulating multiple requests over a specific time period. It helps assess how well a server can manage high traffic and deliver reponses under stress. The action works by sending numerous requests to the target server, often increasing the request rate to reach a peak within a given time range. By analyzing the server's ability to handle the load and provide expected responses without significant delays or failures, this action provides insights into the server's reliability and performance under heavy usage. This testing is essential for ensuring that web applications can maintain optimal performance during peak traffic scenarios.

### 7. **Performance Action**
A **Performance Action** is a specific action or set of actions that are executed during a load test to simulate a particular type of user behavior or activity. The actions may include sending HTTP requests, interacting with UI elements, or performing database queries. The performance actions can be configured to run for a specified number of users or can extend the number of users periodically. The results of the performance actions are usually analyzed to identify performance bottlenecks or areas for improvement in the system under test.

### 8. **Lorust HTTP Request - DELETE**
In **Lorust**, an HTTP `DELETE` request is used to remove a specified resource from the server. For instance, a request such as `DELETE /users/123` would target and delete the user associated with the ID `123`. Upon successful deletion, the server typically responds with status codes like `200 OK` to indicate success with a response body, or `204 No Content` if no body is returned. If the deletion fails, error codes such as `404 Not Found`, indicating the resource does not exist, or `403 Forbidden`, indicating insufficient permissions, may be returned. In Lorust, this process is implemented by mapping the `DELETE` request to a specific route where the corresponding deletion logic, such as removing database entries or files, is executed.

### 9. **Lorust HTTP Request - HEAD**
In **Lorust**, an HTTP `HEAD` request is used to retrieve only the headers of a resource without the response body. For example, a request like `HEAD /documents/report.pdf` returns metadata such as the content type, size, or last modified date, allowing clients to check resource details without downloading it. The server responds similarly to a `GET` request but excludes the body, using status codes like `200 OK` if the resource exists, `404 Not Found` if it does not, or `403 Forbidden` if access is restricted. This method is commonly used to verify resource existence, check cache validity, or retrieve metadata efficiently. In Lorust, `HEAD` requests are typically routed like `GET` requests but configured to suppress the response body while returning the necessary headers.

### 10. **Lorust HTTP Request - POST with empty body**
In **Lorust**, an HTTP `POST` request with an empty body is used to send a request to the server without including data in the body. While `POST` requests typically involve submitting data, an empty body can still be valid when the server relies on the endpoint, headers, or query parameters to determine the intended action. For instance, a request like `POST /tasks/create` might trigger the creation of a default task based on server-side logic. The server processes such requests without requiring a payload, and if successful, responds with status codes like `200 OK` or `201 Created`. However, if additional data is required but missing, it may return errors such as `400 Bad Request`. In Lorust, this is achieved by setting up routes that execute specific logic without expecting a request body, enabling operations like initializing processes or returning default data.

### 11. **Lorust HTTP Request - POST with form URL encoded data**
In **Lorust**, an HTTP `POST` request with form URL-encoded data is used to submit key-value pairs to the server, typically from HTML forms. The data is encoded as a query string, with keys and values seperated by `=` and pairs joined by `&`, and the request includes a `Content-Type` header set to `application/x-www-form-urlencoded`. For instance, the body might contain `name=John&age=30`. The server decodes this data, extracts the key-value pairs, and processes them according to the application logic, such as storing them in a database or performing operations. If successful, the server responds with a status code like `200 OK`, or it may return an error like `400 Bad Request` if the data is invalid. In Lorust, routes can handle such requests by using extractors to parse the form data directly, enabling efficient handling of user input from web forms.

### 12. **Lorust HTTP Request - POST with form data**
In **Lorust**, an HTTP `POST` request with form data is used to submit structured information from a client to a server, often in the `multipart/form-data` format. This format is designed to handle various input types, such as text fields, files, and binary data, and is commonly used for form submissions. The client sends the request with the `Content-Type` header set to `multipart/form-data`, and the body contains the data structured in multiple parts. The server then parses the form data, extracting the fields and files, and processes them according to the application's logic, such as saving files or validating input. Upon success, the server typically responds with status codes like `200 OK` or `201 Created`, while errors such as invalid or missing fields may result in a `400 Bad Request` response. In Lorust, handling such requests involves using multipart form data extractors, which makes it possible to manage complex submissions like file uploads or multi-field forms.

### 13. **Lorust HTTP Request - POST with octet or binary stream**
In **Lorust**, an HTTP `POST` request with octet or binary stream data is used to transmit raw binary content, such as files, images, or other types of non-textual data, as the request body. The client sends the request with the `Content-Type` header set to `application/octet-stream`, indicating that the data is in its raw, unencoded format. The server then reads this binary stream, processes it accordingly-such as saving it to a file or database-and responds with status codes like `200 OK` or `201 Created` upon success. If the binary data is corrupted or incomplete, the server may return an error like `400 Bad Request`. In Lorust, handling such requests involves reading the binary data from the request body and using appropriate methods to process it, such as saving files or performing other operations on the raw content.

### 14. **Lorust HTTP Request - PUT**
In **Lorust**, an HTTP `PUT` request is used to update or create a resource at a specified URL. It is idempotent, meaning that repeated `PUT` requests with the same data will have the same effect as a single request. The client sends the `PUT` request with the data to replace the current resource or create a new one if it does not exist. The server processes the request by replacing the existing resource with the provided data or creating a new resource if necessary. Upon success, the server typically responds with a `200 OK` or `204 No Content` status code, while a `201 Created` status may indicate a new resource was created. Errors, such as invalid data, might lead to responses like 400 Bad Request or 422 Unprocessable Entity. In Lorust, a PUT request is handled by routing to a specific handler that processes the provided data, updating or creating the resource as required.







