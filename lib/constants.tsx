import { SiGithub, SiX, SiReaddotcv, IconType } from '@icons-pack/react-simple-icons'

export interface Social {
 name: string
 url: string
 icon: IconType 
}

export const meta = {
  title: "Ankit",
  description: "",
  domain: "ankm.xyz",
  tagline: "Developer"
}

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
    url: "https://readme.ankm.xyz",
    icon: SiReaddotcv 
  }
]
