import { useState } from 'react';
import { Grid } from '@mui/material';
import Start from '../components/Start';
import Quizz from '../components/Quizz';
import { mainContainerStyles } from '../styles/main';

export default function MainPage() {
    const [start, setStart] = useState(true);

    return (
        <Grid 
            container 
            sx={
                start ? 
                mainContainerStyles : 
                {...mainContainerStyles, top: "10vh"}
            }
        >
            <Grid item xs={3} />
            <Grid 
                item 
                xs={6} 
                sx={{
                    justifyContent: "center", 
                    alignItems: "center"
                }}
            >
                {
                    start && 
                    <Start
                        handleClick={() => setStart(false)}
                    />
                }
                {
                    !start && <Quizz />
                }
            </Grid>
            <Grid item xs={3} />
        </Grid>
    );
};
