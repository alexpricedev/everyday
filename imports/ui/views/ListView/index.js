import React from 'react'
import { connect } from 'react-redux'

import ListView from './ListView';

function mapStateToProps(state, props) {
  return state.actionView;
}

export default connect(mapStateToProps)(ListView);
