import '../styles/hero.css';
import ChibiHero from '../img/chibi-hero.svg';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
	return (
		<>
			<main className='relative isolate flex-auto'>
				<div className='hero relative w-full min-h-screen h-full flex flex-col'>
					<div className='absolute inset-0 z-0 rounded-br-[200px] overflow-hidden'>
						<video
							id='bg-hero-video'
							autoPlay
							muted
							loop
							className='w-full h-full object-cover'
						>
							<source src='/bg-hero.mp4' type='video/mp4' />
						</video>
					</div>
					<div className='absolute z-10 right-0 bottom-0 translate-y-20 xs:translate-y-0'>
						<Image
							src={ChibiHero}
							alt='Maskot Picture'
							className='pointer-events-none w-[8rem] sm:w-[10rem] lg:w-[12rem] xl:w-[16rem] 2xl:w-[20rem] rotate-[-45deg] animate-[slow-bounce-1_12s_linear_infinite]'
						/>
					</div>
					<div className='absolute z-30 bottom-0 -translate-y-10 left-4 sm:left-16 flex flex-col items-center gap-y-6'>
						<div className='hidden lg:block p-2 rounded-full text-white/80 backdrop-blur-lg border border-white/10 [@supports_not_(backdrop-filter:blur(0px))]:bg-white/100 [@supports_not_(backdrop-filter:blur(0px))]:text-black'>
							<div className='flex items-center gap-2 flex-col gap-y-0'>
								<Link
									href='https://www.instagram.com/'
									target='_blank'
									className='group aspect-square h-14 rounded-full hover:bg-white/10 transition-colors duration-300 flex items-center justify-center'
								>
									<svg
										viewBox='0 0 28 27'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
										className='fill-current h-6 group-hover:text-[#E2306C] duration-300 transition-colors'
									>
										<g clip-path='url(#clip0_234_11252)'>
											<path d='M13.5058 6.57501C12.1367 6.57501 10.7984 6.98097 9.6601 7.74157C8.52179 8.50217 7.63458 9.58324 7.11067 10.8481C6.58676 12.1129 6.44968 13.5047 6.71677 14.8474C6.98385 16.1902 7.64311 17.4235 8.61117 18.3916C9.57923 19.3597 10.8126 20.0189 12.1553 20.286C13.4981 20.5531 14.8899 20.416 16.1547 19.8921C17.4195 19.3682 18.5006 18.481 19.2612 17.3427C20.0218 16.2043 20.4278 14.866 20.4278 13.497C20.4292 12.5876 20.2512 11.6868 19.9038 10.8464C19.5565 10.0059 19.0466 9.24224 18.4036 8.59918C17.7605 7.95613 16.9969 7.44631 16.1564 7.09896C15.3159 6.75161 14.4152 6.57356 13.5058 6.57501ZM13.5058 17.998C12.6157 17.998 11.7457 17.7341 11.0057 17.2396C10.2657 16.7452 9.6889 16.0423 9.3483 15.2201C9.00771 14.3978 8.91859 13.493 9.09223 12.6201C9.26586 11.7472 9.69444 10.9454 10.3238 10.316C10.9531 9.68669 11.7549 9.25811 12.6279 9.08447C13.5008 8.91084 14.4056 8.99995 15.2278 9.34055C16.0501 9.68114 16.7529 10.2579 17.2474 10.9979C17.7418 11.738 18.0058 12.608 18.0058 13.498C18.0034 14.6908 17.5285 15.834 16.6851 16.6774C15.8417 17.5208 14.6985 17.9956 13.5058 17.998V17.998ZM22.3258 6.29201C22.3254 6.61138 22.2303 6.92347 22.0525 7.18881C21.8748 7.45416 21.6224 7.66084 21.3272 7.78274C21.032 7.90464 20.7073 7.93628 20.3941 7.87366C20.0809 7.81103 19.7933 7.65696 19.5677 7.43092C19.3421 7.20488 19.1886 6.91702 19.1265 6.60373C19.0645 6.29044 19.0967 5.96579 19.2192 5.67082C19.3416 5.37585 19.5488 5.12381 19.8145 4.94656C20.0801 4.76931 20.3924 4.67481 20.7118 4.67501C20.9242 4.67461 21.1347 4.71625 21.331 4.79753C21.5274 4.87881 21.7057 4.99813 21.8557 5.14862C22.0057 5.2991 22.1245 5.47777 22.2052 5.67435C22.2858 5.87093 22.3268 6.08152 22.3258 6.29401V6.29201ZM26.9108 7.93101C26.9549 5.83238 26.1715 3.80065 24.7298 2.275C23.2011 0.838765 21.1719 0.0565024 19.0748 0.0950059C16.8458 -0.0319941 10.1638 -0.0319941 7.93476 0.0950059C5.83637 0.0525608 3.80474 0.833268 2.27476 2.27001C0.835646 3.79764 0.052954 5.82868 0.0947617 7.927C-0.0322383 10.156 -0.0322383 16.838 0.0947617 19.067C0.0500451 21.1658 0.833147 23.1979 2.27476 24.724C3.80456 26.1604 5.83463 26.943 7.93276 26.905C10.1618 27.032 16.8438 27.032 19.0728 26.905C21.1717 26.9495 23.2039 26.166 24.7298 24.724C26.1669 23.195 26.9495 21.165 26.9108 19.067C27.0378 16.838 27.0378 10.167 26.9108 7.93301V7.93101ZM24.0308 21.457C23.8019 22.0381 23.456 22.5659 23.0146 23.0076C22.5732 23.4494 22.0456 23.7957 21.4648 24.025C19.6878 24.725 15.4698 24.567 13.5058 24.567C11.5418 24.567 7.31876 24.724 5.54676 24.025C4.9658 23.7959 4.43813 23.4498 3.99654 23.0082C3.55495 22.5666 3.20886 22.039 2.97976 21.458C2.27976 19.681 2.43776 15.463 2.43776 13.499C2.43776 11.535 2.28076 7.31201 2.97976 5.54001C3.20909 4.95941 3.55528 4.43214 3.99686 3.9909C4.43844 3.54966 4.96599 3.20388 5.54676 2.975C7.32376 2.275 11.5418 2.43301 13.5058 2.43301C15.4698 2.43301 19.6928 2.276 21.4648 2.975C22.0457 3.2041 22.5734 3.55019 23.015 3.99179C23.4566 4.43338 23.8027 4.96104 24.0318 5.54201C24.7318 7.31901 24.5738 11.537 24.5738 13.501C24.5738 15.465 24.7358 19.687 24.0308 21.459V21.457Z'></path>
										</g>{' '}
										<defs>
											<clipPath id='clip0_234_11252'>
												<rect width='27.006' height='27' fill='white'></rect>
											</clipPath>
										</defs>
									</svg>
								</Link>
								<Link
									href='https://www.facebook.com/'
									target='_blank'
									className='group aspect-square h-14 rounded-full hover:bg-white/10 transition-colors duration-300 flex items-center justify-center'
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 264 512'
										className='h-6 group-hover:text-[#0E8EF1] duration-300 transition-colors'
									>
										<g fill='currentColor'>
											<path d='M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229'></path>
										</g>
									</svg>
								</Link>
								<Link
									href='https://www.twitter.com/'
									target='_blank'
									className='group aspect-square h-14 rounded-full hover:bg-white/10 transition-colors duration-300 flex items-center justify-center'
								>
									<svg
										xmlns='https://www.w3.org/2000/svg'
										viewBox='0 0 512 512'
										class='h-6 group-hover:text-[#1DA1F2] duration-300 transition-colors'
									>
										<g fill='currentColor'>
											<path d='M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z'></path>
										</g>
									</svg>
								</Link>
								<Link
									href='https://www.youtube.com/'
									target='_blank'
									className='group aspect-square h-14 rounded-full hover:bg-white/10 transition-colors duration-300 flex items-center justify-center'
								>
									<svg
										viewBox='0 0 37 27'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
										class='fill-current h-5 group-hover:text-[#F70000] duration-300 transition-colors'
									>
										<g clip-path='url(#clip0_234_11250)'>
											<path d='M35.3522 4.6409C35.1409 3.73169 34.6688 2.90394 33.9938 2.25927C33.3187 1.6146 32.4701 1.18107 31.5522 1.0119C27.0928 0.268871 22.5755 -0.0698385 18.0552 -0.00010033C13.5067 -0.0689539 8.9612 0.269733 4.47316 1.0119C3.54947 1.16739 2.69363 1.5963 2.01623 2.24322C1.33883 2.89014 0.870989 3.72534 0.673165 4.6409C0.211853 7.5711 -0.0132053 10.5336 0.000164456 13.4999C-0.0343213 16.4705 0.219535 19.4374 0.758164 22.3589C0.970216 23.2677 1.4426 24.095 2.1175 24.7395C2.7924 25.3841 3.64055 25.8179 4.55816 25.9879C9.04743 26.7226 13.5926 27.0613 18.1412 26.9999C22.6907 27.0614 27.2369 26.7228 31.7272 25.9879C32.6506 25.8319 33.5062 25.4028 34.1835 24.756C34.8608 24.1091 35.3288 23.2742 35.5272 22.3589C36.0114 19.4288 36.2934 16.4688 36.3712 13.4999C36.2553 10.5254 35.9146 7.56399 35.3522 4.6409V4.6409ZM13.5002 19.4059V7.5939L23.7932 13.4999L13.5002 19.4059Z'></path>
										</g>{' '}
										<defs>
											<clipPath id='clip0_234_11250'>
												<rect width='36.367' height='27' fill='white'></rect>
											</clipPath>
										</defs>
									</svg>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}