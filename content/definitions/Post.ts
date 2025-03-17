// post schema
import { defineDocumentType } from "contentlayer2/source-files";
import GithubSlugger from 'github-slugger'

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
		headings: {
			type: "json",
			resolve: async (doc) => {
				// Regex - extract all headers from markdown string
				// remember : start writing content after new two lines on mdx file.
				const regXHeader = /\n\n(?<flag>#{1,6})\s+(?<content>.+)/g
				const slugger = new GithubSlugger()

				const headings = Array.from(doc.body.raw.matchAll(regXHeader)).map(({ groups }) => {
					const flag = groups?.flag;
					const content = groups?.content;
					return {
						heading: flag?.length,
						content,
						slug: content ? slugger.slug(content) : undefined,
					}
				})

				return headings
			},
		},
	},
}));
