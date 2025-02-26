import { makeSource } from 'contentlayer2/source-files'
import { Post } from './content/definitions/Post'

export default makeSource({ 
	contentDirPath: 'content', 
  	documentTypes: [Post] 
})

