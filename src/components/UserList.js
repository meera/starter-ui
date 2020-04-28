import React, { useState, useEffect} from "react";
import axios from "axios";
import socketIOClient from "socket.io-client";
import {API_ENDPOINT} from "../constants";

import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    tableContainer: {
        maxWidth: "50em",
        marginLeft: 200,
        marginTop: 20

    },
    table: {
        width: 650,
    }
   
});


const convertArrayToObject = (array, key) => {
    const initialValue = {};
    return array.reduce((obj, item) => {
      return {
        ...obj,
        [item[key]]: item,
      };
    }, initialValue);
  };

  const socket = socketIOClient(API_ENDPOINT + '/css');

export default function UserList(props) {
    const [loading, setLoading] = useState(true);
    const [userList, setUserList] = useState({});
    const classes = useStyles();
    const { t, i18n } = useTranslation();



    useEffect(() => {
        
        axios.get(API_ENDPOINT + '/api/user').then((result)  => {
            const data = convertArrayToObject( result.data, "id")

            setUserList(data);
            setLoading(false);
            
        });
    }, []);

        


        socket.on("refresh-onlineuserslist", data => {

            const fetchUserOnlineStatus = async () => {
                const result = await axios(API_ENDPOINT + '/api/user/online/all');

                // 
                result.data.map( (key ) => {
                    
                                        
                    if( userList[key] != null) {
                         const newuserList ={ ...userList};
                        newuserList[key].onlineStatus = true;
                         setUserList( newuserList );
                        }
                         
                
                }); 
                //setUserList(result.data);
            }
            fetchUserOnlineStatus();

        });

    
    function handleEdit(key)  {
        
        alert(`To be implemented ${key}, ${userList[key].givenName}`);

    }

    return (loading? <div> Loading... </div> :
    <TableContainer className={classes.tableContainer} component={Paper}>

        <Table className={classes.table} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Id </TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {Object.keys( userList).map( (key) => { 
                    const user = userList[key];
                    return (

                    <TableRow key={user.id}>
                        
                        <TableCell>{user.id}</TableCell>
                        <TableCell>
                        <Grid
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="center">
                                <Grid item>
                            <FiberManualRecordIcon style={{
                                marginRight: 5,
                                fill: ( user.onlineStatus === true ? "green": "grey")}} />
                                 </Grid>
                                 <Grid item>
                            {user.givenName}
                            </Grid>
                            </Grid>
                            </TableCell>
                        <TableCell>{user.userName}</TableCell>
                        <TableCell>
                        <Button variant="contained" color="secondary" onClick={() => handleEdit(key)}> Edit</Button>
                        </TableCell>

                    </TableRow>
                )} )}
            </TableBody>
        </Table>

    </TableContainer>)
}

