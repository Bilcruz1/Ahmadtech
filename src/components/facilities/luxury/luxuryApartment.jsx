import React, { useState } from 'react';
import Delux from './luxuryslides/delux';
import PentHouse from './luxuryslides/pentHouse';
import Apartments from './luxuryslides/apartments';
export default function LuxuryApartment() {
	const [activeTab, setActiveTab] = useState(0);
	const [currentSlide, setCurrentSlide] = useState(1); // Lifted state

	const tabs = [
		{
			id: 0,
			label: 'Delux',
			component: (
				<Delux
					currentSlide={currentSlide}
					setCurrentSlide={setCurrentSlide}
				/>
			),
		},
		{
			id: 1,
			label: 'Penthouse',
			component: (
				<PentHouse
					currentSlide={currentSlide}
					setCurrentSlide={setCurrentSlide}
				/>
			),
		},
		{
			id: 2,
			label: 'Apartments',
			component: (
				<Apartments
					currentSlide={currentSlide}
					setCurrentSlide={setCurrentSlide}
				/>
			),
		},
	];

	return (
		<>
			<div className="relative bg-[url('/src/assets/slides/bg-luxury.png')] bg-cover lg:px-[120px] lg:pt-[120px] pt-[23px] lg:pb-[120px] lg:mt-[120px] mt-[80px]">
				{/* Dim overlay using Tailwind utility classes */}
				<div className="absolute inset-0 bg-black/50"></div>

				{/* Content wrapper to position content above the overlay */}
				<div className="relative z-10">
					<h6 className="text-[#EFBD4C] lg:text-left text-center  text-[16px] font-medium">
						Luxury Apartments
					</h6>

					<div className="flex lg:flex-row flex-col justify-between text-center items-center pt-[8px]">
						<p className="text-white lg:text-[36px] text-[24px] font-semibold">
							Luxury Living, Redefined
						</p>

						{/* Display the current slide number */}
						<div className="text-white text-[18px] mt-4">
							<span className="font-light">Showing room </span>
							<span className="font-bold">{currentSlide}</span>
							<span className="font-light"> of </span>
							<span className="font-bold">5</span>
						</div>
					</div>

					<div className="">
						{/* Tab Navigation */}
						<div className="border-2 mt-[48px] rounded-t-2xl lg:border-black lg:border-b-0  flex justify-between gap-[8px]">
							{tabs.map(tab => (
								<div
									key={tab.id}
									onClick={() => setActiveTab(tab.id)}
									className={`flex w-1/3 items-center justify-center lg:p-[24px] p-[8px] shadow ${
										activeTab === tab.id
											? 'text-[#EFBD4C] font-bold'
											: 'shadow-sm text-[#ffff]'
									}`}
									style={{
										cursor: 'pointer',
										borderBottom:
											activeTab === tab.id ? '3px solid #EFBD4C' : '',
									}}
								>
									<div className="text-[14px] lg:text-[14px]">{tab.label}</div>
								</div>
							))}
						</div>

						{/* Tab Content */}
						<div className="p-[1px] rounded-b-2xl bg-gradient-to-b from-white to-[#EFBD4C]">
							<div className="">{tabs[activeTab].component}</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
