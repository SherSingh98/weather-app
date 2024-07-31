Weather App Deployment Project
This repository contains the code and resources for deploying a weather application using Node.js, Docker, and AWS infrastructure managed through Terraform. The project aims to create a robust, scalable, and easily deployable weather information service accessible via web browsers.
Table of Contents
Overview
Architecture
Deployment
Usage
Contributing
License
Overview
The weather application provides users with real-time weather data for their desired locations. It leverages Node.js and Express.js for the backend, HTML, CSS, and JavaScript for the frontend, and integrates with external weather APIs to fetch accurate weather information.
For detailed information about the project's objectives, technologies used, and implementation details, please refer to the comprehensive project report.
Architecture
The application follows a client-server architecture, with the backend built using Node.js and Express.js, and the frontend utilizing HTML, CSS, and JavaScript. Docker is used for containerization, ensuring consistent deployment across different environments. The infrastructure is provisioned and managed using Terraform, with AWS as the cloud provider.
Key components of the architecture include:
Backend: Node.js, Express.js
Frontend: HTML, CSS, JavaScript
Containerization: Docker
Infrastructure as Code: Terraform
Cloud Provider: Amazon Web Services (AWS)
For a deeper understanding of the application's architecture, including diagrams and design decisions, please consult the project report.
Deployment
The deployment process involves the following steps:
Containerizing the application using Docker
Provisioning the necessary AWS resources using Terraform
Deploying the Docker container to an AWS EC2 instance
Detailed instructions for the deployment process can be found in the project report, including Terraform configuration, Docker build process, and AWS resource setup.
Usage
To use the weather application, simply access the deployed web application using a web browser. Enter the desired city and country to retrieve real-time weather information for that location.
For local development and testing, follow the installation and setup instructions provided in the project report.
Contributing
Contributions to the project are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request. Make sure to follow the contribution guidelines outlined in the project report.
License
This project is licensed under the MIT License. Feel free to use, modify, and distribute the code as per the terms of the license.
For any further information or inquiries, please refer to the project report or contact the project maintainers.
