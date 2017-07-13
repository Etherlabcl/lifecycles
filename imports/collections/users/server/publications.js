import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';

Meteor.publish('users', function() {
  if (Roles.userIsInRole(this.userId, 'admin')) {
    return Meteor.users.find({});
  }
});

Meteor.publish('roles', function() {
  if (Roles.userIsInRole(this.userId, 'admin')) {
    return Meteor.roles.find({});
  }
})
