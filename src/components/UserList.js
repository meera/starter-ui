import React, { useState, useEffect} from "react";
import axios from "axios";
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


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});
export default function UserList(props) {
    const [loading, setLoading] = useState(true);
    const [userList, setUserList] = useState([]); // empty object

    const classes = useStyles();

    const { t, i18n } = useTranslation();

    useEffect(() => {
        const fetchUserList = async () => {
            const result = await axios(API_ENDPOINT + '/api/user')

            setUserList(result.data);
            console.log(result.data);
            setLoading(false);
        
        }
        fetchUserList();
    }, []);
    
    function handleEdit(i)  {
        
        alert(`To be implemented ${i}, ${userList[i].givenName}`);

    }
    return (loading? <div> Loading... </div> :
    <TableContainer component={Paper}>

        <Table className={classes.table} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell align="right">Id </TableCell>
                    <TableCell align="right">Name</TableCell>
                    <TableCell align="right">Email</TableCell>
                    <TableCell align="right">Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {userList.map( (user, i) => (
                    <TableRow key={user.id}>
                        
                        <TableCell align="right">{user.id}</TableCell>
                        <TableCell align="right">{user.givenName}</TableCell>
                        <TableCell align="right">{user.userName}</TableCell>
                        <TableCell align="right">
                        <Button variant="contained" color="secondary" onClick={() => handleEdit(i)}> Edit</Button>
                        </TableCell>

                    </TableRow>
                ))}
            </TableBody>
        </Table>

    </TableContainer>)
}

