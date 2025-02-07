import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import Post from './Post'

export const generateStaticParams = () => {
	return allPosts.filter((p) =>
		p.status === "published")
		.map((p) => ({ slug: p.url }))
}

export const generateMetadata = () => {

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

/* export const formatPost = ({ title,slug,publishedAtFormatted,description,body,series,headings}: any, allPosts: any[]) => ({
	title,
	slug,
	publishedAtFormatted,
	description: description ?? null,
	body: {
		code: body.code,
	},
	headings: (headings as { heading: number; text: string; slug: string }[]) ?? null,
	series: series
		? {
			title: series.title,
			posts: allPosts
				.filter((p) => p.series?.title === series.title)
				.sort(
					(a, b) =>
						Number(new Date(a.series!.order)) -
						Number(new Date(b.series!.order)),
				)
				.map((p) => {
					return {
						title: p.title,
						slug: p.slug,
						status: p.status,
						isCurrent: p.slug === slug,
					}
				}),
		}
		: null,
}) */
