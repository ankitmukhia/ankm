import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import Post from './Post'

interface Props {
	params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
	return allPosts.filter((p) =>
		p.status === 'published')
		.map((p) => ({ slug: p.url }))
}

export default async function Page({ params }: Props) {
	const slug = (await params).slug
	const post = allPosts.filter((p) => p.status === "published").find((p) => p.url === slug)

	if (!post) {
		notFound()
	}

	return <Post {...post} />
}
