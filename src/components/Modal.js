import React from 'react';
import './Modal.css';
// import logo from '../assets/whtLogo.svg';

export const Modal = ({ open, close, service }) => {
    const {id, title, details} = service
    if(!open) return null;
    return (
        <div>
        <div className="modal-overlay"/>
        <div className="modal-container" style={{ opacity: open ? '1' : '0' }}>
            <div className="modal-header">
                <img src="/assets/whtLogo.svg" alt="oropeza-logo" height="auto" width="150px" />
                <h1>{title}</h1>
            </div>
            <div className="modal-content">
                <div className="modal-body">
                    <img src={`../assets/photo-${id}.jpeg`} alt="pool" height="auto" width="600px"/>
                    <ul>
                    {details.map(detail => {
                        return(
                            <li>{detail}</li>
                            )
                        })}
                    </ul>
                </div>
                
                    <button className="btn-cancel" onClick={close}>Close</button>
                
            </div>
        </div>
        </div>
    )
}

export default Modal
