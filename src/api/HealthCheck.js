import React, { useState, useEffect} from "react";
import axios from "axios";
import {API_ENDPOINT} from "../constants";

export default  function HealthCheck(){

    const [loading, setLoading] = useState(true);
    const [serverStatus, setServerStatus] = useState({}); // empty object

    useEffect(() => {
        const fetchHealthCheck = async () => {
            const result = await axios(API_ENDPOINT + '/api/healthcheck')

            setServerStatus(result.data);
            setLoading(false);
        
        }
        fetchHealthCheck();
    }, []);

    return loading? <div> Loading.. </div> : (<> 
        <div> {serverStatus.message}</div>
       
        </>)
}