---
id: post-request
title: HTTP POST Request
---

## Purpose
The "POST Request" action is used to send an HTTP POST request to a specified API endpoint to create a new resource on the server. This action is valuable for adding new data, verifying successful resource creation, and integrating backend data creation into automated test cases. The response data is typically validated to confirm the creation was successful, often including a unique `id` and a `createdAt` timestamp.

---

## Scenarios

### Scenario 1

#### Title
Create a New Book with Complete Data

Sample test case: [TEST-8184 Create a New Book with Complete Data](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8184/)

#### Scenario Overview
A tester needs to add a new book by sending a POST request containing all available book fields (e.g., `id`, `title`, `description`, `pageCount`, `excerpt`, and `publishDate`). This scenario verifies that the API correctly processes the complete payload and returns the created resource along with a `createdAt` timestamp.

#### Steps to Follow
1. Set the request URL to the Books endpoint.
2. Use the "POST Request" action to submit the complete book data.
3. Capture the API response.
4. Verify that the response status code is `200` Created.
5. Validate that the response JSON contains all submitted fields, a unique `id`, and a `createdAt` timestamp.

#### Actions

| Parameter        | Type               | Value         |
|------------------|--------------------|---------------|
| method           | element parameter  | post          |
| url              | element parameter  | https://fakerestapi.azurewebsites.net/api/v1/Books              |
| Content-Type     | headers            | application/json  |
| plain text       | body               | `{"id": 20, "title": "Automation in Practice", "description": "Comprehensive guide to API testing.", "pageCount": 350, "excerpt": "An excerpt from the book.", "publishDate": "2025-05-01T00:00:00Z"}` |
| timeout          | optional parameter  | 60               |
| save response         | rest action         | all         |

- POST Request.

#### Expected Result
- The API returns a JSON object that includes:
  - `id`: 20
  - `title`, `description`, `pageCount`, `excerpt`, `publishDate` matching the request
  - A `createdAt` timestamp indicating when the book was created.
- The HTTP status code is `200` Created.

#### Common Errors and Fixes
- **Error**: The response status code is not `200` Created.
  - **Fix**: Confirm the Books endpoint URL and ensure that the server is running.

- **Error**: One or more of the submitted fields are missing in the response.
  - **Fix**: Check the request body schema against the API documentation and ensure the JSON formatting is correct.

---

### Scenario 2

#### Title
Create a New Book with the Minimal Required Data

Sample test case: [TEST-8185 Create a New Book with the Minimal Required Data](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8185/)

#### Scenario Overview
A tester sends only the minimally required book fields (e.g., `title` and `pageCount`) to the POST endpoint. This scenario ensures that the API accepts partial submissions and still creates a resource with default or null values for unspecified fields, returning the necessary metadata.

#### Steps to Follow
1. Set the request URL to the Books endpoint.
2. Use the "POST Request" action to send the minimal book data.
3. Capture the API response.
4. Verify that the response status code is `200` Created.
5. Check that the response includes the submitted field(s), an `id`, and a `createdAt` timestamp.

#### Actions

| Parameter     | Type               | Value          |
|---------------|--------------------|----------------|
| method        | element parameter  | post           |
| url           | element parameter  | https://fakerestapi.azurewebsites.net/api/v1/Books        |
| Content-Type  | headers            | application/json |
| plain text    | body               | `{"title": "Quick Guide to REST", "pageCount": 120}` |
| timeout       | optional parameter | 60               |
| wait for status code | optional parameter | 200     |
| save response  | rest action  | all          |

- POST Request.

#### Expected Result
- The API returns a JSON object that contains:
  - `title`: "Quick Guide to REST"
  - `pageCount`: 120
  - A generated `id`
  - A `createdAt` timestamp
  - Other fields (`description`, `excerpt`, `publishDate`) may appear as null or with default values.
- The HTTP status code is `200` Created.


#### Common Errors and Fixes
- **Error**: HTTP 400 Bad Request.
  - **Fix**: Verify which fields are optional by reviewing the Books POST schema in the API documentation.

- **Error**: Missing `createdAt` in the response.
  - **Fix**: Check the server implementation to ensure it correctly populates the creation timestamp.

---

## Additional Tips for this Action
- Double-check that the endpoint URL is correct for creating resources, typically a collection endpoint (e.g., `/Books` instead of `/Books/1`).
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