import React, {useContext} from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useState } from "react";
import axios from "axios";
import { API_ENDPOINT } from "../constants";
import { Redirect } from 'react-router-dom';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import validator from "email-validator";
import { AuthContext } from '../context/AuthContext';

const useStyles = makeStyles(theme => ({

    container: {
        height: "30em",
        width: "30em",
        padding: "2em",
        marginBottom: "1em"
    },
    loginButton: {
        marginTop: "2em"
    },
    acceptTCText: {
        color: theme.palette.text.disabled,
    } 
    

}));
export default function Register(props) {

    const classes = useStyles();
    const [doneLoggedIn, setDoneLoggedIn] = useState(false);
    const [userName, setUserName] = useState("");
    const [userNameHelperText, setUserNameHelperText] = useState("");
    const [givenName, setGivenName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordHelperText, setPasswordHelperText] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("");

    const [error, setError] = useState("");
    const [acceptTC, setAcceptTC] = useState(false);


    const authContext = useContext(AuthContext);

    const { t, i18n } = useTranslation();

    function handleAcceptTcCheckBox(event) {


        setAcceptTC(event.target.checked );
    }

    function handleSubmit(event) {
        event.preventDefault();


        /**
         *  Payload
            acceptTC: true | false
            confirmPassword: "String!"
            givenName: "String"
            userName: "String"
            userPassword: "something"
         */
        const result = axios(
            {
                method: 'post',
                url: API_ENDPOINT + '/api/user/register',
                data: {
                    acceptTC,
                    confirmPassword,
                    userPassword: password,
                    userName,
                    givenName: givenName,

                }
            }).then((result) => { console.log(result); setDoneLoggedIn(true) 
                authContext.setUser(result.data.result);
                authContext.setAuth({ isLoggedIn: true, authToken: '1212' });// TODO
            })
            .catch((error) => { console.log(error.response); setError(error.response.data.message); })



    }

    function handleName(event) {

         setUserName(event.target.value);
         if (! validator.validate(event.target.value))
            setUserNameHelperText("Email format not right");
        else
             setUserNameHelperText("");



    }

    return doneLoggedIn ?
        <Redirect to='/home' /> :
        <>

            <Paper className={classes.container} >
                    <Grid container justify="center">
                        <Typography> Register </Typography>

                    <Typography color="error"> {error} </Typography>
                    <TextField fullWidth id="name" required value={givenName} label="Name" onChange={(event) => setGivenName(event.target.value)}  />
                    <TextField fullWidth id="username" 
                                required
                                 value={userName} 
                                 label="User name (Your email)" 
                                 helperText={userNameHelperText}
                                 error={userNameHelperText.length == 0 ? false : true }
                                 onChange={handleName} 
                                  
                                 />

                    <TextField fullWidth id="password" required value={password}
                        label="Password"
                        onChange={(event) => setPassword(event.target.value)}
                        type="password"
                        autoComplete="current-password" />


                    <TextField fullWidth id="confirm-password" required value={confirmPassword}
                        label="Confirm Password"
                        onChange={(event) => setConfirmPassword(event.target.value)}
                        type="password"
                        autoComplete="confirm-password" />

                    <Grid container align="flex-start">
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={acceptTC}
                                onChange={handleAcceptTcCheckBox}
                                name="acceptTC"
                                color="primary"
                            />
                        }
                        label="I Agree"
                    />
                    </Grid>

<Typography className={classes.acceptTCText}> By clicking Agree, you agree to our Terms, Data Policy and Cookies Policy.</Typography>

                    <Grid item>
                        <Button value="Register" onClick={handleSubmit} className={classes.loginButton} variant="contained" color="primary"> Register </Button>

                    </Grid>
                    </Grid>
            </Paper>

            <Typography component={Link} to="/login" > {t("GoLogin")}  </Typography>
        </>
}