import React from 'react'
import { connect } from 'react-redux'

import {
  SHOW_NEW_ACTION_MODAL,
  HIDE_NEW_ACTION_MODAL,
} from './constants';
import ListView from './ListView';

function mapStateToProps(state, props) {
  return {
    ...state.app,
    ...state.listView,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showNewActionModal: () => {
      dispatch({ type: SHOW_NEW_ACTION_MODAL });
    },
    hideNewActionModal: () => {
      dispatch({ type: HIDE_NEW_ACTION_MODAL });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListView);
