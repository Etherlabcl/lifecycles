import './history.html';

import {Meteor} from 'meteor/meteor';
import {Template} from 'meteor/templating';
import {subs} from '/imports/ui/lib/subs.js';
import toastr from 'toastr';
import {ReactiveVar} from 'meteor/reactive-var';
import {Session} from 'meteor/session';
import {DailyStatus} from '/imports/collections/dailyStatus/dailyStatus.js';
var Highcharts = require('highcharts');

Template.history.onCreated(function() {
  var self = this;
  subs.clear();
  self.autorun(function() {
    subs.subscribe("lastStatus", Meteor.userId());
    subs.subscribe("dailyStatusByUserAndDate", Meteor.userId());
  })
  Tracker.autorun(function() {
    if (subs.ready()) {
      var ds = DailyStatus.findOne({
        'userId': Meteor.userId()
      }, {
        sort: {
          createdAt: -1
        }
      });
      if (ds.createdAt.isSameDateAs(new Date())) {
        toastr.info("You already save ur daily status, come back tomorrow ....")
      }
    }
  });
});
Template.history.helpers({
  createChart: function() {
    // Gather data:
    var allStatus = DailyStatus.find();
    var valuesArray = [];
    var daysArray = [];
    allStatus.forEach(function(dailyStatus) {
      valuesArray.push(dailyStatus.value);
      daysArray.push(moment(dailyStatus.createdAt).format('LL'));
    })
    // Use Meteor.defer() to craete chart after DOM is ready:
    Meteor.defer(function() {
      // Create standard Highcharts chart with options:
      Highcharts.chart('chart', {
        chart: {
          type: 'area'
        },
        title: {
          text: 'My LifeCycle'
        },
        xAxis: {
          categories: daysArray
        },
        credits: {
          enabled: false
        },
        series: [
          {
            name: Meteor.user().username,
            data: valuesArray
          }
        ]
      });
    });

  }
});
