import { Grid, Typography } from '@mui/material';
import { replacer } from '../utils/helpers';
import { QuestionProps } from '../interfaces';
import { questionStyles } from '../styles/question';

export default function Question({ question }: QuestionProps) {
    return (
        <Grid container sx={{justifyContent: "flex-start !important"}}>
            <Typography sx={questionStyles}>
                {replacer(question)}
            </Typography>
        </Grid>
    );
};
