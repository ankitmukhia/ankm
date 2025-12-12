import {
  SiGithub,
  SiX,
  SiReaddotcv,
  SiGooglegemini,
  IconType,
} from "@icons-pack/react-simple-icons";

export const meta = {
  title: "ankm.dev",
  description: "developer",
};

export interface Social {
  name: string;
  url: string;
  icon: IconType;
}

export interface PreQuery {
  id: number;
  query: string;
}

export interface PublicWorksProps {
  id: number;
  title: string;
  description: string;
  liveLink: string;
  date: string;
}

export interface ProjectProps {
  id: number;
  title: string;
  liveLink: string;
  domain: string;
  image: string;
  priority: boolean;
}

export const Github = "http://github.com/ankitmukhia";

export const socials: Social[] = [
  {
    name: "github",
    url: "https://github.com/ankitmukhia",
    icon: SiGithub,
  },
  {
    name: "twitter",
    url: "https://x.com/ankitmukhya",
    icon: SiX,
  },
  /* {
    name: "reads",
    url: "/reads",
    icon: SiReaddotcv,
  },  */
  {
    name: "fun ai",
    url: "/ai",
    icon: SiGooglegemini,
  },
  {
    name: "thoughts",
    url: "/post",
    icon: SiReaddotcv,
  },
];

export const publicWorks: Array<PublicWorksProps> = [
  {
    id: 1,
    title: "Design change as per new design",
    description: "ui redesign implementation based on updated design specs.",
    liveLink: "https://github.com/code100x/cms/pull/907",
    date: "2023-05-15",
  },
  {
    id: 2,
    title: "Ui change of mobile app builder application",
    description: "complete ui revamp of the mobile app builder.",
    liveLink: "https://github.com/code100x/mobile-magic/pull/21",
    date: "2023-07-20",
  },
  {
    id: 3,
    title: "100xphoto ai full ui change",
    description: "revamped ui for ai-based photo generator.",
    liveLink: "https://github.com/code100x/photo-ai/pull/67",
    date: "2023-08-10",
  },
];

export const projects: ProjectProps[] = [
  {
    id: 1,
    title: "Fractal Wallpaper",
    liveLink: "https://fractal-glass-wallpaper.vercel.app",
    domain: "fractal-glass-wallpaper.vercel.app",
    image: "/project-5.png",
    priority: true,
  },
  {
    id: 2,
    title: "Mockitup",
    liveLink: "https://mockitupp.vercel.app",
    domain: "mockitup.vercel.app",
    image: "/mockitup.png",
    priority: true,
  },
  {
    id: 3,
    title: "Waitlist with notion integreated.",
    liveLink: "https://waitlist-tmpl.vercel.app",
    domain: "waitlist-tmpl.vercel.app",
    image: "/project-1.png",
    priority: true,
  },
  {
    id: 4,
    title: "Pxui actionable ui components.",
    liveLink: "https://pxui-docs.vercel.app",
    domain: "pxui-docs.vercel.app",
    image: "/project-4.png",
    priority: false,
  },
  {
    id: 5,
    title: "Json Visualizer Creator Formatter",
    liveLink: "https://jsonvisualizerr.vercel.app",
    domain: "jsonvisualizerr.vercel.app",
    image: "/project-6.png",
    priority: false,
  },
  {
    id: 6,
    title: "Pdf reader with few customizations.",
    liveLink: "https://pdf2read.vercel.app",
    domain: "pdf2read.vercel.app",
    image: "/project-3.png",
    priority: false,
  },
];

export const preQueries = [
  {
    id: 1,
    query: "Hi",
  },
  {
    id: 2,
    query: "How are you?",
  },
  {
    id: 3,
    query: "What are your skills?",
  },
  {
    id: 4,
    query: "Are you available for work?",
  },
  {
    id: 5,
    query: "Are you open to full-time?",
  },
];
