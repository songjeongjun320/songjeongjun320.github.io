---
layout: post
title: "Building YMS(Yard Management System)"
subtitle: "Using Machine Learning and OCR(Optical Character Recognition) Technology"
order: 2
gh-repo: songjeongjun320/jun-song.github.io
gh-badge: [follow]
cover-img: /assets/img/ocean2.jpg
comments: true
category: project
---

# FURI Project Progress

## Project Update: Uploading PDF Files to Website

### Project Description

The project aims to develop a system for uploading and managing PDF files on a website. This involves creating an intuitive user interface, ensuring secure file handling, and providing efficient file management features.

### Project Repository

[ASU_FURI_Project GitHub Repository](https://github.com/songjeongjun320/ASU_FURI_Project)

### Weekly Progress

#### Week 1: Project Initiation and Planning

- **Updates:**
  - Overview of project goals and objectives
  - Assignment of roles and responsibilities
  - Initial project timeline and milestones
- **Next Steps:**
  - Set up project repository on GitHub
  - Research existing solutions and technologies for file uploading
  - Draft initial project plan and timeline

#### Week 2: Research and Requirements Gathering

- **Updates:**
  - Review of initial research findings
  - Detailed requirements gathering for the system
  - Identification of potential challenges and risks
- **Next Steps:**
  - Finalize project requirements
  - Start designing the system architecture
  - Begin initial UI/UX design sketches

#### Week 3: System Design and Prototype Development

- **Updates:**
  - Presentation of system architecture and UI/UX designs
  - Feedback and suggestions for improvements
- **Next Steps:**
  - Incorporate feedback into designs
  - Start development of prototype
  - Set up development environment and tools

#### Week 4: Prototype Testing and Refinement

- **Updates:**
  - Demonstration of the prototype
  - Testing and bug identification
  - Discussion on enhancements and additional features
- **Next Steps:**
  - Fix identified bugs
  - Implement additional features based on feedback
  - Prepare for next phase of development

#### Week 5: Full Development and Integration

- **Updates:**
  - Review of prototype performance
  - Planning for full development and integration
  - Discussion on deployment strategies and testing plans
- **Next Steps:**
  - Complete development of all features
  - Integrate the system with existing infrastructure
  - Conduct thorough testing and prepare for deployment

#### Week 6

- **Updates:**
  - Set up AWS S3 Bucket with OCR
  - Shared git repository - "ASU_FURI_Project"
  - Revised YOLO code for folder creation detection
  - Connected to ASU Supercomputer
- **Next Steps:**
  - Main Page and Login Page setup
  - Label container dataset
  - Create AWS & MySQL
  - Attend "AI Ignition: Fueling Your Knowledge 2024"

#### Week 7

- **Updates:**
  - Connected AWS to OCR test file
  - Revised YOLO structure to remove useless processes
- **Next Steps:**
  - Design front-end web using "Figma"
  - Use "superannotate" for labeling
  - Separate AWS-Key from code for security

#### Week 8

- **Updates:**
  - Combined YOLO & OCR code
  - Chose front-end language
  - Redesigned main page function
- **Next Steps:**
  - Minimize sent picture amount to 3-5
  - Continue labeling using "superannotate"
  - Set up AWS account

#### Week 9

- **Updates:**
  - YOLO now stops processing after detecting 3 valuable pictures
  - Revised main page to show line by line
  - Decided to use HTML, CSS & JavaScript
- **Next Steps:**
  - Revise for clearer pictures and trim logic
  - Continue labeling using "superannotate"
  - Develop frontend "main_detail" page

#### Week 10

- **Updates:**
  - Revised YOLO logic to detect all pictures and select the best quality ones
  - Decided to send images to Textract first, then to AWS S3 bucket if successful
  - Developed container detail page functionality in frontend
- **Next Steps:**
  - Continue labeling using "superannotate" (3000 pictures per member)
  - Revise backend logic to send image with maximum clarity
  - Develop login page
  - Set up SQL integration for main page

#### Week 11

- **Updates:**
  - Connected to Textract and extracted container number results
  - Set up Login Page with sign-up and sign-in features
- **Next Steps:**
  - Strengthen the Login Page with duplication account error handling and reset password feature
  - Debug DB connection error and encrypt DB access key
  - Create a JSON file with date, time, and container number information from Textract results

#### Week 12

- **Updates:**
  - Refined the string data from Textract and contracted the container number and size
  - Strengthened the Login Page by adding Sign-up and Reset password features
- **Next Steps:**
  - Set up the database with PostgreSQL
  - Continue refining data from Textract and revising it to contract the container number and size

#### Week 13

- **Updates:**
  - Changed logic from using Laplacian for image clarity to using YOLO’s confidence as an accuracy indicator
  - Continued strengthening the Login Page with Sign-up and Reset password features
- **Next Steps:**
  - Set up Node.js and Supabase for the backend
  - Establish API communication between frontend and backend

---

**Current Work:**
Developing a real-time business web page for end users using Supabase, PostgreSQL, and Next.js.

## LinkedIn Posts

1. [First LinkedIn Post](https://www.linkedin.com/posts/junsong0602_ai-machinelearning-yolo-activity-7218802097410957313-92jS?utm_source=share&utm_medium=member_desktop)
2. [Second LinkedIn Post](https://www.linkedin.com/posts/junsong0602_ai-machinelearning-yolo-activity-7212526873040277504-xzzy?utm_source=share&utm_medium=member_desktop)
3. [Third LinkedIn Post](https://www.linkedin.com/posts/junsong0602_research-machinelearning-yolov8-activity-7208008590295465984-azLr?utm_source=share&utm_medium=member_desktop)
4. [Fourth LinkedIn Post](https://www.linkedin.com/posts/junsong0602_asu-ocr-project-poster-activity-7228136673174282240-VnH8?utm_source=share&utm_medium=member_desktop)

## Demo Videos

[Demo video: 1 mins](https://www.youtube.com/watch?v=AhEH7NC7Qd0)

<iframe width="770" height="432" src="https://www.youtube.com/embed/AhEH7NC7Qd0" frameborder="0" allowfullscreen></iframe>

---
