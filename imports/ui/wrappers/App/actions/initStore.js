import { Meteor } from 'meteor/meteor';

import {
  INIT,
  LOADING,
} from '../constants';

const initStore = () => {
  return (dispatch, getState) => {

    dispatch({ type: LOADING, state: true });

    Meteor.call('getActionsForUser', (err, actions) => {
      if (!err) {
        dispatch({ type: INIT, actions });
      }

      dispatch({ type: LOADING, state: false });
    });

  };
};

export default initStore;
