import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { PostPreview } from "@/components/post-preview";
import { post } from "@/utils/all-posts";
import Link from "next/link";

export default function Page() {
  const allPosts = post.allPostsMetadata();

  return (
    <div className="space-y-8 my-8">
      <div className="space-2">
        <Link
          href="/"
          className="inline-flex transaction duration-500 ease-in-out hover:scale-120"
        >
          <ArrowLeftIcon className="w-4 h-4" />
        </Link>
      </div>

      <div className="pt-2 space-y-4">
        <h1 className="text-[2.5rem] font-serif tracking-wider leading-none">
          Posts
        </h1>

        <h2 className="font-satoshi text-sm">
          here i throw in some of my weekly reads/learnings!
        </h2>
      </div>

      <div className="space-y-4 pt-4">
        {allPosts.map((post, _idx) => (
          <PostPreview key={post.title} post={post} index={_idx} />
        ))}
      </div>
    </div>
  );
}
