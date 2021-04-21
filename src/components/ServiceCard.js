import React, { useState } from 'react';
import Img from '../assets/cleaning.jpg'

function ServiceCard({ service }) {
    const {id, title, image, subtitle, details} = service


    return (
        <div className="card-container">
            <h1 className="title-container">{title}</h1>
            <img src={Img} alt="pool" height="auto" width="250px"/>
            <div className="details-container">
                <ul>
                {details.slice(0,3).map(detail => {
                    return(
                        <li>{detail}</li>
                        )
                    })}
                </ul>
            </div>
            <div className="modal-btn">
                    Read more...
            </div>
        </div>
    )
}

export default ServiceCard
