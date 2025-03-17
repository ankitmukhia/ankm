'use client'

import { useMDXComponent } from 'next-contentlayer2/hooks'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { TagTable } from '@/components/tag-table'
import { Post } from 'contentlayer/generated'
import { components } from '@/lib/mdx'
import Link from 'next/link'

export default function PostPage(post: Post) {
	const MDXComponent = useMDXComponent(post.body.code)

	return (
		<>
			<div className="space-y-8 my-8">
				<Link href="/p">
					<ArrowLeftIcon className="w-4 h-4" />
				</Link>
			</div>

			{/* need to work on sticky problem next */}
			<div className="sticky top-6 hidden h-0 xl:!col-start-4 xl:row-start-3 xl:block">
				<TagTable headings={post.headings} />
			</div>

			<MDXComponent components={components} />

			<div className="mt-8 bg-green-400" />
		</>
	)
}
