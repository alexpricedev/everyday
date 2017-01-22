import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

import Actions from './collection';
import { unauthorizedError } from '/imports/constants';

/**
 * This is a method used for updating the text
 * of an Action.
 */
export const updateText = {
  name: 'actions.updateText',

  validate(args) {
    new SimpleSchema({
      actionId: String,
      newText: String
    }).validate(args)
  },

  run({ actionID, newText }) {
    const action = Actions.findOne(actionId);

    if (action.userId !== this.userId) {
      throw new Meteor.Error(
        unauthorizedError,
        'You cannot edit actions that are not yours'
      );
    }

    Actions.update(actionId, {
      $set: { text: newText }
    });
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
  [updateText.name]: function (args) {
    updateText.validate.call(this, args);
    updateText.run.call(this, args);
  }
});
