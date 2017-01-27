/**
 * Publications for Actions
 */

import Actions from '../collection';

Meteor.publish('app', function() {
  /*
   *if (!this.userId) {
   *  return this.ready();
   *}
   */

  return Actions.find({
    // userId: this.userId
  });
});
