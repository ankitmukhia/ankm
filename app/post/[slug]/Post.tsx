'use client'

import React from 'react'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { MarkdownRenderer } from '@/components/markdown-renderer'
import { SpecificPost } from '@/utils/all-posts'
import Link from 'next/link'

export default function PostPage(post: SpecificPost) {
	return (
		<>
			<div className="space-y-4 my-8">
				<Link href="/post" className="inline-flex transaction duration-500 ease-in-out hover:scale-120">
					<ArrowLeftIcon className="w-4 h-4" />
				</Link>
			</div>

			<div className="mt-8 bg-green-400" />

			{/* title and date later */}

			<React.Suspense fallback={<Loading />}>
				<MarkdownRenderer body={post.body} />
			</React.Suspense>
		</>
	)
}

const Loading = () => {
	return <h2>Loading...</h2>
}
