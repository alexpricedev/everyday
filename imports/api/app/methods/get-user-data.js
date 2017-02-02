import { Meteor } from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';
import R from 'ramda';

import Zones from '../../zones/collection';
import Actions from '../../actions/collection';
import { unauthorizedError } from '/imports/constants';

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

    const zones = Zones.find({ userId: this.userId }).fetch();
    const actions = Actions.find({ userId: this.userId }).fetch();

    // Find the actions for each Zone
    const zonesWithActions = zones.map(zone => {
      zone.actions = R.filter(R.propEq('zoneId', zone._id), actions);
      return zone;
    });

    console.log(zones);
    console.log(zonesWithActions);

    return zonesWithActions;
  },
});
