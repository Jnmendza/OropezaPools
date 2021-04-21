import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import logo from '../assets/logo.png';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

function Navbar() {
    return (
        <div>
        <nav className="container flex-display">
            <Link to="/">
                <img src={logo} alt="logo" width="140px"  />
            </Link>
            <ul className="flex-display nav-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about-us">About Us</Link>
                </li>
                <li>
                    <Link>Link 3</Link>
                </li>
            </ul>
            <div className="flex-display social-media-icons">
                <FaFacebookF />
                <FaInstagram />
            </div>
        </nav>
        </div>
    )
}

export default Navbar
