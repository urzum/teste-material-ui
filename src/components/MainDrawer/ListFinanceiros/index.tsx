import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';

import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import useStyles from '../styles';

const subMenuItens = [
  { description: 'Cond. Pagamento', path: '/cad_essencial/produtos' },
  { description: 'Despesas', path: '/cad_essencial/produtos' },
  { description: 'Tab. Previsões', path: '/cad_essencial/portos' },
  { description: 'Cotação de Moedas', path: '/cad_essencial/itinerarios' },
  { description: 'Incoterms', path: '/cad_essencial/tarefas' },
];

const ListFinanceiros: React.FC = () => {
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
          <LocalAtmIcon className={classes.icon} />
        </ListItemIcon>
        <ListItemText
          classes={{
            primary: classes.listItemText,
          }}
          primary="Financeiros"
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

export default ListFinanceiros;
