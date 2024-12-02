import React, { useState } from 'react';
import LuxuryApartment from './luxury/luxuryApartment';
import Restaurant from './restaurant';
import ConferenceHall from './conferenceHall';
import Laundry from './laundry';

export default function FacilitiesTabs() {
	const [activeTab, setActiveTab] = useState(0);

	// Tab content data
	const tabs = [
		{
			id: 0,
			label: 'Luxury Apartments',
			component: <LuxuryApartment />,
		},
		{
			id: 1,
			label: 'Restaurant & Bar',
			component: <Restaurant />,
		},
		{
			id: 2,
			label: 'Conference Hall',
			component: <ConferenceHall />,
		},
		{
			id: 3,
			label: 'Laundry Services',
			component: <Laundry />,
		},
	];

	return (
		<div>
			<div className="mt-[40px] lg:px-0 px-[16px]   ">
				<div>
					<div>
						<div>
							{/* Tab navigation */}
							<div className="lg:flex grid grid-cols-2  justify-center gap-[8px] px-[16px]  ">
								{tabs.map(tab => (
									<div
										key={tab.id}
										onClick={() => setActiveTab(tab.id)}
										className={`flex  items-center justify-center  lg:p-[12px] p-[8px] shadow ${
											activeTab === tab.id
												? 'text-[#FF9500] font-bold'
												: 'shadow-sm text-[#ffff]'
										}`}
										style={{
											// padding: '10px 20px',
											cursor: 'pointer',
											backgroundColor:
												activeTab === tab.id ? '#0F1115' : '#0F1115',

											border: activeTab === tab.id ? '1px solid #FF9500' : '',
											borderRadius: '5px',
										}}
									>
										{/* Tab icon (active/inactive) */}

										<div className="text-[14px] lg:text-[14px] ">
											{' '}
											{tab.label}
										</div>
									</div>
								))}
							</div>

							{/* Tab content */}
							<div style={{}}>{tabs[activeTab].component}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
