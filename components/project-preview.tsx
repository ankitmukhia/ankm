"use client";

import { ProjectProps } from "@/lib/constants";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";

export const ProjectPreview = (project: ProjectProps) => {
  return (
    <motion.div
      layout
      // stiffness: speed and its corresponding spring effect
      // damping: calmness to corresponding bounce.
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="group aspect-video relative w-full overflow-hidden cursor-pointer"
    >
      <Image
        src={project.image}
        fill
        alt="project-img"
        className="object-fill rounded-xl"
        onLoad={() => <div className="bg-red-100">Loading...</div>}
      />

      <Link
        href={project.liveLink}
        target="_blank"
        className="absolute h-full w-full opacity-0 group-hover:opacity-95 flex items-center justify-center rounded-[0.78rem] bg-clip-border backdrop-blur-xs transition duration-200 ease-in-out"
      >
        <span className="text-xs">{project.domain}</span>
      </Link>
    </motion.div>
  );
};
