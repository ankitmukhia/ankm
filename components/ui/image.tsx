import type { ImageProps } from 'next/image'
import Image from 'next/image'
import { useState } from 'react'
import clsx from 'clsx'

export const NextImage = (props: ImageProps) => {
	const [isLoading, setIsLoading] = useState(true)

	return (
		<Image
			{...props}
			alt={props.alt}
			sizes="100vw"
			className={clsx(
				"rounded-xl duration-700 ease-in-out",
				isLoading ? "scale-50 blur-xl" : "scale-100 blur-0",
			)}
			style={{
				width: '100%',
				height: 'auto',
			}}
			onLoadingComplete={() => setIsLoading(false)}	
		/>
	)
}
