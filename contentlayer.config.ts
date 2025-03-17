import { makeSource } from 'contentlayer2/source-files'
import { Post } from './content/definitions/Post'
// plugin to add `id` attribute to headings
import re1hypeSlug from 'rehype-slug'
import rehypePrettyCode from 'rehype-pretty-code'
import { rehypePrettyCodeOptions } from '@/lib/rehypePrettyCode'

export default makeSource({
	contentDirPath: 'content',
	documentTypes: [Post],
	mdx: {
		rehypePlugins: [
			[re1hypeSlug],
			[rehypePrettyCode, rehypePrettyCodeOptions],
		],
	}
})

