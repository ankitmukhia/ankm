import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { AnkitAI } from "@/components/ankit-ai";

import Link from "next/link";

export default function Page() {
  return (
    <div className="p-2 xl:mt-30">
      <div className="p-4 space-y-4">
        <div>
          <Link
            href="/"
            className="inline-flex transaction duration-300 ease-in opacity-40 hover:opacity-100"
          >
            <ArrowLeftIcon className="w-4 h-4" />
          </Link>
        </div>

        <div className="space-y-4">
          <h1 className="text-[1.7rem] font-manrope tracking-wider leading-none">
            ankit://ai
          </h1>

          <h2 className="font-geist text-[1rem] text-gray-200 leading-none lg:space-y-0 lg:space-x-2">
            skip the boring reading, have a chat instead!
          </h2>
        </div>
      </div>

      <div>
        <AnkitAI />
      </div>
    </div>
  );
}
