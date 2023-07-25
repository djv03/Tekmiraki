import React from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Homepage from "./Components/Homepage";
import Footer from "./Components/Footer";
import IndustrialAutomation from "./pages/IndustrialAutomation";
import AdvancedIOT from "./pages/AdvancedIOT";
import IndustrialElectrical from "./pages/IndustrialElectrical";
// import "./main.css"
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <React.Fragment>
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/about" element={<About />}></Route>
            {/* <Route path='/portfolio' element={<Portfolio />}></Route> */}
            <Route
              path="/industrialautomation"
              element={<IndustrialAutomation />}
            ></Route>
            <Route path="/advancediot" element={<AdvancedIOT />}></Route>
            <Route
              path="/industrialelectrical"
              element={<IndustrialElectrical />}
            ></Route>
						<Route path="/contactpage" element={<ContactPage />}></Route>
            {/* <Route path="/contactpage" element={<AdressPage />}></Route> */}
          </Routes>
        </React.Fragment>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
