---
id: actions-rest-api
title: REST/API actions
---

:::tip

- **Drivers**: requests(python)

:::


These actions are used to perform REST or API automation. You can combine loops,
conditionals, result manipulation (lists, dictionaries, ...), variables and even
actions of different platforms to create sophisticated test scenarios emulating
real world usage of APIs. As an example, you can call an API endpoint and store
the result in a variable, and then open a mobile app to get data from the UI to
match: UI data against the stored result, all in a single test case!

### Usage

All REST actions save the incoming response data into a variable named
`%|http_response|%`.

- You can use the [Variables and Indexed access](variables-and-indexed-access)
  syntax to access the nested data.
- You can use [Data Collector](data-collector) patterns to extract nested data
  without using a single loop or conditional actions.

## Examples of REST/API actions

### 1. **HTTP GET request**
This action in ZeuZ is used to retrieve and store the response from a GET request. This action requires the **URL** of the endpoint and any necessary **headers** (e.g., authentication tokens or content type). It is particularly useful for scenarios where the full response from the server needs to be captured for validation, further processing, or comparison within the test workflow. By saving the response, testers can ensure the correct data is returned from the API and use it effectively in subsequent test steps.

### 2. **HTTP POST request**
This action in ZeuZ sends a POST request to a server and captures the full response. To perform this action, users need to provide the **URL**, **headers**, and **body** of the request. The **body** can contain single or multiple parameters, while the **headers** may include items like authentication tokens or content types. This action is useful for verifying server responses to POST requests, capturing data for validation, or using the response in subsequent test steps. It ensures the server processes the provided data correctly and returns the expected results.

### 3. **HTTP DELETE request**
The **HTTP DELETE request** action in ZeuZ is used to send a DELETE request to a server, typically to remove a specified resource. This action requires **URL** of the resource and can include optional **headers** if additional information (e.g., authentication) is needed. The server processes the request and responds, indicating whether the resource was successfully deleted. This action is essential for testing APIs that support resource deletion, ensuring proper functionality and compliance with expected behavior.

### 4. **HTTP HEAD request**
The **HTTP HEAD request** action in ZeuZ sends a HEAD request to a server using the provided **URL** and optional **headers**. Unlike GET requests, a HEAD request retrieves only the headers of the response, without the body content. This is useful for checking metadata, such as content type, status codes, or caching information, without downloading the full content. It is commonly used to validate resource availability or verify server configurations efficiently.

### 5. **HTTP POST request with Plain Text body**
This action in ZeuZ is used to send a POST request to a server with the request body provided in plain text format. To use this action, users must input the **URL**, **headers**, and the **body** in plain text, formatted as `{'key1':'value1','key2':'value2'}`. This action sends the request and saves the server's full response for validation or further processing. Headers can include single or multiple entries, such as authentication tokens or content types, to meet the server's requirements. This action is particularly useful for testing APIs that accept plain text payloads.

### 6. **HTTP PUT request**
The **HTTP PUT request** action in ZeuZ sends a PUT request to a server to update or replace a resource at the specified **URL**. Users must provide the **URL**, **headers** (key-value pairs for authentication or content type), and the **body** (key-value pairs containing the data to be updated). The server's response is saved into a specified variable for validation or further use in the test workflow. This action is crucial for testing API endpoints that handle resource updates, ensuring they process the input data correctly and return the expected response.

### 7. **Save All Fields of Response**
This action in ZeuZ extracts multiple fields from a JSON response and saves them as variables for further use. For example, if the response is `{'name':'Canada','code':1}` and the action is set to save **'all'**, the fields **name** and **code** are stored as variables. These can later be accessed using `%|name|%` for "Canada" and `%|code|%` for "1". This action is useful for dynamically handling API responses, allowing testers to reuse specific data in subsequent test steps.

### 8. **Save response tuple into list**
This action in ZeuZ extracts a specified set of data from a REST API response and stores it as a list. This is particularly useful for handling arrays or repeating elements in the response. For example, if the response contains a list of items, this action can collect the desired data points and save them into a list variable for further processing or validation in subsequent steps. This ensures efficient management of bulk or grouped data during API testing.

### 9. **Search Field in JSON Object**
This action in ZeuZ is designed to search and extract specific data from a nested JSON response. For example, if the JSON structure is `{"a":{"b":{"c":{"username":"zeuzit"}}}}`, the function can locate the value of `username` by using the search query `a.b.c(username==zeuzit)`. This syntax traverses the JSON hierarchy  (`a -> b -> c`) and checks if the `username` field matches the value `zeuzit`. This action is useful for pinpointing specific data within complex JSON structures, enabling precise validation or data extraction in API responses.

