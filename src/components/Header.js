import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="header-image-container">
                <img className="header-image" src="/assets/Hero-image.jpg" alt="pool-image" />
                <div className="flex-display cta">
                    <img className="O-logo" src="/assets/theO.svg" alt="logo" height="auto" width="350px"/>
                    <div style={{margin: "0 35px"}}>
                        <p>Get A</p>
                        <p>Free</p>
                        <p>Estimate Today</p>
                        <p>(619) 852-4625</p>
                    </div>
                </div>
        </div>
    )
}

export default Header
