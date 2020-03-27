import React, { useState, useEffect} from "react";
import axios from "axios";

export default  function HealthCheck(){

    const [loading, setLoading] = useState(true);
    const [serverStatus, setServerStatus] = useState({}); // empty object

    useEffect(() => {
        const fetchHealthCheck = async () => {
            const result = await axios("http://localhost:3000/api/healthcheck") // TODO Move  this

            setServerStatus(result.data);
            setLoading(false);
        
        }
        fetchHealthCheck();
    }, []);

    return loading? <div> Loading.. </div> : (<> 
        <div> {serverStatus.message}</div>
        <div> FOo </div>
        <div> {process.env.API_HOST}</div>
        </>)
}