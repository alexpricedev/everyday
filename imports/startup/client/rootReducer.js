import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import app from '/imports/ui/App/reducer';
import actionView from '/imports/ui/views/ActionView/reducer';
import timer from '/imports/ui/components/ActionPages/Timer/reducer';

export default combineReducers({
  routing: routerReducer,
  app,
  actionView,
  timer,
});
