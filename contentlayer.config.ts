// contentlayer.config.ts
import { makeSource } from "contentlayer/source-files";
import { Post } from "./content/definitions/Post";
import remarkGfm from "remark-gfm";
import rehupeSlug from "rehype-slug";

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Post],
  mdx: {
    esbuildOptions: (options) => {
      options.target = "esnext";
      return options;
    },
    remarkPlugins: [[remarkGfm]],
    rehypePlugins: [rehupeSlug],
  },
});
