import {Mongo} from 'meteor/mongo';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';

export const DailyStatus = new Mongo.Collection("dailyStatus");

let dailyStatusSchema = new SimpleSchema({
  userId: {
    type: String
  },
  value: {
    type: Number,
    max: 999
  },
  comment:{
    type: String
  },
  createdAt: {
    type: Date,
    autoValue() {
      return new Date();
    }
  },
  updatedAt: {
    type: Date,
    autoValue() {
      return new Date();
    }
  }
});

DailyStatus.attachSchema(dailyStatusSchema);
