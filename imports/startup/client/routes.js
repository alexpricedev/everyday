import React from 'react';
import {
  Router,
  browserHistory,
  Route,
  IndexRoute,
} from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

// Redux store for react-router-redux
import store from './store';

import App from '/imports/ui/App';

const history = syncHistoryWithStore(browserHistory, store);

export default (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
      </Route>
    </Router>
  </Provider>
);
