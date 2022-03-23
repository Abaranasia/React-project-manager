import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  Typography
} from '@mui/material';
import { Box } from '@mui/system';
import { ResourceCard } from './components/ResourceCard';
import { PageHeader } from '../../ui/PageHeader';

export function Project({ location }) {
  const [projects, setProjects] = useState([]);
  const [projectId, setProjectId] = useState(0);
  const [project, setProject] = useState({});

  const getPrj = async () => {
    //const prj = await getProjects()
    const response = await axios.get('/assets/projects.json')
    setProjects(response.data)
  };

  useEffect(() => {
    location.state && setProjectId(location.state); // sets project Id to search for
    getPrj();
  }, []);

  useEffect(() => {
    if (projects.length > 0) {
      const filteredPrj = projects.filter(prj => (prj.id === projectId));
      const [prj] = filteredPrj;
      setProject(prj);
    };
  }, [projects])

  return (
    <div>
      <PageHeader title={project.name} />

      <Box
        sx={{
          m: 2,
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 1,
          gridTemplateRows: 'auto',
          gridTemplateAreas: `"header header header owner"
        "date date date status"
        "title title title title"
        "res res res res"`,
        }}
      >
        <Box sx={{ gridArea: 'header' }}>
          <Typography variant="h6">
            {project.desc}
          </Typography>
        </Box>
        <Box sx={{ gridArea: 'owner' }}><strong>Product Owner: </strong>{project.owner}</Box>
        <Box sx={{ gridArea: 'date' }}>
          <ul>
            <li><strong>Creation date: </strong>{project.create_date}</li>
            <li><strong>Start date: </strong>{project.start_date}</li>
            <li><strong>End date: </strong>{project.end_date}</li>
          </ul>
        </Box>
        <Box sx={{ gridArea: 'status', bgcolor: 'error.main' }}>
          <strong>Status: </strong>
          {/*  {(project.completed) ? "finished" : "ongoing"} */}
          {project.status}
        </Box>
        <Typography sx={{ gridArea: 'title' }} variant="h6">Asigned resources</Typography>
        <Box sx={{ gridArea: 'res', display: 'flex' }}>
          {project.resources?.map(res => <ResourceCard key={res.name} resource={res} />)}
        </Box>
      </Box>

    </div>
  )
}
