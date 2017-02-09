import React from 'react';

const Label = ({ children, htmlFor, largeMargin }) => (
  <label
    className={largeMargin && 'large-margin'}
    htmlFor={htmlFor}
  >
    {children}

    <style jsx>{`
      label {
        display: block;
        font-size: 18px;
        font-weight: 700;
        margin: 0 0 4px;
      }

      .large-margin {
        margin: 0 0 10px;
      }
    `}</style>
  </label>
);

export default Label;
