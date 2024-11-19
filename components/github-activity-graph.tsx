import GitHubCalendar from 'react-github-calendar'

const explicitTheme = {
	light: ['#f0f0f0', '#c4edde', '#7ac7c4', '#f73859', '#384259'],
	dark: ['#383939', '#4C5264', '#626E95', '#798CC7', '#8FA8FA'],
};

export const GithubActivityGraph = () => {
	return <div className="border border-gray-700 rounded-lg p-4">
		<GitHubCalendar
			username="ankitmukhia"
			blockSize={7.5}
			theme={explicitTheme}
			colorScheme={"dark"}
		/>
	</div>
}
