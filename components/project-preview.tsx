"use client";

import React from "react";
import { ProjectProps } from "@/lib/constants";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";

export const ProjectPreview = (project: ProjectProps) => {
  const [isImageLoaded, setIsImageLoaded] = React.useState(false);

  return (
    <motion.div
      layout
      // stiffness: speed and its corresponding spring effect
      // damping: calmness to corresponding bounce.
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="group aspect-video relative w-full overflow-hidden cursor-pointer"
    >
      {!isImageLoaded && (
        <div className="h-full bg-zinc-800/30 rounded-xl animate-pulse" />
      )}

      <Image
        src={project.image}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={project.priority}
        alt="project-img"
        className="object-fill rounded-xl"
        onLoad={() => setIsImageLoaded(true)}
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
