import React from 'react'

import {
  Typography
} from '@mui/material';
import { Box } from '@mui/system';


export const Resources = () => {
  return (
    <div>
      <Box my={2} sx={{
        bgcolor: "#E7EBF0",
        borderBottom: "solid orange 2px",
        boxShadow: 2,
        height: "30px",
        p: 1.5,
        m: 0,
      }}>
        <Typography
          variant="overline"
          sx={{ fontWeight: 'bold', fontSize: "0.80em" }}
        >
          Resources
        </Typography >
      </Box>
    </div>
  )
}
