import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    marginLeft: 128,
    marginTop: 28,
    maxHeight: '100vh',
    padding: 10,
  },
}));

const MainContent: React.FC = ({ children }) => {
  const classes = useStyles();

  return <div className={classes.root}>{children}</div>;
};

export default MainContent;
