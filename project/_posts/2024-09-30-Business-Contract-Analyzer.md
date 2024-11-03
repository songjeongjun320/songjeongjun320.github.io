---
layout: post
title: "Business Contract Analyzer"
subtitle: "An efficient tool for PDF manipulation"
order: 5
gh-repo: songjeongjun320/jun-song.github.io
gh-badge: [follow]
cover-img: /assets/img/ocean2.jpg
comments: true
category: project
---

# Business Contract Analyzer

Welcome to the official repository of **Business Contract Analyzer**:  
🚀 [Visit the site](https://bsn-contract-analyzer.vercel.app/)  
🚀 [GitHub Repository](https://github.com/songjeongjun320/business-contract-analyzer)  
🚀 [LinkedIn Post]()

## Project Overview

💡 **Business Contract Analyzer** is a powerful tool designed to analyze business contracts for individuals and companies alike. Through this platform, users can identify vulnerabilities in their contracts, discover potential toxic clauses, and understand how these clauses might lead to financial losses. Our research-driven model provides insights in an easily digestible format, empowering users to make informed decisions. The goal of our platform is to analyze contract weaknesses more efficiently and quickly, offering alternatives without incurring costly lawyer fees, whether for personal use or business purposes. 🌱 **Transform your contract analysis experience!**

## Features ✨

- **Page Splitting**: Users can upload a PDF file and automatically split it into separate pages.
- **Text Extraction**: The tool extracts text from each PDF page, saving it as a clean text file.
- **Organized Output**: Splitted PDFs and extracted text files are saved in clearly defined directories for easy access through the model.

## Tech Stack 🛠️

- **Frontend**: Next.js
- **Backend**: Python (PyPDF2 and pdfminer libraries), AWS (EC2, Route 53, Load Balancer)
- **Deployment**: Vercel
- **Version Control**: GitHub
- **Environment**: Node.js for server-side logic

---

## AWS EC2 and HTTPS Setup 🔒

To ensure secure communication and high availability for our backend server, we deployed our Flask application on an AWS EC2 instance and configured HTTPS with a load balancer. This setup involved several key steps:

1. **Deployed an EC2 Instance**: The Flask server is hosted on an AWS EC2 instance to manage contract analysis requests efficiently.
2. **Domain and SSL Certificate**: We registered a domain in AWS Route 53 and obtained an SSL certificate from AWS Certificate Manager (ACM) to enable HTTPS.
3. **HTTPS Load Balancer**: Configured an AWS Application Load Balancer to handle HTTPS requests. All HTTP requests are automatically redirected to HTTPS for secure communication.
4. **Security Groups and Port Management**: Set up security groups to allow only necessary ports (443 for HTTPS, 80 for HTTP redirect, and 5000 for internal communication) and ensure safe access control.

Through this setup, **Business Contract Analyzer** provides a secure and scalable infrastructure for users, protecting sensitive data and offering a smooth experience on the platform.

### 🌟 **Final Remarks** 🌟

💡 This project's goal is to ensure that all individuals do not suffer through contracts and that everyone can enter into safe agreements.

**Thank you**
