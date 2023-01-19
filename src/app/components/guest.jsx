import Link from 'next/link';
import '../styles/globals.css';
import Image from 'next/image';
import Moana from '../img/moona.webp';
import Kobo from '../img/kobo.webp';

export default function Guest() {
	return (
		<>
			<main id='guest-slider' className='pt-16 lg:pt-24 bg-slate-900'>
				<div className='container'>
					<h2 className='text-white flex flex-col items-center text-center'>
						<span className='font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-clashDisplay'>
							Guest Stars
						</span>
					</h2>
				</div>
				<div className='swiper-container'>
					<div
						className='group !py-10 -mt-4 lg:mt-0 swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-free-mode'
						style={{ cursor: 'grab' }}
					>
						<div
							className='swipper-wrapper'
							style={{
								transform: 'translate3d(0px, 0px, 0px)',
								transitionDuration: '0ms',
							}}
						>
							<div className='swiper-item'>
								<div className='swiper-slide slide-item relative flex flex-col swiper-slide-next'>
									<Link href='#'>
										<Image
											alt='Mona Hoshiniva'
											src={Moana}
											style={{ width: '300px', height: '375px' }}
											className='aspect-[4/5] w-300 h-375 object-cover pointer-events-none rounded-lg overflow-hidden mr-5'
										/>
									</Link>
									<div className='px-2 py-3 lg:py-4 flex flex-col items-start'>
										<Link
											href='#'
											className='text-white font-clashDisplay text-base lg:text-xl'
										>
											Moona Hoshinova
										</Link>
									</div>
									<div className='flex flex-wrap gap-2 mt-2 lg:mt-3'>
										<span class='px-3 py-1.5 rounded-md text-white font-bold tracking-tight text-xs sm:text-sm bg-indigo-500'>
											VTuber
										</span>
									</div>
								</div>
								<div className='swiper-slide slide-item relative flex flex-col'>
									<Link href='#'>
										<Image
											alt='Kobo Image'
											style={{ width: '300px', height: '375px' }}
											className='aspect-[4/5] w-300 h-375 object-cover pointer-events-none rounded-lg overflow-hidden mr-5'
											src={Kobo}
										/>
									</Link>
									<div className='px-2 py-3 lg:py-4 flex flex-col items-start'>
										<Link
											href='#'
											className='text-white font-clashDisplay text-base lg:text-xl'
										>
											Kobo Kanaeru
										</Link>
									</div>
									<div className='flex flex-wrap gap-2 mt-2 lg:mt-3'>
										<span class='px-3 py-1.5 rounded-md text-white font-bold tracking-tight text-xs sm:text-sm bg-indigo-500'>
											VTuber
										</span>
									</div>
								</div>
							</div>
							<div className='swiper-slide slide-px swiper-slide-active'></div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
