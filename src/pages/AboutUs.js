import React from 'react';
import AboutUsCard from '../components/AboutUsCard';
import Promises from '../components/Promise';
import { aboutUs, promises } from "../components/serviceData";
import '../components/AboutUs.css';
import Fade from 'react-reveal/Fade';


function AboutUs() {
    return (
        <div>
            <div className="flex-display about-us-container">
            {aboutUs.map(aboutMe => {
                return <AboutUsCard aboutMe={aboutMe} />
            })}
            </div>
            <div className="flex-display promise-card-container">
            <Fade top><h1 className="container-title-text">Our Promises</h1></Fade>
            {promises.map(promise => {
                    return <Promises promise={promise} />
                })}
            </div>
        
        </div>
    )
}

export default AboutUs
