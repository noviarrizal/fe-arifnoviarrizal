import Image from 'next/image';
import Link from 'next/link';
import LogoPanorama from '../img/logo/logo-panorama-media.svg';
import WonderfullIndonesia from '../img/logo/wonderful-indonesia.webp';
import MorpheusLogo from '../img/icc/ser-morpheus.webp';
import BiznetLogo from '../img/logo/biznet.webp';
import BumiLangit from '../img/logo/screenplay-bumilangit.webp';
import Disney from '../img/logo/disney.webp';
import Dofala from '../img/logo/dofala.webp';
import Jumpstart from '../img/logo/jump-start.webp';
import Brands from './brands';
import MediaPartners from './mediaPartners';

export default function Credit() {
	return (
		<>
			<main className='bg-white pt-16 pb-12 lg:pt-24 lg:pb-20'>
				<div className='container'>
					<div className='grid grid-cols-2 gap-x-8 gap-y-8 max-w-lg mx-auto'>
						<div className='align-center items-center text-center'>
							<span className='credit-title text-center font-bold align-center mb-4'>
								Organized by
							</span>
							<Link href='#'>
								<Image
									src={LogoPanorama}
									alt='panorama media'
									className='h-10 xl:h-14 mt-8'
									style={{ width: '240px', height: '56px' }}
								/>
							</Link>
						</div>
						<div className='align-center items-center text-center'>
							<span className='credit-title text-center font-bold align-center mb-4'>
								Presented by
							</span>
							<Link href='#'>
								<svg
									viewBox='0 0 3163 575'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
									className='h-7 xl:h-10 text-black mt-8'
									data-v-1227b9f2=''
								>
									<path
										opacity='0.963'
										fill-rule='evenodd'
										clip-rule='evenodd'
										d='M295.5 0.5H214.5C214.667 108.834 214.5 217.167 214 325.5C212.738 334.286 210.071 342.619 206 350.5C183.839 383.162 154.339 392.162 117.5 377.5C129.37 393.609 145.37 402.776 165.5 405C203.937 405.223 227.77 386.723 237 349.5C237.541 240.167 238.041 130.833 238.5 21.5H296.5H297.5C295.92 14.6349 295.253 7.63489 295.5 0.5ZM406.5 111.5C384.312 111.546 363.978 105.546 345.5 93.5C361.133 112.405 381.133 124.405 405.5 129.5H406.5V111.5ZM168.5 191.5H167.5C115.163 194.576 74.6634 217.91 46 261.5C12.8575 323.31 18.0242 381.644 61.5 436.5C29.9189 413.387 10.4189 382.387 3 343.5C2.16302 336.351 1.32971 329.351 0.5 322.5V313.5C6.29788 245.536 41.2979 200.036 105.5 177C126.224 171.139 147.224 169.639 168.5 172.5V191.5ZM1417 277.5C1438.98 227.924 1476.82 199.258 1530.5 191.5C1491.37 189.706 1457.37 201.872 1428.5 228C1384.86 273.848 1374.7 326.348 1398 385.5C1425.73 439.445 1469.89 465.779 1530.5 464.5C1486.53 458.77 1452.36 437.437 1428 400.5C1405.37 361.225 1401.71 320.225 1417 277.5Z'
										fill='#24F2EC'
									></path>{' '}
									<path
										opacity='0.966'
										fill-rule='evenodd'
										clip-rule='evenodd'
										d='M297.5 21.5H296.5C302.96 52.4784 319.293 76.4784 345.5 93.5C327.848 72.8928 318.848 48.8928 318.5 21.5H297.5ZM406.5 129.5H405.5V192.5C364.869 191.789 328.036 179.789 295 156.5C294.833 185.833 294.667 215.167 294.5 244.5C294.333 273.833 294.167 303.167 294 332.5C286.95 387.794 258.45 427.628 208.5 452C157.668 472.66 109.335 468.16 63.5 438.5C67.9969 443.83 72.9969 448.663 78.5 453C123.777 486.802 173.111 494.135 226.5 475C280.383 450.771 310.883 409.271 318 350.5L318.234 310.04L318.5 264C318.667 235.167 318.833 206.333 319 177.5C351.944 201.091 388.778 212.758 429.5 212.5V131.5C421.741 131.732 414.075 131.065 406.5 129.5ZM168.5 191.5C176.196 191.354 183.862 191.687 191.5 192.5V274.5C153.011 266.495 125.511 280.161 109 315.5C101.899 337.025 104.399 357.358 116.5 376.5C112.388 374.272 108.388 371.772 104.5 369C81.4821 346.748 75.6488 320.582 87 290.5C104.239 258.634 130.739 246.301 166.5 253.5C166.56 254.043 166.893 254.376 167.5 254.5C168.5 233.511 168.833 212.511 168.5 191.5ZM1691 271.5C1662.53 216.17 1617.03 189.504 1554.5 191.5C1621.77 200.594 1663.27 238.26 1679 304.5C1685.95 357.722 1669.12 401.555 1628.5 436C1607.37 451.659 1583.7 461.159 1557.5 464.5C1597.33 466.609 1632 454.109 1661.5 427C1703.67 381.476 1713.5 329.642 1691 271.5Z'
										fill='#FA2B53'
									></path>{' '}
									<path
										opacity='0.878'
										fill-rule='evenodd'
										clip-rule='evenodd'
										d='M167.5 191.5C167.833 191.5 168.167 191.5 168.5 191.5C168.833 212.511 168.5 233.511 167.5 254.5C166.893 254.376 166.56 254.043 166.5 253.5C167.497 233.007 167.831 212.34 167.5 191.5Z'
										fill='#F12A51'
									></path>{' '}
									<path
										opacity='0.983'
										fill-rule='evenodd'
										clip-rule='evenodd'
										d='M345.5 93.5C319.293 76.4784 302.96 52.4784 296.5 21.5H238.5C238.041 130.833 237.541 240.167 237 349.5C227.77 386.723 203.937 405.223 165.5 405C145.37 402.776 129.37 393.609 117.5 377.5C117.5 376.833 117.167 376.5 116.5 376.5C112.388 374.272 108.388 371.772 104.5 369C81.4821 346.748 75.6488 320.582 87 290.5C104.239 258.634 130.739 246.301 166.5 253.5C167.497 233.007 167.831 212.34 167.5 191.5C115.163 194.576 74.6634 217.91 46 261.5C12.8574 323.31 18.0242 381.644 61.5 436.5C61.8332 437.5 62.5 438.167 63.5 438.5C109.335 468.16 157.668 472.66 208.5 452C258.45 427.628 286.95 387.794 294 332.5C294.168 302.94 294.336 273.38 294.504 243.82L294.507 243.318L294.509 242.965L294.511 242.61L294.513 242.254L294.514 242.05L294.514 241.999L294.595 227.796L294.838 185.018L295 156.5C328.036 179.789 364.869 191.789 405.5 192.5V129.5C381.133 124.405 361.133 112.405 345.5 93.5ZM2456.5 115.5H2413.5V465.5H2456.5C2456.33 420.832 2456.5 376.165 2457 331.5C2462.88 299.952 2481.72 281.452 2513.5 276C2552.97 273.46 2574.8 291.96 2579 331.5C2579.5 376.165 2579.67 420.832 2579.5 465.5H2622.5C2622.67 418.165 2622.5 370.832 2622 323.5C2621.43 292.539 2609.27 267.373 2585.5 248C2556.22 230.539 2525.55 227.872 2493.5 240C2478 245.845 2465.83 255.679 2457 269.5C2456.5 218.168 2456.33 166.834 2456.5 115.5ZM2242.5 125.5C2273.91 122.209 2302.57 129.376 2328.5 147C2352.16 166.485 2363.82 191.652 2363.5 222.5H2319.5C2317.65 195.813 2303.98 178.313 2278.5 170C2253.05 163.024 2230.05 167.69 2209.5 184C2190.93 202.494 2188.09 222.994 2201 245.5C2211.65 256.412 2224.48 263.579 2239.5 267C2264.93 272.94 2289.93 280.274 2314.5 289C2367.76 312.362 2385.59 351.862 2368 407.5C2350.31 444.162 2321.14 464.995 2280.5 470C2245.83 474.27 2214.16 466.604 2185.5 447C2159.86 427.553 2146.53 401.72 2145.5 369.5H2189.5C2194.41 400.247 2212.07 419.413 2242.5 427C2268.36 433.097 2291.69 428.097 2312.5 412C2331.37 392.42 2334.54 370.586 2322 346.5C2313.31 335.905 2302.48 328.405 2289.5 324C2267.01 317.377 2244.34 311.377 2221.5 306C2159.9 288.621 2137.4 249.121 2154 187.5C2167.36 159.483 2188.86 140.65 2218.5 131C2226.56 128.826 2234.56 126.992 2242.5 125.5ZM963.5 128.5H882.5V465.5H963.5C963.333 435.831 963.5 406.165 964 376.5C971.048 368.95 978.548 361.95 986.5 355.5C1011.4 391.623 1036.07 427.957 1060.5 464.5C1090.17 465.833 1119.83 465.833 1149.5 464.5L1094 384.5L1038.5 304.5C1071.8 272.529 1104.8 240.196 1137.5 207.5C1105.51 206.333 1073.51 206.167 1041.5 207C1015.36 232.138 989.528 257.638 964 283.5C963.5 231.834 963.333 180.168 963.5 128.5ZM1727.5 128.5H1808.5C1808.33 179.834 1808.5 231.168 1809 282.5C1821.92 269.917 1834.83 257.333 1847.75 244.75C1860.67 232.167 1873.58 219.583 1886.5 207C1918.51 206.167 1950.51 206.333 1982.5 207.5C1949.05 239.555 1916.05 272.055 1883.5 305C1920.62 358.062 1957.62 411.229 1994.5 464.5C1964.84 465.667 1935.17 465.833 1905.5 465C1893.08 446.583 1880.67 428.167 1868.25 409.75C1855.83 391.333 1843.42 372.917 1831 354.5C1828.98 356.521 1826.96 358.541 1824.94 360.562L1820 365.5C1816.33 369.167 1812.67 372.833 1809 376.5C1808.5 406.165 1808.33 435.831 1808.5 465.5H1727.5V128.5ZM757.5 130.5C674.169 129.5 590.836 129.167 507.5 129.5V202.5C534.484 201.563 561.484 201.23 588.5 201.5V465.5H669.5V201.5C691.177 201.833 712.844 201.5 734.5 200.5L739.663 184.786L746 165.5C749.833 153.833 753.667 142.166 757.5 130.5ZM805.5 129.5C833.636 129.045 849.303 142.712 852.5 170.5C849.867 195.133 836.2 208.8 811.5 211.5C782.02 207.228 768.853 190.228 772 160.5C777.332 143.661 788.499 133.328 805.5 129.5ZM1419.5 129.5H1163.5V202.5C1190.49 201.573 1217.49 201.24 1244.5 201.5V465.5H1326.5V201.5H1397.5C1404.63 177.44 1411.96 153.44 1419.5 129.5ZM1530.5 191.5H1554.5C1621.77 200.594 1663.27 238.26 1679 304.5C1685.95 357.722 1669.12 401.555 1628.5 436C1607.37 451.659 1583.7 461.159 1557.5 464.5C1548.5 465.792 1539.5 465.792 1530.5 464.5C1486.53 458.77 1452.36 437.437 1428 400.5C1405.37 361.225 1401.71 320.225 1417 277.5C1438.98 227.924 1476.82 199.258 1530.5 191.5ZM1534.5 262.5C1571.2 260.753 1595.7 277.086 1608 311.5C1614.21 346.915 1601.38 372.748 1569.5 389C1535.79 400.209 1508.63 391.376 1488 362.5C1471.72 330.357 1476.55 301.857 1502.5 277C1512.15 269.735 1522.82 264.902 1534.5 262.5ZM2874 287.5C2846.57 247.489 2808.4 229.156 2759.5 232.5C2750.86 233.78 2742.19 235.613 2733.5 238C2696.4 250.099 2671.57 274.599 2659 311.5C2649.14 346.373 2652.14 380.039 2668 412.5C2695.99 456.405 2736.15 475.572 2788.5 470C2837.82 462.34 2870.32 434.84 2886 387.5C2895.13 352.543 2891.13 319.21 2874 287.5ZM2843 323.5C2827.34 287.574 2799.84 270.908 2760.5 273.5C2732.52 278.96 2713.02 294.96 2702 321.5C2690.89 355.307 2697.39 385.14 2721.5 411C2755.15 436.997 2788.81 436.997 2822.5 411C2846.38 385.964 2853.22 356.798 2843 323.5ZM3162.5 339.5V364.5C3158.03 410.792 3134.7 443.625 3092.5 463C3069.65 470.986 3046.31 472.653 3022.5 468C3000.53 463.11 2983.03 451.61 2970 433.5C2969.5 480.499 2969.33 527.499 2969.5 574.5H2925.5V238.5H2969.5C2969.33 249.172 2969.5 259.839 2970 270.5C2985.05 250.162 3005.22 237.995 3030.5 234C3079.43 227.723 3117.6 244.89 3145 285.5C3154.78 302.324 3160.61 320.324 3162.5 339.5ZM3034.5 273.5C3073.01 271.325 3099.51 287.991 3114 323.5C3122.79 350.835 3119.46 376.502 3104 400.5C3082.84 426.331 3056.01 435.164 3023.5 427C2981.26 410.04 2963.76 378.873 2971 333.5C2980.12 300.537 3001.29 280.537 3034.5 273.5ZM852.5 236.5H771.5V465.5H852.5V236.5Z'
										fill='currentColor'
									></path>
								</svg>
							</Link>
						</div>
					</div>
					<div className='flex flex-col items-center mt-16'>
						<span className='text-black font-bold tracking-tight text-base sm:text-lg text-center'>
							Supported By
						</span>
						<div className='flex flex-wrap items-center justify-center gap-x-4 2xl:gap-x-8 gap-y-2'>
							<Image
								src={WonderfullIndonesia}
								alt='Wonderful Indonesia'
								className='h-32 lg:h-40'
								style={{ width: '160px', height: '160px' }}
							/>
							<Image
								src={WonderfullIndonesia}
								alt='Wonderful Indonesia'
								className='h-32 lg:h-40'
								style={{ width: '160px', height: '160px' }}
							/>
							<Image
								src={WonderfullIndonesia}
								alt='Wonderful Indonesia'
								className='h-32 lg:h-40'
								style={{ width: '160px', height: '160px' }}
							/>
							<Image
								src={WonderfullIndonesia}
								alt='Wonderful Indonesia'
								className='h-32 lg:h-40'
								style={{ width: '160px', height: '160px' }}
							/>
						</div>
					</div>
					<div className='grid grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-8 text-center align-center'>
						<div className='credit-card'>
							<span className='credit-title text-center font-bold align-center mb-4'>
								Official NFT Ticketing Partner
							</span>
							<Link href='#'>
								<Image
									src={MorpheusLogo}
									alt='Morpheus Logo'
									className='h-32 lg:h-40 text-center'
									style={{ width: '160px', height: '160px' }}
								/>
							</Link>
						</div>
						<div className='credit-card'>
							<span className='credit-title text-center font-bold align-center mb-4'>
								Official Internet Provider
							</span>
							<Link href='#'>
								<Image
									src={BiznetLogo}
									alt='Biznet Logo'
									className='h-32 lg:h-40 text-center'
									style={{ width: '160px', height: '160px' }}
								/>
							</Link>
						</div>
						<div className='credit-card'>
							<span className='credit-title text-center font-bold align-center mb-4'>
								Official Public Service
							</span>
							<Link href='#'>
								<Image
									src={MorpheusLogo}
									alt='Morpheus Logo'
									className='h-32 lg:h-40 text-center'
									style={{ width: '160px', height: '160px' }}
								/>
							</Link>
						</div>
						<div className='credit-card'>
							<span className='credit-title text-center font-bold align-center mb-4'>
								Official Food Partner
							</span>
							<Link href='#'>
								<Image
									src={BiznetLogo}
									alt='Biznet Logo'
									className='h-32 lg:h-40 text-center'
									style={{ width: '160px', height: '160px' }}
								/>
							</Link>
						</div>
						<div className='credit-card'>
							<span className='credit-title text-center font-bold align-center mb-4'>
								Official Drink Partner
							</span>
							<Link href='#'>
								<Image
									src={BiznetLogo}
									alt='Biznet Logo'
									className='h-32 lg:h-40 text-center'
									style={{ width: '160px', height: '160px' }}
								/>
							</Link>
						</div>
					</div>
					<div className='flex flex-col items-center mt-16'>
						<span className='text-black font-bold tracking-tight text-base sm:text-lg text-center'>
							Brand Sponsorship
						</span>
						<div className='flex flex-wrap items-center justify-center gap-x-4 2xl:gap-x-8 gap-y-2'>
							<Image
								src={BumiLangit}
								alt='Bumi Langit Screenplay'
								className='h-32 lg:h-40'
								style={{ width: '112px', height: '112px' }}
							/>
							<Image
								src={Disney}
								alt='Disney'
								className='h-32 lg:h-40'
								style={{ width: '112px', height: '112px' }}
							/>
							<Image
								src={Dofala}
								alt='Dofala'
								className='h-32 lg:h-40'
								style={{ width: '112px', height: '112px' }}
							/>
							<Image
								src={BumiLangit}
								alt='Bumi Langit Screenplay'
								className='h-32 lg:h-40'
								style={{ width: '112px', height: '112px' }}
							/>
							<Image
								src={Disney}
								alt='Disney'
								className='h-32 lg:h-40'
								style={{ width: '112px', height: '112px' }}
							/>
							<Image
								src={Dofala}
								alt='Dofala'
								className='h-32 lg:h-40'
								style={{ width: '112px', height: '112px' }}
							/>
							<Image
								src={BumiLangit}
								alt='Bumi Langit Screenplay'
								className='h-32 lg:h-40'
								style={{ width: '112px', height: '112px' }}
							/>
							<Image
								src={Disney}
								alt='Disney'
								className='h-32 lg:h-40'
								style={{ width: '112px', height: '112px' }}
							/>
							<Image
								src={Jumpstart}
								alt='Jumpstart'
								className='h-32 lg:h-40'
								style={{ width: '112px', height: '112px' }}
							/>
						</div>
					</div>
					<div className='mt-16 lg:mt-24'>
						<div className='text-black font-bold tracking-tight text-base sm:text-lg text-center mb-4 lg:mb-6'>
							Media Partners
						</div>
						<MediaPartners />
					</div>
				</div>
			</main>
		</>
	);
}
