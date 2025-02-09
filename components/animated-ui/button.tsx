"use client";

export const Button = ({ children }: { children: React.ReactNode }) => {
	return (
		<button className="bg-yellow-500 px-4 py-2 rounded text-white">
			{children}
		</button>
	)
}


