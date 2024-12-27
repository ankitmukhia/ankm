import localFont from "next/font/local"
import { Footer } from '@/components/footer'
import { Analytics } from '@vercel/analytics/next'
import clsx from 'clsx'
import "./globals.css";

const hubot = localFont({
  src: "./fonts/HubotSans.woff2",
  variable: "--font-hubot",
  weight: "400 900",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="[color-schema:dark]">
      <body
        className={clsx(
          "font-sans overscroll-y-none bg-stone-900 antialiased selection:bg-teal-600/90 selection:text-white",
          hubot.variable,
        )}
      >
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

	<div className="flex bg-yellow-300/80 text-slate-950 leading-8 tracking-wider uppercase flex-row justify-center"> My portfolio is currently a work in progress
	</div>
        <div className="layout-sm relative z-10 grid gap-y-8 px-4 text-rose-200/90 xl:layout-xl xl:gap-x-9 xl:px-0 [&>*]:col-start-2 xl:[&>*]:col-start-3">
          {children}

          <Footer />
        </div>

        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="h-screen w-screen relative overflow-hidden bg-top bg-no-repeat opacity-[0.3]" />
        </div>

	<Analytics />
      </body>
    </html>
  );
}



{/** <div className="pointer-events-none absolute inset-0 overflow-hidden">
   <div className="h-full flex justify-center bg-[url('https://res.cloudinary.com/delba/image/upload/h_500/bg_gradient_pfosr9')] bg-top bg-no-repeat opacity-[0.3]">
   <label className="text-[300px] opacity-[0.2]">Ankit</label>
  </div>
</div> **/}
