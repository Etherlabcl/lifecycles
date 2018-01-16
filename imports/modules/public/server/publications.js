// se debe importar en el archivo
// imports/startup/server/register-api-js
// para poder usarlo
import {Meteor} from 'meteor/meteor';
import {_} from 'meteor/underscore';
import {logError} from '/imports/ui/lib/errors.js';
import {GlobalIndicator} from '/imports/collections/globalIndicators/globalIndicators.js';
import {SurBtc} from '/imports/collections/surBtc/surBtc.js';
import {CryptoMkt} from '/imports/collections/cryptoMkt/cryptoMkt.js';
import {CoinMktCap} from '/imports/collections/coinMktCap/coinMktCap.js';

Meteor.publish('allGlobalIndicators', function allGlobalIndicators() {
  return GlobalIndicator.find({ }, {
    sort: {
      createdAt: -1
    },
    limit: 1
  });
});

Meteor.publish('allSurBtc', function allSurBtc() {
  return SurBtc.find({symbol:{$in:['BTC','ETH']}}, {
    sort: {
      createdAt: -1
    },
    limit: 4
  });
});
 

Meteor.publish('allCryptoMkt', function allCryptoMkt() {
  return CryptoMkt.find({ }, {
    sort: {
      createdAt: -1
    },
    limit: 1
  }); 
});
 
Meteor.publish('allCoinMktCap', function allCoinMktCap() {
  return CoinMktCap.find({symbol:{$in:['BTC','ETH','LTC']}}, {
    sort: {
      createdAt: -1
    },
    limit: 5
  });
});
 
