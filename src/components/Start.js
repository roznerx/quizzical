import React from 'react';
import './Start.css';

export default function Start(props) {
    return (
    <div className='start-container'>
        <h1 className='start-title'>Quizzical</h1>
        <h4 className='start-description'>Test your might!</h4>
        <button className='start-btn' onClick={props.handleClick}>Start Quizz</button>
    </div>
    );
}