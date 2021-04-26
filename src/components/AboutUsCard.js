import React from 'react';
import './AboutUs.css';
import Fade from 'react-reveal/Fade';


function AboutUsCard({ aboutMe }) {
    const { id, firstName, lastName, title, link } = aboutMe;
    return (
        <div>
            {id % 2 === 1 ? (
                <Fade left>
                    <div className="about-us-wrapper">
                        <img src={`/assets/${firstName}.jpeg`} alt={firstName} />
                        <div className="about-name-container">
                            <a href={link}><h2>{firstName} {lastName}</h2></a>
                            <p>{title}</p>
                        </div>
                    </div>
                </Fade>
            ) : (
                <Fade right>
                    <div className="about-us-wrapper">
                        <img src={`/assets/${firstName}.jpeg`} alt={firstName} />
                        <div className="about-name-container">
                            <a href={link}><h2>{firstName} {lastName}</h2></a>
                            <p>{title}</p>
                        </div>
                    </div>
                </Fade>
            )}
        </div>
    )
}

export default AboutUsCard
