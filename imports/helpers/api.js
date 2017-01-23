import R from 'ramda';
import { Maybe } from 'ramda-fantasy';

const getEdgesForUser = res =>
  Maybe(R.prop('data', res))
    .chain(d => Maybe(R.prop('getUser', d)))
    .chain(u => Maybe(R.prop('actions', u)))
    .chain(a => Maybe(R.prop('edges', a)))
    .getOrElse([]);

const processEdge = R.prop('node');

const getActionsForUser = R.compose(
  R.map(processEdge),
  getEdgesForUser
);

export {
  getEdgesForUser,
  processEdge,
  getActionsForUser,
};
