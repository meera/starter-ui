import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import {Link} from "react-router-dom";
import Divider from '@material-ui/core/Divider';



const useStyles = makeStyles( theme => ({
    footer : {
        backgroundColor: theme.palette.grey[300],
        width: "100%",
        padding: "20px"
    },
    mainContainer: {
        top: "10px"
    },
    link: {
        color: theme.palette.primary.dark,
        textDecoration: "none",
        paddingLeft: "15px",
        paddingRight: "15px"

    }
}));

export default function Footer() {

    const classes = useStyles();

   

 return <footer className={classes.footer}>
<Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
  spacing={2}>
      <Typography component={Link} to="/aboutus" className={classes.link}>About Us </Typography>
      <Divider orientation="vertical" flexItem />


      <Typography component={Link} to="/terms" className={classes.link}>Term Of Service</Typography> 
      <Divider orientation="vertical" flexItem />

      <Typography component={Link} to="/policy" className={classes.link}> Policy </Typography> 
      <Divider orientation="vertical" flexItem />

      <Typography component={Link} to="/contactus" className={classes.link}>Contact Us </Typography>

        </Grid>
        </footer> 
}