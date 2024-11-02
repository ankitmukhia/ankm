export const meta = {
  title: "Ankit",
  description: "Developer focused on hands-on learning by trying things out and deploying.",
  domain: "ankitdevs.dev",
  tagline: "Developer"
}

export interface Project {
  id: number
  title: string;
  description: string;
  technologies: string[];
  link: string;
  imageUrl: string;
  date: string;
}

export const projects: Array<Project> = [
  {
    "id": 1,
    "title": "Personal Blog",
    "description": "A responsive blog site where I share my thoughts on technology and coding.",
    "technologies": ["HTML", "CSS", "JavaScript", "React"],
    "link": "https://myblog.com",
    "imageUrl": "https://myblog.com/images/blog-screenshot.png",
    "date": "2023-05-15"
  },
  {

    "id": 2,
    "title": "E-commerce Platform",
    "description": "An online store built to showcase and sell products with secure payment integration.",
    "technologies": ["Node.js", "Express", "MongoDB", "React"],
    "link": "https://myecommerce.com",
    "imageUrl": "https://myecommerce.com/images/ecommerce-screenshot.png",
    "date": "2023-07-20"
  },
  {
    "id": 3,
    "title": "Portfolio Website",
    "description": "A personal portfolio website to showcase my skills and projects.",
    "technologies": ["HTML", "CSS", "JavaScript"],
    "link": "https://myportfolio.com",
    "imageUrl": "https://myportfolio.com/images/portfolio-screenshot.png",
    "date": "2023-08-10"
  },
  {
    "id": 4,
    "title": "Weather App",
    "description": "A weather forecasting app that provides real-time weather data using an API.",
    "technologies": ["HTML", "CSS", "JavaScript", "OpenWeather API"],
    "link": "https://myweatherapp.com",
    "imageUrl": "https://myweatherapp.com/images/weather-screenshot.png",
    "date": "2023-09-25"
  },
  {
    "id": 5,
    "title": "Chat Application",
    "description": "A real-time chat application built with WebSocket for instant messaging.",
    "technologies": ["Node.js", "Socket.io", "React"],
    "link": "https://mychatapp.com",
    "imageUrl": "https://mychatapp.com/images/chat-screenshot.png",
    "date": "2023-10-10"
  }
]
