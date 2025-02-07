import { clsx } from 'clsx'
import { Post } from 'contentlayer/generated'
import Balancer from 'react-wrap-balancer'

export default function Page({ post }: { post: Post }) {

	return (
		<div className="mt-24 mb-4">
			<div>
				All Posts
			</div>

			<h1 className={clsx(`mt-6 text-2xl font-medium sm:text-4xl`)}>
				<Balancer>{post.title}</Balancer>
			</h1>

			<div className="mt-4 flex space-x-2 text-rose-200/50">
				<div>
					{new Date(post.publishedAt).toDateString()}
				</div>
				{/* <div className="text-rose-200/30">&middot;</div> */}
			</div>
		</div>
	)
}
