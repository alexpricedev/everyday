import { Meteor } from 'meteor/meteor';
import { push } from 'react-router-redux';

import {
  ERROR,
} from '../constants';

const login = (email, password) => {
  return (dispatch, getState) => {

    if (!email || !password) {
      dispatch({
        type: ERROR,
        error: 'Enter your email and password please...'
      });
      return;
    }

    Meteor.loginWithPassword(
      { email },
      password,
      error => {
        if (error) {
          dispatch({
            type: ERROR,
            error: 'You messed up. Please try again...'
          });
        } else {
          dispatch(push('/'));
        }
      }
    );
  };
};

export default login;
