import React from 'react'
import { connect } from 'react-redux'

import App from './App';
import toggleView from './actions/toggleView';

function mapStateToProps(state) {
  return state.app;
}

function mapDispatchToProps(dispatch) {
  return {
    toggleView: () => {
      dispatch(toggleView());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