### 10. **Bypass Action (Save All Field of Response into List)**
The **Bypass Action (Save All Field of Response into List)** in ZeuZ captures all the fields from a server response and saves them into a list for further use. This action processes the entire response and converts its fields into a list format, allowing testers to access and iterate through each field as needed. It is particularly useful when working with responses containing multiple entries or fields, enabling efficient handling of data during test automation workflows.

### 11. **Bypass Action (Save Single Field of Response into List)**
The **Bypass Action (Save Single Field of Response into List)** in ZeuZ extracts a specific field from a server response and saves all its values into a list. This action is useful when the response contains multiple entries for the same field (e.g., an array of objects with a common field like `id`), allowing testers to collect and use these values in subsequent test steps. By focusing on a single field, it simplifies handling large datasets in automated workflows.

### 12. **Bypass Action (Save Multiple Field of Response into List)**
The **Bypass Action (Save Multiple Field of Response into List)** in ZeuZ extracts specified fields from a server response and saves their values into seperate lists. This is useful for responses containing multiple data points where specific fields need to be grouped and stored for further processing. For example, if a response includes multiple objects with fields like `id` and `name`, this action can save all `id` values in one list and all `name` values in another. It streamlines data organization and supports efficient handling of complex API responses.

### 13. **Bypass Rest Action (Save Response and Cookie)**
This action in ZeuZ is a global action set at the beginning of a test case, designed to handle unexpected failures dynamically. If any action in the test case fails, this action is triggered to address the issue (e.g., dismissing random popups). Once executed, if it resolves the issue, the original failed action is retried. This feature is particularly useful for handling unpredictable scenarios, ensuring test continuity without manually coding exceptions or disruptions.

### 14. **Get Oauth2 Access Token URL**
This action in ZeuZ creates an access token URL using inputs like **Client ID**, **Client Secret**, **Access Point**, **Grant Type**, **Base URI**, **Request Token URI**, **Redirect URI**, and **Token Name**. These parameters are essential for OAuth-based authentication. The action constructs the URL and returns `"passed"` if successful or `"zeuz_failed"` if it encounters an issue. This is useful for automating authentication flows and ensuring correct token URL generation for API testing.

### 15. **HTTP POST File Upload**
This action in ZeuZ enables uploading one or more files to a server via an HTTP POST request. The **Content-Type** header is automatically set to **multipart/form-data**, ensuring proper handling of file uploads.

Users provide the **URL**, **headers** (optional, for authentication or additional metadata), and the **body**, which includes the file(s) to be uploaded. The action sends the POST request and captures the server's response for further processing or validation. This action is ideal for testing file upload functionality in APIs while ensuring accurate response handling.

### 16. **If Response Value Equal to Text**
This action in ZeuZ verifies whether a specified key-value pair exists in a given JSON response. For example, in the JSON `{'name':'Canada', 'code':1}`, if the condition **'name==Canada'** is checked, the action will return **"pass"** because the key `name` with the value `Canada` exists in the JSON. This action is useful for validating specific data points within JSON responses, ensuring they contain the expected information.

### 17. **If Response Value Equal to Variable**
This action checks if a specific key-value pair exists in a JSON object and validates its value against a variable. For example, given `{'name': 'Canada', 'code': 1}` and a variable `country = 'Canada'`, the action first verifies if the key `'name'` exists in the JSON. If it does, it compares the value of `'name'` (`'Canada'`) with the variable `country`. If they match, the result is **pass**; otherwise, it fails. This is commonly used in test automation to ensure a JSON response contains expected data.

### 18. **If Response Value Not Equal to Text**
This action checks if a specific key-value pair does not exist in a JSON object. For example, given `{'name': 'Canada', 'code': 1}` and the condition `'name != South Africa'`, it first verifies if the key `'name'` exists. Since it does, it compares its value (`'Canada'`) with `'South Africa'`. As the values do not match, the condition is satisfied, and the result is **pass**. This is useful for ensuring that a JSON does not contain specific data.

### 19. **If Response Value Not Equal to Variable**
This action verifies that a specific key-value pair in a JSON object does not  match a given variable's value. For example, given the JSON `{'name': 'Canada', 'code': 1}` and the condition `name != %|country|%`, where the variable `country = 'South Africa'`, the process first checks if the key `name` exists. Since it does, it compares the value `'Canada'` with `'South Africa'`. As they are not equal, the condition is satisfied, resulting in a **pass**. This is useful in testing to ensure a key either holds an unexpected value or does not match a specific dynamic variable.

