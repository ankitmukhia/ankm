'use client'

import { useState } from 'react'
import { Post, allPosts } from 'contentlayer/generated'
import { motion } from 'motion/react'
import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'

const PostCard = ({ post, index }: { post: Post, index: number }) => {
	const [isLoading, setIsLoading] = useState(true)
	const [isHovered, setIsHovered] = useState(false)

	// when hover the latest post, shows pop up animation msg `latest`
	return (
		<div className={clsx("mb-8", index === 0 && "pb-4 border-b-2 border-rose-200/5")}>
			<div className="relative group flex justify-between">
				<motion.div
					onHoverStart={() => setIsHovered(true)}
					onHoverEnd={() => setIsHovered(false)}
				>
					<h2 className="mb-1 text-xl">
						<Link
							href={`/p/post/${post.url}`}
							className="text-2xl"
						>
							{post.title}
						</Link>
					</h2>
					<h3 className="text-sm mt-2 text-rose-100/60">
						{post.description.length > 100 ? post.description.substring(0, 100) + "..." : post.description}
					</h3>
					<div className="text-xs font-light mb-2 mt-2 text-rose-100/40">
						{new Date(post.publishedAt).toDateString()}
					</div>

					{index === 0 && (
						<motion.div
							initial={{ opacity: 0, scale: 0.5 }} 
							// opacity -> transparency, scale -> size
							animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.5 }}
							transition={{ duration: 0.2 }}
							className={clsx("inline-block")}
						>
							<span className="text-xs bg-rose-200/10 px-2 py-1 rounded-full border border-rose-200/20">
							  LATEST
							</span>
						</motion.div>
					)}
				</motion.div>
				<div className="relative">
					<div className="w-32 sm:w-40 h-auto">
						<Image
							alt={post.title}
							src={post.coverImage}
							fill
							className={clsx("object-contain  rounded-sm", isLoading ? "scale-50 blur-xl" : "scale-100 blur-0")}
							onLoadingComplete={() => setIsLoading(false)}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default function Page() {
	const formatedPost = allPosts.filter((p) => p.status === "published").sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))

	return (
		<div className="mx-auto max-w-xl py-8">
			{formatedPost.map((post, _idx) => (
				<PostCard key={_idx} post={post} index={_idx} />
			))}
		</div>
	)
}
