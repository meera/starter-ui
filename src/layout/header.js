import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LanguageSelector from './LanguageSelector';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
   
    title: {
      flexGrow: 1,
    },
    tab: {
        minWidth: 10,
        marginRight: 10
    }
  }));
  
  
export default function Header(props) {
    const classes = useStyles();
    const { t, i18n } = useTranslation();

    return (
        <AppBar>
            <Toolbar> 
                <Typography variant="h6" className={classes.title}> {t("AppName")}</Typography>
                {/* <Tabs value={0}>
                    <Tab className={classes.tab} value={0} label="Login"/>
                    <Tab className={classes.tab}  value={1} label="Register"/>
                </Tabs> */}
                <LanguageSelector/>
            </Toolbar>
        </AppBar>
    )
}