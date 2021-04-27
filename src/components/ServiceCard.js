import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import './Services.css';

import Bounce from 'react-reveal/Bounce';
import {GrClose} from 'react-icons/gr';
import { IoCloseCircleSharp } from 'react-icons/io5';

function ServiceCard({ service }) {
    const {id, title, details} = service
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    const closeIcon = (
        <div className="close-modal-icon">x</div>
      );
    
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
                <div className="card-foot" onClick={onOpenModal}>
                    <span className="card-link">Read More</span>
                </div>
                <div className="card-border"></div>
            </div>

        {/* MODAL JSX  ---------------> */}
                <div className="modal-card-container">
                    <Modal open={open} onClose={onCloseModal} closeIcon={closeIcon} closeOnEsc center>
                        <h2 className="modal-title">{title}</h2>
                        <img src={`/assets/photo-${id}.jpeg`} alt="" height="auto" width="100%" />
                        <ul>
                            {details.map(detail => <li className="list-items">{detail}</li>)}
                        </ul>
                    </Modal>
                </div>
            </Bounce>
        </div>
    )
}

export default ServiceCard