### 20. **Random String - Default**
This action generates a random string with a fixed length of 10 characters, ensuring that the string includes a combination of the following charater types:
1. **Numbers**: Digits from 0-9.
2. **Uppercase Letters**: Alphabetic characters from A-Z.
3. **Lowercase Letters**: Alphabetic characters from a-z.
4. **Special Characters**: Symbols like `@`, `#`, `$`, `%`, etc.  

The purpose of this action is typically to create a string that is both random and complex, suitable for scenarios like generating secure passwords, tokens, or unique identifiers. By including all these character types, the string meets common security or formatting requirements for systems that demand diverse character sets to enhance strength and reduce predictability.

### 21. **Random String - Specific Type**
This action generates a random string of length 10 based on a specified **string type** parameter. The parameter defines the character sets to include: `'n'` for numbers, `'u'` for uppercase letters, `'l'` for lowercase letters, and `'c'` for special characters. For example, `%|random_string('n')|%` generates a string with numbers only (e.g., `1234567890`), `%|random_string('nlu')|%` includes numbers, uppercase, and lowercase letters (e.g., `A1b2C3d4`), and `%|random_string('nluc')|%` includes all types, adding special characters (e.g., `A1b!C@d#`). This is useful for creating PINs, identifiers, or secure passwords.

### 22. **Random String - Specific Type & Length**
This action generates a random string of a specified length based on a given **string type**. The string type defines the character sets: `'n'` for numbers, `'u'` for uppercase letters, `'l'` for lowercase letters, and `'c'` for special characters. The length of the string is also specified as a parameter. For example, `%|random_string('n', 5)|%` generates a 5-character string of numbers, `%|random_string('nlu', 10)|%` generates 10-charcter string with numbers, uppercase, and lowercase letters, and `%|random_string('nluc', 15)|%` generates a 15-character string with all character types. This is useful for PINs, passwords, or unique identifiers.

### 23. **Save All Field of Response into List**
This action saves all fields from a REST API response into a list (named `list1`), allowing later access. It extracts all key-value pairs from the response, regardless of type, and stores them in the list. For example, a response like `{"name": "John", "age": "30", "city": "New York"}` would have its fields stored as `name: John`, `age: 30`, and `city: New York` in `list1`. This allows the fields to be easily accessed or referenced later in the test or automation process.

### 24. **Save All Same Name Field of Response into List**
This action extracts fields with the same name from a response JSON and saves them into a list for later use. For example, given a response like `[{ 'name': 'America', 'code': 1 }, { 'name': 'Canada', 'code': 2}]`, you can save all `"name"` fields by calling the action with parameters like `list:all_name, name-all`. This will store the values `'America'` and `'Canada'` into the list `all_name`, resulting in `['America', 'Canada']`. The list can then be iterated with a loop for further processing or validation.

### 25. **Save Multiple Field of Response**
This action saves multiple fields from a response JSON into variables for later use. For example, given the response `{'name': 'Canada', 'code': 1}`, the fields `"name"` and `"code"` are saved as variables. These values can then be accessed later using `%|name|%` (which will return `'Canada'`) and `%|code|%` (which will return `1`). This allows for easy retrieval and use of specific values from the response during testing or automation.

### 26. **Save Multiple Field of Response into List**
This action saves multiple fields from a REST API response into a list (named `list1`), making them accessible for later use. For example, if the response contains fields like `"name": "Canada"`, `"Code": 1`, and `"capital": "Ottawa"`, their values will be stored in `list1`. This allows for easy access to the data later in the test or automation process for further operations such as validation or manipulation.

### 27. **Save Multiple Fields of Response into List or Tuples**
This action extracts specific fields from a JSON response, including those at various depths, and organizes the data into a nested list structure (tuple). For example, given a JSON response like `{"continent": "North America", "countries": [{"name": "Canada", "code": "CA"}, {"name": "USA", "code": "US"}]}`, this action can extract fields such as `"name"`, and `"code"` to form a tuple like `[["Canada", "CA"], ["USA", "US]]`. This is useful for managing complex or hierarchial JSON outputs from REST, GraphQL, or other APIs, enabling structured handling of data across different levels.

### 28. **Save No Field of Response**
This action bypasses the parsing of a REST API response and directly saves the entire response content into a variable named `%|rest_response|%`. The saved variable contains the raw response, which can then be accessed or processed as needed. This is useful when the response does not require immediate parsing, or when further custom handling, validation, or processing is required on the full response. For example, if the response is a raw JSON or text, it is stored exactly as received, allowing flexibility in its usage later.

