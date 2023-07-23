import React from 'react';
import Navbar from "./Components/Navbar";
import About from './Components/About'
import Homepage from './Components/Homepage';
import Footer from './Components/Footer';
import Adress from './Components/Adress';
import "./main.css"

import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
	return (
		<BrowserRouter>
			<React.Fragment>
				<section>
				<Navbar />
				<Routes>
					<Route path='/' element={<Homepage />}></Route>
					<Route path='/about' element={<About />}></Route>
					{/* <Route path='/portfolio' element={<Portfolio />}></Route> */}
					<Route path='/contact' element={<Adress />}></Route>
				</Routes>
			</section>
			</React.Fragment>
			<Footer/>
		</BrowserRouter>
	);
}

export default App;
