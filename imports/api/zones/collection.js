import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

const Zones = new Mongo.Collection('zones');

export const ZoneSchema = new SimpleSchema({
  userId: {
    type: SimpleSchema.RegEx.Id,
    autoValue: function() {
      return this.userId;
    }
  },
  name: String,
  actions: {
    type: Array,
    label: 'An array of actionIds',
    defaultValue: [],
    optional: true
  },
  'actions.$': String
});

Zones.attachSchema(ZoneSchema);

Zones.allow({
  insert: () => false,
  update: () => false,
  remove: () => false
});

Zones.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

export default Zones;