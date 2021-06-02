import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'

import { FaBars } from 'react-icons/fa';
import { VscChromeClose } from 'react-icons/vsc';
import { ReactComponent as Logo } from "../Oropeza-primary-logo.svg";

function Navbar() {
    const location = useLocation();
    const [open, setOpen] = useState(false);
    const openMenu = () => setOpen(false);

    return (
        <nav className="navbar">
            <Link to='/' className="nav-logo" onClick={openMenu}>
                <Logo className="logo" />
            </Link>
            {location.pathname === '/about-us' ? (
                <ul className={open ? 'nav-links active' : 'nav-links'}>
                <li className="nav-item">
                    <Link to="/" className="nav-link" onClick={openMenu}>
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/about-us" className="nav-link" onClick={openMenu}>
                        About Us
                    </Link>
                </li>
               
            </ul>
            ) : (
                <ul className={open ? 'nav-links active' : 'nav-links'}>
                <li className="nav-item">
                    <Link to="/" className="nav-link" onClick={openMenu}>
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/about-us" className="nav-link" onClick={openMenu}>
                        About Us
                    </Link>
                </li>
                <li className="nav-item">
                    <AnchorLink className="nav-link" href="#services" onClick={openMenu}>Services</AnchorLink>
                </li>
            </ul>
            )}
            
            <div onClick={() => setOpen(!open)} className="nav-icon">
                {open ? <VscChromeClose /> : <FaBars />}
            </div>
        </nav>
    )
}

export default Navbar

// <nav className=" nav-container">
        //     <div className="flex-display nav-wrapper">
                
        //         <div>
        //             <Link to="/">
        //                 <img src="/assets/Oropeza-primary-logo.svg" alt="logo" height="auto" width="175px" />
        //             </Link>
        //         </div>
        //         {location.pathname === '/about-us' ? (
        //             <div className="flex-display link-container">
        //             <Link to="/">Home</Link>
        //             <Link to="/about-us">About Us</Link>
        //                 <Link to="/"><FaFacebookF /> </Link>
        //                 <Link to="/"><FaInstagram /> </Link>
        //         </div>
        //         ) : (<div className="flex-display link-container">
        //         <Link to="/">Home</Link>
        //         <Link to="/about-us">About Us</Link>
        //         <AnchorLink href="#services">Services</AnchorLink>
        //             <Link to="/"><FaFacebookF /> </Link>
        //             <Link to="/"><FaInstagram /> </Link>
        //         </div>
        //     )}  
        //     </div>
        // </nav>
