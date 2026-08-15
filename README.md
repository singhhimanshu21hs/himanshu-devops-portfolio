# 🚀 Amit K Pandey - (Cloud & DevOps Engineer) Portfolio

![DevOps](https://img.shields.io/badge/Role-DevOps%20%26%20Cloud%20Engineer-00d9ff?style=for-the-badge&logo=devops)
![AWS](https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)
![Azure](https://img.shields.io/badge/Azure-0089D6?style=for-the-badge&logo=microsoft-azure&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white)
![Terraform](https://img.shields.io/badge/Terraform-7B42BC?style=for-the-badge&logo=terraform&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-00d084?style=for-the-badge)

---

## 📌 Overview

Production-ready, highly interactive **DevOps Engineer Portfolio** designed to highlight multi-cloud deployment (AWS/Azure), Infrastructure as Code (IaC), container orchestration, and DevSecOps pipelines. 

- **Live Site**: [amit5197.github.io/portfolio](https://amit5197.github.io/portfolio/)
- **Repository**: [github.com/Amit5197/portfolio](https://github.com/Amit5197/portfolio)
  
---

## 📌 About This Project

This is my personal **DevOps Engineer Portfolio Website** built to showcase:

- Cloud infrastructure skills
- DevOps automation experience
- CI/CD pipeline knowledge
- Containerization projects
- Infrastructure as Code
- Monitoring and automation skills

```Next.js → Git → GitHub → GitHub Actions → quality/security checks → Docker → deployment → monitoring → documentation```

---

## 🏗️ Target CI/CD & Deployment Architecture


                            ┌──────────────────────┐
                            │    GitHub Repository │
                            │  Source & Workflows  │
                            └──────────┬───────────┘
                                       │
                                       │ git push (main)
                                       ▼
                            ┌──────────────────────┐
                            │    GitHub Actions    │
                            │  1. Secret Scan      │
                            │  2. Vulnerability    │
                            │  3. Static Build     │
                            │  4. Artifact Stage   │
                            └──────────┬───────────┘
                                       │
                    ┌──────────────────┴──────────────────┐
                    ▼                                     ▼
         ┌─────────────────────┐               ┌─────────────────────┐
         │ GitHub Pages Deploy │               │ Docker Container    │
         │ Live Web Hosting    │               │ Registry / Hosting  │
         └──────────┬──────────┘               └─────────────────────┘
                    │
                    ▼
        🌐 Public Live Portfolio

---

## Portfolio Link->

https://amit5197.github.io/portfolio/

---

## 🛠️ Tech Stack & Tooling

### Frontend & UI
* **Core**: HTML5, CSS3, JavaScript (ES6+)
* **Styling**: Modern CSS Custom Properties, Glassmorphism UI, Ambient Gradients
* **Animations**: Native CSS Transitions, Canvas Particles, Custom Keyframes
* **Icons**: Font Awesome 6.5

### DevOps, Security & Cloud Stack
* **Cloud**: AWS (EC2, S3, VPC, Route 53, IAM, ALB/NLB), Microsoft Azure, OCI
* **Containers & Orchestration**: Docker, Docker Compose, Kubernetes, Helm
* **Infrastructure as Code (IaC)**: Terraform, Ansible
* **CI/CD & Security**: GitHub Actions, Jenkins, Gitleaks, Trivy SAST
* **Monitoring & Observability**: Prometheus, Grafana, AWS CloudWatch, ELK Stack
* **OS & Scripting**: Linux System Administration, Bash Scripting, Cron Automation

---

## 📂 Project Structure

```
portfolio/
├── index.html              # Main HTML markup containing all sections
├── css/
│   └── style.css           # Modern unified stylesheet (Variables, Glassmorphism, Responsive)
├── js/
│   ├── app.js              # Main core app engine, smooth scrolling, header states
│   ├── animation.js        # Intersection Observer, scroll reveal, menu controls
│   └── chatbot.js          # Interactive AI DevOps assistant chatbot logic
├── resume.pdf              # Resume downloadable asset
├── .github/
│   └── workflows/
│       └── deploy.yml      # DevSecOps CI/CD workflow (Gitleaks, Trivy, Pages Deploy)
├── README.md               # Repository documentation
└── LICENSE                 # Open-source MIT license
```

---

## ✨ Features

- **DevOps Terminal Aesthetic**: Dark mode primary theme complete with responsive interactive terminal windows and status indicators.
- **Interactive AI Portfolio Chatbot**: Built-in assistant capable of answering questions about Docker, Kubernetes, AWS, CI/CD, and professional experience.
- **Automated DevSecOps Pipeline**: Integrated GitHub Actions pipeline equipped with secret scanning (Gitleaks) and security vulnerability auditing (Trivy).
- **Responsive & Accessible**: Fully optimized across desktop, tablet, and mobile viewports with accessibility considerations for reduced motion.

---

## 👨‍💻 Author & Contact

## Amit K Pandey

## DevOps & Cloud Engineer

LinkedIn: linkedin.com/in/amitpandey511997

GitHub: github.com/Amit5197

## 📜 License
This project is licensed under the MIT License.

