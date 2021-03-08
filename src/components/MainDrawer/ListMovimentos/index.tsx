import React from 'react';
import { makeStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import DirectionsBoatIcon from '@material-ui/icons/DirectionsBoat';

import useStyles from '../styles';

const subMenuItens = [
  {
    description: 'Purchase Order',
    path: '/movimentos/purchase_order',
    icon: ShoppingCartIcon,
  },
  {
    description: 'Controle de L.I.',
    path: '/movimentos/control_li',
    icon: CardMembershipIcon,
  },
  {
    description: 'Controle de Importação',
    path: '/movimentos/control_import',
    icon: DirectionsBoatIcon,
  },
];

const ListMovimentos: React.FC = () => {
  const classes = useStyles();

  return (
    <List dense className={classes.list}>
      {subMenuItens.map((item, index) => (
        <ListItem
          button
          component="a"
          href={item.path}
          key={item.description}
          classes={{ root: classes.listItem }}
        >
          <ListItemIcon>
            <item.icon className={classes.icon} />
          </ListItemIcon>
          <ListItemText
            classes={{
              primary: classes.listItemText,
            }}
            primary={item.description}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default ListMovimentos;
