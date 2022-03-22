import {
  Card,
  CardContent,
  Typography,
} from '@mui/material'
import React from 'react'

export const ResourceCard = ({ resource }) => {
  const { name, tasks } = resource;
  console.log(name)
  return (
    <Card sx={{ m: 1 }}>
      <CardContent>
        <Typography sx={{ fontSize: 16 }} color="text.secondary" gutterBottom>
          {name}
        </Typography>
        {tasks.map(task => {
          return (<Typography variant="body2" key={task}>
            * {task}
          </Typography>)
        })
        }
      </CardContent>
    </Card>
  )
}
