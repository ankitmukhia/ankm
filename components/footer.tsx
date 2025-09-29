"use client";

import { useInViewContext } from "@/context/useInView";
import { motion } from "motion/react";
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
  const { inView, ref } = useInViewContext();

  return (
    <div className="py-12 space-y-4">
      {/* <div className="flex justify-center px-2">
				<h1 className="text-3xl text-center tracking-wider font-serif">Ankit</h1>
			</div> */}

      <div className="relative">
        <div className="absolute z-100 -top-4 flex justify-center w-full">
          <SignatureSvg className="relative -left-5 top-2 h-45 w-[395px]" />
        </div>

        {/*
         * Keybeyboard layout
         */}

        <div className="flex items-center justify-center">
          {KeyboardKeys.map((rowKeys, _idx) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 1 }}
              whileInView={inView ? { opacity: 0.1 } : { opacity: 1 }}
              transition={
                inView ? { delay: 7.5, duration: 3 } : { duration: 0 }
              }
              key={_idx}
              className="flex flex-col gap-2"
            >
              <div className="flex gap-2.5 items-center justify-center">
                {rowKeys.firstRowKeys.map((firstRow) => (
                  <div
                    key={firstRow}
                    className={clsx(
                      "border border-zinc-200/2 h-12 w-12 rounded-lg bg-neutral-900/80 shadow-[-4px_4px_0px_rgb(23,23,23),4px_4px_0px_rgb(23,23,23)] transition transform",
                      "hover:translate-y-1 hover:shadow-[-2px_2px_0px_rgb(23,23,23),2px_2px_0px_rgb(23,23,23)]",
                    )}
                  >
                    <p className="text-lg uppercase text-center">{firstRow}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-2.5 items-center justify-center">
                {rowKeys.secondRowKeys.map((secondRow) => (
                  <div
                    key={secondRow}
                    className={clsx(
                      "border border-zinc-200/2 h-12 w-12 rounded-lg bg-neutral-900/80 shadow-[-4px_4px_0px_rgb(23,23,23),4px_4px_0px_rgb(23,23,23)] transition transform",
                      "hover:translate-y-1 hover:shadow-[-2px_2px_0px_rgb(23,23,23),2px_2px_0px_rgb(23,23,23)]",
                    )}
                  >
                    <p className="text-lg uppercase text-center">{secondRow}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-2.5 items-center justify-center">
                {rowKeys.thirdRowKeys.map((thirdRow) => (
                  <div
                    key={thirdRow}
                    className={clsx(
                      "border border-zinc-200/2 h-12 w-12 rounded-lg bg-neutral-900/80 shadow-[-4px_4px_0px_rgb(23,23,23),4px_4px_0px_rgb(23,23,23)] transition transform",
                      "hover:translate-y-1 hover:shadow-[-2px_2px_0px_rgb(23,23,23),2px_2px_0px_rgb(23,23,23)]",
                    )}
                  >
                    <p className="text-lg uppercase text-center">{thirdRow}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
