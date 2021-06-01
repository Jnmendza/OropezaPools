import React from 'react';
import './Header.css';
import Bounce from 'react-reveal/Bounce';


function Header() {
    return (
        <div className="header-image-container">
                <img className="header-image" src="/assets/Hero-image.jpg" alt="pool" />
                <Bounce left>
                    <div className="flex-display cta">
                        <img className="O-logo" src="/assets/theO.svg" alt="oropeza-logo" height="auto" width="250px"/>
                        <div className="flex-display header-text-wrapper">
                            <p>Get your free</p>
                            <p>Quote Today</p>
                            <p><a href="tel:619-828-3301">619-828-3301</a></p>
                        </div>
                    </div>
                </Bounce>
        </div>
    )
}

export default Header
