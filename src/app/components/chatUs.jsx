import Image from 'next/image';
import Link from 'next/link';
import ChibiChat from '../img/chibi-chat.svg';

export default function ChatUs() {
	return (
		<>
			<Link
				href='#'
				target='_blank'
				className='fixed right-4 md:right-8 2xl:right-16 bottom-8 z-[997] bg-slate-1000/60 text-white backdrop-blur-xl border border-white/20 rounded-full p-4 shadow-lg flex items-center gap-x-2 hover:bg-white hover:text-black transition-colors duration-300 ease-in-out group [@supports_not_(backdrop-filter:blur(0px))]:bg-white/100 [@supports_not_(backdrop-filter:blur(0px))]:text-black hidden lg:flex'
			>
				<Image
					alt='chibi chat'
					src={ChibiChat}
					className='h-10 pointer-events-none group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300 ease-in-out'
				/>
				<span className='font-bold tracking-tight'>Chat us!</span>
			</Link>
		</>
	);
}
