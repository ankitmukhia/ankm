"use client";

import Link from "next/link";
import { Logo } from "@/components/logo";
import { socials } from "@/lib/constants";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

export const Nav = () => {
  return (
    <>
      {/* <nav className="flex tracking-wide my-8 items-center justify-between space-x-6">
        <Logo />

        <Link
          href="/ai"
          className="font-satoshi hover:underline underline-offset-4"
        >
          ankit://ai
        </Link>
      </nav> */}

      <div className="mt-2 space-y-4">
        <h1 className="text-[1.3rem] font-manrope tracking-wider leading-none">
          Ankit Mukhia
        </h1>
        <h2 className="font-geist font-light text-[1rem] leading-none lg:space-y-0 lg:space-x-2">
          developer
        </h2>

        <h2 className="pt-4 font-geist text-[1rem] font-thin leading-none lg:space-y-0">
          hi, my name is ankit, i love stuff related to computers and design.
        </h2>

        <div className="flex items-center pt-2 space-x-2">
          {socials.map((social) => (
            <Link
              key={social.name}
              href={social.url}
              target={social.name === "weekly reads" ? "_self" : "_blank"}
              className="flex group font-geist items-center gap-2 hover:underline underline-offset-4 tracking-wide"
            >
              <social.icon size={14} />
              <div className="flex items-center">
                <p className="text-sm">{social.name}</p>
                <ArrowUpRightIcon className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
