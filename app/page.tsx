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

			<div className="mt-5 mb-10">
				<GithubActivityGraph />
			</div>

			<div className="border-b border-white/5" />

			<div className="mt-10 space-y-6">
				<h2 className="font-md pb-4 font-satoshi leading-none">
					Public work
				</h2>

				{projects.map((project) => (
					<ProjectPreview key={project.id} {...project} />
				))}
			</div>
		</>
	);
}
