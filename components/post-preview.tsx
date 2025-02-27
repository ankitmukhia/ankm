'use client';

import Link from 'next/link'
import { Post } from 'contentlayer/generated'
import clsx from 'clsx'

interface PostPreview {
  post: Post,
  index: number
}

export const PostPreview: React.FC<PostPreview> = ({post, index}) => {
	return (
	   <Link href="#" className={clsx(`flex flex-col`, {
              "border-b border-white/5 pb-4": index === 0 
	   })}>
	      <div className="bg-white/5 hover:bg-hoverColor/10 rounded-lg p-4 space-y-2">
		<div>
		   <h3 className="text-[1rem] leading-none">
		     {post.title}
		   </h3>

		   <h4 className="pt-2 text-sm font-thin">
		     {post.publishedAt}
		   </h4>
		</div>
		
		<div>
		   <p className="text-sm font-thin">{post.description}</p>
		</div>
	      </div>
	  </Link>
	)
};
