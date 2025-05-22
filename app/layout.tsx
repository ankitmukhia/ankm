import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Instrument_Serif } from 'next/font/google'
import { meta } from '@/lib/constants'
import './globals.css'

import clsx from 'clsx'

const instrument = Instrument_Serif({
	variable: "--font-instrument",
	weight: "400",
	subsets: ["latin"]
})

const satoshi = localFont({
	src: "./fonts/Satoshi-Variable.woff2",
	variable: "--font-satoshi",
	weight: "300 600",
})

export const metadata: Metadata = {
	title: meta.title,
	description: meta.description
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={clsx(`font-sans bg-[#111110] selection:bg-blue-400/40 selection:text-white antialiased`,
					satoshi.variable, instrument.variable
				)}>
				<svg
					className="pointer-events-none fixed isolate z-50 opacity-70 mix-blend-soft-light"
					width="100%"
					height="100%"
				>
					<filter id="noise">
						<feTurbulence
							type="fractalNoise"
							baseFrequency="0.80"
							numOctaves="4"
							stitchTiles="stitch"
						/>
					</filter>
					<rect width="100%" height="100%" filter="url(#noise)" />
				</svg>

				<div className="relative grid grid-cols-[1fr_min(640px,100%)_1fr] z-10 gap-y-4 px-4 xl:grid-cols-[1fr_minmax(auto,15rem)_min(640px,100%)_minmax(auto,15rem)_1fr] xl:gap-x-9 xl:px-0 [&>*]:col-start-2 xl:[&>*]:col-start-3">
					{children}
				</div>
			</body>
		</html>
	);
}
