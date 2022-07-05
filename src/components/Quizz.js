import React from 'react';
import './Quizz.css';
import Question from './Question';
import Answers from './Answers';
import { nanoid } from 'nanoid'
import { arrShuffle } from './helpers';

export default function Quizz(props) {

    const [info, setInfo] = React.useState(undefined)

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple")
            .then(res => res.json())
            .then(data => setInfo(data.results));
    }, []);    

    let answerArr = (a1, a2) => {
        let arr = arrShuffle([...a1, a2]);
        let myObj = {...arr};
        

    }

    let questions;

    if (info !== undefined) {
        questions = info.map(x => 
            <div key={nanoid()}>
                <Question 
                    key={nanoid()}
                    question={x.question}
                />
                <Answers
                    key={nanoid()}
                    //answers={arrShuffle([...x.incorrect_answers, x.correct_answer])}
                    correctAnswer={x.correct_answer}
                />
            </div>
        );
    }

    return (
    <div className='quizz-container'>
        {info === undefined ? <h1>loading!</h1> : questions}
        {info !== undefined && <button className='check-btn'>Check Answers</button>}
    </div>
    );
}