import React from 'react';

import BaseInput from './BaseInput';

const PasswordInput = ({ name, placeholder }) => (
  <BaseInput
    name={name}
    placeholder={placeholder}
    type="password"
  />
);

export default PasswordInput;
