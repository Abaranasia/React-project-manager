import React from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
} from '@mui/material';

export const ProjectCard = ({ project, bgcolor }) => {
  const { name, type, owner, end_date } = project;
  const cardColors = {
    ongoing: "#b5da4b",
    finished: "#e8e8e7",
  }

  return (
    <Card sx={{ m: 1, minWidth: '20em', backgroundColor: cardColors[bgcolor] }}>
      <CardHeader
        title={name}
        subheader={end_date}
      />
      <CardContent>
        <Typography variant="body2">
          {type}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Onwer: {owner}
        </Typography>
      </CardContent>
    </Card>
  )
}
