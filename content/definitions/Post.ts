// blog/post schema
import { defineDocumentType } from "contentlayer/source-files";

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: "posts/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of post",
      required: true,
    },
    description: {
      type: "string",
      description: "The description of post",
      required: true,
    },
    publishedAt: {
      type: "string",
      description: "Posted date of post",
      required: true,
    },
    status: {
      type: "string",
      description: "The status of post",
      required: true,
    },
    coverImage: {
      type: "string",
      description: "The image of post",
      required: true,
    },
  },
  computedFields: {
    url: {
      type: "string",
      // post-01.md -> post-01
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
    },
  },
}));
