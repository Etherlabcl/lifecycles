import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';

Meteor.startup(() => {
  if (!Meteor.users.findOne({username: 'admin'})) {
    var admin = {
      username: 'admin',
      email: 'admin@iit.cl',
      password: '123123',
      createdAt: new Date()
    }

    var adminId = Accounts.createUser(admin);
    Roles.addUsersToRoles(adminId, 'admin');
  }
  if (!Meteor.users.findOne({username: 'jbaeza'})) {
    var admin = {
      username: 'jbaeza',
      email: 'jbaeza@iit.cl',
      password: '123123',
      createdAt: new Date()
    }

    var adminId = Accounts.createUser(admin);
    Roles.addUsersToRoles(adminId, 'admin');
  }
});
