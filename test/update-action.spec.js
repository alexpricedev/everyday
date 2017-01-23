import R from 'ramda';
import { expect } from 'chai';

import {
  completeActionWithId,
  toggleActionWithId,
} from '../imports/helpers/update-action';
import { actions } from '../imports/startup/server/fixtures';

describe('The completeActionWithId function', function() {
  const _actions = actions.map(completeActionWithId(actions[0].id));

  it('should change the complete property to true', () => {
    expect(_actions[0].complete).to.be.true;
  });
});

describe('The toggleActionWithId function', function() {
  it('should change a false complete property to true', () => {
    const _actions = actions.map(toggleActionWithId(actions[0].id));
    expect(_actions[0].complete).to.be.true;
  });

  it('should change a true complete property to false', () => {
    const _actions = actions.map(toggleActionWithId(actions[1].id));
    expect(_actions[1].complete).to.be.false;
  });
});
