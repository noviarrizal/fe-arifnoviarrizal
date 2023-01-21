import Image from 'next/image';
import MainStage1 from '../img/rundown/main-stage-rundown-1.webp';
import MainStage2 from '../img/rundown/main-stage-rundown-2.webp';
import SandBox1 from '../img/rundown/sandbox-rundown-1.webp';
import SandBox2 from '../img/rundown/sandbox-rundown-2.webp';
import WorkshopRundown from '../img/rundown/workshop-rundown.webp';
import PortfolioRundown1 from '../img/rundown/portfolio-review-rundown-1.webp';
import PortfolioRundown2 from '../img/rundown/portfolio-review-rundown-2.webp';

export default function Rundown() {
	return (
		<>
			<div id='rundown' className='py-16 lg:py-24 bg-slate-900 pt-36'>
				<h2 className='font-clashDisplay font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center text-white'>
					Rundown
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-x-8 gap-y-16 mt-16 ml-20 mr-20'>
					<div className='flex flex-col items-center text-center gap-y-4'>
						<h6 className='font-bold tracking-tight text-white text-lg'>
							Main Stage Rundown - Day 1
						</h6>
						<div className='material-placeholder'>
							<Image
								alt='Main Stage Rundown - Day 1'
								src={MainStage1}
								className='w-full materialboxed rounded-lg'
							/>
						</div>
					</div>
					<div className='flex flex-col items-center text-center gap-y-4'>
						<h6 className='font-bold tracking-tight text-white text-lg'>
							Main Stage Rundown - Day 2
						</h6>
						<div className='material-placeholder'>
							<Image
								alt='Main Stage Rundown - Day 2'
								src={MainStage2}
								className='w-full materialboxed rounded-lg'
							/>
						</div>
					</div>
					<div className='flex flex-col items-center text-center gap-y-4'>
						<h6 className='font-bold tracking-tight text-white text-lg'>
							Sandbox Rundown - Day 1
						</h6>
						<div className='material-placeholder'>
							<Image
								alt='Sandbox Rundown - Day 1'
								src={SandBox1}
								className='w-full materialboxed rounded-lg'
							/>
						</div>
					</div>
					<div className='flex flex-col items-center text-center gap-y-4'>
						<h6 className='font-bold tracking-tight text-white text-lg'>
							Sandbox Rundown - Day 2
						</h6>
						<div className='material-placeholder'>
							<Image
								alt='Sandbox Rundown - Day 2'
								src={SandBox2}
								className='w-full materialboxed rounded-lg'
							/>
						</div>
					</div>
					<div className='flex flex-col items-center text-center gap-y-4'>
						<h6 className='font-bold tracking-tight text-white text-lg'>
							Workshop Rundown - Day 1 & 2
						</h6>
						<div className='material-placeholder'>
							<Image
								alt='Workshop Rundown - Day 1 & 2'
								src={WorkshopRundown}
								className='w-full materialboxed rounded-lg'
							/>
						</div>
					</div>
					<div className='flex flex-col items-center text-center gap-y-4'>
						<h6 className='font-bold tracking-tight text-white text-lg'>
							Portfolio Review Rundown - Day 1
						</h6>
						<div className='material-placeholder'>
							<Image
								alt='Portfolio Review Rundown - Day 1'
								src={PortfolioRundown1}
								className='w-full materialboxed rounded-lg'
							/>
						</div>
					</div>
					<div className='flex flex-col items-center text-center gap-y-4'>
						<h6 className='font-bold tracking-tight text-white text-lg'>
							Portfolio Review Rundown - Day 2
						</h6>
						<div className='material-placeholder'>
							<Image
								alt='Portfolio Review Rundown - Day 2'
								src={PortfolioRundown2}
								className='w-full materialboxed rounded-lg'
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
