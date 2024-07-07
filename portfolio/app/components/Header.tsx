import { Button, buttonVariants } from '@/components/ui/button'
import { GithubIcon } from './icons/GithubIcon'
import { LinkedInIcon } from './icons/LinkedInIcon'
import { Section } from './Section'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Cv } from './Cv'

export const Header = () => {
	return (
		<header className=' sticky top-0 bg-background'>
			<Section className=' flex items-baseline'>
				<h1 className=' text-lg font-bold text-primary '>dev.hugo-nannucci.com</h1>
				{/* <p className=" text-lg text-muted">Développeur Web</p> */}
				<div className=' flex-1' />
				<ul className=' flex gap-2'>
					<Cv />
					<Link
						target='_blank'
						href='https://github.com/HugoNannucci'
						className={cn(buttonVariants({ variant: 'outline' }), 'size-6 p-0')}
					>
						<GithubIcon size={24} className=' text-foreground' />
					</Link>
					<Link
						target='_blank'
						href='https://Linkedin.com/in/hugo-nannucci-6995a8302/'
						className={cn(buttonVariants({ variant: 'outline' }), 'size-6 p-0')}
					>
						<LinkedInIcon size={24} className=' text-foreground' />
					</Link>
				</ul>
			</Section>
		</header>
	)
}
