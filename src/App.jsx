import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/nav';

import Home from './components/pages/home'; // Create a new Home component to manage all sections
import AboutMe from './components/pages/aboutMe.jsx';

function App() {
	return (
		<Router>
			<Nav />
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/aboutMe"
					element={<AboutMe />}
				/>
				{/* <Route
					path="/contact-us"
					element={<ContactUs />}
				/> */}
			</Routes>
			{/* <Footer /> */}
		</Router>
	);
}

export default App;
