import React from 'react';

const WhatsAppButton = () => {
	const openWhatsApp = () => {
		const phoneNumber = '+2348035816287'; // Replace this with the correct phone number format
		const message = encodeURIComponent(`Hey there,
I’m interested in your IT services. Could you share details on pricing, timelines, and how to proceed?
Thank you.`);

		const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

		window.open(url, '_blank');
	};

	return (
		<button
			onClick={openWhatsApp}
			className="font-jeko text-[14px] font-extrabold"
		>
			Let's talk
		</button>
	);
};

export default WhatsAppButton;
