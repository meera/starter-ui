import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import  Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useState } from "react";
import axios from "axios";
import {API_ENDPOINT} from "../constants";

const useStyles = makeStyles( theme => ( {

    container: {
        height: "16em",
        width: "16em",
        padding: "2em"
    },
    loginButton: {
        marginTop: "2em"
    }

}) );
export default function Login(props) {

    const classes = useStyles();

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    function handleChange(event) {
        this.setState({value: event.target.value});
      }

    function handleSubmit(event) {
        alert('A name was submitted: ' + userName  + password);
        event.preventDefault();

        const result =  axios(
            {
                method: 'post',
                url: API_ENDPOINT + '/api/user/login',
                data: {
                    userName: 'm1@b.com',
                    userPassword: 'Foobar1!'
                }
              }).then( (result) => console.log(result) )
            
            

      }
    

    return  <Paper className={classes.container} direction="column"> 

                <Grid container  justify="center"   alignItems="center"> 
                    <Grid item>
                 <Typography> Login </Typography> 

                 </Grid>
                 <form onSubmit={handleSubmit}>
                 <TextField id="username" value={userName} label="User name" onChange={ (event) => setUserName(event.target.value)}  />

                 <TextField id="password" value={password} label="Password" onChange={ (event) => setPassword(event.target.value)}  />
                 <Button value="Submit" onClick={handleSubmit} className={classes.loginButton} variant="contained" color="primary"> Login </Button>
    </form>
                </Grid> 

                </Paper>
}