import GitHubCalendar from 'react-github-calendar'
import { SiGithub } from '@icons-pack/react-simple-icons';

const explicitTheme = {
	light: ['#f0f0f0', '#c4edde', '#7ac7c4', '#f73859', '#384259'],
	dark: ['#383939', '#4C5264', '#626E95', '#798CC7', '#8FA8FA'],
};

export const GithubActivityGraph = () => {
	return <div className="group relative">
		<div className="absolute bg-gray-900/80 inset-0 opacity-0 group-hover:opacity-100 flex z-10 items-center group:hover:opacity-100 transition-opacity justify-center">
			<div className="cursor-pointer">
				<SiGithub color="white" size={22} />
			</div>
		</div>
		<div className="border border-white/5 rounded-lg p-4">
			<GitHubCalendar
				username="ankitmukhia"
				blockSize={7.5}
				theme={explicitTheme}
				colorScheme={"dark"}
			/>
		</div>
	</div>
}
