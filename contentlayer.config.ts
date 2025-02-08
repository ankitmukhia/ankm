// contentlayer.config.ts
import { makeSource } from 'contentlayer/source-files'
import { Post } from './content/definitions/Post'
import remarkGfm from 'remark-gfm'

export default makeSource({
	contentDirPath: 'content',
	documentTypes: [Post],
	mdx: {
		remarkPlugins: [[remarkGfm]]	
	}
})