### 29. **Save Response and Cookie**
This action performs all the functionalities of saving a REST response, with the additional capability of saving cookies received from the REST call. If the response includes cookies like `{'id': 'abcd', 'key': '1234'}`, these fields are stored as shared variables. Once saved, the cookie values can be accessed later using `%|id|%` (which will return `'abcd'`) and `%|key|%` (which will return `'1234'`). This is particularly useful for maintaining session data or authentication information between REST calls, enabling seamless use of cookies in subsequent requests or actions.

### 30. **Save Same Name Field of Response According to Index**
This action extracts fields with the same name from a JSON response and saves each instance as a uniquely named variable. For example, given a response like `[{'name': 'America', 'code': 1}, {'name': 'Canada', 'code': 2}]`, the `"name"` fields are saved as `name-1` and `name-2` with values `'America'` and `'Canada'`. These variables can later be accessed using `%|name-1|%` and `%|name-2|%`. This is useful for handling repeated fields in a response while ensuring each instance is uniquely identifiable.

### 31. **Save Single Field of Response**
This action extracts a single field from a JSON response and saves it into a variable for future use. For instance, if the response is `{'name': 'Canada', 'code': 1}` and the field `"name"` is saved, its value (`'Canada'`) is stored in a variable named `name`. This variable can then be accessed later using `%|name|%`. This action is particularly useful for isolating specific fields from a response to use in subsequent operations, such as validations or as inputs for other actions.

### 32. **Save Single Field of Response into List**
This action extracts a single field from a REST API response and saves its values into a list, making them accessible for later use. If the response contains multiple objects with the same field, the action collects all the values of that field and stores them as elements in a specified list, such as `list1`. For instance, if the response is `[{'name': 'Canada', 'code': 1}, {'name': 'USA', 'code': 2}]` and the `"name"` field is selected, the values `'Canada'` and `'USA'` are saved in `list1` as `['Canada', 'USA']`. This list can then be used in subsequent operations like iteration, validation, or data manipulation, enabling efficient handling of repeated fields in a response.

### 33. **Save text by id**
This action provides a method to save a text string based on the user's specific requirements. The user defines the content of the string and how it should be saved, allowing flexibility in storing any desired text as a variable for later use. For example, a user can specify a text like "Welcome to ZeuZ" and save it under a variable name such as `greeting`. The saved string can then be accessed or referenced in subsequent steps using the variable. This action is useful for storing custom messages, dynamic data, or text required for validations or other operations during testing or automation processes.

### 34. **Search Field with "(" in a JSON Object**
This action simplifies parsing JSON structures with special characters like parentheses by replacing them with double square brackets `[[` and `]]`. For example, in a JSON containing `{'username': 'hola(zeuzit)'}`, instead of searching with `a.b.c.(username == hola(zeuzit))`, the query is written as `a.b.c.(username == hola[[zeuzit]])`. The action replaces `[[` with `(` and `]]` with `)` during processing, ensuring smooth handling of complex JSON queries without syntax issues.

### 35. **Search Multiple Field of a JSON Object**
This action facilitates the retrieval of multiple fields from a JSON object by allowing users to search for and extract specific keys and their values in a single operation. For instance, given a JSON object like `{"name": "Canada", "code": 1, "capital": "Ottawa"}`, a user can search for the fields `"name"` and `"capital"` to retrieve their respective values, `"Canada"` and `"Ottawa"`. This simplifies handling JSON responses with multiple fields, enabling efficient data extraction for validation, processing, or other operations without requiring multiple seperate queries.

### 36. **Wait for item to appear**
This action introduces a wait period to allow a specific event or action to occur within a defined duration. For example, if an element with `id: 2` is expected to appear on a page, the action will wait for up to 10 seconds for the element to be located. During this period, the system continuously checks for the element's presence. If the element is found within the specified time, the process proceeds; otherwise, it times out. This is useful for handling dynamic scenarios, such as waiting for UI elements to load or specific conditions to be met before continuing execution.

### 37. **Wait for item to disappear**
This action waits for a specified element to disappear within a given time frame. For instance, if the action is set to wait for `target_element` to disappear for up to 10 seconds, it continuously checks for the element's presence during this duration. If the element disappears within the allotted time, the step is considered successful. If the element remains visible after the time expires, the step fails. This is particularly useful in scenarios where an element's removal signals the completion of a process, such as a loading spinner disappearing after data has loaded.

### 38. **Wait for status code**
This action performs an HTTP request and continuously checks for a specified status code in the response. ZeuZ Node retries the request every 2 seconds for up to 2 minutes. If the expected status code appears within this period, the step passes; otherwise, it fails. This is particularly useful for testing APIs or systems where the desired response status might take some time to be available, such as waiting for a server to process a request or complete an operation.