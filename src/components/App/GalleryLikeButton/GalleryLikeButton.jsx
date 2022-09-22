import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import FavoriteIcon from '@mui/icons-material/Favorite';
  //MUI heart like button
export default function FloatingActionButtons() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab size="large" disabled aria-label="like">
        <FavoriteIcon />
      </Fab>
    </Box>
  );
}
