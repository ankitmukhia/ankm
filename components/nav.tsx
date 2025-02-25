'use client'

import Link from 'next/link'
import { Logo } from '@/components/logo'
import { socials } from '@/lib/constants'
import { ArrowUpRightIcon } from '@heroicons/react/24/outline'

export const Nav = () => {
	return (
		<>
		   <nav className="flex tracking-wide pb-8 items-center justify-between space-x-6">
			<Logo />

			<Link href="/ai" className="font-satoshi hover:underline underline-offset-4 tracking-wide">
				ankit://ai
			</Link>
		    </nav>

		    <div className="mt-2">
			<h1 className="text-4xl font-serif tracking-wider leading-none">
				Ankit Mukhia
			</h1>
			<h2 className="mt-4 items-center font-satoshi space-y-2 text-lg leading-none lg:mt-4 lg:flex lg:space-y-0 lg:space-x-2">
				developer
			</h2>

			<h2 className="mt-6 items-center font-satoshi space-y-2 text-lg font-thin leading-none lg:mt-6 lg:flex lg:space-y-0 lg:space-x-2">
				Hi, my name is Ankit, I tinker with code on my trusty machine.
			</h2>

			<div className="flex items-center space-x-2">
				{socials.map((social) => (
					<Link
						key={social.name}
						href={social.url}
						target="_blank"
						className="flex group mt-4 xl:mt-6 font-satoshi items-center gap-2 hover:underline underline-offset-4 tracking-wide"
					>
						<social.icon size={16} />
						<div className="flex items-center">
							{social.name}
							<ArrowUpRightIcon className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
						</div>
					</Link>
				))}
			</div>
		   </div>
		</>
	)
}
