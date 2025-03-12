import React, { useState, useEffect } from 'react';
import hussein from '../assets/images/hussein.png';
import husseinMobile from '../assets/images/hussein-mobile.png';
import whatsappbtnhero from '../assets/icons/whatsapp-btn-hero.svg';
import WhatsAppButton from './whatsapp.jsx';
import whatsappiconhero from '../assets/icons/whatsapp-icon-hero.svg';
import linkediniconhero from '../assets/icons/linkedin-icon-hero.svg';
import mailiconhero from '../assets/icons/mail-icon-hero.svg';

export default function HeroSection() {
	const [isFooterVisible, setIsFooterVisible] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setIsFooterVisible(false);
			} else {
				setIsFooterVisible(true);
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className="bg-cover bg-top bg-[#ffffff]  fixed top-0 left-0 w-full min-h-screen lg:z-[-1]">
			<div className="h-screen flex flex-col  lg:justify-center justify-between lg:gap-10 pt-[80px] lg:pt-[130px]">
				<div className="flex lg:flex-row flex-col-reverse lg:items-center lg:px-[80px] px-[24px]">
					<div className="lg:w-[55%] w-full flex flex-col lg:pt-0 pt-[28px] ">
						<p className="lg:text-[24px] text-[16px] font-extrabold text-[#000000]">
							Hi, I'm Ahmad Hussein Habib
						</p>
						<p className="lg:text-[64px] text-[32px] font-extrabold lg:leading-[74px] leading-[42px] pt-[16px]">
							A Product Designer and Junior Frontend Engineer.{' '}
						</p>
						<p className="text-[16px] leading-[24px] text-[#000000] pt-[16px] font-medium">
							Transforming Ideas into Exceptional Digital Experiences by 🎨
							Designing Dreams and Coding Realities 💻
						</p>
					</div>
					<div className="lg:w-[45%] w-full lg:flex hidden lg:justify-end">
						<img
							src={hussein}
							alt=""
							className="h-[450px]"
						/>
					</div>
					<div className="lg:hidden w-full flex justify-center">
						<img
							src={husseinMobile}
							alt=""
							className="w-full h-[380px] object-contain"
						/>
					</div>
				</div>

				<div className="lg:hidden flex justify-center mt-auto py-4  gap-[16px] lg:px-[80px] px-[24px] w-[95%]">
					<a
						href="#"
						className="pt-[16px] w-[40%]"
					>
						<button className="rounded-md cursor-pointer bg-[#FE5A34] border-[1px] border-[#FE5A34] py-[11px] px-[16px] gap-2 text-[14px] text-[#ffffff] flex items-center ">
							<img
								src={whatsappbtnhero}
								alt=""
								className="flex justify-center items-center"
							/>
							<WhatsAppButton />
						</button>
					</a>
					<a
						href="#"
						className="pt-[16px] w-[60%] "
						onClick={() => window.open('./ahmadtechs-Resume.pdf', '_blank')}
					>
						<button className="rounded-md cursor-pointer border-[1px] border-[#FE5A34] p-1 h-[48px] w-full text-[14px] text-[#FE5A34] flex items-center justify-center">
							Download Resume
						</button>
					</a>
				</div>

				{isFooterVisible && (
					<div className="lg:flex hidden border-t-[1px] border-[#D1D1D6] px-[80px]  py-4">
						<div className="flex gap-4 justify-between w-full">
							<div className="flex gap-10">
								<div className="flex items-center gap-2">
									<img
										src={whatsappiconhero}
										alt="whatsappiconhero"
									/>
									<p className="text-[14px] font-medium ">WhatsApp</p>
								</div>
								<div className="flex items-center gap-2">
									<img
										src={linkediniconhero}
										alt="linkediniconhero"
									/>
									<p className="text-[14px] font-medium ">Linkedin</p>
								</div>
							</div>
							<div>
								<div className="flex items-center gap-2">
									<img
										src={mailiconhero}
										alt=""
									/>
									<p className="text-[14px] font-medium ">
										husseinhabahmad@gmail.com
									</p>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
