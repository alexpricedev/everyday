import React from 'react';
import {
  IndexRoute,
  Redirect,
  Route,
  Router,
  browserHistory,
} from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

// Redux store for react-router-redux
import store from './store';
const history = syncHistoryWithStore(browserHistory, store);

// onEnter hooks
import {
  requireAuth,
  userLoggedIn,
} from './route-hooks';

// --- Public Route Components --- \\
import PublicApp from '/imports/ui/wrappers/PublicApp';
import Login from '/imports/ui/pages/Login';

// --- App Route Components --- \\
import App from '/imports/ui/wrappers/App';

export default (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} onEnter={requireAuth}>
      </Route>

      <Route path="/" component={PublicApp}>
        <Route path="login" component={Login} />

        <Redirect path="*" to="/" />
      </Route>
    </Router>
  </Provider>
);
