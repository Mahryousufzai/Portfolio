import React from 'react';
import Image from 'next/image';

const Hero = () => {
	return (
		<div className="flex sm:flex-row flex-col sm:justify-between lg:mx-32 md:mx-20 sm:h-screen py-10 sm:mt-0 mt-10 overflow-hidden">
		
			<div>
				<Image
					src={'/main.png'}
					alt="mainimage"
					width={100}
					height={100}
					className="sm:w-[250px] w-[60%] h-fit mx-auto"
				/>
			</div>

			<div>
				<div>
					<div className="sm:text-[84px] sm:px-0 px-5 tracking-tight font-bold text-[18vw]">
						<p>Hello,</p>
						<p data-aos="fade-down-right">I&apos;m</p>
						<p data-aos="fade-down-left">Mehar Ali</p>
					</div>
				</div>
			</div>
		</div>
	);
};


export default Hero;
