import React, { useEffect, useState } from 'react';
import { HiX } from 'react-icons/hi';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/icons/hussein-logo-header.svg';
import close from '../assets/icons/menu-close-icon.svg';
import { Link as ScrollLink, scroller } from 'react-scroll';
import whatsappbtnhero from '../assets/icons/whatsapp-btn-hero.svg';
import WhatsAppButton from './whatsapp';

function Hamburger({ setIsOpen }) {
	const [animation, setAnimation] = useState('');
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		setAnimation('slide-in'); // Trigger slide-in animation
		document.body.style.overflow = 'hidden'; // Prevent body scroll

		return () => {
			document.body.style.overflow = 'auto'; // Restore body scroll on unmount
		};
	}, []);

	const handleClose = () => {
		setAnimation('slide-out'); // Trigger slide-out animation
		setTimeout(() => {
			setIsOpen(false);
			document.body.style.overflow = 'auto'; // Restore scroll after closing
		}, 500); // Adjust timeout to match animation duration
	};

	const handleNavigation = (path, sectionId = null) => {
		if (path === '/') {
			if (location.pathname === '/') {
				if (sectionId) {
					scroller.scrollTo(sectionId, {
						smooth: true,
						offset: -150,
						duration: 500,
					});
				}
			} else {
				navigate('/');
				setTimeout(() => {
					if (sectionId) {
						scroller.scrollTo(sectionId, {
							smooth: true,
							offset: -150,
							duration: 500,
						});
					}
				}, 500);
			}
		} else {
			navigate(path);
		}
		handleClose();
	};

	const getSlideStyles = () => ({
		transform: animation === 'slide-in' ? 'translateX(0)' : 'translateX(-100%)',
		transition: 'transform 0.5s ease-in-out',
	});

	// Function to apply active styles
	const getLinkStyles = path => ({
		color: location.pathname === path ? '#FE5A34' : '#253041',
		fontWeight: location.pathname === path ? 'bold' : 'medium',
	});

	return (
		<div className="fixed top-0 left-0 font-jeko w-full h-full z-50">
			<div
				className="fixed inset-0 bg-black opacity-50"
				onClick={handleClose}
			></div>
			<div
				className="relative w-full pt-[24px] text-center"
				style={getSlideStyles()}
			>
				<div className="bg-[#ffff] lg:w-full w-[95%]  h-screen absolute top-0 left-0 font-medium flex flex-col justify-between  pb-[24px]">
					<div className="flex flex-col gap-[32px] ">
						<div className="flex justify-between pt-[24px]  border-b-[2px] border-[#D1D1D6] pb-[24px]">
							<img
								src={logo}
								alt=""
								onClick={() => handleNavigation('/', 'home')}
								className="pl-[24px]  "
							/>
							<button
								className="rounded-md text-[#3a5791]"
								onClick={handleClose}
							>
								<img
									src={close}
									alt=""
									className="w-[45px] h-[45px] mr-[24px] "
								/>
							</button>
						</div>

						<ScrollLink
							to="home"
							duration={500}
							smooth={true}
							offset={-70}
							onClick={() => handleNavigation('/', 'home')}
							style={getLinkStyles('/')}
							className="text-[24px] px-[24px] text-left cursor-pointer mt-[0px]"
						>
							Works
						</ScrollLink>

						<RouterLink
							to="/aboutMe"
							style={getLinkStyles('/aboutMe')}
							className="text-[24px] px-[24px] text-left cursor-pointer"
							onClick={() => handleNavigation('/aboutMe')}
						>
							About Me
						</RouterLink>

						<div
							style={getLinkStyles('/contact-us')}
							className="text-[24px] px-[24px] text-left cursor-pointer"
						>
							<a
								href="#"
								onClick={() => window.open('./ahmadtechs-Resume.pdf', '_blank')}
							>
								Resume
							</a>
						</div>
					</div>
					<div className="lg:hidden w-full  flex flex-col px-[24px] gap-[16px] pb-[20px]">
						<a
							href="#"
							className="w-full"
						>
							<button className="bg-[#FE5A34] rounded-lg text-white h-[60px] w-full flex items-center justify-center text-[16px] font-semibold">
								<img
									src={whatsappbtnhero}
									alt="WhatsApp Icon"
									className="mr-2 w-[24px] h-[24px]" // Adjust size as needed
								/>
								<span>
									<WhatsAppButton />
								</span>
							</button>
						</a>
						<a
							href="#"
							className="w-full"
						>
							<button
								className=" text-[#FE5A34]  rounded-lg border border-[#FE5A34] h-[60px] w-full  flex items-center justify-center text-[14px] font-extrabold"
								onClick={() => window.open('./ahmadtechs-Resume.pdf', '_blank')}
							>
								<a>
									<span>Download Resume</span>
								</a>
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hamburger;
