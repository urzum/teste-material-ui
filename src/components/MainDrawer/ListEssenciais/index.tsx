import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import DvrIcon from '@material-ui/icons/Dvr';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import useStyles from '../styles';

const ListEssenciais: React.FC = () => {
  const classes = useStyles();

  const [submenu, setSubmenu] = useState(false);
  const handleClick = (): void => setSubmenu(!submenu);
  const subMenuItens = [
    { description: 'Produtos', path: '/cad_essencial/produtos' },
    { description: 'Entidades', path: '/cad_essencial/produtos' },
    { description: 'Portos e Aeroportos', path: '/cad_essencial/portos' },
    { description: 'Itinerários', path: '/cad_essencial/itinerarios' },
    { description: 'Tarefas', path: '/cad_essencial/tarefas' },
  ];

  return (
    <List dense className={classes.list}>
      <ListItem
        button
        classes={{ root: classes.listItem }}
        onClick={handleClick}
      >
        <ListItemIcon>
          <DvrIcon className={classes.icon} />
        </ListItemIcon>
        <ListItemText
          classes={{
            primary: classes.listItemText,
          }}
          primary="Essenciais"
        />
        {submenu ? (
          <ExpandLess className={classes.iconOpenClose} />
        ) : (
          <ExpandMore className={classes.iconOpenClose} />
        )}
      </ListItem>
      <Collapse in={submenu} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {subMenuItens.map((item, index) => (
            <ListItem
              button
              component="a"
              href={item.path}
              key={item.description}
              classes={{ root: classes.listItem }}
            >
              <ListItemText
                classes={{
                  primary: classes.subTextList,
                }}
                primary={item.description}
              />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </List>
  );
};

export default ListEssenciais;
