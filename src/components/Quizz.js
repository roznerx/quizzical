import React from 'react';
import './Quizz.css';
import Question from './Question';
import { nanoid } from 'nanoid'

export default function Quizz(props) {

    const [info, setInfo] = React.useState(undefined)
    //const [questions, setQuestions] = React.useState([]);
    //const [answers, setAnswers] = React.useState([]);

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple")
            .then(res => res.json())
            .then(data => setInfo(data.results));
    }, []);    

    let questions;

    if (info !== undefined) {
        questions = info.map(x => 
            <Question 
                key={nanoid()}
                question={x.question}
                answers={[...x.incorrect_answers, x.correct_answer]}
            />
        );
    }

    return (
    <div className='quizz-container'>
        {info === undefined ? <h1>loading!</h1> : questions}
        {info !== undefined && <button className='check-btn'>Check Answers</button>}
    </div>
    );
}