import React from 'react';

import BaseInput from './BaseInput';

const EmailInput = props => {
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

export default EmailInput;
