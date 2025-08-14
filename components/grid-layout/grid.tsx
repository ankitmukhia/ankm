export function GridColsLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="relative">
			<svg
				data-direction="left"
				data-variant="full-screen"
				className="absolute pointer-events-none z-10 left-0 top-0 h-full"
				width="1"
				height="100%"
				viewBox="0 0 1 100"
				preserveAspectRatio="none"
				style={{ width: "1px" }}
			>
				<line
					className="stroke-white/6"
					x1="0.5"
					y1="0"
					x2="0.5"
					y2="100"
					strokeWidth="1"
					strokeDasharray="6 4"
					vectorEffect="non-scaling-stroke"
				/>
			</svg>

			{children}
			<svg
				data-direction="right"
				data-variant="full-screen"
				className="absolute pointer-events-none z-10 right-0 top-0 h-full"
				width="1"
				height="100%"
				viewBox="0 0 1 100"
				preserveAspectRatio="none"
				style={{ width: "1px" }}
			>
				<line
					className="stroke-white/6"
					x1="0.5"
					y1="0"
					x2="0.5"
					y2="100"
					strokeWidth="1"
					strokeDasharray="6 4"
					vectorEffect="non-scaling-stroke"
				/>
			</svg>
		</div>
	);
}

export function GridRowLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="relative">
			<svg
				data-direction="top"
				data-variant="full-screen"
				className="absolute pointer-events-none z-10 top-0 w-full"
				width="100%"
				height="1"
				viewBox="0 0 100 1"
				preserveAspectRatio="none"
				style={{ left: "50%", transform: "translateX(-50%)", width: "100vw" }}
			>
				<line
					className="stroke-white/6"
					x1="0"
					y1="0.5"
					x2="100"
					y2="0.5"
					strokeWidth="1"
					strokeDasharray="6 4"
					vectorEffect="non-scaling-stroke"
				/>
			</svg>
			{children}
			<div className="relative">
				<svg
					data-direction="bottom"
					data-variant="full-screen"
					className="absolute pointer-events-none z-10 top-0 w-full"
					width="100%"
					height="1"
					viewBox="0 0 100 1"
					preserveAspectRatio="none"
					style={{ left: "50%", transform: "translateX(-50%)", width: "100vw" }}
				>
					<line
						className="stroke-white/6"
						x1="0"
						y1="0.5"
						x2="100"
						y2="0.5"
						strokeWidth="1"
						strokeDasharray="6 4"
						vectorEffect="non-scaling-stroke"
					/>
				</svg>
			</div>
		</div>
	);
}
