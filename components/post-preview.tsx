'use client';

import { useState } from 'react'
import Link from 'next/link'
import { Post } from 'contentlayer/generated'
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation'
import clsx from 'clsx'

interface PostPreview {
	post: Post,
	index: number
}

export const PostPreview: React.FC<PostPreview> = ({ post, index }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<Link
			href={`/p/${post.url}`}
			className={clsx(`flex flex-col items-start font-satoshi`, {
				"border-b border-white/5 pb-4": index === 0
			})}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<RoughNotationGroup show={isHovered}>
				<div className="hover-cover px-3">
					<div>
						<h3 className="text-lg group-hover:text-blue-300">
							{post.title}
						</h3>

						<h4 className="pt-2 text-wrap text-sm font-thin">
							{post.publishedAt}
						</h4>
					</div>

					<div className="flex flex-wrap">
						<RoughNotation color="rgba(0, 255, 255, 0.1)" type="highlight" animationDuration={2000}>
							<p className={clsx("text-sm font-thin")}>{post.description}</p>
						</RoughNotation>
					</div>
				</div>
			</RoughNotationGroup>
		</Link>
	)
};
