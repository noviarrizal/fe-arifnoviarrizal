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
import TiktokShopImage from '../img/tiktok-shop-web-banner.webp';
import OpalImage from '../img/oppal-web-banner.webp';

export default function Announcements() {
	return (
		<div className='bg-slate-900 pt-20'>
			<Swiper
				spaceBetween={2}
				slidesPerView={2}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
			>
				<SwiperSlide>
					<div
						className='swiper-slide slide-item relative flex flex-col swiper-slide-next m-3 ml-20'
						style={{ width: '555px' }}
					>
						<Link href='#' target='_blank'>
							<Image
								alt='Tiktok Shop'
								src={TiktokShopImage}
								loading='lazy'
								className='banner-slide-img mr-30 object-cover pointer-events-none rounded-lg overflow-hidden'
							/>
						</Link>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						className='swiper-slide slide-item relative flex flex-col swiper-slide-next m-3 mr-20'
						style={{ width: '555px', marginRight: '10px' }}
					>
						<Link href='#' target='_blank'>
							<Image
								alt='Opal Banner'
								src={OpalImage}
								loading='lazy'
								className='banner-slide-img mr-20 object-cover pointer-events-none rounded-lg overflow-hidden'
							/>
						</Link>
					</div>
				</SwiperSlide>
				<SwiperSlide></SwiperSlide>
			</Swiper>
		</div>
		// <div className='pt-10 pb-14 xl:pt-16 xl:pb-20 bg-slate-900'>
		// 	<div className='container'>
		// 		<div className='group !py-10 swiper-container swiper-container-initialized swiper-container-horizontal'>
		// 			<div
		// 				style={{
		// 					transform: 'translate3d(0px, 0px, 0px)',
		// 					transitionDuration: '0ms',
		// 				}}
		// 			>
		// 				<Swiper
		// 					slidesPerView={4}
		// 					spaceBetween={1}
		// 					onSlideChange={() => console.log('slide change')}
		// 					onSwiper={(swiper) => console.log(swiper)}
		// 				>
		// 					<SwiperSlide>
		// 						<div
		// 							className='swiper-slide slide-item relative flex flex-col swiper-slide-next m-3'
		// 							style={{ width: '555px', marginRight: '10px' }}
		// 						>
		// 							<Link href='#' target='_blank'>
		// 								<Image
		// 									alt='Tiktok Shop'
		// 									src={TiktokShopImage}
		// 									loading='lazy'
		// 									className='banner-slide-img mr-20'
		// 								/>
		// 							</Link>
		// 						</div>
		// 					</SwiperSlide>
		// 					<SwiperSlide>
		// 						<div
		// 							className='swiper-slide slide-item relative flex flex-col swiper-slide-next m-3'
		// 							style={{ width: '555px', marginRight: '10px' }}
		// 						>
		// 							<Link href='#' target='_blank'>
		// 								<Image
		// 									alt='Tiktok Shop'
		// 									src={TiktokShopImage}
		// 									loading='lazy'
		// 									className='banner-slide-img mr-20'
		// 								/>
		// 							</Link>
		// 						</div>
		// 					</SwiperSlide>
		// 				</Swiper>
		// 			</div>
		// 		</div>
		// 	</div>
		// </div>
	);
}
