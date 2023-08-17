import "./Navbar.css";
import { useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/Logo.png";
import { Link, NavLink } from "react-router-dom";
function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const closeNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
  };

  return (
    <>
      <header>
        <div>
          <img src={logo} alt="profile pic" />
        </div>
        <nav ref={navRef}>
          <p href="/" onClick={closeNavbar}>
            <NavLink to="/">Home</NavLink>{" "}
          </p>
          <p href="/" onClick={closeNavbar}>
            <NavLink to="/about">About</NavLink>
          </p>
          <p href="/#services" onClick={closeNavbar}>
          <NavLink to="/service">Service</NavLink>
          </p>
          <div className="dropdown">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <p>Solutions</p>
            <div className="dropdown-content">
              <p href="/">
                <Link to="/buildingManagement">Building Management</Link>
              </p>
              <p href="/">
                <Link to="/productProcess">Product Process Monitoring</Link>
              </p>
              <p href="/">
                <Link to="/roPlant">RO Plant Monitoring</Link>
              </p>
              <p href="/">
                <Link to="/sewage">Sewage Treatment Plant</Link>
              </p>
              <p href="/">
                <Link to="/energyManagement">Energy Management</Link>
              </p>
              <p href="/">
                <Link to="/machineHealth">Machine Health Monitoring</Link>
              </p>
              <p href="/">
                <Link to="/logistics">Connected Logistics</Link>
              </p>
              <p href="/">
                <Link to="/assetManagement">Asset Management & Ticketing</Link>
              </p>
            </div>
          </div>
          <p href="/contactpage" onClick={closeNavbar}>
            <NavLink to="/contactpage">Contact</NavLink>
          </p>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" id="ham" onClick={showNavbar}>
          <AiOutlineMenu />
        </button>
        {/* <button className='hire'>
                    Enterprise Solutions
                </button> */}
      </header>
    </>
  );
}

export default Navbar;
