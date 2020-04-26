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


export default function Logout(props) {

    const authContext = useContext(AuthContext);
    authContext.setAuth({ isLoggedIn: false });// TODO

    return <Redirect to='/login' /> ;

    
}