import React from 'react';
import Button from '@material-ui/core/Button';

import { useTranslation } from 'react-i18next';

export default function App(props) {
    const { t, i18n } = useTranslation();

    return (<>
   
    <Button variant="contained"> {t('Hello')}</Button>
   
            </>)
}   

