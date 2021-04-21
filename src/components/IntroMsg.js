import React from 'react';
import kids from '../assets/Kids.png';
import kidjumping from '../assets/KidJumping.png';

function IntroMsg() {
    return (
        <div className="flex-display intro-container">
            <div>
                <h1>Hello!</h1>
                <p>We are the Oropeza family. We come with over 20 years of successful, 
                store manager experience from some of your favorite retailers. </p>
            
                <p> We’ve decided to enter the pool service industry and provide that same energetic, 
                professional, customer focused experience we provided you in our previous big box locations. 
                Come be a part of our journey and the new Oropeza pools family.</p>
            </div>
            <div className="img-container">
                <img src={kids} alt="" />
                <img src={kidjumping} alt="" />
            </div>
        </div>
    )
}

export default IntroMsg
