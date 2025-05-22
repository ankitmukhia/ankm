import { Nav } from '@/components/nav'
import { projects } from '@/lib/constants'
import { GithubActivityGraph } from '@/components/github-activity-graph'
import { ProjectPreview } from '@/components/project-preview'

export default function Home() {
	return (
		<>
			<div className="space-y-8">
				<Nav />
			</div>

			<div className="mt-2">
				<GithubActivityGraph />
			</div>

			<div className="mt-2 space-y-2">
				<h2 className="text-[1rem] pb-4 font-satoshi leading-none">
					Projects
				</h2>

				{projects.map((project) => (
					<ProjectPreview key={project.id} {...project} />
				))}
			</div>
		</>
	);
}
