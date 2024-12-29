// post schema
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
		date: {
			type: 'date',
			required: true
		}
	}
}))	
