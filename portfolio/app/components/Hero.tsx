import { Section } from './Section'

export const Hero = () => {
	return (
		<Section className='flex max-md:flex-col items-start gap-4'>
			<div className='flex-[3] w-full'>
				<h2 className='font-caption font-bold text-5xl text-orange-500'>Hugo Nannucci</h2>
				<h3 className='text-3xl font-caption'>Développeur Web</h3>
				<p className='text-base'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo incidunt,
					placeat delectus cum iste eaque maiores culpa cumque corrupti similique libero!
					Tenetur quas, sint minima incidunt at quam doloremque tempore!
					Actuellement à la recherche d'un Alternance!
				</p>
			</div>
			<div className=' flex-[2] max-md:m-auto ml-auto'>
                <img src="/moi.jpg" className='w-full h-auto rounded-full max-w-xs max-md:w-56' alt="photo d'Hugo Nannucci" />
            </div>
		</Section>
	)
}