import React from 'react';

import BaseInput from './BaseInput';

const Radio = props => {
  const {
    checked,
    className,
    defaultChecked,
    disabled,
    name,
    onChange,
    value,
  } = props;

  return (
    <BaseInput
      checked={checked}
      className={className || 'radio'}
      defaultChecked={defaultChecked}
      disabled={disabled}
      name={name}
      onChange={onChange}
      type="radio"
      value={value}
    />
  );
};

export default Radio;
