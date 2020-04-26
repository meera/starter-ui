import React from 'react';
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

const useStyles = makeStyles(theme => ({

    container: {
        height: "25em",
        width: "20em",
        padding: "2em",
        marginBottom: "1em"
    },
    loginButton: {
        marginTop: "2em"
    }

}));
export default function Register(props) {

    const classes = useStyles();
    const [loggedIn, setLoggedIn] = useState(false);
    const [userName, setUserName] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const { t, i18n } = useTranslation();

    function handleChange(event) {
        this.setState({ value: event.target.value });
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
                    userName: userName,
                    userPassword: password
                }
            }).then((result) => { console.log(result); setLoggedIn(true) })
            .catch((error) => { console.log(error); setError(error.message); })



    }


    return loggedIn ?
        <Redirect to='/home' /> :
        <>

            <Paper className={classes.container} direction="column" justify="center" alignItems="center">

                <Grid container justify="center" alignItems="center">
                    <Grid item>
                        <Typography> Register </Typography>

                    </Grid>
                    <Typography color="error"> {error} </Typography>
                    <TextField fullWidth id="name" value={name} label="Name" onChange={(event) => setName(event.target.value)} />
                    <TextField fullWidth id="username" value={userName} label="User name (Your email)" onChange={(event) => setUserName(event.target.value)} />

                    <TextField fullWidth id="password" value={password}
                        label="Password"
                        onChange={(event) => setPassword(event.target.value)}
                        type="password"
                        autoComplete="current-password" />


                    <TextField fullWidth id="confirm-password" value={password}
                        label="Confirm Password"
                        onChange={(event) => setPassword(event.target.value)}
                        type="password"
                        autoComplete="confirm-password" />


                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={true}
                                //onChange={handleChange}
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label="Primary"
                    />
                    <Grid item>
                        <Button value="Register" onClick={handleSubmit} className={classes.loginButton} variant="contained" color="primary"> Register </Button>

                    </Grid>
                </Grid>

            </Paper>

            <Typography component={Link} to="/login" > {t("GoLogin")}  </Typography>
        </>
}