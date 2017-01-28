import React from 'react'
import { connect } from 'react-redux'

import Login from './Login';
import login from './actions/login';

function mapStateToProps(state) {
  return state.login;
}

function mapDispatchToProps(dispatch) {
  return {
    login: (email, password) => {
      dispatch(login(email, password));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
