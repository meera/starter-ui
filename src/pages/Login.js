import React, { useContext } from 'react';
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
import { AuthContext } from '../context/AuthContext';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({

    container: {
        height: "16em",
        width: "16em",
        padding: "2em",
        marginBottom: "1em"
    },
    loginButton: {
        marginTop: "2em"
    }

}));
export default function Login(props) {

    const authContext = useContext(AuthContext);

    //console.log(' User context ', userContext.user);
    const classes = useStyles();
    const [doneLoggedIn, setDonedLoggedIn] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { t, i18n } = useTranslation();


    function handleChange(event) {
        this.setState({ value: event.target.value });
    }

    function handleSubmit(event) {
        event.preventDefault();

        const result = axios(
            {
                method: 'post',
                url: API_ENDPOINT + '/api/user/login',
                data: {
                    userName: userName,
                    userPassword: password
                }
            }).then((result, config) => {
                console.log('Config ', config);
                //{"message":"Login is successful.",
                // "result":{"id":102,"userName":"m1@b.com","givenName":"m1","roles":["USER"],"profileImage":"default-user.png"}}
                authContext.setUser(result.data.result);
                authContext.setAuth({ isLoggedIn: true, authToken: '1212' });// TODO
                setDonedLoggedIn(true);
            }

            )
            .catch((error) => { console.log(error); setError(error.message); })



    }


    return doneLoggedIn ?
        <Redirect to='/home' /> :
        <>
            <Paper className={classes.container} direction="column">

                <Grid container justify="center" alignItems="center">
                    <Grid item>
                        <Typography> Login </Typography>

                    </Grid>
                    <form onSubmit={handleSubmit}>
                        <Typography color="error"> {error} </Typography>
                        <TextField id="username" value={userName} autoComplete="username" label="User name" onChange={(event) => setUserName(event.target.value)} />

                        <TextField id="password" value={password}
                            label="Password"
                            onChange={(event) => setPassword(event.target.value)}
                            type="password"
                            autoComplete="current-password" />

                        <Button value="Submit" onClick={handleSubmit} className={classes.loginButton} variant="contained" color="primary"> Login </Button>
                    </form>


                </Grid>


            </Paper>

        <Typography component={Link} to="/register" > {t("GoRegister")}  </Typography>
    </>

}