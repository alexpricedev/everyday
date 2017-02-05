import React from 'react'

import Button from '../../Button';

class Timer extends React.Component {
  componentDidMount() {
    this.props.init(this.props.action.time);
  }

  render() {
    const {
      action,
      time,
      maxTime,
      timerActive,
      startTimer,
      stopTimer,
      resetTimer,
    } = this.props;

    return (
      <div>
        {action.text}: {time}s

        <br />

        { !timerActive &&
          time > 0 &&
          <Button onClick={startTimer} start>
            Start
          </Button> }

        { timerActive &&
          time >= 0 &&
          <Button onClick={stopTimer} stop>
            Stop
          </Button> }

        { !timerActive &&
          time < maxTime &&
          <span className={time > 0 && 'margin'}>
            <Button onClick={resetTimer}>
              Reset
            </Button>
          </span> }

        <style jsx>{`
          div {
            font-size: 40px;
            font-weight: 700;
            margin: 0 0 20px;
            text-align: center;
          }
          .margin {
            margin-left: 10px;
          }
        `}</style>
      </div>
    );
  }
}

export default Timer;
