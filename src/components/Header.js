import React from 'react';
import './Header.css';
import Bounce from 'react-reveal/Bounce';


function Header() {
    return (
        <div className="header-image-container">
                <Bounce left>
                    <div className="title-holder flex-display">
                        <img className="O-logo" src="/assets/theO.svg" alt="oropeza-logo"/>
                        <div className="title-holder-text">
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

