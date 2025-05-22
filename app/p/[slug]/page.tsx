//TODO:

// import Post from './Post'

interface Props {
	params: Promise<{ slug: string }>
}

/* export async function generateStaticParams() {
	return;
} */

export default async function Page({ params }: Props) {
	const slug = (await params).slug

	return (
		<div>
			Nothing yet.
			Current slug: {slug.toString()}
		</div>
	)
}
