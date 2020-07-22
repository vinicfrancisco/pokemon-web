import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Detail from '~/pages/Detail';
import Edit from '~/pages/Edit';
import Home from '~/pages/Home';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/pokemon/:id" component={Detail} exact />
      <Route path="/pokemon/:id/edit" component={Edit} exact />
    </Switch>
  );
}
