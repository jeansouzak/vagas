import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import Home from 'pages/Home';
import VagaRegister from 'pages/VagaRegister';
import history from 'services/history';

const routes = [
  { path: '/', component: Home },
  { path: '/register', component: VagaRegister },
];

function Routes() {
  const routeComponents = routes.map(({ path, component }, key) => (
    <Route exact path={path} component={component} key={key} />
  ));

  return (
    <Router history={history}>
      <Switch>{routeComponents}</Switch>
    </Router>
  );
}

export default Routes;
