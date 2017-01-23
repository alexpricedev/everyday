import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

import { actionTypes } from './constants.js';

const Actions = new Mongo.Collection('actions');

export const ActionSchema = new SimpleSchema({
  userId: {
    type: SimpleSchema.RegEx.Id,
    autoValue: function() {
      return this.userId;
    }
  },
  text: {
    type: String,
    min: 1,
    max: 150
  },
  type: {
    type: String,
    allowedValues: actionTypes,
  },
  complete: {
    type: Boolean,
    defaultValue: false,
  },
  time: {
    type: SimpleSchema.Integer,
    label: 'Time for Timer type actions',
    optional: true,
  }
});

Actions.attachSchema(ActionSchema);

Actions.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Actions.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

export default Actions;
