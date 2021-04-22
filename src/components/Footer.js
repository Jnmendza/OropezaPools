import React from 'react';
import './Footer.css';

import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-content-container">
                <div className="contact-info-container">
                    <img src="/assets/whtLogo.svg" alt="Oropeza-logo" height="auto" width="150px" />
                    <p><a href="mailto: ">Oropezapools@gmails.com</a></p>
                    <p>(619) 852-4625</p>
                </div>
                <div className="flex-display bottom-info-container">
                    <p>Copyright © 2021 Oropeza Pools</p>
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
