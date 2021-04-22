import React from 'react';
import './TitlePhoto.css'

function TitlePhoto() {
    return (
        <div className="title-photo-container">
            <img src="/assets/title-photo.jpg" alt='unicorn-in-pool' className="title-photo" />
            <div className="title-photo-text">
                <h1>The <span className="gold">Gold</span> standard, you deserve it</h1>
                <div className="line"></div>
                <h2>Servicio de <span className="gold">Oro</span>, te lo mereces</h2>
            </div>
        </div>
    )
}

export default TitlePhoto;
