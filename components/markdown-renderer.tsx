import Markdown from 'markdown-to-jsx'

interface Props {
	body: string;
}

export const MarkdownRenderer = ({ body }: Props) => {
	return (
		<article className="prose">
			<Markdown
				options={{
					overrides: {
						h1: {
							component: (props) => <h1 className="mt-4 mb-2 text-2xl font-bold" {...props} />,
						},
						p: {
							component: (props) => <p className="my-2 text-base" {...props} />,
						},
						ul: {
							component: (props) => <ul className="my-2 list-disc list-inside" {...props} />,
						},
						li: {
							component: (props) => <li className="my-1" {...props} />,
						},
					},
				}}
			>
				{body}
			</Markdown>

			<h1 className="text-green-500">Something</h1>
		</article>
	)
}
