import React from 'react';

const B = ({ children }) => (
  <button type="submit">
    {children}

    <style jsx>{`
      button {
        background: transparent;
        border: 2px solid #000000;
        color: #000000;
        cursor: pointer;
        display: inline-block;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 14px;
        font-weight: 700;
        padding: 8px 16px;
        text-decoration: none;
        text-transform: uppercase;
      }

      button:hover {
        background: #000000;
        color: #ffffff;
      }
    `}</style>
  </button>
);

export default B;
