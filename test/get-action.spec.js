import R from 'ramda';
import { Either } from 'ramda-fantasy';
import { expect } from 'chai';

import {
  actionIsUncomplete,
  getNextUncompleteAction,
  getFirstUncompleteAction,
} from '../imports/helpers/get-action';
import { actions } from '../imports/startup/server/fixtures';

describe('The actionIsUncomplete function', function() {
  const uncomplete = actions.filter(actionIsUncomplete);

  it('should filter out the complete questions', () => {
    expect(uncomplete.length).to.equal(2);
  });
});

describe('The getNextUncompleteAction function', function() {
  const action = getNextUncompleteAction(0, actions);
  const res = Either.either(
    x => x,
    a => a,
    action
  );

  it('should return the correct next action', () => {
    expect(res).to.equal(actions[2]);
  });
});

describe('The getFirstUncompleteAction function', function() {
  const action = getFirstUncompleteAction(actions);
  const res = Either.either(
    x => x,
    a => a,
    action
  );

  it('should return the correct first action', () => {
    expect(res).to.equal(actions[0]);
  });
});
