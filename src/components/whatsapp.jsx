import React from 'react';

const WhatsAppButton = () => {
	console.log('it has opened');
	const openWhatsApp = () => {
		console.log('');
		const phoneNumber = '+2348037472400'; // Replace this with the correct phone number format
		const message = `Hey there,%0A
I would like to make a booking. Could you please provide me with more details about room availability, pricing, and any special offers?%0A
Thank you.`;

		const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

		window.open(url, '_blank');
	};

	return (
		<button
			onClick={openWhatsApp}
			className="w-full h-full font-jeko flex justify-start items-center ml-2  text-[14px] font-extrabold"
		>
			Let's talk
		</button>
	);
};

export default WhatsAppButton;
