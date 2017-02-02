import { Meteor } from 'meteor/meteor';
import { push } from 'react-router-redux';

import {
  INIT,
  LOADING,
} from '../constants';

const initStore = () => {
  return (dispatch, getState) => {

    dispatch({ type: LOADING, state: true });

    Meteor.call('getUserData', (err, zones) => {
      if (err) {
        dispatch(push('/'));
      } else {
        dispatch({ type: INIT, zones });
      }

      dispatch({ type: LOADING, state: false });
    });

  };
};

export default initStore;
