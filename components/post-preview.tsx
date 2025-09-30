"use client";

import Link from "next/link";

import { Post } from "@/utils/all-posts";
import { GridBottomLayout } from "@/components/grid-layout/grid";

interface PostPreview {
  post: Post;
  index: number;
  totalPosts: number;
}

export const PostPreview: React.FC<PostPreview> = ({
  post,
  index,
  totalPosts,
}) => {
  return (
    <>
      <Link href={`/post/${post.slug}`} className="flex flex-col p-4">
        <div className="group space-y-1 w-full">
          <h3 className="text-md font-bold text-white/80 group-hover:text-white transition ease-in">
            {post.title}
          </h3>

          <div className="flex flex-wrap">
            <p className="text-sm text-white/60 group-hover:text-white/70 transition ease-in">
              {post.description}
            </p>
          </div>
        </div>
      </Link>

      {index < totalPosts - 1 && <GridBottomLayout />}
    </>
  );
};
