import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import logo from '../assets/logo.png';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

function Navbar() {
    return (
        <nav className="flex-display nav-container">
            <div>
                <img src={logo} alt="logo" height="auto" width="120px" />
            </div>
            <div className="flex-display link-container">
                <Link to="/">Home</Link>
                <Link to="/about-us">About Us</Link>
                <Link to="/">Link3</Link>
                <FaFacebookF />
                <FaInstagram />
            </div>
        </nav>
    )
}

export default Navbar
