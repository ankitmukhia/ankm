"use client";

import { useState, useEffect } from "react";
import { Nav } from "@/components/nav";
import { publicWorks, projects } from "@/lib/constants";
import { GithubActivityGraph } from "@/components/github-activity-graph";
import { GridRowLayout } from "@/components/grid-layout/grid";
import { Squares2X2Icon } from "@heroicons/react/24/outline";
import { ListIcon } from "lucide-react";
import { ProjectPreview } from "@/components/project-preview";
import { PublicWorkPreview } from "@/components/publicwork-preview";
import { Footer } from "@/components/footer";
import { GridColsLayout, GridTopLayout } from "@/components/grid-layout/grid";
import Lenis from "lenis";
import clsx from "clsx";

export default function Home() {
  const [columnSwitch, setColumnSwitch] = useState<boolean>(false);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <GridColsLayout>
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
            <div className="flex items-center justify-between p-4">
              <h2 className="font-md font-light font-geist leading-none">
                Projects
              </h2>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setColumnSwitch(false)}
                  className={clsx("cursor-pointer", {
                    "text-[#CAE8BD]": columnSwitch === false,
                  })}
                >
                  <ListIcon className="size-4.5 hover:text-[#CAE8BD]" />
                </button>
                <button
                  onClick={() => setColumnSwitch(true)}
                  className={clsx("cursor-pointer", {
                    "text-[#CAE8BD]": columnSwitch,
                  })}
                >
                  <Squares2X2Icon className="size-5 hover:text-[#CAE8BD]" />
                </button>
              </div>
            </div>
          </GridRowLayout>

          <div
            className={clsx("grid grid-cols-1 gap-4 px-4", {
              "grid-cols-2 gap-x-4": columnSwitch,
            })}
          >
            {projects.map((project) => (
              <ProjectPreview key={project.id} {...project} />
            ))}
          </div>

          <GridRowLayout>
            <h2 className="font-md font-light p-4 font-geist leading-none">
              Public Work
            </h2>
          </GridRowLayout>

          {publicWorks.map((work) => (
            <PublicWorkPreview key={work.id} {...work} />
          ))}

          <div className="hidden sm:block">
            <GridTopLayout />

            <Footer />
          </div>
        </div>
      </div>
    </GridColsLayout>
  );
}
