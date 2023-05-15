import { useEffect, useState } from 'react';
import { arrShuffle, replacer } from '../utils/helpers';
import { nanoid } from 'nanoid';
import { Button, Grid } from '@mui/material';
import { AnswersProps, SelectedAnswer, Answers } from '../interfaces';
import { answerBtnStyles } from '../styles/answers';

export default function Answers({ answers, setSelectedAnswers, correctAnswer, check }: AnswersProps) {
    const [selectedAnswer, setSelectedAnswer] = useState<number>(null);
    const [selectedAnswerText, setSelectedAnswerText] = useState<string>("");
    const [answersArr, setAnswersArr] = useState<Answers>();
    
    function handleClick(answersIndex: number, a: string, index: number) {
        setSelectedAnswer(index);
        setSelectedAnswerText(a);
        setSelectedAnswers((prevState: SelectedAnswer[]) => {
            let prevArr = [...prevState];
            prevArr[answersIndex].answer = a;
            return prevArr;
        });
    };

    useEffect(() => {
        if (!answersArr) {
            const { index, answers: prevArr } = answers;
            const shuffledArr = arrShuffle(prevArr);
            setAnswersArr({ index, answers: shuffledArr });
        }
    }, [answers]);

    return (
        <Grid container sx={{display: "flex", flexDirection: "row", gap: "1rem"}}>
            {
                answersArr && answersArr.answers.map((a, index) => {
                    const answersIndex = answersArr.index;
                    return (
                        <Button
                            key={index} 
                            onClick={() => handleClick(answersIndex, a, index)}
                            sx={
                                !check ?
                                selectedAnswer !== index ? 
                                answerBtnStyles : 
                                {...answerBtnStyles, backgroundColor: "#D6DBF5"} :
                                    
                                selectedAnswer == index && selectedAnswerText === correctAnswer ?
                                {...answerBtnStyles, backgroundColor: "#94D7A2"} :
                                selectedAnswer == index && selectedAnswerText != correctAnswer ?
                                {...answerBtnStyles, backgroundColor: "#F8BCBC"} :
                                a === correctAnswer ? 
                                {...answerBtnStyles, backgroundColor: "#94D7A2"} :
                                {...answerBtnStyles, color: "#4D5B9E", border: "1px solid #4D5B9E"} 
                            }
                        >
                            {replacer(a)}
                        </Button>
                    )
                })
            }
        </Grid>
    );
};
