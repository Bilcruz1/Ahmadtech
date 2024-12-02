import React from 'react';
import getinTouch from '../assets/images/getinTouch.png';
import { Link } from 'react-scroll';
import mail from '../assets/icons/mail.svg';
import phone from '../assets/icons/phone.svg';
import location from '../assets/icons/location.svg';

import facebook_logo from '../assets/icons/fb.svg';
import linkedin_logo from '../assets/icons/link.svg';
import instagram_logo from '../assets/icons/insta.svg';
import line from '../assets/icons/line.jpg';
import ExploreSlides from './slides/exploreslides';

export default function Explore() {
	return (
		<>
			<div className=" relative bg-[url('/src/assets/images/explore-image.png')] bg-cover lg:mt-[140px] mt-[40px] ">
				<div className="absolute inset-0 bg-black/50"></div>

				<div className="relative z-10">
					<h6 className="text-center text-[#FF9500] lg:font-light font-medium lg:text-[20px] text-[16px] leading-[36px] lg:pt-[120px] pt-[40px]  ">
						Check out our Rooms
					</h6>
					<p className="text-center font-semibold lg:text-[36px] text-[22px] text-[#ffffff] lg:px-[356px] px-[16px]">
						Explore Our Elegant Apartments Where Luxury Meets Comfort
					</p>
					<ExploreSlides />
				</div>
			</div>
		</>
	);
}
