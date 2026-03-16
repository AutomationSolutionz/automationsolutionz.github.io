---

id: sessions
title: Sessions

---

This feature introduces **session-based browser isolation**, allowing you to spawn and interact with multiple fresh browser windows independently within the same test. It follows a "session" model similar to how database actions are handled in the framework.

---

## Core Concepts

* **Session Isolation**: Every new browser window is tracked via a `browser_sessions` shared variable.
* **Default Behavior**: If no session is specified, the framework automatically generates a session named `default`.
* **Dual Driver Support**: Both Selenium and Playwright support sessions. The framework automatically switches the active driver based on the session's availability.
* **Dynamic Connectivity**: The system automatically assigns unique remote debugging ports (**9222–9322**) to facilitate CDP (Chrome DevTools Protocol) connections across multiple instances.

---

## Usage

To use sessions, add an optional parameter row to your action in the following format:
`session` | `optional parameter` | `[your_session_name]`

### Multi-Session Example (Selenium)

You can spawn separate windows by passing unique strings to the `session` parameter:

#### Session A
| Parameter | Type | Value |
| --- | --- | --- |
| session | optional parameter | user_1 |
| go to link | selenium action | https://google.com |

#### Session B
| Parameter | Type | Value |
| --- | --- | --- |
| session | optional parameter | user_2 |
| go to link | selenium action | https://bing.com |

### Targeting Specific Sessions

You can direct any action to a specific browser instance without affecting other open sessions:

| Parameter | Type | Value |
| --- | --- | --- |
| session | optional parameter | admin |
| id | element parameter | login-button |
| click | playwright action | click |

### Session Teardown

To close a specific session while keeping others active, use the `session` parameter during teardown:

| Parameter | Type | Value |
| --- | --- | --- |
| session | optional parameter | user_1 |
| tear down | playwright action | tear down |

[📹 Video](https://drive.google.com/file/d/1rtPCAmzfT03XQpjd0t7tGphSMh2Y1iAx/view?usp=sharing)

---

## Backwards Compatibility

* **Legacy Behavior**: If the `session` parameter is omitted, the framework defaults to the legacy single-instance behavior.
* **Selenium Support**: Support for the `driverid` parameter is maintained for Selenium-specific workflows.

