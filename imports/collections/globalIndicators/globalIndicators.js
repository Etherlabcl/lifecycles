import {Mongo} from 'meteor/mongo';
import {SimpleSchema} from 'meteor/aldeed:simple-schema';

export const GlobalIndicator = new Mongo.Collection("globalIndicator");

let globalIndicatorsSchema = new SimpleSchema({
  usd_now:{
    type: Number,
    decimal: true
  },
  total_market_cap_usd: {
    type: Number,
    decimal: true
  },
  totalMktCapCLP: {
    type: Number,
    decimal: true
  },
  total_24h_volume_usd: {
    type: Number,
    decimal: true
  },
  vol24HChile: {
    type: Number,
    decimal: true
  },
  active_currencies: {
    type: Number
  },
   active_assets: {
    type: Number
  },
   active_markets: {
    type: Number
  },
    last_updated: {
    type: Number
  },
  total_24h_volume_crypto_mkt: {
    type: Number,
    decimal: true
  },
  total_24h_volume_sur_btc: {
    type: Number,
    decimal: true
  },
  total_24h_volume_chile: {
    type: Number,
    decimal: true
  },
  
  bitcoin_percentage_of_market_cap: {
    type: Number,
    decimal: true
  },
  clp_percentage_of_market_cap: {
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

GlobalIndicator.attachSchema(globalIndicatorsSchema);
