---
layout: post
title: Gateway OCR Project
subtitle: AI-Powered Container Number Detection from CCTV Footage
gh-repo: songjeongjun320/jun-song.github.io
gh-badge: [follow]
cover-img: /assets/img/ocean1.jpg
comments: true
---

# Gateway OCR Project

## Overview

The Gateway OCR project is designed to automate the detection and extraction of container numbers from CCTV footage using advanced machine learning and OCR technologies. This project enhances the efficiency of container management by ensuring accurate and timely data capture, facilitating seamless integration with Yard Management Systems (YMS).

## Objective

The primary objective of this project is to improve the accuracy and scalability of container number detection and extraction processes. By leveraging machine learning models and optimizing the OCR pipeline, the project aims to minimize missing transactions and provide sustainable, readable, and documented code.

--- 

## Workflow

### CCTV System (Synology)
- A motion detection system captures images when movement is detected.
- Images are sent to a file server via FTP and stored as “Sample_File”.

### Container Number Region Detection (YOLOv5)
- YOLOv5 is used to detect the region containing the container number in the images or video files.

### Container Number Detection (NGL_OCR Engine)
- The NGL_OCR engine processes images to detect and extract container numbers, making use of Tesseract OCR for text recognition.

### Upload to YMS
- Extracted data, including date, time, and container number, is uploaded to the Yard Management System.

---

## Development History

### Key Milestones
- **01/10/2022**: Initiated project planning and requirement gathering for the OCR system.
- **01/25/2022**: Completed initial literature review on existing OCR technologies and image processing techniques.
- **02/05/2022**: Set up development environment with necessary tools and libraries.
- **02/20/2022**: Developed initial prototype for image extraction from video footage.
- **03/01/2022**: Conducted initial tests on prototype with sample video footage.
- **03/15/2022**: Integrated Pytesseract for basic OCR functionality.
- **04/01/2022**: Identified and documented common challenges in OCR accuracy with real-world footage.
- **04/18/2022**: Implemented basic image preprocessing techniques to improve OCR results.
- **05/02/2022**: Evaluated different OCR libraries and selected the best fit for the project.
- **05/20/2022**: Achieved initial success in extracting container numbers from high-quality images.
- **06/10/2022**: Collaborated with team to outline a more detailed project roadmap.
- **06/25/2022**: Enhanced image preprocessing pipeline to handle a wider variety of image conditions.
- **07/05/2022**: Began integration of AWS services for scalable storage and processing.
- **07/20/2022**: Conducted performance benchmarking of OCR system and identified bottlenecks.
- **08/01/2022**: Optimized video processing workflow to reduce latency and improve real-time capabilities.
- **08/15/2022**: Prepared detailed project documentation and progress report for stakeholders.
- **08/25/2022**: Conducted a review meeting to align project progress with initial goals and milestones.
- **09/02/2022**: Established strategy for automatic image extraction and container number processing.
- **09/05/2022**: Utilized open-source libraries including Python, Tesseract, OpenCV, NumPy, and Matplotlib.
- **09/08/2022**: Optimized container number extraction strategy to reduce computational overhead.
- **09/15/2022**: Refined image processing steps by removing redundant contrast maximization and thresholding operations.
- **09/21/2022**: Improved image denoising and thresholding techniques using OpenCV.
- **09/22/2022**: Adjusted image brightness and added erosion to remove non-text elements.
- **10/03/2022**: Successfully eliminated useless areas from images.
- **10/11/2022**: Incorporated TensorFlow object detection to handle special contour cases using Google's Teachable Machine.
- **10/12/2022**: Enhanced contour arrangement by removing constraints that affected OCR accuracy.

---

## Technologies Used
- **Programming Language**: Python
- **Libraries**: YOLOv5, Tesseract, OpenCV, NumPy, Matplotlib, TensorFlow
- **Tools**: Synology, FTP, Yard Management System (YMS)

--- 

## Success Metrics
- Achieve higher detection accuracy to reduce missing transactions.
- Ensure codes are sustainable, readable, and scalable for future development.

--- 

## Repository
For more details and source code, visit the [GitHub repository](https://github.com/songjeongjun320).
