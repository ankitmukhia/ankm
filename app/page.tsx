import { Nav } from '@/components/nav'
import { projects } from '@/lib/constants'
import { GithubActivityGraph } from '@/components/github-activity-graph'
import { ProjectPreview } from '@/components/project-preview'

export default function Home() {
  return (
	<>
	  <div className="mt-2">
	    <Nav />
	  </div>

	  <div className="mt-2">
	    <GithubActivityGraph />	 
	  </div>

	  <div className="mt-4">
	    <h2 className="text-lg pb-4 font-satoshi leading-none">
   	      Projects 
   	    </h2>
	    {projects.map((project) => (
	       <ProjectPreview key={project.id} {...project} /> 
	    ))}	
	  </div>
	</>
    );
}
