import GitHubCalendar from 'react-github-calendar'

const explicitTheme = {
	light: ['#f0f0f0', '#c4edde', '#7ac7c4', '#f73859', '#384259'],
	dark: ['#383939', '#4C5264', '#626E95', '#798CC7', '#8FA8FA'],
};

export const GithubActivityGraph = () => {
	return (
		<div className="flex border items-center justify-center font-satoshi border-white/5 rounded-lg p-2">
			<GitHubCalendar
				username="ankitmukhia"
				fontSize={12}
				blockSize={7}
				theme={explicitTheme}
				colorScheme="dark"
			/>
		</div>
	)
}
