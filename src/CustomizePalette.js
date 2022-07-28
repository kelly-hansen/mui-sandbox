import React, { useState } from 'react';

import { Box, Button, Typography, colors } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ChromePicker } from 'react-color';

const CustomizePalette = () => {
  const [primaryColor, setPrimaryColor] = useState(colors.blue[700]);
  const theme = createTheme({
    palette: {
      primary: {
        main: primaryColor || colors.blue[700],
      },
    },
  });

  console.log(theme)
  return(
    <div>
      <ThemeProvider theme={theme}>
        <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant='h5' mb={4}>PALETTE COLOR PICKER</Typography>
          <ChromePicker color={primaryColor} onChangeComplete={(color) => setPrimaryColor(color.hex)} />
          <Box sx={{ mt: 5 }}>
            <Button variant='text' sx={{ mx: 1 }}>button</Button>
            <Button variant='contained' sx={{ mx: 1 }}>button</Button>
            <Button variant='outlined' sx={{ mx: 1 }}>button</Button>
          </Box>
        </Box>
      </ThemeProvider>
    </div>
  )
};

export default CustomizePalette;
