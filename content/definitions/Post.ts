// blog/post schema
import { defineDocumentType } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
	name: 'Post',
	filePathPattern: '**/*.mdx',
	contentType: 'mdx',
	fields: {
		title: {
			type: 'string',
			description: 'The title of post',
			required: true
		},
		description: {
			type: 'string',
			required: true
		},
		publishedAt: {
			type: 'string',
			required: true
		},
		status: {
			type: 'string',
			required: true
		},
		image: {
			type: 'string',
			required: true
		}
	},
	computedFields: {
		url: {
			type: 'string',
			// post-01.md -> post-01
			resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, "") 
		}
	}
}))	
