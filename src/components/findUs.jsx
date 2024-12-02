import React from 'react';
import direction from '../assets/icons/direction-icon.svg';
import MapComponent from './mapComponent';

export default function FindUs() {
	return (
		<div>
			<div className="lg:mb-[60px] mb-[40px]">
				<h6 className="text-center bg-[#FFFEFA] text-[#FF9500] font-light lg:text-[20px] text-[16px] leading-[36px] lg:pt-[80px] pt-[40px]  ">
					Find us with Ease
				</h6>
				<p className="text-center font-semibold lg:text-[36px] text-[20px] text-[#292929] lg:px-[459px] px-[16px]">
					Conveniently Located Just 10 Minutes from the Airport
				</p>

				<div>
					<div className="w-[100%] h-[520px] mt-[40px]">
						<iframe
							width="100%"
							height="100%"
							frameBorder="0"
							scrolling="no"
							marginHeight="0"
							marginWidth="0"
							src="https://maps.google.com/maps?q=Johnwood%20Hotel%20by%20Bolton,Plot%20978,979,Beside%20Magistrate%20Court,Kuchiyako,Kuje,FCT-Abuja&output=embed&zoom=disable&scrollwheel=0"
							allowFullScreen
						></iframe>
					</div>
				</div>
			</div>
		</div>
	);
}
