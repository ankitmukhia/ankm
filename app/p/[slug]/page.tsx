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
	const post = allPosts.find((post) => post.url === slug)

	if (!post) {
		notFound()
	}

	return <Post {...post} />
}
