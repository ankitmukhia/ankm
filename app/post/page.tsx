import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { PostPreview } from "@/components/post-preview";
import { GridRowLayout } from "@/components/grid-layout/grid";
import { post } from "@/utils/all-posts";
import Link from "next/link";

export default function Page() {
  const allPosts = post.allPostsMetadata();

  return (
    <div className="p-2 xl:mt-30">
      <div className="p-4">
        <Link
          href="/"
          className="inline-flex transaction duration-300 ease-in opacity-40 hover:opacity-100"
        >
          <ArrowLeftIcon className="w-4 h-4" />
        </Link>
      </div>
      <GridRowLayout>
        <div className="p-4 space-y-4">
          <h1 className="text-[2.5rem] font-serif tracking-wider leading-none">
            Posts
          </h1>

          <h2 className="font-satoshi text-sm">
            here i throw in some of my reads/learnings!
          </h2>
        </div>
      </GridRowLayout>

      <div className="mt-4">
        {allPosts.map((post, _idx) => (
          <PostPreview
            key={post.title}
            post={post}
            index={_idx}
            totalPosts={allPosts.length}
          />
        ))}
      </div>
    </div>
  );
}
