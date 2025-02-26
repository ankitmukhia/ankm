import { allPosts, Post } from 'contentlayer/generated'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function Page() {
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

	 <div className="space-y-4">
	   {allPosts.map((post: Post) => (
	      <div key={post._id} className="flex flex-col space-y-2">
		 <Link href="#">
		    <h3 className="text-[1rem] leading-none">
		      {post.title}
		    </h3>
		 </Link>

		 <p className="text-sm font-thin leading-7">{post.description}</p>
	      </div>
	   ))}
	 </div>
       </div>
    ) 
}
