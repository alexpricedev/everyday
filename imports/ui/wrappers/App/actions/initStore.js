import { Meteor } from 'meteor/meteor';

import {
  INIT,
} from '../constants';

const initStore = () => {
  return (dispatch, getState) => {
    const { app } = getState();

    Meteor.call('getActions', (err, actions) => {
      console.log(err);
      dispatch({ type: INIT, actions });
    });

  };
};

export default initStore;
