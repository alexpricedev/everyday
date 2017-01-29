import React from 'react';

const Label = ({ children, htmlFor }) => (
  <label htmlFor={htmlFor}>
    {children}

    <style jsx>{`
      label {
        display: block;
        font-size: 18px;
        font-weight: 700;
        margin: 0 0 4px;
      }
    `}</style>
  </label>
);

export default Label;
