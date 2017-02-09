import React from 'react'
import { connect } from 'react-redux'

import NewActionModal from './NewActionModal';
import addAction from './actions/add-action';
import {
  UPDATE_ACTION_LIST,
  UPDATE_ACTION_TEXT,
  UPDATE_ACTION_TIME,
  UPDATE_ACTION_TYPE,
} from './constants';

function mapStateToProps(state) {
  return state.newActionModal;
}

function mapDispatchToProps(dispatch) {
  return {
    addAction: (obj) => {
      dispatch(addAction(obj));
    },
    updateListItem: (index, text) => {
      dispatch({ type: UPDATE_ACTION_LIST, index, text });
    },
    updateText: (text) => {
      dispatch({ type: UPDATE_ACTION_TEXT, text });
    },
    updateTime: (time) => {
      dispatch({ type: UPDATE_ACTION_TIME, time });
    },
    updateType: (actionType) => {
      dispatch({ type: UPDATE_ACTION_TYPE, actionType });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewActionModal);
