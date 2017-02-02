import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

import Actions, { ActionSchema } from '../collection';
import { unauthorizedError } from '/imports/constants';

/**
 * This is a method used for inserting a new Action
 */
export const insertAction = {
  name: 'actions.insertAction',

  validate(args) {
    ActionSchema.validate(args);
  },

  run({ zoneId, text, type, time }) {
    if (!this.userId) {
      throw new Meteor.Error(
        unauthorizedError,
        'You need to be logged in to add actions'
      );
    }

    return Actions.insert({ zoneId, text, type, time });
  },

  call(args, callback) {
    const options = {
      returnStubValue: true,
      throwStubExceptions: true
    }

    Meteor.apply(this.name, [args], options, callback);
  }
};

// Register the method with Meteor's DDP system
Meteor.methods({
  [insertAction.name]: function (args) {
    insertAction.validate.call(this, args);
    return insertAction.run.call(this, args);
  }
});
