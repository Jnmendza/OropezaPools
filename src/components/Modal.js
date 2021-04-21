import React from 'react';
import './Modal.css';

export const Modal = ({ show, close }) => {
    return (
        <div className="modal-container" style={{ opacity: show ? '1' : '0' }}>
            <div className="modal-header">
                <p>Welcome to the modal</p>
                <span className="close-modal-btn" >X</span>
            </div>
            <div className="modal-content">
                <div className="modal-body">
                    <h4>Modal</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicng elit. Voluptatibus, placeat aliquam? Nostrum vero
                    fugiat rem, itaque molestias ipsa quae facilis.</p>
                </div>
                <div>
                    <button className="btn-cancel" onClick={close}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
