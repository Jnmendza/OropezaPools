import React from 'react';
import whtLogo from '../assets/whtLogo.svg';
import './Footer.css';

import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-content-container">
                <div className="contact-info-container">
                    <img src={whtLogo} alt="Oropeza white logo" height="auto" width="150px" />
                    <p><a href="mailto: ">Oropezapools@gmails.com</a></p>
                    <p>(619) 852-4625</p>
                </div>
                <div className="flex-display bottom-info-container">
                    <p>Lorem ipsum copyright jargon</p>
                    <div className="social-media-icons-container">
                        <FaFacebookF />
                        <FaInstagram />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
