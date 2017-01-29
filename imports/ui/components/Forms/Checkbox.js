import React from 'react';

import BaseInput from './BaseInput';

const Checkbox = props => {
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
      className={className || 'checkbox'}
      defaultChecked={defaultChecked}
      disabled={disabled}
      name={name}
      onChange={onChange}
      type="checkbox"
      value={value}
    />
  );
};

export default Checkbox;
