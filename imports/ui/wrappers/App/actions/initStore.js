import { Meteor } from 'meteor/meteor';
import { push } from 'react-router-redux';

import {
  INIT,
  LOADING,
} from '../constants';

const initStore = () => {
  return (dispatch, getState) => {

    dispatch({ type: LOADING, state: true });

    Meteor.call('getUserData', (err, actions) => {
      if (err) {
        dispatch(push('/login'));
      } else {
        dispatch({
          type: INIT,
          morning: actions.morning,
          evening: actions.evening
        });
      }

      dispatch({ type: LOADING, state: false });
    });

  };
};

export default initStore;
