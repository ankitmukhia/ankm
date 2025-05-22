'use client'

//TODO::
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { Post as PostType } from '@/utils/all-posts'
import Link from 'next/link'

interface Post extends PostType {
	code: string;
}


export default function PostPage(post: Post) {
	// const MDXComponent = "Code"

	return (
		<>
			<div className="space-y-8 my-8">
				<Link href="/p">
					<ArrowLeftIcon className="w-4 h-4" />
				</Link>
			</div>

			{/* need to work on sticky problem next */}
			<div className="sticky top-6 hidden h-0 xl:!col-start-4 xl:row-start-3 xl:block">
			</div>

			<div className="mt-8 bg-green-400" />

			{post.code && post.code}
		</>
	)
}
