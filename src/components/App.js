import React from 'react';
import  '../i18n';
import UserList from '../components/UserList';
import HealthCheck from '../api/HealthCheck';
import TermsOfService from '../pages/TermsOfService';
import Policy from '../pages/Policy';
import AboutUs from '../pages/AboutUs'
import ContactUs from '../pages/ContactUs';
import Home from '../pages/Home';

import Login from '../pages/Login';
import Logout from '../pages/Logout';
import UserProfile from '../pages/UserProfile';

import Register from '../pages/Register';
import MainLayout from '../layout/MainLayout';
import Page404 from '../pages/Page404'
import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router,   Switch,  Route } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';

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

export default function App(props) {
    const { t, i18n } = useTranslation();

    const [user, setUser] = React.useState();

    const [auth, setAuth] = React.useState({isLoggedIn: false});

    return ( <AuthContext.Provider value={ { user, setUser, auth, setAuth}}> 
        <Router> 



        <Switch>
             <RouteWrapper path="/one" component={HealthCheck} layout={MainLayout} />

            <Route path="/healthcheck"> 
                <HealthCheck/>
            </Route>
            <RouteWrapper path="/user/list" layout={MainLayout} component={UserList}>
            </RouteWrapper>

            <RouteWrapper path="/home"  layout={MainLayout} component={Home}/>

            <RouteWrapper path="/terms" layout={MainLayout} component={TermsOfService}/> 
            <RouteWrapper path="/policy" layout={MainLayout} component={Policy}/> 
            <RouteWrapper path="/aboutus" layout={MainLayout} component={AboutUs}/> 
            <RouteWrapper path="/contactus" layout={MainLayout} component={ContactUs}/> 

            <RouteWrapper path="/login"  layout={MainLayout} component={Login}/>
            <RouteWrapper path="/logout"  layout={MainLayout} component={Logout}/>
            <RouteWrapper path="/userprofile" layout={MainLayout} component={UserProfile}/> 

            <RouteWrapper path="/register"  layout={MainLayout} component={Register}/>
            <RouteWrapper exact path="/"  layout={MainLayout} component={Home}/>
            <RouteWrapper path="*" layout={MainLayout} component={Page404}/>
              
        </Switch>
    </Router>
    </AuthContext.Provider> 
)
}   

