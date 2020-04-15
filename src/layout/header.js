import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import LanguageSelector from './LanguageSelector';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles((theme) => ({
   
    grow: {
      flexGrow: 1,
    },
    tab: {
        minWidth: 10,
        marginRight: 10
    },
    users: {
        marginLeft: 20,
        color: "white"
    }

  }));
  
  
export default function Header(props) {
    const classes = useStyles();
    const { t, i18n } = useTranslation();
    const [activeTab, setActiveTab] = React.useState(0);

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);

      };


    return (
        <AppBar>
            <Toolbar className={classes.grow}> 
                <Typography variant="h6" component={Link} to="/"> {t("AppName")} </Typography>
                
                <Button className={classes.users} component={Link} to="/user/list"> {t("Users")}</Button>
                <div className={classes.grow}></div>
                <LanguageSelector />
                <Tabs value={activeTab} onChange={handleTabChange}>
                    <Tab className={classes.tab} value={0} label="Login" component={Link} to="/login"/>
                    <Tab className={classes.tab}  value={1} label="Register"  component={Link} to="/register"/>
                </Tabs> 
            </Toolbar>
        </AppBar>
    )
}