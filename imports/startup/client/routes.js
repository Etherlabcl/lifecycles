import {FlowRouter} from 'meteor/kadira:flow-router';
import {BlazeLayout} from 'meteor/kadira:blaze-layout';
import {Template} from 'meteor/templating';

// Import to load these templates
import '../../ui/layouts/app-body.js';
import '../../ui/pages/app-not-found.js';

FlowRouter.route('/', {
  name: 'index',
  action() {
    BlazeLayout.render("App_body", {content: "login"});
  }
});

FlowRouter.route('/history', {
  name: 'history',
  action() {
    BlazeLayout.render("App_body", {content: "history"});
  }
});

FlowRouter.route('/dailyStatus', {
  name: 'dailyStatus',
  action() {
    BlazeLayout.render("App_body", {content: "dailyStatus"});
  }
});
