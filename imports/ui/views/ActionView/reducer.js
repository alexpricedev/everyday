import R from 'ramda';
import {
  ACTION_VIEW_INIT,
  NEXT_ACTION,
  ALL_COMPLETE,
} from './constants';

const initialState = {
  numActions: 0,
  activeAction: 0,
  allComplete: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case ACTION_VIEW_INIT:
      return {...state, numActions: action.numActions };

    case NEXT_ACTION:
      const index = R.findIndex(R.propEq('id', action.id), action.actions);
      return {...state, activeAction: index, allComplete: false };

    case ALL_COMPLETE:
      return {...state, allComplete: true };

    default:
      return state;

  }
};

export default reducer;
export { initialState };
