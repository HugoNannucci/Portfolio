import { Section } from './Section'

export const Hero = () => {
	return (
		<Section className='flex max-md:flex-col items-start gap-4'>
			<div className='flex-[3] w-full'>
				<h2 className='font-caption font-bold text-5xl text-orange-500'>Hugo Nannucci</h2>
				<h3 className='text-3xl font-caption'>Développeur Web</h3>
				<p className='text-base'>
				En tant que développeur passionné par la programmation, je souhaite mettre en
				pratique mes compétences au service de vos projets et objectifs.
				</p>
				<p className='text-base mt-10 font-semibold pt-2'>
				Actuellement à la recherche d'une Alternance!
				</p>
			</div>
			<div className=' flex-[2] max-md:m-auto ml-auto'>
                <img src="/moi.jpg" className='w-full h-auto rounded-full max-w-xs max-md:w-56' alt="photo d'Hugo Nannucci" />
            </div>
		</Section>
	)
}