import type { Metadata } from 'next'
import { meta } from '@/lib/constants'
import { CycleNav } from '@/components/cycle-nav'
import { projects } from '@/lib/constants'
import { SiteHeader } from '@/components/site-header'
import { ProfileImageLarge } from '@/components/profile-image'
import { ProjectPreview } from '@/components/project-preview'
import { GithubActivityGraph } from '@/components/github-activity-graph'
import { Nav } from '@/components/nav'

export const metadata: Metadata = {
  title: meta.tagline,
  description: meta.description
}

export default async function Page() {
  return (
    <>
      <CycleNav nav={<SiteHeader />}>
        <div className="space-y-4">
          <div className="flex items-center space-x-6">
            <ProfileImageLarge />
            <div className="mt-2">
              <h1 className="text-3xl font-semibold leading-none text-rose-100/90">
                Ankit
              </h1>
              <h2 className="mt-2 items-center space-y-2 text-lg font-medium leading-none text-rose-100/50 lg:mt-2 lg:flex lg:space-y-0 lg:space-x-2">
                Experimenting with something new every day
              </h2>
            </div>
          </div>
          <div className="text-xl text-rose-100/90">
            {meta.description}
          </div>
          <Nav />
        </div>
      </CycleNav>

      <div className="mt-8 space-y-4">
        <GithubActivityGraph />
      </div>

      <div className="mt-8 space-y-4">
        {projects.map((project) => {
          return (
            <ProjectPreview
              key={project.title}
              {...project}
            />
          )
        })}
      </div>
    </>
  );
}
