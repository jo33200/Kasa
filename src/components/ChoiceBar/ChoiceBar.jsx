import React, { useState } from 'react';
import './ChoiceBar.scss'
import ArrowAbout from '../../assets/arrow_about.svg'

function ChoiceBar({ choice, text }) {
    const [isTextVisible, setIsTextVisible] = useState(false);

    const handleClick = () => {
        setIsTextVisible(!isTextVisible);
    }

    return (
        <div className="choice-bar-container">
            <div className={`choice-bar ${isTextVisible ? 'open' : ''}`}>
                <p className="choice-bar__name">{choice}</p>
                <img src={ArrowAbout} alt="flèche de selection" onClick={handleClick} />
            </div>
            {isTextVisible && <div className="choice-bar__text">{text}</div>}
        </div>
    )
}

export default ChoiceBar;