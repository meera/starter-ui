import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import UserList from './components/UserList';
import HealthCheck from './api/HealthCheck';
import './i18n';
import TermsOfService from './pages/TermsOfService';
import Policy from './pages/Policy';
import Header from './layout/header';
import theme from './ui/Theme';
import CssBaseline from '@material-ui/core/CssBaseline';

import {ThemeProvider} from '@material-ui/core/styles/';
import Toolbar from '@material-ui/core/Toolbar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";



ReactDOM.render(  

    <ThemeProvider theme={theme}> 
    <CssBaseline />

    <Router> 


    <Header/>
    <Toolbar />
        <Switch>
            <Route path="/healthcheck"> 
                <HealthCheck/>
            </Route>
            <Route path="/user/list">
                <UserList></UserList>
            </Route>
            <Route path="/terms"> 
                <TermsOfService/>
            </Route>
            <Route path="/policy">
                <Policy/>
            </Route>
            <Route path="/">
                <App/>
            </Route>
        </Switch>
    </Router>

    </ThemeProvider>
, 
    
    
    
    document.getElementById('root')
);