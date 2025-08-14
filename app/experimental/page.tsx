export default function ExperimentalPage() {
  return (
    <div>
      <div className="relative mt-20">
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
            className="stroke-white/10"
            x1="0"
            y1="0.5"
            x2="100"
            y2="0.5"
            strokeWidth="1"
            strokeDasharray="6 6"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      <div className="p-4">
        <h1 className="text-xl">ankit</h1>
        <h2 className="text-[15px]">developer, deginer</h2>
      </div>

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
          className="stroke-white/10"
          x1="0"
          y1="0.5"
          x2="100"
          y2="0.5"
          strokeWidth="1"
          strokeDasharray="6 6"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
