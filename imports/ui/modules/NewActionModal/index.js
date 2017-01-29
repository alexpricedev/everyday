import React from 'react'
import { connect } from 'react-redux'

import NewActionModal from './NewActionModal';
import addAction from './actions/add-action';
import {
  UPDATE_ACTION_TYPE,
  UPDATE_ACTION_TEXT,
  UPDATE_ACTION_TIME,
} from './constants';

function mapStateToProps(state) {
  return state.newActionModal;
}

function mapDispatchToProps(dispatch) {
  return {
    updateType: (actionType) => {
      dispatch({ type: UPDATE_ACTION_TYPE, actionType });
    },
    updateText: (text) => {
      dispatch({ type: UPDATE_ACTION_TEXT, text });
    },
    updateTime: (time) => {
      dispatch({ type: UPDATE_ACTION_TIME, time });
    },
    addAction: (obj) => {
      dispatch(addAction(obj));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewActionModal);
