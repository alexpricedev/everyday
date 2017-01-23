import R from 'ramda';
import { Either } from 'ramda-fantasy';

import { fromNullable } from './error-handling';

const actionIsUncomplete = R.propEq('complete', false);

const getNextUncompleteAction = R.curry((index, actions) => {
  return fromNullable(
    R.head(
      R.slice(
        index + 1, // Don't include current action in search
        Infinity,
        actions
      ).filter(
        actionIsUncomplete
      )
    )
  );
});

const getFirstUncompleteAction = actions =>
  fromNullable(R.head(actions.filter(actionIsUncomplete)));

export {
  actionIsUncomplete,
  getNextUncompleteAction,
  getFirstUncompleteAction,
};
