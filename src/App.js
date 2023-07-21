import React from 'react';
import Navbar from "./Components/Navbar";
import Contact from './Components/Contact';
import About from './Components/About'
import Homepage from './Components/Homepage';
import Footer from './Components/Footer';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
	return (
		<BrowserRouter>
			<React.Fragment>
				<Navbar />
				<Routes>
					<Route path='/' element={<Homepage />}></Route>
					<Route path='/about' element={<About />}></Route>
					<Route path='/contact' element={<Contact />}></Route>
				</Routes>
			</React.Fragment>
			<Footer/>
		</BrowserRouter>
	);
}

export default App;
