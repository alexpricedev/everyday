import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';

import Actions from '../collection';
import { unauthorizedError } from '/imports/constants';

/**
 * This is a method used for updating the text
 * of an Action.
 */
Meteor.methods({
  getActions() {
    const actions = Actions.find({}).fetch();
    return actions;
  },
});
