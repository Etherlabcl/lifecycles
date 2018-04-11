import './app-body.html';
import '/node_modules/toastr/toastr.less';
import '/imports/modules/loading/client/loading.js';
import '/imports/modules/navbar/client/navbar.js';
import '/imports/modules/accounts/login.js';
import '/imports/modules/dailyStatus/client/dailyStatus.js';
import '/imports/modules/history/client/history.js';
import '/imports/modules/accounts/registro.js';

import {Meteor} from 'meteor/meteor';
import {Template} from 'meteor/templating';

Template.App_body.helpers({
  authInProcess: function() {
    return Meteor.loggingIn();
  },
  canShow: function() {
    return !!Meteor.user();
  },
  inLogin: function() {
    if (FlowRouter.current().path === "/registro") 
      return false
    else
      return true
  }
});
