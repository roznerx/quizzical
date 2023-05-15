import { Button, Grid, Typography } from "@mui/material";
import { StartProps } from "../interfaces";
import { 
    startContainerStyles, startSubtitleStyles, startTitleStyles 
} from "../styles/start";
import { btnStyles } from "../styles/main";

export default function Start({ handleClick }: StartProps) {
    return (
        <Grid 
            container 
            sx={startContainerStyles}
        >
            <Typography sx={startTitleStyles}>
                Quizzical
            </Typography>
            <Typography sx={startSubtitleStyles}>
                Test your might!
            </Typography>
            <Button 
                sx={btnStyles} 
                onClick={handleClick}
            >
                Start Quizz
            </Button>
        </Grid>
    );
};
