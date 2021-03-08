import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import KitchenIcon from '@material-ui/icons/Kitchen';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import useStyles from '../styles';

const ListSiscomex: React.FC = () => {
  const classes = useStyles();

  const [submenu, setSubmenu] = useState(false);
  const handleClick = (): void => setSubmenu(!submenu);

  return (
    <List dense className={classes.list}>
      <ListItem
        button
        classes={{ root: classes.listItem }}
        onClick={handleClick}
      >
        <ListItemIcon>
          <KitchenIcon className={classes.icon} />
        </ListItemIcon>
        <ListItemText
          classes={{
            primary: classes.listItemText,
          }}
          primary="Siscomex"
        />
        {submenu ? (
          <ExpandLess className={classes.iconOpenClose} />
        ) : (
          <ExpandMore className={classes.iconOpenClose} />
        )}
      </ListItem>
      <Collapse in={submenu} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemText
              classes={{
                primary: classes.subTextList,
              }}
              primary="Fundamento Legal"
            />
          </ListItem>
          <ListItem button classes={{ root: classes.listItem }}>
            <ListItemText
              classes={{
                primary: classes.subTextList,
              }}
              primary="UF Desembaraço"
            />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
};

export default ListSiscomex;
