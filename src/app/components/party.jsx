import Image from 'next/image';
import Link from 'next/link';
import SeeParty from '../img/icc/see-you-at-the-party.webp';
import Chibi from '../img/chibi-1.svg';

export default function Party() {
	return (
		<>
			<main className='py-10 lg:py-16 bg-slate-900 pl-10'>
				<div className='container xl:max-w-6xl'>
					<div className='flex flex-col items-center'>
						<div className='relative'>
							<div className='relative z-20 rounded-lg overflow-hidden'>
								<div className='w-full h-2 ml-10 bg-gradient-to-r from-[#00835c] via-[#8ed6fb] to-[#d32e9d] animate-hue-rotate-slow'></div>
								<Image
									alt='see you at the party'
									src={SeeParty}
									className='w-full pointer-events-none ml-10 rounded-l-lg'
									loading='lazy'
									style={{ width: '1500', height: '960' }}
								/>
							</div>
							<Image
								src={Chibi}
								alt={Chibi}
								className='z-10 absolute w-32 sm:w-40 lg:w-48 top-0 right-0 -translate-y-1/2 hover:-translate-y-full transition-transform duration-500 ease-in-out'
							/>
							<div className='relative z-30 flex flex-col items-center -mt-[5rem] md:-mt-[6rem] lg:-mt-[7rem]'>
								<h2 className='font-clashDisplay font-bold flex flex-col items-center text-center relative isolate mt-8'>
									<span class='z-20 text-5xl sm:text-6xl md:text-7xl xl:text-8xl drop-shadow-[0_30px_10px_rgba(15,23,42,0.24)] sm:drop-shadow-[0_40px_20px_rgba(15,23,42,0.24)] lg:drop-shadow-[0_60px_20px_rgba(15,23,42,0.24)] !leading-none text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-white to-gray-300'>
										See you
									</span>
									<span class='z-10 text-5xl sm:text-6xl md:text-7xl xl:text-8xl !leading-none text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-white to-gray-300'>
										at the party!
									</span>
								</h2>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
