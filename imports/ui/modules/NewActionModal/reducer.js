import { todoType } from '/imports/api/actions/constants';
import {
  UPDATE_ACTION_LIST,
  UPDATE_ACTION_TYPE,
  UPDATE_ACTION_TEXT,
  UPDATE_ACTION_TIME,
  ERROR,
  INIT,
} from './constants';

const initialState = {
  type: todoType,
  text: '',
  time: 90,
  list: [''],
  error: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_ACTION_TYPE:
      return {
        ...state,
        type: action.actionType,
      };

    case UPDATE_ACTION_TEXT:
      return {
        ...state,
        text: action.text,
      };

    case UPDATE_ACTION_TIME:
      return {
        ...state,
        time: parseInt(action.time),
      };

    case UPDATE_ACTION_LIST:
      let list = state.list.slice(0); // clone
      list.splice(action.index, 1, action.text);
      return { ...state, list };

    case ERROR:
      let error = false;
      if (action.field, action.message) {
        error = {
          field: action.field,
          message: action.message,
        };
      }
      return { ...state, error };

    case INIT:
      return initialState;

    default:
      return state;

  }
};

export default reducer;
export { initialState };
