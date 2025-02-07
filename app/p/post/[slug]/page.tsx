import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import Post from './Post'

export const generateStaticParams = () => {
	return allPosts.filter((p) =>
		p.status === "published")
		.map((p) => ({ slug: p.url }))
}

export default async function Page({ params }: {
	params: Promise<{ slug: string }>
}) {
	const slug = (await params).slug
	const post = allPosts.find(p => p.url === slug)

	if (!post) {
		notFound()
	}
	return <Post post={post} /> 
}
