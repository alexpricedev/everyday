import { applyMiddleware, createStore } from 'redux';
import { browserHistory } from 'react-router';
import ReduxThunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';

import rootReducer from './root-reducer';

let middleware = [
  ReduxThunk,
  routerMiddleware(browserHistory),
];

// Don't log in production
if (process.env.NODE_ENV === 'development') {
  import createLogger from 'redux-logger';
  const logger = createLogger();
  middleware.push(logger);
}

const Store = createStore(rootReducer, {}, applyMiddleware(...middleware));

export default Store;
