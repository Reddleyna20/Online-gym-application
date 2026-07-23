# Online Gym Application

Project Description

The Online Gym Application is a simple web application that allows users to register for a gym online. It provides an easy-to-use registration form where users can enter their personal information, fitness goals, and preferred workout schedule.

The application was developed as part of the Application Design and Development course assignment and was containerized using Docker for easy deployment.


Features

- Responsive homepage
- Gym registration form
- Fitness goal selection
- Medical condition selection
- Preferred workout time
- Form validation using JavaScript
- Responsive design
- Docker container support

---

Technologies Used

- HTML5
- CSS3
- JavaScript
- Docker
- Nginx



Project Structure


online-gym-application/
│
├── images/
├── index.html
├── register.html
├── style.css
├── script.js
├── Dockerfile
├── .dockerignore
└── README.md


How to Run the Project

Clone the repository

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/online-gym-application.git
```

Build the Docker image

```bash
docker build -t online-gym-application:v1.0 .
```

Run the Docker container

```bash
docker run -d -p 8080:80 online-gym-application:v1.0
```

Open your browser and visit:

```
http://localhost:8080
```

---

## Docker Hub Image

Docker Hub Repository:

```
https://hub.docker.com/r/20041803/online-gym-application
```

Pull the image using:

```bash
docker pull 20041803/online-gym-application:v1.0
```

Run the container:

bash
docker run -d -p 8080:80 20041803/online-gym-application:v1.0


Created by:

Leyna Essien-Obot Ini

Computer Science Student

University of Jos

