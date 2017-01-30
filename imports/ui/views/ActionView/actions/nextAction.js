import { Either } from 'ramda-fantasy';

import {
  NEXT_ACTION,
  ALL_COMPLETE,
} from '../constants';

import { getNextUncompleteAction } from '/imports/helpers/get-action';

const nextAction = () => {
  return (dispatch, getState) => {
    const { app, actionView } = getState();
    const current = actionView.activeAction;
    const next = getNextUncompleteAction(current, app.actions);
    Either.either(
      () => dispatch({ type: ALL_COMPLETE }),
      a => dispatch({
        type: NEXT_ACTION,
        _id: a._id,
        actions: app.actions
      }),
      next
    );
  };
};

export default nextAction;
