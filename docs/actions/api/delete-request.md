---
id: delete-request
title: DELETE Request
---

## Purpose
The "DELETE Request" action is used to send an HTTP DELETE request to a specified API endpoint to remove a resource from the server. This action is useful for verifying that deletion operations are correctly processed and ensuring the resource is no longer available after deletion. The response data is typically validated to confirm that the deletion was successful, often returning a confirmation message or status.

---

## Scenarios

### Scenario 1

#### Title
Delete a User Resource

Sample test case: [TEST-7799 Delete Request](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-7799/)

#### Scenario Overview
A tester needs to remove an existing user task by sending a DELETE request. This scenario verifies that the API successfully deletes the resource and returns an appropriate response.

#### Steps to Follow
1. Specify the target URL for the request.
2. Use the "DELETE Request" action to send the request.
3. Capture the API response.
4. Verify that the response status code is `204` No Content or `200` OK.
5. Validate that the resource is no longer accessible.

#### Actions

| Parameter            | Type               | Value                                 |
| -------------------- | ------------------ | ------------------------------------- |
| method               | element parameter  | delete                               |
| url                  | element parameter  | https://reqres.in/api/users/2       |
| timeout              | optional parameter | 60                                   |
| wait for status code | optional parameter | 204                                  |
| save response        | rest action        | http_response                        |

- DELETE Request.

#### Expected Result
- The API must return a `204 No Content` or `200 OK` status code.
- The response body must be either empty or contain a confirmation message.
- A subsequent GET request to the deleted resource must return a `404 Not Found` status.

#### Common Errors and Fixes
- **Error**: The response status code is not `204` No Content or `200` OK.
  - **Fix**: Ensure the request URL is valid and the target resource exists before sending the deletion request.

- **Error**: The resource remains accessible after the deletion request.
  - **Fix**: Verify that the DELETE request was properly executed and check the API documentation for any soft-delete behaviors.

---

### Scenario 2

#### Title
Attempt to delete an activity

Sample test case: [TEST-7842 Delete Request](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-7842/)

#### Scenario Overview
A tester attempts to delete a resource. This scenario verifies that the API correctly processes the deletion request and returns an appropriate response.

#### Steps to Follow
1. Set the request URL for the authors endpoint.
2. Use the "DELETE Request" action to send the deletion request.
3. Capture and validate the API response.
4. Verify that the response status code is either `200` OK or `204` No Content.

#### Actions

| Parameter            | Type               | Value                                 |
| -------------------- | ------------------ | ------------------------------------- |
| method               | element parameter  | delete                               |
| url                  | element parameter  | https://fakerestapi.azurewebsites.net/api/v1/Activities/30    |
| timeout              | optional parameter | 60                                   |
| wait for status code | optional parameter | 204                                  |
| save response        | rest action        | http_response                        |

- DELETE Request.

#### Expected Result
- The API must return either a `200` OK or `204` No Content status code upon successful resource deletion.

#### Common Errors and Fixes
- **Error**: The API returns a `200 OK` response for a non-existent resource.
  - **Fix**: Verify with the API documentation if deletion operations on missing resources still return a success status code.

- **Error**: Unexpected error response.
  - **Fix**: Confirm that the API endpoint URL is accurate and the request method is correctly configured.

---

## Additional Tips for this Action
- Ensure the resource exists before sending a DELETE request to avoid unnecessary API calls.
- Validate the response status code to confirm successful resource deletion.
- Perform a GET request after deletion to verify that the resource is no longer available.

---

### Error Handling for DELETE Request

#### Common Problems and Their Fixes
- **Problem**: API request fails due to network issues.  
- **Possible Cause**: Internet connectivity problems or server downtime.  
- **How to Fix**: Ensure a stable internet connection and verify that the API server is online.


- **Problem**: The resource is not deleted even after receiving a `200 OK` response.  
- **Possible Cause**: The API might implement soft deletes instead of permanent removal.  
- **How to Fix**: Review the API documentation to determine the deletion behavior and verify if additional steps are needed.


- **Problem**: Unauthorized access error (HTTP 401 Unauthorized).  
- **Possible Cause**: The API requires authentication, but the request lacks valid headers or tokens.  
- **How to Fix**: Include the required authentication headers or tokens as specified in the API documentation.

---

### General Error Handling Tips
- Verify the API endpoint is available and responsive before executing tests.
- Log both request and response data to assist with troubleshooting.
- Validate the request URL and method before sending the DELETE request.



