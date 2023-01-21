'use client';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import Image from 'next/image';
import LogoAka from '../img/logo/aka_virtual.jpg';
import AnigameLogo from '../img/logo/anigame-logo.png';
import AnimalLogo from '../img/logo/animal-logo.png';
import LogoSM from '../img/logo/logo-sm.jpg';
import Link from 'next/link';

export default function Brands() {
	return (
		<>
			<div className='py-10 lg:py-16 bg-slate-900'>
				<div className='container flex flex-col items-center pt-36'>
					<h3 className='font-clashDisplay font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white text-center'>
						Brands
					</h3>
					<p className='mt-3 text-center text-white font-jakarta'>
						Check out all brands you will find at Indonesia Comic Con 2022
					</p>
				</div>
				<div className='swiper-container mt-10 mb-10'>
					<Swiper
						// install Swiper modules
						modules={[Autoplay]}
						// centeredSlides={true}
						slidesPerView={12}
						autoplay={{
							delay: 1000,
							disableOnInteraction: false,
						}}
						onSwiper={(swiper) => console.log(swiper)}
						onSlideChange={() => console.log('slide change')}
						spaceBetween={1}
					>
						<SwiperSlide>
							<div>
								<div>
									<div
										className='rounded-lg smooth-corners smooth-corners overflow-hidden '
										style={{ width: '100px', height: '100px' }}
									>
										<Image
											alt='AKA Virtual'
											style={{ width: '100px', height: '100px' }}
											src={LogoAka}
											className='banner-slide-img bg-white'
										/>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className=''>
								<div>
									<div
										className='rounded-lg smooth-corners smooth-corners overflow-hidden'
										style={{ width: '100px', height: '100px' }}
									>
										<Image
											alt='AKA Virtual'
											style={{ width: '100px', height: '100px' }}
											src={AnigameLogo}
											className='banner-slide-img bg-white'
										/>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className=''>
								<div>
									<div
										className='rounded-lg smooth-corners smooth-corners overflow-hidden'
										style={{ width: '100px', height: '100px' }}
									>
										<Image
											alt='AKA Virtual'
											style={{ width: '100px', height: '100px' }}
											src={AnimalLogo}
											className='banner-slide-img bg-white'
										/>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className=''>
								<div>
									<div
										className='rounded-lg smooth-corners smooth-corners overflow-hidden'
										style={{ width: '100px', height: '100px' }}
									>
										<Image
											alt='AKA Virtual'
											style={{ width: '100px', height: '100px' }}
											src={LogoSM}
											className='banner-slide-img bg-white'
										/>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className=''>
								<div>
									<div
										className='rounded-lg smooth-corners smooth-corners overflow-hidden'
										style={{ width: '100px', height: '100px' }}
									>
										<Image
											alt='AKA Virtual'
											style={{ width: '100px', height: '100px' }}
											src={LogoAka}
											className='banner-slide-img bg-white'
										/>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className=''>
								<div>
									<div
										className='rounded-lg smooth-corners smooth-corners overflow-hidden'
										style={{ width: '100px', height: '100px' }}
									>
										<Image
											alt='AKA Virtual'
											style={{ width: '100px', height: '100px' }}
											src={AnigameLogo}
											className='banner-slide-img bg-white'
										/>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className=''>
								<div>
									<div
										className='rounded-lg smooth-corners smooth-corners overflow-hidden'
										style={{ width: '100px', height: '100px' }}
									>
										<Image
											alt='AKA Virtual'
											style={{ width: '100px', height: '100px' }}
											src={AnimalLogo}
											className='banner-slide-img bg-white'
										/>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className=''>
								<div>
									<div
										className='rounded-lg smooth-corners smooth-corners overflow-hidden'
										style={{ width: '100px', height: '100px' }}
									>
										<Image
											alt='AKA Virtual'
											style={{ width: '100px', height: '100px' }}
											src={LogoSM}
											className='banner-slide-img bg-white'
										/>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className=''>
								<div>
									<div
										className='rounded-lg smooth-corners smooth-corners overflow-hidden'
										style={{ width: '100px', height: '100px' }}
									>
										<Image
											alt='AKA Virtual'
											style={{ width: '100px', height: '100px' }}
											src={LogoAka}
											className='banner-slide-img bg-white'
										/>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className=''>
								<div>
									<div
										className='rounded-lg smooth-corners smooth-corners overflow-hidden'
										style={{ width: '100px', height: '100px' }}
									>
										<Image
											alt='AKA Virtual'
											style={{ width: '100px', height: '100px' }}
											src={AnigameLogo}
											className='banner-slide-img bg-white'
										/>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className=''>
								<div>
									<div
										className='rounded-lg smooth-corners smooth-corners overflow-hidden'
										style={{ width: '100px', height: '100px' }}
									>
										<Image
											alt='AKA Virtual'
											style={{ width: '100px', height: '100px' }}
											src={AnimalLogo}
											className='banner-slide-img bg-white'
										/>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className=''>
								<div>
									<div
										className='rounded-lg smooth-corners smooth-corners overflow-hidden'
										style={{ width: '100px', height: '100px' }}
									>
										<Image
											alt='AKA Virtual'
											style={{ width: '100px', height: '100px' }}
											src={LogoSM}
											className='banner-slide-img bg-white'
										/>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className=''>
								<div>
									<div
										className='rounded-lg smooth-corners smooth-corners overflow-hidden'
										style={{ width: '100px', height: '100px' }}
									>
										<Image
											alt='AKA Virtual'
											style={{ width: '100px', height: '100px' }}
											src={LogoAka}
											className='banner-slide-img bg-white'
										/>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className=''>
								<div>
									<div
										className='rounded-lg smooth-corners smooth-corners overflow-hidden'
										style={{ width: '100px', height: '100px' }}
									>
										<Image
											alt='AKA Virtual'
											style={{ width: '100px', height: '100px' }}
											src={AnigameLogo}
											className='banner-slide-img bg-white'
										/>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className=''>
								<div>
									<div
										className='rounded-lg smooth-corners smooth-corners overflow-hidden'
										style={{ width: '100px', height: '100px' }}
									>
										<Image
											alt='AKA Virtual'
											style={{ width: '100px', height: '100px' }}
											src={AnimalLogo}
											className='banner-slide-img bg-white'
										/>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className=''>
								<div>
									<div
										className='rounded-lg smooth-corners smooth-corners overflow-hidden'
										style={{ width: '100px', height: '100px' }}
									>
										<Image
											alt='AKA Virtual'
											style={{ width: '100px', height: '100px' }}
											src={LogoSM}
											className='banner-slide-img bg-white'
										/>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className=''>
								<div>
									<div
										className='rounded-lg smooth-corners smooth-corners overflow-hidden'
										style={{ width: '100px', height: '100px' }}
									>
										<Image
											alt='AKA Virtual'
											style={{ width: '100px', height: '100px' }}
											src={LogoAka}
											className='banner-slide-img bg-white'
										/>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className=''>
								<div>
									<div
										className='rounded-lg smooth-corners smooth-corners overflow-hidden'
										style={{ width: '100px', height: '100px' }}
									>
										<Image
											alt='AKA Virtual'
											style={{ width: '100px', height: '100px' }}
											src={AnigameLogo}
											className='banner-slide-img bg-white'
										/>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className=''>
								<div>
									<div
										className='rounded-lg smooth-corners smooth-corners overflow-hidden'
										style={{ width: '100px', height: '100px' }}
									>
										<Image
											alt='AKA Virtual'
											style={{ width: '100px', height: '100px' }}
											src={AnimalLogo}
											className='banner-slide-img bg-white'
										/>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className=''>
								<div>
									<div
										className='rounded-lg smooth-corners smooth-corners overflow-hidden'
										style={{ width: '100px', height: '100px' }}
									>
										<Image
											alt='AKA Virtual'
											style={{ width: '100px', height: '100px' }}
											src={LogoSM}
											className='banner-slide-img bg-white'
										/>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className=''>
								<div>
									<div
										className='rounded-lg smooth-corners smooth-corners overflow-hidden'
										style={{ width: '100px', height: '100px' }}
									>
										<Image
											alt='AKA Virtual'
											style={{ width: '100px', height: '100px' }}
											src={LogoAka}
											className='banner-slide-img bg-white'
										/>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className=''>
								<div>
									<div
										className='rounded-lg smooth-corners smooth-corners overflow-hidden'
										style={{ width: '100px', height: '100px' }}
									>
										<Image
											alt='AKA Virtual'
											style={{ width: '100px', height: '100px' }}
											src={AnigameLogo}
											className='banner-slide-img bg-white'
										/>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className=''>
								<div>
									<div
										className='rounded-lg smooth-corners smooth-corners overflow-hidden'
										style={{ width: '100px', height: '100px' }}
									>
										<Image
											alt='AKA Virtual'
											style={{ width: '100px', height: '100px' }}
											src={AnimalLogo}
											className='banner-slide-img bg-white'
										/>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className=''>
								<div>
									<div
										className='rounded-lg smooth-corners smooth-corners overflow-hidden'
										style={{ width: '100px', height: '100px' }}
									>
										<Image
											alt='AKA Virtual'
											style={{ width: '100px', height: '100px' }}
											src={LogoSM}
											className='banner-slide-img bg-white'
										/>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className=''>
								<div>
									<div
										className='rounded-lg smooth-corners smooth-corners overflow-hidden'
										style={{ width: '100px', height: '100px' }}
									>
										<Image
											alt='AKA Virtual'
											style={{ width: '100px', height: '100px' }}
											src={LogoAka}
											className='banner-slide-img bg-white'
										/>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className=''>
								<div>
									<div
										className='rounded-lg smooth-corners smooth-corners overflow-hidden'
										style={{ width: '100px', height: '100px' }}
									>
										<Image
											alt='AKA Virtual'
											style={{ width: '100px', height: '100px' }}
											src={AnigameLogo}
											className='banner-slide-img bg-white'
										/>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className=''>
								<div>
									<div
										className='rounded-lg smooth-corners smooth-corners overflow-hidden'
										style={{ width: '100px', height: '100px' }}
									>
										<Image
											alt='AKA Virtual'
											style={{ width: '100px', height: '100px' }}
											src={AnimalLogo}
											className='banner-slide-img bg-white'
										/>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className=''>
								<div>
									<div
										className='rounded-lg smooth-corners smooth-corners overflow-hidden'
										style={{ width: '100px', height: '100px' }}
									>
										<Image
											alt='AKA Virtual'
											style={{ width: '100px', height: '100px' }}
											src={LogoSM}
											className='banner-slide-img bg-white'
										/>
									</div>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
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
			</div>
		</>
	);
}
