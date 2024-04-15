import React, { useState } from 'react';
import './Collapse.scss'
import ArrowAbout from '../../assets/arrow_about.svg'

function Collapse({ choice, text }) {
    const [isTextVisible, setIsTextVisible] = useState(false);

    const handleClick = () => {
        setIsTextVisible(!isTextVisible);
    }

    return (
        <div className="collapse-container">
            <div className={`collapse ${isTextVisible ? 'open' : ''}`}>
                <p className="collapse__name">{choice}</p>
                <img src={ArrowAbout} alt="flèche de selection" onClick={handleClick} className='arrow-collapse' />
            </div>
            {isTextVisible && <div className="collapse__text">{text}</div>}
        </div>
    )
}

export default Collapse;