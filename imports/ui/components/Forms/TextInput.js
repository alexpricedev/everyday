import React from 'react';

import BaseInput from './BaseInput';

const TextInput = props => {
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

export default TextInput;
