import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { PostPreview } from '@/components/post-preview'
import { post } from '@/utils/all-posts'
import Link from 'next/link'

export default function Page() {
	const allPosts = post.allPostsMetadata();

	const formatedPost = allPosts.filter((post) => post.status === "published")
		.sort((a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)))

	return (
		<div className="space-y-8 my-8">
			<div>
				<Link href="/">
					<ArrowLeftIcon className="w-4 h-4" />
				</Link>
			</div>

			<div className="pt-2 space-y-4">
				<h1 className="text-[2.5rem] font-serif tracking-wider leading-none">
					Posts
				</h1>


				<h2 className="font-satoshi text-sm">
					here i throw in some of my weekly reads/learnings!
				</h2>
			</div>

			<div className="space-y-2 pt-4">
				{formatedPost.map((post, _idx) => (
					<PostPreview key={post.title} post={post} index={_idx} />
				))}
			</div>
		</div>
	)
}
