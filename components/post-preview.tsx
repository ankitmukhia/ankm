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
	   <Link href={`/p/${post.url}`} className={clsx(`flex flex-col items-start font-satoshi`, {
              "border-b border-white/5 pb-4": index === 0 
	   })}>
	      <div className="hover-cover px-3">
		<div>
	           <h3 className="text-lg group-hover:text-blue-300">
		      {post.title}
		   </h3>

		   <h4 className="pt-2 text-sm font-thin">
		     {post.publishedAt}
		   </h4>
		</div>
		
	        <p className="text-sm font-thin">{post.description}</p>
	      </div>
	  </Link>
	)
};
