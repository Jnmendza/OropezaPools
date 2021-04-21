import React from 'react';
import Header from '../components/Header';
import Services from '../components/Services';
import IntroMsg from '../components/IntroMsg';
import TitlePhoto from '../components/TitlePhoto';
import './Home.css';

function Home() {
    return (
        <div className="home-container">
            <Header />
            <IntroMsg />
            <TitlePhoto />
            <Services />
        </div>
    )
}

export default Home
