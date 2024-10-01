---
id: actions-common
title: Common actions
---

import Link from '@docusaurus/Link';

:::tip

- **Drivers**: None
- **External Libraries**: opencv2(image processing), xlwings(excel)

:::

Common actions, as their name implies, are actions that are common throughout every platform. You can use these actions in any context - <Link to="/docs/actions-web">Web</Link>, <Link to="/docs/actions-mobile">Mobile</Link>, <Link to="/docs/actions-rest-api">REST/API</Link>, etc.

## Examples of Common Actions

### 1. **Compare Data**
This action allows the comparison of two data sets, which can be an integer, float, string, list, tuple, dictionary, or a `%|variable|%`, including nested lists.

### 2. **For Loop**
This action will iterate through a list/str/dict and with the items inside that list it will execute the actions mentioned at the right-hand side of the interface.

### 3. **If Else**
In some cases, it may be necessary to execute certain actions if a specific condition is met; otherwise they will be skipped. Variables saved from previous actions can be directly used in these conditions.

### 4. **Random Data Generator**
This function returns a random string of 10 characters by default, or can generate random data types, such as an item from a list or an integer from a specified range, based on the parameters provided.

### 5. **Save into Variable**
This action allows users to perform various operations, such as appending or updating lists or dictionaries, generating random data, executing loops, and more, using custom **Python** expressions or commands, with the option to save results into a variable for further use.

### 6. **Sleep**
The **Sleep** action pauses the process for a specified duration, allowing time for events like page loading or data retrieval before proceeding with the next operation, especially useful in cases of network delays or slow data loading.

### 7. **While Loop**
The loop action repeats until any specified **Exit Loop** condition is met, with options to either continue with subsequent steps or fail the test case, based on whether an action passes, fails, or if the left operand matches the right operand according to defined comparison operators.

### 8. **Delete Mail**
This action allows the deletion of an email by specifying the host, username, password, and sorting criteria such as seen/unseen status, flagged/non-flagged status, or a date range, with the required date format being YYYY-M-D.

### 9. **Execute Python Code**
The **Execute Python Code** action enables users to run custom Python scripts within the framework by specifying a file path, uploading a file, or writing the code directly. It allows interaction with variables from previous steps, and the output is automatically saved to shared variables for use in subsequent actions. This feature provides flexibility for executing custom logic and handling data during workflow processes.

### 10. **Extract number OR Convert data type**
This action is used to extract numbers from a string (or list) and/or convert data between types like string, integer, and float, with options to store the output in a specified variable, round float numbers to a specific decimal point, use an index to extract multiple numbers from a string, and apply functions like ceiling, floor, or rounding when converting floats to integers.

### 11. **Generate Date & Time**
This action allows users to display the current date and time in various customizable formats, with the ability to add or substract days, weeks, months, or years from the current date.

### 12. **Log Info**
This action allows users to display a message in the console during test execution and simultaneously write the same message to the log file for record-keeping.

### 13. **Read and save mail**
This action allows users to read or delete emails by providing specific parameters such as host, username, password, and sorting criteria. The user can filter emails based on various attributes such as subject, text, sender, receiver, flagged or checked status, or date ranges. Sorting options include seen or unseen emails, flagged status, or messages from a particular date or range. The results can be saved to a variable for further use. Additionally, the action supports waiting for a specific time before retrieving the next email or specifying the directory to save email attachments.

### 14. **Read from Excel**
This action reads data from a specified Excel file and stores it in a variable, allowing users to define specific cells, ranges, output structures (list of lists or dictionary), and optional parameters for data expansion either as a table, column, or row starting from a single specified cell.

### 15. **Run Actions**
This action allows users to run previously defined actions within a step without duplicating them. It can execute actions in loops, either repeating until a condition is met or for a specific number of iterations. The loop structure can be customized by specifying conditions like pass/fail, iteration count, or counter limits. Additional settings enable users to exit loops when conditions are met, such as after a specified number of failures.

### 16. **Step Exit**
This action will exit the step with a result pass or fail.  
This action can be used in a condition where, if something is matched or does not match, it can be decided to either fail the test case or continue with a pass.  
This can be added to various other actions such as conditional actions, to determine if a test case should pass or fail. The result can be either pass or fail.

### 17. **Extract Date**
This action extracts a date from a string, even when the string contains other text, converting it into a date type, and allows for an optional parameter to specify the desired output format, as demonstrated in the example where the date "25 February 2020" is extracted and saved in the variable **my_var** as "2020-02-25".

### 18. **File - Delete**
The **delete** action is a fundamental command in the file management systems used to remove files or folders from a specified disk location. To execute this action, the user specifies the source of deletion (file_to_be_deleted) and the path (e.g., /Music/acb) from which the item will be deleted. The action is categorized as a utility action, targeting either a file or a folder. For instance, using the command to delete **/Music/test.txt** instructs the system to remove the **test.txt** file from the **Music** directory, effectively making it unavailable for future access. Understanding this command is essential for effective data management.

