import { Box, CircularProgress, Typography } from "@mui/material";

import React from 'react'

export const Loader = () => {
  return (
    <Box display='flex' justifyContent={'center'} alignItems={'center'} flexDirection={'column'} width='100%' height='100vh'>
        <CircularProgress />
        <Typography variant="body1">Loading...</Typography>
    </Box>
  )
}
