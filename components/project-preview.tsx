"use client";

import { Project } from "@/lib/constants";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

export const ProjectPreview = (project: Project) => {
  return (
    <Link
      href={project.liveLink}
      target="_blank"
      className="group flex flex-col items-start cursor-pointer font-satoshi"
    >
      <div className="relative w-full space-y-2 py-2">
        <div className="flex items-center gap-2">
          <h3 className="decoration-blue-200 group-hover:text-blue-200 group-hover:underline underline-offset-4">
            {project.title}
          </h3>

          <ArrowUpRightIcon className="h-4 w-4 mt-2 text-blue-200 opacity-0 group-hover:opacity-100" />
        </div>

        <p className="text-sm text-gray-200/70">{project.description}</p>
      </div>
    </Link>
  );
};