### 19. **Folder - Delete**
The **delete** action is a command used in file management systems to remove a specified folder from a disk location. Users must identify the source folder and provide its path (e.g., /Music/acb) to execute the deletion. As a utility action, it specifically targets a folder, distinguishing it from file deletions. For example, executing the command to delete **/Music/acb** instructs the system to remove the **acb** folder within the **Music** directory, making it inaccessible for future use. Mastering this command is essential for effective data organization and management.

### 20. **Random email delete**
This action will delete randomly generated email (which is created by Random email generator Action).

### 21. **Random email generator**
This action will create a random email address and saved the email address into the given variable name.

### 22. **Random email read**
This action is actually based on random email (generated by our Random generated email Action). It will collect all the emails and save them to the variable name.

### 23. **Generate uuid**
The action generates a unique ID using Python's UUID module and then replaces a specified substring within a file with the generated ID. The replacement can be case-sensitive and can replace all instances or just the first one. However, to generate unique ID with **Python uuid** module, we can use any **uuid** function inside `%||%` sign.

### 24. **Check mail by user**
This action checks for the existence of an email using the provided credentials and parameters, passing if the email is found and failing if not. If you choose not to verify the sender's name, you can delete the corresponding row, as it is optional.

### 25. **Send mail by user**
The purpose of this action is to send an email to a particular recipient. Here we are sending email using smtp protocol, so we need a smtp server and a port to connect to, then login into that server using the sender's email and password. After that we need the email of a recipient, the subject and the body to be sent to that recipient. One thing to note here is that for gmail tls report 587 is mandatory here and you should should make your gmail account less secured for app access before testing.

### 26. **Voice Command Response**
This action allows communication with a voice-activated device, like Alexa. The computer first speaks the wakeup word (e.g., "Alexa") followed by a command (e.g., "What's today's date"). It then listens for a response from the Alexa device, converts the spoken response into text, and stores it in a variable. You can adjust optional settings like voice name, speed, language, and microphone number. The default values are voice speed at 140, voice name as 'default', and microphone number set to 1.

### 27. **Authenticator Code Generator**
This action automates the generation of a two-factor authentication (2FA) code using an authenticator app in the background. The secret key, often stored as a QR code, needs to be provided and can be securely saved in an Environment Variable. By using `%|os.environ["AUTH"]|%`, the action retrieves the secret key and generates the current 2FA code for secure login. A name can be assigned for convenience alongside the secret code.

### 28. **Classifier AI**
This action uses the "Facebook-bart" AI model to classify a given text into a specified category, providing a confidence score, while also allowing file uploads to hidden elements on a webpage by specifying the element's ID and file path.

### 29. **Compare Partial Variables or Text**
The action allows users to compare two variables or a stored variable against a static value with a focus on partial matching. This feature enables flexibility by evaluating whether one string contains part of another, making it useful for validating conditions in dynamic data scenarios. Users must first save a variable using the "Save Variable" action to use this feature.

### 30. **Compare Two Lists and Save The Difference**
Sometimes we need to compare two list variables and need to use the elements which are in the 1st list but not in 2nd.  
**How it works**: Here compare means set difference. The action will return a single value from the compare list (1st value). For example, A = [1, 2, 3], B = [4, 5, 6]. List difference = A - B = [1, 3] (compare list), the return value is 1 (1st value).

### 31. **Create and Edit Screenshot**
The action refers to a screenshot function that allows users to capture their screen while excluding specific areas, resulting in those sections appearing as blacked-out regions in the final image.

### 32. **Custom Step Duration**
The action is used to adjust the step duration for performance measurement purpose.  
**Valid time formats**
1. HH:MM:SS.ffffff
2. MM:SS.ffffff
3. SS.ffffff
4. SS.  
**H-Hours**, **M-Minutes**, **S-Seconds**, **f-Milliseconds**.

### 33. **Data store get data**
Retrieving datastore table rows as a list of dictionaries, which can also be used to obtain specific column values.

### 34. **Data store overwrite**
This action will overwrite existing data, so exercise caution; it requires a list of lists of strings. It was created because the datastore write action did not fulfill all requirements. Therefore, format the data as needed using Python code before overwriting the table.

### 35. **Data store read**
The action is designed to **read data from a datastore** and store the result in a variable. The purpose of this action is to retrieve data from a specified datastore table and save the output into a variable for further use.

### 36. **Data store write**
The action is for **updating data in a datastore** and storing the result in a variable. This action updates data in a specified datastore table and stores the result in a variable for further use.

