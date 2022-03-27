import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';

import { PageHeader } from '../../ui/PageHeader';
import { getEmployees } from '../../API/resources/resourcesAPI';


const headerStyle = {
  color: "white",
  backgroundColor: "#436f83",
  fontWeight: 'bold',
  "& .MuiTableCell-head": { color: "white" }
};

export const Resources = () => {

  const [resources, setResources] = useState([])
  let history = useHistory();

  const tableHeader = ['name', 'profile', 'email', 'hiring date'];

  const getResources = async () => {
    const response = await getEmployees();
    if (response) {
      const { employees } = response.data;

      setResources(employees)
    }
  };

  useEffect(() => {
    getResources();
  }, [])

  const handleClick = (e, id) => {
    history.push('/resource', id);
  }

  return (
    <div>
      <PageHeader title="Resources" />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ ...headerStyle }}>
              {tableHeader.map(title => {
                return (<TableCell key={title} className="">
                  {title}
                </TableCell>)
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {resources.map(res => {
              return (<TableRow
                sx={{ cursor: "pointer" }}
                key={res.id}
                id={res.id}
                hover
                onClick={e => handleClick(e, res.id)}
              >
                <TableCell>{res.name} {res.surname}</TableCell>
                <TableCell>{res.profile}</TableCell>
                <TableCell>{res.email}</TableCell>
                <TableCell>{res.enrol_date}</TableCell>
              </TableRow>)
            })}

          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
