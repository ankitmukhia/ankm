import { notFound } from "next/navigation";
import Post from "./Post";
import { post } from "@/utils/all-posts";

interface Props {
  params: Promise<{ slug: string }>;
}

/* update static content without rebuilding */
/* export const revalidate = 60;  */

/* Dynamic route static generation */
export async function generateStaticParams() {
  const allPosts = post.allPostsMetadata();

  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Page({ params }: Props) {
  const slug = (await params).slug;

  const filteredPost = post.getPost(slug);

  if (!filteredPost) {
    notFound();
  }

  return <Post {...filteredPost} />;
}
