import React from 'react';

import {useLocation} from "react-router-dom";

export default function Page404() {
    let location = useLocation();

    return <p>Page Not found <code>{location.pathname}</code> </p>
}