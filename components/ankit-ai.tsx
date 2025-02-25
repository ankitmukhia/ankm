'use client';

import { useRef, useEffect } from 'react'
import { useChat } from '@ai-sdk/react'

export const AnkitAI = () => {
	const chatContainerRef = useRef<HTMLDivElement>(null)
	const { messages, input, handleSubmit, handleInputChange } = useChat()

	useEffect(() => {
   	   if(chatContainerRef.current) {
	     		
   	   }	
	}, [])

	return (
		<div className="flex h-[600px] mt-6 xl:mt-6 font-satoshi flex-col">
		   <div 
		     ref={chatContainerRef}
		     className="border border-white/5 rounded-lg p-4 overflow-y-auto"
		    >
		     <div>
		       {messages.map((msg => {
			 console.log("message: ", msg)
			return (
 			 <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
			   {msg.content}
 			 </div>
		       )}))}
		     </div>

		     <form onSubmit={handleSubmit}>
		       <input
		      	  className="fixed dark:bg-zinc-900 bottom-0 w-full max-w-md p-2 mb-8 border border-zinc-300 dark:border-zinc-800 rounded shadow-xl"
		          value={input}
		          placeholder="Say something..."
		          onChange={handleInputChange}
		      />

		      <button type="submit" className="fixed dark:bg-zinc-900 bottom-0 right-0 w-full max-w-md p-2 mb-8 border border-zinc-300 dark:border-zinc-800 rounded shadow-xl">Send</button>
      	 	     </form>
		   </div>
		</div>
	)
}
