import React from 'react';
import Header from './header';
import Footer from './footer';

import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../ui/Theme';

import {ThemeProvider} from '@material-ui/core/styles/';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';


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
export default function NoLayout( {children}) {

  const classes = useStyles();


//     return  <div >
//     <Box style={{ height: '100%' }} display="flex" flexDirection="column">

// <Box> 
//        <Typography> Header</Typography>
//        </Box> 
//        <Box flexGrow={1}>
//         {children}
//         </Box>
//        <Box item> 
//        <Typography> Footer</Typography>
//        </Box> 
//         </Box>
//         </div>


return (


  <Box flexDirection="column" display="flex" className={classes.mainContainer}>
    <Box>  
      <Typography> Hello Terms</Typography>
      </Box>
    <Box flexGrow={1}>
      <Typography> Main container</Typography>
      </Box>
      <Box> 
      <Typography> Hello 2 Terms</Typography>
      </Box>
    </Box> 
)
{/* <Grid
  container
  direction="column"
  alignItems="flex-start"
  justify="flex-start"

  className={classes.mainContainer}
>   */}
  // </Grid>

    // <div style={{ height: '100vh', backgroundColor:"blue"}}>
    //     <Box flexDirection="column" display="flex" bgcolor="background.paper">
    //         <Box  p={1}  flexGrow={1} bgcolor="yellow">
    //         Item 1
    //         </Box>
    //         <Box p={1} bgcolor="green"> Item 2</Box>
    //     </Box>
    //   {/* <Box flexDirection="column" display="flex" bgcolor="background.paper">
        
    //     <Box  bgcolor="grey.300">
    //       Item 2
    //     </Box>
    //     <Box p={1} bgcolor="grey.300">
    //       Item 3
    //     </Box>
    //   </Box> */}
    // </div>

}

