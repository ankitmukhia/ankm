type Status = "WANTS_TO_READ" | "IS_READING" | "FINISHED" | "DROPPED" | "NONE";

type MyReadingStatesQuery = {
  myReadingStates: Array<{
    id: string;
    status: Status;
    createdAt: string;
    book: {
      id: string;
      title: string;
      slug: string;
      authors: Array<{
        name: string;
      }>;
    };
  }>;
};

export type { MyReadingStatesQuery };
