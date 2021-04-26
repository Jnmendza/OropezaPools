import React from 'react';
import { Link } from 'react-router-dom';
import Jump from 'react-reveal/Jump';

import './IntroMsg.css'

function IntroMsg() {
    return (
        <div className="flex-display intro-container">
                <div className="msg-container">
                    <h1>Hello!</h1>
                    <p>We are the Oropeza family, two businesses professionals with a proven track record of 
                    excellence. We’ve decided to enter the pool service industry and provide you with the same 
                    energetic, professional, customer focused experience we have delivered in our previous locations.</p>
                    <br />
                    <p> We come with over 20 years of successful store manager experience from multiple sectors of 
                    retail. We are fluent in English and Spanish with excellent communication skills to easily interact 
                    with our current and future members. We have completed comprehensive training, are CPO Certified, 
                    licensed, insured and ready to go! Come be a part of our journey and the new Oropeza pools family. 

                    </p>
                    <Jump><Link to="/about-us"><button>About Us</button></Link></Jump>
                </div>

                <div className="img-container">
                    <img className="image2" src="/assets/Kids.png" alt="kids-playing-in-pool" height="auto" width="550px" />
                </div>
        </div>

    )
}

export default IntroMsg
