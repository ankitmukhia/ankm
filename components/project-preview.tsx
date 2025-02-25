'use client';

import { Project } from '@/lib/constants'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'

export const ProjectPreview = (project: Project) => {
	return (
		<div className="flex flex-col items-start font-satoshi pt-2">
		  <div className="group relative -mx-3 w-full transform rounded-lg px-3 py-2 transition-all duration-300 ease-in-out md:hover:scale-105 md:hover:bg-hoverColor/20">
		    <div className="flex items-center justify-between">
		       <div>
		         <h3 className="group-hover:text-blue-300">
		           {project.title}
		         </h3>
		       </div>

		       <ArrowUpRightIcon className="h-3 w-3 opacity-0 transition-opacity duration-150 md:group-hover:opacity-100" />
		    </div>

		    <p className="mt-2 text-sm font-thin leading-7">{project.description}</p>
		   </div>
		</div>
	)
}
