import './registro.html';

import toastr from 'toastr';
import {Accounts} from 'meteor/accounts-base'
import {Meteor} from 'meteor/meteor';
import {Template} from 'meteor/templating';
import {FlowRouter} from 'meteor/kadira:flow-router';

Template.registro.events({
  'click #btnRegister' (e, t) {
    e.preventDefault()
    var emailOrUsername = t.find('#emailOrUsername').value;
    var password = t.find('#password').value;
    var name = emailOrUsername.match(/^([^@]*)@/)[1];

    var user = {
      name: name,
      email: emailOrUsername,
      password: password,
      createdAt: new Date()
    }
    Accounts.createUser(user, function(err) {
      if (err) {
        toastr.error(err.message)
      } else {
        toastr.success('Login Exitoso', 'Bienvenido');
        FlowRouter.go('dailyStatus');
      }

    });
  }
})
Template.registro.onRendered(function() {
  var self = this;
  self.autorun(function() {
    if (!!Meteor.user() || FlowRouter.current().path === 'register') {
      FlowRouter.go('dailyStatus');
    }
  });
});
