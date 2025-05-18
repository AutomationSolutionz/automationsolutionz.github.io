---
id: go-to-link
title: Go to link
---
# Go to link document and Web related queries

## Capabilities vs Options:
### 1. Capabilities: 
Capabilities are a broad configuration for the WebDriver itself, not just the browser. They define properties of the WebDriver session, which can include browser options, platform details, and browser versions. They are used to communicate overall settings for the WebDriver session, not just for Chrome but across various browsers (e.g., Firefox, Safari).

**Node Example:**
```python
from selenium.webdriver.chrome.options import Options as ChromeOptions
options = ChromeOptions()
# Commonly we set capabilities (mentioned in action) for all browser 
for key, value in browser_options["capabilities"].items():
    options.set_capability(key, value)
```
**Dataset example:** Add a row, where right is a dictionary

`capabilities | shared capability | {"goog:loggingPrefs": {"performance": "ALL"}}`
### 2. Options: 
Arguments are command-line flags passed directly to the Chrome binary to modify the browser’s behavior, such as running it in headless mode, disabling extensions, or setting window size. They affect how Chrome behaves during the session and are specific to Chrome (not other browsers).

**Node Example:**
```python
from selenium.webdriver.chrome.options import Options as ChromeOptions
options = ChromeOptions()
# We add arguments/preferences/experimental_options/extension to the specific browser mentioned in the action mid column
options.add_argument("--ignore-ssl-errors")
options.add_experimental_option("mobileEmulation", {"deviceName": "Pixel 2 XL"})
options.add_extension("/path/to/crx_file")
options.add_encoded_extension("extension_in_base64_string")

# Firefox has set_preference option
from selenium.webdriver.firefox.options import Options as FirefoxOptions
options = FirefoxOptions()
options.set_preference("browser.download.dir", 'path/to/download/dir')
```
**Dataset example:** Add a row, where right is a dictionary

`add_experimental_option | chromium option | {"mobileEmulation": {"deviceName": "Pixel 2 XL"}}`

### Functions:
So, as of now, Node works with following functions
```python
options.set_capability(key, value) # Commonly for webdriver of all browser
options.set_preference(key, val) # Specific to firefox only
options.add_argument(val) # All browser has this function
options.add_experimental_option(key, val) # Chromium: chrome, edge
options.add_extension(val)  # Chromium: chrome, edge
options.add_encoded_extension(val)  # Chromium: chrome, edge
```
## Dataset:
**1. Shared capabilities:** This will be applied to ANY browser you select. Provide as a *dictionary*

`capabilities | shared capability | {"unhandledPromptBehavior": "ignore"}`

**2. Page Load Strategy:** All browser has this option, however we add this only to the browser mentioned in the mid column. Provide as a *string*

`page_load_strategy | safari option | eager`

**3. Add Argument:** All browser has this option, however we add this only to the browser mentioned in the mid column. Provide as *list of strings*.
`add_argument | chromium option | ['--ignore-ssl-errors', '--my-custom-flag']`

**4. Add Experimental Option:** Chromium (chrome + edge) has this option, we add this only to the browser mentioned in the mid column. Provide as a *dictionary*.
`add_experimental_option | chromium option | {"mobileEmulation": {"deviceName": "Pixel 2 XL"}}`

**5. Add Extension:** Chromium (chrome + edge) has this option, we add this only to the browser mentioned in the mid column. Provide as a *list of strings*.
`add_extension | chromium option | ['path/to/crx_file']`

**6. Add Encoded Extension:** Chromium (chrome + edge) has this option, we add this only to the browser mentioned in the mid column. Provide as a *list of strings*.
`add_extension | chromium option | ['extension_in_base64_string']`

**Note:** At mid column you can mention, `shared capability` (applied to all browser) `chromium option` (chrome+edge), `chrome option`, `edge option`, `firefox option`, `safari option`. If you need any option that is not mentioned above, pls contact us.

### Example:
This Example shows how to add different arguments for different browsers

| | | |
|-|-|-|
|capabilities | shared capability | `{"unhandledPromptBehavior": "dismiss"}`|
| add_argument                    | chromium option     | `["--ignore-ssl-errors", "--proxy-server=https://154.32.15.1:9898"]` |
| add_extension                   | chromium option     | `["/path/to/crx"]` |
| add_experimental_option         | chromium option     | `{"prefs": {"safebrowsing.enabled": False}}`             |
| set_preference                  | firefox option      | `{"security.mixed_content.block_active_content": False, "network.proxy.type": 1, "network.proxy.http": "https://154.32.15.1", "network.proxy.http_port": "9898"}` |
| page_load_strategy              | safari option      | `eager` |
| go to link                      | selenium action     | `https://www.browserstack.com/test-on-the-right-mobile-devices` |

 
## Queries:
**1. How to manage profile?**

Ans: You need to find or generate a chrome profile folder. Then add the profile as a folder
`add_argument | chromium option | ['--user-data-dir=path/to/profile/folder']`

As of now, No support for Firefox/Safari browser profile

Find Chrome profile path here,
Find the Profile Path:

