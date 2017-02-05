import React from 'react';
import classNames from 'classnames';

const A = ({ onClick, children, block, fade }) => {
  const cls = classNames({
    block,
    fade,
  });

  return (
    <a
      href="#"
      className={cls}
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

        .block {
          display: block;
          text-align: center;
        }

        .fade {
          opacity: 0.1;
          transition: opacity 0.3s ease-in;
        }

        .fade:hover {
          background: #ffffff;
          color: #000000;
          opacity: 0.5;
        }
      `}</style>
    </a>
  );
};

export default A;
