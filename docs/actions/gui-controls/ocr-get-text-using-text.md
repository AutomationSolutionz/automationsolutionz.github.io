---
id: action-gui-controls-ocr-get-text-using-text
title: OCR - Get text using text
---

## Description

This action allows you to extract text based on its position in relation to the text you specified. You also have to provide the direction of the text corresponding to the text that you provided. The direction can be one of the following four, left, right, top, bottom. This action tries to find the text that you provided using the OCR method. That’s why there are some optional parameters like method and threshold to find your given text first. Then based on the direction you provided you are able to extract the text you desire. You can also provide an integer as the text gap option to be more specific about the text you want to extract. A variable name also has to be provided to store the extracted text. The following 2 scenarios should give you an idea of how you can implement the action

**Scenario 1:**

![](/img/actions/gui-controls/ocr-get-text-using-text/get_text_image1.jpg)

Suppose you want to extract the Remote Port number shown in the above image, that is 4723. In that case, you have to mention the text “Remote Port” in the text row (the first row) of the action. As 4723 is on the right side of the right side of Remote Port, the value for the direction row will be right. Finally, you should also provide a variable name in the last row that will hold the extracted text. The text “4723” will be successfully stored in that variable.

**Scenario 2:**

![](/img/actions/gui-controls/ocr-get-text-using-text/get_text_image2.JPG)

Suppose you want to extract the word “SauceLabs” using the text “BrowserStack”. Then you have to provide the text “BrowserStack” in the text row (the first row) of the action. As “SauceLabs” is above the BrowserStack, here the direction will be top. Now the text “SauceLabs” will be stored in the variable you provided in the final row.

Optional Parameters:

**text gap**: Now, let’s see how we can use the “text gap” option. With the help of the given text, we can extract text adjacent to the given text. Now this adjacency can be defined using the “text gap” option. Let us consider the following 2 scenarios

**Scenario 1:**

Suppose you want to extract the word “Current Advance” using the text “Interest Deductions”.

![](/img/actions/gui-controls/ocr-get-text-using-text/gap_option_horizontal_use.jpg)

Now as you can see the word “Current Advance” is located right to the “Interest Deductions” but it's not aligned horizontally with the “Current Advance”. So if we declare the text and set the direction to right we will not be able to extract anything as the words are out of alignment as shown in the following image.

![](/img/actions/gui-controls/ocr-get-text-using-text/gap_option_horizontal_use_default.jpg)

But if we set the text gap to 300 then the word “Current Advance” gets aligned with the word “Interest Deductions” as we have added 300 pixels. Now the range gets broader and any word that falls within that range can be considered as an adjacent word. This way you can extract words that may not be extracted generally.

![](/img/actions/gui-controls/ocr-get-text-using-text/gap_option_horizontal_use_option.jpg)

**Scenario 2:**

Suppose you want to extract the word above “SauceLabs”.

![](/img/actions/gui-controls/ocr-get-text-using-text/gap_option_vertical_use.jpg)

In this case, you are hoping to extract the word “Select Cloud Provide” as it is right above “SauceLabs”. But if you run the action without specifying the text gap option you will see you extracted the word “Remote Port”.

![](/img/actions/gui-controls/ocr-get-text-using-text/gap_option_vertical_use_default.jpg)

As you can see in the above image the range for which a word can be considered as an adjacent word of the “SauceLabs” does not involve the word “Select Cloud Provide” but involves the word “Remote Port”. So the word ‘Remote Port” gets extracted instead of “Select Cloud Provide”. Now if you widen the range using the text gap option you will be able to extract the word “Select Cloud Provide” as you desire.

![](/img/actions/gui-controls/ocr-get-text-using-text/gap_option_vertical_use_option.jpg)

**method:** For the given text, if the exact text is not found then the method option lets you select the closest text based on some given parameters like "match", "partial match", "loose match". If you use the "match" option then the similarity between the texts has to be very strong to get a good score but if you select "loose match" then even weaker similarity will produce a good score. Suppose, you have specified a text, "E-Transfer Total" and the OCR was able to pick up "Transfer Tol". Now, if you use the "match" option then the score between these two texts will be 86 but if you selected "loose match" as the method then you will get a score of 92. The "partial match" should give a score in between those two scores. So according to your need, you can specify different parameters.

**threshold:** Previously we talked about different methods of matching and how they produce different scores. Now we can specify a threshold that will allow us to have more control over when we want to click something based on what score. Suppose we want to be strict in case of clicking. In that case, we can set the threshold to 90 so that only when the score of text matching is above or equal to 90, we can execute a click. If you want an exact match then set the threshold to 100.

