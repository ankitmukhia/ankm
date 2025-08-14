import { Nav } from "@/components/nav";
import { projects } from "@/lib/constants";
import { GithubActivityGraph } from "@/components/github-activity-graph";
import { GridRowLayout } from "@/components/grid-layout/grid";
import { ProjectPreview } from "@/components/project-preview";

export default function Home() {
  return (
    <div className="p-4">
      <GridRowLayout>
        <div className="space-y-8 p-2">
          <Nav />
        </div>
      </GridRowLayout>

      <div className="mt-5 mb-10">
        <GithubActivityGraph />
      </div>

      {/* <div className="border-b border-white/5" /> */}

      <div className="mt-10 space-y-6">
        <GridRowLayout>
          <h2 className="font-md p-4 font-satoshi leading-none">Public Work</h2>
        </GridRowLayout>

        {projects.map((project) => (
          <ProjectPreview key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}
