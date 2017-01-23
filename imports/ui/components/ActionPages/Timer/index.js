import React from 'react'
import { connect } from 'react-redux'

import Timer from './Timer';
import {
  START,
  STOP,
  RESET,
  SET_TIMER,
} from './constants';
import startTimer  from './actions/startTimer';
import stopTimer  from './actions/stopTimer';

function mapStateToProps(state) {
  return {
    time: state.timer.currentTime,
    maxTime: state.timer.initialTime,
    timerActive: state.timer.timerActive,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    init: (time) => {
      dispatch({ type: SET_TIMER, time });
    },
    startTimer: () => {
      dispatch(startTimer());
    },
    stopTimer: () => {
      dispatch(stopTimer());
    },
    resetTimer: () => {
      dispatch({ type: RESET });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
