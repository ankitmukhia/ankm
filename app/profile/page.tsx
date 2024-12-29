import Image from 'next/image'

export default function ProfilePage() {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center p-24">
			<Image
				src="/profile-image.png"
				className="pointer-events-none"
				width={500}
				height={500}
				alt="blurred background"
				priority={true}
			/>
		</div>
	)
}	
