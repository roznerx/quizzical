import { useState, useEffect } from 'react';
import { Button, CircularProgress, Grid, Typography } from '@mui/material';
import axios from 'axios';
import Question from './Question';
import Answers from './Answers';
import { nanoid } from 'nanoid'
import { arrShuffle } from '../utils/helpers';
import { Info } from '../interfaces';
import { btnStyles } from '../styles/main';

export default function Quizz() {
    const [info, setInfo] = useState<Info[] | undefined>(undefined);

    useEffect(() => {
        axios.get("https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple")
        .then(res => setInfo(res.data.results))
        .catch(error => console.error(error));
    }, []);

    let answerArr = (a1, a2) => {
        let arr = arrShuffle([...a1, a2]);
        let myObj = {...arr};
    };

    return (
        <Grid container sx={{justifyContent: !info ? "center" : "flex-start", gap: "2rem"}}>
            {
                !info ? 
                <CircularProgress size={"10rem"} sx={{color: "#293264"}}/> : 
                info.map((i) => {
                    return (
                        <Grid 
                            container
                            key={nanoid()}
                            sx={{display: "flex", flexDirection: "column", gap: "1rem"}}
                        >
                            <Question 
                                key={nanoid()}
                                question={i.question}
                            />
                            <Answers
                                key={nanoid()}
                                answers={arrShuffle([...i.incorrect_answers, i.correct_answer])}
                                correctAnswer={i.correct_answer}
                            />
                        </Grid>
                    )
                })
            }
            {
                info && 
                <Button sx={btnStyles}>
                    Check Answers
                </Button>
            }
        </Grid>
    );
};
