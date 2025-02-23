import Image from 'next/image'
import Link from 'next/link'

const AnkitLogo = () => {
	return (
	      <Image
		 src="/logo.svg"
		 alt="logo"
		 width={20}
		 height={20}
		 priority
	       />
	)	
}

export const Logo = () => {
    return (
  	<Link href="/">	
	  <AnkitLogo /> 
  	</Link>	
    )
}
