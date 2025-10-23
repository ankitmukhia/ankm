import Link from "next/link";

export const BackButton = ({ href = "/" }: { href?: string }) => {
  return (
    <Link
      href={href}
      className="group bg-neutral-800/80 hover:bg-neutral-800 p-2 rounded-full inline-flex transition-colors duration-300 ease-out"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="stroke-neutral-400 size-5 group-hover:stroke-neutral-100 transition-colors duration-300 ease-out"
      >
        <path
          d="M9 14L4 9M4 9L9 4M4 9H10.4C13.7603 9 15.4405 9 16.7239 9.65396C17.8529 10.2292 18.7708 11.1471 19.346 12.2761C20 13.5595 20 15.2397 20 18.6V20"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
};
