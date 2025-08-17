"use client";

import { Project } from "@/lib/constants";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

export const ProjectPreview = (project: Project) => {
  return (
    <Link
      href={project.liveLink}
      target="_blank"
      className="group flex flex-col items-start cursor-pointer font-geist"
    >
      <div className="relative w-full space-y-2 px-4 py-1">
        <div className="flex items-center justify-between gap-2">
          <h3 className="decoration-blue-200 group-hover: underline-offset-4">
            {project.title}
          </h3>

          <ArrowUpRightIcon className="h-4 w-4 mt-2 opacity-10 duration-300 ease-in group-hover:opacity-100" />
        </div>

        <p className="text-sm text-gray-200/70">{project.description}</p>
      </div>
    </Link>
  );
};
