---
id: navigate-refresh
title: Navigate - Refresh
---

## Purpose
This action simulates the browser's **refresh** button, allowing the current page to reload. It is equivalent to pressing the **refresh** button in the browser, which is useful for updating or reloading page content.

---

## Scenarios

### Scenario 1

#### Title:
Refresh the current page  
Test case link: [TEST-8002 Refresh the Page](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8002/)

#### Scenario Overview:
A user is interacting with a webpage that displays dynamic content and needs to reload the page to update its content. This scenario demonstrates using the 'Navigate - Refresh' action to perform this operation.

#### Steps to Follow:
1. Open a webpage with either dynamic or static content.
2. Use the 'Navigate - Refresh' action to reload the current page.
3. Verify that the page reloads successfully.

#### Actions:
- **Input parameters**:
  - Field: `navigate`
  - Selenium action: `refresh`

#### Expected Result:
- The browser reloads the current page, and the content is updated.

#### Common Errors and Fixes:
- **Error**: The page fails to reload.
  - **Fix**: Ensure the browser is not in a state that prevents reloading, such as due to an unresponsive script or blocked network request.

---

### Scenario 2

#### Title:
Refresh a page that has unsaved changes  
Test case link: [TEST-8002 Refresh the Page](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8002/)

#### Scenario Overview:
A user has unsaved changes on a webpage and attempts to reload the page. This scenario demonstrates the behavior when the 'Navigate - Refresh' action is performed in such cases.

#### Steps to Follow:
1. Open a webpage containing a form or editable fields.
2. Make changes to the form without saving them.
3. Use the 'Navigate - Refresh' action to reload the page.
4. Verify that the browser prompts for unsaved changes (if applicable).

#### Actions:
- **Input parameters**:
  - Field: `navigate`
  - Selenium action: `refresh`

#### Expected Result:
- The browser reloads the page and may prompt about unsaved changes, depending on the webpage's implementation.

#### Common Errors and Fixes:
- **Error**: Unsaved changes are lost without any warning.
  - **Fix**: Confirm the webpage's behavior before performing the refresh action to prevent loss of data.

---

## Test Cases

### Test case for Scenario 1

#### Objective:
Ensure that reloading the current page works correctly.

#### Steps to perform:
1. Open a browser and visit a webpage.
2. Use the action with inputs:
   - Field: `navigate`
   - Selenium action: `refresh`
3. Verify that the page reloads successfully.

#### Expected Outcome:
- The browser reloads the current page.

---

### Test Case for Scenario 2

#### Objective:
Ensure that reloading a page with unsaved changes prompts a warning, if applicable.

#### Steps to Perform:
1. Open a browser and navigate to a webpage containing a form.
2. Enter data into the form without saving it.
3. Use the action with inputs:
   - Field: `navigate`
   - Selenium action: `refresh`
4. Verify that the browser reloads the page and prompts for unsaved changes, if applicable.

#### Expected Outcome:
- The page reloads, and a prompt for unsaved changes appears if supported.

---

## Additional Tips for this Action
- Use this action to reload pages with dynamic content to ensure the updates are reflected.
- Verify the webpage's behavior with unsaved changes to prevent data loss.

---

### Error Handling for Navigate - Refresh

#### Common Problems and Their Fixes
1. **Problem**: The page fails to reload.  
   **Possible Cause**: The browser is unresponsive, or network issues have occurred.  
   **How to Fix**: Ensure the browser is responsive and the network connection is stable.

2. **Problem**: Data loss occurs when the page is refreshed.  
   **Possible Cause**: The webpage does not display a prompt for unsaved changes.  
   **How to Fix**: Test the webpage's behavior to ensure it handles unsaved changes before performing the refresh action.

3. **Problem**: Browser settings prevent the refresh action from being executed.  
   **Possible Cause**: Certain browser extensions or settings may prevent the refresh action from being executed.  
   **How to Fix**: Disable conflicting extensions or adjust browser settings to enable the refresh action.