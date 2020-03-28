import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


export default function Header(props) {
    return (
        <AppBar>
            <Toolbar> 
                <Typography variant="h3">Starter App</Typography></Toolbar>
        </AppBar>
    )
}