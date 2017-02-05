import { Either } from 'ramda-fantasy';

import { morningZone } from '/imports/constants';
import { getFirstUncompleteAction } from '/imports/helpers/get-action';
import {
  TOGGLE_VIEW,
} from '../constants';
import {
  ALL_COMPLETE,
  NEXT_ACTION,
} from '../../../views/ActionView/constants';

const toggleView = () => {
  return (dispatch, getState) => {
    const { app, actionView } = getState();

    const actions = app.zone === morningZone ?
                    app.morningActions :
                    app.eveningActions;

    const maybeAction = getFirstUncompleteAction(actions);

    Either.either(
      () => dispatch({ type: ALL_COMPLETE }),
      a => dispatch({
        type: NEXT_ACTION,
        _id: a._id,
        actions
      }),
      maybeAction
    );
    dispatch({ type: TOGGLE_VIEW });
  };
};

export default toggleView;
