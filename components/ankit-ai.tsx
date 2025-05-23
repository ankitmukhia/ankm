'use client';

import { useRef, useEffect } from 'react'
import { useChat } from '@ai-sdk/react'
import { ArrowUpIcon } from '@heroicons/react/24/outline'

export const AnkitAI = () => {
	const chatContainerRef = useRef<HTMLDivElement>(null)
	const { messages, input, handleSubmit, handleInputChange } = useChat()

	useEffect(() => {
		if (chatContainerRef.current) {
			const scrollToBottom = () => {
				// scrollHeight: height of current area
				// scrollTo: scrolles to the bottom based on the changing height
				chatContainerRef.current?.scrollTo({
					top: chatContainerRef.current!.scrollHeight,
					behavior: "smooth"
				})
			}

			setTimeout(scrollToBottom, 100)
		}
	}, [messages])

	return (
		<div className="relative flex flex-col h-[600px] text-sm font-satoshi">
			<div className="absolute right-0 overflow-y-auto bg-blue-500 gradient-circle" />
			{messages.length === 0 && (
				<div className="absolute left-6 max-w-xs top-6 border-body/5 flex-1 bg-green-300/30 overflow-y-auto rounded-xl border p-4">
					<p className="text-sm text-green-300">Hi, I am ankit&apos;s AI, ask me anything about him!</p>
				</div>
			)}
			<div
				ref={chatContainerRef}
				className="border-body/5 flex-1 overflow-y-auto rounded-2xl border p-4"
			>
				<div>
					{messages.map((msg => {
						return (
							<div
								key={msg.id}
								className={`flex mb-4 
			    ${msg.role === "user" ? "justify-end" : "justify-start"}`}
							>
								<div
									className={`${msg.role === "user"
											? "rounded-full border border-body/5 bg-orange-300/30 text-orange-300"
											: "rounded-full border border-body/5 bg-green-300/30 text-green-300"
										} max-w-xs rounded-lg px-2.5 py-1.5`}
								>
									<p>{msg.content}</p>
								</div>
							</div>
						)
					}))}
				</div>
			</div>

			<form className="relative focus-within:outline-1 focus-within:outline-green-300/30 rounded-full mt-4 w-full" onSubmit={handleSubmit}>
				<input
					className="w-full h-12 pl-4 outline-none rounded-full border-body/5 border"
					value={input}
					placeholder="Ask me anything..."
					onChange={handleInputChange}
				/>

				<button
					type="submit"
					className="absolute right-1 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-hoverColor/40 flex items-center justify-center"
				>
					<ArrowUpIcon className="w-4 h-4 text-blue-300" />
				</button>
			</form>
		</div>
	)
}
