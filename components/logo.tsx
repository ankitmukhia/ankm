import Image from 'next/image'
import Link from 'next/link'

export const AnkitLogo = () => {
	return (
		<Image
			src="/logo.svg"
			alt="logo"
			width={20}
			height={20}
			priority
		/>
	)
}

const EmojiLogo = () => {
	return (
		<div className="scale-120">
		✌🏼
		</div>
	)
}

export const Logo = () => {
	return (
		<Link href="/">
			{/* <AnkitLogo /> */}
			<EmojiLogo />
		</Link>
	)
}
