import React from 'react';

const BaseInput = props => {
  const {
    checked,
    className,
    defaultChecked,
    defaultValue,
    disabled,
    name,
    onChange,
    placeholder,
    type,
    value,
  } = props;

  return (
    <div>
      <input
        autoComplete="off"
        checked={checked}
        className={className || 'input'}
        defaultChecked={defaultChecked}
        defaultValue={defaultValue}
        disabled={disabled}
        id={name}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value}
      />

      <style jsx>{`
        .input {
          -webkit-appearance: none; // Remove border-radius on iOS
          background: transparent;
          border: 2px solid #000000;
          color: #000000;
          display: block;
          font-size: 16px;
          letter-spacing: 0.7px;
          margin: 0 0 4px;
          padding: 15px;
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default BaseInput;
