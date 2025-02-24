'use client';

import { useRef } from 'react'

export const AnkitAI = () => {
	const chatContainerRef = useRef<HTMLDivElement>(null)

	return (
		<div className="flex h-[600px] flex-col">
		   <div 
		     ref={chatContainerRef}
		     className="border border-white/5 rounded-lg p-4 overflow-y-auto"
		    >
		    <div>Ankit</div>
		   </div>
		</div>
	)
}
