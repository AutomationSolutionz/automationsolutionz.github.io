---
id: put-request
title: HTTP PUT Request
---

## Purpose
The "PUT Request" action is used to send an HTTP PUT request to a specified API endpoint to update resource data. This action is useful for modifying data on the server, verifying that updates are applied correctly, and integrating backend data changes into automated test cases. The response data is typically validated to confirm that the changes were successful, often including an "updatedAt" timestamp.

---

## Scenarios

### Scenario 1

#### Title
Update user details with complete data

Sample test case: [TEST-8153 Update user details with complete data](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8153/)

#### Scenario Overview
A tester needs to update an existing user's complete details (e.g., name and job title) by sending a PUT request. This scenario verifies that the API processes the full update correctly and returns a valid response containing the updated data along with an `updatedAt` timestamp.

#### Steps to Follow
1. Set the request URL.
2. Use the "PUT Request" action to send the updated user data.
3. Capture and validate the API response.
4. Verify that the response status code is `200 OK`.
5. Validate that the response contains the updated fields and an `updatedAt` timestamp.

#### Actions

| Parameter     | Type              | Value         |
|---------------|-------------------|---------------|
| method        | element parameter | put           |
| url           | element parameter | https://fakerestapi.azurewebsites.net/api/v1/Authors/2  |
| Content-Type  | headers           | application/json |
| plain text    | body              | { "idBook": 520,"firstName": "Zorox","lastName": "Tost" } |
| timeout       | optional parameter | 60            |
| save response | rest action        | http_response |

- PUT Request.

#### Expected Result
- The API must return a valid JSON response containing the updated user details.
- The response status code should be `200 OK`.
- The response should include an `updatedAt` timestamp along with the new `name` and `job` values.

#### Common Errors and Fixes
- **Error**: The response status code is not `200 OK`.
  - **Fix**: Ensure that the request URL is correct and that the API server is accessible.

- **Error**: The response does not include the expected updated fields.
  - **Fix**: Verify that the request body is formatted correctly, and review the API documentation for the expected response schema.

---

### Scenario 2

#### Title
Update user details with partial data

Sample test case: [TEST-7792 Update user details with partial data](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-7792/)

#### Scenario Overview
A tester wants to update only specific fields of a user's data using a PUT request. This scenario ensures that the API handles partial updates correctly and returns a confirmation response with an `updatedAt` timestamp.

#### Steps to Follow
1. Set the request URL.
2. Use the "PUT Request" action to send the partial update data.
3. Capture and validate the API response.
4. Verify that the response status code is `200 OK`.
5. Validate that the response includes the updated field(s) and an `updatedAt` timestamp.

#### Actions

| Parameter     | Type               | Value                          |
|---------------|--------------------|--------------------------------|
| method        | element parameter  | put                            |
| url           | element parameter  | https://reqres.in/api/users/2  |
| Content-Type  | headers            | application/json               |
| plain text    | body               | { "name": "morpheus edword" }  |
| timeout       | optional parameter | 60                             |
| wait for status code | optional parameter | 200                     |
| save response | rest action | none        |

- PUT Request.

#### Expected Result
- The API should return a valid JSON response containing the updated user details.
- The response status code should be `200 OK`.
- The response should include the updated field (in this case, `name`) and a valid `updatedAt` timestamp.

#### Common Errors and Fixes
- **Error**: The response does not include the updated `name` field.
  - **Fix**: Confirm that the request body is correctly structured and that the API endpoint supports partial updates.

- **Error**: The response status code is not `200 OK`.
  - **Fix**: Verify that the API endpoint is correct, and check for any network issues.

---

## Additional Tips for this Action
- Validate the JSON payload before sending the PUT request to ensure that it meets the API's schema requirements.
- Always verify that the endpoint URL includes the correct resource identifier.
- Log the response data to assist with troubleshooting in case of unexpected failures.

### Error Handling for PUT Request

#### Common Problems and Their Fixes
- **Problem**: The API request fails due to network issues.  
- **Possible Cause**: Internet connectivity problems or server downtime may cause the issue.  
- **How to Fix**: Ensure a stable internet connection, and verify that the API server is online.


- **Problem**: The response format is unexpected.  
- **Possible Cause**: API changes or incorrect endpoint usage may cause this issue.  
- **How to Fix**: Review the API documentation, and confirm that the correct endpoint and request payload are being used.


- **Problem**: Unauthorized access error (`401`).  
- **Possible Cause**: The API requires authentication, but the necessary headers or tokens were not provided.  
- **How to Fix**: Include the required authentication headers or tokens as specified in the API documentation.

---

### General Error Handling Tips
- Ensure that the API endpoint is accessible before running tests.
- Log both the request and response data to assist with troubleshooting.
- Validate the JSON payload's syntax and structure before sending the request.

---