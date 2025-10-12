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
  {
    name: "reads",
    url: "/post",
    icon: SiReaddotcv,
  },
  {
    name: "fun ai",
    url: "/ai",
    icon: SiGooglegemini,
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
    title: "Waitlist with notion integreated.",
    liveLink: "https://waitlist-template-beryl.vercel.app/",
    domain: "waitlist-template-beryl.vercel.app",
    image: "/project-1.png",
  },
  {
    id: 2,
    title: "Pxui actionable ui components.",
    liveLink: "https://pxui-docs.vercel.app",
    domain: "pxui-docs.vercel.app",
    image: "/project-4.png",
  },
  {
    id: 3,
    title: "Pdf reader with few customizations.",
    liveLink: "https://pdf2read.vercel.app",
    domain: "pdf2read.vercel.app",
    image: "/project-3.png",
  },
];

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
];
