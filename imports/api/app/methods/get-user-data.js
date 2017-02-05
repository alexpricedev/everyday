import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import R from 'ramda';

import Actions from '../../actions/collection';
import {
  unauthorizedError,
  morningZone,
  eveningZone
} from '/imports/constants';

/**
 * This is a method used for sending all of the user's
 * zones and actions to the client.
 */
Meteor.methods({
  getUserData() {

    if (!this.userId) {
      throw new Meteor.Error(
        unauthorizedError,
        'You cannot view data that are not yours'
      );
    }

    const actions = Actions.find({ userId: this.userId }).fetch();

    // Find the actions for each Zone
    return {
      morning: R.filter(R.propEq('zone', morningZone), actions),
      evening: R.filter(R.propEq('zone', eveningZone), actions),
    };
  },
});
