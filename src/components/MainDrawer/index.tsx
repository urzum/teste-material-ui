import React from 'react';
import { makeStyles } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';

import ListDashboard from './ListDashboard';
import ListEssenciais from './ListEssenciais';
import ListFinanceiros from './ListFinanceiros';
import ListFiscais from './ListFiscais';
import ListSiscomex from './ListSiscomex';
import ListMovimentos from './ListMovimentos';

import useStyles from './styles';

const MainDrawer: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />

        <ListDashboard />
        <Divider classes={{ root: classes.divider }} />
        <h3 className={classes.titulo}>Cadastros</h3>
        <ListEssenciais />
        <ListFinanceiros />
        <ListFiscais />
        <ListSiscomex />
        <Divider classes={{ root: classes.divider }} />
        <h3 className={classes.titulo}>Movimentos</h3>
        <ListMovimentos />
        <Divider classes={{ root: classes.divider }} />
        <h3 className={classes.titulo}>Gestão Financeira</h3>

        <Divider classes={{ root: classes.divider }} />
        <h3 className={classes.titulo}>Relatórios</h3>
      </Drawer>
    </div>
  );
};

export default MainDrawer;
