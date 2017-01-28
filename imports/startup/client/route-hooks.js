import { Meteor } from 'meteor/meteor';

/**
 * A react-router onEnter hook for checking
 * if the user is logged in
 */
export function requireAuth(nextState, replace) {
  if (!Meteor.loggingIn() && !Meteor.user()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    });
  }
}

/**
 * A react-router onEnter hook for checking
 * if the user is logged in
 */
export function userLoggedIn(nextState, replace) {
  if (Meteor.loggingIn() || Meteor.user()) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    });
  }
}
