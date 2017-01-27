import React from 'react';

export const Group = ({ children }) => (
  <div>
    {children}

    <style jsx>{`
      div {
        margin: 0 0 20px;
      }
    `}</style>
  </div>
);

export const Label = ({ children, htmlFor }) => (
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

export const BaseInput = props => {
  const {
    checked,
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
        className="input"
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
        input {
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

export const TextInput = props => {
  const {
    defaultValue,
    disabled,
    name,
    onChange,
    placeholder,
    value,
  } = props;

  return (
    <BaseInput
      defaultValue={defaultValue}
      disabled={disabled}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      type="text"
      value={value}
    />
  );
};

export const EmailInput = props => {
  const {
    defaultValue,
    name,
    onChange,
    placeholder,
    value,
  } = props;

  return (
    <BaseInput
      defaultValue={defaultValue}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      type="email"
      value={value}
    />
  );
};

export const PasswordInput = ({ name, placeholder }) => (
  <BaseInput
    name={name}
    placeholder={placeholder}
    type="password"
  />
);

export const NumberInput = props => {
  const {
    defaultValue,
    name,
    onChange,
    placeholder,
    value,
  } = props;

  return (
    <BaseInput
      defaultValue={defaultValue}
      name={name}
      onChange={onChange}
      type="number"
      value={value}
    />
  );
};
