import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import UserList from './components/UserList';
import HealthCheck from './api/HealthCheck';
import './i18n';
import TermsOfService from './pages/TermsOfService';
import Policy from './pages/Policy';
import AboutUs from './pages/AboutUs';

import Login from './pages/Login';
import Register from './pages/Register';
import Header from './layout/header';
import Footer from './layout/footer';
import MainLayout from './layout/MainLayout';
import NoLayout from './layout/NoLayout';
import Page404 from './pages/Page404'
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';



import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function RouteWrapper({
    component: Component, 
    layout: Layout, 
    ...rest
  }) {
    return (
      <Route {...rest} render={(props) =>
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      } />
    );
  }


ReactDOM.render(  


    <Router> 



        <Switch>
             <RouteWrapper path="/one" component={HealthCheck} layout={MainLayout} />

            <Route path="/healthcheck"> 
                <HealthCheck/>
            </Route>
            <RouteWrapper path="/user/list" layout={MainLayout} component={UserList}>
            </RouteWrapper>
            <RouteWrapper path="/terms" layout={MainLayout} component={TermsOfService}/> 
            <RouteWrapper path="/policy" layout={MainLayout} component={Policy}/> 
            <RouteWrapper path="/aboutus" layout={MainLayout} component={AboutUs}/> 


            <RouteWrapper path="/login"  layout={MainLayout} component={Login}/>
            <RouteWrapper path="/register"  layout={MainLayout} component={Register}/>
            <RouteWrapper exact path="/"  layout={MainLayout} component={App}/>
            <RouteWrapper path="*" layout={MainLayout} component={Page404}/>
              
        </Switch>
    </Router>
    

, 
    
    
    
    document.getElementById('root')
);