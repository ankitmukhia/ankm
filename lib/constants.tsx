import { ReactNode } from 'react'
import { SiGithub, SiX, SiReaddotcv, IconType } from '@icons-pack/react-simple-icons'

export const meta = {
  title: "ankm.dev",
  description: "developer",
}

export interface Social {
 name: string
 url: string
 icon: IconType 
}

export interface PreQuery {
  id: number
  query: string
}

export interface Project {
  id: number
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  liveLink: string;
  imageUrl: string;
  date: string;
  githubIcon: ReactNode,
}

const githubIconSize = 20;
export const Github = "http://github.com/ankitmukhia" 
const Livelink = "https://ankitmukhia.vercel.app/"

export const socials: Social[] = [
  {
    name: "github",
    url: "https://github.com/ankitmukhia",
    icon: SiGithub
  },
  {
    name: "twitter",
    url: "https://x.com/ankitmukhiaX",
    icon: SiX
  },
  {
    name: "weekly reads",
    url: "/p",
    icon: SiReaddotcv 
  }
]

export const projects: Array<Project> = [
  {
    "id": 1,
    title: "Personal Blog",
    description: "A responsive blog site where I share my thoughts on technology and coding.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    githubLink: Github,
    liveLink: Livelink, 
    imageUrl: "https://myblog.com/images/blog-screenshot.png",
    date: "2023-05-15",
    githubIcon: <SiGithub size={githubIconSize} />,
  },
  {

    id: 2,
    title: "E-commerce Platform",
    description: "An online store built to showcase and sell products with secure payment integration.",
    technologies: ["Node.js", "Express", "MongoDB", "React"],
    githubLink: Github,
    liveLink: Livelink, 
    imageUrl: "https://myecommerce.com/images/ecommerce-screenshot.png",
    date: "2023-07-20",
    githubIcon: <SiGithub size={githubIconSize} />,
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A personal portfolio website to showcase my skills and projects.",
    technologies: ["HTML", "CSS", "JavaScript"],
    githubLink: Github,
    liveLink: Livelink, 
    imageUrl: "https://myportfolio.com/images/portfolio-screenshot.png",
    date: "2023-08-10",
    githubIcon: <SiGithub size={githubIconSize} />,
  },
  {
    id: 4,
    title: "Weather App",
    description: "A weather forecasting app that provides real-time weather data using an API.",
    technologies: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
    githubLink: Github,
    liveLink: Livelink, 
    imageUrl: "https://myweatherapp.com/images/weather-screenshot.png",
    date: "2023-09-25",
    githubIcon: <SiGithub size={githubIconSize} />,
  }
]

export const preQueries = [
   {
     id: 1, 
     query: "What are your skills?",
   },
   {
     id: 2, 
     query: "Are you available for work?",
   },
   {
     id: 3, 
     query: "Are you open to full-time or freelance opportunities?",
   },
]
