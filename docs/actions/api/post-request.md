---
id: post-request
title: HTTP POST Request
---

## Purpose
The "POST Request" action is used to send an HTTP POST request to a specified API endpoint to create a new resource on the server. This action is valuable for adding new data, verifying successful resource creation, and integrating backend data creation into automated test cases. The response data is typically validated to confirm the creation was successful, often including a unique "id" and a "createdAt" timestamp.

---

## Scenarios

### Scenario 1

#### Title
Create a new user with complete data

Sample test case: [TEST-7846 Create a new user with complete data](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-7846/)

#### Scenario Overview
A tester needs to create a new user by sending a POST request with complete details (e.g., name and job title). This scenario verifies that the API processes the creation correctly and returns a valid response containing the data of the newly created resource along with a "createdAt" timestamp.

#### Steps to Follow
1. Set the request URL.
2. Use the "POST Request" action to send the creation data.
3. Capture the API response.
4. Verify that the response status code is `201 Created`.
5. Validate that the response contains the newly created fields, an `id`, and a `createdAt` timestamp.

#### Actions

| Parameter        | Type               | Value         |
|------------------|--------------------|---------------|
| method           | element parameter  | post          |
| url              | element parameter  | https://fakerestapi.azurewebsites.net/api/v1/Authors              |
| Content-Type     | headers            | application/json  |
| plain text       | body               | {"id": 10,"idBook": 5255,"firstName": "John","lastName": "Botha"} |
| timeout          | optional parameter  | 60               |
| wait for status code  | optional parameter  | 201         |
| save response         | rest action         | http_response |

- POST Request.

#### Expected Result
- The API must return a valid JSON response with the newly created user's details.
- The response status code should be `201 Created`.
- The response should include a unique `id`, the submitted fields, and a `createdAt` timestamp.

#### Common Errors and Fixes
- **Error**: The response status code is not `201 Created`.
  - **Fix**: Ensure that the request URL points to the correct collection endpoint (not a specific resource) and that the server is operational.

- **Error**: The response does not include the expected fields or `id`.
  - **Fix**: Verify that the request body matches the API's expected schema, and check the API documentation for the response structure.

---

### Scenario 2

#### Title
Create a new user with minimal data

Sample test case: [TEST-7787 Create a new user with minimal data](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-7787/)

#### Scenario Overview
A tester wants to create a new user by providing only the required fields in a POST request. This scenario ensures that the API handles minimal data submissions correctly and returns a confirmation response with a `createdAt` timestamp.

#### Steps to Follow
1. Set the request URL.
2. Use the "POST Request" action to send the minimal creation data.
3. Capture the API response.
4. Verify that the response status code is `201 Created`.
5. Validate that the response includes the submitted field(s), an `id`, and a `createdAt` timestamp.

#### Actions

| Parameter     | Type               | Value          |
|---------------|--------------------|----------------|
| method        | element parameter  | post           |
| url           | element parameter  | https://reqres.in/api/users          |
| Content-Type  | headers            | application/json |
| plain text    | body               | {"name": "morpheus","job": "leader"} |
| timeout       | optional parameter | 60               |
| wait for status code | optional parameter | 201       |
| save response  | rest action  | none          |

- POST Request.

#### Expected Result
- The API should return a valid JSON response containing the details of the newly created user.
- The response status code should be `201 Created`.
- The response should include the submitted field (e.g., `name`), a unique `id`, and a `createdAt` timestamp.

#### Common Errors and Fixes
- **Error**: The response does not include the `id` or `createdAt` timestamp.
  - **Fix**: Confirm that the API endpoint supports resource creation and returns the expected metadata.

- **Error**: The response status code is `400 Bad Request`.
  - **Fix**: Ensure that the request body contains all required fields as specified in the API documentation.

---

## Additional Tips for this Action
- Double-check that the endpoint URL is correct for creating resources, typically a collection endpoint (e.g., `/users` instead of `/users/1`).
- Validate your JSON payload to ensure that all required fields are included before sending the POST request.
- Save the `id` from the response for use in subsequent test steps, such as GET or PUT requests.

### Error Handling for POST Request

#### Common Problems and Their Fixes
- **Problem**: The API request fails due to an invalid payload.  
- **Possible Cause**: Missing required fields or incorrect JSON syntax.  
- **How to Fix**: Validate the request body against the API's schema and ensure proper JSON formatting.


- **Problem**: Duplicate resource error (HTTP 409 Conflict).  
- **Possible Cause**: The API enforces uniqueness constraints and rejects requests with data conflicts with existing resources.  
- **How to Fix**: Check the API documentation for uniqueness requirements and adjust the request data accordingly.


- **Problem**: Unauthorized access error (`401`).  
- **Possible Cause**: The authentication credentials or tokens are missing or invalid.  
- **How to Fix**: Include the necessary authentication headers or tokens as required by the API.

---

### General Error Handling Tips
- Test the API endpoint manually (e.g., using Postman) to confirm that it works as expected before automating.
- Log both the request payload and response data for easier debugging.
- Handle rate limits by implementing appropriate timeouts or retry mechanisms if the API enforces them.

---