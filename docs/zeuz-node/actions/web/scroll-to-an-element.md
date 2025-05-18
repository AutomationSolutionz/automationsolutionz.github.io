---
id: scroll-to-an-element
title: Scroll to an Element
---

## Purpose
This action scrolls the web page to bring a specific element into view. It is particularly useful when interacting with elements that are not initially visible because they are outside the viewport, ensuring the smooth execution of automated tests involving such elements.

---

## Scenarios

### Scenario 1

#### Title:
Scroll to an element located below the visible viewport  
Test case link: [TEST-8010 Scroll to an element below the viewport](https://zeuz.zeuz.ai/Home/ManageTestCases/Edit/TEST-8010)

#### Scenario Overview:
Suppose we need to click on a button that is not visible on the screen. To achieve this, we will scroll the page until the element becomes visible, allowing for further interaction or validation.

#### Steps to Follow:
1. Open the target webpage in the browser.
2. Identify the element positioned below the current viewport.
3. Use the "Scroll to an Element" action to bring the element into view.
4. Validate that the element is now visible on the screen.

#### Actions:

|Parameter        |Type             |Value      |
|-----------------|-----------------|-----------|
|id               |element parameter|element    |
|scroll to element|selenium action  |scroll     |

- Use the "Scroll to an Element" action to focus on the specified element.

#### Expected Result:
- The page scrolls smoothly until the element is fully visible within the viewport.

#### Common Errors and Fixes:
- **Error**: The element is not scrolled into view.
  - **Fix**: Verify that the element's locator is correct and unique.

---

## Additional Tips for this Action
- Always verify that the element locator is unique to avoid scrolling scrolling to unintended elements.
- Use this action in combination with "Wait for Element" to ensure the element is present before attempting to scroll.

---

### Error Handling for Scroll to an Element

#### Common Problems and Their Fixes:
1. **Problem**: The element is not scrolled into view.  
   **Possible Cause**: The element's locator is either incorrect or not unique.  
   **How to Fix**: Verify the locator using browser developer tools.

2. **Problem**: The action scrolls to an incorrect position.  
   **Possible Cause**: The element's position was incorrectly calculated.  
   **How to Fix**: If necessary, use JavaScript-based scrolling for precise control.

---

### General Error Handling Tips
- Always test the scroll action across multiple screen sizes and resolutions.
- For dynamic web pages, ensure that elements are fully loaded before scrolling.
- Use precise and descriptive locators to reduce the likelihood of targeting the wrong element.