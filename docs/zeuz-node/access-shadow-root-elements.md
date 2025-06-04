---
title: Access Shadow Root Elements
sidebar_position: 5
---

## Overview
The `shadow_root_elements` function locates elements within one or more nested Shadow DOM (shadow root) levels on a web page. It is used when target elements are encapsulated inside Web Components or browser-internal pages that utilize Shadow DOM, where standard document queries (CSS or XPath) cannot access them directly.

Internally, the function sequentially finds each shadow host and then accesses its shadow DOM, for example, using Selenium's `shadow_root` method or a JavaScript call such as `driver.execute_script('return arguments[0].shadowRoot', host)`.

This feature should be used when the required element is hidden within an open-mode shadow root and must be accessed through its host elements. Note that `Element.shadowRoot` only returns the shadow DOM if the root is open; therefore, this function cannot access closed shadow roots.

This capability enables traversal through nested Shadow DOMs to locate target elements, which is essential for modern web applications that rely on encapsulation using Shadow DOM.

### Key Concepts
1. **Shadow Host**: Element that contains a Shadow Root.
2. **Shadow Root**: An encapsulated subtree attached to a Shadow Host.
3. **Parent Scope**: An optional container element for Shadow Hosts, specified using the `parent` parameter.

---

### User Input Structure
Users define Shadow DOM traversal using step data by following these rules:

#### 1. Shadow Root Parameters
- **Format**: `sr <index> <type> parameter`
  - **index**: An integer (e.g., 1, 2, 3.....) representing the nesting level. If omitted, it defaults to `sr 1`.
  - **type**: Use `element parameter` to specify a Shadow Host or `parent parameter` to define the container scope.
- **Allowed Attributes**:
  - `id`, `class`, `tag` and any other attribute (e.g., `title`, `data-qa`).
  - **Text selectors are not supported**; use attribute-based selectors instead.

*Example:*
```python
["id", "sr 1 parent parameter", "container"]
["tag", "sr 1 element parameter", "user-profile"]
```

#### 2. Target Element Parameters
Define the final element within the deepest Shadow Root using the standard `element parameter` syntax, using only **CSS selectors**.

*Example:*
```python
["class", "element parameter", "submit-button"]
```

---

### Traversal Workflow
1. **Process Parameters**
   - Group the `sr` parameters based on their `index` and `type` (either `element` or `parent`).
   - Validate that indices are **unique** and follow a **sequential order**.

2. **For Each Shadow Level**
   - **Parent Scope (if provided)**
     - Locate the parent container using a CSS selector.
     - Search for the Shadow Host **within the specified parent**.
   - **Shadow Host**
     - Construct a CSS selector using element attributes.
     - Locate the element within the current root or parent scope.
   - **Enter Shadow Root**
     - Access it using `element.shadowRoot`.
     - Fail the operation if no Shadow Root exists.

3. **Locate Target Element**
   - After traversing all Shadow Roots, proceed with the operation:
     - Construct the CSS selector for the final element.
     - Return the element(s) from the deepest Shadow Root.

---

### Rules and Restrictions
1. **Selector Types**
   - **Shadow Hosts**: Use CSS selectors only; XPath and text-based selectors are not supported.
   - **Target Elements**: Except for the first level, use CSS selectors only; before entering the Shadow DOM, there are no restrictions on selector type.

2. **Index Handling**
   - If the index is omitted, `sr 1` is assumed implicitly.
   - Consecutive indices are required (e.g., `sr 1` must be followed by `sr 2`).
   - A parent is not required; one level may contain a parent, while another level may not.

3. **Parent Scoping**
   - The parent must exist within the current root, either the main document or an active Shadow Root.
   - The Shadow Host is searched **within the specified parent element**.

4. **Error Cases**
   - Shadow Host was not found.
   - The element has no Shadow Root.
   - The index or parameter format is invalid.

---

### Example Use Case
**HTML**:  
```html
<div id="app"> <!-- Parent for 1st Shadow Host -->
  <user-card> <!-- Shadow Host (Level 1) -->
	#shadow-root
	<!-- Inside user-card's Shadow Root -->
	<div class="profile"> <!-- Shadow Host (Level 2) -->
	  #shadow-root
	    <button class="save">Save</button> <!-- Target -->
	</div>
  </user-card> 
</div>
```  

**Step Data**:  
```python
shadow_root_ds = [
    ["id", "sr 1 parent parameter", "app"],          # Parent of 1st Shadow Host
    ["tag", "sr 1 element parameter", "user-card"],  # Shadow Host (Level 1)
    ["class", "sr 2 element parameter", "profile"]   # Shadow Host (Level 2)
]

element_ds = [
    ["class", "element parameter", "save"]           # Target element
    ["click", "selenium action", "click"]
]
```

:::note
The user must provide all of this data in a single action.

:::

**Traversal**:
1. Find the parent element `#app`, then locate the `<user-card>` element within it.
2. Enter the Shadow Root of the `<user-card>` element.
3. Locate the `.profile` element and enter its Shadow Root.
4. Locate the `.save` button.
5. Click the **Save** button.

```bash
Page DOM (main document)
└─ Shadow Host (sr-1) [e.g. <custom-element id="outer-host">]
    └─ Shadow DOM Level 1
         └─ Shadow Host (sr-2) [e.g. <inner-element class="inner">]
             └─ Shadow DOM Level 2
                  └─ [Target Element, e.g. <button>]
```

---

### Why are only CSS selectors used?
- Shadow DOM encapsulation prevents XPath from traversing its internal structure.
- CSS selectors pierce Shadow Boundaries via `::shadow` or `/deep/` deprecation.
- Ensures consistency and compatibility across browsers.

---

### Troubleshooting Tips
1. **Shadow Host not found**
   - Verify that the parent scope exists within the current root.
   - Check for typos in attribute names and values.
2. **No Shadow Root**:
   - Ensure the element is a Shadow Host (verify using DevTools).
   - Use the `allow-hidden` option if the element is not yet rendered.
3. **Index Mismatches**:
   - Explicitly specify indices (e.g., use `sr 2` instead of just `sr`).

---