import React from "react";
import Head from 'next/head';
import { ThemeProvider, createTheme } from "@mui/material";
import { green } from "@mui/material/colors";
import './App.css';

const outerTheme = createTheme({
    palette: {
        primary: {
            main: green[50],
        },
    },
});

function MyApp({ Component, pageProps }: any) {
    return (
        <ThemeProvider theme={outerTheme}>
            <Head>
                <title>Quizzical</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <Component {...pageProps}/>
        </ThemeProvider>
    );
};

export default MyApp;
