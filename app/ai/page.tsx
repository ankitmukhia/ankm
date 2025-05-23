import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { AnkitAI } from '@/components/ankit-ai'

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
					ankit://ai
				</h1>

				<h2 className="font-satoshi text-[1rem] leading-none lg:space-y-0 lg:space-x-2">
					have a chat with my AI to know more about me!
				</h2>
			</div>

			<div>
				<AnkitAI />
			</div>
		</div>
	)
}
