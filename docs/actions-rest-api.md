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
