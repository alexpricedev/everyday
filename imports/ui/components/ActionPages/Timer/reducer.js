import {
  START,
  STOP,
  RESET,
  DECREMENT_TIMER,
  SET_TIMER,
} from './constants';

const initialState = {
  initialTime: 0,
  currentTime: 0,
  timerActive: false,
  intervalTimer: undefined,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case DECREMENT_TIMER:
      return {
        ...state,
        currentTime: state.currentTime - 1,
      };

    case START:
      return {
        ...state,
        intervalTimer: action.intervalTimer,
        timerActive: true,
      };

    case SET_TIMER:
      return {
        ...state,
        initialTime: action.time,
        currentTime: action.time,
      };

    case STOP:
      return {
        ...state,
        intervalTimer: null,
        timerActive: false,
      };

    case RESET:
      return {
        ...state,
        currentTime: state.initialTime,
      };

    default:
      return state;

  }
};

export default reducer;
export { initialState };
