import React from 'react';
import { makeStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import DashboardIcon from '@material-ui/icons/Dashboard';

import useStyles from '../styles';

const ListDashboard: React.FC = () => {
  const classes = useStyles();

  return (
    <List dense className={classes.list}>
      <ListItem
        button
        component="a"
        href="/"
        classes={{ root: classes.listItem }}
      >
        <ListItemIcon>
          <DashboardIcon className={classes.icon} />
        </ListItemIcon>
        <ListItemText
          classes={{
            primary: classes.listItemText,
          }}
          primary="Dashboard"
        />
      </ListItem>
    </List>
  );
};

export default ListDashboard;
