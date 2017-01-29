import React from 'react';

import BaseInput from './BaseInput';

const NumberInput = props => {
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

export default NumberInput;
