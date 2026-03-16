---

id: switch-driver
title: Switch Driver

---

This document outlines the implementation of driver switching between **Playwright** and **Selenium**. This feature allows for global or granular control over which driver executes your web actions, supported by a seamless background connection mechanism.

---

## Configuration Parameters

You can control driver execution using two distinct parameter types: a global runtime parameter and a step-specific optional parameter.

### 1. Global Runtime Parameter: `BROWSER_DRIVER`

:::tip

- Refer to [Runtime Parameters](/docs/zeuz-server/testing/Deployments/runtime-parameters.md)

:::

The `BROWSER_DRIVER` parameter sets the execution engine for the entire test case.

* **Values:** Can be set to either `playwright` or `selenium`.
* **Behavior:** Ensures all web actions in the test case are executed through the chosen driver, regardless of the individual step definitions.
* **Example:** If a test case contains steps defined as `selenium action` but `BROWSER_DRIVER` is set to `playwright`, Node will internally convert those actions to `playwright action` at runtime.

[📹 Video](https://drive.google.com/file/d/1H-h4aB87e4rCgNiqmd9-_vg_FookhNt-/view?usp=sharing)

### 2. Granular Optional Parameter: `browser driver`

The `browser driver` parameter provides fine-grained control and takes the **highest priority** if both parameters are present.

* **Usage:** This can be added to any specific web action.
* **Override Logic:** It is designed to override global driver preferences for specific steps.
* **Example:** If an action is defined as a `selenium action` but includes this optional parameter set to `playwright`, the action is converted to `playwright action` internally.

| Parameter | Type | Value |
| --- | --- | --- |
| browser driver | optional parameter | playwright |
| click | selenium action | login_btn |

[📹 Video](https://drive.google.com/file/d/1Qu0wG2ujY5XdAbiIGotr1AuvYyFnRZKi/view?usp=sharing)

---

## Parameter Priority Logic

| Parameter | Scope | Priority | Supported Values |
| --- | --- | --- | --- |
| `browser driver` | Step-level (Optional) | **Highest** | `playwright`, `selenium` |
| `BROWSER_DRIVER` | Test-level (Runtime) | Medium | `playwright`, `selenium` |

---

## Seamless Driver Switching

The system maintains a live bridge between drivers to ensure that switching does not interrupt the browser session.

* **Automatic Connection:** Browsers launched with Selenium are automatically connected to a Playwright instance in the background, and vice versa.
* **Interoperability:** This bridge allows `playwright action` to run on browsers originally launched by Selenium, and `selenium action` to run on browsers launched by Playwright.

---

> ### Technical Requirement: Chromium Only
> 
> 
> This seamless switching utilizes the **Chrome DevTools Protocol (CDP)** to establish a remote debugging bridge. Consequently, this feature only works on **Chromium-based browsers**.
