import React from 'react';

const A = ({ onClick, children }) => (
  <a
    href="#"
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}

    <style jsx>{`
      a {
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

      a:hover {
        background: #000000;
        color: #ffffff;
      }
    `}</style>
  </a>
);

export default A;
