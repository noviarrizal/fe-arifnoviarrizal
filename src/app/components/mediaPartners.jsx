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

export default function MediaPartners() {
	return (
		<>
			<div className='py-10 lg:py-16'>
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
			</div>
		</>
	);
}
