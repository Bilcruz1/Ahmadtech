import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

import UnderstandIcon from '../assets/icons/understanding-icon.svg';
import DesignIcon from '../assets/icons/design-icon.svg';
import CollaborateIcon from '../assets/icons/refine-icon.svg';
import DeliverIcon from '../assets/icons/deliver-icon.svg';

const tabs = [
	{
		id: 1,
		title: 'Understand & Strategize',
		content:
			'Every great product begins with a clear understanding of the problem. I dive deep into the project’s goals, user needs, and stakeholder requirements through thorough research and discovery. By analyzing user pain points, mapping user journeys, and defining core features, I lay the strategic foundation for a product that aligns with both user expectations and business objectives.',
		icon: UnderstandIcon, // Imported image
	},
	{
		id: 2,
		title: 'Design & Prototype',
		content:
			'With a solid strategy in place, I translate ideas into tangible designs. Starting with wireframes, I outline the product’s structure and flow, gradually refining them into high-fidelity prototypes that showcase the look, feel, and interactivity. My focus is on creating user-centric designs that are intuitive, visually appealing, and accessible across devices.',
		icon: DesignIcon,
	},
	{
		id: 3,
		title: 'Collaborate & Refine',
		content:
			'Design is a collaborative effort. I work closely with stakeholders, developers, and team members to ensure the designs are aligned with the vision and feasible for implementation. Through usability testing and feedback loops, I refine the designs, addressing pain points and optimizing for the best user experience.',
		icon: CollaborateIcon,
	},
	{
		id: 4,
		title: 'Deliver & Support',
		content:
			'Once the designs are finalized, I prepare detailed handover documentation, including design specifications, assets, and guidelines for the development team. I remain actively involved during implementation to address any questions, ensuring the final product stays true to the design vision and performs seamlessly in the real world.',
		icon: DeliverIcon,
	},
];

export default function DesignProcess() {
	const [activeTab, setActiveTab] = useState(0);

	// Automatically change tabs every 2 minutes
	useEffect(() => {
		const interval = setInterval(() => {
			setActiveTab(prevTab => (prevTab + 1) % tabs.length);
		}, 30000);

		return () => clearInterval(interval);
	}, []);

	// Handle swipe gestures
	const swipeHandlers = useSwipeable({
		onSwipedLeft: () => setActiveTab(prev => (prev + 1) % tabs.length),
		onSwipedRight: () =>
			setActiveTab(prev => (prev - 1 + tabs.length) % tabs.length),
		preventDefaultTouchmoveEvent: true,
		trackTouch: true,
	});

	// Handle tab click
	const handleTabClick = index => {
		setActiveTab(index);
	};

	return (
		<div className="lg:px-[80px] px-[24px] bg-[#ffff] lg:pt-[80px] pt-[40px] pb-[80px] ">
			<h1 className="lg:text-[40px] text-[32px] bg-[url('/src/assets/icons/project-icon.svg')] bg-no-repeat pt-[10px]  font-extrabold">
				My Design Process
			</h1>
			<p className="text-[16px] font-medium leading-[24px] pt-[16px] lg:w-[50%] w-full">
				Crafting intuitive and impactful user experiences requires a thoughtful
				approach. Here’s how I bring ideas to life:
			</p>
			<div className=" lg:px-[90px] lg:pt-[80px] pt-[48px]">
				{/* Desktop View */}
				<div className="hidden lg:flex gap-[10%] bg-[#ffff] ">
					{/* Sidebar for Tabs */}
					<div className="flex flex-col gap-[16px]">
						{tabs.map((tab, index) => (
							<div
								key={tab.id}
								onClick={() => handleTabClick(index)}
								className={`px-[40px] py-[32px] cursor-pointer shadow-md rounded-md  transition-all duration-300 ${
									activeTab === index
										? 'bg-[#FE5A34]  text-white font-bold'
										: ' border-[1px] border-gray-200 text-gray-800'
								}`}
							>
								{`${tab.id.toString().padStart(2, '0')}. ${tab.title}`}
							</div>
						))}
					</div>

					{/* Content Area */}
					<div className="flex-1 ">
						<div
							key={tabs[activeTab].id}
							className=" transition-transform transform duration-300 ease-in-out opacity-100"
						>
							<div className=" ">
								<img
									src={tabs[activeTab].icon}
									alt={`${tabs[activeTab].title} icon`}
									className="w-[80px] h-[80px]"
								/>
								<h2 className="text-[36px] font-extrabold text-[#FE5A34] pt-[16px]">
									{tabs[activeTab].title}
								</h2>
							</div>

							<p className="mt-[16px] text-[#000000] text-[20px] font-medium leading-[34px]">
								{tabs[activeTab].content}
							</p>
						</div>
					</div>
				</div>

				{/* Mobile View */}
				<div
					{...swipeHandlers}
					className="lg:hidden relative bg-[#ffff] p-[16px] border shadow-lg rounded-lg "
				>
					<div
						key={tabs[activeTab].id}
						className="transition-transform transform duration-300 ease-in-out opacity-100 scale-100"
					>
						<div className="flex flex-col gap-4">
							<img
								src={tabs[activeTab].icon}
								alt={`${tabs[activeTab].title} icon`}
								className="w-[58px] h-[58px]"
							/>
							<h2 className="text-[24px] text-[#FE5A34] font-extrabold w-[50%] ">
								{tabs[activeTab].title}
							</h2>
						</div>
						<p className="mt-[16px] text-[#000000] text-[16px] leading-[26px]">
							{tabs[activeTab].content}
						</p>
					</div>
				</div>
				{/* Slide Indicators */}
				<div className="lg:hidden flex justify-center gap-2 mt-[48px] ">
					{tabs.map((_, index) => (
						<button
							key={index}
							onClick={() => handleTabClick(index)}
							className={`w-3 h-3 rounded-full ${
								activeTab === index
									? 'bg-[#FE5A34]'
									: 'bg-gray-300 hover:bg-gray-400'
							}`}
						></button>
					))}
				</div>
			</div>
		</div>
	);
}
