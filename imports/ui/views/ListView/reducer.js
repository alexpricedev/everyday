import {
  SHOW_NEW_ACTION_MODAL,
  HIDE_NEW_ACTION_MODAL,
} from './constants';

const initialState = {
  newActionModalVisible: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case SHOW_NEW_ACTION_MODAL:
      return {...state, newActionModalVisible: true };

    case HIDE_NEW_ACTION_MODAL:
      return {...state, newActionModalVisible: false };

    default:
      return state;

  }
};

export default reducer;
export { initialState };
