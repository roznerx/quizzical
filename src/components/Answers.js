import React from 'react';
import './Answers.css';
import { replacer } from './helpers';
import { nanoid } from 'nanoid';

export default function Answers(props) {


    const [click, setClick] = React.useState(false);
    const handleClick = () => setClick(prevState => !prevState);


    (console.table(props))




    return (
        <div className='answers-container'>
            
            {props.answers.map(function(a) {
                return <button 
                            className='answer' 
                            onClick={() => handleClick()}
                            style={{
                                backgroundColor : click ? 'red' : ''
                            }}
                        >
                    {replacer(a)}
                </button>})
            }
        </div>
    )
};

//#D6DBF5