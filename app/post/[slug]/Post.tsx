"use client";

import React from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import { GridRowLayout } from "@/components/grid-layout/grid";
import { SpecificPost } from "@/utils/all-posts";
import Link from "next/link";

export default function PostPage(post: SpecificPost) {
  return (
    <div className="p-2 mt-30">
      <div className="space-y-4 p-4">
        <Link
          href="/post"
          className="inline-flex transaction duration-300 ease-in opacity-40 hover:opacity-100"
        >
          <ArrowLeftIcon className="w-4 h-4" />
        </Link>
      </div>

      <GridRowLayout>
        <React.Suspense fallback={<Loading />}>
          <MarkdownRenderer body={post.body} />
        </React.Suspense>
      </GridRowLayout>
    </div>
  );
}

const Loading = () => {
  return <h2>Loading...</h2>;
};
