import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

function Navbar() {
    return (
        <nav className=" nav-container">
            <div className="flex-display nav-wrapper">

                <div>
                    <Link to="/">
                        <img src="/assets/logo.png" alt="logo" height="auto" width="120px" />
                    </Link>
                </div>

                <div className="flex-display link-container">
                    <Link to="/">Home</Link>
                    <Link to="/about-us">About Us</Link>
                    <Link to="/#services">Services</Link>
                    <Link to="/"><FaFacebookF /> </Link>
                    <Link to="/"><FaInstagram /> </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
