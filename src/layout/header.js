import React, {useContext} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import LanguageSelector from './LanguageSelector';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import { AuthContext } from '../context/AuthContext';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({

    title: {
        textDecoration: "inherit",
        color: "inherit"
    },
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
    const authContext = useContext(AuthContext);
    console.log(' User context ', authContext);
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);

    };

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
      };
    

      const handleClose = (event) => {
        setOpen(false);
      };
      let location = useLocation();

    let tab = false; //If tag is inactive, initial value is false.
    if( location.pathname === '/login')     
      tab = 0;

   if( location.pathname === '/register') 
      tab = 1;
    const [activeTab, setActiveTab] = React.useState(tab);

    return (
        <AppBar>
            <Toolbar className={classes.grow}>
                <Typography className={classes.title} variant="h6" component={Link} to="/"> {t("AppName")} </Typography>

                <Button className={classes.users} component={Link} to="/user/list"> {t("Users")}</Button>
                <div className={classes.grow}></div>
                <LanguageSelector />


                {authContext.auth.isLoggedIn ?
                    <>
                        <MenuItem ref={anchorRef}>
                            <IconButton
                                color="inherit"
                                aria-label="Account of current user"
                                onClick={handleToggle}>
                                <AccountCircle />
                            </IconButton>
                        </MenuItem>
                        <Popper open={open} anchorEl={anchorRef.current}>
                            <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                            <MenuList autoFocusItem={open} id="menu-list-grow" >
                                <MenuItem component={Link} to="/userprofile" onClick={handleClose}>Profile</MenuItem>
                                <MenuItem component={Link} to="/logout" onClick={handleClose}>Logout</MenuItem>
                            </MenuList>
                            </ClickAwayListener>
                            </Paper>
                        </Popper>
                    </>
                    :
                    <Tabs value={activeTab} onChange={handleTabChange}>
                        <Tab className={classes.tab} value={0} label="Login" component={Link} to="/login" />
                        <Tab className={classes.tab} value={1} label="Register" component={Link} to="/register" />
                    </Tabs> 
                
                
                }
            </Toolbar>
        </AppBar>
    )
}