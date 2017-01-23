import {
  START,
  STOP,
  DECREMENT_TIMER,
} from '../constants';

const startTimer = () => {
  return (dispatch, getState) => {
    const intervalTimer = window.setInterval(
      () => {
        const { timer } = getState();
        if (timer.currentTime > 0) {
          dispatch({ type: DECREMENT_TIMER });
        } else {
          window.clearInterval(timer.intervalTimer);
          dispatch({ type: STOP });
        }
      },
      1000
    );
    dispatch({ type: START, intervalTimer });
  };
};

export default startTimer;
