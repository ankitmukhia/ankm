import Markdown from "markdown-to-jsx";

interface Props {
  body: string;
}

export const MarkdownRenderer = ({ body }: Props) => {
  return (
    <article className="prose dark:prose-invert">
      <Markdown>{body}</Markdown>
    </article>
  );
};
