import { useState, useEffect } from 'react';
import { Button, CircularProgress, Grid, Typography } from '@mui/material';
import axios from 'axios';
import Question from './Question';
import Answers from './Answers';
import { SelectedAnswer, Info, QuizzProps } from '../interfaces';
import { btnStyles } from '../styles/main';
import { resultGridStyles, resultTextStyles } from '../styles/quizz';

export default function Quizz({ openSnackbar}: QuizzProps) {
    const [info, setInfo] = useState<Info[] | undefined>(undefined);
    const [check, setCheck] = useState<boolean>(false);
    const [correctAnswers, setCorrectAnswers] = useState<SelectedAnswer[] | undefined>();
    const [numberOfCorrectAnswers, setNumberOfCorrectAnswers] = useState<number>(0);
    const [selectedAnswers, setSelectedAnswers] = useState<SelectedAnswer[] | []>([
        { arrIndex: 0, answer: ""}, 
        { arrIndex: 1, answer: ""}, 
        { arrIndex: 2, answer: ""}, 
        { arrIndex: 3, answer: ""}, 
        { arrIndex: 4, answer: ""}, 
    ]);

    const getInfo = async () => await axios
        .get("https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple")
        .then((res) => {
            const data = res.data.results;
            setInfo(data);
        })
        .catch(error => console.error(error));

    function gameReset() {
        setInfo(undefined);
        setCheck(false);
        setCorrectAnswers(undefined);
        setNumberOfCorrectAnswers(0);
        setSelectedAnswers([
            { arrIndex: 0, answer: ""}, 
            { arrIndex: 1, answer: ""}, 
            { arrIndex: 2, answer: ""}, 
            { arrIndex: 3, answer: ""}, 
            { arrIndex: 4, answer: ""}, 
        ]);
        getInfo();
    };

    const checkAnswers = () => {
        if (selectedAnswers) {
            if (selectedAnswers!.some((sa: SelectedAnswer) => sa.answer! === "")) {
                openSnackbar("Answer all questions in order to continue", "error");
            } else {
                setCheck(true);
                let rightAnswers = 0;
                selectedAnswers.forEach((sa: SelectedAnswer) => {
                    correctAnswers.forEach((ca: SelectedAnswer) => {
                        if (sa.answer! == ca.answer) {
                            rightAnswers++;
                        };
                    });
                });
                setNumberOfCorrectAnswers(rightAnswers);
            };
        };
    };

    useEffect(() => {
        getInfo();
    }, []);

    useEffect(() => {
        let answers = [];
        if (info) {
            info.forEach((i, index) => {
                answers.push({
                    index: index,
                    answer: i.correct_answer
                });
            });
        };
        setCorrectAnswers(answers);
    }, [info]);
    
    return (
        <Grid container sx={{justifyContent: !info ? "center" : "flex-start", gap: "2rem"}}>
            {
                !info ? 
                <CircularProgress size={"10rem"} sx={{color: "#293264", mt: "20vh"}}/> : 
                info.map((i, index) => {
                    return (
                        <Grid
                            container
                            key={`question-${index}`}
                            sx={{display: "flex", flexDirection: "column", gap: "1rem"}}
                        >
                            <Question 
                                key={index}
                                question={i.question}
                            />
                            <Answers
                                key={`answers-${index}`}
                                answers={{
                                    index: index,
                                    answers: [...i.incorrect_answers, i.correct_answer]
                                }}
                                correctAnswer={i.correct_answer}
                                setSelectedAnswers={setSelectedAnswers}
                                check={check}
                            />
                        </Grid>
                    )
                })
            }
            {   
                !check ?
                info && 
                <Button sx={btnStyles} onClick={checkAnswers}>
                    Check Answers
                </Button> :
                <Grid container sx={resultGridStyles}>
                    <Typography sx={resultTextStyles}>
                        {`You scored ${numberOfCorrectAnswers}/5 correct answers`}
                    </Typography>
                    <Button sx={btnStyles} onClick={gameReset}>Play again</Button>
                </Grid>
            }
        </Grid>
    );
};
