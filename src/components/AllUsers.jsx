
import { useEffect, useState } from "react";

import { Button, Table, TableBody, TableCell, TableHead, TableRow, styled } from "@mui/material";

import { getUsers, deleteUser } from "../service/api";

import { Link } from "react-router-dom";

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px auto 0 auto;
`
const THead = styled(TableRow)`
    background: #000;
    & > th {
        color: #fff;
        font-size: 20px;
    }
`

const TBody = styled(TableRow)`
    & > td {
        font-size: 20px;
        color: #0492c2
    }
`

const AllUsers = () => {

    const [user, setUser] = useState([]);

    useEffect(() => {
        getUsersDetails();
    }, [])


    const getUsersDetails = async () => {
        let response = await getUsers();
        console.log(response);
        setUser(response.data);
    }

    const deleteUserData = async (id) => {
        await deleteUser(id);
        getUsersDetails();
    }

    return (
        <StyledTable>
            <TableHead>
                <THead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Username</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </THead>
            </TableHead>
            <TableBody>
                {
                    user.map(u => (
                        <TBody>
                            <TableCell>{u.id}</TableCell>
                            <TableCell>{u.name}</TableCell>
                            <TableCell>{u.username}</TableCell>
                            <TableCell>{u.email}</TableCell>
                            <TableCell>{u.phone}</TableCell>
                            <TableCell>
                                <Button variant="contained" style={{marginRight: 10}} component={Link} to={`/editUser/${u.id}`}>Update</Button>
                                <Button variant="contained" color="secondary" onClick={() => deleteUserData(u.id)}>Delete</Button>
                            </TableCell>
                        </TBody>
                    ))
                }
            </TableBody>
        </StyledTable>
    )
}

export default AllUsers;
