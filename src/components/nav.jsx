import React, { useState, useEffect } from 'react';
import logo from '../assets/icons/hussein-logo-header.svg';
import menuopen from '../assets/icons/menu-open-icon.svg';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom'; // For routing
import { Link as ScrollLink, scroller } from 'react-scroll'; // For scrolling inside homepage
import locations from '../assets/icons/location-icon-header.svg';
import phone from '../assets/icons/phone-icon-header.svg';
import mail from '../assets/icons/mail-icon-header.svg';
import youtube from '../assets/icons/youtube-icon-header.svg';
import instagram from '../assets/icons/instagram-icon-header.svg';
import twitter from '../assets/icons/twitter-icon-header.svg';
import facebook from '../assets/icons/facebook-icon-header.svg';

import Hamburger from './hamburger.jsx';
import WhatsAppButton from './whatsapp.jsx';

export default function Nav() {
	const [isOpen, setIsOpen] = useState(false);
	const [activeSection, setActiveSection] = useState('home');
	const navigate = useNavigate();
	const location = useLocation();

	// Sections to track for scrolling
	const sections = ['home', 'services', 'contact'];

	// Scroll to the top whenever the route changes
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, [location]);

	// Update activeSection based on route change
	useEffect(() => {
		const currentPath = location.pathname;

		// Set active section based on the current route
		if (currentPath === '/aboutMe') {
			setActiveSection('aboutMe');
		} else if (currentPath === '/contact-us') {
			setActiveSection('contact-us');
		} else if (currentPath === '/') {
			setActiveSection('home');
		}
	}, [location]);

	// Add scroll event listener to track active section within the homepage
	useEffect(() => {
		const handleScroll = () => {
			sections.forEach(section => {
				const sectionElement = document.getElementById(section);
				if (sectionElement) {
					const { top } = sectionElement.getBoundingClientRect();
					if (top >= -100 && top < 200) {
						setActiveSection(section);
					}
				}
			});
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [sections]);

	const handleOpen = e => {
		e.stopPropagation(); // Prevent event bubbling
		setIsOpen(prev => !prev);
	};

	const scrollToSection = section => {
		if (location.pathname !== '/') {
			navigate('/');
			setTimeout(() => {
				scroller.scrollTo(section, {
					smooth: true,
					offset: -150, // Adjust this offset as per your navbar height
					duration: 500,
				});
				setActiveSection(section);
			}, 100); // Small delay for navigation
		} else {
			scroller.scrollTo(section, {
				smooth: true,
				offset: -70,
				duration: 500,
			});
			setActiveSection(section);
		}
	};

	// Active and inactive styles for font size and underline
	const activeStyle = {
		color: '#FE5A34',
		fontWeight: 'extrabold',
		fontSize: '14px',
		position: 'relative',
	};

	const inactiveStyle = {
		color: '#253041',
		fontSize: '14px',
		fontWeight: 'medium',
	};

	return (
		<>
			{isOpen && <Hamburger setIsOpen={setIsOpen} />}

			<div className="fixed z-40 top-0 font-jeko bg-[#ffffff] border-b-[0.5px] border-[#eaecf0] w-screen">
				<div className="flex justify-between items-center lg:px-[80px] px-[24px] lg:py-[30px] py-[20px]">
					<div>
						<a href="#">
							<img
								src={logo}
								alt="Logo"
								className=" w-[146px] h-[28px] "
								onClick={() => scrollToSection('home')}
							/>
						</a>
					</div>

					<button
						className="lg:hidden w-8 h-8 absolute right-[16px] text-[#ffffff] flex justify-between items-center"
						onClick={handleOpen}
					>
						<img
							src={menuopen}
							alt=""
						/>
					</button>
					<div className="lg:flex justify-between items-center   hidden text-[16px] ">
						{/* Scroll Link for Home */}
						<button
							onClick={() => scrollToSection('home')}
							className="cursor-pointer p-[10px]   relative "
							style={activeSection === 'home' ? activeStyle : inactiveStyle}
						>
							Works
						</button>

						{/* About Us Route Link */}
						<RouterLink
							to="/aboutMe"
							className="cursor-pointer p-[10px]  relative"
							style={activeSection === 'aboutMe' ? activeStyle : inactiveStyle}
							onClick={() => setActiveSection('aboutMe')}
						>
							About Me
						</RouterLink>

						{/* Projects Route Link */}
						<div
							className="cursor-pointer p-[10px] relative"
							style={
								activeSection === 'contact-us' ? activeStyle : inactiveStyle
							}
							onClick={() => setActiveSection('contact-us')}
						>
							<a
								href="#"
								onClick={() => window.open('./ahmadtechs-Resume.pdf', '_blank')}
							>
								Resume
							</a>
						</div>

						<a href="#">
							<button className="rounded-md cursor-pointer border-[1px] border-[#FE5A34] py-[11px] px-[16px] w-[95px]  text-[14px] text-[#FE5A34] lg:flex items-center hidden">
								<WhatsAppButton />
							</button>
						</a>
					</div>
				</div>
			</div>
		</>
	);
}
