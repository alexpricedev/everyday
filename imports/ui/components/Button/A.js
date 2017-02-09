import React from 'react';
import classNames from 'classnames';

const A = props => {
  const {
    block,
    children,
    fade,
    half,
    onClick,
    start,
    stop,
    title,
  } = props;

  const cls = classNames({
    block,
    half,
    fade,
    start,
    stop,
  });

  return (
    <a
      href="#"
      className={cls}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      title={title}
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

        .half {
          display: block;
          flex: 1 0 50%;
          text-align: center;
        }

        .half:first-of-type {
          border-right: none;
        }

        .fade {
          opacity: 0.3;
        }

        .fade:hover {
          background: #ffffff;
          color: #000000;
          opacity: 0.5;
        }

        .start {
          border-color: #2ecc71;
          color: #2ecc71;
        }

        .start:hover {
          background-color: #2ecc71;
        }

        .stop {
          border-color: #e74c3c;
          color: #e74c3c;
        }

        .stop:hover {
          background-color: #e74c3c;
        }
      `}</style>
    </a>
  );
};

export default A;
