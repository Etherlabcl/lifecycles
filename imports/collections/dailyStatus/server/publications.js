import {Meteor} from 'meteor/meteor';
import {DailyStatus} from '/imports/collections/dailyStatus/dailyStatus.js';
import {logError} from '/imports/ui/lib/errors.js';

Meteor.publish('dailyStatusByUserAndDate', function dailyStatusByUserAndDate(userId) {
  return DailyStatus.find({
    'userId': userId

  }, {
    sort: {
      createdAt: 1
    }
  });
});
Meteor.publish('lastStatus', function lastStatus(userId) {
  console.log('in lastStatus userId, ' + userId)

  return DailyStatus.find({
    'userId': userId
  }, {
    sort: {
      createdAt: -1
    },
    limit: 1
  });
});
/*
'createdAt': {
  $gte: date1,
  $lt: date2
}
*/
