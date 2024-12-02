import React, { useState, useEffect } from 'react';
import whatsappbtnhero from '../assets/icons/whatsapp-btn-hero.svg';
import WhatsAppButton from './whatsapp.jsx';
import whatsappiconhero from '../assets/icons/whatsapp-icon-hero.svg';
import linkediniconhero from '../assets/icons/linkedin-icon-hero.svg';
import mailiconhero from '../assets/icons/mail-icon-hero.svg';

export default function Footer() {
	return (
		<div>
			<div className="bg-[#FFEFEB] font-jeko lg:h-[378px] h-[326px] px-[24px] flex flex-col justify-center items-center">
				<p className="lg:block hidden text-[40px] font-extrabold text-center">
					I'm currently available for remote <br /> Product (UI/UX) Design gigs
					✌️
				</p>
				<p className="lg:hidden block text-[24px] font-extrabold text-center">
					I'm currently available for remote Product (UI/UX) Design gigs ✌️
				</p>
				<a
					href="#"
					className="w-full flex justify-center mt-[24px]"
				>
					<button className="rounded-md cursor-pointer bg-[#FE5A34] border-[1px] border-[#FE5A34] p-1 h-[48px] text-[14px] text-[#ffffff] flex items-center">
						<img
							src={whatsappbtnhero}
							alt=""
							className="flex justify-center items-center ml-[10px]"
						/>
						<WhatsAppButton />{' '}
						<span className="ml-1 pr-2  text-[14px] font-extrabold">
							Bussiness
						</span>
					</button>
				</a>
			</div>
			<div className="flex border-t-[1px] border-[#D1D1D6] bg-[#ffff] px-[80px]  py-4">
				<div className="flex lg:flex-row flex-col gap-4 justify-between w-full">
					<div className="flex gap-10">
						<div className="flex lg:items-center gap-2">
							<img
								src={whatsappiconhero}
								alt=""
							/>
							<p className="text-[14px] font-medium ">WhatsApp</p>
						</div>
						<div className="flex lg:items-center gap-2">
							<img
								src={linkediniconhero}
								alt=""
							/>
							<p className="text-[14px] font-medium ">Linkedin</p>
						</div>
					</div>
					<div>
						<div className="flex lg:items-center gap-2">
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
		</div>
	);
}
