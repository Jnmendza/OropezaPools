import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'

import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

function Navbar() {
    const location = useLocation();
    console.log("LOCATION",location)
    return (
        
        <nav className=" nav-container">
            <div className="flex-display nav-wrapper">
                
                <div>
                    <Link to="/">
                        <img src="/assets/Oropeza-primary-logo.svg" alt="logo" height="auto" width="175px" />
                    </Link>
                </div>
                {location.pathname === '/about-us' ? (
                    <div className="flex-display link-container">
                    <Link to="/">Home</Link>
                    <Link to="/about-us">About Us</Link>
                        <Link to="/"><FaFacebookF /> </Link>
                        <Link to="/"><FaInstagram /> </Link>
                </div>
                ) : (<div className="flex-display link-container">
                <Link to="/">Home</Link>
                <Link to="/about-us">About Us</Link>
                <AnchorLink href="#services">Services</AnchorLink>
                    <Link to="/"><FaFacebookF /> </Link>
                    <Link to="/"><FaInstagram /> </Link>
                </div>
            )}

                
            </div>
        </nav>
    )
}

export default Navbar
