import './dailyStatus.html';

import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { subs } from '/imports/ui/lib/subs.js';
import toastr from 'toastr';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';
import swal from 'sweetalert';
import 'sweetalert/dist/sweetalert.css';
import { DailyStatus } from '/imports/collections/dailyStatus/dailyStatus.js';

var dataObject;
Template.dailyStatus.onRendered(function () {
  $('#form2').transition('hide')
;
})
Template.dailyStatus.onCreated(function () {
  var self = this;
  subs.clear();
  self.autorun(function () {
    subs.subscribe("lastStatus", Meteor.userId());
  })
  Tracker.autorun(function () {
    if (subs.ready()) {
      var ds = DailyStatus.findOne({
        'userId': Meteor.userId()
      }, {
          sort: {
            createdAt: -1
          }
        });
      if (ds.createdAt.isSameDateAs(new Date())) {
        FlowRouter.go('history');
      }
    }
  });
});
Template.dailyStatus.events({
  'click .todayVal'(e, t) {
    var userId = Meteor.userId();
    var value = e.target.value;
    var comment = "";
    dataObject = {
      'userId': userId,
      'value': value,
      'comment': comment
    };
    $('#form1').transition('fade')
    $('#form2').transition('fade')

  },
  'click #to-history'(e, t) {
    debugger;
    e.preventDefault();
    swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }, function () {
      var comment = $('#comment').val();
      dataObject.comment = ""!=comment.replace(" ","")?comment:"vacio";

      Meteor.call("dailyStatusInsert", dataObject, function (error, result) {
        if (error) {
          console.log("error", error);
        }
        if (result) {
          FlowRouter.go('history');
        }
      });
    });
  }
});

Date.prototype.isSameDateAs = function (pDate) {
  return (this.getFullYear() === pDate.getFullYear() && this.getMonth() === pDate.getMonth() && this.getDate() === pDate.getDate());
}