### 37. **Delete Variable value**
The action is for **deleting the value of a variable** by setting it to null. It sets the value of a specific variable to **null**, effectively deleting or resetting its value.   
**Example**
In the example provided, a variable named **abcd** is set to **null** to remove its current value.  
**Data**
- **abcd**: The variable that is being deleted (set to null). It is an element parameter.
- **Save Variable**: A common action named "save" that is used to confirm or store this change (the nullification of the variable).  
**Summary**
The action resets the value of the **abcd** variable to null, effectively deleting the data stored in it. After this, the change is saved using a common action to confirm the nullification.

### 38. **Disable Showing Value**
This action is designed to save the names of variables whose values should be hidden or masked in the logs. When this action is executed, any variable specified will have its value concealed in the log output, enhancing security by preventing sensitive data from being exposed during logging.

### 39. **Download File using FTP**
This action enables the downloading of a file using FTP with appropriate credentials. The user must provide the FTP server address, along with the FTP username and password, to access the file location. Additionally, the file path on the FTP server must be specified so that ZeuZ knows which file to download. The user is then required to specify the local file path where the file should be saved. If no local path is provided, the file will be downloaded to the root directory commonly `C:\` for Windows or **home** for Ubuntu/macOS.

### 40. **Extract Tabular Data from PDF**
This action allows you to extract tabular data from a single table within a PDF. You can also specify additional parameters to make the extraction more precise, such as the page number from which the table should be extracted. If multiple tables are present, you can select the desired table by using an index starting from 0. Additionally, filters can be applied to narrow the search, and you can specify particular rows and columns to retrieve specific data.

### 41. **Extract Text from PDF**
This action lets you extract specific text/string from a PDF file. You can specify the page number where you want to conduct the extraction. You can also use regular expressions to extract a pattern of text/string.

### 42. **File - Compare using disk file**
This action will allow you to compare two files. You can provide the files as attachments or you can provide the locations of the files in disk.

### 43. **File - Compare using file attachment**
This action will allow you to compare two files. You can provide the files as attachments or you can provide the location of the files in disk. This particular action will allow you to provide the `ini` files as an attachment.

### 44. **File - Copy using disk file**
The action allows users to copy a file within a file system by specifying its disk location. This process duplicates an existing file, enabling users to maintain a copy in a different location while preserving the original. By providing the exact path of the source file, the system can efficiently locate and duplicate it. This action is particularly useful for organizing files, backing up data, or editing a duplicate without affecting the original, thereby enhancing overall file management.

### 45. **File - Copy using file attachment**
This action enables users to copy a file by attaching the file directly along with the step data. By allowing the attachment of the desired file, the process becomes more user-friendly and efficient, eliminating the need to specify the file's path manually. This functionality simplifies the duplication process, ensuring that users can easily retain the original file while creating a copy.

### 46. **File - Create**
The action allows users to create a new file in a file system using the **create** action. To execute this action, users must specify the disk location where the new file should be generated, including the directory path and desired file name. This functionality is crucial for effective file management, as it enables users to organize their data and create various types of documents or scripts directly in the intended location.

### 47. **File - Download and unzip**
This action involves downloading a file from a specified URL and extracting its contents to a designated folder on the user's local system. Initially, the file is retrieved via an HTTP request, typically using programming languages, such as Python or JavaScript. Once downloaded, the file, often in a compressed format (e.g., zip), is unzipped using libraries designed for this purpose, like Python's `zipfile` module. Users can specify the extraction location, allowing for organized file management. This process streamlines operations, making it particularly useful in software development and data analysis by automating the handling of compressed files.

### 48. **File - Download using URL**
This action allows users to download a file from a specified URL and save it to their local disk. The absolute path to the downloaded file is stored in a variable named `file_path`. Users can optionally specify the save location, either as an absolute path or a relative path using the tlide symbol (~) to indicate the user's home directory. If no location is provided, the file will default to being saved in the `~/Downloads` folder.

### 49. **File - Find**
This action assists users in locating a specific file or folder on their local disk. By providing the file or folder's location, users can efficiently search for and identify the desired item within the filesystem.

### 50. **File - Move**
The **move** action enables users to relocate a file from its current disk location to a new specified location. To perform this operation, users must provide two key pieces of information: the source location, which is the current path of the file to be moved, and the destination location, which indicates where the file should be placed after the move. By executing this action, the file is transferred from the source to the destination, facilitating better organization and management of files within the filesystem.

### 51. **File - Rename (using disk file)**
The **rename** action enables users to change the name of a file on their disk. To perform this operation, users must provide the current file location, which identifies the exact path of the file, and the new file name that the file should take after the action is executed. This renaming process keeps the file in its original location while updating its name, enhancing file organization and making it easier to identify and manage files within the filesystem.

### 52. **File - Unzip**
The **unzip** action allows users to extract the contents of a compressed file to a specified destination path on their disk. To perform this action, users must provide the location of the compressed file (e.g., .zip or .tar.gz) that they wish to unzip, ensuring the system can locate it. Additionally, users can specify a destination path where the unzipped contents will be stored, facilitating organized file management. Upon execution, the contents of the compressed file are extracted to the chosen destination, making them readily accessible for use and enabling efficient retrieval of archieved files.

### 53. **File - Unzip file using attachment**
This action allows users to unzip a compressed file provided as an attachment and extract its contents to a specified destination on their disk. The user attaches a zip file and specifies a destination path where the unzipped contents will be stored. Upon execution, the contents are extracted and placed in the designated folder, making the files easily accessible and organized.

### 54. **File - Upload file to log uploader**
This action allows users to upload a file to the ZeuZ Log Uploader by specifying the file's location on their disk. Users provide the exact disk path of the file they wish to upload, ensuring the system can locate it for the upload process. Once the action is executed, the file is transferred to the ZeuZ platform, where it can be used for logging, tracking, or analysis purposes. This action streamlines the process of uploading files to ZeuZ, making it efficient for handling log data or other relevant files.

### 55. **File - Zip**
This action enables users to compress a file into a zip format and save it to a specified destination on their disk. To perform this action, users must provide the disk location of the file they wish to zip, ensuring the system knows where to locate the file. Additionally, they can specify the destination path where the newly created zip file will be saved. This action helps in reducing file size and organizing multiple files into a single compressed archive for easier storage or sharing.

### 56. **Folder - Copy**
This action allows users to copy a file from one location to another on their disk. By providing the source file's disk location and specifying the destination path, the system duplicates the file while keeping the original intact. The copied file is then placed in the designated destination. This action is useful for creating backups, duplicating files, or transferring files between different directories.

### 57. **Folder - Count no of files in a folder**
This action counts the total number of files within a specified folder, including all files located in its subfolders. Users provide the disk location of the folder they wish to analyze. The action then aggregates all files within that folder and its subdirectories. The result, which is the total file count, is stored in a shared variable named "noOfFiles". This action is useful for quickly determining the total number of files in a directory structure, including all nested files.

### 58. **Folder - Create**
The **create** action allows users to create a new folder at a specified disk location. To perform this action, users must provide the desired path where the folder should be created. Once executed, the system generates a new folder at the specified location. This action is useful for organizing files and directories, enabling users to structure their data more effectively by creating folders in their preferred locations.

### 59. **Folder - Empty Trash**
This action enables users to clear the trash can on Linux or Mac operating systems, permanently deleting all files and folders stored in the trash. By executing this action, the system empties the trash, freeing up disk space and ensuring that the deleted items can no longer be recovered. This is particularly useful for maintaining disk cleanliness and managing storage effectively.

### 60. **Folder - Find**
The action of locating a file or folder involves using a search tool in an operating system. Users can specify a location on the disk, such as drive or folder, to enhance accuracy. By entering the file or folder name, they initiate a search that scans the specified area and displays relevant results. This method improves efficiency and accuracy, allowing quick access to essential documents.

### 61. **Folder - Get home directory**
This action retrieves the location of the current home directory, where a user stores personal files and settings, and saves it in a shared variable called **home_directory**. This allows for easy access in subsequent actions within the program, enhancing efficiency and consistency by ensuring that the same reference is used throughout the script. Such functionality is especially beneficial in scripting and automation tasks that require frequent access to user-specific files and configurations.

### 62. **Folder - Move**
The **move** action enables users to transfer a folder from its current location to a specified target directory within the file system by providing both the original and new paths, facilitating better organization and management of files.

### 63. **Folder - Rename**
The **rename** action allows users to change a folder's name within a computer's file system by specifying its current disk location and providing a new name. Once both the location and new name are specified, the system updates the folder's name accordingly.

### 64. **Folder - Structure**
This action involves generating a comprehensive list of all sub-folders and files within a specified directory and displaying them in a hierarchial tree format. It begins by traversing the directory and its subdirectories to retrieve the names of all contained files and folders, organizing this data into a tree structure that visually represents their relationships. The final output is printed to the console or user interface, allowing users to easily understand the organization of the directory.

### 65. **Folder - Unzip**
This action involves unzipping or extracting the contents of a `.zip` file to a specified destination directory. It begins by identifying the source `.zip` file through its complete filepath and designating the destination directory where the extracted contents will be placed. Once both paths are provided, the system executes the unzip action, reading the compressed contents and preserving the original directory structure as they are extracted.

### 66. **Folder - Zip**
Zipping a folder involves compressing its contents into a single archive file, usually with a `.zip` extension, which reduces the overall file size. This process starts with selecting the folder, followed by initiating the zipping action often through a right-click in a file explorer and specifying a destination for the compressed file. The benefits of zipping include saving storage space, simplifying file sharing, and maintaining the original file structure. 
