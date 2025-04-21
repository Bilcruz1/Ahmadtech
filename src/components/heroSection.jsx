import React, { useState, useEffect } from 'react';
import hussein from '../assets/images/hussein.png';
import husseinMobile from '../assets/images/hussein.png';
import whatsappbtnhero from '../assets/icons/whatsapp-btn-hero.svg';
import WhatsAppButton from './whatsapp.jsx';
import whatsappiconhero from '../assets/icons/whatsapp-icon-hero.svg';
import linkediniconhero from '../assets/icons/linkedin-icon-hero.svg';
import mailiconhero from '../assets/icons/mail-icon-hero.svg';

export default function HeroSection() {
	const [isFooterVisible, setIsFooterVisible] = useState(true);
	const [zIndex, setZIndex] = useState(10); // Start with high z-index

	useEffect(() => {
		const handleScroll = () => {
			// Hide footer when scrolled down
			if (window.scrollY > 900) {
				setIsFooterVisible(false);
			} else {
				setIsFooterVisible(true);
			}

			// Change z-index when scrolled past a threshold
			if (window.scrollY > 100) {
				// Adjust this threshold as needed
				setZIndex(-1); // Move behind other content
			} else {
				setZIndex(10); // Stay on top initially
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const handleWhatsAppClick = e => {
		e.preventDefault();
		// Replace with your actual WhatsApp link or phone number
		window.open('https://wa.me/yourphonenumber', '_blank');
	};

	const handleLinkedinClick = e => {
		e.preventDefault();
		// Replace with your actual LinkedIn profile URL
		window.open('https://linkedin.com/in/yourusername', '_blank');
	};

	const handleEmailClick = e => {
		e.preventDefault();
		window.location.href = 'mailto:husseinhabahmad@gmail.com';
	};

	return (
		<div
			className="bg-[#FFFFFF] fixed top-0 left-0 w-full h-[calc(100vh-120px)] mt-[120px] flex flex-col"
			style={{ zIndex: zIndex }} // Apply dynamic z-index
		>
			{/* Content wrapper with grow and center alignment */}
			<div className="flex flex-col flex-grow justify-center">
				<div className="flex lg:flex-row flex-col-reverse lg:items-center lg:px-[80px] px-[24px]">
					{/* Text section - exactly 50% on desktop */}
					<div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left">
						<p className="lg:text-[24px] text-[16px] font-extrabold text-[#000000]">
							Hi, I'm Ahmad Hussein Habib
						</p>
						<p className="lg:text-[64px] text-[#000000] text-[32px] font-black lg:leading-[74px] leading-[42px] pt-[16px]">
							A Product Designer <br /> and Junior Frontend <br /> Engineer.
						</p>
						<p className="text-[16px] leading-[24px] text-[#000000] pt-[16px] font-medium">
							Transforming Ideas into Exceptional Digital Experiences by 🎨
							Designing Dreams and Coding Realities 💻
						</p>
						<div className="lg:block hidden w-[40%] mt-[16px]">
							<button
								onClick={handleWhatsAppClick}
								className="rounded-md z-10 border border-[#FE5A34] bg-[#FE5A34] py-[11px] px-[16px] gap-2 text-[14px] text-white flex items-center cursor-pointer"
							>
								<img
									src={whatsappbtnhero}
									alt="WhatsApp"
								/>
								<span>Let's Talk</span>
							</button>
						</div>
					</div>

					{/* Image section - exactly 50% on desktop with image at the end */}
					<div className="lg:w-1/2 lg:flex hidden items-center justify-end">
						<img
							src={hussein}
							alt="Ahmad Hussein Habib"
							className="h-[480px] w-[561px] rounded-2xl object-cover object-top"
						/>
					</div>

					{/* Mobile Image */}
					<div className="lg:hidden w-full flex justify-center">
						<img
							src={husseinMobile}
							alt="Ahmad Hussein Habib"
							className="w-full h-[380px] object-contain"
						/>
					</div>
				</div>

				{/* Mobile Buttons */}
				<div className="lg:hidden flex justify-center py-4 gap-[16px] lg:px-[80px] px-[24px] w-[95%]">
					<div className="w-[40%]">
						<button
							onClick={handleWhatsAppClick}
							className="rounded-md bg-[#FE5A34] border border-[#FE5A34] py-[11px] px-[16px] gap-2 text-[14px] text-white flex items-center w-full cursor-pointer"
						>
							<img
								src={whatsappbtnhero}
								alt="WhatsApp"
							/>
							<span>Let's Talk</span>
						</button>
					</div>
					<div className="w-[60%]">
						<button
							onClick={() => window.open('./ahmadtechs-Resume.pdf', '_blank')}
							className="rounded-md border border-[#FE5A34] p-1 h-[48px] w-full text-[14px] text-[#FE5A34] flex items-center justify-center cursor-pointer"
						>
							Download Resume
						</button>
					</div>
				</div>
			</div>

			{/* Footer - ALWAYS rendered but with opacity and height transitions */}
			<div
				className={`lg:flex hidden border-t border-[#D1D1D6] px-[80px] py-4 transition-all duration-300 ${
					isFooterVisible
						? 'opacity-100 max-h-20'
						: 'opacity-0 max-h-0 overflow-hidden border-transparent'
				}`}
			>
				<div className="flex justify-between w-full">
					<div className="flex gap-10">
						<div
							className="flex items-center gap-2 cursor-pointer"
							onClick={handleWhatsAppClick}
						>
							<img
								src={whatsappiconhero}
								alt="WhatsApp"
							/>
							<p className="text-[14px] font-medium">WhatsApp</p>
						</div>
						<div
							className="flex items-center gap-2 cursor-pointer"
							onClick={handleLinkedinClick}
						>
							<img
								src={linkediniconhero}
								alt="LinkedIn"
							/>
							<p className="text-[14px] font-medium">Linkedin</p>
						</div>
					</div>
					<div
						className="flex items-center gap-2 cursor-pointer"
						onClick={handleEmailClick}
					>
						<img
							src={mailiconhero}
							alt="Email icon"
						/>
						<p className="text-[14px] font-medium">husseinhabahmad@gmail.com</p>
					</div>
				</div>
			</div>
		</div>
	);
}
