import Image from 'next/image';
import Link from 'next/link';
import WristbandTicket from '../img/icc/icc-wristband-ticket.webp';

export default function Wristband() {
	return (
		<>
			<main className='py-10 lg:py-16 bg-slate-900 pl-10'>
				<div className='container xl:max-w-5xl'>
					<div className='flex flex-col justify-items-center items-center text-center'>
						<Image
							alt='ICC Wristband Ticket'
							src={WristbandTicket}
							style={{ width: '1000px', height: '371px' }}
							loading='lazy'
							className='w-full pointer-events-none justify-items-center items-center ml-32'
						/>
						<h2 className='font-clashDisplay font-bold flex flex-col items-center text-center relative isolate mt-8 ml-32'>
							<span class='z-20 text-5xl sm:text-6xl md:text-7xl xl:text-8xl drop-shadow-[0_30px_10px_rgba(15,23,42,0.24)] sm:drop-shadow-[0_40px_20px_rgba(15,23,42,0.24)] lg:drop-shadow-[0_60px_20px_rgba(15,23,42,0.24)] !leading-none text-white'>
								Grab your
							</span>{' '}
							<span class='z-10 text-5xl sm:text-6xl md:text-7xl xl:text-8xl !leading-none text-white'>
								ticket now
							</span>
						</h2>
						<Link
							href='#ticket'
							className='bg-[#ff0099] from-primary to-primary-darken text-white rounded-md px-5 py-3 lg:px-6 lg:py-4 hover:scale-105 transition-transform duration-300 font-bold tracking-tight text-sm sm:text-base ml-32'
						>
							<span className='font-jakarta'>Get Your Ticket</span>
						</Link>
					</div>
				</div>
			</main>
		</>
	);
}
