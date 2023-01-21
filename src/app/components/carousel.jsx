'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../styles/globals.css';
import Link from 'next/link';
import Image from 'next/image';
import Moana from '../img/moona.webp';
import Kobo from '../img/kobo.webp';
import Mythia from '../img/mythia.webp';
import Jaret from '../img/jaret.webp';
import Knite from '../img/knite.webp';
import Echow from '../img/echow.webp';

export default function Carousel() {
	return (
		<>
			<div className='container-carousel'>
				<Swiper
					modules={[Navigation, Pagination, Scrollbar, A11y]}
					slidesPerView={4}
					spaceBetween={1}
					navigation
					pagination={{ clickable: true }}
					onSlideChange={() => console.log('slide change')}
					onSwiper={(swiper) => console.log(swiper)}
				>
					<SwiperSlide>
						<div className='swiper-slide slide-item relative flex flex-col swiper-slide-next m-3'>
							<Link href='#'>
								<Image
									alt='Mona Hoshiniva'
									src={Moana}
									style={{ width: '300px', height: '375px' }}
									className='aspect-[4/5] w-300 h-375 object-cover pointer-events-none rounded-lg overflow-hidden ml-20 pr-20'
								/>
							</Link>
							<div className='px-2 py-3 lg:py-4 flex flex-col items-start'>
								<Link
									href='#'
									className='text-white font-clashDisplay text-xl font-bold lg:text-xl ml-20'
								>
									Moona Hoshinova
								</Link>
							</div>
							<div className='flex flex-wrap gap-2 mt-2 lg:mt-3 ml-20'>
								<span class='px-3 py-1.5 rounded-md text-white font-bold tracking-tight text-xs sm:text-sm bg-indigo-500'>
									VTuber
								</span>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='swiper-slide slide-item relative flex flex-col'>
							<Link href='#'>
								<Image
									alt='Kobo Image'
									style={{ width: '300px', height: '375px' }}
									className='aspect-[4/5] w-300 h-375 object-cover pointer-events-none rounded-lg overflow-hidden m-3'
									src={Kobo}
								/>
							</Link>
							<div className='px-2 py-3 lg:py-4 flex flex-col items-start'>
								<Link
									href='#'
									className='text-white font-clashDisplay text-xl lg:text-xl font-bold'
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
					</SwiperSlide>
					<SwiperSlide>
						<div className='swiper-slide slide-item relative flex flex-col'>
							<Link href='#'>
								<Image
									src={Mythia}
									alt='Mythia Image'
									style={{ width: '300px', height: '375px' }}
									className='aspect-[4/5] w-full h-full object-cover pointer-events-none rounded-lg overflow-hidden m-3'
								/>
							</Link>
							<div className='px-2 py-3 lg:py-4 flex flex-col items-start'>
								<Link
									href='#'
									className='text-white font-display lg:text-xl font-clashDisplay text-xl font-bold'
								>
									Mythia Batford
								</Link>
								<div className='flex flex-wrap gap-2 mt-2 lg:mt-3'>
									<div className='flex flex-wrap gap-2 mt-2 lg:mt-3'>
										<span class='px-3 py-1.5 rounded-md text-white font-bold tracking-tight text-xs sm:text-sm bg-indigo-500'>
											VTuber
										</span>
									</div>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='swiper-slide slide-item relative flex flex-col'>
							<Link href='#'>
								<Image
									src={Jaret}
									alt='Jaret Fajrianto'
									className='aspect-[4/5] w-full h-full object-cover pointer-events-none rounded-lg overflow-hidden m-3'
									style={{ width: '300px', height: '375px' }}
								/>
							</Link>
							<div className='px-2 py-3 lg:py-4 flex flex-col items-start'>
								<Link
									href='#'
									className='text-white font-clashDisplay font-bold text-xl lg:text-xl'
								>
									Jaret Fajrianto
								</Link>
								<span className='mt-1 text-white'>
									Creator of @ghosty_comic
								</span>
								<div className='flex flex-wrap gap-2 mt-2 lg:mt-3'>
									<span class='px-3 py-1.5 rounded-md text-white font-bold tracking-tight text-xs sm:text-sm bg-indigo-500'>
										VTuber
									</span>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='swiper-slide slide-item relative flex flex-col'>
							<Link href='#'>
								<Image
									alt='Knite'
									src={Knite}
									className='aspect-[4/5] w-full h-full object-cover pointer-events-none rounded-lg overflow-hidden m-3'
									style={{ width: '300px', height: '375px' }}
								/>
							</Link>
							<div className='px-2 py-3 lg:py-4 flex flex-col items-start'>
								<Link
									href='#'
									className='text-white font-clashDisplay text-xl lg:text-xl font-bold'
								>
									Knite
								</Link>
								<div className='flex flex-wrap gap-2 mt-2 lg:mt-3'>
									<span className='px-3 py-1.5 rounded-md text-white font-bold tracking-tight text-xs sm:text-sm bg-pink-600'>
										Cosplayer
									</span>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='swiper-slide slide-item relative flex flex-col'>
							<Link href='#'>
								<Image
									alt='Echow'
									src={Echow}
									className='aspect-[4/5] w-full h-full object-cover pointer-events-none rounded-lg overflow-hidden m-3'
									style={{ width: '300px', height: '375px' }}
								/>
							</Link>
							<div className='px-2 py-3 lg:py-4 flex flex-col items-start'>
								<Link
									href='#'
									className='text-white font-clashDisplay text-xl lg:text-xl font-bold'
								>
									Echow
								</Link>
								<div className='flex flex-wrap gap-2 mt-2 lg:mt-3'>
									<span className='px-3 py-1.5 rounded-md text-white font-bold tracking-tight text-xs sm:text-sm bg-pink-600'>
										Cosplayer
									</span>
								</div>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</>
	);
}
