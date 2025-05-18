---
id: easy-ocr-installation
title: EasyOCR Installation
---


1) **EasyOCR** requires *Python 3.6* or greater to run. Currently **ZeuZ** node is running at *Python 3.11* which will fulfill this requirement.

2) **EasyOCR** depends on a Python deep learning library called **PyTorch**. Install it by running  *pip install torch torchvision torchaudio*.

3) Install **EasyOCR** by running *pip install easyocr* on your terminal.

4) In order to perform GUI (Graphical User Interface) automation with keyboard and mouse after detection, the Python library **PyAutoGUI** will be used. Run *pip install pyautogui to install it*.

5) *(OPTIONAL)* **OpenCV** is another Python library that allows image processing tasks such as image manipulation, object detection, and feature extraction. While **OpenCV** is not a required library for **EasyOCR** to run, it helps with removing any noise associated with the detection by preprocessing. Install **OpenCV** by running *pip install opencv-python*.

### Using EasyOCR to Detect and Click Elements

1) Import the dependencies installed.

![](/img/how-tos/easy-ocr-installation/easy_ocr_imports.png)

2) Initialize **EasyOCR** Reader with *reader = easyocr.Reader(['en'])*

3) Define the region of interest on your screen capture. The region can be defined by *region = (left, top, width, height)*. For example, a region of *region = (100, 100, 800, 600)* means that an area of width 800 and height 600 will be scanned on the region. This region will start 100 pixels from the left side of the screen and 100 pixels from the top.

![](/img/how-tos/easy-ocr-installation/easy_ocr_photo2.png)

4) Capture a screenshot of the element you wish to detect or give the file path to the screenshot of the element. You can take a screenshot using *pyautogui*. You can use *screenshot = pyautogui.screenshot() to take a screenshot of the screen.

5) The screenshot can either be saved with *screenshot_path = screenshot.png* and read with *cv2.imread(screenshot_path), or with an in-memory approach using the numpy* library. With **image = cv2.cvtColor(np.array(screenshot), cv2.COLOR_RGB2BGR)** it can be converted to a **NumPy** array and subsequently to BGR format which is used by **OpenCV**.

6) Read the image using *results = reader.readtext(image)*.

7) 
![](/img/how-tos/easy-ocr-installation/easy_ocr_photo3.png)

The detected results are represented by a bounding box with 4 corners. We take the center of this bounding box and click on the element that we desired using *pyautogui*.

### Pytesseract Installation

1) Install Tesseract OCR from the **Github Repository**.

2) Add Tesseract OCR to your system path.

3) Run *pip install pytesseract* on your terminal.

4) **Pytesseract** requires a *Python Imaging Library* called **pillow** to run. Install it by running *pip install pillow*.

5) Open and image using *image = Image.open('path_to_image.png')*.

6) Perform OCR using *text = pytesseract.image_to_string(image)*  
*print(text)*.