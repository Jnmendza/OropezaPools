import React from 'react';
import './Footer.css';

import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-content-container">
                <div className="contact-info-container">
                    <img src="/assets/white-primary-logo.svg" alt="Oropeza-logo" height="auto" width="150px" />
                    <p><a href="mailto: oropezapools@gmail.com ">Oropezapools@gmail.com</a></p>
                    <p><a href="tel:619-828-3301">(619) 828-3301</a></p>
                    <p>License #B2021004144</p>
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
