import React, { useState } from 'react';
import Modal from './Modal';


function ServiceCard({ service }) {
    const {id, title, image, subtitle, details} = service
    const [open, setOpen] = useState(false)

    return (
        <div>
            <div className="card-container">
                <h1 className="title-container">{title}</h1>
                <img src={`../assets/photo-${id}.jpeg`} alt="pool" height="auto" width="250px"/>
                <div className="details-container">
                    <ul>
                    {details.slice(0,5).map(detail => {
                        return(
                            <li>{detail}</li>
                            )
                        })}
                    </ul>
                </div>
                <div className="modal-btn" onClick={() => setOpen(true)}>
                        Read more...
                </div>
            </div>
            <Modal service={service} open={open} close={() => setOpen(false)}/>
        </div>
    )
}

export default ServiceCard
