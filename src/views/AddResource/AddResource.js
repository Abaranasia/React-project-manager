import React from 'react'
import {
  Button,
  Divider,
  FormGroup,
  TextField
} from '@mui/material';

import { useForm } from '../../hooks/useForm'
import { PageHeader } from '../../ui/PageHeader'
import { Box } from '@mui/system';

export const AddResource = () => {

  const [formValues, handleInputChange] = useForm({
    name: '',
    surname: '',
    email: '',
    profile: '',
    enrol_date: '',
    skills: [],
    technologies: []
  });

  const { name, surname, email, profile, enrol_date, skills, technologies } = formValues;



  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues)
  }

  return (
    <div>
      <PageHeader title="Add a new resource" />
      <form onSubmit={handleSubmit}>
        <FormGroup row>
          <TextField
            label="Name"
            name="name"
            value={name}
            variant="standard"
            onChange={handleInputChange}
            sx={{ m: 1 }}
          />
          <TextField
            label="Surname"
            name="surname"
            value={surname}
            variant="standard"
            onChange={handleInputChange}
            sx={{ m: 1 }}
          />
          <TextField
            type="date"
            InputLabelProps={{ shrink: true }}
            label="Hiring date"
            name="enrol_date"
            value={enrol_date}
            variant="standard"
            onChange={handleInputChange}
            sx={{ m: 1 }}
          />
        </FormGroup>
        <FormGroup>
          <TextField
            label="Email"
            name="email"
            value={email}
            variant="standard"
            onChange={handleInputChange}
            sx={{ m: 1 }}
          />
          <TextField
            label="Profile"
            name="profile"
            value={profile}
            variant="standard"
            onChange={handleInputChange}
            sx={{ m: 1 }}
          />

        </FormGroup>
        <FormGroup row>
          <Box>
            <TextField
              label="Skills"
              name="skills"
              value={skills}
              variant="standard"
              onChange={handleInputChange}
              sx={{ m: 1 }}
            />
          </Box>
          <Box>
            <TextField
              label="Technologies"
              name="technologies"
              value={technologies}
              variant="standard"
              onChange={handleInputChange}
              sx={{ m: 1 }}
            />
          </Box>
        </FormGroup>
        <Button variant="contained">Submit</Button>
      </form>
    </div>
  )
}
