import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { Chat } from '@/components/chat'

import Link from 'next/link'

export default function Page() {
	return (
	    <div className="space-y-2 mt-4">
	       <div className="pb-6">
	          <Link href="/">
		    <ArrowLeftIcon className="w-5 h-5" />
		  </Link>
	        </div>

	    	<div className="mt-2">
               	   <h1 className="text-4xl tracking-wider leading-none">
		      ankit://ai
                   </h1>

                   <h2 className="mt-4 items-center font-satoshi space-y-2 text-lg leading-none lg:mt-4 lg:flex lg:space-y-0 lg:space-x-2">
      		      have a chat with my AI to know more about me!            
                   </h2>
		 </div>

	         <div className="mt-2 font-satoshi space-y-2">
		   <Chat />
		 </div>
	  </div>
	)
}
