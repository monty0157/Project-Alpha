import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from '../../ui/layouts/App';
import Site from '../../../import/ui/pages/Site';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="site" component={Site}/>
    </Route>
  </Router>
);
