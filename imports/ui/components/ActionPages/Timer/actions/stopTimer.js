import {
  STOP,
} from '../constants';

const stopTimer = () => {
  return (dispatch, getState) => {
    const { timer } = getState();
    clearInterval(timer.intervalTimer)
    dispatch({ type: STOP });
  };
};

export default stopTimer;
