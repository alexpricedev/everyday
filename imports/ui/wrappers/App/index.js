import React from 'react'
import { connect } from 'react-redux'

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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
