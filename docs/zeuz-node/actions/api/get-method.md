---
id: get-method
title: GET Method
---

## Purpose
The "GET Method" action is used to send an HTTP GET request to a specified API endpoint and retrieve data. This action is useful for fetching data from a server, verifying API responses, and integrating backend data into automated test cases. The response data can be stored in a variable for further validation and processing.

---

## Scenarios

### Scenario 1

#### Title
Retrieve User List from API

Sample test case: [TEST-7893 Retrieve User List](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-7893/)

#### Scenario Overview
A tester needs to verify that the API returns a list of users when sending a GET request to the endpoint. This ensures that the API is functioning correctly and returning expected data.

#### Steps to Follow
1. Set the request URL.
2. Use the "GET Method" action to send the request.
3. Capture and validate the API response.
4. Verify that the response status code is `200` OK.
5. Validate the API response.

#### Actions

| Parameter     | Type               | Value        |
|---------------|--------------------|--------------|
| method        | element parameter  | get          |
| url           | element parameter  | https://fakerestapi.azurewebsites.net/api/v1/Users/10 |
| Content-Type  | headers            | application/json  |
| timeout       | optional parameter | 60                |
| wait for status code | optional parameter | 200        |
| save response  | rest action  | http_response          |

- GET Method.

#### Expected Result
- The API should return a valid JSON response containing a list of users.
- Ensure the response status code is `200 OK`.

#### Common Errors and Fixes
- **Error**: The response status code is not `200 OK`.
  - **Fix**: Ensure that the request URL is correct and the API server is accessible.

- **Error**: The response does not include the expected user data.
  - **Fix**: Verify the request parameters and check if the API has test data available.

---

### Scenario 2

#### Title
Retrieve a specific user from the API

Sample test case: [TEST-7781 Retrieve Single User](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-7781/)

#### Scenario Overview
A tester wants to verify that the API correctly returns user details when a GET request is made to the `/api/users/{id}` endpoint.

#### Steps to Follow
1. Set the request URL.
2. Use the "GET Method" action to send the request.
3. Capture and validate the API response.
4. Verify that the response status code is `200 OK`.
5. Validate the API response.

#### Actions

| Parameter     | Type               | Value                              |
|---------------|--------------------|------------------------------------|
| method        | element parameter  | get                                |
| url           | element parameter  | https://reqres.in/api/users?page=2 |
| Content-Type  | headers            | application/json                   |
| timeout       | optional parameter | 60                                 |
| wait for status code | optional parameter  | 200                        |
| save response        | rest action         | http_response              |

- GET Method.

#### Expected Result
- The API should return a valid JSON response containing a list of users.
- The response status code should be `200 OK`.
- The user ID in the response should match the requested ID.

#### Common Problems and Fixes
- **Error**: The response returns a `404 Not Found` status code.
  - **Fix**: Ensure that the requested user ID exists in the test data.

- **Error**: The response data fails to align with the expected results.
  - **Fix**: Validate the response schema against the API documentation.

## Additional Tips for this Action
- Always validate the response status code before processing the data.
- Use JSON schema validation to ensure response consistency.
- Log response data for debugging in case of unexpected failures.

### Error Handling for GET Method

#### Common Problems and Their Fixes
- **Problem**: The API request fails due to network issues.  
- **Possible Cause**: The issue may be caused by internet connectivity problems or server downtime.  
- **How to Fix**: Ensure a stable internet connection and verify the API status.


- **Problem**: The response format is unexpected.  
- **Possible Cause**: The issue may be caused by API changes or incorrect endpoint usage.  
- **How to Fix**: Check the API documentation and confirm the correct endpoint.


- **Problem**: The request resulted in an unauthorized access error (401).  
- **Possible Cause**: The API requires authentication.  
- **How to Fix**: Provide the necessary authentication headers if required.

---

### General Error Handling Tips
- Check the accessibility of the API endpoint before proceeding with tests.
- Log request and response data to aid in troubleshooting.

---

