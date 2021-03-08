import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.primary.dark,
    flexGrow: 0,
    height: 30,
    justifyContent: 'flex-end',
  },
  grow: {
    flexGrow: 1,
  },
  text: {
    color: '#fcf4eb',
  },
}));

const MainButton: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h5>Teste Mainbutton</h5>
    </div>
  );
};

export default MainButton;
