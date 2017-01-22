import React from 'react';
import {
  Router,
  browserHistory,
  Route,
  IndexRoute,
} from 'react-router';

import App from '/imports/ui/App';

export default routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>
);
