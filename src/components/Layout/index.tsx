import React from 'react';
import { Box, Grid, makeStyles } from '@material-ui/core';

import MainHeader from '../MainHeader';
import MainDrawer from '../MainDrawer';
import MainContent from '../MainContent';
import MainButton from '../MainButton';

const useStyles = makeStyles(theme => ({
  root: {
    background: '#d5d9eb',
    height: '100vh',
  },
}));

const Layout: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <MainHeader />
      <MainDrawer />
      <MainContent>{children}</MainContent>
    </Box>
  );
};

export default Layout;
