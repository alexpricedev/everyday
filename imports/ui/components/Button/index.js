import React from 'react';

import A from './A';
import B from './B';

const Button = ({ submit, ...rest }) => {
  if (submit) {
    return <B {...rest} />;
  } else {
    return <A {...rest} />;
  }
};

export default Button;
