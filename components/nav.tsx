import Link from 'next/link'
import { SiGithub, SiX } from '@icons-pack/react-simple-icons';
import { AnimatedTooltip } from '@/components/animated-ui/animated-tooltip'

const NavItems = ({ href, children, icon, className, target }: {
	href: string
	icon?: React.ReactNode
	className?: string
	target?: string
	children?: React.ReactNode
}) => {
	return <Link target={target} href={href}>
		<div className="sm:flex sm:items-center sm:space-x-2">
			<div>
				{icon}
			</div>
			<div className={className}>
				{children}
			</div>
		</div>
	</Link>
}

export const Nav = () => {
	return <div className="flex items-center space-x-3 text-base font-medium leading-none text-rose-100/90 lg:space-x-6">
		<NavItems
			target={"__blank"}
			href="https://github.com/ankitmukhia"
			icon={<SiGithub size={20} className="hover:text-teal-700/60" />}
		/>

		<NavItems
			target={"__blank"}
			href="https://x.com/ankitmukhiax"
			icon={<SiX size={18} className="hover:text-teal-700/60" />}
		/>

		<NavItems
			className="uppercase"
			href="/p"
		>
			<AnimatedTooltip items={[
			 {
				 id: 1,
				 name: "What I Read This Week...",
			 }
			]}>
			   WIRW
			</AnimatedTooltip>
		</NavItems>
	</div>
}
