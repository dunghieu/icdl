import {Divider, Drawer, IconButton} from '@mui/material';

import React from 'react';
import {styled, useTheme} from '@mui/material/styles';
import {DrawerProps} from 'lib/interfaces';
import MenuIcon from '@mui/icons-material/Menu';
import Navigation from './navigation/Navigation';

/**
 * This is drawer header component
 * It contains icon and title of Drawer component
 */
export const DrawerHeader = styled('div')(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

/**
 * This is tab left component of your web
 */

const DrawerComponent: React.FC<DrawerProps> = ({open, handleToggleDrawer, drawerwidth}) => {
  const theme = useTheme();
  return (
    <Drawer
      sx={{
        width: drawerwidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerwidth,
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={handleToggleDrawer}>
          <MenuIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      {/* Navigation */}
      <Navigation />
    </Drawer>
  );
};

export default DrawerComponent;
