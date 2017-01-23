import React from 'react'

import {
  Todo,
  Timer,
  Complete,
} from '../../components/ActionPages';
import Button from '../../components/Button';

const ActionView = props => {
  const { actions, activeAction, allComplete, next } = props;

  if (allComplete) {
    return <Complete />;
  }

  const action = actions[activeAction];

  let page = <Todo action={action} />;

  switch (action.type) {
    case 'timer':
      page = <Timer action={action} />;
      break;
  }

  return (
    <div>
      { page }

      <center>
        <Button onClick={() => next(action.id)}>
          Next
        </Button>
      </center>
    </div>
  );
};

export default ActionView;
