import React from 'react'

import { timerType } from '/imports/api/actions/constants';
import {
  Todo,
  Timer,
  Complete,
} from '../../components/ActionPages';
import Button from '../../components/Button';

const ActionView = props => {
  const {

    // from props
    actions,

    // from state
    activeAction,
    allComplete,

    // from dispatch
    next,
  } = props;

  if (allComplete) {
    return <Complete />;
  }

  const action = actions[activeAction];

  let page = <Todo action={action} />;

  switch (action.type) {
    case timerType:
      page = <Timer action={action} />;
      break;
  }

  return (
    <div>
      { page }

      <center>
        <Button onClick={() => next(action._id)}>
          Next
        </Button>
      </center>
    </div>
  );
};

export default ActionView;
