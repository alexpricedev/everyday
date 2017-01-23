import R from 'ramda';

/**
 * completeActionWithId is a mapping function that completes
 * an action if the id matches what is given. Id's are always Strings
 * @param {String} id - The id to match
 * @param {Object} action - The action object to test
 * @return {Object} action
 */
const completeActionWithId = R.curry((id, action) => {
  if(action.id === id) {
    return Object.assign({}, action, { complete: true });
  }
  return action;
});

/**
 * toggleActionWithId is a mapping function that toggles
 * the `complete` state an action if the id matches
 * what is given. Id's are always Strings.
 * @param {String} id - The id to match
 * @param {Object} action - The action object to test
 * @return {Object} action
 */
const toggleActionWithId = R.curry((id, action) => {
  if(action.id === id) {
    return Object.assign({}, action, { complete: !action.complete });
  }
  return action;
});

export {
  completeActionWithId,
  toggleActionWithId,
};
