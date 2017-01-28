import {
  ERROR,
} from './constants';

const initialState = {
  error: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ERROR:
      return {
        ...state,
        error: action.error || false,
      };

    default:
      return state;

  }
};

export default reducer;
export { initialState };
