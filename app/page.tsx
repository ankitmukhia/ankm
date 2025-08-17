import { Nav } from "@/components/nav";
import { projects } from "@/lib/constants";
import { GithubActivityGraph } from "@/components/github-activity-graph";
import { GridRowLayout } from "@/components/grid-layout/grid";
import { ProjectPreview } from "@/components/project-preview";

export default function Home() {
  return (
    <div className="p-2 xl:mt-30">
      <GridRowLayout>
        <div className="space-y-8 p-4">
          <Nav />
        </div>
      </GridRowLayout>

      <div className="p-4">
        <GithubActivityGraph />
      </div>

      <div className="space-y-6">
        <GridRowLayout>
          <h2 className="font-md font-light p-4 font-geist leading-none">
            Public Work
          </h2>
        </GridRowLayout>

        {projects.map((project) => (
          <ProjectPreview key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}
