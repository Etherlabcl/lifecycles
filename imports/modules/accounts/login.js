import './login.html';

import toastr from 'toastr';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

Template.login.events({
  'click #btnLogin'(e, t) {
    e.preventDefault()
    var emailOrUsername = t.find('#emailOrUsername').value;
    var password = t.find('#password').value;

    Meteor.loginWithPassword(emailOrUsername, password, function (err) {
      if (err) {
        toastr.error('Error...', err.message);
      } else {
        toastr.success('Login Exitoso', 'Bienvenido');
        FlowRouter.go('dailyStatus');
      }
    });
  },
  'keyup #emailOrUsername'(e, t) {

    if (e.keyCode == 13) {
      var emailOrUsername = t.find('#emailOrUsername').value;
      var password = t.find('#password').value;

      Meteor.loginWithPassword(emailOrUsername, password, function (err) {
        if (err) {
          toastr.error('Error...', err.message);
        } else {
          toastr.success('Login Exitoso', 'Bienvenido');
          FlowRouter.go('dailyStatus');
        }
      });
    }


  },
  'keyup #password'(e, t) {

    if (e.keyCode == 13) {
      var emailOrUsername = t.find('#emailOrUsername').value;
      var password = t.find('#password').value;

      Meteor.loginWithPassword(emailOrUsername, password, function (err) {
        if (err) {
          toastr.error('Error...', err.message);
        } else {
          toastr.success('Login Exitoso', 'Bienvenido');
          FlowRouter.go('dailyStatus');
        }
      });
    }


  },
})
Template.login.onRendered(function () {
  var self = this;
  self.autorun(function () {
    if (!!Meteor.user() || FlowRouter.current().path === 'login') {
      FlowRouter.go('dailyStatus');
    }
  });
});
