import './registro.html';

import toastr from 'toastr';
import { Accounts } from 'meteor/accounts-base'
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

Template.registro.events({
  'click #btnRegister'(e, t) {
    e.preventDefault()
    var mail = t.find('#emailOrUsername').value;
    var password = t.find('#password').value;
    if (validateEmail(mail) && password.length > 0) {
      var name = mail.match(/^([^@]*)@/)[1];
      var user = {
        name: name,
        email: mail,
        password: password,
        createdAt: new Date()
      }
      Accounts.createUser(user, function (err) {
        if (err) {
          toastr.error(err.message)
        } else {
          toastr.success('Login Success', 'Welcome');
          FlowRouter.go('dailyStatus');
        }
      });
    } else {
      toastr.error("Form incomplete or invalid email")
    }
  }
})
Template.registro.onRendered(function () {
  var self = this;
  self.autorun(function () {
    if (!!Meteor.user() || FlowRouter.current().path === 'register') {
      FlowRouter.go('dailyStatus');
    }
  });
});
