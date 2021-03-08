import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ReceiptIcon from '@material-ui/icons/Receipt';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import useStyles from '../styles';

const subMenuItens = [
  { description: 'ICMS', path: '/cad_fiscal/icms' },
  { description: 'CFOP', path: '/cad_fiscal/cfop' },
  { description: 'Exceção ICMS', path: '/cad_fiscal/excecao_icms' },
  { description: 'NCM', path: '/cad_fiscal/ncms' },
  { description: 'Modelo de Adições', path: '/cad_fiscal/modelo_adicoes' },
];

const ListFiscais: React.FC = () => {
  const classes = useStyles();

  const [submenu, setSubmenu] = useState(false);
  const handleClick = (): void => setSubmenu(!submenu);

  return (
    <List dense className={classes.list}>
      <ListItem
        button
        component="a"
        classes={{ root: classes.listItem }}
        onClick={handleClick}
      >
        <ListItemIcon>
          <ReceiptIcon className={classes.icon} />
        </ListItemIcon>
        <ListItemText
          classes={{
            primary: classes.listItemText,
          }}
          primary="Fiscais"
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

export default ListFiscais;
