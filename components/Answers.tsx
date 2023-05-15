import { useState } from 'react';
import { replacer } from '../utils/helpers';
import { nanoid } from 'nanoid';
import { Button, Grid } from '@mui/material';
import { AnswersProps } from '../interfaces';
import { answerBtnStyles } from '../styles/answers';

export default function Answers({ answers, correctAnswer}: AnswersProps) {
    const [selectedAnswer, setSelectedAnswer] = useState<number>(null);
    const handleClick = (index: number) => {setSelectedAnswer(index)};

    return (
        <Grid container sx={{display: "flex", flexDirection: "row", gap: "1rem"}}>
            {
                answers.map((a, index) => {
                    return (
                        <Button
                            key={index} 
                            onClick={() => handleClick(index)}
                            sx={
                                selectedAnswer !== index ? 
                                answerBtnStyles : 
                                {...answerBtnStyles, backgroundColor: "#D6DBF5"}
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
