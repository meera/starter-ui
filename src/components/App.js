import React from 'react';
import Button from '@material-ui/core/Button';
import Header from '../layout/header';
import theme from '../ui/Theme';
import {ThemeProvider} from '@material-ui/core/styles/';

export default function App(props) {
    return <ThemeProvider theme={theme}> 
            <Header/>
            <Button variant="contained"> Click Me</Button>
            </ThemeProvider>
}   