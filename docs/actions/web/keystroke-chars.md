---
id: keystroke-chars
title: Keystroke Chars
---

## Purpose
This action simulates typing specific characters or keystrokes into an input field or textarea by using its identifier. It is used to replicate user keyboard input, making it useful for automating text entry in forms or web applications.

---

## Scenarios

### Scenario 1

#### Title:
Type characters into an input field using its identifier (ID)  
Test case link: [TEST-7994 Type Characters Using ID](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-7994/)

#### Scenario Overview:
A user needs to type a string into an input field identified by its `id` attribute. This scenario demonstrates the use of the 'Keystroke Chars' action to simulate text input.

#### Steps to Follow:
1. Navigate to a webpage that contains an input field (e.g., a search bar).
2. Provide the `id` of the input field and the desired characters to be typed.
3. Execute the 'Keystroke Chars' action.

#### Actions:
- **Input parameters**:
  - Element properties: `id = searchInput`
  - Selenium action: `keystroke chars = enter`

#### Expected Result:
- The input field contains the text 'Selenium'.

#### Common Errors and Fixes:
- **Error**: The input field is not located.
  - **Fix**: Verify that the `id` provided matches the element on the webpage.

---

### Scenario 2

#### Title:
Type characters into a textarea using a class name  
Test case link: [TEST-7994 Type Characters Using Class](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-7994/)

#### Scenario Overview:
A user needs to type multiple lines of text into a textarea identified by its `class` attribute. This scenario demonstrates how to use the 'Keystroke Chars' action for multiline text input.

#### Steps to Follow:
1. Navigate to a webpage that contains a textarea field.
2. Provide the `class` of the textarea and the characters to be typed.
3. Execute the 'Keystroke Chars' action.

#### Actions:
- **Input parameters**:
  - Element properties: `class = input-area`
  - Selenium action: `keystroke chars = The quick brown fox`

#### Expected Result:
- The text area contains the text 'The quick brown fox'.

#### Common Errors and Fixes:
- **Error**: The text is not entered into the textarea.
  - **Fix**: Ensure that the correct `class` name is provided and that the textarea is neither hidden nor disabled.

---

## Test Cases

### Test Case for Scenario 1

#### Objective:
Ensure that typing characters into an input field using its `ID` works correctly.

#### Steps to Perform:
1. Open a webpage containing an input field.
2. Use the action with inputs:
   - Element parameter: `id = searchInput`.
   - Selenium action: `keystroke chars = enter`.
3. Verify that the input field contains the text 'Selenium'.

#### Expected Outcome:
- The input field is populated with the text 'Selenium'.

---

### Test Case for Scenario 2

#### Objective:
Ensure that typing multiline text into a textarea using its class name works correctly.

#### Steps to Perform:
1. Open a webpage containing a textarea.
2. Use the action with inputs:
   - Element parameter: `class = input-area`.
   - Selenium action: `keystroke chars = The quick brown fox`.
3. Verify that the textarea contains the text 'The quick brown fox'.

#### Expected Outcome:
- The textarea is populated with the text 'The quick brown fox'.

---

## Additional Tips for this Action
- Use unique identifiers, such as `id` or `class`, to reliably locate elements.
- For special keys, ensure proper formatting (e.g., `CTRL+C`).
- Test actions across different browsers to ensure consistent behavior.

---

### Error Handling for Keystroke Chars

#### Common Problems and Their Fixes
1. **Problem**: Element is not found.  
   **Possible Cause**: Incorrect identifier (e.g., `id` or `class`).  
   **How to Fix**: Verify that the identifier matches the element.

2. **Problem**: Text is not entered into the field.  
   **Possible Cause**: The field is hidden or disabled.  
   **How to Fix**: Ensure that the field is visible and enabled before performing the action.

3. **Problem**: Special key sequence does not work.  
   **Possible Cause**: Unsupported key or incorrect format.  
   **How to Fix**: Use standard key names and verify compatibility with the webpage.


