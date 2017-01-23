import {
  INIT,
  ERROR,
  TOGGLE_VIEW,
  LIST_VIEW,
  ACTION_VIEW,
  COMPLETE_ACTION,
  TOGGLE_ACTION,
} from './constants';
import {
  completeActionWithId,
  toggleActionWithId,
} from '../../helpers/update-action';

const initialState = {
  view: LIST_VIEW,
  actions: [],
  error: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case INIT:
      return {...initialState, actions: action.actions };

    case TOGGLE_VIEW:
      const view = state.view === LIST_VIEW ? ACTION_VIEW : LIST_VIEW;
      return {...state, view };

    case COMPLETE_ACTION:
      return {
        ...state,
        actions: state.actions.map(completeActionWithId(action.id)),
      };

    case TOGGLE_ACTION:
      return {
        ...state,
        actions: state.actions.map(toggleActionWithId(action.id)),
      };

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
