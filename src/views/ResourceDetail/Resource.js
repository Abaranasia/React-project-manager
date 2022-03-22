import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  Divider,
  Typography
} from '@mui/material';
import { Box } from '@mui/system';
import { PageHeader } from '../../ui/PageHeader';

export const Resource = ({ location }) => {
  const [resources, setResources] = useState([]);
  const [resourceId, setResourceId] = useState(0);
  const [staff, setStaff] = useState({});

  const getResources = async () => {
    const response = await axios.get('/assets/resources.json')
    setResources(response.data)
  };

  useEffect(() => {
    location.state && setResourceId(location.state);
    getResources()
  }, []);

  useEffect(() => {
    if (resources.length > 0) {
      const filteredRes = resources.filter(res => (res.id === resourceId));
      const [person] = filteredRes;
      console.log(person);
      setStaff(person);
    };
  }, [resources])



  return (
    <div>
      <PageHeader title="Staff" />
      <Box
        sx={{
          m: 2,
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 1,
          gridTemplateRows: 'auto',
          gridTemplateAreas: `"main main main main" 
        "skills skills tech tech"`,
        }}
      >
        <Box sx={{ gridArea: 'main', mb: 2 }}>
          <Typography variant="h5" >
            {staff.name} {staff.surname}
          </Typography>
          <Typography variant="h6" sx={{ my: 1 }}>
            {staff.profile}
          </Typography>
          <Typography variant="subtitle1">
            {staff.email}
          </Typography>

          <Typography variant="subtitle2">
            <strong>Hired id:</strong> {staff.enrol_date}
          </Typography>
          <Divider />
        </Box>

        <Box sx={{ gridArea: 'skills' }}>
          <Typography variant="h6">Skills</Typography>
          <ul>
            {staff.skills?.map(skill => {
              return (<li> {skill}</li>)
            })}
          </ul>
        </Box>

        <Box sx={{ gridArea: 'tech' }}>
          <Typography variant="h6">Technologies</Typography>
          <ul>
            {staff.technologies?.map(tech => {
              return (<li> {tech}</li>)
            })}
          </ul>
        </Box>
      </Box>
    </div>

  )
}
