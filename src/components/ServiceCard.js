import React from 'react';
import Img from '../assets/cleaning.jpg'

function ServiceCard({ service }) {
    const {id, title, image, subtitle, details} = service
    return (
        <div className="card-container">
            <h1 className="title-container">{title}</h1>
            <img src={Img} alt="pool" height="auto" width="250px"/>
            {subtitle ? <p>{subtitle}</p> : null}
            <div>
                <ul>
                {details.map(detail => {
                    return(
                        <li>{detail}</li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default ServiceCard
