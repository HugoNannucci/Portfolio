import { Card } from '@/components/ui/card'
import { Section } from './Section'
import { Braces, Code, Hash, HeartHandshake, Home, LucideIcon } from 'lucide-react'
import { title } from 'process'
import Link from 'next/link'

export const Status = () => {
	return (
		<Section className='flex max-md:flex-col items-start gap-4'>
			<div className='flex-[3] w-full'>
				<Card className='w-full p-4 flex flex-col gap-2 border-2 border-orange-500'>
					<p className='text-lg text-muted-foreground border-b'>Projets</p>
                    <div className='flex flex-col gap-4'>
                        {PROJECT.map((project, index) => (
                            <Projects
                                key={index}
                                Logo={project.Logo}
                                title={project.title}
                                description={project.description}
                                url='/'
                            />
                        ))}
                    </div>
				</Card>
			{/* </div>
			<div className='flex-[2] flex flex-col gap-4 w-full'>
				<Card className=' p-4 flex-1'><p className='text-lg text-muted-foreground'>Front-End</p>
                    <div className='flex flex-col gap-4'>
                    </div>
                </Card>
				<Card className=' p-4 flex-1'><p className='text-lg text-muted-foreground'>Back-End</p></Card> */}
			</div>
		</Section>
	)
}

const PROJECT: ProjectProps[] = [
    {
        Logo: Hash,
        title: 'My Twitter',
        description: 'lorme ipsum dolor sit amet consectetur adipisicing elit.',
        url: '/'
    },
    {
        Logo: Braces,
        title: 'PiePHP',
        description: 'lorme ipsum dolor sit amet consectetur adipisicing elit.',
        url: '/'
    },
    {
        Logo: HeartHandshake,
        title: 'MyMeetic',
        description: 'lorme ipsum dolor sit amet consectetur adipisicing elit.',
        url: '/'
    },
    {
        Logo: Code,
        title: 'Piscine',
        description: 'lorem ipsum dolor sit amet consectetur adipisicing elit.',
        url: '/'
    },
]

type ProjectProps = {
    Logo: LucideIcon
    title: string
    description: string
    url: string
}

const Projects = (props: ProjectProps) => {
	return (
		<Link href={props.url} className=' inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded'>
			<span className='bg-accent text-accent-foreground p-3 rounded-sm'>
				<props.Logo size={16} />
			</span>
            <div>
            <p className="text-lg font-semibold">{props.title}</p>
            <p className='text-sm text-muted-foreground'>{props.description}</p>
            </div>
		</Link>
	)
}


