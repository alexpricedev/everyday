import React from 'react'
import { connect } from 'react-redux'

import { TOGGLE_ZONE, RESET_ACTIONS } from './constants';
import App from './App';
import initStore from './actions/initStore';
import toggleView from './actions/toggleView';

function mapStateToProps(state) {
  return state.app;
}

function mapDispatchToProps(dispatch) {
  return {
    initStore: () => {
      dispatch(initStore());
    },
    toggleView: () => {
      dispatch(toggleView());
    },
    toggleZone: () => {
      dispatch({ type: TOGGLE_ZONE });
    },
    reset: () => {
      dispatch({ type: RESET_ACTIONS });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
