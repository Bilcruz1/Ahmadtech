import React from 'react';
import husseinabout from '../assets/images/hussein-about.png';

export default function Profile() {
	return (
		<div>
			<div className="flex lg:flex-row flex-col gap-[48px] lg:gap-0 justify-between w-full bg-[#ffff] lg:px-[12%] px-[24px] py-[80px]">
				<div className="flex justify-center items-center lg:w-[40%] w-full">
					<p className="lg:text-[24px] text-[16px] lg:leading-[34px] leading-[26px]">
						I am a Product Designer with over 6 years of experience specializing
						in UX/UI design, brand design, and junior frontend development. With
						a BSc in Computer Science, I have had the privilege of collaborating
						with high-potential clients and dynamic teams to solve business
						challenges and create solutions that align with the demands of the
						digital world. My passion lies in crafting user-centric designs that
						are both functional and visually compelling, bridging the gap
						between design and technology. 🙋‍♂️
					</p>
				</div>
				<div className="lg:w-[40%] w-full lg:h-[614px] h-[490px]">
					<img
						src={husseinabout}
						alt=""
						className="h-full object-contain"
					/>
				</div>
			</div>
		</div>
	);
}
