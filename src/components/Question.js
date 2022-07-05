import React from 'react';
import './Question.css';
import { replacer } from './helpers';

export default function Question(props) {
    return (
        <div className='question-container'>
            <h2 className='question'>
                {replacer(props.question)}
            </h2>
        </div>
    );
};