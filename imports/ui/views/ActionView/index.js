import React from 'react'
import { connect } from 'react-redux'

import {
  COMPLETE_ACTION,
} from '../../App/constants';
import ActionView from './ActionView';
import nextAction from './actions/nextAction';

function mapStateToProps(state, props) {
  return state.actionView;
}

function mapDispatchToProps(dispatch) {
  return {
    next: (actionId) => {
      dispatch({ type: COMPLETE_ACTION, id: actionId });
      dispatch(nextAction());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionView);
