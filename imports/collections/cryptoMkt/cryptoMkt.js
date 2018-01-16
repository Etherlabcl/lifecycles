import {Mongo} from 'meteor/mongo';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';

export const CryptoMkt = new Mongo.Collection("cryptoMkt");

let cryptoMktSchema = new SimpleSchema({
  cryptoId: {
    type: String
  },
  name: {
    type: String
  },
  symbol: {
    type: String
  },
  volume: {
    type: Number,decimal:true
  },
   bid: {
    type: Number,decimal:true
  },
   last_price: {
    type: Number,decimal:true
  },
   high: {
    type: Number,decimal:true
  },
   low: {
    type: Number,decimal:true
  },
   ask: {
    type: Number,decimal:true
  },
   market: {
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

CryptoMkt.attachSchema(cryptoMktSchema);
