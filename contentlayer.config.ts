// contentlayer.config.ts
import { makeSource } from 'contentlayer/source-files'
import { Post } from './content/definitions/Post'

export default makeSource({
	contentDirPath: 'content',
	documentTypes: [Post]
})
