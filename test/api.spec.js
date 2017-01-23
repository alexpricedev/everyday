import R from 'ramda';
import { expect } from 'chai';

import {
  getEdgesForUser,
  processEdge,
  getActionsForUser,
} from '../imports/helpers/api';
import {
  successfulAPIResponse,
  edges,
} from '../imports/startup/server/fixtures';

describe('The getEdgesForUser function', function() {
  const actions = getEdgesForUser(successfulAPIResponse);

  it('should get a list of the action nodes', () => {
    expect(actions.length).to.equal(3);
  });
});

describe('The processEdge function', function() {
  const actions = edges.map(processEdge);

  it('should remove the node wrapping component', () => {
    expect(actions[0].type).to.equal('todo');
  });
});

describe('The getActionsForUser function', function() {
  const actions = getActionsForUser(successfulAPIResponse);

  describe('should compose the getEdgesForUser and processEdge functions', function() {
    it('should get a list of the action nodes', () => {
      expect(actions.length).to.equal(3);
    });

    it('should remove the node wrapping component', () => {
      expect(actions[0].type).to.equal('todo');
    });
  });
});
