import { Modal } from '@/components/modal'
import Image from 'next/image'

export default function PModal() {
	return (
	       <Modal>
		  <Image
			src="/profile-image.png"
			className="pointer-events-none"
			width={500}
			height={500}
			alt="blurred background"
			priority={true}
		   /> 
		</Modal>
	)
}
