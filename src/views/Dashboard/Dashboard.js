import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  Typography
} from '@mui/material';
import { Box } from '@mui/system';

import { PageHeader } from '../../ui/PageHeader';
import { ProjectCard } from './ProjectCard/ProjectCard';


export const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [ongoingProjects, setOngoingProjects] = useState([]);
  const [finishedProjects, setFinishedProjects] = useState([])
  const getPrj = async () => {
    const response = await axios.get('/assets/projects.json')
    setProjects(response.data)
  };

  useEffect(() => {
    getPrj()
  }, []);

  useEffect(() => {
    if (projects.length > 0) {
      const filteredOngoing = projects.filter(prj => prj.status === "ongoing");
      setOngoingProjects(filteredOngoing);

      const filteredFinished = projects.filter(prj => prj.status === "finished");
      setFinishedProjects(filteredFinished)
    }
  }, [projects])



  return (
    <div>
      <PageHeader title="Dashboard" />

      <Box
        sx={{
          m: 2,
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 1,
          gridTemplateRows: 'auto',
          gridTemplateAreas: `"titleO titleO titleO titleO"
          "ongoing ongoing ongoing ongoing"
          "titleF titleF titleF titleF"
          "new new new new"
          "finished finished finished finished"`,
        }}
      >

        <Box sx={{ gridArea: 'titleO' }}>
          <Typography variant="h5">
            Ongoing projects
          </Typography>
        </Box>

        <Box sx={{
          gridArea: 'ongoing',
          display: 'flex',
          justifyContent: 'flex-start',
          flexFlow: 'row wrap'
        }}>
          {ongoingProjects.map(prj =>
            <ProjectCard key={prj.id} project={prj} bgcolor="ongoing" />
          )}
        </Box>

        <Box sx={{ gridArea: 'titleF' }}>
          <Typography variant="h5">
            Finished projects
          </Typography>
        </Box>
        <Box sx={{
          gridArea: 'finished',
          display: 'flex',
          justifyContent: 'flex-start',
          flexFlow: 'row wrap'
        }}>
          {finishedProjects.map(prj =>
            <ProjectCard key={prj.id} project={prj} bgcolor="finished" />)}
        </Box>
      </Box>
    </div>
  )
}
