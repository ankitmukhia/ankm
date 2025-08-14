import Link from "next/link";
import clsx from "clsx";

interface HeadingProps {
  heading: number;
  slug: string;
  content: string | undefined;
}

export const TagTable = ({ headings }: { headings: HeadingProps[] }) => {
  return (
    <div className="space-y-3">
      <p className="uppercase text-sm text-zinc-400/40">on this page</p>

      {headings.map((heading) => {
        return (
          <div key={heading.slug}>
            <Link
              href={`#${heading.slug}`}
              className={clsx(
                "flex hover:underline hover:text-teal-500 underline-offset-4 cursor-pointer",
                {
                  "pl-4": heading.heading === 2,
                },
              )}
            >
              <p>{heading.content}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
