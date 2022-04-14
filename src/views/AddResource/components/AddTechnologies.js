import React, { useState } from 'react'

import {
  Button,
  FormGroup,
  IconButton,
  Paper,
  TextField,
  List,
  ListItem,
  Divider,
} from '@mui/material';

import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { Box } from '@mui/system';

export const AddTechnologies = ({ technologies, setTechnologies }) => {

  const [oneTech, setOneTech] = useState('');

  const handleTechChange = (e) => {
    setOneTech(e.target.value)
  };

  const handleAddTech = (e) => {
    setTechnologies([...technologies, oneTech])
  };


  return (
    <Paper
      label="Technologies"
      sx={{
        p: '2px 4px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 400
      }}
    >
      <Box>
        <TextField
          label="Technology"
          name="Technology"
          value={oneTech}
          variant="standard"
          onChange={handleTechChange}
          sx={{ m: 1 }}
        />
        <IconButton
          color="primary"
          sx={{ p: '10px', mt: 2 }}
          variant="contained"
          onClick={handleAddTech}
        >
          <AddCircleRoundedIcon />
        </IconButton>
      </Box>
      <List >
        {technologies.map(tech => {
          return (
            <ListItem key={tech}>
              {tech}
            </ListItem>
          )
        })}
      </List>
    </Paper>
  )
}
