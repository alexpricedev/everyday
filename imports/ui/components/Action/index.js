import React from 'react'
import { connect } from 'react-redux'

import {
  TOGGLE_ACTION,
} from '../../wrappers/App/constants';
import Action from './Action';

function mapDispatchToProps(dispatch) {
  return {
    toggleAction: (action) => {
      dispatch({ type: TOGGLE_ACTION, action });
    },
  };
}

export default connect(null, mapDispatchToProps)(Action);
