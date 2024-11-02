import React, { ElementType } from 'react'
import clsx from 'clsx'

function Title({ children }: { children: React.ReactNode }) {
	return (
		<h3 className="text-xl text-rose-100/90 transition duration-300 line-clamp-2 hover:text-rose-100/90">
			{children}
		</h3>
	)
}

function Icon(props: { icon: any }) {
	return (
		<div className="mt-1 ml-2 shrink-0">
			<props.icon className="w-5 text-rose-100/30 transition-colors hover:text-rose-100/50" />
		</div>
	)
}

function Text({ children }: { children: React.ReactNode }) {
	return (
		<p className="text-lg text-rose-100/70 line-clamp-3">{children}</p>
	)
}

function Meta({ children, className }: { children: React.ReactNode, className?: string }) {
	return (
		<div className={clsx(
			`flex flex-wrap space-x-2 text-base text-rose-100/50`,
			className
		)
		}>
			{children}
		</div>
	)
}

export { Title, Icon, Text, Meta };
