"use client";

import React from "react";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import { BackButton } from "@/components/back-button";
import { SpecificPost } from "@/utils/all-posts";

export default function PostPage(post: SpecificPost) {
  return (
    <div className="p-2 mt-20">
      <div className="p-4 mb-5 xl:mb-10">
        <BackButton href="/post" />
      </div>

      <React.Suspense fallback={<Loading />}>
        <MarkdownRenderer body={post.body} />
      </React.Suspense>
    </div>
  );
}

const Loading = () => {
  return <h2>Loading...</h2>;
};
