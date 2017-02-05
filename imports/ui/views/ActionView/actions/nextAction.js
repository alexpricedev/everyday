import { Either } from 'ramda-fantasy';

import { morningZone } from '/imports/constants';
import { getNextUncompleteAction } from '/imports/helpers/get-action';
import {
  NEXT_ACTION,
  ALL_COMPLETE,
} from '../constants';

const nextAction = () => {
  return (dispatch, getState) => {
    const { app, actionView } = getState();

    const actions = app.zone === morningZone ?
                    app.morningActions :
                    app.eveningActions;

    const current = actionView.activeAction;
    const maybeAction = getNextUncompleteAction(current, actions);

    Either.either(
      () => dispatch({ type: ALL_COMPLETE }),
      a => dispatch({
        type: NEXT_ACTION,
        _id: a._id,
        actions
      }),
      maybeAction
    );
  };
};

export default nextAction;
