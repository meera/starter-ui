import React from 'react';
import Button from '@material-ui/core/Button';
import Header from '../layout/header';
import theme from '../ui/Theme';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import {ThemeProvider} from '@material-ui/core/styles/';
import Toolbar from '@material-ui/core/Toolbar';
import { useTranslation } from 'react-i18next';

export default function App(props) {
    const { t, i18n } = useTranslation();

    return (<>
    
            <ThemeProvider theme={theme}> 
            <CssBaseline />

            <Header/>
            <Toolbar />
            <Container>

             <Button variant="contained"> {t('Hello')}</Button>
            </Container>
            </ThemeProvider>
            </>)
}   

