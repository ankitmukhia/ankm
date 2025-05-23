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

export interface SpecificPost extends Post {
	body: string;
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


			const formatedPost = posts.filter((post) => post.status === "published")
				.sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))

			return formatedPost;

		} catch (err) {
			return []
		}
	},
	getPost: (slug: string): SpecificPost | null => {
		try {
			const rootPath = path.join(process.cwd(), '/content')
			const dirContent = fs.readdirSync(rootPath, 'utf8')

			// filter out specific content and return it
			const post = dirContent.filter((fl) => fl.endsWith('.md') && fl.startsWith(`${slug}`)).map((post) => {
				const filePath = path.join(rootPath, post)
				const fileContent = fs.readFileSync(filePath, 'utf8')

				const { data, content } = matter(fileContent)

				// validation most done here

				return {
					...data,
					body: content
				};
			}) as SpecificPost[]

			const filtered = post.filter((post) => post.status === "published")[0]

			return filtered;

		} catch (err) {
			return null
		}
	}
}
