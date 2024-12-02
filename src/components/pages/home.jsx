import React from 'react';
import HeroSection from '../heroSection.jsx';
import SectionTwo from '../sectionTwo.jsx';
import Footer from '../footer.jsx';
import DesignProcess from '../designProcess.jsx';

const Home = () => {
	return (
		<div className="font-jeko">
			<HeroSection />
			<div>
				<SectionTwo />
				<DesignProcess />
				<Footer />
			</div>
		</div>
	);
};

export default Home;
