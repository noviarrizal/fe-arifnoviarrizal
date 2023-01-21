import Image from 'next/image';
import Link from 'next/link';
import AbstractShape2 from '../img/abstract-shape-2.svg';
import UnleashChibi from '../img/unleash-chibi.webp';

export default function DateAndPlace() {
	return (
		<>
			<main className='bg-white'>
				<div className='pt-20 pb-20 lg:pt-32 lg:pb-32 bg-slate-900 rounded-br-[60px] lg:rounded-br-[120px]'>
					<div className='container relative isolate'>
						<div className='absolute z-[5] w-[720px] top-[20%] left-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-y-8 lg:gap-y-12'>
							<div className='relative isolate w-full'>
								<div className='relative w-full h-4 lg:h-6 rounded-full bg-gradient-to-r from-[#00835c] via-[#8ed6fb] to-[#d32e9d] -rotate-12'></div>
								<div className='absolute inset-0 z-[-1] w-full h-4 lg:h-6 rounded-full bg-gradient-to-r from-[#00835c] via-[#8ed6fb] to-[#d32e9d] -rotate-12 blur-md lg:blur-lg'></div>
							</div>
							<div className='relative isolate w-1/2'>
								<div className='relative w-full h-4 lg:h-6 rounded-full bg-gradient-to-r from-[#00835c] via-[#8ed6fb] to-[#d32e9d] -rotate-12'></div>
								<div className='absolute inset-0 z-[-1] w-full h-4 lg:h-6 rounded-full bg-gradient-to-r from-[#00835c] via-[#8ed6fb] to-[#d32e9d] -rotate-12 blur-md lg:blur-lg'></div>
							</div>
						</div>
						<div className='relative z-20 flex flex-col items-center justify-center text-center text-white pt-10 pb-28'>
							<div className='relative z-10'>
								<div className='relative -mt-24'>
									<div className='absolute z-0 bottom-0 left-0 -translate-x-[10%] w-full aspect-square bg-gradient-to-b from-orange-500 to-yellow-400 rounded-full blur-2xl opacity-20 hover:opacity-40 transition-opacity duration-300'></div>
									<div className='absolute z-0 top-0 left-4 -translate-x-[10%] w-full aspect-square bg-sky-300 rounded-full blur-2xl opacity-60 hover:opacity-100 transition-opacity duration-300'></div>
									<Image
										src={UnleashChibi}
										alt='unleash chibi'
										className='relative z-10 w-32 lg:w-40 pointer-events-none select-none animate-slow-bounce-1'
									/>
								</div>
							</div>
							<div className='relative z-20 flex flex-col items-center text-center -mt-6 mb-10'>
								<span className='text-5xl font-clashDisplay font-bold'>
									Oct 1-2, 2022
								</span>
								<span class='mt-4'>10 AM – 8 PM</span>
								<span class='mt-4 text-lg sm:text-xl font-clashDisplay font-bold'>
									Jakarta Convention Center
								</span>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
