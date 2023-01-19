import Link from 'next/link';

export default function Navbar() {
	return (
		<>
			<nav className='hidden absolute left-1/2 -translate-x-1/2 lg:flex lg:items-center gap-x-2'>
				<Link
					href='/'
					aria-current='page'
					className='nav-link flex nuxt-link-exact-active nuxt-link-active'
				>
					<span className='text-white text-sm font-jakarta'>Home</span>
					<span className='nav-link-active-indicator'></span>
				</Link>
				<Link href='#guests' className='nav-link flex'>
					<span className='text-white text-sm font-jakarta'>Guest Stars</span>
					<span className='nav-link-active-indicator'></span>
				</Link>
				<Link href='#brands' className='nav-link flex'>
					<span className='text-white text-sm font-jakarta'>Brands</span>
					<span className='nav-link-active-indicator'></span>
				</Link>
				<Link href='#contact' className='nav-link flex lg:hidden xl:flex'>
					<span className='text-white text-sm font-jakarta'>Contact</span>
					<span className='nav-link-active-indicator'></span>
				</Link>
				<Link
					href=''
					className='nav-link flex !items-end dropdown-trigger cursor-pointer select-none'
				>
					<span className='text-white text-sm font-jakarta'>More</span>
					<svg
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						className='fill-current h-4 ml-1'
						data-v-a218daf2=''
					>
						<path d='M11.9995 16.8001C11.2995 16.8001 10.5995 16.5301 10.0695 16.0001L3.54953 9.48014C3.25953 9.19014 3.25953 8.71014 3.54953 8.42014C3.83953 8.13014 4.31953 8.13014 4.60953 8.42014L11.1295 14.9401C11.6095 15.4201 12.3895 15.4201 12.8695 14.9401L19.3895 8.42014C19.6795 8.13014 20.1595 8.13014 20.4495 8.42014C20.7395 8.71014 20.7395 9.19014 20.4495 9.48014L13.9295 16.0001C13.3995 16.5301 12.6995 16.8001 11.9995 16.8001Z'></path>
					</svg>
				</Link>
			</nav>
		</>
	);
}
