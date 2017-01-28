import React from 'react';

const Error = ({ message, margin }) => (
  <div className={margin ? 'margin' : ''}>
    { message }

    <style jsx>{`
      div {
        background: #000000;
        color: #ffffff;
        padding: 12px 20px;
        margin
      }

      .margin {
        margin-bottom: 10px;
      }
    `}</style>
  </div>
);

export default Error;
