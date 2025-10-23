import { PostPreview } from "@/components/post-preview";
import { post } from "@/utils/all-posts";
import { BackButton } from "@/components/back-button";

export default function Page() {
  const allPosts = post.allPostsMetadata();

  return (
    <div className="p-2 md:mt-20">
      <div className="p-4 mb-5 xl:mb-10">
        <BackButton />
      </div>

      <div className="p-4 space-y-4">
        <h1 className="text-[2.5rem] font-serif tracking-wider leading-none">
          Posts
        </h1>

        <h2 className="font-satoshi text-lg text-neutral-400">
          Here i throw in some of my reads/learnings!
        </h2>
      </div>

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
