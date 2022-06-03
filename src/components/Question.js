import React from 'react';
import './Question.css';
import { randomArrayShuffle , replacer } from './helpers';
import { nanoid } from 'nanoid';

export default function Question(props) {
    let allAnswers = randomArrayShuffle(props.answers);
    return (
    <div className='question-container'>
        <h2 className='question'>{replacer(props.question)
            }</h2>
        <div className='answers-container'>
            {allAnswers.map(a => <button className='answer' key={nanoid()}>{replacer(a)}</button>)}
        </div>
    </div>
    );
}