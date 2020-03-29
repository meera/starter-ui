import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useTranslation } from 'react-i18next';

export default function LanguageSelector() {

  const { t, i18n } = useTranslation();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const languages = {
      "en": "English",
     "mr": "मराठी"
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event, index, code) => {
    setSelectedIndex(index);
    i18n.changeLanguage(code);

    setAnchorEl(null);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        {languages[i18n.language]}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        
        {
           Object.keys(languages).map( (code, index) => {
               return <MenuItem key={index}  
                            selected={index === selectedIndex}
                            onClick={(event) => handleClose(event, index, code)} >

                        {languages[code]} 
                        </MenuItem> })
        }








      </Menu>
    </div>
  );
}