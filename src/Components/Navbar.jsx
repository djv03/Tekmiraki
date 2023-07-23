import './Navbar.css'
import { useRef } from 'react'
import { FaTimes } from 'react-icons/fa'
import { AiOutlineMenu } from 'react-icons/ai'
import logo from '../assets/Logo.png'
import { Link, NavLink } from 'react-router-dom';
function Navbar() {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    const closeNavbar = () => {
        navRef.current.classList.remove('responsive_nav');
    };

    return (
        <>
            <header>
                <div>
                    <img src={logo} alt="profile pic" />
                </div>
                <nav ref={navRef}>
                
                    <a href="/" onClick={closeNavbar}><NavLink to='/'>Home</NavLink> </a>
                    <a href="/" onClick={closeNavbar}><NavLink to='/about'>About</NavLink></a>
                    <a href="/#services" onClick={closeNavbar}>Services</a>
                    <a href="/contactpage" onClick={closeNavbar}><NavLink to='/contactpage'>Contact</NavLink></a>
                    <button
                        className="nav-btn nav-close-btn"
                        onClick={showNavbar}>
                        <FaTimes />
                    </button>
                </nav>
                <button
                    className="nav-btn"
                    id='ham'
                    onClick={showNavbar}>
                    <AiOutlineMenu />
                </button>
                {/* <button className='hire'>
                    Enterprise Solutions
                </button> */}
            </header>
        </>
    )
}

export default Navbar
