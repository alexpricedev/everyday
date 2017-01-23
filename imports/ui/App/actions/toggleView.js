import { Either } from 'ramda-fantasy';

import {
  TOGGLE_VIEW,
} from '../constants';
import {
  ALL_COMPLETE,
  NEXT_ACTION,
} from '../../views/ActionView/constants';


import { getFirstUncompleteAction } from '../../../helpers/get-action';

const toggleView = () => {
  return (dispatch, getState) => {
    const { app, actionView } = getState();
    const current = actionView.activeAction;
    const first = getFirstUncompleteAction(app.actions);
    Either.either(
      () => dispatch({ type: ALL_COMPLETE }),
      a => dispatch({
        type: NEXT_ACTION,
        id: a.id,
        actions: app.actions
      }),
      first
    );
    dispatch({ type: TOGGLE_VIEW });
  };
};

export default toggleView;
