import { PiConfettiLight } from "react-icons/pi";

export const Footer = () => {
	return <div className="flex justify-center items-center mt-4 pb-10 text-base">
		<span>Made with</span>
			<span className="mx-1">
				<PiConfettiLight />
			</span>
		<span>by Ankit Mukhia</span>
	</div>
}
