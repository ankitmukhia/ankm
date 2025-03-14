import { ReactNode } from 'react'

export const Sticker = ({ children }: { children: ReactNode }) => {
	return (
		<div className="relative m-5 p-4 bg-yellow-200 border-l-4 border-yellow-500 shadow-lg rounded-md">
			<span className="absolute top-0 right-0 px-2 py-1 text-xs font-bold text-yellow-900 bg-yellow-300 rounded-bl-md">
				Note
			</span>
			<div className="text-yellow-900">
				{children}
			</div>
		</div>
	)
}
