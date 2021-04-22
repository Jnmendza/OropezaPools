import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="header-image-container">
                <img className="header-image" src="/assets/Hero-image.jpg" alt="pool-image" />
                <div className="cta">
                    <p>Get A</p>
                    <p>Free</p>
                    <p>Estimate Today</p>
                    <p>(619) 852-4625</p>
                </div>
        </div>
    )
}

export default Header
