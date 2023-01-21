import Image from 'next/image';
import CosplayCompetition from '../img/icc/cosplay-competition.webp';
import VtuberImage from '../img/icc/vtuber-talkshow.webp';
import MoviePanel from '../img/icc/movie-panel.webp';
import ComicBidding from '../img/icc/comic-bidding.webp';
import MainGuestTalkShow from '../img/icc/main-guest-talkshow.webp';
import ComicArtist from '../img/icc/comic-artist.webp';
import GamingCompetition from '../img/icc/gaming-competition.webp';
import StampRally from '../img/icc/stamp-rally.webp';
import DJNight from '../img/icc/dj-night.webp';

export default function InsideICC() {
	return (
		<>
			<div className='py-10 lg:py-16 bg-slate-900'>
				<div className='container'>
					<div className='flex flex-col items-center pt-36'>
						<h2 className='text-white flex flex-col items-center text-center font-clashDisplay'>
							<span
								id='inside-big'
								className='font-clashDisplay font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'
							>
								Inside ICC 2022
							</span>
							<span id='inside-small' className='text-gray-300'>
								Exciting activities designed for you 🤩
							</span>
						</h2>
						<div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 xl:gap-4 mt-8 lg:mt-10 ml-20'>
							<div className='aspect-[4/5] w-full bg-gray-800 rounded-md sm:rounded-lg overflow-hidden relative hover:scale-110 transition-transform duration-500 ease-in-out'>
								<Image
									alt='Cosplay Competition'
									src={CosplayCompetition}
									loading='lazy'
									className='w-full h-full object-cover pointer-events-none'
								/>
								<div className='absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent flex flex-col items-center justify-end text-center px-4 pb-4'>
									<span className='font-clashDisplay font-bold text-white text-lg xl:text-xl !leading-[1.1]'>
										Cosplay Competition
									</span>
								</div>
							</div>
							<div className='aspect-[4/5] w-full bg-gray-800 rounded-md sm:rounded-lg overflow-hidden relative hover:scale-110 transition-transform duration-500 ease-in-out'>
								<Image
									alt='VTuber Talkshow and Consert'
									src={VtuberImage}
									loading='lazy'
									className='w-full h-full object-cover pointer-events-none'
								/>
								<div className='absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent flex flex-col items-center justify-end text-center px-4 pb-4'>
									<span className='font-clashDisplay font-bold text-white text-lg xl:text-xl !leading-[1.1]'>
										VTuber Talkshow & Consert
									</span>
								</div>
							</div>
							<div className='aspect-[4/5] w-full bg-gray-800 rounded-md sm:rounded-lg overflow-hidden relative hover:scale-110 transition-transform duration-500 ease-in-out'>
								<Image
									alt='Movie Panel'
									src={MoviePanel}
									loading='lazy'
									className='w-full h-full object-cover pointer-events-none'
								/>
								<div className='absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent flex flex-col items-center justify-end text-center px-4 pb-4'>
									<span className='font-clashDisplay font-bold text-white text-lg xl:text-xl !leading-[1.1]'>
										Movie Panel
									</span>
								</div>
							</div>
							<div className='aspect-[4/5] w-full bg-gray-800 rounded-md sm:rounded-lg overflow-hidden relative hover:scale-110 transition-transform duration-500 ease-in-out'>
								<Image
									alt='Comic Bidding'
									src={ComicBidding}
									loading='lazy'
									className='w-full h-full object-cover pointer-events-none'
								/>
								<div className='absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent flex flex-col items-center justify-end text-center px-4 pb-4'>
									<span className='font-clashDisplay font-bold text-white text-lg xl:text-xl !leading-[1.1]'>
										Comic Bidding
									</span>
								</div>
							</div>
							<div className='aspect-[4/5] w-full bg-gray-800 rounded-md sm:rounded-lg overflow-hidden relative hover:scale-110 transition-transform duration-500 ease-in-out'>
								<Image
									alt='Main Guest Talkshow'
									src={MainGuestTalkShow}
									loading='lazy'
									className='w-full h-full object-cover pointer-events-none'
								/>
								<div className='absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent flex flex-col items-center justify-end text-center px-4 pb-4'>
									<span className='font-clashDisplay font-bold text-white text-lg xl:text-xl !leading-[1.1]'>
										Main Guest Talkshow
									</span>
								</div>
							</div>
							<div className='aspect-[4/5] w-full bg-gray-800 rounded-md sm:rounded-lg overflow-hidden relative hover:scale-110 transition-transform duration-500 ease-in-out'>
								<Image
									alt='Comic Artist'
									src={ComicArtist}
									loading='lazy'
									className='w-full h-full object-cover pointer-events-none'
								/>
								<div className='absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent flex flex-col items-center justify-end text-center px-4 pb-4'>
									<span className='font-clashDisplay font-bold text-white text-lg xl:text-xl !leading-[1.1]'>
										Comic Artist
									</span>
								</div>
							</div>
							<div className='aspect-[4/5] w-full bg-gray-800 rounded-md sm:rounded-lg overflow-hidden relative hover:scale-110 transition-transform duration-500 ease-in-out'>
								<Image
									alt='Gaming Competition'
									src={GamingCompetition}
									loading='lazy'
									className='w-full h-full object-cover pointer-events-none'
								/>
								<div className='absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent flex flex-col items-center justify-end text-center px-4 pb-4'>
									<span className='font-clashDisplay font-bold text-white text-lg xl:text-xl !leading-[1.1]'>
										Gaming Competition
									</span>
								</div>
							</div>
							<div className='aspect-[4/5] w-full bg-gray-800 rounded-md sm:rounded-lg overflow-hidden relative hover:scale-110 transition-transform duration-500 ease-in-out'>
								<Image
									alt='Stamp Rally'
									src={StampRally}
									loading='lazy'
									className='w-full h-full object-cover pointer-events-none'
								/>
								<div className='absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent flex flex-col items-center justify-end text-center px-4 pb-4'>
									<span className='font-clashDisplay font-bold text-white text-lg xl:text-xl !leading-[1.1]'>
										Stamp Rally
									</span>
								</div>
							</div>
							<div className='aspect-[4/5] w-full bg-gray-800 rounded-md sm:rounded-lg overflow-hidden relative hover:scale-110 transition-transform duration-500 ease-in-out'>
								<Image
									alt='Dj Night'
									src={DJNight}
									loading='lazy'
									className='w-full h-full object-cover pointer-events-none'
								/>
								<div className='absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent flex flex-col items-center justify-end text-center px-4 pb-4'>
									<span className='font-clashDisplay font-bold text-white text-lg xl:text-xl !leading-[1.1]'>
										DJ Night
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
