---
id: switch-iframe
title: Switch iframe
---

## Purpose
The "Switch iframe" action allows automation scripts to interact with elements inside an iframe by shifting the driver's focus from the main document to the specified iframe.

---

## Scenarios

### Scenario 1

#### Title:
Switch to an iframe using its index  
Test case link: [TEST-7976 Switch to an iframe by index](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-7976)

#### Scenario Overview:
Imagine a webpage containing multiple iframes. The goal is to interact with an element located inside the second iframe. This scenario demonstrates how to switch to an iframe using its index.

#### Steps to Follow:
1. Open the browser and navigate to the target webpage.
2. Identify the iframe index (e.g., index = 1 for the second iframe).
3. Use the "Switch iframe" action with the specified index.
4. Interact with elements inside the iframe, such as clicking a button or filling out a form field.

#### Actions:

|Parameter     |Type             |Value          |
|--------------|-----------------|---------------|
|index         |iframe parameter |1              |
|switch iframe |selenium action  |switch iframe  |

- Demonstrate switching to the iframe by using the index.
- Perform actions within the iframe.

#### Expected Result:
- The automation script must be able to switch to the iframe successfully.
- Actions inside the iframe should be performed without errors.

#### Common Errors and Fixes:
- **Error**: Unable to find the iframe using the specified index.
  - **Fix**: Verify the index and ensure that the iframe is present on the page.

---

### Scenario 2

#### Title:
Switch to an iframe by its ID or name  
Test case link: [TEST-7977 Switch to an iframe by ID](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-7977)

#### Scenario Overview:
Consider a webpage where the iframe has a unique ID or name. The task is to switch to this iframe and perform actions such as checking text or clicking a link.

#### Steps to Follow:
1. Open the browser and navigate to the target webpage.
2. Locate the iframe using its `id` or `name` attribute.
3. Use the "Switch iframe" action with the `id` or `name`.
4. Interact with elements inside the iframe, such as clicking a button or filling out a form field.

#### Actions:

|Parameter      |Type             |Value          |
|---------------|-----------------|---------------|
|id             |iframe parameter |frame_two      |
|switch iframe  |selenium action  |switch iframe  |

- Demonstrate switching to the iframe using its `id` or `name`.
- Perform actions within the iframe.

#### Expected Result:
- The script switches focus to the iframe using its `id` or `name`.
- The specified content or actions within the iframe should execute as expected.

#### Common Errors and Fixes:
- **Error**: The ID or name was not found.
  - **Fix**: Double-check the `id` or `name` for typos or case sensitivity.

---

### Scenario 3

#### Title:
Switch back to the default content from the iframe  
Test case link: [TEST-7978 Switch back to default content](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-7978)

#### Scenario Overview:
After interacting with elements inside an iframe, the script needs to switch back to the main document to continue operations.

#### Steps to Follow:
1. Open the browser and navigate to the target webpage.
2. Switch to an iframe using any method, such as index, ID, or WebElement.
3. Interact with elements within the iframe.
4. Use the "Switch back to default content" action to return to the main document.
5. Perform actions outside the iframe, such as clicking a main menu link.

#### Actions:

|Parameter       |Type              |Value            |
|----------------|------------------|-----------------|
|index           |iframe parameter  |default content  |
|switch iframe   |selenium action   |switch iframe    |

- Switch back to the main document after completing interactions within the iframe.

#### Expected Result:
- The script should successfully switch back to the main document.
- Actions outside the iframe should execute without any issues.

#### Common Errors and Fixes:
- **Error**: Actions fail to execute after switching back to the default content.
  - **Fix**: Ensure that the iframe is fully exited before proceeding.

---

## Additional Tips for this Action
- Always validate the presence of the iframe before switching.
- Use explicit waits to ensure that the iframe and its content are fully loaded.
- For dynamic iframe IDs or indices, consider locating the iframe using its WebElement.

---

### Error Handling for Switch iframe

#### Common Problems and Their Fixes:
1. **Problem**: The iframe cannot be located.  
   **Possible Cause**: The iframe may not have loaded yet.  
   **How to Fix**: Use explicit waits to ensure the iframe is present before switching.

2. **Problem**: Actions within the iframe fail.  
   **Possible Cause**: The incorrect iframe was selected.  
   **How to Fix**: Verify the accuracy of the iframe index, ID, or locator.

3. **Problem**: Switching back to the default content does not work.  
   **Possible Cause**: The driver's focus is still within the iframe.  
   **How to Fix**: Use the "default content" action to ensure focus returns to the main document.

4. **Problem**: A timeout error occurs while switching to the iframe.  
   **Possible Cause**: The iframe takes too long to load.  
   **How to Fix**: Increase the timeout duration for locating the iframe.

5. **Problem**: The WebElement is not interactable after switching to the iframe.  
   **Possible Cause**: The element is not visible within the iframe.  
   **How to Fix**: Scroll to the element inside the iframe to make it interactable.

---

### General Error Handling Tips
- Always ensure that the iframe is fully loaded before switching.
- Use unique identifiers, such as `id` or `name`, for better accuracy.
- If issues persist, debug by printing or logging the available iframes on the page.
- After completing the task within the iframe, remember to switch back to the default content.