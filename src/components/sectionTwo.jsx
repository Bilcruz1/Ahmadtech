import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';

// Example image imports (replace with actual paths)
import project1Img1 from '../assets/images/project1-1.png';
import project1Img2 from '../assets/images/project1-2.png';
import project2Img1 from '../assets/images/project2-1.png';
import project2Img2 from '../assets/images/project2-2.png';
import project3Img1 from '../assets/images/project3-1.png';
import project3Img2 from '../assets/images/project3-2.png';
import project4Img1 from '../assets/images/project4-1.png';
import project4Img2 from '../assets/images/project4-2.png';

const projects = [
	{
		id: 1,
		title: 'Reduced redundant communication by 15%.',
		description:
			"I enhanced key aspects of the design process for Shifl's customer portal, transforming various supply chain services into a seamless digital platform. This shift simplified complex offline interactions, significantly reducing redundant communication and errors.The improvements were achieved through close collaboration with stakeholders",
		tag: 'SaaS Product',
		backgroundColor: '#FFEFEB',
		images: [project1Img1, project1Img2],
	},
	{
		id: 2,
		title: 'Edusaf has improved efficiency by over 85%',
		description:
			"A comprehensive school management system designed to streamline operations for students, parents, and teachers alike. By enabling students to track their school activities effectively, parents to monitor their children's performance with ease, and teachers to carry out their tasks effortlessly.",
		tag: 'SaaS Product',
		backgroundColor: '#FFF8E6',
		images: [project2Img1, project2Img2],
	},
	{
		id: 3,
		title: 'Legal Connect – Simplifying Legal Support',
		description:
			'Legal Connect is an MVP solution designed to seamlessly connect individuals seeking legal assistance with qualified legal professionals. The app simplifies access to legal support, making it easier for users to address their legal issues efficiently. Whether it’s finding the right lawyer, seeking quick advice, or managing legal consultations, Legal Connect ensures convenience and accessibility at every step.',
		tag: 'SaaS - Service Aggregator',
		backgroundColor: '#FFEFEB',
		images: [project3Img1, project3Img2],
	},
	{
		id: 4,
		title: 'Legal Connect – Simplifying Legal Support',
		description:
			'Ransepay is a financial services web application designed to make international transactions effortless. It enables users to send and receive money across different countries and currencies with ease.',
		tag: 'FinTech',
		backgroundColor: '#FFF8E6',
		images: [project4Img1, project4Img2],
	},
];

export default function SectionTwo() {
	const [activeSlide, setActiveSlide] = useState(1);
	return (
		<div className="mt-[100vh] bg-[#ffff]  lg:py-[80px] py-[40px]">
			<div className="lg:px-[80px] px-[24px]">
				<h1 className="lg:text-[40px]  text-[32px]  bg-[url('/src/assets/icons/project-icon.svg')] bg-no-repeat pt-[10px] font-extrabold">
					Featured Projects
				</h1>
				<p className="text-[16px] font-medium leading-[24px] pt-[16px] lg:w-[50%] w-full">
					I've had the privilege of collaborating with incredible startups, team
					and businesses on exciting and impactful projects. Here are a few
					recent highlights I'd love to share with you.
				</p>
			</div>

			{/* For Desktop Screens */}
			<div className="hidden lg:block lg:px-[80px] px-[24px] my-20">
				{projects.map(project => (
					<div
						key={project.id}
						className=" rounded-lg p-10 mb-20 "
						style={{ backgroundColor: project.backgroundColor }}
					>
						<div className="flex justify-between items-start">
							<h2 className="text-[32px] font-extrabold text-[#000000]">
								{project.title}
							</h2>
							<span className="bg-[#EBEDF0] text-[#000000] text-[20px] font-extrabold px-[24px] py-[12px] rounded-full">
								{project.tag}
							</span>
						</div>
						<p className="mt-4 text-[#000000] font-medium text-[16px] lg:w-[55%] leading-[24px]">
							{project.description}
						</p>
						<div className="grid grid-cols-2 gap-10 mt-12">
							{project.images.map((image, index) => (
								<div
									key={index}
									className="overflow-hidden rounded-lg  hover:shadow-lg transition-shadow duration-300"
								>
									<img
										src={image}
										alt={`Project ${project.id} - Image ${index + 1}`}
										className="w-full h-[579px] bg-[#ffff] object-cover transform hover:scale-110   transition-transform duration-300"
									/>
								</div>
							))}
						</div>
					</div>
				))}
			</div>

			{/* For Mobile Screens */}
			<div className="block lg:hidden px-[24px]">
				<div className="flex justify-between items-center mt-4">
					<span className="text-sm font-extrabold text-[#000000]">
						Showing {activeSlide} of {projects.length}
					</span>
					<div>
						<button className="prev-btn px-2 py-1  hover:text-[#ffff] hover:bg-[#FE5A34] bg-[#ffff] text-[#FE5A34] rounded-md">
							{'<'}
						</button>
						<button className="next-btn px-2 py-1  hover:text-[#ffff] hover:bg-[#FE5A34] bg-[#ffff] text-[#FE5A34] rounded-md">
							{'>'}
						</button>
					</div>
				</div>
				<Swiper
					modules={[Pagination, Navigation]}
					spaceBetween={20}
					slidesPerView={1}
					navigation={{
						prevEl: '.prev-btn',
						nextEl: '.next-btn',
					}}
					onSlideChange={swiper => setActiveSlide(swiper.activeIndex + 1)}
				>
					{projects.map(project => (
						<SwiperSlide key={project.id}>
							<div
								className=" rounded-lg mt-6 p-6  "
								style={{ backgroundColor: project.backgroundColor }}
							>
								<div className="flex flex-col justify-between items-start">
									<h2 className="text-xl font-extrabold text-gray-800">
										{project.title}
									</h2>
									<span className="bg-[#EBEDF0] text-[#000000] text-[16px] px-4 py-2 mt-4 rounded-full">
										{project.tag}
									</span>
								</div>
								<p className="mt-4 text-gray-600 leading-relaxed">
									{project.description}
								</p>
								<div className="overflow-hidden rounded-lg hover:shadow-lg hover:transition-shadow duration-300 mt-4">
									<img
										src={project.images[0]} // Display only the first image
										alt={`Project ${project.id}`}
										className="w-full h-[296px]  object-cover  transform hover:scale-105 transition-transform duration-300"
									/>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}
