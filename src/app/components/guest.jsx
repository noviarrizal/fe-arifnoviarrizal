import Link from 'next/link';
import '../styles/globals.css';
import Image from 'next/image';
import Carousel from './carousel';

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
							<div className='swiper-slide slide-px swiper-slide-active'></div>
							<div className='swiper-item'>
								<Carousel />
							</div>
						</div>
					</div>
				</div>
				<div className='container flex flex-col items-center justify-center mt-6'>
					<Link
						href='#'
						className='px-6 py-5 rounded-full bg-slate-700 hover:bg-slate-600 hover:text-white font-bold tracking-tight transition-colors duration-300 flex items-center gap-x-2 text-white'
					>
						<span>View All</span>
						<svg
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
							xmlns='http://www.w3.org/2000/svg'
							class='h-4'
							data-v-740c4b20=''
						>
							<path
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='2'
								d='M17 8l4 4m0 0l-4 4m4-4H3'
							></path>
						</svg>
					</Link>
				</div>
			</main>
		</>
	);
}
