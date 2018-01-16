import {Mongo} from 'meteor/mongo';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';

export const CoinMktCap = new Mongo.Collection("CoinMktCap");

let coinMktCapSchema = new SimpleSchema({
  cryptoId: {
    type: String
  },
  name: {
    type: String
  },
  symbol: {
    type: String
  },
  rank: {
    type: Number,
    decimal: true
  },
  price_usd: {
    type: Number,
    decimal: true
  },
  price_btc: {
    type: Number,
    decimal: true
  },
  h24_volume_usd: {
    type: Number,
    decimal: true
  },
  market_cap_usd: {
    type: Number,
    decimal: true
  },
  available_supply: {
    type: Number,
    decimal: true
  },
  total_supply: {
    type: Number,
    decimal: true
  },
  max_supply: {
    type: Number,
    decimal: true
  },
  percent_change_1h: {
    type: Number,
    decimal: true
  },
  percent_change_24h: {
    type: Number,
    decimal: true
  },
  percent_change_7d: {
    type: Number,
    decimal: true
  },
  last_updated: {
    type: Number,
    decimal: true
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

CoinMktCap.attachSchema(coinMktCapSchema);
