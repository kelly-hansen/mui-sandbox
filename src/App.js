import React, { useState } from 'react';

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Menu,
  MenuItem,
  IconButton
} from '@mui/material'
import { Attractions, AccountCircle } from '@mui/icons-material';

import CustomizePalette from './CustomizePalette'
import Table from './Table';

function App() {
  const [currentPage, setCurrentPage] = useState('table')
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div className="App">
      <AppBar position='static'>
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Attractions fontSize='large' sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
            <Button
              onClick={() => setCurrentPage('table')}
              sx={{ my: 2, mx: 1, color: 'white', display: 'block' }}
            >
              TABLE
            </Button>
            <Button
              onClick={() => setCurrentPage('palette')}
              sx={{ my: 2, mx: 1, color: 'white', display: 'block' }}
            >
              PALETTE
            </Button>
          </Box>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>My account</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>

      {currentPage === 'table' && <Table />}
      {currentPage === 'palette' && <CustomizePalette />}
    </div>
  );
}

export default App;
