import { notFound } from "next/navigation";
import Post from "./Post";
import { post } from "@/utils/all-posts";

interface Props {
  params: Promise<{ slug: string }>;
}

/* export async function generateStaticParams() {
	return;
} */

export default async function Page({ params }: Props) {
  const slug = (await params).slug;

  const filteredPost = post.getPost(slug);

  if (!filteredPost) {
    notFound();
  }

  return <Post {...filteredPost} />;
}
