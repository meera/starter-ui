import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import HealthCheck from './api/HealthCheck';
import './i18n';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";



ReactDOM.render(  
    <Router> 
        <Switch>
            <Route path="/healthcheck"> 
                <HealthCheck/>
            </Route>
            <Route home="/">
                <App/>
            </Route>
        </Switch>
    </Router>, 
    
    
    
    document.getElementById('root')
);