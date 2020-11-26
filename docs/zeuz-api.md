---
id: zeuz-api-examples
title: Zeuz API Examples
---

Zeuz API provides an external interface for clients to interact with
the server and fetch various information. Complete API documentation
can be found
[here](https://documenter.getpostman.com/view/10815312/SzfAzSWj).

This page lists example scenarios for using the API.

## Deploy Test Sets

Steps which are marked **[OPT]** can be skipped if you already know
that the data is valid (for example, you already know that a Milestone
exists for a given ID, or a Test Set with the given name already
exists).

1. ### Get access token [[API Doc]](https://documenter.getpostman.com/view/10815312/SzfAzSWj#1a9da524-6944-4591-ae61-937b58aa3021)

    First, you need to get an access (Bearer) token through which the
    Zeuz server will be able to identify that any request that you're
    making is actually *you* and not someone else. For this, you will
    need to provide the server an API Key, which can be found from your
    "Profile > Api Key" Key tab (click Generate if none is present).

    ```bash
    curl --location --request GET 'https://qa.zeuz.ai/api/auth/token/verify?api_key=2a69d429-fa4d-47ec-a8d7-eff88bf063ef'
    ```

    In this case, the API Key is
    `2a69d429-fa4d-47ec-a8d7-eff88bf063ef`. This will return a JSON
    object with two keys `token` and `status`. This `token` value needs
    to be sent to the server with any subsequent API requests as an
    Authorization header as you will see in the next steps.

    ```
    Authorization: Bearer TOKEN_HERE
    ```

2. ### [OPT] Verify Test Set [[API Doc]](https://documenter.getpostman.com/view/10815312/SzfAzSWj#b65c5729-74a1-4bc4-89cc-85c1da5e3505)

    Next, you will need to get the Test Set that you want to run/deploy
    using API. You can create a Test Set by navigating to "Testing >
    Set > New Set". Add the test cases that you want to run as part of
    this test set. You can verify that the test set is accessible via
    the API using the following request.

    ```bash
    curl --location --request GET 'https://qa.zeuz.ai/api/set/list?project=PROJ-17&team=2&search_term=cicd' \
    --header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmdWxsX25hbWUiOiJNb2hhbW1lZCBTYXppZCBBbCBSYXNoaWQiLCJ1c2VybmFtZSI6InNhemlkIiwiaWQiOjMzLCJleHAiOjE2MDg5NTQ4OTF9.trywpchrfW5WvFdgglbNGyzRbeVdybq1H8wLfjiSMQo'
        ```

        In this case `project` and `team` can be found by clicking on your
        username. Take the values inside parentheses. `search_term` is the
        name of the set that you just created. For this example, it is
        `cicd`.

3. ### [OPT] Verify milestone [[API Doc]](https://documenter.getpostman.com/view/10815312/SzfAzSWj#ae90b979-b8a1-4823-869b-f0f81019d6df)

    You need to provide the **ID** of a Milestone. This can be
    found from "Project > Milestone (Others)". It is better to choose a
    milestone that has the "Started" status.

    ```bash
    curl --location --request GET 'https://qa.zeuz.ai/api/milestones/list?project=PROJ-17&team=2&status=started' \
    --header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmdWxsX25hbWUiOiJNb2hhbW1lZCBTYXppZCBBbCBSYXNoaWQiLCJ1c2VybmFtZSI6InNhemlkIiwiaWQiOjMzLCJleHAiOjE2MDg5NTQ4OTF9.trywpchrfW5WvFdgglbNGyzRbeVdybq1H8wLfjiSMQo'
    ```

    `status` can be either **started** or **not_started**.


4. ### Get Zeuz Node (machine) ID [[API Doc]](https://documenter.getpostman.com/view/10815312/SzfAzSWj#3439a31e-c965-4fbc-83b7-b4727fef7a88)

   You need to get the Zeuz Node/machine ID to tell the server that you
   want to deploy/run your test set in that particular machine/zeuz node.
   If you have Zeuz Nodeinstalled locally, navigate to the folder where it is installed
   (usually "Desktop > Zeuz_Node) and open the `node_id.conf` file.
   The `id` specified here will become a part of the name of the
   machine. For example, if my username is **foo** and the `id`
   specified in `node_id.conf` file is set to **cicd**, the name of the
   Zeuz Node instance will become available as **foo_cicd**.

   ```json
    [
        {
            "id": 716,
            "name": "foo_cicd",
            "user_level": "Automation",
            "last_updated_time": "Thu-Nov-26-04:58:16-2020"
        }
    ]
    ```

    You will need to grab the `id` field from here. The above is an
    example response for the following request:

    ```bash
    curl --location --request GET 'https://qa.zeuz.ai/api/machines/list?project=PROJ-17&team=2' \
    --header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmdWxsX25hbWUiOiJNb2hhbW1lZCBTYXppZCBBbCBSYXNoaWQiLCJ1c2VybmFtZSI6InNhemlkIiwiaWQiOjMzLCJleHAiOjE2MDg5NTQ4OTF9.trywpchrfW5WvFdgglbNGyzRbeVdybq1H8wLfjiSMQo'

5. ### Deploy/Run Test Set [[API Doc]](https://documenter.getpostman.com/view/10815312/SzfAzSWj#2a542025-5b65-464a-843a-9d7a38f73349)

    Now you can deploy/run your test set using the following request:

    ```bash
    curl --location --request POST 'https://qa.zeuz.ai/api/run/submit' \
    --header 'Content-Type: application/json' \
    --header 'Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmdWxsX25hbWUiOiJNb2hhbW1lZCBTYXppZCBBbCBSYXNoaWQiLCJ1c2VybmFtZSI6InNhemlkIiwiaWQiOjMzLCJleHAiOjE2MDg5NTQ4OTF9.trywpchrfW5WvFdgglbNGyzRbeVdybq1H8wLfjiSMQo' \
    --data-raw '{
    "test_set_name": "cicd",
    "dependency": {
        "Brower": "Chrome",
        "OS": "Windows"
    },
    "email_receiver":[
        "riz@gmail.com",
        "minar@gmail.com",
        "shetu2153@gmail.com"
    ],
    "objective": "Sample Objective",
    "milestone": "190",
    "project_id": "PROJ-17",
    "team_id": 2,
    "run_time_params": {
        "server": {
            "field": "qa1",
            "subfield": "https://demo.zeuz.ai"
        }
    },
    "machine": 41,
    "loop": "1",
    "run_time_settings": {
        "threading": false,
        "take_screenshot": true,
        "debug_mode": false,
        "upload_log_file_only_for_fail": true
    },
    "branch_version": [
        "driver: 1.0.01",
        "browser: 1.2.1"
    ],
    "start_date": "2019-10-31",
    "end_date": "2019-10-31",
    "domain": "https://qa.zeuz.ai"
    }'
    ```

    - `domain [str]`: Doman name of the server.
    - `start_date` and `end_date` [str]: These can be set to any date (you
      can set it to your current date).
    - `branch_version [array(str)]`: Used to specify the version. Can be empty `[]`.
    - `run_time_settings [array(str)]`: Used to control Zeuz Node behavior. Keep
      them as is if you don't want to modify default settings.
    - `loop [int]`: Indicates how many times to run the selected Test Set.
    - `machine [int]`: Zeuz Node/machine ID (you need to specify the ID and
      not the name).
    - `run_time_params [object(object(str))]`: Specify any run time
      parameter. These can be obtained from "Testing > Run Tests". In
      this example `server` is the name of the runtime parameter. Its
      value is **https://demo.zeuz.ai** which is part of the
      `subfield` key. The `field` key can be set to anything and will
      be ignored.
    - `team_id [int]`: Team ID can be found from "Profile".
    - `project_id [str]`: Project ID can be found from "Profile".
    - `milestone [str]`: ID of the selected milestone. Needs to
      provided as a string. See step #3.
    - `objective [str]`: Any string can be specified as an objective.
      Indicates the objective of the deploy/run.
    - `email_receivers [array(str)]`: List of emails to send reports
      to.
    - `dependency [object(str)]`: Specify the OS and and browser that
      you want to deploy the test set for. For iOS/Android you can set
      `Mobile` key to **iOS** or **Android**.
    - `test_set_name [str]`: Name of the test set to deploy/run. See
      step #2.