Chrome profiles are typically stored in:
- Windows: `C:\Users\Username\AppData\Local\Google\Chrome\User Data\<ProfileName>`
- macOS: `/Users/Username/Library/Application Support/Google/Chrome/`
- Linux: `/home/Username/.config/google-chrome/`

**2. How to add chrome extension (crx/unpacked_folder/encoded_extension)?**

Ans: Extensions can be in 3 forms.

1. `add_extension | chromium option | ['path/to/crx']` For adding .crx extension file

2. `add_argument | chromium option | ['load-extension=ext_dir1,ext_dir2']` For adding extension as folder (unpacked)

3. `add_encoded_extension | chromium option | ['string1', 'string2']` For adding extension as encoded_string

As of now, No support for Firefox/Safari browser extension

**3. How to test on mobile browsers?**

Ans: Mobile browser can be selected from run or debug page. When android browser is selected we add and experimental_option `{"mobileEmulation": {"deviceName": "Pixel 2 XL"}}`

**4. Why and when to use go-to-link v2?**

Ans: This action was designed to work as a plain selenium script with no complexity. Hence it does not have diversed capabilities like v1. When go-to-link-v1 has issues, v2 is used to investigate the issue.

**5. How to connect to remote server, what is debuggerAddress?**

Ans: 
- In the remote machine, install chrome and launch with a flag `google-chrome --remote-debugging-port=9222`. Expose 9222 port from your VM config
- In Node add an option `debugger_address | chrome option | "your-vm-public-ip:9222"` and remove default experimental_options `add_experimental_option | chromium option | {}`


**6. How to handle popups (alert, corfirm, prompt)?**
Ans: These are js generated popups and can be handled by selenium. We have alert handle action for that purpose. Additionally, you can set a fixed behavior for all the prompts with a capability in Node
`capabilities | shared capability | {"unhandledPromptBehavior": "dismiss/accept/ignore/alert"}`
- dismiss: Automatically dismiss the prompt. This is useful if you want to avoid interruptions in your test flow.
- accept: Automatically accept the prompt. This can be used if the prompt is expected and you want to proceed without manual intervention.
- ignore: Ignore the prompt. The WebDriver will continue executing commands without attempting to handle the prompt.
- alert (for Chrome): Causes the WebDriver to raise an exception if a prompt appears and is not handled, allowing you to manage it programmatically.

**7. How to handle non-js browser prompts?**

Ans: These are browser generated prompt and not from frontend js script. Selenium does not have the ability to modify them when they appear on the screen. You need to specify the values while launching browser. Browser prompts are mostly of 2 types:
1. Permission Prompts:
- Examples: Notifications, Geolocation, Camera, Microphone.
- These prompts ask the user to allow or block access to specific browser features and show the website’s icon.
- `add_experimental_option | chromium option | {"prefs": {"profile.default_content_setting_values.notifications": 2, "profile.default_content_setting_values.geolocation": 1}}` Here, 1 = allow, 2 = Block
- `add_argument | chromium option | ["--use-fake-ui-for-media-stream", "--use-fake-device-for-media-stream"]` to bypass UI permission prompt and simulate a fake media device (fake camera or microphone) for testing purposes.

2. Authentication Dialogs:
- Example: Basic HTTP Authentication, where a browser prompts for a username and password to access a resource.
- Provide username and password in the url like this to bypass the browser prompt `https://username:password@www.example.com`

**8. How to add proxy?**

Ans: Launch the proxy server and expose the port
- In Chromium: `add_argument | chrome option | ["--proxy-server=proxe-server-ip:port"]`
- In Firefox: `set_preference | firefox option | {"network.proxy.type": 1, "network.proxy.http": "ip", "network.proxy.http_port": "port"}`

## Default arguments used by zeuz
### All browsers
```json
"capabilities": {}
```
### Chrome & Edge
```json
{
    "add_argument": [
        "--ignore-certificate-errors",
        "--ignore-ssl-errors",
        "--zeuz_pid_finder",
    ],
    "add_experimental_option": {
        "prefs": {
            "download.default_directory": "download_dir",
            "download.prompt_for_download": false,
        }
    },
    "add_extension": [],
    "add_encoded_extension": [],
}
```
### Firefox
```json
{
    "add_argument": [],
    "set_preference": {
        "browser.download.folderList": 2,
        "browser.download.manager.showWhenStarting": false,
        "browser.download.dir": "download_dir",
        "browser.helperApps.neverAsk.saveToDisk": "application/pdf;text/plain;application/text;text/xml;application/xml;application/xlsx;application/csv;application/zip",
        "browser.download.useDownloadDir": true,
        "browser.download.manager.closeWhenDone": true,
        "security.mixed_content.block_active_content": false,
    }
}
```
**NOTE:** What happens when I add my custom flags? The answer is the default values are removed and only the provided values are added as flags. So we do not appened with our default values.

## Links:
- https://developer.chrome.com/docs/chromedriver
- https://www.selenium.dev/documentation
- https://www.selenium.dev/documentation/webdriver/drivers/options/