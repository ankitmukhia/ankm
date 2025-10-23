import { AnkitAI } from "@/components/ankit-ai";
import { BackButton } from "@/components/back-button";

export default function Page() {
  return (
    <div className="p-2 md:mt-20">
      <div className="mb-5 xl:mb-10">
        <BackButton />
      </div>

      <div>
        <AnkitAI />
      </div>
    </div>
  );
}
