import { allPosts, Post } from 'contentlayer/generated'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { PostPreview } from '@/components/post-preview'
import Link from 'next/link'

export default function Page() {
  const filteredPost = allPosts.filter((p) => p.status === 'published')

  return (
       <div className="space-y-8 my-8">
	 <div>
	   <Link href="/">
	    <ArrowLeftIcon className="w-4 h-4" />
	   </Link>
	 </div>

	 <div className="mt-2 space-y-4">
           <h1 className="text-[2.5rem] font-serif tracking-wider leading-none">
	      Posts
           </h1>

	   <h2 className="text-[1rem] leading-none lg:space-y-0 lg:space-x-2">
	     here i throw in some of my weekly reads/learnings!
	   </h2>
	 </div>

	 <div className="space-y-2">
	   {filteredPost.map((post: Post, _idx) => (
	      <PostPreview key={post._id} post={post} index={_idx} />
	   ))}
	 </div>
       </div>
    ) 
}
