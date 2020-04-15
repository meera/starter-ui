import React from 'react';
import Header from './header';
import Footer from './footer';

import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../ui/Theme';

import {ThemeProvider} from '@material-ui/core/styles/';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    mainContainer: {
      height: "100vh"
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export default function MainLayout( {children}) {
    const classes = useStyles();

    return <>
        <ThemeProvider theme={theme}> 

        <CssBaseline />
        <Box flexDirection="column" display="flex" className={classes.mainContainer}>
        <Box>
        <Header/>
        <Toolbar />

        </Box>
        <Box flexGrow={1}  justify="center"   alignItems="center">
            <Grid container style={{height: "100%"}} justify= "center" direction="column" alignItems="center"> 
        {children}
        </Grid>
        </Box>

        <Box>
        <Footer/>

        </Box>
        </Box>
        </ThemeProvider>

        </>;
}

