import {Mongo} from 'meteor/mongo';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';

export const SurBtc = new Mongo.Collection("surBtc");

let surBtcSchema = new SimpleSchema({
  cryptoId: {
    type: String
  },
  name: {
    type: String
  },
  symbol: {
    type: String
  },
  last_price_clp: {
    type: Number,decimal:true
  },
   min_ask_clp: {
    type: Number,decimal:true
  },
   max_bid: {
    type: Number,decimal:true
  },
   volume_eth: {
    type: Number,decimal:true
  },
  volume_btc: {
    type: Number,decimal:true
  },
   price_variation_24h: {
    type: Number,decimal:true
  },
   price_variation_7d: {
    type: Number,decimal:true
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

SurBtc.attachSchema(surBtcSchema);
