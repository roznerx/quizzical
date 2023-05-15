import { useState } from 'react';
import { Alert, AlertColor, Grid, Snackbar } from '@mui/material';
import Start from '../components/Start';
import Quizz from '../components/Quizz';
import { mainContainerStyles } from '../styles/main';

export default function MainPage() {
    const [start, setStart] = useState(true);
    const [snackbarMessage, setSnackbarMessage] = useState<string>();
    const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
    const [snackbarSeverity, setSnackbarSeverity] = useState<AlertColor>();
    
    function openSnackbar(message: string, severity: AlertColor) {
        setSnackbarMessage(message)
        setSnackbarSeverity(severity);
        setSnackbarOpen(true);
    };

    return (
        <>
            {
                snackbarOpen &&
                <Snackbar
                    anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                    open={snackbarOpen}
                    autoHideDuration={3000}
                    onClose={() => setSnackbarOpen(false)}
                >
                    <Alert severity={snackbarSeverity} variant="filled">
                        {snackbarMessage}
                    </Alert>
                </Snackbar>
            }
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
                        <Start handleClick={() => setStart(false)} />
                    }
                    {
                        !start && <Quizz openSnackbar={openSnackbar} />
                    }
                </Grid>
                <Grid item xs={3} />
            </Grid>
        </>
    );
};
