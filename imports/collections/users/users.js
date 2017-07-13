import {Mongo} from 'meteor/mongo';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';
import {Meteor} from 'meteor/meteor';

let schemasUserProfile = new SimpleSchema({
  firstName: {
    type: String,
    optional: true
  },
  lastName: {
    type: String,
    optional: true
  },
  usertype: {
    type: String,
    optional: false
  },
  tutorial: {
    type: Boolean,
    optional: false,
    defaultValue: true
  }
});

let schemasUser = new SimpleSchema({
  username: {
    type: String
  },
  emails: {
    type: [Object],
    optional: true
  },
  "emails.$.address": {
    type: String,
    regEx: SimpleSchema.RegEx.Email
  },
  "emails.$.verified": {
    type: Boolean
  },
  profile: {
    type: schemasUserProfile
  },
  services: {
    type: Object,
    optional: true,
    blackbox: true
  },
  roles: {
    type: Object,
    optional: true,
    blackbox: true
  },
  createdAt: {
    type: Date,
    autoValue() {
      return new Date();
    }
  }
});

Meteor.users.attachSchema(schemasUser);
