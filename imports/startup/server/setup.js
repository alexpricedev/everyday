import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  if(!Meteor.users.find().count()) {
    Accounts.createUser({
      email: 'admin@example.com',
      password: 'password'
    });
  }
});
