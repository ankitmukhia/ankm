'use client'

import { useMDXComponent } from 'next-contentlayer2/hooks'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { Post } from 'contentlayer/generated'
import { components } from '@/lib/mdx'
import Link from 'next/link'

export default function PostPage(post: Post) {
   const MDXComponent = useMDXComponent(post.body.code) 

   return (
      <div className="space-y-8 my-8">
	 <div>
	   <Link href="/p">
	    <ArrowLeftIcon className="w-4 h-4" />
	   </Link>
	 </div>
        <MDXComponent components={components} />
      </div>
   )
}
