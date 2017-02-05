import React from 'react';

const ZoneSwitch = ({ isMorning, toggleZone }) => (
  <div>
    <a
      onClick={e => {
        e.preventDefault();
        if (!isMorning) {
          toggleZone();
        }
      }}
      href="#"
      className={isMorning ? 'morning active' : 'morning'}
    >
      Morning
    </a>

    <a
      onClick={e => {
        e.preventDefault();
        if (isMorning) {
          toggleZone();
        }
      }}
      href="#"
      className={isMorning ? 'evening' : 'evening active'}
    >
      Evening
    </a>

    <style jsx>{`
      div {
        display: flex;
        margin: 0 0 10px;
        position: relative;
        top: -10px;
      }

      a {
        border: 2px solid #000000;
        color: #000000;
        flex: 1 0 50%;
        padding: 10px 0;
        text-align: center;
        text-decoration: none;
      }

      .active {
        background: #000000;
        color: #ffffff;
      }

    `}</style>
  </div>
);

export default ZoneSwitch;
