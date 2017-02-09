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
    skip,
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

      <div className="flex">
        <Button onClick={skip} half fade>
          Skip &raquo;
        </Button>
        <Button onClick={() => next(action)} half>
          Next &rsaquo;
        </Button>
      </div>

      <style jsx>{`
        .flex {
          display: flex;
        }
      `}</style>
    </div>
  );
};

export default ActionView;
