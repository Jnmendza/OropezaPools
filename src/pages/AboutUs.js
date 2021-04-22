import React from 'react';
import AboutUsCard from '../components/AboutUsCard';
import Promises from '../components/Promise';
import { aboutUs, promises } from "../components/serviceData";
import '../components/AboutUs.css';

function AboutUs() {
    return (
        <div>
            <div className="flex-display about-us-container">
            {aboutUs.map(aboutMe => {
                return <AboutUsCard aboutMe={aboutMe} />
            })}
            </div>
            {promises.map(promise => {
                return <Promises promise={promise} />
            })}
        
        </div>
    )
}

export default AboutUs
