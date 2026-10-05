# DevOps Fundamentals – Practical Assignment

This repository contains the setup, code, and CI/CD automation for the DevOps Fundamentals practical assignment.

---

## Assignment Overview

- **Question 1: Manual Infrastructure Creation (AWS Console)**
  - VPC, 2 Public Subnets (across 2 AZs for ALB), Internet Gateway, Route Table
  - EC2 Instance with NGINX serving custom DevOps training page
  - Application Load Balancer (ALB), Target Group, Health Checks, HTTP Listener (Port 80)
  - Output: Publicly accessible ALB DNS URL
- **Question 2: CI/CD Pipeline for AWS-Hosted Website**
  - Static HTML/CSS/JS website
  - Automated CI/CD via GitHub Actions (`test` -> `build` -> `deploy`)
  - Amazon S3 bucket deployment & CloudFront CDN distribution
  - Output: Publicly accessible CloudFront distribution URL

---

## Directory Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml      # CI/CD pipeline (Test -> Build -> Deploy to S3 -> Invalidate CloudFront)
├── scripts/
│   └── build.js            # Build/packaging script
├── src/
│   ├── index.html          # Assignment 2 web application
│   ├── style.css           # Styling
│   └── script.js           # Client-side script
├── tests/
│   └── website.test.js     # Automated test suite
├── package.json
└── README.md
```
