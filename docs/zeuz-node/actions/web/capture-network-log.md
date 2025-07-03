---
id: capture-network-log
title: Capture Network Log
---

Captures and filters network activity, such as API requests and responses from a Chromium-based browser using Selenium with performance logging enabled.

---

## Purpose
It is used to monitor, capture, and optionally filter HTTP traffic from the browser during automation runs. It is particularly useful for validating API calls, response statuses, methods, and domains within a test step.

---

## Action Type
- **Action Name**: `capture network log`
- **Action Category**: `selenium action`
- **Modes**: `start`, `stop`.

---

## Description
This action operates in two phases:
1. **Start Phase (`start`)**: Initializes and starts listening to the browser's network activity.

2. **Stop Phase (`stop`)**: Collects, filters, and optionally saves the captured network logs for validation or debugging purposes.

Captured logs include:  
- URL
- Status Code
- Request Method
- MIME Type
- Resource Type
- Timestamp
- Response Body (if specified).

---

## Supported Fields

| Field Name             | Sub Field       | Type                     | Description                                                      |
| ---------------------- | --------------- | ------------------------ | ---------------------------------------------------------------- |
| capture network log    | selenium action | start/stop               | Marks the beginning or end of network logging.                   |
| save                   | input parameter | variable name            | Shared variable to save the collected API logs.                  |
| filter domain          | input parameter | string (comma-separated) | Only logs from matching domains will be captured.                |
| include status code    | input parameter | int / range              | Filters responses by HTTP status codes (e.g., `200`, `400-499`). |
| include request method | input parameter | string (comma-separated) | Filters requests by method (`GET`, `POST`, etc.).                |
| include response body  | input parameter | boolean                  | If `true`, attempts to capture and attach response body to log.  |

---

## Examples

### Example 1: Basic Logging

```text
Field                  Sub Field          Value
capture network log    selenium action    start

...
capture network log    selenium action    stop

```

:::note
This starts and stops network traffic capture without applying any filters. The logs are processed but not saved.

:::

### Example 2: Filtered Logging and Saving

```text                   
Field                      Sub Field           Value
save                       input parameter     api_logs
filter domain              input parameter     zeuz.ai
include status code        input parameter     201, 400-504
include request method     input parameter     GET, POST
include response body      input parameter     false
capture network log        selenium action     stop

```

This configuration:
- Filters by domain containing `zeuz.ai`.
- Includes only `GET` and `POST` methods.
- Filters status codes `201`, and those ranging from `400` to `504`.
- Does not include the response body.
- Saves the filtered network logs into the variable `api_logs`.

---

## Output
- **Returns**: `"passed"` if successful.
- **Sets Variable** (optional): A list of filtered API events stored in the specified variable.
- **Log Entry Fields**:
  - `url`
  - `status`
  - `method`
  - `mimeType`
  - `type`
  - `timestamp`
  - `body` (optional).

---

## ⚠️ Pre-requisites
- **Browser**: Must be Chromium-based (e.g., Chrome).
- **Performance Logging**: Must be enabled through browser options.

  ```python
  chrome_options.set_capability('goog:loggingPrefs', {'performance': 'ALL'})

  #For Automation Browser, you need to add this line on action 'go to link'
  > capabilities  |  shared capability  |  {"goog:loggingPrefs": {"performance": "ALL"}}
  ```

  ---

## Internal Details
- Utilizes Selenium's `get_log("performance")` API.
- Automatically filters out static resource requests (e.g., `.css`, `.jpg`, `image/*`, etc).
- Applies custom filters based on the provided configuration.

---

## Test Case Scenario of "Capture Network Log" Action

### Title
Capture Network Log from Browser

Sample test case: [TEST-8226 Capture Network Log from Browser](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8226/)

### Scenario Overview
This test case is designed to demonstrate the process of capturing network logs while interacting with a web application. The test involves navigating to a specific URL, performing actions such as loading posts, creating a new post, and attempting to update it, all while capturing and logging network activity.

### Steps to Follow
1. Navigate to the specified URL.
2. Capture Network Log - Start.
3. Click on the "Load Posts" button.
4. Validate partial text.
5. Enter title in title input field on create post page.
6. Enter description in create post page.
7. Click on the create button on the create post page.
8. Validate creation message.
9. Click on the update button.
10. Validate update failure message.
11. Capture Network Log - Stop.
12. Log network data.

### Actions

#### Capture Network Log - Start

|  Parameter            |  Type             |  Value       |
|-----------------------|-------------------|--------------|
|  capture network log  |  selenium action  |  start       |

#### Capture Network Log - Stop

|  Parameter              |  Type              |  Value              |
|-------------------------|--------------------|---------------------|
|  save                   |  input parameter   |  logs_from_network  |
|  include response body  |  input parameter   |  true               |
|  capture network log    |  selenium action   |  stop               |

### Expected Result
- The post is created successfully with a confirmation message, update fails with an error message, and all network activity is captured and logged.

### Common Errors and Fixes
- **Error**: The action was not placed before relevant events (e.g., API calls or page navigation).
  - **Fix**: Ensure Capture Network Log - Start is placed before any action that triggers network activity, and Stop is added after.
- **Error**: Network log was stopped too early.
  - **Fix**: Delay or place "Capture Network Log - Stop" after all relevant actions have completed, including wait steps if necessary.
- **Error**: The browser may block developer tools or background scripts.
  - **Fix**: Enable proper permissions and ensure browser extensions or security settings do not block network traffic monitoring.
- **Error**: The log captures all traffic, including third-party or static resources.
  - **Fix**: Filter logs by method (e.g., POST, GET) or specific endpoints to focus on relevant API calls.
- **Error**: No action was taken to log or store the captured data.
  - **Fix**: Add a Log Network Data or Export Network Log step after stopping the capture.

---

## Additional Tips for this Action
- Place **Start Capture Network Log** before any action that triggers network activity to ensure all requests are recorded.
- Label network log actions (e.g., "Start Capture - Create Post") for easier debugging and analysis.
- Add wait or validate steps to ensure API calls complete before stopping the log.
- Focus on key request types or endpoints to reduce irrelevant network data.
- After logging, validate status codes and response data.
- Use Log Network Data or Export Log to save captured data.

---

## Error Handling for Capture Network Log action
- **Error**: No data was captured.
  - **Fix**: Ensure that the "Start Capture Network Log" action is placed before any user interaction or page load that triggers network requests.
- **Error**: The logs are incomplete.
  - **Fix**: Confirm the capture stop action occurs after all network requests finish.
- **Error**: There are permission issues preventing network logging.
  - **Fix**: Check browser or security settings that might block network logging.
- **Error**: The log file is not being saved.
  - **Fix**: Confirm that a log export or save step follows capture stop.

---