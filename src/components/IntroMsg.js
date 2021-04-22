import React from 'react';
import { Link } from 'react-router-dom';

import './IntroMsg.css'

function IntroMsg() {
    return (
        <div className="flex-display intro-container">
                <div className="msg-container">
                    <h1>Hello!</h1>
                    <p>We are the Oropeza family. We come with over 20 years of successful, 
                    store manager experience from some of your favorite retailers. </p>
                    <br />
                    <p> We’ve decided to enter the pool service industry and provide that same energetic, 
                    professional, customer focused experience we provided you in our previous big box locations. 
                    Come be a part of our journey and the new Oropeza pools family.</p>
                    <Link to="/about-us"><button>About Us</button></Link>
                </div>

                <div className="img-container">
                    <img className="image2" src="/assets/Kids.png" alt="kids-playing-in-pool" height="auto" width="550px" />
                </div>
        </div>

    )
}

export default IntroMsg
