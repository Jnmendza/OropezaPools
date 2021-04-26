import React, { useState } from 'react';
import Modal from './Modal';
import Bounce from 'react-reveal/Bounce';

function ServiceCard({ service }) {
    const {id, title, details} = service
    const [open, setOpen] = useState(false);
    

    return (
        <div >
            <Bounce top>
            <div className="card-container">
                <div className="card-head">
                    <img src={`/assets/photo-${id}.jpeg`} alt="logo" className="author-image" />
                </div>
                <div className="card-body">
                    <h2 className="card-headline">{title}</h2>
                    <ul className="card-text">
                        {details.slice(0,5).map(detail => <li>{detail}</li>)}
                    </ul>
                </div>
                <div className="card-foot" onClick={() => setOpen(!open)}>
                    <span className="card-link">Read More</span>
                </div>
                <div className="card-border"></div>
            </div>
            <Modal service={service} open={open} close={() => setOpen(false)}/>
            </Bounce>
        </div>
    )
}

export default ServiceCard
