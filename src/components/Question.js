import React from 'react';
import './Question.css';
import { replacer } from './helpers';
import { nanoid } from 'nanoid';

export default function Question(props) {
    
    const [click, setClick] = React.useState(false);
    const handleClick = () => setClick(prevState => !prevState);

    return (
    <div className='question-container'>
        <h2 className='question'>
            {replacer(props.question)}
        </h2>
        <div className='answers-container'>
            {props.answers
                .map(function(a) {
                    return <button 
                                className='answer' 
                                key={nanoid()} 
                                onClick={handleClick}
                                style={{
                                    backgroundColor : click ? '#D6DBF5' : ''
                                }}
                            >
                                {replacer(a)}
                            </button>
                })
            }
        </div>
    </div>
    );
}