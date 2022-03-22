import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import { Box } from '@mui/system';


const headerStyle = {
  color: "white",
  backgroundColor: "#436f83",
  fontWeight: 'bold',
  "& .MuiTableCell-head": { color: "white" }
}

export function ProjectList() {
  const [projects, setProjects] = useState([]);

  let history = useHistory();

  const tableHeader = ['name', 'type', 'owner', 'start date', 'end date'];

  const getPrj = async () => {
    //const prj = await getProjects()
    const response = await axios.get('/assets/projects.json')
    setProjects(response.data)
  };

  useEffect(() => {
    getPrj()
  }, [])

  const handleClick = (e, id) => {
    console.log(id);
    history.push('/project', id);
  }

  return (
    <>
      <Box my={2} sx={{
        bgcolor: "#E7EBF0",
        borderBottom: "solid orange 2px",
        height: "30px",
        p: 1.5,
        m: 0,
      }}>
        <Typography
          variant="overline"
          sx={{ fontWeight: 'bold', fontSize: "0.80em" }}
        >
          List of current projects
        </Typography >
      </Box>
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
            {projects.map(prj => {
              return (<TableRow
                sx={{ cursor: "pointer" }}
                key={prj.id}
                id={prj.id}
                hover
                onClick={e => handleClick(e, prj.id)}
              >
                <TableCell>{prj.name}</TableCell>
                <TableCell>{prj.type}</TableCell>
                <TableCell>{prj.owner}</TableCell>
                <TableCell>{prj.start_date}</TableCell>
                <TableCell>{prj.end_date}</TableCell>
              </TableRow>)
            })}

          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}