import React, { useEffect, useState } from 'react'
import {
  Button,
  Divider,
  FormGroup,
  TextField
} from '@mui/material';

import { useForm } from '../../hooks/useForm'
import { PageHeader } from '../../ui/PageHeader'
import { AddSkills } from './components/AddSkills';
import { AddTechnologies } from './components/AddTechnologies';

export const AddResource = () => {

  const [formData, setFormData] = useState({})
  const [skills, setSkills] = useState([]);
  const [technologies, setTechnologies] = useState([]);

  const [formValues, handleInputChange] = useForm({
    name: '',
    surname: '',
    email: '',
    profile: '',
    enrol_date: '',
  });
  const { name, surname, email, profile, enrol_date } = formValues;

  useEffect(() => {
    console.log("formData", formData)
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData({
      ...formData,
      name,
      surname,
      email,
      profile,
      enrol_date,
      skills
    });


  };

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
        <FormGroup row sx={{ m: 1 }}>
          <AddSkills skills={skills} setSkills={setSkills} />
          <AddTechnologies technologies={technologies} setTechnologies={setTechnologies} />

        </FormGroup>
        <Button type="submit" variant="contained">Submit</Button>
      </form>
    </div>
  )
}
