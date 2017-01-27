import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

import Zones from '../collection';
import { unauthorizedError } from '/imports/constants';

/**
 * This is a method used for creating a zone
 */
export const createZone = {
  name: 'zones.create',

  validate(args) {
    new SimpleSchema({
      name: String,
    }).validate(args)
  },

  run({ name }) {
    if (this.userId) {
      throw new Meteor.Error(
        unauthorizedError,
        "You cannot create zones if you're not logged in"
      );
    }

    Actions.insert({ name });
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
  [createZone.name]: function (args) {
    createZone.validate.call(this, args);
    createZone.run.call(this, args);
  }
});
