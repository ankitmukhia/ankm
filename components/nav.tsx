import Link from 'next/link'
import { SiGithub, SiX, SiGmail } from '@icons-pack/react-simple-icons';

const NavItems = ({ href, children, icon }: {
	href: string
	icon: React.ReactNode
	children: React.ReactNode
}) => {
	return <Link href={href}>
		<div className="sm:flex sm:items-center sm:space-x-2">
			<div>
				{icon}
			</div>
			<div className="">
				{children}
			</div>
		</div>
	</Link>
}

export const Nav = () => {
	const email = "ankitmukhia@gmail.com";
	const subject = "Hello Ankit"

	return <div className="flex items-center space-x-3 text-base font-medium leading-none text-rose-100/90 lg:space-x-6">
		<NavItems href="#" icon={<SiGithub size={20} />}>
			Github
		</NavItems>

		<NavItems href="#" icon={<SiX size={18} />}>
			Twitter/X
		</NavItems>

		<NavItems
			href={`mailto:${email}?subject=${encodeURIComponent(subject)}`}
			icon={<SiGmail size={20} className="hover:text-[#EA4335]" />}
		>
			Contact Me
		</NavItems>
	</div>
}
