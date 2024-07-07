import { Badge } from '@/components/ui/badge'
import { Section } from './Section'
import { ReactLogo } from './icons/ReactLogo'
import { TailwindLogo } from './icons/TailwindLogo'
import { LaravelLogo } from './icons/LaravelLogo'
export const Skills = () => {
	return (
		<Section className='flex flex-col items-start gap-4'>
			<Badge variant={'outline'}>Skills</Badge>
			<h2 className='scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-primary'>
				I love working on...
			</h2>
			<div className='flex max-md:flex-col gap-4'>
				<div className='flex flex-col gap-2 flex-1'>
						<ReactLogo size={42} className=' animate-spin' style={ {animationDuration: "10s" }}/>
					<h3 className='text-2xl font-semibold tracking-tight'>React</h3>
					<p className='text-sm text-muted-foreground'>{
					"J'aime utiliser React pour ses composants réutilisables qui rendent le développement rapide et efficace. J'utilise aussi Next.js pour un développement web rapide et performant."
}</p>
				</div>
                <div className='flex flex-col gap-2 flex-1'>
						<TailwindLogo size={42} className=' animate-spin' style={ {animationDuration: "10s" }}/>
					<h3 className='text-2xl font-semibold tracking-tight'>Tailwind</h3>
					<p className='text-sm text-muted-foreground'>{
					"J'aime utiliser Tailwind CSS pour créer des interfaces stylisées rapidement. Sa flexibilité et ses classes utilitaires me permettent de développer des designs modernes et réactifs avec facilité."
}</p>
				</div>
                <div className='flex flex-col gap-2 flex-1'>
						<LaravelLogo size={42} className=' animate-spin' style={ {animationDuration: "10s" }}/>
					<h3 className='text-2xl font-semibold tracking-tight'>Laravel</h3>
					<p className='text-sm text-muted-foreground'>{
					"J'aime travailler avec Laravel pour son efficacité et sa simplicité. Son écosystème complet et ses fonctionnalités robustes facilitent le développement de projets web performants et sécurisés."
}</p>
				</div>
			</div>
		</Section>
	)
}
