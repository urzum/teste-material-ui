import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import Dashboard from '../pages/Dashboard';
import Produtos from '../pages/cadastros/essenciais/Produtos';
import Despesas from '../pages/cadastros/financeiros/Despesas';
import Entidades from '../pages/cadastros/essenciais/Entidades';

const AppRoutes: React.FC = () => (
  <Layout>
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/cad_essencial/produtos" exact component={Produtos} />
      <Route path="/cad_essencial/entidades" exact component={Entidades} />
      <Route path="/cad_financeiro/despesas" exact component={Despesas} />
    </Switch>
  </Layout>
);

export default AppRoutes;
