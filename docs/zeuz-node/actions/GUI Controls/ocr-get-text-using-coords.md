---
id: action-gui-controls-ocr-get-text-using-coords
title: "OCR: Get Text Using Coordinates"
sidebar_label: "OCR - Get text using coordinates"
description: "Use OCR Get Text Using Coordinates in ZeuZ to crop a screen region by top, left, bottom, and right values, then extract the text found inside it step by step."
keywords: ["OCR Get Text Using Coordinates"]
---

{/* seo:meta-title */}
<head>
  <title>OCR Get Text Using Coordinates | ZeuZ GUI Action Docs Guide</title>
</head>

## Description

This action lets you crop a portion of the screenshot taken of the current screen and extract the text present in that particular portion of the image. You have to specify the top, left, bottom, right coordinates of the cropping part like the first image. Suppose you want to extract the date of creation of maps using coordinates like the second image. Then you have to provide the top, left, bottom, right coordinates that will form a bounding box around that text. Also, you have to provide a variable name that will store the extracted text. In return, you will get the extracted word as a variable.

![](/img/actions/gui-controls/ocr-get-text-using-coords/top_left_bottom_right.png)

![](/img/actions/gui-controls/ocr-get-text-using-coords/get_text_coordinates.JPG)