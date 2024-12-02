import React from 'react';
import whatsappbtnhero from '../../assets/icons/whatsapp-btn-hero.svg';
import WhatsAppButton from '../../components/whatsapp.jsx';
import Footer from '../footer';
import Profile from '../profile';
import CV from '../cv';

export default function AboutMe() {
	return (
		<div className="font-jeko">
			<div className=" ">
				<div className="lg:bg-[url('/src/assets/images/about-me-page.png')] bg-[url('/src/assets/images/about-me-mobile.png')] bg-cover bg-center fixed top-0 left-0 w-full lg:h-screen h-[80vh]   flex items-center justify-center">
					<div className="flex flex-col items-center text-center w-full pt-[100px] lg:px-0 px-[24px]">
						<p className="lg:text-[24px] text-[16px] font-extrabold text-[#ffff]">
							Hi, I'm Ahmad Hussein Habib
						</p>

						<p className="lg:text-[64px] text-[32px] text-[#ffff] font-extrabold lg:leading-[74px] leading-[42px] lg:pt-[24px] pt-[16px] lg:w-[60%]">
							A Product Designer and Junior Frontend Engineer.
						</p>
						<p className="text-[16px] leading-[24px] text-[#ffff] pt-[24px] font-medium">
							Transforming Ideas into Exceptional Digital Experiences by 🎨
							Designing Dreams and Coding Realities 💻
						</p>

						<div className="pt-[24px] hidden lg:block">
							<a>
								<div className="rounded-md cursor-pointer bg-[#FE5A34] border-[1px] border-[#FE5A34] p-1 h-[48px] w-full text-[14px] text-[#ffffff] flex items-center  px-2 ">
									<img
										src={whatsappbtnhero}
										alt=""
										className="flex justify-center items-center ml-[5px]"
									/>
									<WhatsAppButton />
								</div>
							</a>
						</div>
						<div className="lg:hidden flex justify-center mt-auto py-4 w-full gap-[16px]   px-[24px]">
							<a className="pt-[16px] w-[40%]">
								<div className="rounded-md cursor-pointer bg-[#FE5A34] border-[1px] border-[#FE5A34] p-1 h-[48px] w-full text-[14px] text-[#ffffff] flex items-center ">
									<img
										src={whatsappbtnhero}
										alt=""
										className="flex justify-center items-center ml-[5px] "
									/>
									<WhatsAppButton />
								</div>
							</a>
							<div className="pt-[16px] w-[60%] ">
								<button
									className="rounded-md cursor-pointer bg-[#ffffff] border-[1px] border-[#FE5A34] p-1 h-[48px] w-full text-[14px] text-[#FE5A34] flex items-center justify-center"
									onClick={() =>
										window.open('/ahmadtechs-Resume.pdf', '_blank')
									}
								>
									Download Resume
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="relative lg:mt-[100px] mt-[80vh]  lg:pt-[100vh] ">
				<Profile />
				<CV />
				<Footer />
			</div>
		</div>
	);
}
