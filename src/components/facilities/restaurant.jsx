import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css'; // Core Swiper styles
import 'swiper/css/navigation'; // Navigation module styles

// Your images here
import img1 from '../../assets/slides/restaurantslides/slide1.png';
import img2 from '../../assets/slides/restaurantslides/slide2.png';
import img3 from '../../assets/slides/restaurantslides/slide3.png';
import img4 from '../../assets/slides/restaurantslides/slide4.png';
import img5 from '../../assets/slides/restaurantslides/slide5.png';

import arrowNext from '../../assets/icons/arrowNext.svg';
import arrowBack from '../../assets/icons/arrowBack.svg';

export default function Restaurant() {
	const [currentSlide, setCurrentSlide] = useState(1); // State to track the current slide index
	const images = [img1, img2, img3, img4, img5];

	const handleSlideChange = swiper => {
		setCurrentSlide(swiper.realIndex + 1); // Update the current slide number (0-indexed so we add 1)
	};

	return (
		<div className="relative bg-[url('/src/assets/slides/bg-restaurant.png')] bg-cover w-full lg:px-[120px] lg:pt-[120px] pt-[23px] lg:pb-[120px] lg:mt-[120px] mt-[80px]">
			{/* Display the current slide and total slide count */}
			<div className="absolute inset-0 bg-black/50"></div>

			<div className="relative z-10">
				<h6 className="text-[#EFBD4C] lg:text-left text-center  text-[16px] font-medium">
					Restaurant & Bar
				</h6>

				<div className="flex lg:flex-row flex-col justify-between text-center items-center pt-[8px]">
					<p className="text-white lg:text-[36px] text-[24px] font-semibold">
						Savor, Sip, and Unwind
					</p>

					{/* Display the current slide number */}
					<div className=" text-[#FFFFFF] text-[20px] font-light  mt-4">
						<span className="font-light">Showing </span>
						<span className="font-bold">{currentSlide}</span>
						<span className="font-light"> of </span>
						<span className="font-bold">{images.length}</span>
					</div>
				</div>

				<Swiper
					modules={[Navigation, Autoplay]} // Add Autoplay module
					spaceBetween={30}
					slidesPerView={1}
					navigation={{
						nextEl: '.custom-next',
						prevEl: '.custom-prev',
					}}
					loop={true} // Enables continuous looping
					autoplay={{ delay: 5000 }} // Auto-slide every 5 seconds
					className="swiper-container mt-[48px] p-[1px] rounded-2xl bg-gradient-to-b from-white to-[#EFBD4C]"
					onSlideChange={handleSlideChange} // Update slide number on change
				>
					{images.map((image, index) => (
						<SwiperSlide key={index}>
							<div className="relative">
								<img
									src={image}
									alt={`Slide ${index + 1}`}
									className="w-full lg:h-[800px] h-[393px] object-cover rounded-b-2xl"
								/>
								{/* Custom navigation buttons */}
								<div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 p-2">
									<div className="custom-prev bg-black bg-opacity-50 text-white lg:px-[16px] px-[6px] lg:py-[21px] py-[9px] rounded-full cursor-pointer hover:bg-opacity-70">
										<img
											src={arrowBack}
											alt="Previous"
											className="lg:w-[36px] w-[22px] h-[16px] lg:h-[25px]"
										/>
									</div>
								</div>
								<div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 p-2">
									<div className="custom-next bg-black bg-opacity-50 text-white lg:px-[16px] px-[6px] lg:py-[21px] py-[9px] rounded-full cursor-pointer hover:bg-opacity-70">
										<img
											src={arrowNext}
											alt="Next"
											className="lg:w-[36px] w-[22px] h-[16px] lg:h-[25px]"
										/>
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}
