import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

import Actions from '../collection';
import { unauthorizedError } from '/imports/constants';

/**
 * This is a method used for sending all fo the actions
 * for a user to the client.
 */
Meteor.methods({
  getActionsForUser() {

    if (!this.userId) {
      throw new Meteor.Error(
        unauthorizedError,
        'You cannot view actions that are not yours'
      );
    }

    return Actions.find({ userId: this.userId }).fetch();
  },
});
