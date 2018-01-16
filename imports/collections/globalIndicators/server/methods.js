import {Meteor} from 'meteor/meteor';
import {_} from 'meteor/underscore';
import {ValidatedMethod} from 'meteor/mdg:validated-method';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';

import {GlobalIndicator} from '/imports/collections/globalIndicators/globalIndicators.js';

Meteor.methods({
  globalIndicatorInsert: function(dataObject) {
    let id = GlobalIndicator.insert(dataObject);
    return {ok: true}
  }
});
