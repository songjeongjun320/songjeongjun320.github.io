---
layout: post
title: ""
subtitle: ""
order: 3
gh-repo: songjeongjun320/Bookstore_project
gh-badge: [follow]
cover-img: /assets/img/bookstore.jpg
comments: true
category: project
---

# 📚 ASU Bookstore Web App

Welcome to the **ASU Bookstore Web App** project! This platform is designed to help **Arizona State University (ASU)** students buy and sell textbooks efficiently. By leveraging dynamic page navigation and user-friendly interfaces, we aim to streamline the book management experience.

---

## 🛠 Project Overview

The **ASU Bookstore Web App** offers a comprehensive solution for textbook trading within the ASU community. It includes features like:

- Seamless textbook purchases.
- Listing and selling used textbooks with detailed metadata.
- Dynamic search and filtering capabilities.
- Responsive design optimized for all devices.

[🔗 GitHub Repository](https://github.com/songjeongjun320/Bookstore_project)

---

## 🎯 Challenges and Solutions

### 1. **Branch Merging Conflicts**

- **Issue**: Conflicts in `src/controllers` during branch merges.
- **Solution**:
  - Resolved conflicts manually by reviewing changes.
  - Reset to the last stable version when necessary.

### 2. **Dynamic Metadata Extraction**

- **Issue**: Inconsistent book data due to unstructured file names.
- **Solution**:
  - Implemented a naming convention:  
    `Title_Author_Seller_Condition_Date_Category.png`.
  - Dynamically parsed metadata to populate book details.

### 3. **Seamless Page Navigation**

- **Issue**: Maintaining smooth navigation between book listing and detail pages.
- **Solution**:
  - Designed `Main` as a **Singleton Controller**.
  - Dynamically created new `Stages` for specific pages (e.g., Book Detail Page).

### 4. **Efficient Search and Filtering**

- **Issue**: Combining search by title and filtering by category.
- **Solution**:
  - Integrated `CheckBox` components for categories.
  - Added `TextField` for title-based search.
  - Ensured both features update the book list dynamically.

### 5. **Responsive and Intuitive UI**

- **Issue**: Adapting the interface for both desktop and mobile devices.
- **Solution**:
  - Leveraged JavaFX components like `GridPane`, `VBox`, `HBox`, and `ScrollPane`.
  - Implemented dynamic layouts for a clean and responsive user experience.

---

## ✨ Key Features

### 📘 **Dynamic Book Listings**

- Automatically loads books from the `db` folder.
- Metadata is extracted from file names to display details such as:
  - Title, Author, Seller, Condition, Date, and Category.

### 🔎 **Search and Filter**

- **Search**: Quickly locate books by title.
- **Filter**: Narrow down results by categories like Science, Business, or Philosophy.

### 📋 **Book Detail Page**

- Provides in-depth information for each book.
- Features options to add books to a cart or purchase directly.

### 📱 **Responsive Design**

- Optimized for both desktop and mobile devices for seamless usability.

### 💳 **Add to Cart and Purchase**

- Easily manage purchases through the cart or directly from the book detail page.

---

## 🧑‍💻 Technical Implementation

### **Frontend**

- Built using **JavaFX** for a rich, interactive interface.
- Layouts designed with components like `GridPane`, `VBox`, and `HBox`.

### **Backend**

- Managed navigation and logic using a `Main` Singleton Controller.
- Extracted book details dynamically from image file names.

### **File-Based Data Storage**

- Simplified data management by structuring metadata in file names.

---

## 🗂️ Version Control

Efficient version control was a critical part of our development process. We utilized **GitHub** to manage our codebase and ensure smooth collaboration among team members.

### Workflow:

1. **Branching Strategy**:

   - Each team member worked on their own individual branch to develop specific features or fix bugs.
   - This ensured that independent work did not interfere with the main codebase.

2. **Merge Process**:

   - Completed branches were merged into a dedicated **merge branch** where all changes were combined.
   - The combined code underwent rigorous testing to ensure stability and functionality.

3. **Main Branch Deployment**:
   - Only code that successfully passed all tests was merged into the **main branch**.
   - This approach ensured that the `main` branch always contained stable and deployable code.

By following this structured process, we maintained high code quality, minimized conflicts, and facilitated effective teamwork throughout the project.

## 🚀 How to Run the Project

### Clone the Repository:

```bash
git clone https://github.com/songjeongjun320/Bookstore_project
cd Bookstore_project
# Simply run the project
```

## 👥 Team Members

We collaborated as a diverse and talented team to bring this project to life:

- **Abdirisaq Abdisalam** 🎓
- **Tumaini Donedison** 🎓
- **Rahul Patel** 🎓
- **Tuhina Singh** 🎓
- **Jun Song** 🎓

---

## 🎨 Design with Figma

Our UI/UX designs are crafted using Figma for a professional and seamless experience. Explore the visual layouts and flows that shape the ASU Bookstore Web App.

🔗 [View Figma Design](https://www.figma.com/design/w4xP4b6ZEQeTfruRTu9mEO/ASU-Bookstore?node-id=101-6&t=e6Cpgx5YKiBr4RYT-1)

---

## 🧑‍💻 Tech Stack

We utilized a modern and robust tech stack to develop this project:

- **Frontend**: JavaFX, JavaScript, CSS
- **Backend**: Node.js
- **Database**: PostgreSQL
- **Design**: Figma
- **Version Control**: GitHub, Jira
