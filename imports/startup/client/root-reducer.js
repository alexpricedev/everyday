import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import app from '/imports/ui/wrappers/App/reducer';
import actionView from '/imports/ui/views/ActionView/reducer';
import listView from '/imports/ui/views/ListView/reducer';
import timer from '/imports/ui/components/ActionPages/Timer/reducer';
import login from '/imports/ui/pages/Login/reducer';

export default combineReducers({
  routing: routerReducer,
  app,
  actionView,
  listView,
  timer,
  login,
});
