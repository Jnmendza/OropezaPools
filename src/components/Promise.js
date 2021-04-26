import React from 'react';
import Fade from 'react-reveal/Fade';


function Promises({ promise }) {
    const {id, promiseText, content} = promise
    return (
        <div className="flex-display promise-card-wrapper"> 
        {id % 2 === 0 ? (
            <div className="promise-card right-promise-card" >
                <Fade right>
                    <h1>{promiseText}</h1>
                    <p>{content}</p>
                </Fade>
            </div>
        ) : (
            <div className="promise-card left-promise-card">
                <Fade left>
                    <h1>{promiseText}</h1>
                    <p>{content}</p>
                </Fade>
            </div>
        )}
        </div>
    )
}

export default Promises
