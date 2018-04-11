import './navbar.html';
import '/imports/ui/lib/global.js';

import {Meteor} from 'meteor/meteor';
import {Template} from 'meteor/templating';
import {Accounts} from 'meteor/meteor';
import {Session} from 'meteor/session';
import {FlowRouter} from 'meteor/kadira:flow-router';
import toastr from 'toastr';

Template.navbar.events({
  'click #logout' (e) {
    e.preventDefault();
    Meteor.logout(function() {
      FlowRouter.go('login')
    });
  }
});

Template.navbar.onRendered(function() {});

Template.navbar.onCreated(function() {});
