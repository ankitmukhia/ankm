"use client";

import Link from "next/link";
import clsx from "clsx";

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
      <Link
        href={`/post/${post.slug}`}
        className={clsx(`flex flex-col p-4`, {
          /* "border-b border-white/5 pb-4": index === 0, */
        })}
      >
        <div className="space-y-1 w-full">
          <div>
            <h3 className="text-md font-bold">{post.title}</h3>

            <h4 className="text-wrap text-sm font-thin">{/*datehere*/}</h4>
          </div>

          <div className="flex flex-wrap">
            <p className="text-md font-normal text-gray-200/80">
              {post.description}
            </p>
          </div>
        </div>
      </Link>

      {index < totalPosts - 1 && <GridBottomLayout />}
    </>
  );
};
