import Image from 'next/image';
import ComicImage from '../img/popCulture/comics.webp';
import ToysImage from '../img/popCulture/toys.webp';
import MoviesImage from '../img/popCulture/movies.webp';
import GamesImage from '../img/popCulture/games.webp';
import LifeStyleImage from '../img/popCulture/lifestyle.webp';

export default function PopCulture() {
	return (
		<>
			<div className='pop-culture-pillars bg-slate-900'>
				<div className='container'>
					<div className='flex flex-col items-center pt-36'>
						<h2 className='text-white font-jakarta flex flex-col items-center text-center [transform-style:preserve-3d] [perspective:1000px]'>
							<span id='pillars-small'>
								The <span class='font-bold'>biggest event</span> in a year to
								celebrate
							</span>
							<span
								id='pillars-big'
								class='font-clashDisplay text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'
							>
								5 pop culture&#39;s pillars:
							</span>
						</h2>
						<div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 xl:gap-4 mt-8 lg:mt-10'>
							<div className='aspect-[4/5] w-full bg-gray-800 rounded-md sm:rounded-lg overflow-hidden relative hover:scale-110 transition-transform duration-500 ease-in-out'>
								<Image
									alt='comic photo'
									src={ComicImage}
									className='w-full h-full object-cover pointer-events-none'
									loading='lazy'
									style={{ width: '211px', height: '264px' }}
								/>
								<div className='absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent flex flex-col items-center justify-end text-center px-4 pb-4'>
									<span class='font-clashDisplay font-bold text-white text-xl xl:text-2xl !leading-[1.1]'>
										Comics
									</span>
								</div>
							</div>
							<div className='aspect-[4/5] w-full bg-gray-800 rounded-md sm:rounded-lg overflow-hidden relative hover:scale-110 transition-transform duration-500 ease-in-out'>
								<Image
									alt='Toys'
									src={ToysImage}
									style={{ width: '211px', height: '264px' }}
									loading='lazy'
									className='w-full
									h-full
									object-contain
									pointer-events-none'
								/>
								<div className='absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent flex flex-col items-center justify-end text-center px-4 pb-4'>
									<span className='font-clashDisplay font-bold text-white text-xl xl:text-2xl !leading-[1.1]'>
										Toys
									</span>
								</div>
							</div>
							<div className='aspect-[4/5] w-full bg-gray-800 rounded-md sm:rounded-lg overflow-hidden relative hover:scale-110 transition-transform duration-500 ease-in-out'>
								<Image
									alt='Movies'
									src={MoviesImage}
									style={{ width: '211px', height: '264px' }}
									loading='lazy'
									w-full
									h-full
									object-contain
									pointer-events-none
								/>
								<div className='absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent flex flex-col items-center justify-end text-center px-4 pb-4'>
									<span className='font-clashDisplay font-bold text-white text-xl xl:text-2xl !leading-[1.1]'>
										Movies
									</span>
								</div>
							</div>
							<div className='aspect-[4/5] w-full bg-gray-800 rounded-md sm:rounded-lg overflow-hidden relative hover:scale-110 transition-transform duration-500 ease-in-out'>
								<Image
									alt='Games'
									src={GamesImage}
									style={{ width: '211px', height: '264px' }}
									loading='lazy'
									w-full
									h-full
									object-cover
									pointer-events-none
								/>
								<div className='absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent flex flex-col items-center justify-end text-center px-4 pb-4'>
									<span className='font-clashDisplay font-bold text-white text-xl xl:text-2xl !leading-[1.1]'>
										Movies
									</span>
								</div>
							</div>
							<div className='aspect-[4/5] w-full bg-gray-800 rounded-md sm:rounded-lg overflow-hidden relative hover:scale-110 transition-transform duration-500 ease-in-out'>
								<Image
									alt='Life style'
									src={LifeStyleImage}
									style={{ width: '211px', height: '264px' }}
									loading='lazy'
									w-full
									h-full
									object-cover
									pointer-events-none
								/>
								<div className='absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent flex flex-col items-center justify-end text-center px-4 pb-4'>
									<span className='font-clashDisplay font-bold text-white text-xl xl:text-2xl !leading-[1.1]'>
										Movies
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
