---
id: action-gui-controls-ocr-get-text-using-image
title: OCR - Get text using image
---

## Description

This action allows you to extract text based on its position in relation to the image you provide. The image has to be attached in the attachment section. You also have to provide the direction of the text corresponding to the image. The direction can be one of the following four, left, right, top, bottom. You can also provide an integer as the text gap option to be more specific about the text you want to extract. A variable name also has to be provided to store the extracted text. The following 2 scenarios should give you an idea of how you can implement the action,

**Scenario 1:**

![](/img/actions/gui-controls/ocr-get-text-using-image/get_text_image1.jpg)

Suppose you want to extract the Remote Port number shown in the above image, that is 4723. In that case, you have to take a cropped image of only the “Remote Port” part, attach it to the test case and provide the name of the image in the image row (the first row) of the action. As 4723 is on the right side of the right side of Remote Port, the value for the direction row will be right. Finally, you should also provide a variable name in the last row that will hold the extracted text. The text “4723” will be successfully stored in that variable.

**Scenario 2:**

![](/img/actions/gui-controls/ocr-get-text-using-image/get_text_image2.jpg)

Suppose you want to extract the word “SauceLabs” using the image of BrowserStack. Then you have to take a cropped image of the BrowserStack part, attach it to the test case and provide the name of the image in the image row (the first row) of the action. As “SauceLabs” is above the BrowserStack, here the direction will be top. Now the text “SauceLabs” will be stored in the variable you provided in the final row.

## Optional Parameters:

**text gap:** Now, let’s see how we can use the “text gap” option. With the help of an image, we can extract text adjacent to the image. Now this adjacency can be defined using the “text gap” option. Let us consider the following 2 scenarios

**Scenario 1:**

Suppose you want to extract the word “Current Advance” using the cropped image of “Interest Deductions”.

![](/img/actions/gui-controls/ocr-get-text-using-image/gap_option_horizontal_use.jpg)

Now as you can see the word “Current Advance” is located right to the “Interest Deductions” but it's not aligned horizontally with the “Current Advance”. So if we declare the image and set the direction to right we will not be able to extract anything as the words are out of alignment as shown in the following image.

![](/img/actions/gui-controls/ocr-get-text-using-image/gap_option_horizontal_use_default.jpg)

But if we set the text gap to 300 then the word “Current Advance” gets aligned with the word “Interest Deductions” as we have added 300 pixels. Now the range gets broader and any word that falls within that range can be considered as an adjacent word. This way you can extract words that may not be extracted generally.

![](/img/actions/gui-controls/ocr-get-text-using-image/gap_option_horizontal_use_option.jpg)

**Scenario 2:**

Suppose you want to extract the word above “SauceLabs”.

![](/img/actions/gui-controls/ocr-get-text-using-image/gap_option_vertical_use.jpg)

In this case, you are hoping to extract the word “Select Cloud Provide” as it is right above “SauceLabs”. But if you run the action without specifying the text gap option you will see you extracted the word “Remote Port”.

![](/img/actions/gui-controls/ocr-get-text-using-image/gap_option_vertical_use_default.jpg)

As you can see in the above image the range for which a word can be considered as an adjacent word of the “SauceLabs” does not involve the word “Select Cloud Provide” but involves the word “Remote Port”. So the word ‘Remote Port” gets extracted instead of “Select Cloud Provide”. Now if you widen the range using the text gap option you will be able to extract the word “Select Cloud Provide” as you desire.

![](/img/actions/gui-controls/ocr-get-text-using-image/gap_option_vertical_use_option.jpg)

