import { query } from "@/lib/apollo/apollo-client";
import { MY_READING_STATES } from "@/lib/apollo/queries";
import { MyReadingStatesQuery } from "@/lib/apollo/types";
import Link from "next/link";

const ReadingListItem = ({
  book,
}: {
  book: MyReadingStatesQuery["myReadingStates"][number];
}) => {
  return (
    <Link
      href={`https://literal.club/book/${book.book.slug}`}
      target="_blank"
      className="flex items-center justify-between gap-2"
    >
      <div className="flex flex-col gap-1">
        <h2 className="text-md font-semibold">{book.book.title}</h2>
        <span className="text-xs">
          {book.book.authors.map((author) => author.name).join(", ")}
        </span>
      </div>
      <div>
        <span className="text-xs">
          {(() => {
            const date = new Date(book.createdAt);
            const now = new Date();
            const diffTime = Math.abs(now.getTime() - date.getTime());
            const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

            if (diffDays === 0) {
              return "Today";
            } else if (diffDays === 1) {
              return "1 day ago";
            } else if (diffDays <= 7) {
              // Display "X days ago" for up to 7 days
              return `${diffDays} days ago`;
            } else {
              return date.toLocaleDateString("en-IN", {
                year: "numeric",
                month: "short",
                day: "numeric",
              });
            }
          })()}
        </span>
      </div>
    </Link>
  );
};

export default async function Page() {
  const { data } = (await query({ query: MY_READING_STATES })) as {
    data: MyReadingStatesQuery;
  };
  const currentlyReading = data?.myReadingStates?.filter(
    (state) => state.status === "IS_READING",
  );
  const finishedReading = data?.myReadingStates?.filter(
    (state) => state.status === "FINISHED",
  );
  const wantsToRead = data?.myReadingStates?.filter(
    (state) => state.status === "WANTS_TO_READ",
  );

  return (
    <div className="mt-4">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <h2 className="text-md font-bold">Currently Reading</h2>
          {currentlyReading?.map((state) => (
            <ReadingListItem key={state.id} book={state} />
          ))}
        </div>

        {finishedReading!.length > 0 && (
          <div>
            <h2 className="text-md font-bold">Finished Reading</h2>
            {finishedReading?.map((state) => (
              <ReadingListItem key={state.id} book={state} />
            ))}
          </div>
        )}

        <div className="flex flex-col gap-3">
          <h2 className="text-md font-bold">Wants to Read</h2>
          {wantsToRead?.map((state) => (
            <ReadingListItem key={state.id} book={state} />
          ))}
        </div>
      </div>
    </div>
  );
}
