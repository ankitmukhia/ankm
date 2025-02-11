import { clsx } from 'clsx'
import { Post } from 'contentlayer/generated'
import Balancer from 'react-wrap-balancer'
import { components } from '@/lib/mdx'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function Page({ post }: { post: Post }) {
	const MDXComponent = useMDXComponent(post.body.code)

	return (
		<div className="mt-24 mb-4">
			<Link href="/p" className="flex items-center space-x-2">
				<div className="bg-rose-200/10 group-hover:bg-rose-200/20 rounded-full p-1">
					<ArrowLeftIcon
					    className="h-4 w-4 transition delay-150 duration-300 ease-in-out hover:-translate hover:scale-125"
					/>
				</div>
				<div>
					All Posts
				</div>
			</Link>

			<h1 className={clsx(`mt-6 text-2xl font-medium sm:text-3xl`)}>
				<Balancer>{post.title}</Balancer>
			</h1>

			<div className="mt-4 flex space-x-2 text-rose-200/50">
				<div>
					{new Date(post.publishedAt).toDateString()}
				</div>
				{/* <div className="text-rose-200/30">&middot;</div> */}
			</div>
			<div className="mt-6">
				<MDXComponent components={components} />
			</div>
		</div>
	)
}
