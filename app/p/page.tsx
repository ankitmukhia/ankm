import { Post, allPosts } from 'contentlayer/generated'
import Link from 'next/link'

const PostCard = (post: Post) => {
	return (
		<div className="mb-8">
			<h2 className="mb-1 text-xl">
				<Link
					href={`/p/post/${post.url}`}
					className="text-blue-700 hover:text-blue-900 dark:text-blue-400"
				>
					{post.title}
				</Link>
			</h2>
		</div>
	)
}

export default function Page() {
	return (
		<div className="mx-auto max-w-xl py-8">
			{allPosts.map((post, _idx) => (
				<PostCard key={_idx} {...post} />
			))}
		</div>
	)
}
