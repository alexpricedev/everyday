import R from 'ramda';

import {
  morningZone,
  eveningZone,
} from '/imports/constants';
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
  TOGGLE_ZONE,
} from './constants';
import {
  completeActionWithId,
  toggleActionWithId,
} from '/imports/helpers/update-action';

const initialState = {
  view: LIST_VIEW,
  zone: morningZone,
  morningActions: [],
  eveningActions: [],
  error: false,
};

const reducer = (state = initialState, action = {}) => {
  let isMorning,
      _state;

  switch (action.type) {

    case INIT:
      return {
        ...initialState,
        morningActions: action.morning,
        eveningActions: action.evening,
      };

    case LOADING:
      return { ...state, loading: action.state || false };

    case INSERT_ACTION:
      const append = R.append(action.action);
      _state =  { ...state };
      isMorning = action.action.zone === morningZone;
      if (isMorning) {
        _state.morningActions = append(_state.morningActions);
      } else {
        _state.eveningActions = append(_state.eveningActions);
      }
      return _state;

    case REMOVE_ACTION:
      // TODO: Fix, this is broken
      const index = R.findIndex(R.equals(action.action), state.actions);
      return {
        ...state,
        actions: R.remove(index, 1, state.actions)
      };

    case COMPLETE_ACTION:
      _state =  { ...state };
      isMorning = action.action.zone === morningZone;
      const completeAction = completeActionWithId(action.action._id);
      if (isMorning) {
        _state.morningActions = state.morningActions.map(completeAction);
      } else {
        _state.eveningActions = state.eveningActions.map(completeAction);
      }
      return _state;

    case TOGGLE_ACTION:
      _state =  { ...state };
      isMorning = action.action.zone === morningZone;
      const toggleAction = toggleActionWithId(action.action._id);
      if (isMorning) {
        _state.morningActions = state.morningActions.map(toggleAction);
      } else {
        _state.eveningActions = state.eveningActions.map(toggleAction);
      }
      return _state;

    case TOGGLE_VIEW:
      const view = state.view === LIST_VIEW ? ACTION_VIEW : LIST_VIEW;
      return { ...state, view };

    case TOGGLE_ZONE:
      const zone = state.zone === morningZone ? eveningZone : morningZone;
      return { ...state, zone };

    case ERROR:
      return { ...state, error: action.error };

    default:
      return state;

  }
};

export default reducer;
export { initialState };
