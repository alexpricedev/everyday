import R from 'ramda';

import {
  INIT,
  ERROR,
  LOADING,
  TOGGLE_VIEW,
  LIST_VIEW,
  ACTION_VIEW,
  COMPLETE_ACTION,
  TOGGLE_ACTION,
  INSERT_ACTION,
  REMOVE_ACTION,
} from './constants';
import {
  completeActionWithId,
  toggleActionWithId,
} from '/imports/helpers/update-action';

const initialState = {
  view: LIST_VIEW,
  actions: [],
  error: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case INIT:
      return { ...initialState, actions: action.actions };

    case LOADING:
      return { ...state, loading: action.state || false };

    case INSERT_ACTION:
      return {
        ...state,
        actions: R.append(action.action, state.actions)
      };

    case REMOVE_ACTION:
      const index = R.findIndex(R.equals(action.action), state.actions);
      return {
        ...state,
        actions: R.remove(index, 1, state.actions)
      };

    case COMPLETE_ACTION:
      return {
        ...state,
        actions: state.actions.map(completeActionWithId(action._id)),
      };

    case TOGGLE_ACTION:
      return {
        ...state,
        actions: state.actions.map(toggleActionWithId(action._id)),
      };

    case TOGGLE_VIEW:
      const view = state.view === LIST_VIEW ? ACTION_VIEW : LIST_VIEW;
      return { ...state, view };

    case ERROR:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;

  }
};

export default reducer;
export { initialState };
