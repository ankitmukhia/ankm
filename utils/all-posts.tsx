import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface Post {
	title: string;
	description: string;
	publishedAt: string;
	status: string;
	slug: string;
}

export const post = {
	allPostsMetadata: (): Post[] => {
		try {
			const rootPath = path.join(process.cwd(), '/content');
			const dirContent = fs.readdirSync(rootPath, 'utf8')

			const posts = dirContent.filter((fl) => fl.endsWith('.md')).map((post) => {
				const filePath = path.join(rootPath, post)
				const fileContent = fs.readFileSync(filePath, 'utf8')

				const { data } = matter(fileContent)

				// having validation would help here

				return {
					...data,
					slug: post.replace('.md', '')
				};
			}) as Post[]

			return posts;

		} catch (err) {
			return []
		}
	},
	getPost: (slug: string) => {
		const rootPath = path.join(process.cwd(), '/content')
		const dirContent = fs.readdirSync(rootPath, 'utf8')

		// filter out specific content and render it
	}
}
