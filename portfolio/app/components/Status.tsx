'use client'

import { Card } from '@/components/ui/card'
import { Section } from './Section'
import { Braces, Code, Hash, HeartHandshake, Home, LucideIcon } from 'lucide-react'
import { title } from 'process'
import Link from 'next/link'
import { useState } from 'react'

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
                                techno={project.techno}
                                description={project.description}
                                url={project.url}
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
        techno: 'React | Tailwind | Laravel',
        description: ["Création d'une API Laravel", "Interface de connexion et d'inscription", "Possibilité d'écrire et de posté un tweet contenant du texte, une image, un hashtag et de commenter les tweets d'autres utilisateurs",],
        url: 'https://github.com/HugoNannucci/Mytwitter'
    },
    {
        Logo: Braces,
        title: 'MyQuizz',
        techno: 'PHP | MVC | POO | Symfony | Twig',
        description: ["Création d'un site de quizz", "Créer un quizz", "Répondre à des quizz", "Panel admin", "Gestion des utilisateurs et des quizz", "Gestion des questions et des réponses", "Gestion des catégories de quizz"],
        url: 'https://github.com/HugoNannucci/MyQuizz'
    },
    {
        Logo: HeartHandshake,
        title: 'MySpotify',
        techno: 'React | JS | API rest',
        description: ["Création d'un site exploitant une API rest", "Interface de connexion et d'inscription", "Possibilité de rechercher des artistes, des albums et des chansons et de les écouter"],
        url: 'https://github.com/HugoNannucci/MySpotify'
    },
    {
        Logo: Code,
        title: 'Morpion',
        techno: 'React | JS',
        description: ["Création de jeu en JavaScript", "Morpion"],
        url: '/morpion'
    },
]

type ProjectProps = {
    Logo: LucideIcon
    title: string
    techno: string
    description: string[]
    url: string
}

const Projects = (props: ProjectProps) => {

    const [show, setShow] = useState(false);

    const handleShow = () => setShow(!show);

	return (
		<div onClick={handleShow} className=' flex flex-col'>
			<div className={`inline-flex items-center gap-4 transition-colors p-1 rounded ${show ? 'bg-accent/50' : 'hover:bg-accent/50'}`}>
            <span className='bg-accent text-accent-foreground p-3 rounded-sm'>
				<props.Logo size={16} />
			</span>
            <div>
            <p className="text-lg font-semibold">{props.title}</p>
            <p className='text-sm text-muted-foreground'>{props.techno}</p>
            </div>
            </div>
            {show && (
                <div className=' text-sm text-muted-foreground flex justify-center pt-4'>
                <ul className=' list-disc w-5/6'>
                    {props.description.map((desc, index) => (
                        <li key={index}>{desc}</li>
                    ))}
                    <p className='text-base mt-10 font-semibold'><Link target='_blank' href={props.url}>Voir le projet</Link></p>
                </ul>
            </div>
                )}
		</div>
	)
}


