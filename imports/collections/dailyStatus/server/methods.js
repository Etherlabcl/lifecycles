import {Meteor} from 'meteor/meteor';
import {_} from 'meteor/underscore';
import {ValidatedMethod} from 'meteor/mdg:validated-method';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';

import {DailyStatus} from '/imports/collections/dailyStatus/dailyStatus.js';

Meteor.methods({
  dailyStatusInsert: function(dataObject) {
    let id = DailyStatus.insert(dataObject);
    return {ok: true}
  }
});
