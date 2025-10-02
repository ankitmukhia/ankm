"use client";

import { useInViewContext } from "@/context/useInView";
import { SignatureSvg } from "@/components/signature-svg";
import { clsx } from "clsx";

const KeyboardKeys: Array<{
  firstRowKeys: string[];
  secondRowKeys: string[];
  thirdRowKeys: string[];
}> = [
  {
    firstRowKeys: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    secondRowKeys: ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    thirdRowKeys: ["z", "x", "c", "v", "b", "n", "m"],
  },
];

export const Footer = () => {
  const { inView } = useInViewContext();

  return (
    <div className="py-12 space-y-4">
      {/* <div className="flex justify-center px-2">
				<h1 className="text-3xl text-center tracking-wider font-serif">Ankit</h1>
			</div> */}

      <div className="relative">
        <div className="absolute z-100 -top-3 flex justify-center w-full">
          <SignatureSvg className="relative -left-6.5 top-2 h-45 w-[395px]" />
        </div>

        {/*
         * Keybeyboard layout
         */}

        <div className="flex items-center justify-center">
          {KeyboardKeys.map((rowKeys, _idx) => (
            <div key={_idx} className="flex flex-col gap-2">
              <div className="flex gap-2.5 items-center justify-center">
                {rowKeys.firstRowKeys.map((firstRow, _idx) => (
                  <div
                    key={firstRow}
                    className={clsx(
                      "border border-zinc-200/2 h-12 w-12 rounded-lg bg-neutral-900/80 shadow-[-4px_4px_0px_rgb(23,23,23),4px_4px_0px_rgb(23,23,23)] transition transform",
                      "hover:translate-y-1 hover:shadow-[-2px_2px_0px_rgb(23,23,23),2px_2px_0px_rgb(23,23,23)]",
                      {
                        "opacity-[0.1] transition delay-[3500ms] duration-[1800ms] ease-out":
                          inView && _idx !== 4 && _idx !== 7,
                      },
                    )}
                  >
                    <p className="text-lg uppercase text-center">{firstRow}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-2.5 items-center justify-center">
                {rowKeys.secondRowKeys.map((secondRow, _idx) => (
                  <div
                    key={secondRow}
                    className={clsx(
                      "border border-zinc-200/2 h-12 w-12 rounded-lg bg-neutral-900/80 shadow-[-4px_4px_0px_rgb(23,23,23),4px_4px_0px_rgb(23,23,23)] transition transform",
                      "hover:translate-y-1 hover:shadow-[-2px_2px_0px_rgb(23,23,23),2px_2px_0px_rgb(23,23,23)]",
                      {
                        "opacity-[0.1] transition delay-[3500ms] duration-[1800ms] ease-out":
                          inView && _idx !== 0 && _idx !== 7,
                      },
                    )}
                  >
                    <p className="text-lg uppercase text-center">{secondRow}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-2.5 items-center justify-center">
                {rowKeys.thirdRowKeys.map((thirdRow, _idx) => (
                  <div
                    key={thirdRow}
                    className={clsx(
                      "border border-zinc-200/2 h-12 w-12 rounded-lg bg-neutral-900/80 shadow-[-4px_4px_0px_rgb(23,23,23),4px_4px_0px_rgb(23,23,23)] transition transform",
                      "hover:translate-y-1 hover:shadow-[-2px_2px_0px_rgb(23,23,23),2px_2px_0px_rgb(23,23,23)]",
                      {
                        "opacity-[0.1] transition delay-[3500ms] duration-[1800ms] ease-out":
                          inView && _idx !== 5,
                      },
                    )}
                  >
                    <p className="text-lg uppercase text-center">{thirdRow}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
